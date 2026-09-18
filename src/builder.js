// Static geometry builder.  Everything that never moves is transformed into
// world space, given world-space UVs, and merged per (chunk, material) so the
// whole colony renders in a few hundred draw calls.  Colliders are registered
// through the same transform stack.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { flatGeo, slabGeo } from './util.js';
import { removeHiddenFaces } from './dedupe.js';

const _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3();
const UNIT_BOX = new THREE.BoxGeometry(1, 1, 1);
const cache = new Map();
function cached(key, make) { let g = cache.get(key); if (!g) { g = make(); cache.set(key, g); } return g; }

export const G = {
  box: () => UNIT_BOX,
  cyl: (seg = 16, open = false) => cached('cyl' + seg + open, () => new THREE.CylinderGeometry(1, 1, 1, seg, 1, open)),
  cone: (rt, rb, seg = 16, open = false) => cached(`cone${rt}_${rb}_${seg}${open}`, () => new THREE.CylinderGeometry(rt, rb, 1, seg, 1, open)),
  sphere: (w = 16, h = 12) => cached('sph' + w + '_' + h, () => new THREE.SphereGeometry(1, w, h)),
  hemi: (w = 24, h = 10) => cached('hemi' + w + '_' + h, () => new THREE.SphereGeometry(1, w, h, 0, Math.PI * 2, 0, Math.PI / 2)),
  rbox: (w, h, d, r, seg = 2) => cached(`rb${w}_${h}_${d}_${r}_${seg}`, () => new RoundedBoxGeometry(w, h, d, seg, r)),
  torus: (r, t, rs = 8, ts = 32, arc = Math.PI * 2) => cached(`tor${r}_${t}_${rs}_${ts}_${arc}`, () => new THREE.TorusGeometry(r, t, rs, ts, arc)),
  plane: () => cached('plane', () => new THREE.PlaneGeometry(1, 1)),
};

// world-space box-projected UVs
function worldUV(g, scale) {
  const p = g.attributes.position, n = g.attributes.normal;
  let uv = g.attributes.uv;
  if (!uv) { uv = new THREE.BufferAttribute(new Float32Array(p.count * 2), 2); g.setAttribute('uv', uv); }
  const inv = 1 / scale;
  for (let i = 0; i < p.count; i++) {
    const nx = Math.abs(n.getX(i)), ny = Math.abs(n.getY(i)), nz = Math.abs(n.getZ(i));
    let u, v;
    if (ny >= nx && ny >= nz) { u = p.getX(i); v = p.getZ(i); }
    else if (nx >= nz) { u = p.getZ(i); v = p.getY(i); }
    else { u = p.getX(i); v = p.getY(i); }
    uv.setXY(i, u * inv, v * inv);
  }
  uv.needsUpdate = true;
}

export class Builder {
  constructor(world) {
    this.world = world;
    this.stack = [new THREE.Matrix4()];
    this.batches = new Map();
    this.chunk = 'ext';
    this.interior = false;
    this.lights = [];     // light anchors for the pooled point lights
    this.envOverride = null; // image-light scale for the current room (interiors are darker)
    this.variants = new Map();
    this.tris = 0;
    this.seq = 0;
  }
  get M() { return this.stack[this.stack.length - 1]; }
  push(x = 0, y = 0, z = 0, ry = 0) {
    const m = new THREE.Matrix4().makeRotationY(ry); m.setPosition(x, y, z);
    this.stack.push(this.M.clone().multiply(m)); return this;
  }
  pop() { this.stack.pop(); return this; }
  // transform a local point to world
  wp(x, y, z) { return new THREE.Vector3(x, y, z).applyMatrix4(this.M); }
  worldYaw(ry = 0) { const e = new THREE.Euler().setFromRotationMatrix(this.M, 'YXZ'); return e.y + ry; }

  mat(x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
    _e.set(rx, ry, rz, 'YXZ'); _q.setFromEuler(_e); _p.set(x, y, z); _s.set(sx, sy, sz);
    return new THREE.Matrix4().compose(_p, _q, _s).premultiply(this.M);
  }
  add(geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1, opt = {}) {
    return this.addM(geo, mat, this.mat(x, y, z, rx, ry, rz, sx, sy, sz), opt);
  }
  variant(mat, es) {
    if (es === 1 || !mat.isMeshStandardMaterial) return mat;
    const key = mat.uuid + '|' + es;
    let v = this.variants.get(key);
    if (!v) { v = mat.clone(); v.envMapIntensity = (mat.envMapIntensity ?? 1) * es; v.name = mat.name + '_i' + es; this.variants.set(key, v); }
    return v;
  }
  addM(geo, mat, m, opt = {}) {
    const inter = opt.interior !== undefined ? opt.interior : this.interior;
    const es = opt.envScale ?? (inter ? (this.envOverride ?? 0.4) : 1);
    mat = this.variant(mat, es);
    let g = geo.index ? geo.toNonIndexed() : geo.clone();
    for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
    if (!g.attributes.normal) g.computeVertexNormals();
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    g.applyMatrix4(m);
    g.userData.order = this.seq++;
    if (globalThis.__GEO_REC) globalThis.__GEO_REC(g, mat); // tools/geocheck: overlapping-face audit
    const sc = opt.uv !== undefined ? opt.uv : mat.userData.uv;
    if (sc && !opt.keepUV && !mat.userData.keepUV) worldUV(g, sc);
    const chunk = opt.chunk || this.chunk;
    const key = chunk + '|' + mat.uuid;
    let b = this.batches.get(key);
    if (!b) { b = { mat, chunk, geos: [], interior: opt.interior !== undefined ? opt.interior : this.interior }; this.batches.set(key, b); }
    b.geos.push(g);
    this.tris += g.attributes.position.count / 3;
    return g;
  }

  // ----- primitives (x,y,z = centre)
  box(mat, x, y, z, w, h, d, ry = 0, opt = {}) {
    this.add(UNIT_BOX, mat, x, y, z, 0, ry, 0, w, h, d, opt);
    if (opt.col) this.colBox(x, y, z, w, h, d, ry, opt.col === true ? 'solid' : opt.col, opt);
  }
  // box whose base sits at y
  boxB(mat, x, y, z, w, h, d, ry = 0, opt = {}) { this.box(mat, x, y + h / 2, z, w, h, d, ry, opt); }
  // box stretched between two points in XZ at height y..y+h
  wall(mat, x0, z0, x1, z1, y, h, t, opt = {}) {
    const dx = x1 - x0, dz = z1 - z0, l = Math.hypot(dx, dz);
    const ry = Math.atan2(dx, dz);
    this.box(mat, (x0 + x1) / 2, y + h / 2, (z0 + z1) / 2, t, h, l + (opt.extend || 0), ry, opt);
  }
  rbox(mat, x, y, z, w, h, d, r, ry = 0, opt = {}) {
    this.add(G.rbox(w, h, d, r, opt.seg || 2), mat, x, y, z, 0, ry, 0, 1, 1, 1, opt);
    if (opt.col) this.colBox(x, y, z, w, h, d, ry, opt.col === true ? 'solid' : opt.col, opt);
  }
  cyl(mat, x, y, z, r, h, seg = 16, opt = {}) {
    this.add(G.cyl(seg, !!opt.open), mat, x, y, z, opt.rx || 0, opt.ry || 0, opt.rz || 0, r, h, opt.rz2 || r, opt);
    if (opt.col) this.colCyl(x, y - h / 2, z, r, h, opt.colSeg || 10, opt.col === true ? 'solid' : opt.col, opt);
  }
  // horizontal cylinder along local X (rz = PI/2) or along Z
  pipe(mat, x0, y0, z0, x1, y1, z1, r, seg = 10) {
    const a = new THREE.Vector3(x0, y0, z0), b = new THREE.Vector3(x1, y1, z1);
    const d = b.clone().sub(a), l = d.length();
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
    const m = new THREE.Matrix4().compose(a.add(b).multiplyScalar(0.5), q, new THREE.Vector3(r, l, r)).premultiply(this.M);
    this.addM(G.cyl(seg, true), mat, m);
  }
  sphere(mat, x, y, z, r, opt = {}) { this.add(G.sphere(opt.w || 16, opt.h || 12), mat, x, y, z, 0, 0, 0, r * (opt.sx || 1), r * (opt.sy || 1), r * (opt.sz || 1), opt); }
  flat(mat, pts, holes, y, down = false, opt = {}) {
    const g = flatGeo(pts, holes || [], down);
    this.addM(g, mat, this.mat(0, y, 0), opt);
  }
  slab(mat, pts, holes, y0, y1, opt = {}) {
    const g = slabGeo(pts, holes || [], y1 - y0, opt.curveSegs || 12, opt.top !== false);
    this.addM(g, mat, this.mat(0, y0, 0), opt);
    if (opt.col) this.colPoly(pts, y0, y1, opt.col === true ? 'floor' : opt.col, { holes: holes, tag: opt.tag });
  }
  geo(g, mat, x = 0, y = 0, z = 0, ry = 0, s = 1, opt = {}) { this.add(g, mat, x, y, z, 0, ry, 0, s, s, s, opt); }

  // ----- colliders (local coords -> world)
  xz(x, z) { const v = _p.set(x, 0, z).applyMatrix4(this.M); return [v.x, v.z]; }
  yW(y) { return y + this.M.elements[13]; }
  colBox(x, y, z, w, h, d, ry = 0, kind = 'solid', opt = {}) {
    const c = Math.cos(ry), s = Math.sin(ry), hw = w / 2, hd = d / 2;
    const corners = [[-hw, -hd], [hw, -hd], [hw, hd], [-hw, hd]].map(([a, b]) => this.xz(x + a * c + b * s, z - a * s + b * c));
    return this.world.add(corners, this.yW(y - h / 2), this.yW(y + h / 2), kind, opt);
  }
  colBoxB(x, y, z, w, h, d, ry = 0, kind = 'solid', opt = {}) { return this.colBox(x, y + h / 2, z, w, h, d, ry, kind, opt); }
  colCyl(x, y0, z, r, h, seg = 10, kind = 'solid', opt = {}) {
    const pts = [];
    for (let i = 0; i < seg; i++) { const a = i / seg * Math.PI * 2; pts.push(this.xz(x + Math.cos(a) * r, z + Math.sin(a) * r)); }
    return this.world.add(pts, this.yW(y0), this.yW(y0 + h), kind, opt);
  }
  colPoly(pts, y0, y1, kind = 'floor', opt = {}) {
    const P = pts.map(([x, z]) => this.xz(x, z));
    const H = opt.holes ? opt.holes.map(h => h.map(([x, z]) => this.xz(x, z))) : null;
    return this.world.add(P, this.yW(y0), this.yW(y1), kind, { ...opt, holes: H });
  }
  // wall collider between two points
  colWall(x0, z0, x1, z1, y, h, t = 0.3, opt = {}) {
    const dx = x1 - x0, dz = z1 - z0, l = Math.hypot(dx, dz);
    return this.colBox((x0 + x1) / 2, y + h / 2, (z0 + z1) / 2, t, h, l, Math.atan2(dx, dz), 'solid', opt);
  }

  // pooled point light anchor
  light(x, y, z, color = 0xdff4ff, intensity = 30, dist = 14) {
    const p = this.wp(x, y, z);
    this.lights.push({ p, color: new THREE.Color(color), intensity, dist });
  }

  finalize(scene) {
    const meshes = [];
    // cut away faces hidden under other faces (no z-fighting "double faces")
    const pieces = [];
    for (const b of this.batches.values()) {
      const m = b.mat, opaque = !m.transparent && !m.alphaTest && (m.opacity ?? 1) >= 1;
      for (const g of b.geos) pieces.push({ g, opaque, layer: b.interior ? 1 : 0 });
    }
    pieces.sort((a, b) => a.g.userData.order - b.g.userData.order);
    this.dedupe = removeHiddenFaces(pieces);
    for (const b of this.batches.values()) {
      const g = mergeGeometries(b.geos, false);
      for (const x of b.geos) x.dispose();
      if (!g) continue;
      g.computeBoundingSphere(); g.computeBoundingBox();
      const m = new THREE.Mesh(g, b.mat);
      m.castShadow = !b.mat.userData.noShadow;
      m.receiveShadow = !b.mat.userData.noShadow || b.mat.transparent === false;
      m.matrixAutoUpdate = false; m.updateMatrix();
      m.name = b.chunk + ':' + b.mat.name;
      if (b.interior) { m.layers.set(1); }
      scene.add(m);
      meshes.push(m);
    }
    this.batches.clear();
    return meshes;
  }
}
