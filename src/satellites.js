// Satellite platforms, the bridges that tie them to the colony, and the
// unconnected outposts on the horizon.
import * as THREE from 'three';
import { G } from './builder.js';
import { octPts, circlePts, sectorAngle, sectorToWorld, rng } from './util.js';
import * as P from './props.js';
import { sign } from './colony.js';

export const SATS = [
  { k: 0, id: 'landing', name: 'Landing Platform', v: 112, shape: 'oct', a: 22 },
  { k: 2, id: 'energy', name: 'Energy Platform', v: 120, shape: 'hex', a: 18 },
  { k: 4, id: 'dock', name: 'Marine Dock', v: 118, shape: 'rect', w: 36, d: 44 },
  { k: 6, id: 'comms', name: 'Comms Platform', v: 110, shape: 'oct', a: 16 },
];
export function satOutline(s) {
  if (s.shape === 'oct') return octPts(s.a, 0, s.v);
  if (s.shape === 'hex') return circlePts(s.a / Math.cos(Math.PI / 6), 6, 0, s.v, Math.PI / 6);
  return [[-s.w / 2, s.v - s.d / 2], [s.w / 2, s.v - s.d / 2], [s.w / 2, s.v + s.d / 2], [-s.w / 2, s.v + s.d / 2]];
}
export function satNear(s) { return s.shape === 'rect' ? s.v - s.d / 2 : s.v - s.a; }
export function satRadius(s) { return s.shape === 'rect' ? Math.hypot(s.w, s.d) / 2 : s.a / Math.cos(Math.PI / 8); }

function shrink(pts, c, d) {
  return pts.map(([x, z]) => { const dx = x - c[0], dz = z - c[1], l = Math.hypot(dx, dz); return [x - dx / l * d, z - dz / l * d]; });
}

function platform(B, M, s, holes = []) {
  const pts = satOutline(s), c = [0, s.v];
  B.slab(M.hullPaint, pts, holes, 5.4, 6.0);
  B.flat(M.deck, pts, holes, 6.01);
  B.colPoly(pts, 5.4, 6.0, 'floor', { holes });
  B.slab(M.hull, shrink(pts, c, 2.2), holes.map(h => h), -3.5, 1.6);
  B.slab(M.algae, shrink(pts, c, 2.188), [shrink(pts, c, 2.6)], -1.2, 0.75); // waterline growth band
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    const a = pts[i], b = pts[(i + 1) % n];
    const ai = shrink([a], c, 1.2)[0], bi = shrink([b], c, 1.2)[0];
    B.wall(M.dark, ai[0], ai[1], bi[0], bi[1], 1.6, 3.8, 0.4);
    B.wall(M.white, a[0], a[1], b[0], b[1], 5.3, 0.8, 0.3);
    const ao = shrink([a], c, -0.16)[0], bo = shrink([b], c, -0.16)[0];
    B.wall(M.cyan, ao[0], ao[1], bo[0], bo[1], 5.55, 0.05, 0.04);
    // pontoon at each vertex
    const pv = shrink([a], c, 2.6)[0];
    B.cyl(M.hullPaint, pv[0], -1.5, pv[1], 2.6, 7, 24);
    B.add(G.torus(2.62, 0.1, 6, 32), M.cyan, pv[0], 0.8, pv[1], Math.PI / 2, 0, 0);
    // railing, leaving a gap on the edge that faces the colony
    const ra = shrink([a], c, 0.3)[0], rb = shrink([b], c, 0.3)[0];
    const mz = (ra[1] + rb[1]) / 2, facing = mz < s.v - 1 && Math.abs(ra[1] - rb[1]) < 0.5;
    if (facing) {
      const lo = Math.min(ra[0], rb[0]), hi = Math.max(ra[0], rb[0]);
      P.railing(B, M, lo, mz, -2.6, mz, 6);
      P.railing(B, M, 2.6, mz, hi, mz, 6);
    } else P.railing(B, M, ra[0], ra[1], rb[0], rb[1], 6);
  }
}

function bridge(B, M, v0, v1) {
  const hw = 2.3, L = v1 - v0, vc = (v0 + v1) / 2;
  const rect = [[-hw, v0], [hw, v0], [hw, v1], [-hw, v1]];
  B.box(M.hullPaint, 0, 5.72, vc, hw * 2 + 0.2, 0.56, L);
  B.flat(M.deck, rect, [], 6.01);
  B.box(M.grating, 0, 6.02, vc, 1.2, 0.012, L);
  B.colPoly(rect, 5.5, 6.0, 'floor');
  for (const s of [-1, 1]) {
    P.railing(B, M, s * (hw - 0.1), v0, s * (hw - 0.1), v1, 6, { spacing: 2.0 });
    B.box(M.cyan, s * (hw - 0.3), 6.03, vc, 0.05, 0.012, L);
    B.box(M.white, s * (hw + 0.05), 5.6, vc, 0.2, 0.7, L);
    B.box(M.cyanSoft, s * (hw + 0.16), 5.5, vc, 0.02, 0.04, L);
    B.pipe(M.gunmetal, s * 1.2, 5.05, v0, s * 1.2, 5.05, v1, 0.22);
  }
  B.pipe(M.copper, 0, 5.1, v0, 0, 5.1, v1, 0.12);
  const nr = Math.floor(L / 4.2);
  for (let i = 0; i <= nr; i++) {
    const v = v0 + 1 + (L - 2) * i / nr;
    B.add(G.torus(hw + 0.05, 0.09, 6, 28, Math.PI), M.whiteSmooth, 0, 6.0, v, 0, 0, 0);
    B.sphere(M.cyan, 0, 6 + hw + 0.12, v, 0.07);
    B.box(M.metal, 0, 5.1, v, hw * 2, 0.16, 0.16);
  }
  const np = Math.max(1, Math.floor(L / 14));
  for (let i = 1; i <= np; i++) {
    const v = v0 + L * i / (np + 1);
    for (const s of [-1, 1]) B.cyl(M.hullPaint, s * 1.7, -1.5, v, 0.55, 13.4, 16);
    B.box(M.gunmetal, 0, 4.8, v, 4.2, 0.4, 0.6);
    B.cyl(M.hullPaint, 0, 0.1, v, 1.4, 1.6, 24, { rz: Math.PI / 2, rx: 0 });
    B.add(G.torus(0.57, 0.05, 6, 20), M.cyan, -1.7, 0.6, v, Math.PI / 2, 0, 0);
    B.add(G.torus(0.57, 0.05, 6, 20), M.cyan, 1.7, 0.6, v, Math.PI / 2, 0, 0);
  }
  // entry arches
  for (const v of [v0 + 0.4, v1 - 0.4]) {
    for (const s of [-1, 1]) B.rbox(M.whiteSmooth, s * (hw + 0.2), 8.0, v, 0.35, 4.0, 0.5, 0.12);
    B.rbox(M.whiteSmooth, 0, 10.1, v, hw * 2 + 0.9, 0.35, 0.5, 0.12);
    B.box(M.cyan, 0, 9.92, v, hw * 2, 0.03, 0.3);
  }
}

function floodlight(B, M, ctx, x, z) {
  B.cyl(M.darkSmooth, x, 6 + 4, z, 0.14, 8, 10);
  B.cyl(M.darkSmooth, x, 6.2, z, 0.5, 0.4, 12, { col: true });
  B.box(M.darkSmooth, x, 14.2, z, 1.2, 0.3, 0.5);
  B.box(M.light, x, 14.04, z, 1.0, 0.02, 0.36);
  ctx.blinkers.push({ p: B.wp(x, 14.5, z), color: 0xff3020, period: 2.0 });
}

export function buildSatellites(B, M, S, ctx) {
  const R = rng(515);
  B.interior = false;
  for (const s of SATS) {
    B.chunk = 'sat_' + s.id;
    B.push(0, 0, 0, sectorAngle(s.k));
    const holes = [];
    if (s.id === 'dock') holes.push([[-6, 112], [6, 112], [6, 124], [-6, 124]]);
    platform(B, M, s, holes);
    B.chunk = 'bridge_' + s.id;
    bridge(B, M, 56.2, satNear(s) + 0.4);
    B.chunk = 'sat_' + s.id;
    const tw = (u, v) => B.wp(u, 6, v);

    if (s.id === 'landing') {
      // pad markings
      for (const [r0, r1, m] of [[8.6, 9.0, M.yellow], [6.3, 6.45, M.whiteInlay], [9.3, 9.36, M.cyan]]) {
        const g = new THREE.RingGeometry(r0, r1, 72); g.rotateX(-Math.PI / 2);
        B.addM(g, m, B.mat(0, 6.02, s.v + 2));
      }
      for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2; B.cyl(M.cyan, Math.sin(a) * 10.2, 6.04, s.v + 2 + Math.cos(a) * 10.2, 0.14, 0.06, 10); }
      B.box(M.yellow, -2, 6.02, s.v + 2, 0.5, 0.01, 4.4); B.box(M.yellow, 2, 6.02, s.v + 2, 0.5, 0.01, 4.4); B.box(M.yellow, 0, 6.02, s.v + 2, 4, 0.01, 0.5);
      ctx.marks.parked = B.wp(0, 6, s.v + 2);
      ctx.parkedYaw = B.worldYaw(Math.PI * 0.85);
      // control booth
      B.push(-13, 6, s.v - 9, 0.3);
      B.cyl(M.darkSmooth, 0, 0.15, 0, 2.6, 0.3, 6, { col: true, colSeg: 6 });
      B.cyl(M.glassTint, 0, 1.6, 0, 2.45, 2.6, 6, { open: true });
      for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; B.box(M.whiteSmooth, Math.sin(a) * 2.45, 1.6, Math.cos(a) * 2.45, 0.12, 2.6, 0.12); }
      B.cyl(M.whiteSmooth, 0, 3.05, 0, 2.8, 0.3, 6);
      B.cyl(M.cyan, 0, 2.88, 0, 2.82, 0.04, 6);
      B.colCyl(0, 0, 0, 2.5, 3.2, 6);
      B.pop();
      sign(B, M, [{ text: 'AEGIS LANDING PLATFORM', size: 76, color: '#e8f6ff', y: 100 }, { text: 'PAD 01 · WELCOME ABOARD', size: 44, color: '#4ff2ff', y: 196 }], -13, 9.8, s.v - 9, 0.3 + Math.PI, 3.2, 0.8);
      for (const [x, z] of [[-17, s.v - 4], [17, s.v - 4], [-17, s.v + 10], [17, s.v + 10]]) floodlight(B, M, ctx, x, z);
      P.container(B, M, 14, 6, s.v - 11, -0.2);
      P.container(B, M, 16.5, 6, s.v - 4, Math.PI / 2 + 0.1, M.dark);
      P.crate(B, M, 11, 6, s.v - 13.5, 0.4); P.crate(B, M, 12.5, 6, s.v - 14, 0.1, 1.0, 0.6, 0.7);
      // charging station
      B.rbox(M.whiteSmooth, 9, 7.1, s.v + 12, 1.0, 2.2, 0.7, 0.1, 0, { col: true });
      B.box(M.cyanSoft, 9, 7.6, s.v + 11.64, 0.6, 0.8, 0.01);
      B.pipe(M.cable, 9, 6.6, s.v + 11.6, 5, 6.05, s.v + 8, 0.06);
      ctx.spawn = { p: B.wp(0, 6, s.v - 13), yaw: sectorAngle(s.k) };
      ctx.marks.landing = B.wp(0, 6, s.v);
      ctx.marks.log_landing = B.wp(-9.4, 7.0, s.v - 11.8);
      B.rbox(M.darkSmooth, -9.4, 6.45, s.v - 11.8, 0.8, 0.9, 0.6, 0.05, 0.3, { col: true });
    }

    if (s.id === 'energy') {
      const sunYawLocal = Math.atan2(0.80, -0.30) - sectorAngle(s.k);
      for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) {
        const u = -10 + c * 8, v = s.v - 8 + r * 5.4;
        B.push(u, 6, v, sunYawLocal);
        B.box(M.metal, 0, 0.8, 0, 0.12, 1.6, 0.12);
        B.add(G.box(), M.screenOff, 0, 1.7, 0, 0.5, 0, 0, 5.6, 0.07, 3.0);
        for (let i = -2; i <= 2; i++) B.add(G.box(), M.cyanDim, i * 1.1, 1.74, 0, 0.5, 0, 0, 0.02, 0.005, 2.9);
        B.add(G.box(), M.metal, 0, 1.66, 0, 0.5, 0, 0, 5.7, 0.05, 3.1);
        B.colBox(0, 1, 0, 1.2, 2, 1.2);
        B.pop();
      }
      for (let i = 0; i < 3; i++) {
        const u = -9 + i * 9, v = s.v + 12;
        B.cyl(M.darkSmooth, u, 6.3, v, 1.0, 0.6, 16, { col: true });
        const pv = B.wp(u, 6.6, v);
        ctx.turbines.push({ p: pv, h: 9, r: 1.5, blades: 3, speed: 1.1 + i * 0.2, vertical: true });
      }
      for (let i = 0; i < 3; i++) {
        B.push(12, 6, s.v - 6 + i * 4.2, 0);
        B.add(G.cyl(24), M.whiteSmooth, 0, 1.4, 0, 0, 0, Math.PI / 2, 1.3, 4.6, 1.3);
        B.add(G.torus(1.31, 0.05, 6, 30), M.cyan, -1.4, 1.4, 0, 0, Math.PI / 2, 0);
        B.add(G.torus(1.31, 0.05, 6, 30), M.cyan, 1.4, 1.4, 0, 0, Math.PI / 2, 0);
        B.box(M.dark, 0, 0.1, 0, 4.2, 0.2, 1.8);
        B.colBox(0, 1.4, 0, 4.6, 2.8, 2.6);
        B.pop();
      }
      sign(B, M, [{ text: 'ENERGY PLATFORM', size: 80, color: '#e8f6ff', y: 100 }, { text: 'SOLAR · WIND · STORAGE', size: 44, color: '#56ff9a', y: 196 }], 0, 8.6, s.v - 17, Math.PI, 3.0, 0.75);
      B.cyl(M.darkSmooth, -1.2, 7.1, s.v - 17.05, 0.05, 2.2, 6); B.cyl(M.darkSmooth, 1.2, 7.1, s.v - 17.05, 0.05, 2.2, 6);
      ctx.marks.energy = B.wp(0, 6, s.v);
      ctx.marks.log_energy = B.wp(-14.5, 6.9, s.v + 2);
      B.rbox(M.darkSmooth, -14.5, 6.45, s.v + 2, 0.8, 0.9, 0.6, 0.05, 0, { col: true });
    }

    if (s.id === 'dock') {
      // moon pool walls
      for (const [x0, z0, x1, z1] of [[-6, 112, 6, 112], [6, 112, 6, 124], [6, 124, -6, 124], [-6, 124, -6, 112]]) {
        B.wall(M.dark, x0, z0, x1, z1, -0.5, 5.9, 0.3);
        B.wall(M.cyan, x0, z0, x1, z1, 0.6, 0.05, 0.34);
      }
      P.railPath(B, M, [[-6.2, 111.8], [6.2, 111.8], [6.2, 124.2], [-6.2, 124.2], [-6.2, 111.8]], 6);
      // gantry crane over the pool
      for (const u of [-8.5, 8.5]) for (const v of [110, 126]) { B.box(M.yellow, u, 6 + 5.5, v, 0.6, 11, 0.6, 0, { col: true }); }
      for (const u of [-8.5, 8.5]) B.box(M.yellow, u, 17.2, 118, 0.7, 0.8, 16.8);
      B.box(M.yellow, 0, 17.4, 118, 17.6, 0.9, 0.9);
      B.box(M.darkSmooth, 0, 16.7, 118, 2.0, 0.8, 1.4);
      B.pipe(M.cable, 0, 16.3, 118, 0, 10.6, 118, 0.03);
      ctx.marks.sub = B.wp(0, 9.2, 118);
      ctx.marks.subYaw = B.worldYaw(0);
      ctx.blinkers.push({ p: B.wp(0, 17.95, 118), color: 0xffa726, period: 1.1 });
      for (let i = 0; i < 3; i++) P.container(B, M, 12.5, 6 + (i === 2 ? 2.6 : 0), 132 + (i % 2) * 2.6, Math.PI / 2, i === 1 ? M.dark : M.whiteClean);
      P.container(B, M, -12.5, 6, 131, Math.PI / 2, M.redPaint);
      P.container(B, M, -12.5, 8.6, 131, Math.PI / 2, M.whiteClean);
      for (let i = 0; i < 5; i++) { P.crate(B, M, -13 + (i % 3) * 1.4, 6, 102 + (i > 2 ? 1.2 : 0), R() * 0.3); }
      for (const v of [100, 108, 116, 124, 132]) for (const u of [-17.2, 17.2]) { B.cyl(M.darkSmooth, u, 6.3, v, 0.3, 0.6, 12); B.cyl(M.darkSmooth, u, 6.65, v, 0.4, 0.1, 12); }
      sign(B, M, [{ text: 'MARINE DOCK · MOON POOL', size: 76, color: '#e8f6ff', y: 100 }, { text: 'SUBMERSIBLE OPS · KEEP CLEAR', size: 44, color: '#ffb347', y: 196 }], 0, 12.2, 110.3, Math.PI, 3.4, 0.85);
      ctx.marks.dock = B.wp(0, 6, 104);
      ctx.marks.log_dock2 = B.wp(9.5, 6.9, 104);
      B.rbox(M.darkSmooth, 9.5, 6.45, 104, 0.9, 0.9, 0.6, 0.05, 0, { col: true });
      // Reyes' suit recorder, left on a crate at the moon pool rail
      ctx.marks.log_reyes = B.wp(-4, 6.9, 110.4);
      B.rbox(M.darkSmooth, -4, 6.45, 110.4, 0.9, 0.9, 0.6, 0.05, 0, { col: true });
      B.box(M.orangeLight, -4, 6.91, 110.71, 0.7, 0.02, 0.02);
      ctx.marks.boat = B.wp(24, 0, 122);
      ctx.marks.boatYaw = B.worldYaw(0);
    }

    if (s.id === 'comms') {
      const H = 44;
      for (const [a, b] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
        B.pipe(M.metal, a * 3.2, 6, s.v + b * 3.2, a * 0.6, 6 + H, s.v + b * 0.6, 0.18);
      }
      for (let i = 0; i < 11; i++) {
        const t0 = i / 11, t1 = (i + 1) / 11;
        const w0 = 3.2 - 2.6 * t0, w1 = 3.2 - 2.6 * t1, y0 = 6 + H * t0, y1 = 6 + H * t1;
        for (const [a, b, c, d] of [[-1, -1, 1, -1], [1, -1, 1, 1], [1, 1, -1, 1], [-1, 1, -1, -1]]) {
          B.pipe(M.metal, a * w0, y0, s.v + b * w0, c * w1, y1, s.v + d * w1, 0.05, 6);
          B.pipe(M.metal, a * w1, y1, s.v + b * w1, c * w1, y1, s.v + d * w1, 0.05, 6);
        }
      }
      B.cyl(M.metal, 0, 6 + H + 4, s.v, 0.15, 8, 8);
      ctx.blinkers.push({ p: B.wp(0, 6 + H + 8.2, s.v), color: 0xff2a20, period: 1.6 });
      ctx.blinkers.push({ p: B.wp(0.7, 6 + H * 0.5, s.v + 0.7), color: 0xff2a20, period: 1.6 });
      B.colBox(0, 7, s.v, 7, 2, 7);
      for (const [u, v, rx] of [[-9, s.v - 5, -0.9], [8, s.v + 6, -0.6]]) {
        B.cyl(M.darkSmooth, u, 7, v, 0.5, 2, 16, { col: true });
        B.add(G.hemi(28, 10), M.whiteSmooth, u, 8.6, v, Math.PI + rx, 0.6, 0, 3.2, 1.0, 3.2);
        B.cyl(M.metal, u, 9.3, v, 0.06, 1.8, 8);
      }
      for (const [u, v] of [[9, s.v - 7], [-9, s.v + 7]]) {
        B.rbox(M.whiteClean, u, 7.4, v, 3.2, 2.8, 2.4, 0.1, 0, { col: true });
        B.box(M.cyanSoft, u, 8.5, v - 1.21, 2.6, 0.04, 0.02);
        P.hvac(B, M, u, 8.8, v, 0, 1.4, 1.0);
      }
      sign(B, M, [{ text: 'COMMS PLATFORM', size: 80, color: '#e8f6ff', y: 100 }, { text: 'RELAY MAST · 50 M', size: 44, color: '#4ff2ff', y: 196 }], 0, 8.4, s.v - 14.6, Math.PI, 3.0, 0.75);
      B.cyl(M.darkSmooth, -1.2, 7.0, s.v - 14.65, 0.05, 2.0, 6); B.cyl(M.darkSmooth, 1.2, 7.0, s.v - 14.65, 0.05, 2.0, 6);
      ctx.marks.comms = B.wp(0, 6, s.v - 8);
      ctx.marks.log_comms = B.wp(-6.5, 6.9, s.v - 9);
      B.rbox(M.darkSmooth, -6.5, 6.45, s.v - 9, 0.8, 0.9, 0.6, 0.05, 0, { col: true });
    }
    B.pop();
    // foam disc for the ocean shader
    const [cx, cz] = sectorToWorld(s.k, 0, s.v);
    ctx.foam.push([cx, cz, satRadius(s) * 0.92, 0.9]);
  }

  // ---------------------------------------------------------------- outposts on the horizon
  B.chunk = 'outposts';
  {
    const a = Math.PI / 4, d = 205;
    B.push(Math.sin(a) * d, 0, Math.cos(a) * d, a + 0.4);
    const hex = circlePts(12, 6, 0, 0, Math.PI / 6);
    B.slab(M.hullPaint, hex, [], 3.4, 4.0);
    B.flat(M.deck, hex, [], 4.01);
    for (const [x, z] of hex) B.cyl(M.hullPaint, x * 0.8, -1.5, z * 0.8, 1.6, 6, 16);
    for (const [x, z] of hex) B.cyl(M.metal, x * 0.5, 7, z * 0.5, 0.25, 6, 8);
    B.rbox(M.whiteSmooth, 0, 12.5, 0, 16, 5, 9, 1.2, 0, { seg: 3 });
    B.box(M.glassTint, 0, 12.8, 4.52, 13, 1.8, 0.05);
    B.box(M.cyan, 0, 11.6, 4.55, 13, 0.06, 0.02);
    B.box(M.light, 0, 12.8, 4.48, 12.6, 1.6, 0.02);
    B.cyl(M.whiteSmooth, 0, 15.2, 0, 5, 0.4, 24);
    for (let i = 0; i < 12; i++) { const t = i / 12 * Math.PI * 2; B.cyl(M.cyan, Math.sin(t) * 4.6, 15.45, Math.cos(t) * 4.6, 0.1, 0.05, 8); }
    ctx.blinkers.push({ p: B.wp(0, 16, 0), color: 0x44ff66, period: 1.8 });
    B.pop();
    ctx.foam.push([Math.sin(a) * d, Math.cos(a) * d, 11, 0.8]);
  }
  {
    const a = Math.PI * 1.25, d = 170;
    const cx = Math.sin(a) * d, cz = Math.cos(a) * d;
    for (let i = 0; i < 5; i++) {
      const aa = i / 5 * Math.PI * 2, x = cx + Math.sin(aa) * 20, z = cz + Math.cos(aa) * 20;
      B.add(G.torus(7, 0.35, 8, 48), M.whiteSmooth, x, 0.3, z, Math.PI / 2, 0, 0);
      B.add(G.torus(7, 0.06, 6, 48), M.cyan, x, 0.72, z, Math.PI / 2, 0, 0);
      for (let j = 0; j < 12; j++) { const t = j / 12 * Math.PI * 2; B.cyl(M.metal, x + Math.sin(t) * 7, 1.1, z + Math.cos(t) * 7, 0.06, 1.6, 6); }
      B.cyl(M.glassFrost, x, 0.6, z, 6.9, 1.0, 36, { open: true });
      ctx.foam.push([x, z, 7, 0.5]);
    }
    B.cyl(M.yellow, cx, 1.2, cz, 1.6, 2.4, 16);
    B.cyl(M.whiteSmooth, cx, 3.4, cz, 0.4, 2.2, 10);
    ctx.blinkers.push({ p: new THREE.Vector3(cx, 4.7, cz), color: 0xffd040, period: 2.2 });
  }
  // offshore wind farm far away
  for (let i = 0; i < 7; i++) {
    const a = -0.6 + i * 0.28, d = 820 + (i % 3) * 180;
    const x = Math.sin(a) * d, z = Math.cos(a) * -d;
    B.cyl(M.whiteSmooth, x, 45, z, 1.6, 90, 12);
    B.cyl(M.yellow, x, 2, z, 2.2, 6, 12);
    ctx.turbines.push({ p: new THREE.Vector3(x, 90, z), h: 0, r: 34, blades: 3, speed: 0.35 + (i % 3) * 0.05, yaw: Math.atan2(0.80, -0.30) });
  }
}
