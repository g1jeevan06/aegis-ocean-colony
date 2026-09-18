// Below the waterline: the seabed 38 m down, the colony's support legs with
// their lit machinery pods, rocks, coral and kelp (static, via the Builder),
// plus everything that only exists while the camera is under water: the
// rippled surface seen from below, sun shafts, drifting plankton, fish
// schools and an inspection ROV.
import * as THREE from 'three';
import { G } from './builder.js';
import { circlePts, rng, sectorToWorld } from './util.js';
import { SATS, satOutline } from './satellites.js';

export const SEABED = -38;
const R = rng(3838);

function canvasTex(size, draw, srgb = true) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  draw(c.getContext('2d'), size);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4;
  return t;
}
function blots(g, s, n, rMin, rMax, cols) {
  for (let i = 0; i < n; i++) {
    const x = R() * s, y = R() * s, r = rMin + R() * (rMax - rMin);
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    const c = cols[(R() * cols.length) | 0];
    gr.addColorStop(0, c); gr.addColorStop(1, c.replace(/[\d.]+\)$/, '0)'));
    g.fillStyle = gr; for (const ox of [-s, 0, s]) for (const oy of [-s, 0, s]) g.fillRect(x - r + ox, y - r + oy, r * 2, r * 2);
  }
}

export function underwaterMaterials(M) {
  const sand = canvasTex(512, (g, s) => {
    g.fillStyle = '#5b6a5e'; g.fillRect(0, 0, s, s);
    blots(g, s, 260, 6, 40, ['rgba(40,52,46,0.35)', 'rgba(110,118,98,0.3)', 'rgba(70,86,70,0.3)', 'rgba(30,36,34,0.4)']);
    for (let i = 0; i < 3000; i++) { g.fillStyle = `rgba(${(R() * 60 + 120) | 0},${(R() * 60 + 120) | 0},${(R() * 40 + 100) | 0},0.35)`; g.fillRect(R() * s, R() * s, 1.5, 1.5); }
  });
  // caustics: bright wavy net of light from the surface, animated by offset
  const caustic = canvasTex(256, (g, s) => {
    g.fillStyle = '#000'; g.fillRect(0, 0, s, s);
    g.strokeStyle = 'rgba(255,255,255,0.55)';
    for (let i = 0; i < 90; i++) {
      g.lineWidth = 1 + R() * 2.5; g.beginPath();
      const x = R() * s, y = R() * s, r = 12 + R() * 34, a = R() * 6;
      for (const ox of [-s, 0, s]) for (const oy of [-s, 0, s]) { g.moveTo(x + ox + Math.cos(a) * r, y + oy + Math.sin(a) * r); g.arc(x + ox, y + oy, r, a, a + 1.5 + R() * 2); }
      g.stroke();
    }
  }, false);
  const rockT = canvasTex(256, (g, s) => {
    g.fillStyle = '#3d4541'; g.fillRect(0, 0, s, s);
    blots(g, s, 160, 4, 26, ['rgba(20,26,24,0.5)', 'rgba(90,96,80,0.35)', 'rgba(60,84,64,0.4)']);
  });
  const std = (o) => new THREE.MeshStandardMaterial(o);
  const U = {
    sand: std({ color: 0xffffff, map: sand, roughness: 1, metalness: 0, emissive: 0x3ad6d0, emissiveMap: caustic, emissiveIntensity: 0.22 }),
    rock: std({ color: 0xffffff, map: rockT, roughness: 1, metalness: 0, emissive: 0x3ad6d0, emissiveMap: caustic, emissiveIntensity: 0.16 }),
    leg: std({ color: 0x6b7672, map: rockT, roughness: 0.95, metalness: 0.3 }),
    legBand: std({ color: 0x2f3634, roughness: 0.8, metalness: 0.5 }),
    kelp: std({ color: 0x4a6a2e, roughness: 0.8, metalness: 0, side: THREE.DoubleSide }),
    coralA: std({ color: 0xc0506a, roughness: 0.8, emissive: 0x401020, emissiveIntensity: 0.4 }),
    coralB: std({ color: 0xd07a38, roughness: 0.8, emissive: 0x402008, emissiveIntensity: 0.4 }),
    coralC: std({ color: 0x7a58c0, roughness: 0.8, emissive: 0x201040, emissiveIntensity: 0.4 }),
    coralD: std({ color: 0x3aa890, roughness: 0.8, emissive: 0x0a3028, emissiveIntensity: 0.4 }),
  };
  for (const k in U) { U[k].name = 'uw_' + k; U[k].userData.uv = k === 'sand' ? 6 : (k === 'rock' || k === 'leg' ? 3 : null); }
  caustic.repeat.set(2.5, 2.5); // finer net than the sand tile
  U.caustic = caustic;
  return U;
}

// static geometry, built with the colony so it batches and collides
export function buildUnderwater(B, M, U, ctx) {
  B.interior = false;
  B.chunk = 'under_bed';
  B.flat(U.sand, circlePts(700, 64), [], SEABED);
  B.colPoly(circlePts(700, 64), SEABED - 2, SEABED, 'floor');
  const legs = [];
  const leg = (x, z, r, top, pod) => {
    B.chunk = 'under_legs';
    const h = top - SEABED;
    B.cyl(U.leg, x, SEABED + h / 2, z, r, h, 20);
    for (let y = SEABED + 4; y < top - 1; y += 7) B.cyl(U.legBand, x, y, z, r + 0.12, 0.5, 20);
    B.cyl(U.rock, x, SEABED + 0.8, z, r * 1.6, 1.6, 16); // scour mound
    B.colCyl(x, SEABED, z, r + 0.2, h, 12);
    legs.push([x, z, r]);
    if (!pod) return;
    // machinery pod clamped to the leg: grey box, amber window, cyan down-light
    const a = Math.atan2(x, z);
    B.push(x, 0, z, a);
    const py = top - 6.5;
    B.box(M.hullPaint, 0, py, r + 1.6, 4.6, 5.2, 3.4, 0, { col: true });
    B.box(M.dark, 0, py + 2.9, r + 1.6, 4.9, 0.6, 3.7);
    B.box(M.dark, 0, py - 2.9, r + 1.6, 4.2, 0.6, 3.0);
    B.box(M.yellow, -2.33, py + 1.2, r + 1.6, 0.04, 0.4, 3.0);
    B.box(M.lightWarm, 0, py + 0.6, r + 3.32, 1.4, 0.6, 0.03);
    B.box(M.orangeLight, 1.6, py - 1.2, r + 3.32, 0.3, 0.3, 0.03);
    B.cyl(M.cyan, 0, py - 3.25, r + 1.6, 1.3, 0.1, 20);
    ctx.uwBeams.push(B.wp(0, py - 3.3, r + 1.6));
    for (let i = 0; i < 3; i++) B.pipe(M.cable, -1.6 + i * 1.6, py + 3.2, r + 0.3, -1.2 + i * 1.2, top - 0.2, r - 0.2, 0.06, 6);
    B.pop();
  };
  // under the colony hull: an outer ring of legs with pods and an inner ring
  for (let i = 0; i < 8; i++) { const a = (i + 0.5) * Math.PI / 4; leg(Math.sin(a) * 46, Math.cos(a) * 46, 3.0, -5, true); }
  for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + Math.PI / 4; leg(Math.sin(a) * 20, Math.cos(a) * 20, 3.6, -5, false); }
  // under the corner pylons' thruster feet
  for (let i = 0; i < 8; i++) { const a = (i + 0.5) * Math.PI / 4; leg(Math.sin(a) * 81.5, Math.cos(a) * 81.5, 2.2, -3.3, false); }
  // satellite platforms: four legs each, two with pods
  for (const s of SATS) {
    const pts = satOutline(s), n = pts.length;
    for (let i = 0; i < 4; i++) {
      const p = pts[Math.floor(i * n / 4)];
      const [wx, wz] = sectorToWorld(s.k, p[0] * 0.62, s.v + (p[1] - s.v) * 0.62);
      leg(wx, wz, 2.0, -3.5, i % 2 === 0);
    }
  }
  // the seabed around the colony: rocks, coral clumps, kelp
  B.chunk = 'under_life';
  const near = (x, z) => legs.some(([lx, lz, r]) => Math.hypot(x - lx, z - lz) < r + 1.5);
  for (let i = 0; i < 110; i++) {
    const a = R() * Math.PI * 2, d = 10 + Math.pow(R(), 0.7) * 150, x = Math.sin(a) * d, z = Math.cos(a) * d;
    if (near(x, z)) continue;
    const s = 0.6 + R() * 2.6;
    B.add(G.sphere(7, 5), U.rock, x, SEABED + s * 0.25, z, R(), R() * 3, R(), s * (1 + R()), s * (0.5 + R() * 0.5), s * (1 + R()));
  }
  const corals = [U.coralA, U.coralB, U.coralC, U.coralD];
  for (let i = 0; i < 170; i++) {
    const a = R() * Math.PI * 2, d = 8 + Math.pow(R(), 0.8) * 120, x = Math.sin(a) * d, z = Math.cos(a) * d;
    if (near(x, z)) continue;
    const m = corals[(R() * 4) | 0], n = 3 + ((R() * 6) | 0);
    for (let k = 0; k < n; k++) {
      const h = 0.4 + R() * 1.4, ox = (R() - 0.5) * 1.2, oz = (R() - 0.5) * 1.2;
      if (R() < 0.5) B.add(G.cone(0.2, 1, 6), m, x + ox, SEABED + h / 2, z + oz, (R() - 0.5) * 0.5, R() * 3, (R() - 0.5) * 0.5, 0.18 + R() * 0.12, h, 0.18 + R() * 0.12);
      else B.add(G.sphere(8, 6), m, x + ox, SEABED + 0.15, z + oz, 0, R() * 3, 0, 0.3 + R() * 0.4, 0.2 + R() * 0.25, 0.3 + R() * 0.4);
    }
  }
  for (let i = 0; i < 240; i++) {
    const a = R() * Math.PI * 2, d = 12 + Math.pow(R(), 0.6) * 130, x = Math.sin(a) * d, z = Math.cos(a) * d;
    if (near(x, z)) continue;
    const h = 3 + R() * 9;
    B.add(G.plane(), U.kelp, x, SEABED + h / 2, z, (R() - 0.5) * 0.2, R() * 3, (R() - 0.5) * 0.15, 0.35 + R() * 0.3, h, 1);
  }
  ctx.uwLegs = legs;
}

// ---------------------------------------------------------------- runtime (only while submerged)
const surfVert = /* glsl */`
varying vec3 vW;
#include <fog_pars_vertex>
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz;
  vec4 mvPosition = viewMatrix * wp; gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`;
const surfFrag = /* glsl */`
uniform sampler2D tNormal; uniform float uTime; uniform vec3 uSky; uniform vec3 uDeep; uniform vec3 uSun; uniform vec3 uSunDir;
varying vec3 vW;
#include <fog_pars_fragment>
void main() {
  vec2 uv = vW.xz;
  vec3 n1 = texture2D(tNormal, uv * 0.03 + vec2(uTime * 0.01, uTime * 0.006)).xyz * 2.0 - 1.0;
  vec3 n2 = texture2D(tNormal, uv * 0.11 - vec2(uTime * 0.02, -uTime * 0.013)).xyz * 2.0 - 1.0;
  vec3 N = normalize(vec3(n1.x + n2.x * 0.6, -2.2, n1.y + n2.y * 0.6));
  vec3 V = normalize(vW - cameraPosition);
  // Snell's window: looking steeply up you see the bright sky; outside it the surface mirrors the deep
  float up = max(dot(-V, N), 0.0);
  float win = smoothstep(0.62, 0.8, up + (n1.x + n2.y) * 0.06);
  vec3 col = mix(uDeep * 1.4, uSky, win);
  float sun = pow(max(dot(refract(V, -N, 1.33), uSunDir), 0.0), 60.0);
  col += uSun * sun * 3.0 * win;
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;

export function makeUnderwater(scene, M, U, T, ctx, sunDir) {
  const group = new THREE.Group(); group.name = 'underwater'; group.visible = false;
  scene.add(group);
  // surface seen from below
  const surfMat = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { tNormal: { value: null }, uTime: { value: 0 }, uSky: { value: new THREE.Color(0.55, 0.85, 0.95) }, uDeep: { value: new THREE.Color(0.02, 0.12, 0.16) }, uSun: { value: new THREE.Color(1, 0.9, 0.7) }, uSunDir: { value: sunDir } }]),
    vertexShader: surfVert, fragmentShader: surfFrag, fog: true, side: THREE.BackSide,
  });
  surfMat.uniforms.tNormal.value = T.waterNormals; surfMat.uniforms.uSunDir.value = sunDir;
  const surf = new THREE.Mesh(new THREE.PlaneGeometry(6000, 6000, 1, 1), surfMat);
  surf.rotation.x = -Math.PI / 2; surf.position.y = -0.15; surf.name = 'uw_surface';
  group.add(surf);
  // sun shafts: soft additive slabs hanging from the surface, leaning with the sun
  const rayMat = new THREE.MeshBasicMaterial({ map: T.beam, color: 0x9fe8e0, transparent: true, opacity: 0.09, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
  const rays = new THREE.Group(); group.add(rays);
  for (let i = 0; i < 26; i++) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(3 + R() * 6, 40), rayMat);
    m.position.set((R() - 0.5) * 90, -20, (R() - 0.5) * 90); m.rotation.y = R() * Math.PI;
    m.userData.ph = R() * 6; rays.add(m);
  }
  // down-light beams under every pod
  const beamMat = new THREE.MeshBasicMaterial({ map: T.beam, color: 0x39f0ff, transparent: true, opacity: 0.38, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: true });
  const beamGeo = new THREE.ConeGeometry(4.5, 16, 20, 1, true); beamGeo.translate(0, -8, 0);
  for (const p of ctx.uwBeams) { const b = new THREE.Mesh(beamGeo, beamMat); b.position.copy(p); group.add(b); } // apex at the lamp, brightest there
  // plankton around the camera
  const NP = 900, pp = new Float32Array(NP * 3);
  for (let i = 0; i < NP * 3; i++) pp[i] = (R() - 0.5) * 40;
  const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pp, 3));
  const plankton = new THREE.Points(pg, new THREE.PointsMaterial({ color: 0xbfeee8, size: 0.06, transparent: true, opacity: 0.6, depthWrite: false }));
  plankton.frustumCulled = false; group.add(plankton);
  // fish schools
  const fishGeo = new THREE.SphereGeometry(1, 8, 5); fishGeo.scale(0.22, 0.08, 0.04);
  const tail = new THREE.ConeGeometry(0.06, 0.12, 4); tail.rotateZ(Math.PI / 2); tail.translate(-0.27, 0, 0);
  const fishMat = new THREE.MeshStandardMaterial({ color: 0x8fb2c4, metalness: 0.7, roughness: 0.35 });
  const schools = [];
  for (let s = 0; s < 4; s++) {
    const n = 120, mesh = new THREE.InstancedMesh(fishGeo, fishMat, n);
    mesh.frustumCulled = false; group.add(mesh);
    const tailMesh = new THREE.InstancedMesh(tail, fishMat, n); tailMesh.frustumCulled = false; group.add(tailMesh);
    const off = []; for (let i = 0; i < n; i++) off.push([(R() - 0.5) * 9, (R() - 0.5) * 3.5, (R() - 0.5) * 9, R() * 6]);
    schools.push({ mesh, tailMesh, off, r: 25 + s * 16, y: -12 - s * 5, sp: (0.05 + R() * 0.04) * (s % 2 ? 1 : -1), ph: R() * 6, cx: [30, -40, 60, -20][s], cz: [60, 40, -70, -50][s] });
  }
  // inspection ROV
  const rov = new THREE.Group();
  const yel = new THREE.MeshStandardMaterial({ color: 0xe8b21a, roughness: 0.45, metalness: 0.3 });
  const blk = new THREE.MeshStandardMaterial({ color: 0x1c2024, roughness: 0.6, metalness: 0.5 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.7, 1.1), yel); rov.add(body);
  const frame = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.2, 1.2), blk); frame.position.y = -0.45; rov.add(frame);
  for (const sx of [-0.7, 0.7]) { const t = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.3, 12), blk); t.rotation.z = Math.PI / 2; t.position.set(sx, 0.1, -0.62); rov.add(t); }
  const lampMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 4, 3.6) });
  for (const sx of [-0.45, 0.45]) { const l = new THREE.Mesh(new THREE.CircleGeometry(0.1, 12), lampMat); l.position.set(sx, 0, 0.56); rov.add(l); }
  const rovBeam = new THREE.MeshBasicMaterial({ map: T.beam, color: 0xdff6ff, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
  for (const sx of [-0.45, 0.45]) { const g = new THREE.ConeGeometry(1.6, 12, 16, 1, true); g.translate(0, -6, 0); const m = new THREE.Mesh(g, rovBeam); m.rotation.x = -Math.PI / 2; m.position.set(sx, 0, 0.56); rov.add(m); }
  const rovLight = new THREE.PointLight(0xdff6ff, 30, 18, 2); rovLight.position.set(0, 0, 3); rov.add(rovLight);
  group.add(rov);

  const underFog = new THREE.FogExp2(0x157a8c, 0.017);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), sc = new THREE.Vector3(1, 1, 1);
  return {
    group, fog: underFog, water: new THREE.Color(0x157a8c),
    update(dt, t, cam) {
      U.caustic.offset.set(Math.sin(t * 0.21) * 0.3 + t * 0.013, Math.cos(t * 0.17) * 0.3 - t * 0.009);
      surfMat.uniforms.uTime.value = t;
      surf.position.x = cam.position.x; surf.position.z = cam.position.z;
      rays.position.set(cam.position.x, 0, cam.position.z);
      for (const r of rays.children) { r.material.opacity = 0.09; r.rotation.z = sunDir.x * 0.35; r.position.x += Math.sin(t * 0.1 + r.userData.ph) * dt * 0.3; }
      plankton.position.set(Math.round(cam.position.x / 40) * 40, Math.round(cam.position.y / 40) * 40, Math.round(cam.position.z / 40) * 40);
      for (const s of schools) {
        const a = t * s.sp + s.ph, cx = s.cx + Math.sin(a) * s.r, cz = s.cz + Math.cos(a) * s.r, cy = s.y + Math.sin(t * 0.3 + s.ph) * 2;
        const heading = Math.atan2(Math.cos(a) * s.sp, -Math.sin(a) * s.sp) - Math.PI / 2;
        s.off.forEach((o, i) => {
          const w = Math.sin(t * 1.3 + o[3]);
          v.set(cx + o[0] + w * 0.6, cy + o[1] + Math.sin(t * 0.9 + o[3]) * 0.4, cz + o[2] + Math.cos(t * 1.1 + o[3]) * 0.6);
          e.set(0, heading + Math.sin(t * 6 + o[3]) * 0.12, 0); q.setFromEuler(e);
          m4.compose(v, q, sc); s.mesh.setMatrixAt(i, m4); s.tailMesh.setMatrixAt(i, m4);
        });
        s.mesh.instanceMatrix.needsUpdate = true; s.tailMesh.instanceMatrix.needsUpdate = true;
      }
      // ROV: slow survey loop between two legs
      const ra = t * 0.045, rx = 34 + Math.sin(ra) * 14, rz = 34 + Math.cos(ra * 1.3) * 18, ry = -16 + Math.sin(t * 0.2) * 3;
      const nx = 34 + Math.sin(ra + 0.05) * 14, nz = 34 + Math.cos((ra + 0.05) * 1.3) * 18;
      rov.position.set(rx, ry, rz); rov.rotation.y = Math.atan2(nx - rx, nz - rz); rov.rotation.z = Math.sin(t * 0.7) * 0.05;
    },
  };
}
