// Small math + layout helpers shared by every module.
import * as THREE from 'three';

export const TAU = Math.PI * 2;
export const T8 = Math.tan(Math.PI / 8);      // half-width / apothem of an octagon side
export const COS8 = Math.cos(Math.PI / 8);
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (t) => t * t * (3 - 2 * t);
export const damp = (a, b, rate, dt) => lerp(a, b, 1 - Math.exp(-rate * dt));

// xorshift PRNG so the colony is identical on every load
export function rng(seed = 1) {
  let s = (seed >>> 0) || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >>> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

// ---------------------------------------------------------------- layout
// The main platform is a regular octagon whose flat sides face the sector
// directions.  Sector k points along angle k*45deg measured from +Z towards +X.
// Local sector frame: u runs along the side (tangent), v outwards (apothem).
export const LV = {
  WATER: 0,
  SVC: 2.0,     // service level floor
  D1: 6.0,      // main deck / level 1 floor
  C1: 11.4,     // level 1 ceiling
  D2: 12.0,     // terrace + level 2 floor
  C2: 17.4,     // level 2 ceiling
  D3: 18.0,     // observation roof
};
export const AP = {
  ATRIUM: 22, COR: 27, RING1: 42, DECK: 56.5, HULL: 54,
  L2IN: 24, L2OUT: 34, DOME: 25,
};

export function sectorAngle(k) { return k * Math.PI / 4; }
export function sectorToWorld(k, u, v) {
  const t = sectorAngle(k), c = Math.cos(t), s = Math.sin(t);
  return [u * c + v * s, -u * s + v * c];
}
export function worldToSector(k, x, z) {
  const t = sectorAngle(k), c = Math.cos(t), s = Math.sin(t);
  return [x * c - z * s, x * s + z * c];
}
export function octApothem(x, z) {
  let m = -1e9;
  for (let k = 0; k < 8; k++) {
    const t = k * Math.PI / 4;
    m = Math.max(m, x * Math.sin(t) + z * Math.cos(t));
  }
  return m;
}
export function sectorOf(x, z) {
  const a = Math.atan2(x, z);
  return ((Math.round(a / (Math.PI / 4)) % 8) + 8) % 8;
}
// octagon vertices (x,z) for apothem a
export function octPts(a, cx = 0, cz = 0) {
  const R = a / COS8, p = [];
  for (let i = 0; i < 8; i++) {
    const f = (i + 0.5) * Math.PI / 4;
    p.push([cx + R * Math.sin(f), cz + R * Math.cos(f)]);
  }
  return p;
}
export function circlePts(r, n, cx = 0, cz = 0, a0 = 0) {
  const p = [];
  for (let i = 0; i < n; i++) {
    const f = a0 + i / n * TAU;
    p.push([cx + r * Math.sin(f), cz + r * Math.cos(f)]);
  }
  return p;
}
export function polyPts(n, r, cx = 0, cz = 0, a0 = 0) { return circlePts(r, n, cx, cz, a0); }

// Build a THREE.Shape from world (x,z) points, for use with flatGeo/slabGeo
function shapeFrom(pts, holes = [], sz = -1) {
  const s = new THREE.Shape(pts.map(([x, z]) => new THREE.Vector2(x, sz * z)));
  for (const h of holes) s.holes.push(new THREE.Path(h.map(([x, z]) => new THREE.Vector2(x, sz * z))));
  return s;
}
// flat horizontal surface at y=0 facing up (or down)
export function flatGeo(pts, holes = [], down = false, curveSegs = 12) {
  if (down) {
    const g = new THREE.ShapeGeometry(shapeFrom(pts, holes, 1), curveSegs);
    g.rotateX(Math.PI / 2);
    return g;
  }
  const g = new THREE.ShapeGeometry(shapeFrom(pts, holes, -1), curveSegs);
  g.rotateX(-Math.PI / 2);
  return g;
}
// extruded slab from y=0 to y=h
export function slabGeo(pts, holes = [], h = 0.5, curveSegs = 12) {
  const g = new THREE.ExtrudeGeometry(shapeFrom(pts, holes), { depth: h, bevelEnabled: false, curveSegments: curveSegs });
  g.rotateX(-Math.PI / 2);
  return g;
}

export function pointInPoly(pts, x, z) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const xi = pts[i][0], zi = pts[i][1], xj = pts[j][0], zj = pts[j][1];
    if (((zi > z) !== (zj > z)) && (x < (xj - xi) * (z - zi) / (zj - zi + 1e-12) + xi)) inside = !inside;
  }
  return inside;
}

export function fmtTime(s) {
  s = Math.floor(s);
  const m = Math.floor(s / 60), r = s % 60;
  return m + ':' + String(r).padStart(2, '0');
}
