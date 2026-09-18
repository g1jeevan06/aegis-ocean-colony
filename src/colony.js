// The main octagonal platform: hull, decks, the two ring buildings, the dome,
// stairs, the lift shaft, the atrium garden and the service level.
import * as THREE from 'three';
import { G } from './builder.js';
import { T8, COS8, LV, AP, octPts, circlePts, sectorAngle, sectorToWorld, rng } from './util.js';
import * as P from './props.js';
import { buildRoom, buildGallery, buildMissionControl, buildTerraceProps, buildRoofProps, buildServiceProps } from './interiors.js';
import { signTex } from './textures.js';
import { buildCentralTower } from './exterior.js';

export const ELEV = { k: 0, u: -7, v: 30.5, r: 1.55, hole: 1.75 };
export const SVC_STAIR = { u0: -9.6, u1: -7.8, v0: 27.3, v1: 34.2 };
export const STAIR_SECTORS = [2, 6];
// outer ring building: apothem 48..56, roof 16 m, a gateway at every sector centre
export const OUTER = { a0: 48, a1: 56.2, top: 16, gate: (k) => (k % 2 === 0 ? 3.2 : 6.6) };

const rectL = (k, u0, u1, v0, v1) => [[u0, v0], [u1, v0], [u1, v1], [u0, v1]].map(([u, v]) => sectorToWorld(k, u, v));
const trapL = (v0, v1) => [[-T8 * v0, v0], [T8 * v0, v0], [T8 * v1, v1], [-T8 * v1, v1]];

export function elevWorld() { const [x, z] = sectorToWorld(ELEV.k, ELEV.u, ELEV.v); return { x, z }; }

// sign on a thin plate, own material
const signCache = new Map();
export function sign(B, M, lines, x, y, z, ry, w, h, opt = {}) {
  const key = JSON.stringify([lines, opt.bg, opt.border, opt.stripe, w, h]);
  let mat = signCache.get(key);
  if (!mat) {
    const t = signTex(lines, { w: opt.pw || 1024, h: opt.ph || Math.round(1024 * h / w), bg: opt.bg || 'rgba(4,14,20,0.92)', border: opt.border, stripe: opt.stripe });
    mat = new THREE.MeshBasicMaterial({ map: t, transparent: !!opt.transparent, color: new THREE.Color(opt.bright || 1.3, opt.bright || 1.3, opt.bright || 1.3) });
    mat.polygonOffset = true; mat.polygonOffsetFactor = -1; mat.polygonOffsetUnits = -4; // 1 mm off its plate
    mat.userData.noShadow = true; mat.userData.keepUV = true; mat.name = 'sign';
    signCache.set(key, mat);
  }
  B.push(x, y, z, ry);
  if (!opt.noPlate) B.box(M.darkSmooth, 0, 0, -0.03, w + 0.06, h + 0.06, 0.05);
  B.add(G.plane(), mat, 0, 0, 0.001, 0, 0, 0, w, h, 1, { keepUV: true });
  B.pop();
}

export function addDoor(B, ctx, x, y, z, ry, w, h, opt = {}) {
  const p = B.wp(x, y, z), yaw = B.worldYaw(ry);
  const mesh = P.makeDoor(ctx.M, w, h, opt.style || 'white');
  mesh.position.copy(p).setY(p.y + h / 2); mesh.rotation.y = yaw;
  if (opt.interior !== false) mesh.traverse(o => o.layers.set(1));
  ctx.scene.add(mesh);
  const col = B.colBox(x, y + h / 2, z, w, h, 0.3, ry, 'solid');
  const d = { id: opt.id || ('door' + ctx.doors.length), pos: p, yaw, w, h, mesh, col, open: 0, target: 0, lock: opt.lock || null, name: opt.name || '', auto: opt.auto !== false };
  ctx.doors.push(d);
  // frame
  B.box(ctx.M.darkSmooth, x, y + h + 0.1, z, w + 0.5, 0.2, 0.42, ry);
  B.push(x, y, z, ry);
  B.box(ctx.M.darkSmooth, -w / 2 - 0.12, h / 2, 0, 0.24, h, 0.42);
  B.box(ctx.M.darkSmooth, w / 2 + 0.12, h / 2, 0, 0.24, h, 0.42);
  const lm = opt.lock ? ctx.M.red : ctx.M.cyan;
  for (const s of [-1, 1]) { B.box(lm, s * (w / 2 + 0.005), h / 2, 0.215, 0.03, h - 0.2, 0.01); B.box(lm, s * (w / 2 + 0.005), h / 2, -0.215, 0.03, h - 0.2, 0.01); }
  B.box(lm, 0, h + 0.03, 0.215, w, 0.03, 0.01); B.box(lm, 0, h + 0.03, -0.215, w, 0.03, 0.01);
  B.pop();
  return d;
}

export function buildColony(B, M, S, ctx) {
  ctx.M = M;
  const R = rng(4242);
  const ew = elevWorld();
  const elevHole = circlePts(ELEV.hole, 20, ew.x, ew.z);
  const stairHoles = [3, 5].map(k => rectL(k, SVC_STAIR.u0, SVC_STAIR.u1, SVC_STAIR.v0, SVC_STAIR.v1));

  // ================================================================ HULL & LOWER STRUCTURES
  B.chunk = 'hull'; B.interior = false;
  B.slab(M.hull, octPts(AP.HULL), null, -5, 1.6);
  B.colPoly(octPts(AP.HULL), -5, 1.6, 'solid');
  B.slab(M.algae, octPts(AP.HULL + 0.012), [octPts(AP.HULL - 0.4)], -1.2, 0.75); // waterline growth band
  // corner pylons, legs and thrusters are added by exterior.js
  for (let k = 0; k < 8; k++) {
    B.push(0, 0, 0, sectorAngle(k));
    const hw = T8 * 54.6;
    // lower mechanical band
    B.box(M.dark, 0, 2.6, 54.6, hw * 2, 2.0, 0.5);
    for (let i = -3; i <= 3; i++) {
      B.box(M.grating, i * 6.2, 2.6, 54.9, 3.4, 1.3, 0.12);
      B.box(M.darkSmooth, i * 6.2 + 2.1, 2.6, 54.95, 0.4, 1.7, 0.2);
    }
    B.pipe(M.gunmetal, -hw, 1.9, 55.1, hw, 1.9, 55.1, 0.2);
    B.pipe(M.copper, -hw, 3.35, 55.05, hw, 3.35, 55.05, 0.1);
    // stepped ledge + upper white band
    B.box(M.hullPaint, 0, 3.7, 55.3, T8 * 55.8 * 2, 0.2, 1.6);
    B.box(M.white, 0, 4.55, 56.0, T8 * 56.2 * 2, 1.7, 0.4);
    B.box(M.cyan, 0, 3.95, 56.21, T8 * 56.2 * 2 - 0.6, 0.06, 0.04);
    for (let i = -3; i <= 3; i++) {
      B.box(M.darkSmooth, i * 6.5, 4.55, 56.22, 1.2, 0.9, 0.05);
      B.box(M.grating, i * 6.5, 4.55, 56.25, 1.0, 0.7, 0.02);
    }
    // ladder down to the waterline + fenders
    B.push(10.5, 0, 56.3, 0);
    for (let s = 0; s < 12; s++) B.box(M.metal, 0, 0.4 + s * 0.4, 0.15, 0.6, 0.04, 0.04);
    B.box(M.metal, -0.3, 2.6, 0.15, 0.05, 4.8, 0.05); B.box(M.metal, 0.3, 2.6, 0.15, 0.05, 4.8, 0.05);
    B.pop();
    for (const u of [-16, 0, 16]) B.cyl(M.rubber, u, 0.9, 55.2, 0.45, 1.8, 14, { rx: Math.PI / 2, rz2: 0.45 });
    B.pop();
  }

  // ================================================================ MAIN DECK
  B.chunk = 'deck';
  B.slab(M.hullPaint, octPts(AP.DECK), stairHoles, 5.4, 6.0);
  B.colPoly(octPts(AP.DECK), 5.4, 6.0, 'floor', { holes: stairHoles });
  B.flat(M.deck, octPts(AP.DECK), [octPts(AP.RING1)], 6.01);
  for (let k = 0; k < 8; k++) {
    B.push(0, 0, 0, sectorAngle(k));
    const hw = T8 * AP.DECK;
    // deck edge fascia + cap
    B.box(M.white, 0, 5.7, AP.DECK + 0.12, hw * 2, 0.6, 0.24);
    B.box(M.metal, 0, 6.03, AP.DECK - 0.1, hw * 2, 0.05, 0.4);
    // railing with gaps for bridges / observation decks
    const gap = (k % 2 === 0) ? 2.6 : 6.2;
    const ve = AP.DECK - 0.25, he = T8 * ve;
    // the outer ring building (exterior.js) closes the edge; only the gateway
    // mouths need a parapet beside the bridge / observation-deck openings
    const gw = OUTER.gate(k);
    P.parapet(B, M, -gw, ve, -gap, ve, 6.0);
    P.parapet(B, M, gap, ve, gw, ve, 6.0);
    B.box(M.cyanSoft, 0, 6.02, 43.4, T8 * 43.4 * 2 - 0.4, 0.012, 0.06);
    B.pop();
  }

  // ---------------------------------------------------------------- observation decks (odd sectors)
  for (const k of [1, 3, 5, 7]) {
    B.push(0, 0, 0, sectorAngle(k));
    const v0 = AP.DECK - 0.3;
    const outline = [[-6.2, v0], [6.2, v0], [9, 60], [9, 64], [6, 67.5], [-6, 67.5], [-9, 64], [-9, 60]];
    const glassHole = [[-3.2, 59.5], [3.2, 59.5], [3.2, 65], [-3.2, 65]];
    B.slab(M.hullPaint, outline, [glassHole], 5.5, 6.0);
    B.flat(M.deck, outline, [glassHole], 6.01);
    B.box(M.glassFloor, 0, 5.95, 62.25, 6.4, 0.1, 5.5);
    B.box(M.metal, 0, 6.0, 62.25, 0.12, 0.04, 5.5); B.box(M.metal, 0, 6.0, 62.25, 6.4, 0.04, 0.12);
    B.box(M.cyan, 0, 5.9, 59.55, 6.4, 0.04, 0.06); B.box(M.cyan, 0, 5.9, 64.95, 6.4, 0.04, 0.06);
    B.colPoly(outline, 5.5, 6.0, 'floor');
    // fascia + LED edge
    for (let i = 1; i < outline.length; i++) {
      const a = outline[i], b = outline[(i + 1) % outline.length];
      B.wall(M.white, a[0], a[1], b[0], b[1], 5.37, 0.73, 0.2); // 3 cm below the hull underside, 10 cm lip above the deck, not flush with it or the edge cap
      B.wall(M.cyan, a[0], a[1], b[0], b[1], 5.45, 0.05, 0.24);
    }
    P.railPath(B, M, [[6.2, v0], [9, 60], [9, 64], [6, 67.5], [-6, 67.5], [-9, 64], [-9, 60], [-6.2, v0]], 6.0);
    // bracing under
    for (const u of [-5, 5]) {
      B.add(G.box(), M.gunmetal, u, 3.9, 61, -0.62, 0, 0, 0.35, 0.35, 12);
      B.cyl(M.hullPaint, u, 1.5, 64, 0.5, 8, 12);
    }
    P.telescope(B, M, -4.5, 6, 65.8, 0);
    P.telescope(B, M, 4.5, 6, 65.8, 0);
    P.bench(B, M, -6.5, 6, 61.5, Math.PI / 2);
    P.bench(B, M, 6.5, 6, 61.5, -Math.PI / 2);
    sign(B, M, [{ text: 'OBSERVATION DECK ' + ['', 'SE', '', 'NE', '', 'NW', '', 'SW'][k], size: 70, color: '#dff6ff', y: 70 }, { text: 'GLASS FLOOR · 6 M ABOVE SEA LEVEL', size: 40, color: '#4ff2ff', y: 160 }], 0, 7.3, v0 + 0.6, Math.PI, 2.6, 0.62);
    B.cyl(M.darkSmooth, 0, 6.6, v0 + 0.6, 0.06, 1.2, 8);
    ctx.marks['obs' + k] = B.wp(0, 6, 64);
    B.pop();
  }

  // ================================================================ RING 1 (level 1, y 6..12)
  for (let k = 0; k < 8; k++) {
    const th = sectorAngle(k);
    B.push(0, 0, 0, th);
    const hwF = T8 * AP.RING1;

    // ------------------------------------------------ facade (exterior)
    B.chunk = 'facade1'; B.interior = false;
    const door = (k === 0 || k === 4);
    const dg = 2.1;
    // corner column at + vertex
    B.push(T8 * AP.RING1, 0, AP.RING1, Math.PI / 8);
    B.rbox(M.whiteSmooth, 0, 9, 0, 1.1, 6.0, 1.1, 0.3, 0, { col: true });
    B.box(M.cyan, 0, 9, 0.56, 0.06, 5.2, 0.02);
    B.pop();
    if (!door) {
      B.box(M.white, 0, 6.3, AP.RING1, hwF * 2, 0.6, 0.5);
    } else {
      B.box(M.white, (-hwF - dg) / 2, 6.3, AP.RING1, hwF - dg, 0.6, 0.5);
      B.box(M.white, (hwF + dg) / 2, 6.3, AP.RING1, hwF - dg, 0.6, 0.5);
    }
    B.box(M.white, 0, 11.1, AP.RING1 + 0.05, hwF * 2, 1.8, 0.6);
    B.box(M.cyan, 0, 10.24, AP.RING1 + 0.36, hwF * 2 - 1, 0.05, 0.04);
    B.box(M.metal, 0, 12.02, AP.RING1 + 0.1, hwF * 2, 0.06, 0.8);
    const bays = 10, bw = hwF * 2 / bays;
    for (let i = 1; i < bays; i++) {
      const u = -hwF + i * bw;
      if (door && Math.abs(u) < dg + 0.2) continue;
      B.box(M.metal, u, 8.4, AP.RING1, 0.12, 3.6, 0.34);
    }
    const glassMat = k === 3 ? M.glassFrost : M.glassTint;
    if (!door) B.box(glassMat, 0, 8.4, AP.RING1, hwF * 2, 3.6, 0.04);
    else {
      B.box(glassMat, (-hwF - dg) / 2, 8.4, AP.RING1, hwF - dg, 3.6, 0.04);
      B.box(glassMat, (hwF + dg) / 2, 8.4, AP.RING1, hwF - dg, 3.6, 0.04);
      B.box(glassMat, 0, 9.65, AP.RING1, dg * 2, 1.1, 0.04);
    }
    if (door) {
      B.colBox((-hwF - dg) / 2, 8.7, AP.RING1, hwF - dg, 5.4, 0.35);
      B.colBox((hwF + dg) / 2, 8.7, AP.RING1, hwF - dg, 5.4, 0.35);
      // entrance canopy
      B.rbox(M.whiteSmooth, 0, 10.5, AP.RING1 + 2.0, 7.4, 0.36, 3.6, 0.15);
      B.box(M.cyan, 0, 10.3, AP.RING1 + 3.8, 7.0, 0.04, 0.04);
      for (const s of [-1, 1]) {
        B.rbox(M.whiteSmooth, s * 3.4, 8.2, AP.RING1 + 3.4, 0.35, 4.4, 0.35, 0.12, 0, { col: true });
        B.box(M.cyan, s * 3.4, 8.2, AP.RING1 + 3.58, 0.04, 3.8, 0.02);
      }
      ceilLightsCanopy(B, M, AP.RING1 + 2);
      addDoor(B, ctx, 0, 6.0, AP.RING1, 0, 3.6, 3.0, { style: 'glass', id: k === 0 ? 'mainEntrance' : 'dockEntrance', interior: false });
      sign(B, M, [{ text: k === 0 ? 'AEGIS · MAIN ENTRANCE' : 'MARINE DOCK ACCESS', size: 80, color: '#e8f6ff', y: 128 }], 0, 10.1, AP.RING1 + 0.4, 0, 3.8, 0.48, { bg: 'rgba(3,12,18,0.95)' });
    } else {
      B.colBox(0, 8.7, AP.RING1, hwF * 2, 5.4, 0.35);
    }
    if (k === 3) { // cryo lab: shutters closed behind the frosted glass
      for (let i = 0; i < 40; i++) B.box(M.darkSmooth, -hwF + 0.4 + i * (hwF * 2 - 0.8) / 39, 8.4, AP.RING1 - 0.25, 0.12, 3.5, 0.02, 0.6);
      B.box(M.dark, 0, 8.4, AP.RING1 - 0.4, hwF * 2 - 0.4, 3.7, 0.1);
    }

    // ------------------------------------------------ interior shell
    B.chunk = 'ring1_' + k; B.interior = true;
    B.envOverride = k === 3 ? 0.12 : null;
    // radial wall on + side (between sector k and k+1)
    const ax0 = T8 * AP.COR, az0 = AP.COR, ax1 = T8 * AP.RING1, az1 = AP.RING1;
    B.wall(M.white, ax0, az0, ax1, az1, 6, 5.4, 0.3, { col: true, extend: -0.6 });
    B.wall(M.darkSmooth, ax0, az0, ax1, az1, 6, 0.14, 0.34, { extend: -0.6 });
    B.wall(M.cyanSoft, ax0, az0, ax1, az1, 9.6, 0.04, 0.33, { extend: -0.8 });
    // corridor wall at v=27
    const hwC = T8 * AP.COR;
    if (k === 0) {
      B.box(M.white, (-hwC - 5) / 2, 8.7, AP.COR, hwC - 5, 5.4, 0.3, 0, { col: true });
      B.box(M.white, (hwC + 5) / 2, 8.7, AP.COR, hwC - 5, 5.4, 0.3, 0, { col: true });
      B.box(M.white, 0, 10.7, AP.COR, 10, 1.4, 0.3);
      B.box(M.cyan, 0, 9.98, AP.COR, 10, 0.04, 0.34);
      for (const s of [-1, 1]) B.rbox(M.whiteSmooth, s * 5.2, 8.7, AP.COR, 0.6, 5.4, 0.6, 0.2, 0, { col: true });
    } else {
      const dh = 3.0, dw = 2.2;
      B.box(M.white, (-hwC - dw / 2 - 0.25) / 2, 8.7, AP.COR, hwC - dw / 2 - 0.25, 5.4, 0.3, 0, { col: true });
      B.box(M.white, (hwC + dw / 2 + 0.25) / 2, 8.7, AP.COR, hwC - dw / 2 - 0.25, 5.4, 0.3, 0, { col: true });
      B.box(M.white, 0, 6 + dh + (5.4 - dh) / 2 + 0.1, AP.COR, dw + 0.5, 5.4 - dh - 0.2, 0.3);
      const names = ['', 'CREW LOUNGE', 'RESEARCH LAB', 'CRYOGENICS', 'DOCK AIRLOCK', 'ENGINEERING', 'CREW QUARTERS', 'MESS HALL'];
      const cryo = k === 3;
      addDoor(B, ctx, 0, 6, AP.COR, 0, dw, dh, { style: cryo ? 'red' : 'white', lock: cryo ? 'cryo' : null, id: 'door_r' + k, name: names[k] });
      sign(B, M, [{ text: names[k], size: 86, color: cryo ? '#ff6a5c' : '#e8f6ff', y: 100 }, { text: 'L1 · SECTOR ' + (k + 1), size: 44, color: cryo ? '#ff9a8a' : '#4ff2ff', y: 196 }], 0, 9.75, AP.COR - 0.2, Math.PI, 2.1, 0.5, cryo ? { stripe: '#ff2a24' } : {});
      if (cryo) {
        B.add(G.plane(), S.alert, 1.9, 7.8, AP.COR - 0.17, 0, Math.PI, 0, 0.9, 0.5, 1, { keepUV: true });
        B.box(M.hazard, 0, 6.02, AP.COR - 0.7, 2.6, 0.01, 0.8);
      }
    }
    B.box(M.darkSmooth, 0, 6.07, AP.COR, hwC * 2, 0.14, 0.34);
    // atrium glass at v=22
    const hwA = T8 * AP.ATRIUM, even = k % 2 === 0, og = 1.8;
    const segsA = even ? [[-hwA, -og], [og, hwA]] : [[-hwA, hwA]];
    for (const [a, b] of segsA) {
      B.box(M.glass, (a + b) / 2, 8.2, AP.ATRIUM, b - a, 4.2, 0.04, 0, { col: true });
      B.box(M.darkSmooth, (a + b) / 2, 6.06, AP.ATRIUM, b - a, 0.12, 0.2);
      const n = Math.max(1, Math.round((b - a) / 2.4));
      for (let i = 0; i <= n; i++) B.box(M.metal, a + (b - a) * i / n, 8.2, AP.ATRIUM, 0.1, 4.2, 0.18);
    }
    B.box(M.white, 0, 10.9, AP.ATRIUM, hwA * 2, 1.0, 0.3);
    B.box(M.cyan, 0, 10.38, AP.ATRIUM - 0.16, hwA * 2, 0.04, 0.02);
    if (even) {
      B.box(M.white, 0, 9.85, AP.ATRIUM, og * 2, 1.1, 0.3);
      B.box(M.cyan, 0, 9.28, AP.ATRIUM, og * 2, 0.03, 0.32);
    }
    // corner column at the inner vertex
    B.push(T8 * AP.ATRIUM, 0, AP.ATRIUM, Math.PI / 8);
    B.rbox(M.whiteSmooth, 0, 8.7, 0, 0.6, 5.4, 0.6, 0.2, 0, { col: true });
    B.pop();

    // floors + ceiling
    const roomPts = trapL(AP.COR, AP.RING1);
    const corPts = trapL(AP.ATRIUM, AP.COR);
    const localStairHole = (k === 3 || k === 5) ? [[[SVC_STAIR.u0, SVC_STAIR.v0], [SVC_STAIR.u1, SVC_STAIR.v0], [SVC_STAIR.u1, SVC_STAIR.v1], [SVC_STAIR.u0, SVC_STAIR.v1]]] : [];
    const floorMat = k === 5 ? M.floorLight : (k === 3 ? M.floor : M.floor);
    B.flat(floorMat, roomPts, localStairHole, 6.012);
    B.flat(M.floorLight, corPts, [], 6.012);
    B.box(M.cyanSoft, 0, 6.02, 24.5, T8 * 24.5 * 2 - 0.3, 0.012, 0.05);
    const ceilHoles = (k === 0) ? [circlePts(ELEV.hole, 20, ELEV.u, ELEV.v)] : [];
    B.flat(M.whiteClean, trapL(AP.ATRIUM, AP.COR), [], 11.39, true);
    B.flat(k === 3 ? M.dark : M.whiteClean, trapL(AP.COR, AP.RING1), ceilHoles, 11.39, true);
    // corridor light strip + coffers
    B.box(M.darkSmooth, 0, 11.37, 24.5, T8 * 24.5 * 2, 0.04, 0.6);
    B.box(M.light, 0, 11.345, 24.5, T8 * 24.5 * 2 - 0.2, 0.012, 0.4);
    B.light(0, 9.8, 24.5, 0xe6f6ff, 18, 13);
    // room ceiling lights (skip cryo: its own blue rig)
    if (k !== 3) {
      for (const [u, v] of [[-5, 31], [5, 31], [-8, 37.5], [0, 37.5], [8, 37.5]]) {
        if (k === 0 && Math.hypot(u - ELEV.u, v - ELEV.v) < 3) continue;
        P.ceilingLight(B, M, u, 11.4, v, 3.2, 0.5, 0, k === 5 ? M.lightCool : M.light);
      }
      B.light(-4, 9.4, 33, 0xf0f6ff, 24, 16);
      B.light(5, 9.4, 38, 0xf0f6ff, 20, 14);
    }

    // rooms (the cryo lab keeps almost no sky light: it is lit by its own blue rig)
    B.envOverride = k === 3 ? 0.1 : null;
    buildRoom(B, M, S, ctx, k);
    B.envOverride = null;
    B.pop();
  }

  // L1 roof slab (terrace + L2 floor)
  B.chunk = 'deck2'; B.interior = false;
  B.slab(M.hullPaint, octPts(AP.RING1 + 0.2), [octPts(AP.ATRIUM), elevHole], 11.4, 12.0, { top: false, bottom: 'shadow' }); // top under the L2 floors, underside behind the L1 ceilings // top is fully under the deck, dark ring and L2 floors
  B.colPoly(octPts(AP.RING1 + 0.2), 11.4, 12.0, 'floor', { holes: [octPts(AP.ATRIUM), elevHole] });
  B.flat(M.deck, octPts(AP.RING1 + 0.2), [octPts(AP.L2OUT)], 12.01);
  B.flat(M.dark, octPts(AP.L2IN), [octPts(AP.ATRIUM)], 12.01);

  // ================================================================ TERRACE (deck 2)
  for (let k = 0; k < 8; k++) {
    B.push(0, 0, 0, sectorAngle(k));
    B.chunk = 'terrace'; B.interior = false;
    const ve = AP.RING1 - 0.05, he = T8 * ve;
    if (STAIR_SECTORS.includes(k)) {
      P.railing(B, M, -he, ve, -1.5, ve, 12);
      P.railing(B, M, 1.5, ve, he, ve, 12);
    } else P.railing(B, M, -he, ve, he, ve, 12);
    buildTerraceProps(B, M, S, ctx, k);
    B.pop();
  }

  // ================================================================ RING 2 (level 2, y 12..18)
  for (let k = 0; k < 8; k++) {
    B.push(0, 0, 0, sectorAngle(k));
    B.chunk = 'facade2'; B.interior = false;
    const hwO = T8 * AP.L2OUT;
    B.push(T8 * AP.L2OUT, 0, AP.L2OUT, Math.PI / 8);
    B.rbox(M.whiteSmooth, 0, 15, 0, 0.9, 6.0, 0.9, 0.25, 0, { col: true });
    B.box(M.cyan, 0, 15, 0.46, 0.05, 5.0, 0.02);
    B.pop();
    B.box(M.white, 0, 12.18, AP.L2OUT, hwO * 2, 0.36, 0.45);
    B.box(M.white, 0, 17.325, AP.L2OUT + 0.05, hwO * 2, 1.25, 0.55); // top 5 cm under the roof deck
    B.box(M.cyan, 0, 16.72, AP.L2OUT + 0.33, hwO * 2 - 1, 0.05, 0.04);
    B.box(M.metal, 0, 18.02, AP.L2OUT + 0.1, hwO * 2, 0.06, 0.8);
    B.box(M.glassTint, 0, 14.5, AP.L2OUT, hwO * 2, 4.3, 0.04);
    for (let i = 1; i < 8; i++) B.box(M.metal, -hwO + i * hwO * 2 / 8, 14.5, AP.L2OUT, 0.1, 4.3, 0.3);
    B.colBox(0, 14.7, AP.L2OUT, hwO * 2, 5.4, 0.35);

    B.chunk = 'ring2_' + k; B.interior = true;
    const hwI = T8 * AP.L2IN;
    if (k !== 4) {
      B.box(M.glass, 0, 14.6, AP.L2IN, hwI * 2, 4.8, 0.04, 0, { col: true });
      for (let i = 0; i <= 4; i++) B.box(M.metal, -hwI + i * hwI * 2 / 4, 14.6, AP.L2IN, 0.1, 4.8, 0.2);
      B.box(M.darkSmooth, 0, 12.1, AP.L2IN, hwI * 2, 0.2, 0.3);
      B.box(M.white, 0, 17.2, AP.L2IN, hwI * 2, 0.4, 0.3);
    } else {
      B.box(M.dark, 0, 14.7, AP.L2IN, hwI * 2, 5.4, 0.3, 0, { col: true });
    }
    B.push(T8 * AP.L2IN, 0, AP.L2IN, Math.PI / 8);
    B.rbox(M.whiteSmooth, 0, 14.7, 0, 0.55, 5.4, 0.55, 0.2, 0, { col: true });
    B.pop();
    // floor / ceiling
    const holes = k === 0 ? [circlePts(ELEV.hole, 20, ELEV.u, ELEV.v)] : [];
    B.flat(k === 4 ? M.floor : M.floorLight, trapL(AP.L2IN, AP.L2OUT), holes, 12.02);
    B.flat(M.whiteClean, trapL(AP.L2IN, AP.L2OUT), holes, 17.39, true);
    B.box(M.darkSmooth, 0, 17.37, 29, T8 * 29 * 2, 0.04, 0.7);
    B.box(k === 4 ? M.lightCool : M.light, 0, 17.345, 29, T8 * 29 * 2 - 0.2, 0.012, 0.5);
    B.light(0, 15.8, 29, 0xeaf6ff, 20, 14);
    // radial walls around mission control (between 3|4 and 4|5)
    if (k === 3 || k === 4) {
      const x0 = T8 * AP.L2IN, z0 = AP.L2IN, x1 = T8 * AP.L2OUT, z1 = AP.L2OUT;
      const dc = 29.0, dw = 2.2, len = (dc - AP.L2IN) / COS8;
      const f = (v) => [T8 * v, v];
      const vA = dc - dw / 2 * COS8, vB = dc + dw / 2 * COS8;
      B.wall(M.white, x0, z0, ...f(vA), 12, 5.4, 0.3, { col: true });
      B.wall(M.white, ...f(vB), x1, z1, 12, 5.4, 0.3, { col: true });
      B.wall(M.white, ...f(vA), ...f(vB), 15.0, 2.4, 0.3);
      const [dx, dz] = f(dc);
      addDoor(B, ctx, dx, 12, dz, Math.PI / 8 - Math.PI / 2 + Math.PI, dw, 3.0, { id: 'door_mc' + k, name: 'MISSION CONTROL' });
      const s8 = Math.sin(Math.PI / 8), nx = k === 3 ? -COS8 : COS8, nz = k === 3 ? s8 : -s8;
      sign(B, M, [{ text: 'MISSION CONTROL', size: 86, color: '#e8f6ff', y: 100 }, { text: 'L2 · COMMAND', size: 44, color: '#4ff2ff', y: 196 }], dx + nx * 0.2, 15.9, dz + nz * 0.2, Math.atan2(nx, nz), 2.1, 0.5);
      void len;
    }
    if (k === 4) buildMissionControl(B, M, S, ctx);
    else buildGallery(B, M, S, ctx, k);
    B.pop();
  }
  // L2 roof slab
  B.chunk = 'deck3'; B.interior = false;
  const domeHole = circlePts(24, 64);
  B.slab(M.hullPaint, octPts(AP.L2OUT + 0.2), [domeHole, elevHole], 17.4, 18.0, { curveSegs: 32 });
  B.colPoly(octPts(AP.L2OUT + 0.2), 17.4, 18.0, 'floor', { holes: [domeHole, elevHole] });
  B.flat(M.deck, octPts(AP.L2OUT + 0.2), [circlePts(26, 64), elevHole], 18.01);

  // ================================================================ OBSERVATION ROOF (deck 3) + DOME
  B.chunk = 'roof';
  for (let k = 0; k < 8; k++) {
    B.push(0, 0, 0, sectorAngle(k));
    const ve = AP.L2OUT + 0.1, he = T8 * ve;
    if (STAIR_SECTORS.includes(k)) {
      P.railing(B, M, -he, ve, -1.5, ve, 18);
      P.railing(B, M, 1.5, ve, he, ve, 18);
    } else P.railing(B, M, -he, ve, he, ve, 18);
    buildRoofProps(B, M, S, ctx, k);
    B.pop();
  }
  B.chunk = 'dome';
  B.slab(M.whiteSmooth, circlePts(26.1, 72), [circlePts(24.0, 72)], 18.0, 19.3, { curveSegs: 40 });
  B.add(G.torus(26.12, 0.05, 6, 120), M.cyan, 0, 18.9, 0, Math.PI / 2, 0, 0);
  B.add(G.torus(26.12, 0.05, 6, 120), M.cyan, 0, 18.4, 0, Math.PI / 2, 0, 0);
  for (let i = 0; i < 36; i++) {
    const a = i / 36 * Math.PI * 2;
    B.colBox(Math.sin(a) * 25.05, 18.65, Math.cos(a) * 25.05, 4.5, 1.3, 2.2, a);
  }
  buildCentralTower(B, M);

  // ================================================================ STAIRS (sectors 2 & 6)
  for (const k of STAIR_SECTORS) {
    B.push(0, 0, 0, sectorAngle(k));
    B.chunk = 'stairs'; B.interior = false;
    stairRun(B, M, AP.RING1 + 0.25, AP.RING1 + 2.75, LV.D1, LV.D2);
    stairRun(B, M, AP.L2OUT + 0.25, AP.L2OUT + 2.75, LV.D2, LV.D3);
    B.pop();
  }

  // ================================================================ LIFT SHAFT
  B.chunk = 'lift'; B.interior = false;
  B.push(0, 0, 0, sectorAngle(ELEV.k));
  {
    const { u, v, r } = ELEV;
    const top = 21.4;
    B.cyl(M.glass, u, (6 + top) / 2, v, r, top - 6, 40, { open: true });
    for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 + Math.PI / 6; B.box(M.metal, u + Math.sin(a) * r, (6 + top) / 2, v + Math.cos(a) * r, 0.12, top - 6, 0.12, a); }
    for (const y of [6.05, 11.7, 12.2, 17.7, 18.2, top - 0.2]) B.add(G.torus(r, 0.08, 6, 40), M.metal, u, y, v, Math.PI / 2, 0, 0);
    B.cyl(M.whiteSmooth, u, top + 0.2, v, r + 0.25, 0.4, 40);
    B.add(G.torus(r + 0.25, 0.04, 6, 40), M.cyan, u, top, v, Math.PI / 2, 0, 0);
    // shaft colliders: ring of segments leaving a door gap facing +u
    const seg = 16;
    for (let i = 0; i < seg; i++) {
      const a0 = i / seg * Math.PI * 2, a1 = (i + 1) / seg * Math.PI * 2, am = (a0 + a1) / 2;
      // local direction: x = sin(a), z = cos(a); door faces +x (a = PI/2)
      if (Math.abs(am - Math.PI / 2) < 0.45) continue;
      B.colWall(u + Math.sin(a0) * (r + 0.05), v + Math.cos(a0) * (r + 0.05), u + Math.sin(a1) * (r + 0.05), v + Math.cos(a1) * (r + 0.05), 6, top - 6, 0.15);
    }
    const lv = [LV.D1, LV.D2, LV.D3];
    const gates = lv.map((y, i) => B.colBox(u + r + 0.05, y + ((i < 2 ? lv[i + 1] : top) - y) / 2, v, 0.15, (i < 2 ? lv[i + 1] : top) - y, 1.4, 0, 'solid'));
    // car floor (dynamic collider)
    const car = B.colCyl(u, 5.7, v, r - 0.05, 0.3, 14, 'solid', { dyn: true });
    const carMesh = new THREE.Group();
    const wp = B.wp(u, 0, v);
    carMesh.position.set(wp.x, 6, wp.z);
    const floor = new THREE.Mesh(new THREE.CylinderGeometry(r - 0.06, r - 0.06, 0.3, 36), M.darkSmooth); floor.position.y = -0.15; carMesh.add(floor);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r - 0.1, 0.03, 6, 36), M.cyan); ring.rotation.x = Math.PI / 2; ring.position.y = 0.02; carMesh.add(ring);
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(r - 0.06, r - 0.06, 0.2, 36), M.whiteSmooth); roof.position.y = 2.9; carMesh.add(roof);
    const lamp = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.02, 30), M.light); lamp.position.y = 2.79; carMesh.add(lamp);
    const panel = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.5, 0.3), M.darkSmooth); panel.position.set(-r + 0.2, 1.2, 0); carMesh.add(panel);
    const pl = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.4, 0.22), M.cyanSoft); pl.position.set(-r + 0.26, 1.2, 0); carMesh.add(pl);
    const rail = new THREE.Mesh(new THREE.TorusGeometry(r - 0.15, 0.03, 6, 30, Math.PI * 1.4), M.chrome); rail.rotation.set(Math.PI / 2, 0, Math.PI * 0.8); rail.position.y = 1.0; carMesh.add(rail);
    carMesh.rotation.y = sectorAngle(ELEV.k);
    carMesh.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    ctx.scene.add(carMesh);
    ctx.elevator = { car, carMesh, gates, levels: lv, y: LV.D1, target: LV.D1, level: 0, center: wp, r };
    // call panels at each level
    lv.forEach((y, i) => {
      B.box(M.darkSmooth, u + r + 0.25, y + 1.25, v - 1.1, 0.08, 0.36, 0.22);
      B.box(M.cyan, u + r + 0.3, y + 1.25, v - 1.1, 0.02, 0.1, 0.1);
      ctx.marks['liftCall' + i] = B.wp(u + r + 0.6, y, v - 0.9);
      sign(B, M, [{ text: ['LEVEL 1 · LOBBY', 'LEVEL 2 · GALLERY', 'LEVEL 3 · OBSERVATION'][i], size: 64, color: '#e8f6ff', y: 128 }], u + r + 0.32, y + 2.75, v, Math.PI / 2, 1.6, 0.4);
    });
  }
  B.pop();

  // ================================================================ ATRIUM
  buildAtrium(B, M, S, ctx, R);

  // ================================================================ SERVICE LEVEL
  buildService(B, M, S, ctx);
}

function ceilLightsCanopy(B, M, v) {
  for (const u of [-2.4, 0, 2.4]) B.box(M.light, u, 10.3, v, 1.4, 0.02, 0.3);
}

// straight stair along the facade: bottom at u=-8.2 climbing towards +u,
// landing at u -1.4..1.4 level with the upper deck
function stairRun(B, M, v0, v1, y0, y1) {
  const n = 20, rise = (y1 - y0) / n, run = 0.34;
  const land0 = -1.4, land1 = 1.4;
  const w = v1 - v0, vc = (v0 + v1) / 2;
  const uStart = land0 - (n - 1) * run;
  for (let i = 0; i < n - 1; i++) {
    const ua = uStart + i * run, top = y0 + (i + 1) * rise;
    B.box(M.whiteClean, ua + run / 2, (y0 + top) / 2, vc, run, top - y0, w, 0, { col: true });
    B.box(M.darkSmooth, ua + run / 2, top + 0.005, vc, run - 0.02, 0.012, w - 0.04);
    B.box(M.cyanSoft, ua + run - 0.03, top + 0.01, vc, 0.03, 0.012, w - 0.1);
    // balustrade segment on the outer side
    B.box(M.glass, ua + run / 2, top + 0.55, v1 - 0.05, run, 1.0, 0.025);
    B.colBox(ua + run / 2, top + 0.6, v1 - 0.05, run, 1.2, 0.16);
  }
  // landing
  B.box(M.whiteClean, 0, y1 - 0.25, vc, land1 - land0, 0.5, w, 0, { col: 'solid' });
  B.box(M.darkSmooth, 0, y1 + 0.005, vc, land1 - land0, 0.012, w);
  B.rbox(M.whiteSmooth, land1 - 0.3, (y0 + y1 - 0.5) / 2, v1 - 0.4, 0.4, y1 - y0 - 0.5, 0.4, 0.12, 0, { col: true });
  P.railing(B, M, land0, v1 - 0.05, land1, v1 - 0.05, y1);
  P.railing(B, M, land1, v1 - 0.05, land1, v0 + 0.05, y1);
  // sloped handrail + LED
  B.pipe(M.metal, uStart, y0 + rise + 1.08, v1 - 0.05, land0, y1 + 1.08, v1 - 0.05, 0.045);
  B.pipe(M.cyanSoft, uStart, y0 + rise + 1.0, v1 - 0.05, land0, y1 + 1.0, v1 - 0.05, 0.015);
  B.box(M.white, uStart + (n - 1) * run / 2, (y0 + y1) / 2, v1 + 0.02, (n - 1) * run, 0.01, 0.01);
}

// ---------------------------------------------------------------- ATRIUM
function buildAtrium(B, M, S, ctx, R) {
  B.chunk = 'atrium'; B.interior = true;
  B.flat(M.floor, octPts(AP.ATRIUM), [], 6.012);
  // concentric inlays
  for (const [r, m, w] of [[4.6, M.metalInlay, 0.08], [10.6, M.cyanSoft, 0.05], [14.4, M.metalInlay, 0.08], [16.5, M.cyanSoft, 0.05]]) {
    const g = new THREE.RingGeometry(r - w, r + w, 96); g.rotateX(-Math.PI / 2);
    B.addM(g, m, B.mat(0, 6.02, 0));
  }
  // central planter + tree
  B.cyl(M.whiteSmooth, 0, 6.35, 0, 3.6, 0.7, 64, { col: true, colSeg: 16 });
  B.add(G.torus(3.6, 0.06, 6, 64), M.metal, 0, 6.7, 0, Math.PI / 2, 0, 0);
  B.add(G.torus(3.62, 0.03, 6, 64), M.cyan, 0, 6.1, 0, Math.PI / 2, 0, 0);
  B.cyl(M.grass, 0, 6.71, 0, 3.5, 0.02, 48);
  for (let i = 0; i < 70; i++) {
    const a = R() * Math.PI * 2, r = 1.2 + R() * 2.1;
    B.add(G.cone(0, 1, 5), [M.plant, M.plantDark, M.plantLight][(R() * 3) | 0], Math.sin(a) * r, 6.9 + R() * 0.2, Math.cos(a) * r, (R() - 0.5) * 0.5, R() * 3, (R() - 0.5) * 0.5, 0.12, 0.4 + R() * 0.4, 0.12);
  }
  ctx.tree = P.buildTree(B, M, 0, 6.72, 0, 11);
  ctx.scene.add(ctx.tree);
  // ring bench around planter
  for (let i = 0; i < 12; i++) {
    const a = i / 12 * Math.PI * 2 + Math.PI / 12;
    if (i % 3 === 1) continue;
    B.push(Math.sin(a) * 4.4, 6, Math.cos(a) * 4.4, a);
    B.rbox(M.whiteSmooth, 0, 0.42, 0, 2.0, 0.08, 0.5, 0.04);
    B.rbox(M.darkSmooth, 0, 0.2, 0, 1.6, 0.4, 0.34, 0.03);
    B.box(M.cyanDim, 0, 0.36, 0.2, 1.8, 0.015, 0.02);
    B.pop();
  }
  // hydroponic beds: two rings of four arcs, gaps on the four paths
  const bed = (r0, r1, h, a0, a1, plantDensity) => {
    const sh = new THREE.Shape();
    const n = 28;
    for (let i = 0; i <= n; i++) { const a = a0 + (a1 - a0) * i / n; const p = [Math.sin(a) * r1, -Math.cos(a) * r1]; i ? sh.lineTo(...p) : sh.moveTo(...p); }
    for (let i = n; i >= 0; i--) { const a = a0 + (a1 - a0) * i / n; sh.lineTo(Math.sin(a) * r0, -Math.cos(a) * r0); }
    const g = new THREE.ExtrudeGeometry(sh, { depth: h, bevelEnabled: false, curveSegments: 4 });
    g.rotateX(-Math.PI / 2);
    B.addM(g, M.whiteSmooth, B.mat(0, 6, 0));
    const top = new THREE.ShapeGeometry(sh); top.rotateX(-Math.PI / 2);
    B.addM(top, M.soil, B.mat(0, 6 + h + 0.01, 0));
    // LED strip at the base facing the path
    const led = new THREE.RingGeometry(r1 - 0.02, r1 + 0.02, 40, 1, a0 - Math.PI / 2, a1 - a0); led.rotateX(-Math.PI / 2);
    B.addM(led, M.cyanSoft, B.mat(0, 6.08, 0));
    // colliders along the arc
    const cn = Math.ceil((a1 - a0) * (r0 + r1) / 2 / 0.9);
    for (let i = 0; i < cn; i++) {
      const am = a0 + (a1 - a0) * (i + 0.5) / cn, rm = (r0 + r1) / 2, chord = (a1 - a0) / cn * r1 + 0.1;
      B.colBox(Math.sin(am) * rm, 6 + h / 2, Math.cos(am) * rm, chord, h, r1 - r0, am);
    }
    // plants
    const cnt = Math.round((a1 - a0) * (r0 + r1) / 2 * plantDensity);
    for (let i = 0; i < cnt; i++) {
      const a = a0 + (a1 - a0) * (i + R() * 0.8) / cnt;
      for (let row = 0; row < 2; row++) {
        const r = r0 + (r1 - r0) * (row + 0.5) / 2;
        const px = Math.sin(a) * r, pz = Math.cos(a) * r;
        const s = 0.16 + R() * 0.1;
        P.leafClump(B, M, px, 6 + h + s * 0.9, pz, s, s * 0.6, s, 3, 0.4, R);
      }
    }
    // grow-light arches
    const arcs = Math.max(1, Math.round((a1 - a0) * r1 / 3.2));
    for (let i = 0; i <= arcs; i++) {
      const a = a0 + (a1 - a0) * i / arcs;
      const ix = Math.sin(a) * (r0 - 0.05), iz = Math.cos(a) * (r0 - 0.05), ox = Math.sin(a) * (r1 + 0.05), oz = Math.cos(a) * (r1 + 0.05);
      B.pipe(M.metal, ix, 6 + h, iz, ix, 6 + h + 1.3, iz, 0.03);
      B.pipe(M.metal, ox, 6 + h, oz, ox, 6 + h + 1.3, oz, 0.03);
      B.pipe(M.metal, ix, 6 + h + 1.3, iz, ox, 6 + h + 1.3, oz, 0.03);
    }
    const gl = new THREE.RingGeometry((r0 + r1) / 2 - 0.06, (r0 + r1) / 2 + 0.06, 40, 1, Math.PI / 2 - a1, a1 - a0); gl.rotateX(Math.PI / 2);
    B.addM(gl, M.growLight, B.mat(0, 6 + h + 1.28, 0));
  };
  const gapA = 0.16;
  for (let q = 0; q < 4; q++) {
    const a0 = q * Math.PI / 2 + gapA, a1 = (q + 1) * Math.PI / 2 - gapA;
    bed(7.4, 9.0, 0.85, a0, a1, 2.2);
    bed(12.0, 13.2, 0.6, q * Math.PI / 2 + 0.12, q * Math.PI / 2 + Math.PI / 4 - 0.1, 2.0);
    bed(12.0, 13.2, 0.6, q * Math.PI / 2 + Math.PI / 4 + 0.1, (q + 1) * Math.PI / 2 - 0.12, 2.0);
  }
  // cafe tables on the outer ring
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2 + Math.PI / 8;
    P.cafeSet(B, M, Math.sin(a) * 17.6, 6, Math.cos(a) * 17.6, a, 3, i % 2 ? M.orangeGloss : M.whiteSmooth);
  }
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2 + Math.PI / 8 + 0.22;
    P.potPlant(B, M, Math.sin(a) * 20.3, 6, Math.cos(a) * 20.3, 1.5, i + 30);
  }
  // info plinth + data log marker
  B.push(0, 6, 10.2, 0);
  B.rbox(M.whiteSmooth, 0, 0.55, 0, 0.9, 1.1, 0.35, 0.08);
  B.add(G.plane(), S.welcome, 0, 0.85, 0.18, -0.35, 0, 0, 0.8, 0.45, 1, { keepUV: true });
  B.pop();
  // sun shafts through the dome
  const sd = new THREE.Vector3(0.80, 0.52, -0.30).normalize();
  for (let i = 0; i < 6; i++) {
    const x = 8 + R() * 8, z = -12 + R() * 14;
    const L = 40;
    const g = new THREE.PlaneGeometry(2.2 + R() * 2.5, L); g.translate(0, -L / 2, 0);
    const m = new THREE.Matrix4().lookAt(new THREE.Vector3(0, 0, 0), sd.clone().negate(), new THREE.Vector3(0, 1, 0));
    const q = new THREE.Quaternion().setFromRotationMatrix(m);
    const q2 = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, -1, 0), sd.clone().negate());
    void q;
    const mm = new THREE.Matrix4().compose(new THREE.Vector3(x, 30, z), q2, new THREE.Vector3(1, 1, 1));
    B.addM(g, M.fxBeam, mm, { interior: true });
    const g2 = g.clone(); g2.rotateY(Math.PI / 2);
    B.addM(g2, M.fxBeam, mm, { interior: true });
  }
  // lights
  B.light(0, 10, 8, 0xfff2de, 50, 22);
  B.light(-9, 9, -6, 0xfff2de, 40, 20);
  B.light(9, 9, -6, 0xfff2de, 40, 20);
  B.light(0, 16, -10, 0xfff2de, 45, 24);
  ctx.marks.atrium = B.wp(0, 6, 6);
  ctx.marks.log_atrium = B.wp(0, 6, 10.2);
}

// ---------------------------------------------------------------- SERVICE LEVEL (hidden passages)
function buildService(B, M, S, ctx) {
  B.chunk = 'service'; B.interior = true; B.envOverride = 0.22;
  const y0 = LV.SVC, y1 = 5.4, h = y1 - y0;
  // floor colliders
  B.colPoly(octPts(27), y0 - 0.4, y0, 'floor', { holes: [octPts(21)] });
  B.flat(M.grating, octPts(27), [octPts(21)], y0);
  const cR = 10;
  B.colPoly(circlePts(cR, 24), y0 - 0.4, y0, 'floor');
  B.flat(M.floor, circlePts(cR, 48), [], y0);
  B.push(0, 0, 0, 0);
  B.colPoly([[-1.4, 9.5], [1.4, 9.5], [1.4, 21.2], [-1.4, 21.2]], y0 - 0.4, y0, 'floor');
  B.flat(M.grating, [[-1.4, 9.5], [1.4, 9.5], [1.4, 21.2], [-1.4, 21.2]], [], y0 + 0.002);
  // passage walls
  B.wall(M.dark, -1.55, 9.9, -1.55, 21, y0, h, 0.3, { col: true });
  B.wall(M.dark, 1.55, 9.9, 1.55, 21, y0, h, 0.3, { col: true });
  for (let v = 11; v < 21; v += 2.5) { B.box(M.amber, 0, y1 - 0.08, v, 0.9, 0.04, 0.2); }
  B.light(0, 4.6, 16, 0xffb060, 14, 9);
  B.pop();
  // pump room wall (gap facing +Z)
  for (let i = 0; i < 20; i++) {
    const a0 = i / 20 * Math.PI * 2, a1 = (i + 1) / 20 * Math.PI * 2;
    if (i === 0 || i === 19) continue;
    B.wall(M.dark, Math.sin(a0) * (cR + 0.15), Math.cos(a0) * (cR + 0.15), Math.sin(a1) * (cR + 0.15), Math.cos(a1) * (cR + 0.15), y0, h, 0.3, { col: true });
  }
  // gap walls to meet the passage
  B.wall(M.dark, Math.sin(-Math.PI / 10) * 10.15, Math.cos(Math.PI / 10) * 10.15, -1.55, 9.9, y0, h, 0.3, { col: true });
  B.wall(M.dark, Math.sin(Math.PI / 10) * 10.15, Math.cos(Math.PI / 10) * 10.15, 1.55, 9.9, y0, h, 0.3, { col: true });
  // central nutrient reservoir (roots of the atrium tree)
  B.cyl(M.darkSmooth, 0, y0 + 0.3, 0, 2.6, 0.6, 40, { col: true });
  B.cyl(M.greenFluid, 0, y0 + 1.9, 0, 2.2, 2.6, 40);
  B.cyl(M.glass, 0, y0 + 1.9, 0, 2.35, 2.7, 40, { open: true });
  B.cyl(M.metal, 0, y1 - 0.4, 0, 2.6, 0.5, 40);
  for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; B.box(M.metal, Math.sin(a) * 2.4, y0 + 1.9, Math.cos(a) * 2.4, 0.1, 2.8, 0.1, a); }
  for (let i = 0; i < 4; i++) {
    const a = i / 4 * Math.PI * 2 + Math.PI / 4;
    const px = Math.sin(a) * 6.5, pz = Math.cos(a) * 6.5;
    B.cyl(M.gunmetal, px, y0 + 0.7, pz, 0.7, 1.4, 20, { col: true });
    B.cyl(M.dark, px, y0 + 1.5, pz, 0.45, 0.3, 16);
    B.add(G.torus(0.72, 0.03, 6, 24), M.teal, px, y0 + 1.2, pz, Math.PI / 2, 0, 0);
    B.pipe(M.copper, px, y0 + 1.4, pz, Math.sin(a) * 2.5, y0 + 2.8, Math.cos(a) * 2.5, 0.12);
    B.pipe(M.gunmetal, px, y0 + 1.5, pz, px, y1, pz, 0.15);
  }
  for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; B.pipe(M.copper, Math.sin(a) * 1.2, y1 - 0.2, Math.cos(a) * 1.2, Math.sin(a) * 1.2, y1 + 0.3, Math.cos(a) * 1.2, 0.1); }
  B.light(0, 4.6, 0, 0x66ff9a, 30, 12);
  B.light(0, 4.8, 7, 0xffb060, 12, 8);
  ctx.marks.pump = B.wp(0, y0, 5.5);
  ctx.marks.log_pump = B.wp(-4.2, y0, 4.2);
  P.techPanel(B, M, -4.2, y0 + 0.3, 4.6, Math.PI * 1.25, 1.2, 1.4);
  sign(B, M, [{ text: 'HYDRO CORE · NUTRIENT RESERVOIR', size: 60, color: '#56ff9a', y: 80 }, { text: 'FEEDS ATRIUM TREE ROOT SYSTEM', size: 40, color: '#e8f6ff', y: 170 }], 0, 4.4, 9.5, Math.PI, 2.8, 0.5);

  // ring corridor walls
  for (let k = 0; k < 8; k++) {
    B.push(0, 0, 0, sectorAngle(k));
    const hwO = T8 * 27, hwI = T8 * 21;
    const pit = (k === 3 || k === 5);
    if (pit) {
      B.box(M.dark, (-hwO + SVC_STAIR.u0 - 0.15) / 2, y0 + h / 2, 27.15, SVC_STAIR.u0 - 0.15 + hwO, h, 0.3, 0, { col: true });
      B.box(M.dark, (hwO + SVC_STAIR.u1 + 0.15) / 2, y0 + h / 2, 27.15, hwO - SVC_STAIR.u1 - 0.15, h, 0.3, 0, { col: true });
    } else B.box(M.dark, 0, y0 + h / 2, 27.15, hwO * 2, h, 0.3, 0, { col: true });
    if (k === 0) {
      B.box(M.dark, (-hwI - 1.4) / 2, y0 + h / 2, 20.85, hwI - 1.4, h, 0.3, 0, { col: true });
      B.box(M.dark, (hwI + 1.4) / 2, y0 + h / 2, 20.85, hwI - 1.4, h, 0.3, 0, { col: true });
    } else B.box(M.dark, 0, y0 + h / 2, 20.85, hwI * 2, h, 0.3, 0, { col: true });
    // ceiling pipes along the ring
    for (const [yy, vv, r, m] of [[5.0, 26.3, 0.18, M.gunmetal], [5.0, 25.6, 0.12, M.copper], [4.95, 21.8, 0.14, M.gunmetal]]) {
      const hw = T8 * vv;
      B.pipe(m, -hw, yy, vv, hw, yy, vv, r);
    }
    B.box(M.hazard, 0, y0 + 0.01, 21.3, T8 * 21.3 * 2, 0.012, 0.12);
    B.box(M.hazard, 0, y0 + 0.01, 26.7, T8 * 26.7 * 2, 0.012, 0.12);
    B.box(M.amber, 0, y1 - 0.06, 24, 1.6, 0.04, 0.2);
    B.light(0, 4.6, 24, 0xffb060, 12, 9);
    // valves & junction boxes
    B.cyl(M.redPaint, -3, 3.4, 26.8, 0.3, 0.05, 16, { rx: Math.PI / 2, rz2: 0.3 });
    B.box(M.darkSmooth, 4, 3.3, 26.9, 0.8, 1.0, 0.2);
    B.box(M.green, 4.2, 3.6, 27.0, 0.05, 0.05, 0.02);
    sign(B, M, [{ text: 'SERVICE RING · S' + (k + 1), size: 64, color: '#ffb347', y: 128 }], -6, 4.2, 26.95, Math.PI, 1.6, 0.4);
    if (pit) {
      // pit walls below the L1 floor
      B.box(M.dark, SVC_STAIR.u0 - 0.15, y0 + 2, (27 + SVC_STAIR.v1) / 2 + 0.1, 0.3, 4, SVC_STAIR.v1 - 27 + 0.3, 0, { col: true });
      B.box(M.dark, SVC_STAIR.u1 + 0.15, y0 + 2, (27 + SVC_STAIR.v1) / 2 + 0.1, 0.3, 4, SVC_STAIR.v1 - 27 + 0.3, 0, { col: true });
      B.box(M.dark, (SVC_STAIR.u0 + SVC_STAIR.u1) / 2, y0 + 2, SVC_STAIR.v1 + 0.15, SVC_STAIR.u1 - SVC_STAIR.u0 + 0.6, 4, 0.3, 0, { col: true });
      const pw = SVC_STAIR.u1 - SVC_STAIR.u0, uc = (SVC_STAIR.u0 + SVC_STAIR.u1) / 2;
      B.colPoly([[SVC_STAIR.u0, 26.9], [SVC_STAIR.u1, 26.9], [SVC_STAIR.u1, 30.2], [SVC_STAIR.u0, 30.2]], y0 - 0.4, y0, 'floor');
      B.flat(M.grating, [[SVC_STAIR.u0, 26.9], [SVC_STAIR.u1, 26.9], [SVC_STAIR.u1, 30.2], [SVC_STAIR.u0, 30.2]], [], y0 + 0.003);
      const n = 13, rise = 4 / n, run = 0.34;
      for (let j = 0; j < n - 1; j++) {
        const top = 6 - (j + 1) * rise, vb = SVC_STAIR.v1 - (j + 1) * run;
        B.box(M.grating, uc, (y0 + top) / 2, vb + run / 2, pw, top - y0, run, 0, { col: true });
        B.box(M.hazard, uc, top + 0.005, vb + 0.04, pw, 0.01, 0.06);
      }
      B.box(M.amber, uc, 5.3, 28.5, 0.8, 0.04, 0.3);
      B.light(uc, 4.5, 30, 0xffb060, 10, 8);
      // railings around the opening upstairs
      P.railing(B, M, SVC_STAIR.u0 - 0.1, SVC_STAIR.v0, SVC_STAIR.u0 - 0.1, SVC_STAIR.v1, 6, { glass: false });
      P.railing(B, M, SVC_STAIR.u1 + 0.1, SVC_STAIR.v0, SVC_STAIR.u1 + 0.1, SVC_STAIR.v1, 6, { glass: false });
      P.railing(B, M, SVC_STAIR.u0 - 0.1, SVC_STAIR.v0 - 0.02, SVC_STAIR.u1 + 0.1, SVC_STAIR.v0 - 0.02, 6, { glass: false });
      B.box(M.hazard, uc, 6.015, SVC_STAIR.v1 + 0.3, pw + 0.4, 0.01, 0.5);
      ctx.marks['svcStair' + k] = B.wp(uc, 6, SVC_STAIR.v1 + 0.8);
      ctx.marks['svcStairLow' + k] = B.wp(uc, y0, 28);
    }
    buildServiceProps(B, M, S, ctx, k);
    B.pop();
  }
  sign(B, M, [{ text: '▲ PUMP ROOM · HYDRO CORE', size: 64, color: '#56ff9a', y: 128 }], 1.6, 4.3, 21.0, 0, 1.8, 0.4);
  B.envOverride = null;
}
