// Collision world: vertical prisms with a convex (solid) or arbitrary (floor)
// footprint in XZ.  Solids block sideways movement; floors only hold you up.
// A uniform grid keeps the per-frame queries cheap.
import { pointInPoly } from './util.js';

export class CollisionWorld {
  constructor(cell = 6) {
    this.cell = cell; this.grid = new Map(); this.all = []; this.stamp = 0;
  }
  add(pts, y0, y1, kind = 'solid', extra = {}) {
    if (kind === 'solid') {
      // make CCW (positive area in x/z) so outward normal = (ez, -ex)
      let a = 0;
      for (let i = 0; i < pts.length; i++) { const p = pts[i], q = pts[(i + 1) % pts.length]; a += p[0] * q[1] - q[0] * p[1]; }
      if (a < 0) pts = pts.slice().reverse();
    }
    const c = { pts, y0, y1, floor: kind === 'floor', holes: extra.holes || null, enabled: true, tag: extra.tag || null, dyn: !!extra.dyn, _s: 0 };
    let minX = 1e9, maxX = -1e9, minZ = 1e9, maxZ = -1e9;
    for (const [x, z] of pts) { minX = Math.min(minX, x); maxX = Math.max(maxX, x); minZ = Math.min(minZ, z); maxZ = Math.max(maxZ, z); }
    Object.assign(c, { minX, maxX, minZ, maxZ });
    if (!c.floor) {
      c.n = [];
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i], q = pts[(i + 1) % pts.length];
        const ex = q[0] - p[0], ez = q[1] - p[1], l = Math.hypot(ex, ez) || 1;
        c.n.push([ez / l, -ex / l]);
      }
    }
    const s = this.cell;
    for (let gx = Math.floor(minX / s); gx <= Math.floor(maxX / s); gx++)
      for (let gz = Math.floor(minZ / s); gz <= Math.floor(maxZ / s); gz++) {
        const k = gx * 73856 + gz;
        let b = this.grid.get(k); if (!b) { b = []; this.grid.set(k, b); }
        b.push(c);
      }
    this.all.push(c);
    return c;
  }
  query(x, z, r, out) {
    out.length = 0;
    const s = this.cell, st = ++this.stamp;
    for (let gx = Math.floor((x - r) / s); gx <= Math.floor((x + r) / s); gx++)
      for (let gz = Math.floor((z - r) / s); gz <= Math.floor((z + r) / s); gz++) {
        const b = this.grid.get(gx * 73856 + gz);
        if (!b) continue;
        for (const c of b) {
          if (c._s === st || !c.enabled) continue;
          c._s = st;
          if (x + r < c.minX || x - r > c.maxX || z + r < c.minZ || z - r > c.maxZ) continue;
          out.push(c);
        }
      }
    return out;
  }
  contains(c, x, z) {
    if (x < c.minX || x > c.maxX || z < c.minZ || z > c.maxZ) return false;
    if (!pointInPoly(c.pts, x, z)) return false;
    if (c.holes) for (const h of c.holes) if (pointInPoly(h, x, z)) return false;
    return true;
  }
  // push a circle out of a convex solid; returns [dx,dz] or null
  push(c, x, z, r) {
    const P = c.pts, N = c.n;
    let maxD = -1e9, mi = 0;
    for (let i = 0; i < P.length; i++) {
      const d = (x - P[i][0]) * N[i][0] + (z - P[i][1]) * N[i][1];
      if (d > maxD) { maxD = d; mi = i; }
    }
    if (maxD >= r) return null;
    if (maxD <= 0) return [N[mi][0] * (r - maxD), N[mi][1] * (r - maxD)];
    // outside but close: exact closest point on the boundary
    let best = 1e9, bx = 0, bz = 0;
    for (let i = 0; i < P.length; i++) {
      const p = P[i], q = P[(i + 1) % P.length];
      const ex = q[0] - p[0], ez = q[1] - p[1];
      let t = ((x - p[0]) * ex + (z - p[1]) * ez) / (ex * ex + ez * ez || 1);
      t = Math.max(0, Math.min(1, t));
      const cx = p[0] + ex * t, cz = p[1] + ez * t, d = (x - cx) ** 2 + (z - cz) ** 2;
      if (d < best) { best = d; bx = cx; bz = cz; }
    }
    const d = Math.sqrt(best);
    if (d >= r || d < 1e-6) return null;
    return [(x - bx) / d * (r - d), (z - bz) / d * (r - d)];
  }
}

// ---------------------------------------------------------------- player body
export class PlayerBody {
  constructor(world) {
    this.world = world;
    this.pos = { x: 0, y: 6, z: 0 };
    this.vel = { x: 0, y: 0, z: 0 };
    this.radius = 0.34; this.height = 1.78; this.step = 0.55;
    this.grounded = false; this.groundCol = null; this.groundY = 0;
    this.safe = { x: 0, y: 6, z: 0 };
    this._c = [];
    this.fly = false;
    this.swim = false; this.swimUp = 0; // in the sea: buoyant, slow, still collides
  }
  groundAt(x, z, feet) {
    const cs = this.world.query(x, z, 0.01, this._c);
    let best = -1e9, bc = null;
    for (const c of cs) {
      if (c.y1 > feet + this.step + 0.01 || c.y1 <= best) continue;
      if (this.world.contains(c, x, z)) { best = c.y1; bc = c; }
    }
    return [best, bc];
  }
  ceilingAt(x, z, feet) {
    const cs = this.world.query(x, z, 0.01, this._c);
    let best = 1e9;
    for (const c of cs) {
      if (c.y0 <= feet + this.step) continue;
      if (c.y0 < best && this.world.contains(c, x, z)) best = c.y0;
    }
    return best;
  }
  move(dt, wishX, wishZ, jump) {
    const p = this.pos, v = this.vel;
    if (this.fly) {
      p.x += wishX * dt; p.z += wishZ * dt; p.y += v.y * dt;
      return;
    }
    // ride moving floors (the lift)
    if (this.grounded && this.groundCol && this.groundCol.dyn) {
      const gy = this.groundCol.y1;
      if (Math.abs(gy - p.y) < 0.6) p.y = gy;
    }
    // horizontal accel
    const accel = this.swim ? 4 : (this.grounded ? 14 : 3);
    v.x += (wishX - v.x) * Math.min(1, accel * dt);
    v.z += (wishZ - v.z) * Math.min(1, accel * dt);
    if (this.swim) { v.y += (this.swimUp * 2.6 - v.y) * Math.min(1, 3 * dt); }
    else {
      if (jump && this.grounded) { v.y = 5.2; this.grounded = false; }
      v.y -= 19.6 * dt;
    }
    if (v.y < -40) v.y = -40;

    // horizontal move + resolve (2 sub steps)
    const steps = 2;
    for (let s = 0; s < steps; s++) {
      p.x += v.x * dt / steps; p.z += v.z * dt / steps;
      for (let it = 0; it < 3; it++) {
        const cs = this.world.query(p.x, p.z, this.radius + 0.1, this._c);
        let moved = false;
        for (const c of cs) {
          if (c.floor) continue;
          if (c.y1 <= p.y + this.step || c.y0 >= p.y + this.height) continue;
          const d = this.world.push(c, p.x, p.z, this.radius);
          if (d) {
            p.x += d[0]; p.z += d[1]; moved = true;
            // remove velocity into the wall
            const l = Math.hypot(d[0], d[1]) || 1, nx = d[0] / l, nz = d[1] / l;
            const vn = v.x * nx + v.z * nz;
            if (vn < 0) { v.x -= vn * nx; v.z -= vn * nz; }
          }
        }
        if (!moved) break;
      }
    }
    // vertical
    const [gy, gc] = this.groundAt(p.x, p.z, p.y);
    const ny = p.y + v.y * dt;
    if (v.y <= 0 && ny <= gy + 0.001) {
      p.y = gy; v.y = 0; this.grounded = true; this.groundCol = gc; this.groundY = gy;
    } else if (v.y <= 0 && this.grounded && gy > p.y - this.step && gy <= p.y) {
      // stick to stairs / ramps when walking down
      p.y = gy; v.y = 0; this.groundCol = gc; this.groundY = gy;
    } else {
      p.y = ny; this.grounded = false; this.groundCol = null;
      if (v.y > 0) {
        const ceil = this.ceilingAt(p.x, p.z, p.y - v.y * dt);
        if (p.y + this.height > ceil) { p.y = ceil - this.height; v.y = 0; }
      }
    }
    if (this.grounded && gc && !gc.dyn && gy > 1) { this.safe.x = p.x; this.safe.y = p.y; this.safe.z = p.z; }
  }
}
