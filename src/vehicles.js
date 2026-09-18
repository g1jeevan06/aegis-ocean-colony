// Everything that moves: VTOL traffic, patrol drones, sensor buoys, sea
// drones, turbines, holograms, the specimens, the lab robot, the uplink dish.
import * as THREE from 'three';
import { rng, TAU } from './util.js';
import { makeCreature } from './props.js';
import { MAX_GLOWS } from './ocean.js';

const shadowAll = (g) => g.traverse(o => { if (o.isMesh) { o.castShadow = !o.material.transparent; o.receiveShadow = true; } });
// small props: main view only (layer 2) - no shadow or reflection passes
const lightweight = (g) => g.traverse(o => { o.layers.set(2); if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; } });

// ---------------------------------------------------------------- VTOL aircraft
export function makeVTOL(M) {
  const g = new THREE.Group();
  const prof = [[0, -5.4], [0.55, -5.1], [1.15, -4.2], [1.5, -2.6], [1.58, -0.4], [1.45, 1.8], [1.1, 3.6], [0.55, 5.0], [0.15, 5.5], [0, 5.55]];
  const lathe = new THREE.LatheGeometry(prof.map(([r, y]) => new THREE.Vector2(r, y)), 28);
  lathe.rotateX(-Math.PI / 2); // tail at +Z, nose at -Z ... flipped below
  lathe.scale(1, 0.78, 1);
  const body = new THREE.Mesh(lathe, M.whiteSmooth); g.add(body);
  const belly = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.35, 7.5), M.darkSmooth); belly.position.set(0, -1.05, 0); g.add(belly);
  const canopy = new THREE.Mesh(new THREE.SphereGeometry(1.0, 20, 12, 0, TAU, 0, Math.PI / 2), M.glassTint);
  canopy.scale.set(1.05, 0.7, 2.1); canopy.position.set(0, 0.55, -2.6); g.add(canopy);
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.08, 7.2), M.cyan); stripe.position.set(1.28, -0.2, 0); g.add(stripe);
  const stripe2 = stripe.clone(); stripe2.position.x = -1.28; g.add(stripe2);
  const wing = new THREE.Mesh(new THREE.BoxGeometry(8.8, 0.22, 2.0), M.whiteSmooth); wing.position.set(0, -0.1, 0.2); g.add(wing);
  const wing2 = new THREE.Mesh(new THREE.BoxGeometry(7.4, 0.2, 1.4), M.darkSmooth); wing2.position.set(0, 0.2, 3.6); g.add(wing2);
  const rotors = [];
  for (const [x, z] of [[-4.7, 0.2], [4.7, 0.2], [-4.0, 3.6], [4.0, 3.6]]) {
    const duct = new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.24, 10, 32), M.whiteSmooth); duct.rotation.x = Math.PI / 2; duct.position.set(x, 0, z); g.add(duct);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.05, 0.04, 6, 32), M.cyan); ring.rotation.x = Math.PI / 2; ring.position.set(x, -0.18, z); g.add(ring);
    const hub = new THREE.Group(); hub.position.set(x, 0, z); g.add(hub);
    for (let i = 0; i < 4; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.03, 0.18), M.darkSmooth); b.rotation.y = i * Math.PI / 4; hub.add(b); }
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.2, 12), M.metal); hub.add(cap);
    rotors.push(hub);
  }
  for (const s of [-1, 1]) {
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.7, 1.4), M.whiteSmooth);
    fin.position.set(s * 1.0, 1.0, 4.4); fin.rotation.z = s * 0.35; fin.rotation.x = 0.35; g.add(fin);
  }
  const nl = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), M.red); nl.position.set(-5.95, -0.1, 0.2); g.add(nl);
  const nr = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), M.green); nr.position.set(5.95, -0.1, 0.2); g.add(nr);
  const strobe = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), M.light); strobe.position.set(0, 0.9, 5.0); g.add(strobe);
  const engine = new THREE.Mesh(new THREE.CircleGeometry(0.45, 20), M.cyan); engine.position.set(0, 0, 5.56); g.add(engine);
  shadowAll(g);
  g.userData = { rotors, strobe };
  return g;
}

export function makeDrone(M, beamMat) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.22, 0.7), M.whiteSmooth); g.add(body);
  const top = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 8, 0, TAU, 0, Math.PI / 2), M.darkSmooth); top.position.y = 0.1; top.scale.y = 0.5; g.add(top);
  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 8), M.cyan); eye.position.set(0, -0.05, -0.36); g.add(eye);
  const rotors = [];
  for (const [x, z] of [[-0.55, -0.55], [0.55, -0.55], [-0.55, 0.55], [0.55, 0.55]]) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.05, 0.75), M.darkSmooth); arm.position.set(x / 2, 0, z / 2); arm.rotation.y = Math.atan2(x, z); g.add(arm);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.03, 6, 20), M.cyanSoft); ring.rotation.x = Math.PI / 2; ring.position.set(x, 0.03, z); g.add(ring);
    const r = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.01, 0.05), M.darkSmooth); r.position.set(x, 0.06, z); g.add(r); rotors.push(r);
  }
  const beam = new THREE.Mesh(new THREE.ConeGeometry(1.6, 7, 20, 1, true), beamMat);
  beam.geometry.translate(0, -3.5, 0); beam.rotation.x = -0.5; g.add(beam);
  shadowAll(g); beam.castShadow = false;
  g.userData = { rotors, beam };
  return g;
}

// big quad-rotor cargo drone (the reference's hovering transports)
function makeQuad(M) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(1.1, 3.0, 6, 16), M.whiteSmooth); body.rotation.x = Math.PI / 2; body.scale.set(1.2, 1, 0.75); g.add(body);
  const canopy = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 10, 0, TAU, 0, Math.PI / 2), M.glassTint); canopy.scale.set(1.0, 0.6, 1.3); canopy.position.set(0, 0.55, -1.2); g.add(canopy);
  const belly = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.5, 2.6), M.darkSmooth); belly.position.y = -0.8; g.add(belly);
  const light = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.05, 2.2), M.cyan); light.position.y = -1.06; g.add(light);
  const rotors = [];
  for (const [x, z] of [[-3.2, -2.4], [3.2, -2.4], [-3.2, 2.4], [3.2, 2.4]]) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.25, Math.hypot(x, z)), M.dark); arm.position.set(x / 2, 0.1, z / 2); arm.rotation.y = Math.atan2(x, z); g.add(arm);
    const pod = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 0.8, 12), M.whiteSmooth); pod.position.set(x, 0.1, z); g.add(pod);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.35, 0.06, 6, 28), M.dark); ring.rotation.x = Math.PI / 2; ring.position.set(x, 0.55, z); g.add(ring);
    const hub = new THREE.Group(); hub.position.set(x, 0.55, z); g.add(hub);
    for (let i = 0; i < 2; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.03, 0.22), M.darkSmooth); b.rotation.y = i * Math.PI / 2; hub.add(b); }
    const disc = new THREE.Mesh(new THREE.CircleGeometry(1.3, 24), new THREE.MeshBasicMaterial({ color: 0x223038, transparent: true, opacity: 0.25, depthWrite: false })); disc.rotation.x = -Math.PI / 2; hub.add(disc);
    const nav = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), x < 0 ? M.red : M.green); nav.position.set(x * 1.12, 0.1, z); g.add(nav);
    rotors.push(hub);
  }
  const crate = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.1, 2.2), M.orangeGloss); crate.position.y = -1.9; g.add(crate);
  shadowAll(g);
  g.userData = { rotors };
  return g;
}

function makeBuoy(M, R) {
  const g = new THREE.Group();
  const f = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.5, 1.2, 16), R() < 0.5 ? M.yellow : M.whiteSmooth); f.position.y = 0.1; g.add(f);
  const band = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.72, 0.12, 16), M.orangeGloss); band.position.y = 0.45; g.add(band);
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 1.8, 6), M.metal); mast.position.y = 1.5; g.add(mast);
  const panel = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.03, 0.4), M.screenOff); panel.position.set(0, 1.2, 0); panel.rotation.x = 0.4; g.add(panel);
  const light = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), M.teal); light.position.y = 2.45; g.add(light);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.035, 6, 24), M.teal); ring.rotation.x = Math.PI / 2; ring.position.y = -0.1; g.add(ring);
  shadowAll(g);
  g.userData.light = light;
  return g;
}

function makeSeaDrone(M) {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 12), M.darkSmooth); hull.scale.set(1.3, 0.35, 2.1); g.add(hull);
  const deck = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 12, 0, TAU, 0, Math.PI / 2), M.whiteSmooth); deck.scale.set(1.1, 0.35, 1.8); deck.position.y = 0.05; g.add(deck);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.05, 6, 30), M.teal); ring.rotation.x = Math.PI / 2; ring.scale.set(1.25, 1.95, 1); ring.position.y = -0.05; g.add(ring);
  const sensor = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.8, 8), M.metal); sensor.position.set(0, 0.6, 0.6); g.add(sensor);
  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), M.cyan); eye.position.set(0, 1.05, 0.6); g.add(eye);
  shadowAll(g);
  return g;
}

function makeBoat(M) {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(new THREE.CapsuleGeometry(1.6, 9, 8, 16), M.whiteSmooth); hull.rotation.x = Math.PI / 2; hull.scale.set(1, 1, 0.55); hull.position.y = 0.5; g.add(hull);
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(3.25, 0.1, 11), M.darkSmooth); stripe.position.y = 0.55; g.add(stripe);
  const cab = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.3, 4), M.whiteSmooth); cab.position.set(0, 1.7, -0.5); g.add(cab);
  const win = new THREE.Mesh(new THREE.BoxGeometry(2.45, 0.5, 3.6), M.glassTint); win.position.set(0, 1.9, -0.5); g.add(win);
  const led = new THREE.Mesh(new THREE.BoxGeometry(2.46, 0.04, 3.9), M.cyan); led.position.set(0, 1.07, -0.5); g.add(led);
  shadowAll(g);
  return g;
}

function makeSub(M) {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(new THREE.CapsuleGeometry(1.1, 2.6, 8, 20), M.yellow); hull.rotation.x = Math.PI / 2; g.add(hull);
  const port = new THREE.Mesh(new THREE.SphereGeometry(0.85, 20, 12, 0, TAU, 0, Math.PI / 2), M.glassTint); port.rotation.x = -Math.PI / 2; port.position.z = -2.1; g.add(port);
  for (const s of [-1, 1]) { const t = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 1.0, 12), M.darkSmooth); t.rotation.x = Math.PI / 2; t.position.set(s * 1.25, -0.4, 1.3); g.add(t); }
  const light = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 6), M.light); light.position.set(0, -0.8, -1.6); g.add(light);
  const top = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.5, 1.4), M.whiteSmooth); top.position.set(0, 1.2, 0); g.add(top);
  shadowAll(g);
  return g;
}

function makeTurbine(M, t) {
  const g = new THREE.Group();
  g.position.copy(t.p);
  const rot = new THREE.Group(); g.add(rot);
  if (t.vertical) {
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, t.h, 8), M.metal); mast.position.y = t.h / 2; g.add(mast);
    for (let i = 0; i < t.blades; i++) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.08, t.h * 0.8, 0.5), M.whiteSmooth);
      const a = i / t.blades * TAU; b.position.set(Math.sin(a) * t.r, t.h * 0.5, Math.cos(a) * t.r); b.rotation.set(0, a, 0.25); rot.add(b);
      for (const y of [0.2, 0.8]) { const s = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, t.r), M.metal); s.position.set(Math.sin(a) * t.r / 2, t.h * y, Math.cos(a) * t.r / 2); s.rotation.y = a; rot.add(s); }
    }
    const cap = new THREE.Mesh(new THREE.TorusGeometry(t.r, 0.04, 6, 30), M.cyan); cap.rotation.x = Math.PI / 2; cap.position.y = t.h * 0.9; rot.add(cap);
  } else {
    g.rotation.y = t.yaw || 0;
    const nac = new THREE.Mesh(new THREE.CapsuleGeometry(1.6, 6, 6, 12), M.whiteSmooth); nac.rotation.x = Math.PI / 2; nac.position.z = 1.5; g.add(nac);
    rot.position.z = -2.2;
    const hub = new THREE.Mesh(new THREE.SphereGeometry(1.4, 12, 10), M.whiteSmooth); rot.add(hub);
    for (let i = 0; i < 3; i++) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(1.4, t.r, 0.3), M.whiteSmooth);
      b.geometry.translate(0, t.r / 2, 0); b.scale.x = 0.9;
      b.rotation.z = i / 3 * TAU; rot.add(b);
    }
    const red = new THREE.Mesh(new THREE.SphereGeometry(0.4, 8, 6), M.red); red.position.set(0, 1.8, 3); g.add(red);
  }
  shadowAll(g);
  g.userData = { rot, speed: t.speed, vertical: !!t.vertical };
  return g;
}

function makeHolo(M, kind, s) {
  const g = new THREE.Group();
  const mat = new THREE.LineBasicMaterial({ color: new THREE.Color(0.35, 2.4, 3.0), transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false });
  const add = (geo) => { const l = new THREE.LineSegments(geo, mat); g.add(l); return l; };
  if (kind === 'colony') {
    const ring = (a, y, n = 8) => { const pts = []; for (let i = 0; i < n; i++) { const f0 = (i + 0.5) * TAU / n, f1 = (i + 1.5) * TAU / n, R = a / Math.cos(Math.PI / n); pts.push(new THREE.Vector3(Math.sin(f0) * R, y, Math.cos(f0) * R), new THREE.Vector3(Math.sin(f1) * R, y, Math.cos(f1) * R)); } return new THREE.BufferGeometry().setFromPoints(pts); };
    for (const [a, y] of [[56, 0], [42, 6], [42, 0], [34, 12], [34, 6], [22, 0], [24, 12]]) add(ring(a, y)).scale.setScalar(s);
    const dome = new THREE.WireframeGeometry(new THREE.SphereGeometry(25, 16, 6, 0, TAU, 0, Math.PI / 2));
    const d = add(dome); d.scale.set(s, s * 0.62, s); d.position.y = 13 * s;
    for (const k of [0, 2, 4, 6]) { const a = k * Math.PI / 4; const pts = [new THREE.Vector3(Math.sin(a) * 56, 0, Math.cos(a) * 56), new THREE.Vector3(Math.sin(a) * 100, 0, Math.cos(a) * 100)]; add(new THREE.BufferGeometry().setFromPoints(pts)).scale.setScalar(s); }
  } else {
    const sph = add(new THREE.WireframeGeometry(new THREE.SphereGeometry(s, 18, 12))); void sph;
    const ring = add(new THREE.EdgesGeometry(new THREE.TorusGeometry(s * 1.4, 0.001, 2, 64))); ring.rotation.x = 1.2;
    g.userData.ring = ring;
  }
  const cone = new THREE.Mesh(new THREE.CylinderGeometry(kind === 'colony' ? 1.3 : 0.8, 0.3, 1.2, 24, 1, true), M.fxCyanBeam);
  cone.position.y = kind === 'colony' ? 0.5 : 0.3; g.add(cone);
  g.traverse(o => o.layers.set(1));
  return g;
}

// ---------------------------------------------------------------- dish on the roof
function makeDish(M) {
  const g = new THREE.Group();
  const yoke = new THREE.Group(); g.add(yoke);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.9, 1.2, 20), M.darkSmooth); base.position.y = 0.6; yoke.add(base);
  for (const s of [-1, 1]) { const arm = new THREE.Mesh(new THREE.BoxGeometry(0.25, 2.4, 0.5), M.whiteSmooth); arm.position.set(s * 2.0, 1.9, 0); yoke.add(arm); }
  const tilt = new THREE.Group(); tilt.position.y = 2.8; yoke.add(tilt);
  const dm = M.whiteSmooth.clone(); dm.side = THREE.DoubleSide;
  const dish = new THREE.Mesh(new THREE.SphereGeometry(3.6, 36, 12, 0, TAU, 0, 0.9), dm);
  dish.rotation.x = Math.PI; dish.position.y = 3.6; tilt.add(dish);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(3.6 * Math.sin(0.9), 0.06, 6, 48), M.cyan); rim.rotation.x = Math.PI / 2; rim.position.y = 3.6 - 3.6 * Math.cos(0.9); tilt.add(rim);
  const ax = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.3, 0.3), M.metal); tilt.add(ax);
  for (let i = 0; i < 3; i++) { const a = i / 3 * TAU; const st = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 3.2, 6), M.metal); st.position.set(Math.sin(a) * 1.3, 1.9, Math.cos(a) * 1.3); st.lookAt(0, 3.6, 0); st.rotateX(Math.PI / 2); tilt.add(st); }
  const feed = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 0.6, 12), M.darkSmooth); feed.position.y = 3.3; tilt.add(feed);
  const tip = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), M.cyan); tip.position.y = 3.65; tilt.add(tip);
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 2.5, 400, 16, 1, true), M.fxCyanBeam.clone());
  beam.geometry.translate(0, 200, 0); beam.material.opacity = 0; tilt.add(beam);
  shadowAll(g); beam.castShadow = false;
  g.userData = { yoke, tilt, beam };
  return g;
}

function makeRobotArm(M) {
  const g = new THREE.Group();
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.14, 20), M.darkSmooth); base.position.y = 0.07; g.add(base);
  const turret = new THREE.Group(); turret.position.y = 0.14; g.add(turret);
  const t = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.18, 0.2, 16), M.plasticWhite); t.position.y = 0.1; turret.add(t);
  const sh = new THREE.Group(); sh.position.y = 0.22; turret.add(sh);
  const a1 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.62, 0.14), M.plasticWhite); a1.position.y = 0.31; sh.add(a1);
  const el = new THREE.Group(); el.position.y = 0.62; sh.add(el);
  const j = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.18, 14), M.darkSmooth); j.rotation.z = Math.PI / 2; el.add(j);
  const a2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.5, 0.11), M.plasticWhite); a2.position.y = 0.25; el.add(a2);
  const wr = new THREE.Group(); wr.position.y = 0.5; el.add(wr);
  const w = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.12, 12), M.darkSmooth); wr.add(w);
  const led = new THREE.Mesh(new THREE.TorusGeometry(0.065, 0.012, 6, 16), M.cyan); led.rotation.x = Math.PI / 2; wr.add(led);
  for (const s of [-1, 1]) { const f = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.12, 0.04), M.metal); f.position.set(s * 0.04, 0.1, 0); wr.add(f); }
  shadowAll(g);
  g.traverse(o => o.layers.set(1));
  g.userData = { turret, sh, el, wr };
  return g;
}

// ================================================================ AMBIENT LIFE
export function createLife(scene, M, T, ctx, ocean) {
  const R = rng(1234);
  const life = { vtols: [], drones: [], buoys: [], sea: [], turbines: [], holos: [], creatures: [], blink: [], misc: [] };

  // ---- VTOL traffic
  const paths = [
    (t) => { const a = t * 0.075; return new THREE.Vector3(Math.sin(a) * 260, 72 + Math.sin(a * 3) * 8, Math.cos(a) * 260); },
    (t) => { const a = t * 0.11 + 2; const s = Math.sin(a), c = Math.cos(a); return new THREE.Vector3(130 * s / (1 + c * c) + 40, 42 + Math.sin(a * 2) * 6, 170 * s * c / (1 + c * c) - 20); },
    (t) => { const a = -t * 0.06 + 1; return new THREE.Vector3(Math.sin(a) * 420 + 60, 115 + Math.sin(a * 2) * 12, Math.cos(a) * 300 - 40); },
    (t) => { const a = t * 0.09 + 4; return new THREE.Vector3(Math.sin(a) * 170 - 30, 30 + Math.sin(a * 4) * 4, Math.cos(a) * 120 + 170); },
  ];
  for (let i = 0; i < paths.length; i++) {
    const v = makeVTOL(M); v.scale.setScalar(i === 2 ? 1.3 : 1); scene.add(v);
    life.vtols.push({ g: v, path: paths[i], off: i * 17, bank: 0 });
  }
  // quad-rotor cargo drones cruising between the rigs
  life.quads = [];
  for (let i = 0; i < 5; i++) {
    const q = makeQuad(M); q.scale.setScalar(1.3); scene.add(q);
    life.quads.push({ g: q, r: 120 + i * 45, y: 38 + (i % 3) * 16, sp: (0.05 + i * 0.012) * (i % 2 ? -1 : 1), ph: i * 1.7, cx: (i - 2) * 40, cz: (i % 2) * 60 - 30 });
  }
  // speedboat with a foaming wake
  {
    const b = makeBoat(M); b.scale.setScalar(0.55); scene.add(b);
    const N = 60, pos = new Float32Array(N * 2 * 3), col = new Float32Array(N * 2 * 4);
    const idx = []; for (let i = 0; i < N - 1; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.BufferAttribute(col, 4)); geo.setIndex(idx);
    const mat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, side: THREE.DoubleSide });
    const wake = new THREE.Mesh(geo, mat); wake.frustumCulled = false; scene.add(wake);
    life.boat = { g: b, wake, pos, col, hist: [], N };
  }
  // parked VTOL on the landing pad
  if (ctx.marks.parked) {
    const v = makeVTOL(M); v.position.copy(ctx.marks.parked).setY(6 + 1.35); v.rotation.y = ctx.parkedYaw || 0; scene.add(v);
    for (let i = 0; i < 4; i++) { const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 1.2, 8), M.metal); leg.position.set(i < 2 ? -1.1 : 1.1, -1.0, i % 2 ? 2.4 : -2.4); v.add(leg); }
    life.parked = { g: v, t: 0, state: 'idle', start: v.position.clone() };
  }
  // ---- patrol drones
  for (let i = 0; i < 12; i++) {
    const d = makeDrone(M, M.fxCyanBeam); lightweight(d); scene.add(d);
    life.drones.push({ g: d, r: 36 + R() * 50, y: 16 + R() * 26, sp: (0.08 + R() * 0.12) * (R() < 0.5 ? 1 : -1), ph: R() * TAU, wob: R() * TAU });
  }
  // ---- sensor buoys + sea drones (their glows light the water)
  let gi = 0;
  for (let i = 0; i < 24; i++) {
    const a = i / 24 * TAU + R() * 0.2, d = 78 + (i % 3) * 40 + R() * 30;
    const b = makeBuoy(M, R); lightweight(b); b.position.set(Math.sin(a) * d, 0, Math.cos(a) * d); scene.add(b);
    life.buoys.push({ g: b, ph: R() * TAU, glow: gi++ });
  }
  for (let i = 0; i < 8; i++) {
    const s = makeSeaDrone(M); lightweight(s); scene.add(s);
    life.sea.push({ g: s, r: 70 + R() * 110, sp: (0.03 + R() * 0.03) * (i % 2 ? 1 : -1), ph: R() * TAU, glow: gi++ });
  }
  // ---- floating things around the dock
  // the dock boat and the submersible can be driven (drive.js animates them)
  if (ctx.marks.boat) { const b = makeBoat(M); b.position.copy(ctx.marks.boat); b.rotation.y = ctx.marks.boatYaw || 0; scene.add(b); life.boatG = b; }
  if (ctx.marks.sub) { const s = makeSub(M); s.position.copy(ctx.marks.sub); s.rotation.y = ctx.marks.subYaw || 0; scene.add(s); life.subG = s; }
  // ---- turbines
  for (const t of ctx.turbines) { const g = makeTurbine(M, t); scene.add(g); life.turbines.push(g); }
  // ---- holograms
  for (const h of ctx.holoSpots) { const g = makeHolo(M, h.kind, h.s); g.position.copy(h.p); scene.add(g); life.holos.push(g); }
  // ---- specimens
  for (const c of ctx.creatures) { const g = makeCreature(M, c.s, c.seed); g.position.copy(c.p); g.rotation.y = R() * TAU; scene.add(g); life.creatures.push({ g, base: c.p.y, ph: R() * TAU, main: c.main }); }
  // pod bubbles
  {
    const n = ctx.pods.length * 40, pos = new Float32Array(n * 3), seed = new Float32Array(n);
    ctx.pods.forEach((p, i) => { for (let j = 0; j < 40; j++) { const q = i * 40 + j, a = R() * TAU, r = R() * 0.55; pos[q * 3] = p.x + Math.sin(a) * r; pos[q * 3 + 1] = p.y + 0.6 + R() * 2.1; pos[q * 3 + 2] = p.z + Math.cos(a) * r; seed[q] = p.y; } });
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ size: 0.05, map: T.glow, color: 0x9fe8ff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    const pts = new THREE.Points(geo, mat); pts.layers.set(1); pts.frustumCulled = false; scene.add(pts);
    life.bubbles = { pts, pos, seed, pods: ctx.pods };
  }
  // ---- lab robot arm
  if (ctx.marks.robotArm) { const a = makeRobotArm(M); a.position.copy(ctx.marks.robotArm); scene.add(a); life.arm = a; }
  // ---- cryo gantry carriage
  if (ctx.marks.gantry) {
    const g = new THREE.Group(); g.position.copy(ctx.marks.gantry);
    const car = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.4, 5.6), M.gunmetal); g.add(car);
    const drop = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.2, 8), M.metal); drop.position.y = -1.3; g.add(drop);
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.5, 0.6), M.darkSmooth); head.position.y = -2.5; g.add(head);
    const l = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.03, 6, 20), M.cyan); l.rotation.x = Math.PI / 2; l.position.y = -2.76; g.add(l);
    g.rotation.y = Math.PI * 1.5 * 0 + (ctx.gantryYaw || 0);
    g.traverse(o => { o.layers.set(1); if (o.isMesh) o.castShadow = true; });
    scene.add(g); life.gantry = { g, base: g.position.clone(), dir: new THREE.Vector3(ctx.marks.gantryDir ? 1 : 1, 0, 0) };
  }
  // ---- uplink dish
  if (ctx.marks.dish) { const d = makeDish(M); d.position.copy(ctx.marks.dish); scene.add(d); life.dish = d; d.userData.az = 0; d.userData.el = 0.5; }
  // ---- aviation / beacon blinkers
  const blinkMat = (c) => new THREE.SpriteMaterial({ map: T.glow, color: c, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
  for (const b of ctx.blinkers) {
    const s = new THREE.Sprite(blinkMat(new THREE.Color(b.color).multiplyScalar(2.5)));
    s.position.copy(b.p); s.scale.setScalar(2.2); scene.add(s);
    life.blink.push({ s, period: b.period, ph: R() * 2 });
  }

  const tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  life.update = (t, dt, cam) => {
    // VTOLs follow their paths, nose along velocity, banking into turns
    for (const v of life.vtols) {
      const tt = t + v.off;
      const p = v.path(tt), p2 = v.path(tt + 0.5), p3 = v.path(tt + 1.0);
      v.g.position.copy(p);
      tmp.subVectors(p2, p).normalize();
      tmp2.subVectors(p3, p2).normalize();
      const turn = tmp.x * tmp2.z - tmp.z * tmp2.x;
      v.bank += (THREE.MathUtils.clamp(turn * 18, -0.6, 0.6) - v.bank) * Math.min(1, dt * 2);
      v.g.lookAt(p.clone().sub(tmp));
      v.g.rotateZ(-v.bank);
      for (const r of v.g.userData.rotors) r.rotation.y += dt * 38;
      v.g.userData.strobe.visible = (tt % 1.2) < 0.08;
    }
    if (life.parked) {
      const P = life.parked;
      for (const r of P.g.userData.rotors) r.rotation.y += dt * (P.state === 'idle' ? 4 : 40);
      P.g.userData.strobe.visible = (t % 1.5) < 0.08;
      if (P.state === 'takeoff') {
        P.t += dt;
        const k = P.t;
        P.g.position.set(P.start.x + Math.max(0, k - 4) ** 2 * 1.2, P.start.y + Math.min(k, 6) * 2.2 + Math.max(0, k - 6) * 8, P.start.z - Math.max(0, k - 4) ** 2 * 2.0);
        P.g.rotation.x = -Math.min(0.2, Math.max(0, k - 4) * 0.05);
        if (k > 40) { P.state = 'gone'; P.g.visible = false; }
      }
    }
    // drones orbit and bob, scanning beams sweep
    for (const d of life.drones) {
      const a = d.ph + t * d.sp;
      const x = Math.sin(a) * d.r, z = Math.cos(a) * d.r, y = d.y + Math.sin(t * 0.7 + d.wob) * 1.4;
      d.g.position.set(x, y, z);
      d.g.rotation.set(0, a + (d.sp > 0 ? Math.PI / 2 : -Math.PI / 2) + Math.PI, 0);
      d.g.rotateZ(Math.sin(t + d.wob) * 0.08);
      for (const r of d.g.userData.rotors) r.rotation.y += dt * 60;
      d.g.userData.beam.rotation.y = Math.sin(t * 0.8 + d.wob) * 0.6;
    }
    // buoys bob; glows pulse
    const glows = ocean.glows;
    for (const b of life.buoys) {
      const g = b.g;
      g.position.y = Math.sin(t * 1.1 + b.ph) * 0.18;
      g.rotation.x = Math.sin(t * 0.9 + b.ph) * 0.08; g.rotation.z = Math.cos(t * 0.8 + b.ph) * 0.08;
      const pulse = 0.55 + 0.45 * Math.sin(t * 2 + b.ph);
      g.userData.light.visible = ((t + b.ph) % 2.5) < 0.25;
      if (b.glow < MAX_GLOWS) glows[b.glow].set(g.position.x, 2.6, g.position.z, 0.55 * pulse);
    }
    for (const s of life.sea) {
      const a = s.ph + t * s.sp;
      s.g.position.set(Math.sin(a) * s.r, 0.15 + Math.sin(t * 2 + s.ph) * 0.05, Math.cos(a) * s.r);
      s.g.rotation.y = a + (s.sp > 0 ? Math.PI / 2 : -Math.PI / 2) + Math.PI;
      if (s.glow < MAX_GLOWS) glows[s.glow].set(s.g.position.x, 3.5, s.g.position.z, 0.7);
    }
    for (const m of life.misc) {
      if (m.kind === 'bob') { m.g.position.y = m.base + Math.sin(t * 0.9) * 0.15; m.g.rotation.z = Math.sin(t * 0.7) * 0.03; }
      else { m.g.position.y = m.base.y + Math.sin(t * 0.5) * 0.2; m.g.rotation.y += dt * 0.05; }
    }
    for (const q of life.quads) {
      const a = q.ph + t * q.sp;
      const x = q.cx + Math.sin(a) * q.r, z = q.cz + Math.cos(a) * q.r;
      q.g.position.set(x, q.y + Math.sin(t * 0.4 + q.ph) * 2, z);
      q.g.rotation.set(0.08 * Math.sign(q.sp), a + (q.sp > 0 ? Math.PI / 2 : -Math.PI / 2) + Math.PI, 0);
      for (const r of q.g.userData.rotors) r.rotation.y += dt * 30;
    }
    if (life.boat) {
      const B = life.boat, a = t * 0.045 + 2.2;
      const x = Math.sin(a) * 170 + 40, z = Math.cos(a) * 125 + 30;
      B.g.position.set(x, 0.1 + Math.sin(t * 3) * 0.05, z);
      const dx = Math.cos(a) * 170, dz = -Math.sin(a) * 125;
      B.g.rotation.set(-0.05, Math.atan2(dx, dz) + Math.PI, 0);
      const H = B.hist; H.unshift([x, z]); if (H.length > B.N * 5) H.pop();
      const fx = dx / Math.hypot(dx, dz), fz = dz / Math.hypot(dx, dz);
      for (let i = 0; i < B.N; i++) {
        const p = H[Math.min(i * 5, H.length - 1)] || [x, z];
        const w = 0.8 + i * 0.22, f = Math.max(0, 1 - i / B.N);
        B.pos.set([p[0] - fz * w, 0.12, p[1] + fx * w, p[0] + fz * w, 0.12, p[1] - fx * w], i * 6);
        B.col.set([1, 1, 1, 0.55 * f, 1, 1, 1, 0.55 * f], i * 8);
      }
      B.wake.geometry.attributes.position.needsUpdate = true; B.wake.geometry.attributes.color.needsUpdate = true;
    }
    for (const g of life.turbines) { const u = g.userData; u.rot.rotation[u.vertical ? 'y' : 'z'] += dt * u.speed; }
    for (const h of life.holos) { h.rotation.y += dt * 0.35; if (h.userData.ring) h.userData.ring.rotation.z += dt * 0.8; }
    for (const c of life.creatures) {
      c.g.position.y = c.base + Math.sin(t * 0.6 + c.ph) * 0.06;
      c.g.rotation.y += dt * 0.05;
      const ts = c.g.userData.tentacles;
      for (let i = 0; i < ts.length; i++) ts[i].rotation.set(Math.sin(t * 0.9 + i) * 0.12, 0, Math.cos(t * 0.7 + i) * 0.12);
    }
    if (life.bubbles) {
      const B = life.bubbles, p = B.pos;
      for (let i = 0; i < p.length / 3; i++) {
        p[i * 3 + 1] += dt * (0.25 + (i % 7) * 0.04);
        if (p[i * 3 + 1] > B.seed[i] + 2.7) p[i * 3 + 1] = B.seed[i] + 0.6;
      }
      B.pts.geometry.attributes.position.needsUpdate = true;
    }
    if (life.arm) {
      const u = life.arm.userData;
      u.turret.rotation.y = Math.sin(t * 0.4) * 1.2;
      u.sh.rotation.z = -0.4 + Math.sin(t * 0.7) * 0.35;
      u.el.rotation.z = 1.1 + Math.sin(t * 0.9 + 1) * 0.4;
      u.wr.rotation.y = t * 1.5;
    }
    if (life.gantry) { const G = life.gantry; G.g.position.copy(G.base).addScaledVector(ctx.gantryAxis || tmp.set(1, 0, 0), Math.sin(t * 0.15) * 6); }
    if (life.dish) {
      const d = life.dish.userData;
      const target = ctx.dishActive ? { az: 2.4, el: 0.95 } : { az: Math.sin(t * 0.05) * 1.2, el: 0.5 + Math.sin(t * 0.07) * 0.1 };
      d.az += (target.az - d.az) * Math.min(1, dt * 0.6); d.el += (target.el - d.el) * Math.min(1, dt * 0.6);
      d.yoke.rotation.y = d.az; d.tilt.rotation.x = -d.el;
      d.beam.material.opacity += ((ctx.dishActive ? 0.22 : 0) - d.beam.material.opacity) * Math.min(1, dt);
    }
    for (const b of life.blink) { const on = ((t + b.ph) % b.period) < 0.35; b.s.material.opacity = on ? 1 : 0.08; }
  };
  life.takeoff = () => { if (life.parked && life.parked.state === 'idle') { life.parked.state = 'takeoff'; life.parked.start.copy(life.parked.g.position); } };
  return life;
}
