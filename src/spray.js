// Sea spray: short bursts of white mist where the swell slaps against the
// colony hull and the satellite platforms.  One pooled Points mesh; only the
// stretch of hull near the camera emits, so it costs almost nothing.
import * as THREE from 'three';

const N = 700;

const vert = /* glsl */`
attribute float aLife;
attribute float aSize;
varying float vA;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float l = aLife;
  vA = l <= 0.0 ? 0.0 : smoothstep(0.0, 0.12, l) * (1.0 - l) * (1.0 - smoothstep(160.0, 260.0, -mv.z));
  gl_PointSize = l <= 0.0 ? 0.0 : aSize * (0.5 + l * 2.2) * 900.0 / max(-mv.z, 0.5);
}`;
const frag = /* glsl */`
uniform sampler2D tMist;
uniform vec3 uColor;
varying float vA;
void main() {
  float m = texture2D(tMist, gl_PointCoord).a;
  float a = m * vA * 0.32;
  if (a < 0.004) discard;
  gl_FragColor = vec4(uColor, a);
}`;

// hull: list of [x, z, nx, nz] points on the waterline with an outward normal
export function makeSpray(scene, mistTex, hull) {
  const pos = new Float32Array(N * 3), life = new Float32Array(N), size = new Float32Array(N);
  const vel = new Float32Array(N * 3), rate = new Float32Array(N);
  life.fill(-1);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aLife', new THREE.BufferAttribute(life, 1));
  g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
  const mat = new THREE.ShaderMaterial({
    uniforms: { tMist: { value: mistTex }, uColor: { value: new THREE.Color(1.5, 1.55, 1.6) } },
    vertexShader: vert, fragmentShader: frag, transparent: true, depthWrite: false,
  });
  const pts = new THREE.Points(g, mat);
  pts.frustumCulled = false; pts.name = 'spray';
  scene.add(pts);
  let next = 0, acc = 0;
  const near = [];
  return {
    points: pts,
    update(dt, t, cam) {
      // pick the hull points within reach of the camera
      near.length = 0;
      for (const h of hull) if (Math.hypot(h[0] - cam.position.x, h[1] - cam.position.z) < 170) near.push(h);
      // bursts come in sets, like waves arriving
      const surge = 0.55 + 0.45 * Math.sin(t * 0.9) * Math.sin(t * 0.37 + 1.3);
      acc += dt * near.length * 0.35 * surge;
      while (acc > 1 && near.length) {
        acc -= 1;
        const h = near[(Math.random() * near.length) | 0];
        const n = 10 + ((Math.random() * 14) | 0);
        const up = 2.5 + Math.random() * 3.5, out = 0.8 + Math.random() * 1.8;
        for (let k = 0; k < n; k++) {
          const i = next; next = (next + 1) % N;
          const j = i * 3, side = (Math.random() - 0.5) * 3;
          pos[j] = h[0] - h[3] * side + h[2] * 0.4; pos[j + 1] = 0.4 + Math.random() * 0.6; pos[j + 2] = h[1] + h[2] * side + h[3] * 0.4;
          vel[j] = h[2] * out * (0.6 + Math.random() * 0.8) + (Math.random() - 0.5) * 0.8;
          vel[j + 1] = up * (0.6 + Math.random() * 0.6);
          vel[j + 2] = h[3] * out * (0.6 + Math.random() * 0.8) + (Math.random() - 0.5) * 0.8;
          life[i] = 0.001; rate[i] = 1 / (0.7 + Math.random() * 0.9); size[i] = k === 0 ? 0.9 + Math.random() * 0.6 : 0.12 + Math.random() * 0.3; // one mist puff, the rest droplets
        }
      }
      for (let i = 0; i < N; i++) {
        if (life[i] <= 0) continue;
        life[i] += dt * rate[i];
        if (life[i] >= 1) { life[i] = -1; continue; }
        const j = i * 3;
        vel[j + 1] -= 6.5 * dt; vel[j] *= 1 - dt * 0.6; vel[j + 2] *= 1 - dt * 0.6;
        pos[j] += vel[j] * dt; pos[j + 1] = Math.max(0.2, pos[j + 1] + vel[j + 1] * dt); pos[j + 2] += vel[j + 2] * dt;
      }
      g.attributes.position.needsUpdate = true; g.attributes.aLife.needsUpdate = true; g.attributes.aSize.needsUpdate = true;
    },
  };
}
