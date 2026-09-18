// Vehicles the player can take: the VTOL on the landing pad, the speedboat
// at the Marine Dock and the NEREID submersible in the moon pool.
// Third-person: W/S throttle, A/D steer, Space/C climb/dive, Shift boost,
// mouse orbits the camera, E gets out.
import * as THREE from 'three';
import { clamp, damp } from './util.js';
import { SEABED } from './underwater.js';

const SPEC = {
  vtol: { name: 'VTOL-3', max: 38, boost: 70, acc: 12, turn: 1.1, climb: 9, dist: 17, lift: 3.5, radius: 4.5, gear: 1.35 },
  boat: { name: 'speedboat', max: 16, boost: 26, acc: 6, turn: 0.9, climb: 0, dist: 12, lift: 3, radius: 2.4, gear: 0 },
  sub: { name: 'NEREID', max: 5, boost: 8, acc: 2.5, turn: 0.7, climb: 3, dist: 9, lift: 1.5, radius: 1.8, gear: 0 },
};

export class Driving {
  constructor(game, life, ctx) {
    this.game = game; this.life = life; this.ctx = ctx;
    this.cur = null;
    const v = (kind, g) => g && { kind, g, spec: SPEC[kind], heading: g.rotation.y, speed: 0, vy: 0, bank: 0, used: false, idle: g.position.clone() };
    this.list = {
      vtol: life.parked && v('vtol', life.parked.g),
      boat: v('boat', life.boatG),
      sub: v('sub', life.subG),
    };
    this._c = [];
  }
  // boarding points for the interaction system
  boardPoints() {
    const L = this.list, m = this.ctx.marks, out = [];
    if (L.vtol) out.push({ id: 'board_vtol', v: L.vtol, p: () => L.vtol.g.position.clone().setY(L.vtol.g.position.y - L.vtol.spec.gear), r: 6, ok: () => this.life.parked.state === 'idle' });
    if (L.boat) out.push({ id: 'board_boat', v: L.boat, p: () => (L.boat.used ? L.boat.g.position.clone() : m.boatBoard), r: L.boat.used ? 4 : 3, ok: () => true });
    if (L.sub) out.push({ id: 'board_sub', v: L.sub, p: () => (L.sub.used ? L.sub.g.position.clone() : m.subBoard), r: L.sub.used ? 3.5 : 3, ok: () => true });
    return out;
  }
  enter(v) {
    const g = this.game;
    this.cur = v;
    if (v.kind === 'sub' && !v.used) { v.g.position.set(v.g.position.x, -2.5, v.g.position.z); } // lowered off the gantry into the pool
    v.used = true; v.speed = 0; v.vy = 0; v.heading = v.g.rotation.y;
    g.body.swim = false; g.body.fly = false;
    g.yaw = v.heading; g.pitch = -0.18;
    g.audio.blip(660, 0.12); setTimeout(() => g.audio.blip(990, 0.12), 110);
    g.ui.toast(`${v.spec.name}: W/S throttle · A/D steer${v.spec.climb ? ' · Space/C up/down' : ''} · Shift boost · E to get out`, 'ok');
  }
  exit() {
    const v = this.cur, g = this.game, b = g.body;
    if (!v) return;
    this.cur = null;
    // step out beside the vehicle; if that is sea, you swim
    const side = new THREE.Vector3(Math.cos(v.heading), 0, -Math.sin(v.heading)).multiplyScalar(v.spec.radius * 0.7 + 1);
    const p = v.g.position.clone().add(side);
    b.pos.x = p.x; b.pos.z = p.z; b.pos.y = v.kind === 'sub' ? v.g.position.y : v.g.position.y - v.spec.gear + 0.3;
    b.vel.x = b.vel.y = b.vel.z = 0;
    if (v.kind === 'sub') b.swim = true;
    g.eyeY = b.pos.y + 1.62;
    g.audio.blip(880, 0.1);
  }
  // colliders that would hit the vehicle at (x, y, z); pushes it out like the player body
  collide(v, x, z, y) {
    const w = this.game.world, r = v.spec.radius;
    const cs = w.query(x, z, r + 0.2, this._c);
    let dx = 0, dz = 0;
    for (const c of cs) {
      if (c.floor) continue;
      if (c.y1 <= y - 1.2 || c.y0 >= y + 1.5) continue;
      const d = w.push(c, x + dx, z + dz, r);
      if (d) { dx += d[0]; dz += d[1]; }
    }
    return [dx, dz];
  }
  groundBelow(x, z, y) { return this.game.body.groundAt(x, z, y)[0]; }

  update(dt, t, K, blocked, cam) {
    const g = this.game;
    // idle vehicles: boat bobs where it was left
    const B = this.list.boat;
    if (B && B !== this.cur) { const h = g.ocean.heightAt(B.g.position.x, B.g.position.z); B.g.position.y = damp(B.g.position.y, h + 0.1, 3, dt); B.g.rotation.z = Math.sin(t * 0.9) * 0.03; }
    const S = this.list.sub;
    if (S && !S.used) { S.g.position.x = S.idle.x + Math.sin(t * 0.6) * 0.05; }
    const v = this.cur;
    if (!v) return false;
    const s = v.spec, gp = v.g.position;
    const th = blocked ? 0 : ((K.KeyW || K.ArrowUp ? 1 : 0) - (K.KeyS || K.ArrowDown ? 1 : 0));
    const steer = blocked ? 0 : ((K.KeyA || K.ArrowLeft ? 1 : 0) - (K.KeyD || K.ArrowRight ? 1 : 0));
    const boost = K.ShiftLeft || K.ShiftRight;
    const top = boost ? s.boost : s.max;
    v.speed = damp(v.speed, th * (th < 0 ? top * 0.35 : top), th ? s.acc / top * 1.6 : 0.6, dt);
    const turnScale = v.kind === 'vtol' ? 1 : clamp(Math.abs(v.speed) / 4, 0.25, 1);
    v.heading += steer * s.turn * turnScale * dt * (v.speed < -0.1 ? -1 : 1);
    const fx = -Math.sin(v.heading), fz = -Math.cos(v.heading);
    let nx = gp.x + fx * v.speed * dt, nz = gp.z + fz * v.speed * dt, ny = gp.y;
    if (v.kind === 'vtol') {
      const up = blocked ? 0 : (K.Space ? 1 : 0) - (K.KeyC ? 1 : 0);
      v.vy = damp(v.vy, up * s.climb, 3, dt);
      ny = gp.y + v.vy * dt;
      const floor = Math.max(0.6, this.groundBelow(nx, nz, gp.y - s.gear + 0.5)) + s.gear;
      if (ny < floor) { ny = floor; v.vy = Math.max(0, v.vy); }
      ny = Math.min(ny, 400);
      const onGround = ny <= floor + 0.05;
      if (onGround && Math.abs(v.speed) > 6) v.speed = damp(v.speed, 6 * Math.sign(v.speed), 2, dt); // taxi speed on a deck
    } else if (v.kind === 'boat') {
      ny = g.ocean.heightAt(nx, nz) + 0.1;
    } else {
      const up = blocked ? 0 : (K.Space ? 1 : 0) - (K.KeyC ? 1 : 0);
      v.vy = damp(v.vy, up * s.climb, 2, dt);
      ny = clamp(gp.y + v.vy * dt, SEABED + 1.6, g.ocean.heightAt(nx, nz) - 1.4);
    }
    const [dx, dz] = this.collide(v, nx, nz, ny);
    if (dx || dz) { nx += dx; nz += dz; v.speed *= 0.4; if (Math.abs(v.speed) > 3) g.audio.noiseHit(200, 0.3, 0.2, 'lowpass', 0); }
    gp.set(nx, ny, nz);
    // attitude
    v.bank = damp(v.bank, -steer * clamp(Math.abs(v.speed) / s.max, 0, 1) * (v.kind === 'vtol' ? 0.45 : 0.18), 3, dt);
    const pitch = v.kind === 'vtol' ? -clamp(v.speed / s.boost, -0.3, 1) * 0.12 : v.kind === 'boat' ? clamp(v.speed / s.boost, 0, 1) * 0.08 : clamp(v.vy / s.climb, -1, 1) * 0.15;
    v.g.rotation.set(0, 0, 0); v.g.rotation.order = 'YXZ';
    v.g.rotation.y = v.heading; v.g.rotation.x = v.kind === 'boat' ? pitch : -pitch; v.g.rotation.z = v.bank;
    if (v.kind === 'boat') v.g.rotation.z += Math.sin(t * 1.3) * 0.02;
    if (v.kind === 'vtol') for (const r of v.g.userData.rotors) r.rotation.y += dt * (12 + Math.abs(v.speed) + Math.abs(v.vy) * 3);
    // player rides along (zones, minimap and story triggers use the body)
    const b = g.body; b.pos.x = gp.x; b.pos.z = gp.z; b.pos.y = v.kind === 'vtol' ? gp.y - s.gear : gp.y; b.vel.x = b.vel.y = b.vel.z = 0; b.grounded = false;
    // chase camera: the mouse orbits it round the vehicle
    const cp = Math.cos(g.pitch), dist = s.dist;
    const tx = gp.x, ty = gp.y + s.lift, tz = gp.z;
    let cx = tx + Math.sin(g.yaw) * cp * dist, cy = ty - Math.sin(g.pitch) * dist, cz = tz + Math.cos(g.yaw) * cp * dist;
    if (v.kind === 'boat') cy = Math.max(cy, g.ocean.heightAt(cx, cz) + 1.0); // never dip the camera under the waves
    if (v.kind === 'sub') cy = Math.min(cy, g.ocean.heightAt(cx, cz) - 0.6);
    cam.position.set(cx, cy, cz);
    cam.lookAt(tx, ty, tz);
    g.ui.prompt(`<kbd>E</kbd>Get out · ${Math.round(Math.abs(v.speed) * 3.6)} km/h${v.kind !== 'boat' ? ' · alt ' + Math.round(gp.y) + ' m' : ''}`, 'drive');
    return true;
  }
}
