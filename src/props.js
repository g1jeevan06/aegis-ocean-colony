// Reusable hard-surface props.  Everything here is placed through the builder
// frame, so the same prop can be dropped into any sector.  Local +Z = front.
import * as THREE from 'three';
import { G } from './builder.js';
import { rng } from './util.js';

// ---------------------------------------------------------------- railings
export function railing(B, M, x0, z0, x1, z1, y, opt = {}) {
  const dx = x1 - x0, dz = z1 - z0, L = Math.hypot(dx, dz);
  if (L < 0.05) return;
  const ry = Math.atan2(dx, dz), h = opt.h || 1.1;
  const mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
  const n = Math.max(1, Math.round(L / (opt.spacing || 1.9)));
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    B.box(M.metal, x0 + dx * t, y + h / 2, z0 + dz * t, 0.07, h, 0.07, ry);
  }
  if (opt.glass !== false) B.box(M.glass, mx, y + 0.1 + (h - 0.24) / 2, mz, 0.025, h - 0.24, L, ry);
  else for (const hh of [0.35, 0.7]) B.box(M.metal, mx, y + hh, mz, 0.03, 0.03, L, ry);
  B.pipe(M.metal, x0, y + h, z0, x1, y + h, z1, 0.045, 8);
  if (opt.led !== false) B.box(M.cyanSoft, mx, y + h - 0.075, mz, 0.035, 0.025, L, ry);
  B.box(M.metal, mx, y + 0.05, mz, 0.06, 0.05, L, ry);
  if (opt.col !== false) B.colWall(x0, z0, x1, z1, y, h + 0.1, 0.16);
}
// solid composite parapet with an LED cap line (outer deck edges)
export function parapet(B, M, x0, z0, x1, z1, y, h = 1.2) {
  const dx = x1 - x0, dz = z1 - z0, L = Math.hypot(dx, dz);
  if (L < 0.05) return;
  const ry = Math.atan2(dx, dz), mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
  B.box(M.white, mx, y + h / 2, mz, 0.5, h, L, ry);
  B.box(M.metal, mx, y + h + 0.04, mz, 0.6, 0.08, L, ry);
  B.box(M.cyanSoft, mx, y + h - 0.12, mz, 0.62, 0.04, L - 0.2, ry);
  B.box(M.dark, mx, y + 0.12, mz, 0.54, 0.24, L, ry);
  B.colWall(x0, z0, x1, z1, y, h + 0.1, 0.5);
}
// railing along a polyline
export function railPath(B, M, pts, y, opt = {}) {
  for (let i = 0; i < pts.length - 1; i++) railing(B, M, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], y, opt);
}

// ---------------------------------------------------------------- seating & tables
export function bench(B, M, x, y, z, ry, len = 1.8) {
  B.push(x, y, z, ry);
  B.rbox(M.whiteSmooth, 0, 0.44, 0, len, 0.09, 0.52, 0.04);
  B.rbox(M.darkSmooth, -len / 2 + 0.25, 0.2, 0, 0.12, 0.4, 0.44, 0.03);
  B.rbox(M.darkSmooth, len / 2 - 0.25, 0.2, 0, 0.12, 0.4, 0.44, 0.03);
  B.box(M.cyanDim, 0, 0.39, 0.2, len - 0.3, 0.015, 0.02);
  B.colBox(0, 0.25, 0, len, 0.5, 0.5);
  B.pop();
}
export function chair(B, M, x, y, z, ry, mat) {
  B.push(x, y, z, ry);
  B.rbox(mat || M.whiteSmooth, 0, 0.46, 0, 0.48, 0.06, 0.46, 0.025);
  B.rbox(mat || M.whiteSmooth, 0, 0.78, -0.22, 0.48, 0.5, 0.05, 0.025);
  for (const [a, b] of [[-0.2, -0.19], [0.2, -0.19], [-0.2, 0.19], [0.2, 0.19]]) B.cyl(M.chrome, a, 0.22, b, 0.016, 0.44, 6);
  B.colBox(0, 0.4, 0, 0.44, 0.8, 0.44);
  B.pop();
}
export function stool(B, M, x, y, z, mat) {
  B.cyl(mat || M.orangeGloss, x, y + 0.72, z, 0.2, 0.06, 16);
  B.cyl(M.chrome, x, y + 0.36, z, 0.03, 0.7, 8);
  B.cyl(M.chrome, x, y + 0.02, z, 0.2, 0.03, 16);
}
export function roundTable(B, M, x, y, z, r = 0.55, h = 0.75) {
  B.cyl(M.whiteSmooth, x, y + h - 0.02, z, r, 0.04, 28);
  B.cyl(M.chrome, x, y + h / 2, z, 0.05, h - 0.04, 10);
  B.cyl(M.darkSmooth, x, y + 0.015, z, r * 0.55, 0.03, 20);
  B.colCyl(x, y, z, r * 0.7, h, 10);
}
export function cafeSet(B, M, x, y, z, ry, n = 3, mat) {
  roundTable(B, M, x, y, z, 0.55);
  for (let i = 0; i < n; i++) {
    const a = ry + i / n * Math.PI * 2;
    chair(B, M, x + Math.sin(a) * 0.95, y, z + Math.cos(a) * 0.95, a + Math.PI, mat);
  }
}
export function sofa(B, M, x, y, z, ry, len = 2.4, mat) {
  mat = mat || M.orange;
  B.push(x, y, z, ry);
  B.rbox(M.darkSmooth, 0, 0.12, 0, len, 0.24, 0.9, 0.04);
  const n = Math.max(1, Math.round(len / 0.9)), cw = (len - 0.3) / n;
  for (let i = 0; i < n; i++) B.rbox(mat, -len / 2 + 0.15 + cw * (i + 0.5), 0.36, 0.06, cw - 0.03, 0.22, 0.74, 0.08, 0, { seg: 3 });
  B.rbox(mat, 0, 0.66, -0.34, len, 0.52, 0.22, 0.09, 0, { seg: 3 });
  B.rbox(mat, -len / 2 + 0.08, 0.5, 0, 0.16, 0.36, 0.9, 0.06);
  B.rbox(mat, len / 2 - 0.08, 0.5, 0, 0.16, 0.36, 0.9, 0.06);
  B.box(M.orangeLight, 0, 0.03, 0.45, len - 0.2, 0.02, 0.02);
  B.colBox(0, 0.45, 0, len, 0.9, 0.9);
  B.pop();
}
export function armchair(B, M, x, y, z, ry, mat) {
  B.push(x, y, z, ry);
  B.rbox(mat || M.orange, 0, 0.3, 0, 0.9, 0.36, 0.85, 0.1, 0, { seg: 3 });
  B.rbox(mat || M.orange, 0, 0.7, -0.33, 0.9, 0.55, 0.2, 0.09, 0, { seg: 3 });
  B.cyl(M.chrome, 0, 0.06, 0, 0.3, 0.12, 20);
  B.colBox(0, 0.45, 0, 0.9, 0.9, 0.85);
  B.pop();
}
export function coffeeTable(B, M, x, y, z, ry, w = 1.4, d = 0.8) {
  B.push(x, y, z, ry);
  B.rbox(M.whiteSmooth, 0, 0.38, 0, w, 0.05, d, 0.02);
  B.rbox(M.darkSmooth, 0, 0.18, 0, w - 0.2, 0.34, d - 0.2, 0.03);
  B.box(M.cyanDim, 0, 0.02, 0, w - 0.18, 0.01, d - 0.18);
  B.colBox(0, 0.2, 0, w, 0.4, d);
  B.pop();
}
export function rug(B, M, x, y, z, ry, w, d, mat) {
  B.box(mat || M.fabricGrey, x, y + 0.008, z, w, 0.012, d, ry);
}

// ---------------------------------------------------------------- storage / walls
export function storage(B, M, x, y, z, ry, w = 2, h = 2, d = 0.5) {
  B.push(x, y, z, ry);
  B.rbox(M.whiteClean, 0, h / 2, 0, w, h, d, 0.03);
  const n = Math.max(1, Math.round(w / 0.6));
  for (let i = 1; i < n; i++) B.box(M.darkInlay, -w / 2 + i * w / n, h / 2, d / 2 + 0.001, 0.012, h - 0.1, 0.01);
  B.box(M.darkInlay, 0, h * 0.55, d / 2 + 0.001, w - 0.05, 0.012, 0.01);
  for (let i = 0; i < n; i++) B.box(M.chrome, -w / 2 + (i + 0.5) * w / n + 0.18, h * 0.62, d / 2 + 0.02, 0.02, 0.18, 0.02);
  B.box(M.cyanSoft, 0, h + 0.005, d / 2 - 0.02, w - 0.06, 0.012, 0.02);
  B.colBox(0, h / 2, 0, w, h, d);
  B.pop();
}
export function lockers(B, M, x, y, z, ry, n = 4) {
  B.push(x, y, z, ry);
  const w = 0.6;
  for (let i = 0; i < n; i++) {
    const lx = -n * w / 2 + (i + 0.5) * w;
    B.box(M.whiteClean, lx, 1.0, 0, w - 0.02, 2.0, 0.55);
    B.box(M.darkSmooth, lx, 1.55, 0.28, w - 0.14, 0.12, 0.01);
    for (let s = 0; s < 4; s++) B.box(M.darkSmooth, lx, 1.72 + s * 0.04, 0.281, w - 0.2, 0.015, 0.01);
    B.box(M.cyan, lx + 0.2, 1.1, 0.285, 0.03, 0.03, 0.01);
    B.box(M.chrome, lx + 0.2, 1.0, 0.29, 0.02, 0.14, 0.02);
  }
  B.colBox(0, 1, 0, n * w, 2, 0.55);
  B.pop();
}
export function techPanel(B, M, x, y, z, ry, w = 1.2, h = 1.6) {
  B.push(x, y, z, ry);
  B.box(M.dark, 0, h / 2, 0.04, w, h, 0.08);
  const R = rng((x * 100 + z * 7) | 0);
  for (let i = 0; i < 10; i++) B.box([M.cyan, M.amber, M.green, M.cyanSoft][(R() * 4) | 0], -w / 2 + 0.12 + R() * (w - 0.24), 0.2 + R() * (h - 0.4), 0.085, 0.05, 0.03, 0.01);
  B.box(M.darkInlay, 0, h * 0.72, 0.085, w * 0.7, h * 0.22, 0.01);
  B.pop();
}
export function screenPanel(B, M, scr, x, y, z, ry, w, h, bezel = 0.06) {
  B.push(x, y, z, ry);
  B.rbox(M.darkSmooth, 0, 0, 0, w + bezel * 2, h + bezel * 2, 0.07, 0.02);
  B.add(G.plane(), scr, 0, 0, 0.037, 0, 0, 0, w, h, 1, { keepUV: true });
  B.pop();
}
export function monitor(B, M, scr, x, y, z, ry, w = 0.62, h = 0.36) {
  B.push(x, y, z, ry);
  B.box(M.darkSmooth, 0, h / 2 + 0.16, 0, w + 0.03, h + 0.03, 0.03);
  B.add(G.plane(), scr, 0, h / 2 + 0.16, 0.0155, 0, 0, 0, w, h, 1, { keepUV: true });
  B.box(M.chrome, 0, 0.08, -0.04, 0.04, 0.16, 0.03);
  B.box(M.darkSmooth, 0, 0.005, -0.03, 0.22, 0.01, 0.16);
  B.pop();
}
export function officeChair(B, M, x, y, z, ry, mat) {
  B.push(x, y, z, ry);
  B.rbox(mat || M.fabricGrey, 0, 0.5, 0, 0.5, 0.08, 0.5, 0.03);
  B.rbox(mat || M.fabricGrey, 0, 0.88, -0.24, 0.46, 0.6, 0.06, 0.03);
  B.cyl(M.chrome, 0, 0.3, 0, 0.03, 0.4, 8);
  for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; B.box(M.darkSmooth, Math.sin(a) * 0.15, 0.06, Math.cos(a) * 0.15, 0.04, 0.03, 0.3, a); }
  B.pop();
}
export function desk(B, M, S, x, y, z, ry, w = 1.8, screens = ['status', 'log']) {
  B.push(x, y, z, ry);
  B.rbox(M.whiteSmooth, 0, 0.74, 0, w, 0.05, 0.8, 0.02);
  B.box(M.darkSmooth, -w / 2 + 0.06, 0.37, 0, 0.06, 0.72, 0.7);
  B.box(M.darkSmooth, w / 2 - 0.06, 0.37, 0, 0.06, 0.72, 0.7);
  B.box(M.darkSmooth, 0, 0.45, -0.34, w - 0.12, 0.5, 0.03);
  B.box(M.cyanSoft, 0, 0.765, 0.39, w - 0.1, 0.008, 0.01);
  const n = screens.length;
  for (let i = 0; i < n; i++) {
    const off = (i - (n - 1) / 2) * 0.66;
    monitor(B, M, S[screens[i]], off, 0.765, -0.18, -off * 0.35);
  }
  B.box(M.darkSmooth, 0, 0.775, 0.12, 0.5, 0.015, 0.16);
  officeChair(B, M, 0.1, 0, 0.75, Math.PI + 0.2);
  B.colBox(0, 0.4, 0, w, 0.8, 0.8);
  B.pop();
}
export function console_(B, M, S, x, y, z, ry, w = 2.4, scrs = ['status', 'sonar', 'log']) {
  B.push(x, y, z, ry);
  B.rbox(M.darkSmooth, 0, 0.4, 0, w, 0.8, 0.9, 0.04);
  const a = 0.45, sa = Math.sin(a), ca = Math.cos(a);
  B.add(G.box(), M.dark, 0, 0.9, 0.12, a, 0, 0, w, 0.06, 0.62);
  B.add(G.box(), M.cyanSoft, 0, 0.9 - 0.31 * sa + 0.03, 0.12 + 0.31 * ca, a, 0, 0, w - 0.1, 0.01, 0.02);
  const R = rng((x * 31 + z * 17) | 0);
  for (let i = 0; i < 26; i++) {
    let bx = -w / 2 + 0.15 + R() * (w - 0.3);
    if (Math.abs(bx) < w * 0.25) bx += Math.sign(bx || 1) * w * 0.25;
    const s = 0.25 - R() * 0.5;
    B.add(G.box(), [M.cyan, M.amber, M.green, M.cyanSoft, M.red][(R() * 5) | 0], bx, 0.9 - s * sa + 0.035, 0.12 + s * ca, a, 0, 0, 0.05, 0.015, 0.03);
  }
  B.add(G.plane(), S[scrs[0]], 0, 0.9 + 0.05 * sa + 0.034, 0.12 - 0.05 * ca, a - Math.PI / 2, 0, 0, w * 0.45, 0.3, 1, { keepUV: true });
  const n = scrs.length;
  for (let i = 0; i < n; i++) {
    const off = (i - (n - 1) / 2) * (w / n);
    B.push(off, 1.0, -0.3, -off * 0.12);
    B.box(M.darkSmooth, 0, 0.3, 0, w / n - 0.06, 0.52, 0.04);
    B.add(G.plane(), S[scrs[i]], 0, 0.3, 0.021, 0, 0, 0, w / n - 0.12, 0.46, 1, { keepUV: true });
    B.pop();
  }
  B.colBox(0, 0.5, 0, w, 1.0, 0.9);
  B.pop();
}
export function rack(B, M, x, y, z, ry, h = 2.2) {
  B.push(x, y, z, ry);
  B.box(M.darkSmooth, 0, h / 2, 0, 0.7, h, 0.9);
  B.box(M.grating, 0, h / 2, 0.451, 0.6, h - 0.2, 0.005);
  const R = rng((x * 13 + z * 29) | 0);
  for (let i = 0; i < 16; i++) B.box([M.green, M.cyan, M.amber, M.green][(R() * 4) | 0], -0.25 + R() * 0.12, 0.2 + i * (h - 0.4) / 16, 0.456, 0.025, 0.012, 0.005);
  B.colBox(0, h / 2, 0, 0.7, h, 0.9);
  B.pop();
}
export function crate(B, M, x, y, z, ry, w = 1.2, h = 0.8, d = 0.8, mat) {
  B.push(x, y, z, ry);
  B.rbox(mat || M.dark, 0, h / 2, 0, w, h, d, 0.04);
  B.box(M.whiteClean, 0, h / 2, 0, w + 0.02, 0.12, d + 0.02);
  B.box(M.hazard, w / 2 - 0.12, h - 0.05, 0, 0.16, 0.08, d + 0.03);
  B.colBox(0, h / 2, 0, w, h, d);
  B.pop();
}
export function container(B, M, x, y, z, ry, mat) {
  B.push(x, y, z, ry);
  B.box(mat || M.whiteClean, 0, 1.3, 0, 6.0, 2.6, 2.4);
  for (let i = -5; i <= 5; i++) B.box(M.gunmetal, i * 0.55, 1.3, 1.21, 0.08, 2.4, 0.04);
  B.box(M.cyan, 0, 2.45, 1.22, 5.6, 0.04, 0.02);
  B.colBox(0, 1.3, 0, 6.0, 2.6, 2.4);
  B.pop();
}

// ---------------------------------------------------------------- plants
export function potPlant(B, M, x, y, z, s = 1, seed = 1) {
  const R = rng(seed + ((x * 97 + z * 13) | 0));
  B.cyl(M.whiteSmooth, x, y + 0.3 * s, z, 0.32 * s, 0.6 * s, 18);
  B.cyl(M.soil, x, y + 0.59 * s, z, 0.29 * s, 0.02, 14);
  for (let i = 0; i < 9; i++) {
    const a = R() * Math.PI * 2, r = R() * 0.22 * s;
    B.add(G.cone(0, 1, 5), [M.plant, M.plantDark, M.plantLight][(R() * 3) | 0], x + Math.sin(a) * r, y + (0.9 + R() * 0.5) * s, z + Math.cos(a) * r, (R() - 0.5) * 0.6, R() * 3, (R() - 0.5) * 0.6, 0.14 * s, (0.6 + R() * 0.6) * s, 0.14 * s);
  }
  B.colCyl(x, y, z, 0.32 * s, 0.9 * s, 8);
}
export function shrubBox(B, M, x, y, z, ry, w = 2.4, d = 0.8, seed = 3) {
  B.push(x, y, z, ry);
  B.rbox(M.whiteSmooth, 0, 0.35, 0, w, 0.7, d, 0.06);
  B.box(M.soil, 0, 0.69, 0, w - 0.12, 0.02, d - 0.12);
  const R = rng(seed);
  for (let i = 0; i < w * 5; i++) {
    B.add(G.sphere(8, 6), [M.plant, M.plantDark, M.plantLight][(R() * 3) | 0], (R() - 0.5) * (w - 0.3), 0.8 + R() * 0.15, (R() - 0.5) * (d - 0.3), 0, R() * 3, 0, 0.18 + R() * 0.12, 0.14 + R() * 0.1, 0.18 + R() * 0.12);
  }
  B.box(M.cyanDim, 0, 0.05, d / 2 + 0.001, w - 0.1, 0.02, 0.01);
  B.colBox(0, 0.4, 0, w, 0.8, d);
  B.pop();
}
export function bollard(B, M, x, y, z) {
  B.cyl(M.darkSmooth, x, y + 0.45, z, 0.1, 0.9, 12);
  B.cyl(M.cyan, x, y + 0.78, z, 0.102, 0.08, 12);
}
export function ceilingLight(B, M, x, y, z, w, d, ry = 0, mat) {
  B.box(M.darkSmooth, x, y - 0.015, z, w + 0.08, 0.03, d + 0.08, ry);
  B.box(mat || M.light, x, y - 0.035, z, w, 0.012, d, ry);
}

// ---------------------------------------------------------------- lab & science
export function jar(B, M, x, y, z, r = 0.14, h = 0.4, fluid) {
  B.cyl(M.chrome, x, y + 0.02, z, r + 0.02, 0.04, 14);
  B.cyl(fluid || M.greenFluid, x, y + h * 0.45, z, r * 0.9, h * 0.8, 14);
  B.cyl(M.glass, x, y + h / 2, z, r, h, 14, { open: true });
  B.cyl(M.chrome, x, y + h + 0.02, z, r + 0.02, 0.04, 14);
}
export function labTable(B, M, x, y, z, ry, w = 2.6, d = 1.0) {
  B.push(x, y, z, ry);
  B.rbox(M.whiteSmooth, 0, 0.9, 0, w, 0.05, d, 0.02);
  B.box(M.dark, 0, 0.45, 0, w - 0.1, 0.84, d - 0.2);
  B.box(M.cyanSoft, 0, 0.87, d / 2 - 0.08, w - 0.2, 0.01, 0.01);
  B.colBox(0, 0.46, 0, w, 0.92, d);
  B.pop();
}
export function fumeHood(B, M, x, y, z, ry, w = 1.8) {
  B.push(x, y, z, ry);
  B.box(M.dark, 0, 0.45, 0, w, 0.9, 0.8);
  B.box(M.whiteClean, 0, 1.6, -0.3, w, 1.4, 0.2);
  B.box(M.whiteClean, -w / 2 + 0.04, 1.6, 0, 0.08, 1.4, 0.8);
  B.box(M.whiteClean, w / 2 - 0.04, 1.6, 0, 0.08, 1.4, 0.8);
  B.box(M.whiteClean, 0, 2.4, 0, w, 0.4, 0.8);
  B.box(M.glass, 0, 1.55, 0.38, w - 0.1, 0.9, 0.02);
  B.box(M.light, 0, 2.19, 0, w - 0.2, 0.02, 0.5);
  B.colBox(0, 1.3, 0, w, 2.6, 0.8);
  B.pop();
}
export function microscope(B, M, x, y, z, ry) {
  B.push(x, y, z, ry);
  B.box(M.plasticWhite, 0, 0.03, 0, 0.22, 0.06, 0.3);
  B.box(M.plasticWhite, 0, 0.2, -0.1, 0.06, 0.34, 0.06);
  B.add(G.cyl(12), M.darkSmooth, 0, 0.3, 0.0, 0.5, 0, 0, 0.035, 0.22, 0.035);
  B.box(M.darkSmooth, 0, 0.12, 0.02, 0.16, 0.02, 0.14);
  B.pop();
}
export function cryoPod(B, M, x, y, z, ry, s = 1) {
  B.push(x, y, z, ry);
  B.cyl(M.darkSmooth, 0, 0.25 * s, 0, 0.95 * s, 0.5 * s, 32);
  B.cyl(M.metal, 0, 0.53 * s, 0, 0.88 * s, 0.06 * s, 32);
  B.add(G.torus(0.86 * s, 0.03 * s, 6, 40), M.cyan, 0, 0.5 * s, 0, Math.PI / 2, 0, 0);
  B.cyl(M.cryoFluid, 0, 1.65 * s, 0, 0.7 * s, 2.2 * s, 28);
  B.cyl(M.glass, 0, 1.65 * s, 0, 0.76 * s, 2.24 * s, 32, { open: true });
  for (let i = 0; i < 4; i++) { const a = i / 4 * Math.PI * 2 + Math.PI / 4; B.box(M.metal, Math.sin(a) * 0.8 * s, 1.65 * s, Math.cos(a) * 0.8 * s, 0.07 * s, 2.3 * s, 0.07 * s, a); }
  B.cyl(M.metal, 0, 2.95 * s, 0, 0.9 * s, 0.4 * s, 32);
  B.cyl(M.darkSmooth, 0, 3.25 * s, 0, 0.6 * s, 0.25 * s, 24);
  B.add(G.torus(0.86 * s, 0.025 * s, 6, 40), M.cyan, 0, 2.77 * s, 0, Math.PI / 2, 0, 0);
  // hoses to the ceiling
  B.pipe(M.cable, 0.3 * s, 3.3 * s, 0, 0.5 * s, 5.3, 0.2, 0.06 * s);
  B.pipe(M.cable, -0.3 * s, 3.3 * s, 0.1, -0.6 * s, 5.3, -0.1, 0.05 * s);
  // side readout
  B.box(M.darkSmooth, 0, 1.0 * s, 0.9 * s, 0.4 * s, 0.6 * s, 0.1 * s);
  B.box(M.cyanSoft, 0, 1.1 * s, 0.955 * s, 0.3 * s, 0.25 * s, 0.01);
  B.colCyl(0, 0, 0, 0.95 * s, 3.4 * s, 12);
  B.pop();
}
export function generator(B, M, x, y, z, ry) {
  B.push(x, y, z, ry);
  B.box(M.dark, 0, 0.2, 0, 4.2, 0.4, 2.2);
  B.add(G.cyl(28), M.gunmetal, 0, 1.4, 0, 0, 0, Math.PI / 2, 1.0, 3.6, 1.0);
  for (let i = -3; i <= 3; i++) B.add(G.torus(1.02, 0.06, 6, 28), M.darkSmooth, i * 0.5, 1.4, 0, 0, Math.PI / 2, 0);
  B.add(G.cyl(24), M.dark, 2.0, 1.4, 0, 0, 0, Math.PI / 2, 0.8, 0.5, 0.8);
  B.add(G.torus(0.7, 0.04, 6, 28), M.cyan, 2.26, 1.4, 0, 0, Math.PI / 2, 0);
  B.box(M.hazard, 0, 0.41, 1.1, 4.2, 0.02, 0.1);
  B.pipe(M.copper, -1.2, 2.3, 0, -1.2, 5.3, 0, 0.12);
  B.pipe(M.copper, 1.0, 2.3, 0.3, 1.0, 5.3, 0.3, 0.1);
  B.colBox(0, 1.3, 0, 4.2, 2.6, 2.2);
  B.pop();
}
export function telescope(B, M, x, y, z, ry) {
  B.push(x, y, z, ry);
  B.cyl(M.darkSmooth, 0, 0.55, 0, 0.06, 1.1, 10);
  B.cyl(M.darkSmooth, 0, 0.02, 0, 0.3, 0.04, 16);
  B.add(G.cyl(16), M.whiteSmooth, 0, 1.2, 0.1, Math.PI / 2 - 0.15, 0, 0, 0.1, 0.7, 0.1);
  B.add(G.cyl(16), M.chrome, 0, 1.25, 0.46, Math.PI / 2 - 0.15, 0, 0, 0.12, 0.05, 0.12);
  B.colCyl(0, 0, 0, 0.3, 1.3, 8);
  B.pop();
}
export function hvac(B, M, x, y, z, ry, w = 3, d = 2) {
  B.push(x, y, z, ry);
  B.box(M.whiteClean, 0, 0.7, 0, w, 1.4, d);
  B.cyl(M.grating, -w / 4, 1.42, 0, 0.6, 0.04, 20);
  B.cyl(M.grating, w / 4, 1.42, 0, 0.6, 0.04, 20);
  B.box(M.dark, 0, 0.7, d / 2 + 0.01, w - 0.3, 0.8, 0.02);
  B.box(M.hazard, 0, 0.02, 0, w + 1.2, 0.02, 0.12);
  B.box(M.hazard, 0, 0.02, 0, 0.12, 0.02, d + 1.2);
  B.colBox(0, 0.7, 0, w, 1.4, d);
  B.pop();
}
export function holoTableBase(B, M, x, y, z, r = 1.2) {
  B.cyl(M.darkSmooth, x, y + 0.45, z, r, 0.9, 40);
  B.cyl(M.metal, x, y + 0.92, z, r + 0.05, 0.06, 40);
  B.cyl(M.cyan, x, y + 0.955, z, r * 0.8, 0.01, 40);
  B.add(G.torus(r + 0.02, 0.02, 6, 48), M.cyan, x, y + 0.6, z, Math.PI / 2, 0, 0);
  B.colCyl(x, y, z, r, 1.0, 12);
}

// ---------------------------------------------------------------- tree (atrium)
export function buildTree(B, M, x, y, z, seed = 7) {
  const R = rng(seed);
  const up = new THREE.Vector3(0, 1, 0);
  const leaves = [];
  const seg = (a, b, r0, r1) => {
    const d = b.clone().sub(a), l = d.length();
    const g = new THREE.CylinderGeometry(r1, r0, l, 10, 1, true);
    const q = new THREE.Quaternion().setFromUnitVectors(up, d.normalize());
    const m = new THREE.Matrix4().compose(a.clone().add(b).multiplyScalar(0.5), q, new THREE.Vector3(1, 1, 1));
    // bark uv: along length
    const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * Math.max(1, r0 * 6), uv.getY(i) * l * 0.6);
    B.addM(g, M.bark, m.premultiply(B.M.clone().multiply(new THREE.Matrix4().makeTranslation(x, y, z))));
    const s = new THREE.SphereGeometry(r1 * 1.02, 8, 6);
    B.addM(s, M.bark, new THREE.Matrix4().makeTranslation(b.x, b.y, b.z).premultiply(B.M.clone().multiply(new THREE.Matrix4().makeTranslation(x, y, z))));
  };
  const branch = (p, dir, len, r, depth) => {
    // slightly curved branch in 3 segments
    let cur = p.clone(), d = dir.clone();
    for (let i = 0; i < 3; i++) {
      d.add(new THREE.Vector3((R() - 0.5) * 0.35, 0.08 + (R() - 0.3) * 0.12, (R() - 0.5) * 0.35)).normalize();
      const nxt = cur.clone().addScaledVector(d, len / 3);
      const rr = r * (1 - (i + 1) * 0.12);
      seg(cur, nxt, r * (1 - i * 0.12), rr);
      cur = nxt;
    }
    if (depth <= 0 || r < 0.05) {
      for (let i = 0; i < 26; i++) {
        const o = new THREE.Vector3((R() - 0.5), (R() - 0.3) * 0.8, (R() - 0.5)).multiplyScalar(2.6);
        leaves.push(cur.clone().add(o));
      }
      return;
    }
    const kids = depth >= 3 ? 3 : 2 + (R() < 0.5 ? 1 : 0);
    for (let k = 0; k < kids; k++) {
      const a = k / kids * Math.PI * 2 + R() * 1.2;
      const spread = 0.55 + R() * 0.35;
      const nd = d.clone().multiplyScalar(1 - spread).add(new THREE.Vector3(Math.cos(a), 0.35 + R() * 0.3, Math.sin(a)).multiplyScalar(spread)).normalize();
      branch(cur, nd, len * (0.66 + R() * 0.12), r * 0.62, depth - 1);
    }
    // a few leaves along the way too
    if (depth <= 2) for (let i = 0; i < 8; i++) leaves.push(cur.clone().add(new THREE.Vector3((R() - 0.5) * 2, (R() - 0.5) * 1.5, (R() - 0.5) * 2)));
  };
  // flared roots
  for (let i = 0; i < 7; i++) {
    const a = i / 7 * Math.PI * 2 + R() * 0.4;
    seg(new THREE.Vector3(Math.cos(a) * 0.9, 0.05, Math.sin(a) * 0.9), new THREE.Vector3(Math.cos(a) * 0.2, 1.1, Math.sin(a) * 0.2), 0.2, 0.28);
  }
  seg(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.1, 2.6, 0.05), 0.62, 0.52);
  seg(new THREE.Vector3(0.1, 2.6, 0.05), new THREE.Vector3(-0.05, 4.6, 0.12), 0.52, 0.45);
  const top = new THREE.Vector3(-0.05, 4.6, 0.12);
  for (let k = 0; k < 4; k++) {
    const a = k / 4 * Math.PI * 2 + 0.4;
    branch(top, new THREE.Vector3(Math.cos(a) * 0.6, 1, Math.sin(a) * 0.6).normalize(), 5.2, 0.34, 3);
  }
  branch(top, new THREE.Vector3(0, 1, 0), 5.5, 0.3, 3);

  // leaf cards (instanced, gently swaying)
  const geo = new THREE.PlaneGeometry(1.25, 1.25);
  geo.translate(0, 0.5, 0);
  const mat = M.leaf;
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = { value: 0 };
    mat.userData.shader = sh;
    sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      #ifdef USE_INSTANCING
      float ph = instanceMatrix[3].x * 0.7 + instanceMatrix[3].z * 0.9;
      transformed.x += sin(uTime * 1.4 + ph) * 0.05 * uv.y;
      transformed.z += cos(uTime * 1.1 + ph) * 0.05 * uv.y;
      #endif`);
  };
  const inst = new THREE.InstancedMesh(geo, mat, leaves.length);
  const dummy = new THREE.Object3D(), col = new THREE.Color();
  const base = B.M.clone().multiply(new THREE.Matrix4().makeTranslation(x, y, z));
  leaves.forEach((p, i) => {
    dummy.position.copy(p).applyMatrix4(base);
    dummy.rotation.set((R() - 0.5) * 1.6, R() * Math.PI * 2, (R() - 0.5) * 1.6);
    dummy.scale.setScalar(0.8 + R() * 0.7);
    dummy.updateMatrix();
    inst.setMatrixAt(i, dummy.matrix);
    col.setHSL(0.26 + R() * 0.06, 0.45 + R() * 0.2, 0.32 + R() * 0.16);
    inst.setColorAt(i, col);
  });
  inst.castShadow = true; inst.receiveShadow = true;
  inst.layers.set(1);
  return inst;
}

// ---------------------------------------------------------------- creature (cryo specimen)
export function makeCreature(M, scale = 1, seed = 3) {
  const R = rng(seed);
  const g = new THREE.Group();
  const body = new THREE.SphereGeometry(0.34, 28, 20);
  const p = body.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const n = 1 + Math.sin(x * 14 + y * 5) * 0.05 + Math.sin(z * 11 - y * 7) * 0.05;
    p.setXYZ(i, x * n * (1 - y * 0.6), y * 1.7 * n, z * n * 0.9);
  }
  body.computeVertexNormals();
  const skin = M.creature;
  const b = new THREE.Mesh(body, skin); b.position.y = 0.1; g.add(b);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 20, 14), skin);
  head.scale.set(1.1, 0.9, 1.3); head.position.set(0, 0.72, 0.05); g.add(head);
  const eyeM = M.teal;
  for (const s of [-1, 1]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 8), eyeM); e.position.set(s * 0.1, 0.76, 0.26); g.add(e); }
  // bioluminescent spots
  for (let i = 0; i < 14; i++) {
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.014 + R() * 0.012, 6, 4), M.cyan);
    const a = R() * Math.PI * 2, h = -0.3 + R() * 0.8;
    e.position.set(Math.sin(a) * 0.3 * (1 - h * 0.4), h + 0.1, Math.cos(a) * 0.28); g.add(e);
  }
  // fins
  for (const s of [-1, 1]) {
    const f = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 8), skin);
    f.scale.set(0.9, 0.12, 0.45); f.position.set(s * 0.38, 0.25, 0); f.rotation.z = s * 0.5; g.add(f);
  }
  // tentacles
  const tentacles = [];
  for (let i = 0; i < 7; i++) {
    const a = i / 7 * Math.PI * 2;
    const pts = [];
    for (let j = 0; j < 6; j++) pts.push(new THREE.Vector3(Math.sin(a) * (0.15 + j * 0.05) + Math.sin(j + i) * 0.05, -0.35 - j * 0.16, Math.cos(a) * (0.15 + j * 0.05)));
    const curve = new THREE.CatmullRomCurve3(pts);
    const t = new THREE.Mesh(new THREE.TubeGeometry(curve, 20, 0.035 - i * 0.001, 6), skin);
    g.add(t); tentacles.push(t);
  }
  g.scale.setScalar(scale);
  g.userData.tentacles = tentacles;
  g.traverse(o => { o.layers.set(1); });
  return g;
}

// ---------------------------------------------------------------- sliding door (animated group)
export function makeDoor(M, w = 2.2, h = 3.0, style = 'white') {
  const g = new THREE.Group();
  const panelMat = style === 'glass' ? M.glassTint : (style === 'red' ? M.dark : M.whiteClean);
  const L = new THREE.Group(), Rr = new THREE.Group();
  for (const [grp, s] of [[L, -1], [Rr, 1]]) {
    const p = new THREE.Mesh(new THREE.BoxGeometry(w / 2, h, 0.1), panelMat);
    p.position.x = s * w / 4; grp.add(p);
    if (style !== 'glass') {
      const win = new THREE.Mesh(new THREE.BoxGeometry(0.12, h * 0.55, 0.12), M.glassTint);
      win.position.set(s * 0.18, h * 0.08, 0); grp.add(win);
    }
    const edge = new THREE.Mesh(new THREE.BoxGeometry(0.03, h - 0.1, 0.12), style === 'red' ? M.red : M.cyan);
    edge.position.x = s * 0.02; grp.add(edge);
    g.add(grp);
  }
  g.userData = { L, R: Rr, w };
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}
