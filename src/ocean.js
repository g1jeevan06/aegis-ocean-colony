// Calm open ocean: Gerstner swell in the vertex shader, three scrolling detail
// normal layers, planar reflection (Reflector) or sky-cube reflection, sun
// glitter, subsurface tint, hull foam and cyan-green glows from the sensor
// buoys and sea drones beneath the surface.
import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';

export const MAX_GLOWS = 52;
// swell components (direction, steepness, wavelength) - must match the vertex shader
const WAVES = [[1, 0.35, 0.10, 92], [0.6, -0.9, 0.08, 57], [-0.3, 1, 0.07, 34], [0.9, 0.9, 0.05, 21], [-1, 0.2, 0.04, 13]].map(([x, z, s, l]) => { const n = Math.hypot(x, z); return [x / n, z / n, s, l]; });

const vert = /* glsl */`
uniform float uTime;
uniform mat4 textureMatrix;
varying vec3 vWorld;
varying vec4 vRefl;
varying vec3 vNrm;
varying float vCrest;
#include <fog_pars_vertex>

// direction(xy) steepness wavelength
const int NW = 5;
vec4 W[5];
void main() {
  W[0] = vec4(normalize(vec2(1.0, 0.35)), 0.10, 92.0);
  W[1] = vec4(normalize(vec2(0.6, -0.9)), 0.08, 57.0);
  W[2] = vec4(normalize(vec2(-0.3, 1.0)), 0.07, 34.0);
  W[3] = vec4(normalize(vec2(0.9, 0.9)), 0.05, 21.0);
  W[4] = vec4(normalize(vec2(-1.0, 0.2)), 0.04, 13.0);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec3 p = wp.xyz;
  // flatten swell under / beside the platforms (sheltered water)
  float dC = length(p.xz);
  float calm = mix(0.35, 1.0, smoothstep(60.0, 180.0, dC));
  float far = 1.0 - smoothstep(1500.0, 3200.0, length(p.xz - cameraPosition.xz));
  vec3 d = vec3(0.0);
  vec3 T = vec3(1.0, 0.0, 0.0), B = vec3(0.0, 0.0, 1.0);
  for (int i = 0; i < NW; i++) {
    vec2 dir = W[i].xy; float st = W[i].z * calm * far; float L = W[i].w;
    float k = 6.2831853 / L; float c = sqrt(9.8 / k); float a = st / k;
    float f = k * (dot(dir, p.xz) - c * uTime);
    float sf = sin(f), cf = cos(f);
    d.x += dir.x * a * cf; d.z += dir.y * a * cf; d.y += a * sf;
    T += vec3(-dir.x * dir.x * st * sf, dir.x * st * cf, -dir.x * dir.y * st * sf);
    B += vec3(-dir.x * dir.y * st * sf, dir.y * st * cf, -dir.y * dir.y * st * sf);
  }
  vNrm = normalize(cross(B, T));
  vCrest = d.y;
  vec3 local = position + vec3(d.x, -d.z, d.y);
  vRefl = textureMatrix * vec4(local, 1.0);
  vWorld = p + d;
  vec4 mvPosition = viewMatrix * vec4(vWorld, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`;

const frag = /* glsl */`
uniform float uTime;
uniform sampler2D tNormal;
uniform sampler2D tRefl;
uniform samplerCube tEnv;
uniform float uPlanar;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform vec3 uGlowColor;
uniform vec4 uGlows[${MAX_GLOWS}];
uniform vec4 uFoamDiscs[8];
uniform vec2 uReflTexel;
varying vec3 vWorld;
varying vec4 vRefl;
varying vec3 vNrm;
varying float vCrest;
#include <fog_pars_fragment>

float octSDF(vec2 p, float a) {
  float m = -1e9;
  for (int k = 0; k < 8; k++) { float t = float(k) * 0.78539816; m = max(m, dot(p, vec2(sin(t), cos(t)))); }
  return m - a;
}
void main() {
  vec2 uv = vWorld.xz;
  vec3 n1 = texture2D(tNormal, uv * 0.010 + vec2(uTime * 0.0060, uTime * 0.0035)).xyz * 2.0 - 1.0;
  vec3 n2 = texture2D(tNormal, uv * 0.031 + vec2(-uTime * 0.0090, uTime * 0.0060)).xyz * 2.0 - 1.0;
  vec3 n3 = texture2D(tNormal, uv * 0.093 + vec2(uTime * 0.0200, -uTime * 0.0150)).xyz * 2.0 - 1.0;
  vec3 n4 = texture2D(tNormal, uv * 0.270 + vec2(-uTime * 0.0350, -uTime * 0.0300)).xyz * 2.0 - 1.0;
  vec2 dn = n1.xy * 0.55 + n2.xy * 0.45 + n3.xy * 0.30 + n4.xy * 0.18;
  float dist = length(cameraPosition - vWorld);
  float fade = 1.0 - smoothstep(120.0, 1400.0, dist) * 0.75;
  vec3 N = normalize(vNrm + vec3(dn.x, 0.0, dn.y) * 0.55 * fade);
  vec3 V = normalize(cameraPosition - vWorld);
  float NdV = max(dot(N, V), 0.0);
  float fres = 0.02 + 0.98 * pow(1.0 - NdV, 5.0);

  vec3 R = reflect(-V, N); R.y = abs(R.y);
  vec3 refl = textureCube(tEnv, R).rgb;
  if (uPlanar > 0.5) {
    // ripples break the mirror image up (clouds become broken streaks, not flat patches)
    vec2 ruv = vRefl.xy / vRefl.w + (N.xz * 0.05 + dn * 0.035) * fade;
    // five-tap blur: a wavy sea never gives a pin-sharp mirror, and it hides
    // the stair-steps of the lower-resolution reflection target
    vec2 o = uReflTexel * (1.4 + min(dist * 0.004, 2.5));
    vec3 pr = texture2D(tRefl, ruv).rgb * 0.36
      + (texture2D(tRefl, ruv + vec2(o.x, o.y)).rgb + texture2D(tRefl, ruv + vec2(-o.x, o.y)).rgb
       + texture2D(tRefl, ruv + vec2(o.x, -o.y)).rgb + texture2D(tRefl, ruv + vec2(-o.x, -o.y)).rgb) * 0.16;
    refl = mix(refl, pr, 0.92);
  }

  // body colour: deeper looking straight down, bright teal in wave faces
  vec3 body = mix(uShallow, uDeep, pow(NdV, 0.45));
  float sunUp = max(uSunDir.y, 0.0);
  body *= 0.35 + 0.65 * sunUp;
  float sss = pow(max(dot(V, -uSunDir) * 0.5 + 0.5, 0.0), 3.0) * max(vCrest + 0.4, 0.0);
  body += uShallow * sss * 0.6;

  // glows under the surface (sensor buoys / sea drones)
  vec3 glow = vec3(0.0);
  for (int i = 0; i < ${MAX_GLOWS}; i++) {
    vec4 g = uGlows[i];
    if (g.w <= 0.0) continue;
    vec2 q = vWorld.xz - g.xz;
    float r2 = dot(q, q);
    glow += uGlowColor * g.w * (exp(-r2 / (g.y * g.y)) * 1.0 + exp(-r2 / (g.y * g.y * 8.0)) * 0.07);
  }

  // foam hugging the hulls
  float dh = octSDF(vWorld.xz, 54.6);
  float foamMask = 1.0 - smoothstep(0.0, 3.0, abs(dh));
  for (int i = 0; i < 8; i++) {
    vec4 f = uFoamDiscs[i];
    if (f.w <= 0.0) continue;
    float df = length(vWorld.xz - f.xy) - f.z;
    foamMask = max(foamMask, (1.0 - smoothstep(0.0, 2.2, abs(df))) * f.w);
  }
  float fn = texture2D(tNormal, uv * 0.21 + vec2(uTime * 0.012, -uTime * 0.008)).r;
  float fn2 = texture2D(tNormal, uv * 0.07 - vec2(uTime * 0.006)).g;
  float foam = foamMask * smoothstep(0.52, 0.78, fn * 0.6 + fn2 * 0.4 + foamMask * 0.25 + vCrest * 0.3) * (1.0 - smoothstep(150.0, 600.0, dist));
  // whitecaps: broken foam on the tallest crests, streaked along the wind
  // only small broken patches right on the sharpest crests, never whole swells
  float fn3 = texture2D(tNormal, uv * 0.43 + vec2(uTime * 0.03, -uTime * 0.02)).g; // r/g vary around 0.5; b is ~1 everywhere
  float fn4 = texture2D(tNormal, uv * 0.19 - vec2(uTime * 0.012, uTime * 0.018)).r;
  float crest = smoothstep(0.9, 1.5, vCrest);
  float cap = crest * smoothstep(0.6, 0.72, fn3 * 0.55 + fn4 * 0.45) * (1.0 - smoothstep(180.0, 900.0, dist));
  foam = max(foam, cap * 0.75);

  vec3 H = normalize(uSunDir + V);
  float NdH = max(dot(N, H), 0.0);
  float spec = pow(NdH, 900.0) * 9.0 + pow(NdH, 120.0) * 0.35;

  vec3 col = mix(body + glow * (1.0 - fres * 0.5), refl, fres);
  col += uSunColor * spec * sunUp * 1.2;
  col = mix(col, vec3(0.85, 0.9, 0.92) * (0.4 + 0.6 * sunUp), foam * 0.7);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;

export function makeOcean(renderer, envCube, waterNormals, sunDir, quality) {
  const size = 7000, segs = 360;
  const geo = new THREE.PlaneGeometry(size, size, segs, segs);
  const refl = new Reflector(geo, {
    textureWidth: 512, textureHeight: 512, clipBias: 0.002, multisample: 0,
  });
  const tm = refl.material.uniforms.textureMatrix.value;
  const rt = refl.getRenderTarget();
  refl.material.dispose();
  const glows = []; for (let i = 0; i < MAX_GLOWS; i++) glows.push(new THREE.Vector4(0, 4, 0, 0));
  const discs = []; for (let i = 0; i < 8; i++) discs.push(new THREE.Vector4(0, 0, 0, 0));
  const uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib.fog, {
    uTime: { value: 0 },
    tNormal: { value: null },
    tRefl: { value: null },
    tEnv: { value: null },
    uPlanar: { value: 1 },
    textureMatrix: { value: null },
    uSunDir: { value: sunDir.clone() },
    uSunColor: { value: new THREE.Color(1.0, 0.92, 0.8) },
    uDeep: { value: new THREE.Color(0.003, 0.032, 0.075) },
    uShallow: { value: new THREE.Color(0.015, 0.14, 0.22) },
    uGlowColor: { value: new THREE.Color(0.2, 1.0, 0.8) },
    uGlows: { value: glows },
    uFoamDiscs: { value: discs },
    uReflTexel: { value: new THREE.Vector2(1 / 512, 1 / 512) },
  }]);
  // merge clones values; re-attach the shared references
  uniforms.tNormal.value = waterNormals;
  uniforms.tRefl.value = rt.texture;
  uniforms.tEnv.value = envCube;
  uniforms.textureMatrix.value = tm;
  uniforms.uGlows.value = glows;
  uniforms.uFoamDiscs.value = discs;
  const mat = new THREE.ShaderMaterial({ uniforms, vertexShader: vert, fragmentShader: frag, fog: true });
  refl.material = mat;
  refl.rotation.x = -Math.PI / 2;
  refl.frustumCulled = false;
  refl.name = 'ocean';
  refl.receiveShadow = false;
  const origBefore = refl.onBeforeRender;
  const ocean = {
    mesh: refl, uniforms, glows, discs, rt,
    setPlanar(on, res = 0.5) {
      uniforms.uPlanar.value = on ? 1 : 0;
      refl.onBeforeRender = on ? origBefore : () => {};
      this.res = res;
    },
    resize(w, h) { if (this.res) { const x = Math.max(64, (w * this.res) | 0), y = Math.max(64, (h * this.res) | 0); rt.setSize(x, y); uniforms.uReflTexel.value.set(1 / x, 1 / y); } },
    // water height at a point (same swell as the vertex shader, near field)
    heightAt(x, z) {
      const t = uniforms.uTime.value, calm = 0.35 + 0.65 * Math.min(1, Math.max(0, (Math.hypot(x, z) - 60) / 120));
      let y = 0;
      for (const [dx, dz, st, L] of WAVES) { const k = 2 * Math.PI / L, c = Math.sqrt(9.8 / k); y += (st * calm / k) * Math.sin(k * (dx * x + dz * z - c * t)); }
      return y;
    },
    update(t, cam) {
      uniforms.uTime.value = t;
      // follow the camera on a coarse grid so the swell does not swim
      const cell = size / segs;
      refl.position.set(Math.round(cam.position.x / cell) * cell, 0, Math.round(cam.position.z / cell) * cell);
    },
  };
  ocean.setPlanar(quality >= 2, quality >= 3 ? 0.6 : 0.4);
  return ocean;
}
