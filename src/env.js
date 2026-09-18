// Renderer, sky, sun, image-based lighting, fog, mist and post-processing.
import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { rng } from './util.js';

export const SUN_DIR = new THREE.Vector3(0.80, 0.52, -0.30).normalize();
export const FOG_COLOR = new THREE.Color(0xa9c2d6);

// time of day.  SUN_DIR / FOG_COLOR are shared objects: a mood copies into them.
export const MOODS = {
  day: {
    sun: [0.80, 0.52, -0.30], sunColor: 0xfff0dc, sunI: 3.4, hemiSky: 0xcfe6ff, hemiGround: 0x1d3440, hemiI: 0.3,
    turbidity: 3.2, rayleigh: 1.7, mie: 0.0035, mieG: 0.8, clouds: [0.42, 0.5], exposure: 0.58, fog: 0xa9c2d6, fogD: 0.00085,
    envI: 0.85, seaSun: [1.0, 0.92, 0.8], seaBody: 1.0, mist: 0xc9d6de,
  },
  // low golden sun ahead of you as you cross the bridge (north-west), warm light, colony lamps glowing
  sunset: {
    sun: [-0.42, 0.075, -0.9], sunColor: 0xffa35c, sunI: 2.6, hemiSky: 0x8e9fc4, hemiGround: 0x2b2630, hemiI: 0.42,
    turbidity: 7.5, rayleigh: 2.6, mie: 0.007, mieG: 0.9, clouds: [0.66, 0.72], exposure: 0.72, fog: 0x8d93a6, fogD: 0.0011,
    envI: 0.75, seaSun: [1.0, 0.6, 0.32], seaBody: 0.8, mist: 0xb7a9a8,
  },
};

// final grade: vignette, slight cool lift in shadows, film grain
const GradeShader = {
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uVignette: { value: 0.32 }, uGrain: { value: 0.035 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uTime; uniform float uVignette; uniform float uGrain; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 q = vUv - 0.5;
      float v = 1.0 - dot(q, q) * uVignette * 2.2;
      c.rgb *= v;
      // gentle filmic contrast + a little saturation
      c.rgb = mix(c.rgb, c.rgb * c.rgb * (3.0 - 2.0 * c.rgb), 0.22);
      float g0 = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb = mix(vec3(g0), c.rgb, 1.12);
      float l = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb += vec3(-0.012, 0.004, 0.02) * (1.0 - smoothstep(0.0, 0.5, l));
      c.rgb += (h(vUv * 1000.0 + uTime) - 0.5) * uGrain;
      gl_FragColor = c;
    }`,
};

export function makeRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.58;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  return renderer;
}

export function makeSky(scene, renderer) {
  const sky = new Sky();
  sky.scale.setScalar(9000);
  const u = sky.material.uniforms;
  u.turbidity.value = 3.2;
  u.rayleigh.value = 1.7;
  u.mieCoefficient.value = 0.0035;
  u.mieDirectionalG.value = 0.8;
  u.sunPosition.value.copy(SUN_DIR).multiplyScalar(1000);
  if (u.cloudCoverage) { u.cloudCoverage.value = 0.42; u.cloudDensity.value = 0.5; u.cloudScale.value = 0.00022; u.cloudElevation.value = 0.55; u.cloudSpeed.value = 0.00006; }
  sky.frustumCulled = false;
  sky.name = 'sky';
  // the visible sky writes alpha 0 so the bloom pass can ignore it (no milky
  // veil around the sun); everything drawn over it writes alpha > 0
  sky.material.fragmentShader = sky.material.fragmentShader.replace('gl_FragColor = vec4( texColor, 1.0 );', 'gl_FragColor = vec4( texColor, 0.0 );');
  sky.material.needsUpdate = true;
  scene.add(sky);

  // environment: render the sky (plus a haze band) into a cube for the ocean,
  // and into a PMREM for every PBR material
  const envScene = new THREE.Scene();
  const sky2 = new Sky(); sky2.scale.setScalar(9000);
  for (const k in u) if (sky2.material.uniforms[k]) sky2.material.uniforms[k].value = (u[k].value && u[k].value.clone) ? u[k].value.clone() : u[k].value;
  // no sun disc in the image light: glossy floors indoors must not mirror the sun
  if (sky2.material.uniforms.showSunDisc) sky2.material.uniforms.showSunDisc.value = 0;
  // ...and a much softer sun halo, so glossy surfaces reflect sky rather than glare
  const u2 = sky2.material.uniforms;
  u2.mieCoefficient.value = 0.0006; u2.mieDirectionalG.value = 0.55; u2.turbidity.value = 3.0;
  envScene.add(sky2);
  // soft haze band at the horizon so reflections match the fogged distance
  const band = new THREE.Mesh(new THREE.CylinderGeometry(4000, 4000, 900, 32, 1, true),
    new THREE.MeshBasicMaterial({ color: FOG_COLOR.clone().multiplyScalar(1.6), side: THREE.BackSide, transparent: true, opacity: 0.55, depthWrite: false }));
  band.position.y = -100; envScene.add(band);
  const cubeRT = new THREE.WebGLCubeRenderTarget(256, { type: THREE.HalfFloatType, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter });
  const cubeCam = new THREE.CubeCamera(1, 20000, cubeRT);
  cubeCam.update(renderer, envScene);
  const pmrem = new THREE.PMREMGenerator(renderer);
  let envRT = pmrem.fromScene(envScene, 0, 1, 20000);
  scene.environment = envRT.texture;
  scene.environmentIntensity = 0.85;
  // switch time of day: sky, image light and reflection cube are rebuilt
  const setMood = (m) => {
    for (const U of [u, u2]) {
      U.sunPosition.value.copy(SUN_DIR).multiplyScalar(1000);
      U.rayleigh.value = m.rayleigh;
      if (U.cloudCoverage) { U.cloudCoverage.value = m.clouds[0]; U.cloudDensity.value = m.clouds[1]; }
    }
    u.turbidity.value = m.turbidity; u.mieCoefficient.value = m.mie; u.mieDirectionalG.value = m.mieG;
    u2.turbidity.value = m.turbidity * 0.9; u2.mieCoefficient.value = m.mie * 0.2; u2.mieDirectionalG.value = 0.55;
    band.material.color.copy(FOG_COLOR).multiplyScalar(1.6);
    cubeCam.update(renderer, envScene);
    const old = envRT; envRT = pmrem.fromScene(envScene, 0, 1, 20000); scene.environment = envRT.texture; old.dispose();
    scene.environmentIntensity = m.envI;
  };
  return { sky, envCube: cubeRT.texture, get envMap() { return envRT.texture; }, setMood };
}

export function makeSun(scene) {
  const sun = new THREE.DirectionalLight(0xfff0dc, 3.4);
  sun.position.copy(SUN_DIR).multiplyScalar(200);
  sun.castShadow = true;
  sun.shadow.mapSize.set(4096, 4096);
  const s = sun.shadow.camera; s.left = -75; s.right = 75; s.top = 75; s.bottom = -75; s.near = 1; s.far = 520;
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.04;
  scene.add(sun); scene.add(sun.target);
  const hemi = new THREE.HemisphereLight(0xcfe6ff, 0x1d3440, 0.3);
  scene.add(hemi);
  const tmp = new THREE.Vector3();
  return {
    sun, hemi,
    follow(p) {
      // snap to shadow texels so edges don't shimmer
      const texel = (s.right - s.left) / sun.shadow.mapSize.x;
      tmp.set(Math.round(p.x / texel) * texel, Math.round(p.y / texel) * texel * 0 + 8, Math.round(p.z / texel) * texel);
      sun.target.position.copy(tmp);
      sun.position.copy(tmp).addScaledVector(SUN_DIR, 260);
    },
    setMood(m) { sun.color.set(m.sunColor); sun.intensity = m.sunI; hemi.color.set(m.hemiSky); hemi.groundColor.set(m.hemiGround); hemi.intensity = m.hemiI; },
    setShadowSize(n) {
      if (!n) { sun.castShadow = false; return; }
      sun.castShadow = true;
      if (sun.shadow.mapSize.x !== n) { sun.shadow.mapSize.set(n, n); if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; } }
    },
  };
}

// drifting sea mist: big soft billboards that fade with camera distance
export function makeMist(scene, tex) {
  const R = rng(77);
  const group = new THREE.Group(); group.name = 'mist';
  const mat = new THREE.SpriteMaterial({ map: tex, color: 0xc9d6de, transparent: true, opacity: 0.2, depthWrite: false, fog: false });
  const sprites = [];
  for (let i = 0; i < 70; i++) {
    const a = R() * Math.PI * 2, d = 260 + Math.pow(R(), 0.7) * 900;
    const s = new THREE.Sprite(mat.clone());
    const sc = 120 + R() * 260;
    s.scale.set(sc * 2.2, sc * 0.55, 1);
    s.position.set(Math.sin(a) * d, 4 + R() * 26, Math.cos(a) * d);
    s.material.opacity = 0.05 + R() * 0.09;
    s.material.rotation = (R() - 0.5) * 0.2;
    s.userData = { base: s.material.opacity, drift: 0.6 + R() * 1.2, a, d };
    group.add(s); sprites.push(s);
  }
  scene.add(group);
  return {
    group,
    setColor(c) { for (const s of sprites) s.material.color.set(c); },
    update(dt, cam) {
      for (const s of sprites) {
        s.userData.a += dt * s.userData.drift / s.userData.d;
        s.position.x = Math.sin(s.userData.a) * s.userData.d;
        s.position.z = Math.cos(s.userData.a) * s.userData.d;
        const dist = s.position.distanceTo(cam.position);
        // haze only reads as haze near the horizon; seen from above it turns into blotches
        const above = Math.min(1, Math.max(0, 1 - (cam.position.y - s.position.y) / (dist * 0.18 + 1)));
        s.material.opacity = s.userData.base * Math.min(1, Math.max(0, (dist - 180) / 260)) * above;
      }
    },
  };
}

export function makeComposer(renderer, scene, camera) {
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  // the scene's own depth is kept in a texture so ambient occlusion can reuse
  // it instead of drawing the whole colony a second time
  const depth = new THREE.DepthTexture(size.x, size.y, THREE.FloatType);
  const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: 4, depthTexture: depth });
  const composer = new EffectComposer(renderer, rt);
  composer.renderTarget2.depthTexture.dispose();
  composer.renderTarget2.depthTexture = depth; // both ping-pong targets share it, whichever the scene lands in
  const render = new RenderPass(scene, camera);
  composer.addPass(render);
  // ambient occlusion: soft contact shadows in corners, under furniture, where
  // walls meet floors.  It works from the depth of the main pass, so glass and
  // glows (which do not write depth) are ignored and nothing is drawn twice.
  const ao = new GTAOPass(scene, camera, size.x, size.y);
  ao.setGBuffer(depth); // normals are rebuilt from depth
  ao.updateGtaoMaterial({ radius: 2.2, distanceExponent: 1.6, thickness: 2.0, scale: 1.35, samples: 12, distanceFallOff: 0.5, screenSpaceRadius: false });
  ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 5, rings: 2, samples: 12 });
  ao.blendIntensity = 0.9;
  composer.addPass(ao);
  const bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.42, 0.18, 3.0);
  // clamped, soft-knee high pass: sun glints and lamp hot spots stop fogging the frame
  bloom.materialHighPassFilter.fragmentShader = `
    uniform sampler2D tDiffuse; uniform float luminosityThreshold; uniform float smoothWidth; varying vec2 vUv;
    void main() {
      vec4 t = texture2D(tDiffuse, vUv);
      vec3 c = t.rgb * clamp(t.a, 0.0, 1.0);
      if (any(isnan(c))) c = vec3(0.0);
      c = min(c, vec3(12.0));
      float v = max(c.r, max(c.g, c.b));
      // white / greyish pixels (sky near the sun, sunlit panels) need to be far
      // brighter than coloured lights before they glow
      float sat = (v - min(c.r, min(c.g, c.b))) / max(v, 1e-4);
      float thr = luminosityThreshold * mix(3.2, 1.0, smoothstep(0.12, 0.55, sat));
      float k = max(v - thr, 0.0);
      k = k * k / (k + smoothWidth);
      gl_FragColor = vec4(c * (k / max(v, 1e-4)), 1.0);
    }`;
  bloom.materialHighPassFilter.needsUpdate = true;
  bloom.highPassUniforms.smoothWidth.value = 1.5;
  // keep the glow tight around the light source (the widest mips cause a milky veil)
  bloom.compositeMaterial.uniforms.bloomFactors.value = [1.0, 0.75, 0.4, 0.16, 0.05];
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  const grade = new ShaderPass(GradeShader);
  composer.addPass(grade);
  return { composer, bloom, grade, rt, ao };
}
