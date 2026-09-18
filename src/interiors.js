// Room fit-outs.  All functions run inside a sector frame (u = x, v = z).
import * as THREE from 'three';
import { G } from './builder.js';
import { T8, COS8, rng } from './util.js';
import * as P from './props.js';
import { sign } from './colony.js';

const S8 = Math.sin(Math.PI / 8);
// point inset d from the + / - radial wall at apothem v, facing into the room
const wallP = (v, d) => [T8 * v - d * COS8, v + d * S8, -3 * Math.PI / 8];
const wallM = (v, d) => [-T8 * v + d * COS8, v + d * S8, 3 * Math.PI / 8];

function arcDesk(B, M, cx, cz, r, a0, a1, h = 1.05, w = 0.6) {
  const sh = new THREE.Shape(), n = 24;
  for (let i = 0; i <= n; i++) { const a = a0 + (a1 - a0) * i / n; const p = [cx + Math.sin(a) * (r + w / 2), -(cz + Math.cos(a) * (r + w / 2))]; i ? sh.lineTo(...p) : sh.moveTo(...p); }
  for (let i = n; i >= 0; i--) { const a = a0 + (a1 - a0) * i / n; sh.lineTo(cx + Math.sin(a) * (r - w / 2), -(cz + Math.cos(a) * (r - w / 2))); }
  const g = new THREE.ExtrudeGeometry(sh, { depth: h - 0.06, bevelEnabled: false }); g.rotateX(-Math.PI / 2);
  B.addM(g, M.whiteSmooth, B.mat(0, 6, 0));
  const t = new THREE.ExtrudeGeometry(sh, { depth: 0.05, bevelEnabled: false }); t.rotateX(-Math.PI / 2);
  B.addM(t, M.darkSmooth, B.mat(0, 6 + h - 0.06, 0));
  const led = new THREE.RingGeometry(r + w / 2 - 0.01, r + w / 2 + 0.01, 30, 1, 0, 1); void led;
  for (let i = 0; i < n; i++) {
    const am = a0 + (a1 - a0) * (i + 0.5) / n;
    B.box(M.cyan, cx + Math.sin(am) * (r + w / 2 + 0.005), 6.12, cz + Math.cos(am) * (r + w / 2 + 0.005), (a1 - a0) / n * (r + w / 2) + 0.01, 0.03, 0.01, am);
  }
  const cn = Math.ceil((a1 - a0) * r / 0.8);
  for (let i = 0; i < cn; i++) {
    const am = a0 + (a1 - a0) * (i + 0.5) / cn;
    B.colBox(cx + Math.sin(am) * r, 6 + h / 2, cz + Math.cos(am) * r, (a1 - a0) / cn * (r + w / 2) + 0.1, h, w, am);
  }
}

function suit(B, M, x, y, z, ry) {
  B.push(x, y, z, ry);
  B.cyl(M.darkSmooth, 0, 0.1, 0, 0.45, 0.2, 20);
  B.cyl(M.cyan, 0, 0.2, 0, 0.46, 0.02, 20);
  for (const s of [-1, 1]) { B.add(G.cyl(12), M.plasticWhite, s * 0.14, 0.62, 0, 0, 0, 0, 0.11, 0.84, 0.12); B.add(G.cyl(12), M.orangeGloss, s * 0.14, 0.28, 0.02, 0, 0, 0, 0.12, 0.16, 0.14); }
  B.rbox(M.plasticWhite, 0, 1.3, 0, 0.55, 0.7, 0.32, 0.12, 0, { seg: 3 });
  B.rbox(M.orangeGloss, 0, 1.3, -0.24, 0.42, 0.62, 0.2, 0.06);
  B.box(M.cyan, 0, 1.45, 0.165, 0.2, 0.05, 0.01);
  for (const s of [-1, 1]) B.add(G.cyl(12), M.plasticWhite, s * 0.36, 1.25, 0, 0, 0, s * 0.18, 0.08, 0.7, 0.09);
  B.sphere(M.plasticWhite, 0, 1.86, 0, 0.2, { sy: 1.05 });
  B.sphere(M.glassTint, 0, 1.88, 0.06, 0.16, { sz: 0.9 });
  B.cyl(M.chrome, 0, 0.9, -0.3, 0.02, 1.8, 6);
  B.colCyl(0, 0, 0, 0.45, 2.0, 8);
  B.pop();
}

// ================================================================ LEVEL 1 ROOMS
export function buildRoom(B, M, S, ctx, k) {
  const R = rng(900 + k);
  const y = 6;
  const logAt = (id, u, yy, v) => { ctx.marks['log_' + id] = B.wp(u, yy, v); };

  if (k === 0) { // ---------------------------------------- MAIN LOBBY
    arcDesk(B, M, 6.5, 32.2, 2.4, -1.2, 1.2);
    P.officeChair(B, M, 6.5, y, 31.2, Math.PI);
    P.monitor(B, M, S.status, 5.8, y + 1.0, 33.3, Math.PI - 0.2);
    B.rbox(M.whiteSmooth, 6.5, 8.6, 28.9, 5.4, 5.2, 0.5, 0.15, 0, { col: true });
    P.screenPanel(B, M, S.welcome, 6.5, 9.0, 29.2, 0, 4.2, 2.36);
    B.box(M.cyan, 6.5, 6.25, 29.16, 5.0, 0.04, 0.02);
    logAt('lobby', 7.65, y + 1.05, 34.3);
    // directory hologram table
    P.holoTableBase(B, M, -1.5, y, 36, 1.1);
    ctx.marks.directory = B.wp(-1.5, y, 36);
    ctx.holoSpots.push({ p: B.wp(-1.5, y + 1.0, 36), kind: 'colony', s: 0.028 });
    // decontamination arch at the doors
    for (const s of [-1, 1]) { B.rbox(M.whiteSmooth, s * 2.6, 8.1, 39.6, 0.4, 4.2, 0.5, 0.15, 0, { col: true }); B.box(M.cyan, s * 2.39, 8.1, 39.6, 0.02, 3.8, 0.3); }
    B.rbox(M.whiteSmooth, 0, 10.35, 39.6, 5.6, 0.35, 0.5, 0.15);
    B.box(M.cyan, 0, 10.16, 39.6, 4.8, 0.02, 0.3);
    B.box(M.hazard, 0, 6.015, 39.6, 4.8, 0.01, 0.35);
    // waiting area
    P.sofa(B, M, -9, y, 40.2, Math.PI, 3.0, M.fabricGrey);
    P.coffeeTable(B, M, -9, y, 38.6, 0, 1.4, 0.7);
    P.armchair(B, M, -11.6, y, 38.3, Math.PI / 2, M.orange);
    P.potPlant(B, M, -14.5, y, 40.4, 1.6, 5);
    P.potPlant(B, M, 14.5, y, 40.4, 1.6, 6);
    P.potPlant(B, M, 11.8, y, 28.1, 1.4, 7);
    // floor inlay ring
    const g = new THREE.RingGeometry(2.6, 2.68, 64); g.rotateX(-Math.PI / 2);
    B.addM(g, M.cyanSoft, B.mat(-1.5, 6.02, 36));
    const g2 = new THREE.RingGeometry(3.4, 3.44, 64); g2.rotateX(-Math.PI / 2);
    B.addM(g2, M.metal, B.mat(-1.5, 6.02, 36));
    sign(B, M, [{ text: 'LIFT ▸ GALLERY · MISSION CONTROL · OBSERVATION', size: 44, color: '#e8f6ff', y: 128 }], -8.2, 8.8, 27.2, 0, 2.6, 0.32);
    ctx.marks.lobby = B.wp(0, y, 36);
  }

  if (k === 1) { // ---------------------------------------- CREW LOUNGE (living room)
    P.rug(B, M, -5.4, y, 31.2, 0, 6.2, 4.4, M.fabricGrey);
    P.screenPanel(B, M, S.weather, -5.4, 8.6, 27.25, 0, 4.4, 2.48);
    B.box(M.darkSmooth, -5.4, 6.35, 27.5, 5.2, 0.7, 0.55); B.box(M.cyanSoft, -5.4, 6.71, 27.78, 5.0, 0.01, 0.01);
    P.sofa(B, M, -5.4, y, 32.6, Math.PI, 3.6);
    P.sofa(B, M, -8.6, y, 30.4, Math.PI / 2, 2.4);
    P.armchair(B, M, -2.0, y, 30.2, -Math.PI / 2 - 0.3);
    P.coffeeTable(B, M, -5.3, y, 30.3, 0, 1.6, 0.9);
    ctx.marks.keycard = B.wp(-5.0, y + 0.42, 30.3);
    // kitchenette
    B.rbox(M.whiteSmooth, 6.5, 6.5, 33.2, 3.6, 1.0, 1.1, 0.06, 0, { col: true });
    B.box(M.darkSmooth, 6.5, 7.02, 33.2, 3.7, 0.05, 1.2);
    B.box(M.orangeLight, 6.5, 6.05, 33.78, 3.4, 0.02, 0.02);
    for (let i = 0; i < 3; i++) P.stool(B, M, 5.3 + i * 1.2, y, 34.3);
    P.storage(B, M, 6.5, y, 27.45, 0, 4.8, 2.3, 0.6);
    B.box(M.darkSmooth, 6.5, 7.0, 27.8, 4.8, 0.04, 0.02);
    P.storage(B, M, -10.5, y, 27.45, 0, 1.4, 2.0, 0.5);
    // dining
    B.rbox(M.whiteSmooth, 5.5, 6.74, 38.6, 3.2, 0.05, 1.1, 0.02); B.box(M.darkSmooth, 5.5, 6.37, 38.6, 0.3, 0.72, 0.8, 0, { col: true });
    for (let i = 0; i < 3; i++) { P.chair(B, M, 4.4 + i * 1.1, y, 37.7, 0, M.orangeGloss); P.chair(B, M, 4.4 + i * 1.1, y, 39.5, Math.PI, M.whiteSmooth); }
    // window lounge
    P.armchair(B, M, -10.5, y, 40.6, 0.3); P.armchair(B, M, -7.8, y, 40.8, -0.1);
    P.roundTable(B, M, -9.1, y, 40.0, 0.35, 0.45);
    P.potPlant(B, M, -14.8, y, 40.6, 1.5, 11); P.potPlant(B, M, 15, y, 40.6, 1.5, 12);
    // storage units + technical panels along the radial walls
    { const [u, v, ry] = wallP(31.5, 0.45); P.storage(B, M, u, y, v, ry, 3.2, 2.4, 0.6); }
    { const [u, v, ry] = wallP(36.5, 0.2); P.techPanel(B, M, u, y + 0.9, v, ry, 1.4, 1.6); }
    { const [u, v, ry] = wallM(36.5, 0.2); P.screenPanel(B, M, S.log, u, 8.2, v, ry, 1.8, 1.0); }
    logAt('lounge', 6.5, y + 1.05, 33.0);
    ctx.marks.lounge = B.wp(0, y, 34);
  }

  if (k === 2) { // ---------------------------------------- RESEARCH LAB
    for (const v of [30.2, 34.2, 38.2]) { const [u, vv, ry] = wallP(v, 0.6); P.desk(B, M, S, u, y, vv, ry, 2.2, v === 34.2 ? ['dna', 'status', 'log'] : ['sonar', 'dna']); }
    P.labTable(B, M, -2.4, y, 32.4, 0, 5.2, 1.2);
    P.labTable(B, M, -2.4, y, 37.2, 0, 5.2, 1.2);
    for (let i = 0; i < 5; i++) P.jar(B, M, -4.4 + i * 0.5, y + 0.925, 32.1, 0.12, 0.34 + (i % 2) * 0.1, i % 2 ? M.cryoFluid : M.greenFluid);
    P.microscope(B, M, -0.6, y + 0.925, 32.6, Math.PI);
    P.monitor(B, M, S.dna, 0.4, y + 0.925, 32.3, 0.3);
    for (let i = 0; i < 3; i++) P.jar(B, M, -0.6 + i * 0.45, y + 0.925, 37.5, 0.1, 0.3, M.greenFluid);
    ctx.marks.robotArm = B.wp(-3.6, y + 0.925, 37.2);
    { const [u, v, ry] = wallM(31, 0.55); P.fumeHood(B, M, u, y, v, ry, 2.0); }
    { const [u, v, ry] = wallM(35.5, 0.55); P.fumeHood(B, M, u, y, v, ry, 2.0); }
    P.rack(B, M, 8.4, y, 27.65, Math.PI * 0); P.rack(B, M, 9.2, y, 27.65, 0);
    P.screenPanel(B, M, S.dna, -5.8, 8.4, 27.25, 0, 3.6, 2.0);
    // sample fridge
    B.rbox(M.whiteClean, -9.8, 7.1, 27.6, 1.2, 2.2, 0.8, 0.04, 0, { col: true });
    B.box(M.glassTint, -9.8, 7.2, 28.01, 0.9, 1.7, 0.02);
    for (let s = 0; s < 3; s++) for (let i = 0; i < 4; i++) P.jar(B, M, -10.15 + i * 0.23, 6.55 + s * 0.55, 27.7, 0.07, 0.22, M.cryoFluid);
    // specimen shelving by the windows
    for (const u of [-9, 9]) {
      B.box(M.metal, u, 7.1, 41.2, 3.0, 0.04, 0.5); B.box(M.metal, u, 7.9, 41.2, 3.0, 0.04, 0.5);
      for (const s of [-1.3, 1.3]) B.box(M.metal, u + s, 7.0, 41.2, 0.04, 2.0, 0.5);
      for (let i = 0; i < 5; i++) { P.jar(B, M, u - 1.1 + i * 0.55, 7.12, 41.2, 0.1, 0.3 + (i % 3) * 0.08, i % 2 ? M.greenFluid : M.cryoFluid); P.jar(B, M, u - 1.1 + i * 0.55, 7.92, 41.2, 0.09, 0.28, M.greenFluid); }
      B.colBox(u, 7, 41.2, 3.0, 2, 0.5);
    }
    P.potPlant(B, M, 0.5, y, 41, 1.2, 21);
    logAt('lab', -1.6, y + 0.925, 37.4);
    ctx.marks.lab = B.wp(0, y, 34);
  }

  if (k === 3) { // ---------------------------------------- CRYOGENIC LAB (restricted)
    const pods = [[-4.6, 30.8], [4.6, 30.8], [-9.6, 38.6], [-4.8, 39.6], [4.8, 39.6], [9.6, 38.6]];
    pods.forEach(([u, v], i) => {
      P.cryoPod(B, M, u, y, v, Math.atan2(-u, 35 - v));
      ctx.creatures.push({ p: B.wp(u, y + 1.55, v), s: 0.85 + (i % 3) * 0.12, seed: 10 + i });
      ctx.pods.push(B.wp(u, y, v));
    });
    P.cryoPod(B, M, 0, y, 35, Math.PI, 1.35);
    ctx.creatures.push({ p: B.wp(0, y + 2.1, 35), s: 1.35, seed: 99, main: true });
    ctx.pods.push(B.wp(0, y, 35));
    ctx.marks.specimen = B.wp(0, y, 33.2);
    P.console_(B, M, S, 0, y, 31.6, Math.PI, 2.6, ['vitals', 'dna', 'status']);
    // specimen chamber wall by the windows
    for (let r = 0; r < 3; r++) for (let c = 0; c < 7; c++) {
      const u = -6 + c * 2, yy = 6.3 + r * 1.25;
      B.box(M.darkSmooth, u, yy + 0.55, 41.0, 1.9, 1.15, 1.0);
      B.box(M.cryoFluid, u, yy + 0.55, 40.49, 1.6, 0.9, 0.02);
      B.box(M.cyan, u, yy + 0.08, 40.5, 1.6, 0.02, 0.02);
      if ((r + c) % 2 === 0) B.sphere(M.creature, u, yy + 0.5, 40.8, 0.18, { sy: 1.4 });
    }
    B.colBox(0, 8.2, 41.0, 14, 4.4, 1.0);
    // suspended gantry machinery
    for (const v of [32.5, 37.5]) { B.box(M.gunmetal, 0, 11.0, v, 20, 0.25, 0.3); B.box(M.cyanSoft, 0, 10.86, v, 19.6, 0.02, 0.1); }
    ctx.marks.gantry = B.wp(0, 11.0, 35);
    for (const u of [-8, 8]) { B.box(M.gunmetal, u, 11.0, 35, 0.3, 0.25, 5.5); }
    // blue light rig
    for (const [u, v] of [[-4.6, 30.8], [4.6, 30.8], [0, 35], [-4.8, 39.6], [4.8, 39.6]]) {
      B.cyl(M.darkSmooth, u, 11.3, v, 0.7, 0.15, 20); B.cyl(M.blue, u, 11.22, v, 0.6, 0.02, 20);
    }
    B.light(0, 10.2, 35, 0x3a9cff, 60, 16);
    B.light(-6, 9.8, 31, 0x2a7cff, 26, 12);
    B.light(6, 9.8, 39, 0x2a7cff, 26, 12);
    // low cryo mist
    for (const [u, v, s] of [[-2, 34, 9], [3, 38, 8], [-6, 36, 7]]) {
      const g = new THREE.PlaneGeometry(s, s * 0.6); g.rotateX(-Math.PI / 2);
      B.addM(g, M.fxBlueBeam, B.mat(u, 6.25, v, 0, R() * 3, 0));
    }
    P.screenPanel(B, M, S.vitals, 5.2, 8.6, 27.25, 0, 3.4, 1.9);
    P.screenPanel(B, M, S.alert, -4.4, 8.9, 27.25, 0, 2.2, 1.24);
    { const [u, v, ry] = wallP(34, 0.55); P.rack(B, M, u, y, v, ry); }
    { const [u, v, ry] = wallP(36, 0.55); P.rack(B, M, u, y, v, ry); }
    { const [u, v, ry] = wallM(37.5, 0.5); P.console_(B, M, S, u, y, v, ry, 1.8, ['vitals', 'log']); }
    sign(B, M, [{ text: '▼ SUBLEVEL ACCESS', size: 70, color: '#ffb347', y: 128 }], -8.7, 9.5, 34.5, 0, 1.6, 0.36, { stripe: '#e8b21a' });
    logAt('cryo', 1.3, y + 1.0, 31.4);
    ctx.marks.cryo = B.wp(0, y, 30);
  }

  if (k === 4) { // ---------------------------------------- DOCK AIRLOCK / SUIT ROOM
    for (let i = 0; i < 4; i++) suit(B, M, -8.4 + i * 1.3, y, 28.0, 0);
    B.box(M.darkSmooth, -6.45, 9.6, 27.4, 5.6, 0.3, 0.3); B.box(M.cyan, -6.45, 9.44, 27.55, 5.4, 0.02, 0.02);
    for (const v of [30.5, 34.5, 38.5]) { const [u, vv, ry] = wallP(v, 0.45); P.lockers(B, M, u, y, vv, ry, 5); }
    { const [u, v, ry] = wallM(34, 0.45); P.lockers(B, M, u, y, v, ry, 5); }
    P.bench(B, M, -3, y, 34, Math.PI / 2, 2.4); P.bench(B, M, 3, y, 34, -Math.PI / 2, 2.4);
    for (const s of [-1, 1]) { B.rbox(M.whiteSmooth, s * 2.6, 8.1, 39.6, 0.4, 4.2, 0.5, 0.15, 0, { col: true }); B.box(M.cyan, s * 2.39, 8.1, 39.6, 0.02, 3.8, 0.3); }
    B.rbox(M.whiteSmooth, 0, 10.35, 39.6, 5.6, 0.35, 0.5, 0.15);
    B.box(M.hazard, 0, 6.015, 39.6, 4.8, 0.01, 0.35);
    P.crate(B, M, 9, y, 29, 0.2, 1.4, 0.9, 1.0); P.crate(B, M, 9.2, y + 0.9, 29.1, 0.4, 1.0, 0.6, 0.8); P.crate(B, M, 7.4, y, 29.4, -0.1);
    P.screenPanel(B, M, S.weather, 5.0, 8.6, 27.25, 0, 3.0, 1.7);
    logAt('dock', 3.2, y + 0.5, 34.2);
    ctx.marks.airlock = B.wp(0, y, 35);
  }

  if (k === 5) { // ---------------------------------------- ENGINEERING / MAINTENANCE
    P.generator(B, M, 4.2, y, 31.8, 0);
    P.generator(B, M, 4.2, y, 37.2, 0);
    B.box(M.hazard, 4.2, 6.02, 34.5, 5.4, 0.01, 0.15);
    for (const v of [29.9, 39.1]) B.box(M.hazard, 4.2, 6.02, v, 5.4, 0.01, 0.15);
    { const [u, v, ry] = wallP(30.5, 0.6); P.rack(B, M, u, y, v, ry); }
    { const [u, v, ry] = wallP(32, 0.6); P.rack(B, M, u, y, v, ry); }
    { const [u, v, ry] = wallP(38, 0.55); P.console_(B, M, S, u, y, v, ry, 2.2, ['status', 'log']); }
    P.labTable(B, M, -4.5, y, 30.2, 0, 3.4, 1.0);
    for (let i = 0; i < 4; i++) B.box(M.gunmetal, -5.8 + i * 0.7, y + 0.95, 30.2, 0.3, 0.1, 0.6);
    P.crate(B, M, -4.5, y, 40.2, 0, 1.6, 1.0, 1.0); P.crate(B, M, -2.6, y, 40.5, 0.3);
    P.lockers(B, M, -3.5, y, 27.45, 0, 4);
    for (const u of [-1, 0.2]) B.pipe(M.copper, u, 6.2, 41.2, u, 11.3, 41.2, 0.14);
    B.pipe(M.gunmetal, -14, 10.9, 40.8, 14, 10.9, 40.8, 0.18);
    B.light(4, 10.2, 34.5, 0xfff0d8, 30, 14);
    sign(B, M, [{ text: 'SERVICE LEVEL ▼', size: 80, color: '#ffb347', y: 100 }, { text: 'AUTHORIZED MAINTENANCE ONLY', size: 44, color: '#e8f6ff', y: 196 }], -8.7, 9.6, 34.5, 0, 2.0, 0.5, { stripe: '#e8b21a' });
    { // breaker bank 3: the story's containment reset
      const [u, v, ry] = wallP(35.0, 0.3);
      B.push(u, y, v, ry);
      B.box(M.gunmetal, 0, 1.05, 0, 1.4, 2.1, 0.5, 0, { col: true });
      B.box(M.darkSmooth, 0, 1.15, 0.26, 1.2, 1.5, 0.02);
      for (let i = 0; i < 6; i++) B.box(M.hazard, -0.45 + i * 0.18, 1.35, 0.28, 0.1, 0.5, 0.03);
      B.box(M.hazard, 0, 0.22, 0.26, 1.4, 0.12, 0.02);
      B.box(M.orangeLight, 0, 2.02, 0.26, 0.5, 0.06, 0.03);
      B.pop();
      ctx.marks.breaker = B.wp(...(() => { const [a, b] = wallP(35.0, 1.1); return [a, y, b]; })());
      B.light(...(() => { const [a, b] = wallP(35.0, 0.9); return [a, y + 2.4, b]; })(), 0xff6a3a, 8, 5);
    }
    logAt('eng', -3.6, y + 0.925, 30.2);
    ctx.marks.eng = B.wp(0, y, 34);
  }

  if (k === 6) { // ---------------------------------------- CREW QUARTERS
    const cab = [-10, -3.4, 3.2, 9.8];
    for (const u of cab) { B.box(M.white, u, 7.6, 38.9, 0.2, 3.2, 5.6, 0, { col: true }); B.box(M.cyanSoft, u, 9.2, 38.9, 0.22, 0.03, 5.6); }
    for (let i = 0; i < 3; i++) {
      const u = (cab[i] + cab[i + 1]) / 2;
      B.rbox(M.whiteSmooth, u - 1.5, 6.3, 39.2, 2.0, 0.6, 3.4, 0.06, Math.PI / 2 * 0, { col: true });
      B.rbox(M.fabricGrey, u - 1.5, 6.68, 39.2, 1.9, 0.18, 3.3, 0.08, 0, { seg: 3 });
      B.rbox(M.whiteSmooth, u - 1.5, 6.84, 40.6, 1.4, 0.14, 0.4, 0.06, 0, { seg: 3 });
      B.box(M.orange, u - 1.5, 6.8, 38.4, 1.95, 0.05, 1.2);
      B.rbox(M.whiteSmooth, u + 1.6, 6.74, 40.9, 1.2, 0.05, 0.6, 0.02); B.box(M.darkSmooth, u + 1.6, 6.37, 40.9, 1.1, 0.72, 0.5, 0, { col: true });
      P.monitor(B, M, S.log, u + 1.6, 6.77, 41.0, Math.PI * 0);
      P.chair(B, M, u + 1.6, y, 40.2, Math.PI, M.orangeGloss);
      P.ceilingLight(B, M, u, 11.4, 39, 1.4, 0.3, 0, M.lightWarm);
    }
    P.lockers(B, M, -6, y, 27.45, 0, 6);
    P.lockers(B, M, 7, y, 27.45, 0, 5);
    P.sofa(B, M, 0, y, 33.2, 0, 3.0, M.orange);
    P.coffeeTable(B, M, 0, y, 34.9, 0, 1.3, 0.7);
    P.armchair(B, M, -2.6, y, 35.6, Math.PI / 2 + 0.3, M.fabricGrey);
    { const [u, v, ry] = wallM(32, 0.2); P.screenPanel(B, M, S.weather, u, 8.4, v, ry, 2.2, 1.24); }
    P.potPlant(B, M, 12, y, 30, 1.4, 41);
    logAt('quarters', 5.0, y + 0.8, 40.9);
    ctx.marks.quarters = B.wp(0, y, 34);
  }

  if (k === 7) { // ---------------------------------------- MESS HALL
    for (const v of [31.5, 36.0]) {
      B.rbox(M.whiteSmooth, -3, 6.74, v, 6.0, 0.06, 1.2, 0.03);
      B.box(M.darkSmooth, -3, 6.37, v, 5.4, 0.72, 0.3, 0, { col: true });
      B.box(M.cyanSoft, -3, 6.02, v, 5.4, 0.01, 0.4);
      for (let i = 0; i < 5; i++) { P.chair(B, M, -5.4 + i * 1.2, y, v - 0.95, 0, i % 2 ? M.orangeGloss : M.whiteSmooth); P.chair(B, M, -5.4 + i * 1.2, y, v + 0.95, Math.PI, M.whiteSmooth); }
    }
    // galley along + wall
    { const [u, v, ry] = wallP(31.2, 0.5); P.storage(B, M, u, y, v, ry, 3.6, 1.0, 0.8); }
    { const [u, v, ry] = wallP(36.0, 0.5); P.storage(B, M, u, y, v, ry, 3.6, 1.0, 0.8); }
    { const [u, v, ry] = wallP(33.6, 0.2); P.screenPanel(B, M, S.status, u, 8.6, v, ry, 2.4, 1.3); }
    for (const v of [30.2, 32.4, 35.0, 37.2]) { const [u, vv, ry] = wallP(v, 0.25); B.push(u, y, vv, ry); B.box(M.darkSmooth, 0, 1.4, 0, 0.8, 0.9, 0.2); B.box(M.orangeLight, 0, 1.6, 0.11, 0.5, 0.3, 0.01); B.pop(); }
    // vending
    B.rbox(M.darkSmooth, 9, 7.1, 27.6, 1.2, 2.2, 0.8, 0.05, 0, { col: true });
    B.add(G.plane(), S.log, 9, 7.5, 28.01, 0, 0, 0, 0.9, 1.2, 1, { keepUV: true });
    B.box(M.orangeLight, 9, 8.18, 28.0, 1.1, 0.04, 0.02);
    for (const u of [-10.5, -5.5, 5.5]) P.cafeSet(B, M, u, y, 39.8, 0.4, 3, M.orangeGloss);
    P.potPlant(B, M, 0.3, y, 40.8, 1.4, 51); P.potPlant(B, M, -14.5, y, 40.6, 1.5, 52);
    logAt('mess', -1.2, y + 0.77, 36.0);
    ctx.marks.mess = B.wp(0, y, 34);
  }
}

// ================================================================ LEVEL 2
export function buildGallery(B, M, S, ctx, k) {
  const y = 12;
  // loungers facing the ocean
  const seatU = k === 0 ? [2.5, 8.5] : [-6.5, 0, 6.5];
  for (const u of seatU) P.sofa(B, M, u, y, 31.9, 0, 2.6, (k + Math.round(u)) % 2 ? M.orange : M.fabricGrey);
  P.telescope(B, M, k === 0 ? -1 : -10, y, 33.2, 0);
  P.telescope(B, M, 11, y, 33.2, 0);
  // planters along the atrium glass
  if (k !== 0) { P.shrubBox(B, M, -4.2, y, 25.0, 0, 3.4, 0.8, 70 + k); P.shrubBox(B, M, 4.2, y, 25.0, 0, 3.4, 0.8, 80 + k); }
  else P.shrubBox(B, M, 4.2, y, 25.0, 0, 3.4, 0.8, 80 + k);
  // freestanding info column
  if (k !== 3 && k !== 5 && k !== 0) {
    B.rbox(M.whiteSmooth, -10.5, 13.3, 28.2, 0.6, 2.6, 0.6, 0.15, Math.PI / 8, { col: true });
    P.screenPanel(B, M, [S.sonar, S.weather, S.map, S.status][k % 4], -10.5, 13.8, 28.52, Math.PI / 8 - 0.2, 0.5, 0.9, 0.03);
  }
  if (k === 2) ctx.marks.log_gallery = B.wp(3.0, y + 0.45, 31.6);
  if (k === 6) ctx.marks.log_gallery2 = B.wp(-3.2, y + 0.45, 31.6);
  if (k === 0) ctx.marks.gallery = B.wp(0, y, 29);
}

export function buildMissionControl(B, M, S, ctx) {
  const y = 12;
  // raised dais for the rear consoles
  B.rbox(M.dark, 0, y + 0.15, 26.4, 12.4, 0.3, 2.8, 0.05, 0, { col: true });
  B.box(M.cyan, 0, y + 0.305, 27.79, 12.2, 0.01, 0.03);
  for (const u of [-4.6, 0, 4.6]) P.console_(B, M, S, u, y, 31.0, Math.PI, 3.2, u === 0 ? ['status', 'map', 'sonar'] : (u < 0 ? ['sonar', 'weather', 'log'] : ['log', 'status', 'dna']));
  for (const u of [-4.6, 0, 4.6]) { P.officeChair(B, M, u - 0.6, y, 30.0, 0.1, M.fabricGrey); P.officeChair(B, M, u + 0.7, y, 30.0, -0.1, M.fabricGrey); }
  for (const u of [-3.4, 3.4]) P.console_(B, M, S, u, y + 0.3, 26.8, Math.PI, 3.0, ['map', 'status']);
  ctx.marks.mcConsole = B.wp(0, y, 29.9);
  ctx.marks.mc = B.wp(0, y, 29);
  // holo table in the middle aisle
  P.holoTableBase(B, M, 0, y, 28.6, 0.8);
  ctx.holoSpots.push({ p: B.wp(0, y + 1.0, 28.6), kind: 'globe', s: 0.6 });
  // monitoring wall on the inner (dark) wall
  for (const [u, yy, kind] of [[-6, 15.2, 'sonar'], [-2, 15.9, 'map'], [2, 15.9, 'status'], [6, 15.2, 'weather'], [-2, 13.9, 'log'], [2, 13.9, 'vitals']]) P.screenPanel(B, M, S[kind], u, yy, 24.2, 0, 3.6, 2.0 * 0.9 * (yy < 14.5 ? 0.9 : 1));
  // holographic panels in front of the panoramic window
  for (const [u, kind, ry] of [[-6.5, 'holo', 0.25], [0, 'holo', 0], [6.5, 'holo', -0.25]]) {
    B.add(G.plane(), S[kind], u, 15.0, 33.2, 0, Math.PI + ry, 0, 3.2, 1.8, 1, { keepUV: true, interior: true });
  }
  // comms racks along the radial walls
  for (const v of [31.6, 32.6]) { const [u, vv, ry] = wallP(v, 0.6); P.rack(B, M, u, y, vv, ry); }
  for (const v of [31.6, 32.6]) { const [u, vv, ry] = wallM(v, 0.6); P.rack(B, M, u, y, vv, ry); }
  { const [u, v, ry] = wallP(25.8, 0.4); P.techPanel(B, M, u, y + 0.8, v, ry, 1.2, 1.6); }
  // comm dish model on a plinth
  B.cyl(M.darkSmooth, -9.5, y + 0.5, 26.8, 0.5, 1.0, 20, { col: true });
  B.add(G.hemi(20, 8), M.whiteSmooth, -9.5, y + 1.35, 26.8, -2.2, 0, 0, 0.45, 0.16, 0.45);
  B.light(0, 16.5, 30, 0xcfe8ff, 36, 16);
  B.light(0, 16.2, 26, 0x6fd8ff, 18, 10);
  ctx.marks.log_mc = B.wp(3.4 + 0.9, y + 1.25, 27.0);
}

// ================================================================ TERRACE & ROOF
export function buildTerraceProps(B, M, S, ctx, k) {
  const y = 12;
  const stairs = (k === 2 || k === 6);
  if (!stairs) {
    P.shrubBox(B, M, -9, y, 40.8, 0, 3.0, 0.8, 100 + k);
    P.shrubBox(B, M, 9, y, 40.8, 0, 3.0, 0.8, 110 + k);
  } else P.shrubBox(B, M, 10, y, 40.8, 0, 3.0, 0.8, 110 + k);
  if (k % 2 === 1) {
    P.hvac(B, M, 0, y, 37.8, 0, 3.4, 2.0);
    P.hvac(B, M, -7, y, 37.2, 0.1, 2.4, 1.6);
    B.pipe(M.gunmetal, -5.2, 12.9, 37.6, -1.7, 12.9, 37.8, 0.2);
    B.box(M.hazard, 3.5, 12.02, 35.2, 2.4, 0.01, 0.12);
    sign(B, M, [{ text: 'MAINTENANCE AREA', size: 70, color: '#ffb347', y: 128 }], 2.6, 13.2, 39.0, 0, 1.6, 0.36, { stripe: '#e8b21a' });
  } else if (!stairs) {
    for (const u of [-4, 0, 4]) {
      B.push(u, y, 38.4, 0);
      B.rbox(M.whiteSmooth, 0, 0.3, 0, 0.7, 0.12, 1.9, 0.05);
      B.add(G.box(), M.fabricGrey, 0, 0.55, -0.7, 0.55, 0, 0, 0.66, 0.08, 0.7);
      B.cyl(M.chrome, -0.3, 0.12, 0.8, 0.02, 0.24, 6); B.cyl(M.chrome, 0.3, 0.12, 0.8, 0.02, 0.24, 6);
      B.colBox(0, 0.3, 0, 0.7, 0.6, 1.9);
      B.pop();
    }
    P.roundTable(B, M, -2, y, 39.8, 0.35, 0.5); P.roundTable(B, M, 2, y, 39.8, 0.35, 0.5);
  } else {
    P.bench(B, M, 6, y, 40.6, Math.PI);
  }
  if (k === 0) ctx.marks.terrace = B.wp(0, y, 38);
}

export function buildRoofProps(B, M, S, ctx, k) {
  const y = 18;
  if (k === 4) {
    // comms uplink array
    B.cyl(M.whiteSmooth, 0, y + 0.6, 30.6, 1.6, 1.2, 32, { col: true });
    B.add(G.torus(1.6, 0.04, 6, 40), M.cyan, 0, y + 1.1, 30.6, Math.PI / 2, 0, 0);
    ctx.marks.dish = B.wp(0, y + 1.2, 30.6);
    // uplink terminal
    P.console_(B, M, S, 4.4, y, 29.2, Math.PI * 0.85, 1.8, ['holo', 'status']);
    ctx.marks.uplink = B.wp(4.2, y, 28.1);
    for (const u of [-8.5, 8.5]) {
      B.cyl(M.metal, u, y + 5, 31.5, 0.12, 10, 10);
      B.cyl(M.darkSmooth, u, y + 0.2, 31.5, 0.6, 0.4, 16, { col: true });
      for (let i = 1; i < 5; i++) B.box(M.metal, u, y + i * 2, 31.5, 1.2 - i * 0.2, 0.05, 0.05);
      ctx.blinkers.push({ p: B.wp(u, y + 10.2, 31.5), color: 0xff3020, period: 1.4 });
    }
    sign(B, M, [{ text: 'COMMS UPLINK ARRAY', size: 80, color: '#e8f6ff', y: 100 }, { text: 'ORBITAL RELAY · RESTRICTED BEAM PATH', size: 40, color: '#ffb347', y: 196 }], 0, y + 2.0, 28.95, Math.PI, 2.4, 0.6);
    B.cyl(M.darkSmooth, 0, y + 1.5, 29.0, 0.05, 1.0, 6);
  } else if (k === 2 || k === 6) {
    P.telescope(B, M, 8, y, 32.8, 0);
    P.bench(B, M, 6, y, 30.5, 0);
  } else {
    P.bench(B, M, -4, y, 31.8, 0); P.bench(B, M, 4, y, 31.8, 0);
    P.telescope(B, M, 0, y, 33.2, 0);
    P.potPlant(B, M, -9, y, 32.8, 1.3, 200 + k); P.potPlant(B, M, 9, y, 32.8, 1.3, 210 + k);
    if (k % 2 === 1) {
      // small solar collectors at the corners
      for (const s of [-1, 1]) {
        B.push(s * 11.5, y, 31.5, 0);
        B.box(M.metal, 0, 0.5, 0, 0.1, 1.0, 0.1);
        B.add(G.box(), M.screenOff, 0, 1.05, 0, -0.5, 0, 0, 2.2, 0.05, 1.4);
        B.add(G.box(), M.cyanDim, 0, 1.08, 0, -0.5, 0, 0, 2.0, 0.005, 0.02);
        B.pop();
      }
    }
  }
  if (k === 0) ctx.marks.roof = B.wp(0, y, 30);
  if (k === 7) ctx.marks.log_roof = B.wp(-4, y + 0.45, 31.8);
}

export function buildServiceProps(B, M, S, ctx, k) {
  const y = 2;
  const R = rng(300 + k);
  if (k !== 3 && k !== 5) {
    P.crate(B, M, 6, y, 25.8, 0.1, 1.2, 0.8, 0.8);
    if (R() < 0.6) P.crate(B, M, 6.1, y + 0.8, 25.8, -0.2, 0.9, 0.6, 0.7);
  }
  for (let i = 0; i < 3; i++) B.cyl(i % 2 ? M.redPaint : M.gunmetal, -8 + i * 0.7, y + 0.45, 26.3, 0.3, 0.9, 14, { col: true });
  B.box(M.darkSmooth, -1, y + 1.4, 26.9, 1.6, 1.2, 0.2);
  B.box(M.screenOff, -1, y + 1.5, 26.79, 1.2, 0.7, 0.01);
  if (k === 6) ctx.marks.log_service = B.wp(-1, y + 0.9, 26.4);
}
