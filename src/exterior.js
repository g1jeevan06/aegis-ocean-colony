// Exterior "hero" dressing: faceted central tower, corner pylons on thruster
// legs, CFT KINETIC signage, rooftop equipment and the ring of research rigs
// scattered across the sea.
import * as THREE from 'three';
import { G } from './builder.js';
import { T8, COS8, octPts, sectorAngle, rng } from './util.js';
import * as P from './props.js';
import { sign, OUTER, STAIR_SECTORS } from './colony.js';

const RV = (a) => a / COS8; // octagon vertex radius from apothem

// ---------------------------------------------------------------- CFT logo + sign texture
function drawLogo(g, x, y, s) {
  // the canted C, traced from CFT_C+logo.png (2000-unit artboard)
  const P2 = (pts, c) => { g.fillStyle = c; g.beginPath(); pts.forEach(([px, py], i) => { const X = x + (px - 270) * s, Y = y + (py - 135) * s; i ? g.lineTo(X, Y) : g.moveTo(X, Y); }); g.closePath(); g.fill(); };
  P2([[270, 555], [955, 135], [725, 552]], '#FECC00');
  P2([[955, 135], [1188, 552], [725, 552]], '#B65A21');
  P2([[955, 135], [800, 552], [725, 552]], '#994E1F');
  P2([[955, 135], [1640, 545], [1236, 639], [1188, 552]], '#FECC00');
  P2([[270, 555], [725, 552], [497, 968]], '#F4A40B');
  P2([[270, 555], [497, 968], [270, 1580]], '#E07A24');
  P2([[497, 968], [725, 1580], [270, 1580]], '#B65A21');
  P2([[497, 968], [537, 1040], [270, 1580]], '#994E1F');
  P2([[270, 1580], [725, 1580], [954, 1980]], '#D47024');
  P2([[725, 1580], [1182, 1580], [954, 1980]], '#B65A21');
  P2([[1097, 1580], [1182, 1580], [954, 1980]], '#994E1F');
  P2([[1182, 1580], [1230, 1497], [1636, 1575], [954, 1980]], '#F4A40B');
}
let SIGN_MAT = null;
function cftSignMat() {
  if (SIGN_MAT) return SIGN_MAT;
  const c = document.createElement('canvas'); c.width = 2048; c.height = 512;
  const g = c.getContext('2d');
  g.fillStyle = '#4a5057'; g.fillRect(0, 0, 2048, 512);
  g.strokeStyle = '#5c636a'; g.lineWidth = 6; g.strokeRect(10, 10, 2028, 492);
  const e = document.createElement('canvas'); e.width = 2048; e.height = 512;
  const eg = e.getContext('2d'); eg.fillStyle = '#000'; eg.fillRect(0, 0, 2048, 512);
  drawLogo(g, 110, 70, 0.2); drawLogo(eg, 110, 70, 0.2);
  g.fillStyle = '#f2f1ec'; g.textBaseline = 'middle';
  let fs = 190;
  do { g.font = `700 ${fs}px "Instrument Sans", "Exo 2", Arial, sans-serif`; fs -= 6; } while (g.measureText('CFT KINETIC').width > 1440 && fs > 60);
  g.fillText('CFT KINETIC', 520, 225);
  eg.font = g.font; eg.fillStyle = '#fff'; eg.textBaseline = 'middle'; eg.fillText('CFT KINETIC', 520, 225); // only the letters glow
  g.fillStyle = '#E17924'; g.font = '600 58px "Instrument Sans", "Exo 2", Arial, sans-serif';
  try { g.letterSpacing = '10px'; } catch (err) { /* older canvas */ }
  g.fillText('AEGIS · OCEAN RESEARCH COLONY', 526, 372);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  const et = new THREE.CanvasTexture(e); et.colorSpace = THREE.SRGBColorSpace;
  SIGN_MAT = new THREE.MeshStandardMaterial({ map: t, emissiveMap: et, emissive: 0xfff2dc, emissiveIntensity: 2.2, roughness: 0.55, metalness: 0.2 });
  SIGN_MAT.userData.keepUV = true; SIGN_MAT.name = 'cftSign';
  return SIGN_MAT;
}
function cftSign(B, M, x, y, z, ry, w) {
  const h = w / 4;
  B.push(x, y, z, ry);
  B.box(M.darkSmooth, 0, h / 2, -0.12, w + 0.3, h + 0.3, 0.2);
  B.add(G.plane(), cftSignMat(), 0, h / 2, 0.001, 0, 0, 0, w, h, 1, { keepUV: true });
  B.box(M.cyan, 0, -0.08, 0.02, w, 0.05, 0.05);
  for (const s of [-1, 1]) B.box(M.gunmetal, s * w * 0.35, -1.5, -0.2, 0.25, 3, 0.25);
  B.colBox(0, h / 2 - 1, -0.1, w + 0.3, h + 2, 0.4);
  B.pop();
}

// ---------------------------------------------------------------- small props
function roofTree(B, M, x, y, z, s = 1, seed = 1) {
  const R = rng(seed);
  B.rbox(M.whiteSmooth, x, y + 0.35, z, 2.0 * s, 0.7, 2.0 * s, 0.1, 0, { col: true });
  B.box(M.soil, x, y + 0.71, z, 1.8 * s, 0.02, 1.8 * s);
  B.cyl(M.bark, x, y + 1.7, z, 0.12 * s, 2.0 * s, 8);
  for (let i = 0; i < 4; i++) { // a few limbs into the crown
    const a = i / 4 * Math.PI * 2 + R();
    B.pipe(M.bark, x, y + 2.3 * s, z, x + Math.sin(a) * 0.6 * s, y + 3.1 * s, z + Math.cos(a) * 0.6 * s, 0.05 * s, 6);
  }
  P.leafClump(B, M, x, y + 3.1 * s, z, 1.15 * s, 0.75 * s, 1.15 * s, 34, 1.1 * s, R);
}
function miniCrane(B, M, x, y, z, ry) {
  B.push(x, y, z, ry);
  B.cyl(M.dark, 0, 0.3, 0, 0.9, 0.6, 16, { col: true });
  B.box(M.yellow, 0, 2.6, 0, 0.6, 4.2, 0.6);
  B.box(M.darkSmooth, 0, 4.4, 0.2, 1.0, 0.9, 1.2);
  B.add(G.box(), M.yellow, 0, 5.3, 2.4, -0.35, 0, 0, 0.45, 0.45, 5.4);
  B.pipe(M.cable, 0, 6.2, 4.9, 0, 3.0, 4.9, 0.03);
  B.box(M.darkSmooth, 0, 2.9, 4.9, 0.4, 0.3, 0.4);
  B.pop();
}
function container(B, M, x, y, z, ry, mat, len = 4.2) {
  B.push(x, y, z, ry);
  B.box(mat, 0, 1.2, 0, len, 2.4, 2.4, 0, { col: true });
  for (let i = -3; i <= 3; i++) B.box(M.gunmetal, i * len / 7.5, 1.2, 1.21, 0.07, 2.2, 0.04);
  B.box(M.cyan, 0, 2.3, 1.22, len - 0.3, 0.04, 0.02);
  B.pop();
}
function antenna(B, M, ctx, x, y, z, h = 6) {
  B.cyl(M.metal, x, y + h / 2, z, 0.08, h, 8);
  for (let i = 1; i < 4; i++) B.box(M.metal, x, y + i * h / 4, z, 0.9 - i * 0.2, 0.04, 0.04);
  B.cyl(M.darkSmooth, x, y + 0.15, z, 0.4, 0.3, 12, { col: true });
  ctx.blinkers.push({ p: B.wp(x, y + h + 0.2, z), color: 0xff3020, period: 1.3 + (x % 3) * 0.2 });
}

// ---------------------------------------------------------------- central tower (replaces the glass dome)
export function buildCentralTower(B, M) {
  B.chunk = 'dome'; B.interior = false;
  const y0 = 19.3, a0 = 23.2, h = 5.6;
  for (let k = 0; k < 8; k++) {
    B.push(0, 0, 0, sectorAngle(k));
    const hw = T8 * a0;
    B.box(M.dark, 0, y0 + 0.4, a0, hw * 2, 0.8, 0.6);
    B.box(M.glassTint, 0, y0 + 0.8 + (h - 1.9) / 2, a0, hw * 2, h - 1.9, 0.05);
    for (const u of [-hw * 0.5, 0, hw * 0.5]) B.box(M.whiteSmooth, u, y0 + 0.8 + (h - 1.9) / 2, a0, 0.22, h - 1.9, 0.34);
    B.box(M.white, 0, y0 + h - 0.55, a0 + 0.05, hw * 2 + 0.3, 1.1, 0.7);
    B.box(M.cyan, 0, y0 + h - 1.12, a0 + 0.4, hw * 2, 0.05, 0.03);
    B.box(M.cyan, 0, y0 + 0.82, a0 + 0.32, hw * 2, 0.05, 0.03);
    for (let i = -2; i <= 2; i++) B.box(M.lightWarm, i * hw * 0.38, y0 + h - 0.55, a0 + 0.41, hw * 0.2, 0.12, 0.02);
    B.push(T8 * a0, 0, a0, Math.PI / 8);
    B.rbox(M.whiteSmooth, 0, y0 + h / 2, 0, 0.9, h, 0.9, 0.22);
    B.pop();
    B.pop();
  }
  // faceted roof: a flat-sided octagonal frustum
  const yr = y0 + h, a1 = 9.5, hr = 4.4;
  const roof = new THREE.CylinderGeometry(RV(a1), RV(a0 + 0.8), hr, 8, 1, true).toNonIndexed();
  roof.rotateY(Math.PI / 8); roof.computeVertexNormals();
  B.addM(roof, M.white, B.mat(0, yr + hr / 2, 0));
  const inner = roof.clone(); inner.scale(0.995, 1, 0.995);
  const innerMat = M.dark.clone(); innerMat.side = THREE.BackSide; innerMat.name = 'towerInner'; innerMat.userData = { ...M.dark.userData };
  B.addM(inner, innerMat, B.mat(0, yr + hr / 2 - 0.02, 0));
  for (let i = 0; i < 8; i++) {
    const f = (i + 0.5) * Math.PI / 4;
    B.pipe(M.metal, Math.sin(f) * RV(a0 + 0.8), yr, Math.cos(f) * RV(a0 + 0.8), Math.sin(f) * RV(a1), yr + hr, Math.cos(f) * RV(a1), 0.18);
    // roof vents between the ribs
    const fm = i * Math.PI / 4, rm = (a0 + a1) / 2 + 1;
    B.add(G.box(), M.grating, Math.sin(fm) * rm, yr + hr * 0.42, Math.cos(fm) * rm, -0.62, fm, 0, 3.2, 0.12, 1.6);
  }
  // skylight + lantern
  const yt = yr + hr;
  B.flat(M.glassTint, octPts(a1), [octPts(5.4)], yt + 0.02);
  B.slab(M.dark, octPts(5.4), [], yt, yt + 0.7);
  const lantern = new THREE.CylinderGeometry(RV(5.0), RV(5.0), 1.4, 8, 1, true); lantern.rotateY(Math.PI / 8);
  B.addM(lantern, M.glassTint, B.mat(0, yt + 1.4, 0));
  B.slab(M.whiteSmooth, octPts(5.8), [], yt + 2.1, yt + 2.5);
  B.add(G.torus(RV(5.6), 0.06, 6, 8), M.cyan, 0, yt + 2.1, 0, Math.PI / 2, 0, Math.PI / 8);
  B.cyl(M.metal, 0, yt + 4.5, 0, 0.12, 4, 8);
  B.sphere(M.red, 0, yt + 6.6, 0, 0.16);
}

// ---------------------------------------------------------------- corner pylons on thruster legs
function cornerPylons(B, M, ctx) {
  B.chunk = 'pylons'; B.interior = false;
  for (let i = 0; i < 8; i++) {
    const f = (i + 0.5) * Math.PI / 4;
    B.push(0, 0, 0, f);
    B.box(M.dark, 0, 1.5, 58.8, 9, 7, 7);
    B.box(M.dark, 0, 1.25, 67, 11, 6.5, 10);
    B.box(M.white, 0, 7.0, 67, 11.4, 5, 10.4);
    B.box(M.hullPaint, 0, 9.75, 67, 11, 0.5, 10);
    // recessed dark band + chamfered cap + vertical fins
    B.box(M.dark, 0, 5.55, 67, 11.5, 0.9, 10.5);
    B.box(M.metal, 0, 10.05, 67, 11.6, 0.12, 10.6);
    for (const s of [-1, 1]) for (const v of [62.2, 71.8]) B.box(M.darkSmooth, s * 5.55, 7.3, v, 0.5, 4.2, 0.5);
    for (let j = -2; j <= 2; j++) B.box(M.lightWarm, j * 2.1, 5.55, 72.28, 1.2, 0.12, 0.02);
    B.box(M.glassTint, 0, 7.3, 72.22, 9.4, 1.3, 0.05);
    for (const s of [-1, 1]) B.box(M.glassTint, s * 5.72, 7.3, 67, 0.05, 1.3, 8.6);
    for (const s of [-4.3, 4.3]) B.box(M.light, s, 6.3, 72.24, 0.2, 2.2, 0.02);
    B.box(M.cyan, 0, 4.55, 72.23, 11.2, 0.07, 0.04);
    for (const s of [-1, 1]) B.box(M.cyan, s * 5.72, 4.55, 67, 0.04, 0.07, 10.2);
    for (let j = -2; j <= 2; j++) B.box(M.lightWarm, j * 2, 2.6, 72.03, 1.1, 0.14, 0.02);
    sign(B, M, [{ text: '0' + (i + 1), size: 170, color: '#1f252c', y: 136 }], -3.3, 8.3, 72.26, 0, 1.3, 1.0, { bg: '#e6eaee', noPlate: true, pw: 256, ph: 256, bright: 1.0 });
    B.box(M.whiteClean, 2.4, 10.6, 66, 3.2, 1.2, 2.4);
    B.cyl(M.grating, 2.4, 11.22, 66, 0.8, 0.04, 16);
    antenna(B, M, ctx, -3, 10, 64, 5);
    // angled leg and thruster foot
    B.add(G.box(), M.hullPaint, 0, -0.3, 75.5, 0.26, 0, 0, 4.2, 2.8, 11);
    B.box(M.dark, 0, -1.0, 81.5, 6.4, 4.6, 6.4);
    B.box(M.hullPaint, 0, 1.5, 81.5, 6.2, 0.4, 6.2);
    B.box(M.cyan, 0, 0.9, 81.5, 6.7, 0.12, 6.7);
    for (const s of [-1, 1]) B.box(M.amber, s * 3.34, 1.7, 84.4, 0.1, 0.3, 0.3);
    B.cyl(M.gunmetal, 0, -0.4, 85.4, 1.4, 1.6, 20, { rx: Math.PI / 2, rz2: 1.4 });
    B.cyl(M.cyan, 0, -0.4, 86.22, 1.05, 0.05, 20, { rx: Math.PI / 2, rz2: 1.05 });
    const gp = B.wp(0, 0, 88);
    ctx.staticGlows.push([gp.x, 3.8, gp.z, 1.1]);
    B.pop();
  }
  // warm window slits along the hull band
  for (let k = 0; k < 8; k++) {
    B.push(0, 0, 0, sectorAngle(k));
    for (let i = -3; i <= 2; i++) B.box(M.lightWarm, i * 6.5 + 3.25, 4.55, 56.23, 1.8, 0.14, 0.02);
    B.pop();
  }
}

// ---------------------------------------------------------------- rooftop equipment
function rooftops(B, M, ctx) {
  B.chunk = 'rooftops'; B.interior = false;
  for (let k = 0; k < 8; k++) {
    B.push(0, 0, 0, sectorAngle(k));
    const y2 = 12, y3 = 18;
    if (k % 2 === 1) {
      container(B, M, 8.5, y2, 38.2, 0.08, k % 4 === 1 ? M.whiteClean : M.dark);
      P.crate(B, M, 12.4, y2, 38.8, 0.3, 1.2, 0.8, 0.8);
      P.crate(B, M, 12.2, y2 + 0.8, 38.9, 0.1, 0.9, 0.6, 0.7);
      if (k === 1 || k === 5) miniCrane(B, M, -11.5, y2, 39.4, 0.6);
      antenna(B, M, ctx, -6.5, y3, 28.8, 6);
    }
    if (k === 2 || k === 6) {
      roofTree(B, M, 6.5, y2, 38.0, 1.0, k * 7 + 1);
      roofTree(B, M, 11.5, y2, 37.4, 1.1, k * 7 + 2);
      roofTree(B, M, -10.2, y3, 30.5, 1.0, k * 7 + 3);
    }
    if (k === 0) roofTree(B, M, 10.5, y3, 30.6, 1.0, 5);
    if (k === 4) { container(B, M, -9.5, y2, 38.4, 0, M.redPaint, 3.6); roofTree(B, M, 9.5, y2, 37.8, 1.0, 44); }
    B.pop();
  }
}

// ---------------------------------------------------------------- research rigs across the sea
const RIGS = [
  [-175, 180, 18, 0.2, 'hub'], [190, -160, 16, 0.5, 'pad'], [-240, -55, 20, 0.1, 'hub'],
  [70, -330, 17, 0.7, 'hub'], [-95, -440, 14, 0.3, 'pad'], [330, 95, 18, 0.9, 'hub'],
  [270, -400, 15, 0.4, 'hub'], [-370, 270, 16, 0.6, 'pad'], [470, -240, 20, 0.2, 'hub'],
  [-520, -300, 22, 0.8, 'hub'],
];
function rig(B, M, ctx, [x, z, r, rot, kind], idx) {
  B.chunk = 'rig_' + idx; B.interior = false;
  const R = rng(700 + idx);
  B.push(x, 0, z, rot);
  const nLeg = r > 17 ? 6 : 4;
  for (let i = 0; i < nLeg; i++) {
    const a = (i + 0.5) / nLeg * Math.PI * 2, lx = Math.sin(a) * r * 0.78, lz = Math.cos(a) * r * 0.78;
    B.cyl(M.hullPaint, lx, 0.5, lz, 1.5, 11, 16);
    B.box(M.dark, lx, -1.2, lz, 4.2, 3.4, 4.2);
    B.add(G.torus(1.55, 0.1, 6, 24), M.cyan, lx, 1.4, lz, Math.PI / 2, 0, 0);
    B.box(M.amber, lx, 2.2, lz + 1.52, 0.2, 0.2, 0.05);
    const b = (i + 1.5) / nLeg * Math.PI * 2, bx = Math.sin(b) * r * 0.78, bz = Math.cos(b) * r * 0.78;
    B.pipe(M.gunmetal, lx, 4.8, lz, bx, 1.6, bz, 0.22);
  }
  B.slab(M.hullPaint, octPts(r), [], 5.2, 6.2);
  B.flat(M.deck, octPts(r), [], 6.21);
  const hw = T8 * r;
  for (let k = 0; k < 8; k++) {
    B.push(0, 0, 0, sectorAngle(k));
    B.box(M.white, 0, 5.5, r + 0.1, hw * 2, 0.9, 0.2);
    B.box(M.cyan, 0, 5.3, r + 0.22, hw * 2 - 0.4, 0.05, 0.03);
    B.box(M.metal, 0, 7.2, r - 0.3, hw * 2, 0.05, 0.05);
    for (let i = -1; i <= 1; i++) B.box(M.metal, i * hw * 0.66, 6.7, r - 0.3, 0.05, 1.0, 0.05);
    B.pop();
  }
  // central hub: glazed octagonal drum with faceted roof
  const ah = r * 0.5, hh = 4.6;
  B.slab(M.dark, octPts(ah), [], 6.2, 7.2);
  B.slab(M.glassTint, octPts(ah - 0.1), [], 7.2, 8.8);
  B.slab(M.white, octPts(ah + 0.2), [], 8.8, 6.2 + hh);
  for (let k = 0; k < 8; k++) { B.push(0, 0, 0, sectorAngle(k)); B.box(M.cyan, 0, 8.85, ah + 0.22, T8 * ah * 2, 0.05, 0.03); B.box(M.lightWarm, 0, 8.0, ah - 0.05, T8 * ah * 1.4, 0.1, 0.02); B.pop(); }
  const cap = new THREE.CylinderGeometry(RV(ah * 0.45), RV(ah + 0.3), 2.2, 8, 1, false).toNonIndexed();
  cap.rotateY(Math.PI / 8); cap.computeVertexNormals();
  B.addM(cap, M.whiteSmooth, B.mat(0, 6.2 + hh + 1.1, 0));
  B.cyl(M.metal, 0, 6.2 + hh + 4.5, 0, 0.1, 5, 8);
  ctx.blinkers.push({ p: B.wp(0, 6.2 + hh + 7.1, 0), color: 0xff3020, period: 1.2 + R() });
  if (kind === 'pad') {
    const g = new THREE.RingGeometry(r * 0.55, r * 0.6, 48); g.rotateX(-Math.PI / 2);
    B.addM(g, M.yellow, B.mat(0, 6.23, 0));
  } else {
    container(B, M, r * 0.62, 6.2, -r * 0.2, 1.2, R() < 0.5 ? M.whiteClean : M.dark, 3.6);
    miniCrane(B, M, -r * 0.62, 6.2, r * 0.15, 2.0);
    P.crate(B, M, r * 0.45, 6.2, r * 0.45, 0.4);
  }
  // one small dish
  B.add(G.hemi(16, 6), M.whiteSmooth, -r * 0.4, 6.2 + hh + 0.8, -r * 0.3, Math.PI - 0.7, 0.3, 0, 1.4, 0.5, 1.4);
  const w = B.wp(0, 0, 0);
  ctx.staticGlows.push([w.x, r * 0.35, w.z, 0.45]);
  B.pop();
}

// ---------------------------------------------------------------- tall outer ring + courtyards
function faceDetail(B, M, uA, uB, v, dir, top, outer) {
  const L = uB - uA, uc = (uA + uB) / 2;
  if (L < 0.5) return;
  B.box(M.dark, uc, 6.5, v + dir * 0.06, L, 1.0, 0.12);
  for (const y of [8.7, 12.5]) {
    B.box(M.dark, uc, y, v + dir * 0.04, L - 0.2, 1.8, 0.08);
    B.box(M.glassTint, uc, y, v + dir * 0.1, L - 0.5, 1.4, 0.05);
    if (outer) B.box(M.cyan, uc, y + 1.02, v + dir * 0.12, L - 0.5, 0.05, 0.03);
    for (let u = uA + 1.6; u < uB - 1.2; u += 3.6) B.box(M.lightWarm, u, y, v + dir * 0.1, 1.1, 0.9, 0.02); // 3 cm proud of the panel, behind the glass
  }
  let fin = 0;
  for (let u = uA + 0.4; u <= uB - 0.3; u += 3.2) {
    B.box(M.whiteSmooth, u, (6 + top) / 2 + 0.5, v + dir * 0.3, 0.3, top - 7, 0.6);
    if (outer && fin++ % 3 === 1) { // rain downpipe with brackets beside the fin
      B.cyl(M.gunmetal, u + 0.36, (6 + top) / 2, v + dir * 0.2, 0.075, top - 6, 10);
      for (let y = 7; y < top - 0.5; y += 2.2) B.box(M.darkSmooth, u + 0.36, y, v + dir * 0.12, 0.2, 0.06, 0.18);
      B.cyl(M.gunmetal, u + 0.36, 6.1, v + dir * 0.32, 0.09, 0.2, 10); // outlet shoe
    }
  }
  if (outer) { // cable tray between the plinth and the first window band
    B.box(M.gunmetal, uc, 7.4, v + dir * 0.2, L - 0.3, 0.07, 0.2);
    B.box(M.cable, uc, 7.46, v + dir * 0.2, L - 0.4, 0.05, 0.14);
  }
  B.box(M.metal, uc, top + 0.05, v + dir * 0.1, L, 0.12, 0.55);
  B.box(M.white, uc, top + 0.45, v - dir * 0.2, L, 0.8, 0.3);
}
function outerRing(B, M, S, ctx) {
  const { a0, a1, top } = OUTER;
  B.interior = false;
  for (let k = 0; k < 8; k++) {
    B.chunk = 'outer_' + k;
    B.push(0, 0, 0, sectorAngle(k));
    const g = OUTER.gate(k);
    for (const s of [-1, 1]) {
      const q = s < 0
        ? [[-T8 * a0, a0], [-g, a0], [-g, a1], [-T8 * a1, a1]]
        : [[g, a0], [T8 * a0, a0], [T8 * a1, a1], [g, a1]];
      B.slab(M.white, q, [], 6.0, top);
      B.colPoly(q, 6.0, top, 'solid');
      B.flat(M.dark, q, [], top + 0.01);
      const uo0 = s < 0 ? -T8 * a1 : g, uo1 = s < 0 ? -g : T8 * a1;
      const ui0 = s < 0 ? -T8 * a0 : g, ui1 = s < 0 ? -g : T8 * a0;
      faceDetail(B, M, uo0, uo1, a1, 1, top, true);
      faceDetail(B, M, ui0, ui1, a0, -1, top, false);
      // gateway jamb light
      B.box(M.cyan, s * (g + 0.02), 8.7, (a0 + a1) / 2, 0.03, 5.0, a1 - a0 - 1);
      // roof equipment
      const uc = s * (g + (T8 * 52 - g) * 0.5);
      P.hvac(B, M, uc, top, 51.6, 0, 3.0, 2.0);
      container(B, M, uc + s * 6.5, top, 53.2, 0, (k + (s > 0 ? 1 : 0)) % 3 === 0 ? M.redPaint : M.whiteClean, 3.8);
      for (let i = 0; i < 3; i++) {
        B.push(uc - s * (4 + i * 2.4), top, 50.2, 0);
        B.box(M.metal, 0, 0.4, 0, 0.1, 0.8, 0.1);
        B.add(G.box(), M.screenOff, 0, 0.9, 0, 0.5, 0, 0, 2.0, 0.05, 1.3);
        B.pop();
      }
      if ((k + s) % 3 === 0) antenna(B, M, ctx, uc + s * 2, top, 54.8, 7);
    }
    // gateway lintel through the ring
    const lh = 11.5, mid = (a0 + a1) / 2, dep = a1 - a0;
    B.box(M.white, 0, (lh + top) / 2, mid, 2 * g, top - lh, dep);
    B.box(M.light, 0, lh - 0.02, mid, 2 * g - 1, 0.02, dep - 1.2);
    for (const v of [a0, a1]) B.box(M.cyan, 0, lh - 0.05, v + (v === a1 ? 0.05 : -0.05), 2 * g, 0.08, 0.06);
    B.box(M.metal, 0, top + 0.05, mid, 2 * g, 0.12, dep);
    B.light(0, 10.3, mid, 0xf0f6ff, 14, 10);
    if (k === 0 || k === 4) cftSign(B, M, 0, 12.1, a1 + 0.35, 0, 13);
    if (k === 0) { // painted wall text inside the main gateway
      const paint = (lines, s, dz, w, h) => sign(B, M, lines, s * (g - 0.015), 8.6, mid + dz, s > 0 ? -Math.PI / 2 : Math.PI / 2, w, h, { bg: 'rgba(0,0,0,0)', noPlate: true, transparent: true, bright: 1.0 });
      const L = (t, y, size = 64, color = '#d9dcde') => ({ text: t, y, size, color, align: 'left', x: 40 });
      paint([L('EXPLORE', 60), L('CREATE', 140), L('EXPERIENCE', 220), L('TOGETHER', 300), L('—', 380, 64, '#ffb347')], -1, 1.6, 1.8, 1.9);
      paint([L('IDEAS', 60), L('MOTION', 140), L('PEOPLE', 220), L('TOGETHER', 300), L('—', 380, 64, '#ffb347')], 1, 1.6, 1.8, 1.9);
      paint([L('B1', 110, 200, '#e6e8e9'), L('OCEAN', 260), L('RESEARCH', 340), L('FACILITY', 420), L('—', 500, 64, '#ffb347')], 1, -2.2, 1.8, 2.4);
      paint([L('A BETTER', 120, 80), L('TOMORROW', 220, 80), L('—', 320, 64, '#ffb347')], -1, -2.2, 1.8, 1.6);
    }
    // courtyard wing on the + corner line, with an arch to walk between courtyards
    const p = (d) => { const v = 42.4 + d * COS8; return [T8 * v, v]; };
    B.wall(M.white, ...p(0), ...p(1.4), 6, 6, 3.0, { col: true });
    B.wall(M.white, ...p(4.7), ...p(6.2), 6, 6, 3.0, { col: true });
    B.wall(M.white, ...p(1.4), ...p(4.7), 10.2, 1.8, 3.0);
    B.wall(M.cyan, ...p(1.4), ...p(4.7), 10.15, 0.06, 3.05);
    B.wall(M.metal, ...p(0), ...p(6.2), 12.0, 0.1, 3.1);
    // courtyard: trees, benches, lamps
    const treeU = STAIR_SECTORS.includes(k) ? [-10.6, 9.5] : [-9.5, 9.5];
    treeU.forEach((u, i) => roofTree(B, M, u, 6, 45.6, 1.35, 300 + k * 5 + i));
    for (const u of [-14, 14]) P.bench(B, M, u, 6, 47.0, Math.PI, 2.0);
    for (const u of [-5, 5]) P.bollard(B, M, u, 6, 47.5);
    B.pop();
  }
}

export function buildExterior(B, M, S, ctx) {
  ctx.staticGlows = ctx.staticGlows || [];
  outerRing(B, M, S, ctx);
  cornerPylons(B, M, ctx);
  rooftops(B, M, ctx);
  RIGS.forEach((r, i) => rig(B, M, ctx, r, i));
}
