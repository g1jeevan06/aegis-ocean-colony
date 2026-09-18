// Hidden-face removal ("double faces").  Many pieces are stacked on purpose:
// a deck laid 1 cm over the hull, a stripe on a wall, soil in a planter.  The
// covered face underneath is invisible, but at a distance the depth buffer
// cannot tell the two planes apart and they flicker (z-fighting).  Here every
// face that lies within EPS behind an opaque face pointing the same way is cut
// away where it is covered, so nothing is left to fight.
import * as THREE from 'three';

const EPS = 0.016;       // plane gap treated as "on top of each other"
const DOT = 0.9995;      // same facing
const MIN_AREA = 1e-5;
const MAX_POLYS = 16;
const HARD_POLYS = 128;   // give up counting beyond this     // a face that would break into more pieces than this is left whole

// pieces: [{ g: non-indexed BufferGeometry (position, normal, uv), opaque, layer }]
// in add order; a later piece wins over an earlier one on exactly the same plane.
export function removeHiddenFaces(pieces) {
  const t0 = performance.now();
  // ---- flat triangle table
  let n = 0;
  for (const p of pieces) n += p.g.attributes.position.count / 3;
  const TP = new Int32Array(n), TI = new Int32Array(n), TN = new Float32Array(n * 3), TD = new Float64Array(n);
  const buckets = new Map();
  let k = 0;
  pieces.forEach((p, pi) => {
    const a = p.g.attributes.position.array;
    for (let i = 0, ti = 0; i < a.length; i += 9, ti++) {
      const ux = a[i + 3] - a[i], uy = a[i + 4] - a[i + 1], uz = a[i + 5] - a[i + 2];
      const vx = a[i + 6] - a[i], vy = a[i + 7] - a[i + 1], vz = a[i + 8] - a[i + 2];
      let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
      const l = Math.hypot(nx, ny, nz);
      if (l < 1e-6) continue;
      nx /= l; ny /= l; nz /= l;
      TP[k] = pi; TI[k] = ti; TN[k * 3] = nx; TN[k * 3 + 1] = ny; TN[k * 3 + 2] = nz;
      TD[k] = nx * a[i] + ny * a[i + 1] + nz * a[i + 2];
      const key = qkey(nx, ny, nz, Math.round(TD[k] / (EPS * 2)));
      let b = buckets.get(key); if (!b) buckets.set(key, b = []); b.push(k);
      k++;
    }
  });

  const P2 = (c, e1, e2) => {
    const a = pieces[TP[c]].g.attributes.position.array, i = TI[c] * 9, out = [];
    for (let v = 0; v < 3; v++) { const x = a[i + v * 3], y = a[i + v * 3 + 1], z = a[i + v * 3 + 2]; out.push([x * e1[0] + y * e1[1] + z * e1[2], x * e2[0] + y * e2[1] + z * e2[2]]); }
    return out;
  };
  // occluders are collected over all buckets first: a face can meet covers in
  // two neighbouring plane cells, and both must be cut from the same shape
  const occ = new Map(); // victim tri -> { T, os: [T...] }
  for (const [key, list] of buckets) {
    const next = buckets.get(key + 1); // neighbour plane-offset cell (low part of the key)
    const cand = next ? list.concat(next) : list;
    if (cand.length < 2) continue;
    // 2D frame from the quantised normal, so every cell with this normal agrees
    const qn = Math.floor(key / 1e6), qz = qn % 129 - 64, qy = Math.floor(qn / 129) % 129 - 64, qx = Math.floor(qn / 16641) - 64;
    const ql = Math.hypot(qx, qy, qz), nx = qx / ql, ny = qy / ql, nz = qz / ql;
    const up = Math.abs(ny) < 0.9 ? [0, 1, 0] : [1, 0, 0];
    let e1 = [up[1] * nz - up[2] * ny, up[2] * nx - up[0] * nz, up[0] * ny - up[1] * nx];
    const el = Math.hypot(e1[0], e1[1], e1[2]); e1 = [e1[0] / el, e1[1] / el, e1[2] / el];
    const e2 = [ny * e1[2] - nz * e1[1], nz * e1[0] - nx * e1[2], nx * e1[1] - ny * e1[0]];
    const info = cand.map(c => { const T = ccw(P2(c, e1, e2)); return { c, T, x0: Math.min(T[0][0], T[1][0], T[2][0]), x1: Math.max(T[0][0], T[1][0], T[2][0]), y0: Math.min(T[0][1], T[1][1], T[2][1]), y1: Math.max(T[0][1], T[1][1], T[2][1]) }; });
    info.sort((a, b) => a.x0 - b.x0);
    const own = new Set(list);
    for (let i = 0; i < info.length; i++) {
      const A = info[i];
      for (let j = i + 1; j < info.length && info[j].x0 < A.x1; j++) {
        const B = info[j];
        if (B.y0 >= A.y1 || B.y1 <= A.y0) continue;
        const a = A.c, b = B.c;
        if (TP[a] === TP[b]) continue;
        if (!own.has(a) && !own.has(b)) continue;
        if (TN[a * 3] * TN[b * 3] + TN[a * 3 + 1] * TN[b * 3 + 1] + TN[a * 3 + 2] * TN[b * 3 + 2] < DOT) continue;
        const gap = TD[b] - TD[a];
        if (Math.abs(gap) > EPS) continue;
        // who is in front: further out along the normal, or added later when flush
        const oa = pieces[TP[a]].opaque, ob = pieces[TP[b]].opaque;
        if (!oa && !ob) continue; // glass on glass: neither writes depth, so they cannot fight
        // glass flush with a solid face always loses (a tint over a few mm is invisible);
        // otherwise the face further out along the normal wins, or the later one when flush
        const bFront = oa !== ob ? ob : (Math.abs(gap) < 1e-4 ? TP[b] > TP[a] : gap > 0);
        const [V, O] = bFront ? [A, B] : [B, A];
        const pv = pieces[TP[V.c]], po = pieces[TP[O.c]];
        // interior faces are not drawn in the sea reflection or the sun's shadow map,
        // so an exterior face they hide keeps an invisible shadow-casting copy
        // (only needed when it does not point up: back faces cast the shadows)
        const keep = po.layer !== pv.layer && pv.layer === 0 && TN[V.c * 3 + 1] < 0.5;
        let e = occ.get(V.c); if (!e) occ.set(V.c, e = { T: V.T, os: [], keep: false }); e.os.push(O.T); e.keep ||= keep;
      }
    }
  }
  const cut = new Map(); // piece -> Map(tri -> { polys, T })
  let skipped = 0;
  const shadow = [];
  for (const [c, { T, os, keep }] of occ) {
    const limit = Math.abs(area(T)) < 4 ? HARD_POLYS : MAX_POLYS; // small props may break into more pieces
    let polys = [T];
    for (const O of os) {
      const nxt = [];
      for (const P of polys) { // P minus triangle O: the parts outside each edge, peeled off in turn
        let inside = P;
        for (let e = 0; e < 3 && inside.length > 2; e++) {
          const a = O[e], b = O[(e + 1) % 3];
          const outside = clip(inside, b, a);
          if (outside.length > 2 && !thin(outside)) nxt.push(outside);
          inside = clip(inside, a, b);
        }
      }
      polys = nxt;
      if (!polys.length || polys.length > HARD_POLYS) break;
    }
    if (polys.length > limit) {
      // would shatter into slivers: drop it if what is left is next to nothing, else leave it whole
      const left = polys.reduce((s, p) => s + Math.abs(area(p)), 0);
      if (polys.length <= HARD_POLYS && left < 0.02 * Math.abs(area(T))) polys = [];
      else { skipped++; continue; }
    }
    const before = Math.abs(area(T)), after = polys.reduce((s, p) => s + Math.abs(area(p)), 0);
    if (before - after < MIN_AREA) continue;
    if (keep) { const a = pieces[TP[c]].g.attributes.position.array, i = TI[c] * 9; for (let j = 0; j < 9; j++) shadow.push(a[i + j]); }
    let m = cut.get(TP[c]); if (!m) cut.set(TP[c], m = new Map());
    m.set(TI[c], { polys, T });
  }
  // ---- rebuild the pieces that lost area
  let removed = 0, added = 0;
  for (const [pi, m] of cut) {
    const g = pieces[pi].g;
    const pos = g.attributes.position.array, nor = g.attributes.normal.array, uv = g.attributes.uv.array;
    const P = [], N = [], U = [];
    const tri = pos.length / 9;
    for (let ti = 0; ti < tri; ti++) {
      const c = m.get(ti);
      if (!c) { for (let v = 0; v < 3; v++) { const j = ti * 3 + v; P.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]); N.push(nor[j * 3], nor[j * 3 + 1], nor[j * 3 + 2]); U.push(uv[j * 2], uv[j * 2 + 1]); } continue; }
      removed++;
      // barycentric map from the projected triangle back to the original vertices
      const T = c.T, src = T.flip ? [0, 2, 1] : [0, 1, 2];
      for (const poly of c.polys) {
        for (let f = 1; f + 1 < poly.length; f++) {
          const tri2 = T.flip ? [poly[0], poly[f + 1], poly[f]] : [poly[0], poly[f], poly[f + 1]]; // keep the original facing
          if (Math.abs(area(tri2)) < 1e-7) continue;
          for (const q of tri2) {
            const w = bary(T, q); added += 1 / 3;
            for (let a = 0; a < 3; a++) { let s = 0; for (let v = 0; v < 3; v++) s += w[v] * pos[(ti * 3 + src[v]) * 3 + a]; P.push(s); }
            for (let a = 0; a < 3; a++) { let s = 0; for (let v = 0; v < 3; v++) s += w[v] * nor[(ti * 3 + src[v]) * 3 + a]; N.push(s); }
            for (let a = 0; a < 2; a++) { let s = 0; for (let v = 0; v < 3; v++) s += w[v] * uv[(ti * 3 + src[v]) * 2 + a]; U.push(s); }
          }
        }
      }
    }
    g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2));
  }
  return { shadow: new Float32Array(shadow), triangles: n, cut: removed, added: Math.round(added), skipped, pieces: cut.size, ms: Math.round(performance.now() - t0) };
}

// integer bucket key: quantised normal in the high part, plane offset in the low part
function qkey(nx, ny, nz, qd) {
  const qn = ((Math.round(nx * 40) + 64) * 129 + (Math.round(ny * 40) + 64)) * 129 + (Math.round(nz * 40) + 64);
  return qn * 1e6 + (qd + 500000);
}
// slivers left by clipping along shared edges (< ~2 mm wide) are dropped
function thin(P) {
  const A = Math.abs(area(P));
  if (A < MIN_AREA) return true;
  let per = 0; for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length]; per += Math.hypot(b[0] - a[0], b[1] - a[1]); }
  return A / per < 0.001;
}
function area(P) { let s = 0; for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length]; s += a[0] * b[1] - a[1] * b[0]; } return s / 2; }
// projected triangle, wound counter-clockwise; remembers which original vertex each corner is
function ccw(T) { const r = area(T) < 0 ? [T[0], T[2], T[1]] : [T[0], T[1], T[2]]; r.flip = area(T) < 0; return r; }
// keep the part of poly on the left of a->b
function clip(poly, a, b) {
  const out = [], dx = b[0] - a[0], dy = b[1] - a[1];
  for (let i = 0; i < poly.length; i++) {
    const p = poly[i], q = poly[(i + 1) % poly.length];
    const sp = dx * (p[1] - a[1]) - dy * (p[0] - a[0]);
    const sq = dx * (q[1] - a[1]) - dy * (q[0] - a[0]);
    if (sp >= 0) out.push(p);
    if ((sp >= 0) !== (sq >= 0)) { const t = sp / (sp - sq); out.push([p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t]); }
  }
  return out;
}
function bary(T, p) {
  const [a, b, c] = T;
  const v0x = b[0] - a[0], v0y = b[1] - a[1], v1x = c[0] - a[0], v1y = c[1] - a[1], v2x = p[0] - a[0], v2y = p[1] - a[1];
  const den = v0x * v1y - v1x * v0y;
  const v = (v2x * v1y - v1x * v2y) / den, w = (v0x * v2y - v2x * v0y) / den;
  return [1 - v - w, v, w];
}
