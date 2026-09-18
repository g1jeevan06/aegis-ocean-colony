// Gameplay: input, the player, doors, the lift, pickups, objectives, zones,
// the pooled interior lights, audio mixing, title cinematic and photo mode.
import * as THREE from 'three';
import { PlayerBody } from './physics.js';
import { OBJECTIVES, LOGS, ZONES, ROOM_BY_SECTOR } from './data.js';
import { octApothem, sectorOf, worldToSector, sectorToWorld, clamp, damp, fmtTime, TAU, LV } from './util.js';
import { SATS, satRadius } from './satellites.js';
import { elevWorld } from './colony.js';

const INDOOR = new Set(['lobby', 'lounge', 'lab', 'cryo', 'airlock', 'eng', 'quarters', 'mess', 'corridor', 'atrium', 'gallery', 'mc', 'service', 'pump', 'lift']);
const LEVEL_OF = (y) => (y < 5.3 ? -1 : y < 11.5 ? 0 : y < 17.5 ? 1 : 2);
const LEVEL_NAME = { '-1': 'SERVICE LEVEL', 0: 'LEVEL 1 · MAIN DECK', 1: 'LEVEL 2', 2: 'LEVEL 3 · ROOF' };

export class Game {
  constructor(o) {
    Object.assign(this, o);
    this.body = new PlayerBody(this.world);
    this.yaw = 0; this.pitch = 0;
    this.keys = {}; this.mdx = 0; this.mdy = 0;
    this.mode = 'loading';
    this.settings = { q: 2, sens: 1, fov: 72, vol: 0.8, inv: false, fps: false };
    this.loadSettings();
    this.flags = { keycard: false, restored: false, scanned: false, transmitted: false, svcFound: false, pumpFound: false };
    this.logs = new Set();
    this.obj = 0; this.explore = false;
    this.time = 0; this.playTime = 0; this.walked = 0; this.stepAcc = 0;
    this.eyeY = 0; this.bob = 0; this.crouch = 0;
    this.hudOn = true; this.photo = false;
    this.holdT = 0; this.holdId = null;
    this.zoneId = ''; this._zoneAcc = 0; this._mapAcc = 0; this._lightAcc = 0;
    this.camPos = new THREE.Vector3(); this.camTarget = new THREE.Vector3();
    this.buildLightPool();
    this.buildPickups();
    this.buildInteractables();
    this.bindInput();
    this.bindUI();
    this.applySettings();
  }

  // ---------------------------------------------------------------- settings
  loadSettings() { try { const s = JSON.parse(localStorage.getItem('aegis.settings') || 'null'); if (s) Object.assign(this.settings, s); } catch (e) { /* storage unavailable */ } }
  saveSettings() { try { localStorage.setItem('aegis.settings', JSON.stringify(this.settings)); } catch (e) { /* ignore */ } }
  applySettings() {
    const s = this.settings;
    this.camera.fov = s.fov; this.camera.updateProjectionMatrix();
    this.audio.setVolume(s.vol);
    this.ui.el.fps.classList.toggle('hidden', !s.fps);
    this.onQuality && this.onQuality(s.q);
    const set = (id, v) => { const e = document.getElementById(id); if (e.type === 'checkbox') e.checked = v; else e.value = v; };
    set('set-q', s.q); set('set-sens', s.sens); set('set-fov', s.fov); set('set-vol', s.vol); set('set-inv', s.inv); set('set-fps', s.fps);
    document.getElementById('o-sens').textContent = (+s.sens).toFixed(2);
    document.getElementById('o-fov').textContent = s.fov + '°';
    document.getElementById('o-vol').textContent = Math.round(s.vol * 100) + '%';
  }

  // ---------------------------------------------------------------- lights
  buildLightPool() {
    this.pool = [];
    const n = 8;
    for (let i = 0; i < n; i++) {
      const l = new THREE.PointLight(0xffffff, 0, 14, 2);
      l.castShadow = false; this.scene.add(l);
      this.pool.push({ l, a: null, target: 0 });
    }
  }
  updateLights(dt, force) {
    this._lightAcc -= dt;
    const cp = this.camera.position;
    if (this._lightAcc <= 0 || force) {
      this._lightAcc = 0.25;
      const cand = [];
      for (const a of this.anchors) { const d = a.p.distanceToSquared(cp); if (d < 38 * 38) cand.push([d / (a.intensity + 1), a]); }
      cand.sort((x, y) => x[0] - y[0]);
      const pick = cand.slice(0, this.pool.length).map(c => c[1]);
      // keep lights that are still wanted, reassign the rest
      const free = [];
      for (const s of this.pool) { if (s.a && pick.includes(s.a)) pick.splice(pick.indexOf(s.a), 1); else free.push(s); }
      for (const s of free) {
        const a = pick.shift();
        if (a) { s.a = a; s.l.position.copy(a.p); s.l.color.copy(a.color); s.l.distance = a.dist; s.l.intensity = 0; s.target = a.intensity; }
        else { s.a = null; s.target = 0; }
      }
    }
    for (const s of this.pool) s.l.intensity = damp(s.l.intensity, s.target, 4, dt);
  }

  // ---------------------------------------------------------------- pickups
  buildPickups() {
    const M = this.M;
    this.pickups = [];
    const padGeo = new THREE.CylinderGeometry(0.16, 0.2, 0.05, 6);
    const cardGeo = new THREE.BoxGeometry(0.22, 0.3, 0.012);
    const haloMat = new THREE.SpriteMaterial({ map: this.T.glow, color: new THREE.Color(0.3, 1.6, 2.0), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    for (const id of Object.keys(LOGS)) {
      const p = this.ctx.marks[id];
      if (!p) { console.warn('no mark for', id); continue; }
      const g = new THREE.Group(); g.position.copy(p);
      const pad = new THREE.Mesh(padGeo, M.darkSmooth); pad.position.y = 0.025; g.add(pad);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.012, 6, 24), M.cyan); ring.rotation.x = Math.PI / 2; ring.position.y = 0.05; g.add(ring);
      const card = new THREE.Mesh(cardGeo, M.cyanSoft); card.position.y = 0.33; g.add(card);
      const halo = new THREE.Sprite(haloMat); halo.scale.setScalar(0.9); halo.position.y = 0.33; g.add(halo);
      g.traverse(o => o.layers.enable(1));
      this.scene.add(g);
      this.pickups.push({ id, g, card, p: p.clone(), taken: false });
    }
    // keycard
    const kp = this.ctx.marks.keycard;
    const kg = new THREE.Group(); kg.position.copy(kp);
    const kc = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.01, 0.1), M.orangeGloss); kg.add(kc);
    const ks = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.012, 0.02), M.orangeLight); ks.position.set(0, 0.002, 0.02); kg.add(ks);
    const kh = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.T.glow, color: new THREE.Color(2, 0.9, 0.3), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    kh.scale.setScalar(0.5); kh.position.y = 0.05; kg.add(kh);
    this.scene.add(kg); this.keycardMesh = kg;
  }

  // ---------------------------------------------------------------- interactables
  buildInteractables() {
    const m = this.ctx.marks, I = this.inter = [];
    const add = (o) => { I.push(o); return o; };
    for (const pk of this.pickups) add({ id: pk.id, p: pk.p, r: 1.8, label: () => 'Read data log', ok: () => !pk.taken, use: () => this.takeLog(pk) });
    add({ id: 'keycard', p: m.keycard, r: 1.8, label: () => 'Take Level-3 keycard', ok: () => !this.flags.keycard && !this.explore, use: () => this.takeKeycard() });
    add({ id: 'directory', p: m.directory, r: 2.2, label: () => 'Open colony directory', ok: () => true, use: () => this.openMap() });
    add({
      id: 'mcConsole', p: m.mcConsole, r: 2.0, hold: 2.2,
      label: () => this.flags.restored ? 'Systems nominal' : 'Hold to re-sequence command bus',
      ok: () => true, can: () => !this.flags.restored,
      use: () => this.restore(),
    });
    add({
      id: 'specimen', p: m.specimen, r: 2.2, hold: 3.0,
      label: () => this.flags.scanned ? 'Specimen AX-7 · data secured' : (this.flags.restored ? 'Hold to scan specimen AX-7' : 'Pod interface offline — restore Mission Control first'),
      ok: () => true, can: () => this.flags.restored && !this.flags.scanned,
      use: () => this.scan(),
    });
    add({
      id: 'uplink', p: m.uplink, r: 2.2, hold: 3.0,
      label: () => this.flags.transmitted ? 'Uplink complete' : (!this.flags.restored ? 'Uplink offline — restore Mission Control first' : (!this.flags.scanned ? 'No dataset to send — scan specimen AX-7' : 'Hold to transmit AX-7 dataset')),
      ok: () => true, can: () => this.flags.restored && this.flags.scanned && !this.flags.transmitted,
      use: () => this.transmit(),
    });
    for (let i = 0; i < 3; i++) add({ id: 'lift' + i, p: m['liftCall' + i], r: 1.6, label: () => this.elevAt(i) ? 'Lift is here' : 'Call lift', ok: () => true, can: () => !this.elevAt(i), use: () => this.callLift(i) });
    const cryoDoor = this.ctx.doors.find(d => d.id === 'door_r3');
    this.cryoDoor = cryoDoor;
    this.targets = {
      lobby: m.lobby, mcConsole: m.mcConsole, keycard: m.keycard, cryoDoor: cryoDoor ? cryoDoor.pos : m.cryo, specimen: m.specimen, uplink: m.uplink,
    };
  }

  // ---------------------------------------------------------------- input
  bindInput() {
    const cv = this.renderer.domElement;
    addEventListener('keydown', (e) => {
      if (e.repeat && e.code !== 'KeyE') return;
      this.keys[e.code] = true;
      if (e.code === 'Escape' && this.mode === 'title' && this.ui.anyOpen()) { this.ui.closeTop(); return; }
      if (this.mode === 'play' || this.mode === 'end') this.onKey(e);
      if (['Space', 'ArrowUp', 'ArrowDown', 'Tab'].includes(e.code) && this.mode === 'play') e.preventDefault();
    });
    addEventListener('keyup', (e) => { this.keys[e.code] = false; });
    addEventListener('blur', () => { this.keys = {}; });
    addEventListener('mousemove', (e) => {
      if (document.pointerLockElement === cv) { this.mdx += e.movementX; this.mdy += e.movementY; }
    });
    addEventListener('wheel', (e) => { if (this.photo) { this.camera.fov = clamp(this.camera.fov + Math.sign(e.deltaY) * 3, 20, 100); this.camera.updateProjectionMatrix(); } }, { passive: true });
    cv.addEventListener('click', () => { if (this.mode === 'play' && !this.ui.anyOpen()) this.lock(); });
    // drag-to-look fallback when the browser (or an embedding frame) refuses pointer lock
    cv.addEventListener('mousedown', (e) => { if (e.button === 0 || e.button === 2) this.drag = true; });
    addEventListener('mouseup', () => { this.drag = false; });
    addEventListener('mousemove', (e) => { if (this.drag && document.pointerLockElement !== cv && this.mode === 'play' && !this.ui.anyOpen()) { this.mdx += e.movementX; this.mdy += e.movementY; } });
    cv.addEventListener('contextmenu', (e) => e.preventDefault());
    this.ui.el.resume.addEventListener('click', () => { this.ui.hide('resume'); this.lock(); });
    document.addEventListener('pointerlockchange', () => {
      const locked = document.pointerLockElement === cv;
      if (!locked && this.mode === 'play' && !this.ui.anyOpen() && !this._intentUnlock) this.openPause();
      this._intentUnlock = false;
      if (locked) this.ui.hide('resume');
    });
    // touch: left half moves, right half looks, tap right = interact
    this.touch = { move: null, look: null, mx: 0, my: 0 };
    cv.addEventListener('touchstart', (e) => {
      if (this.mode !== 'play') return;
      for (const t of e.changedTouches) {
        if (t.clientX < innerWidth / 2 && !this.touch.move) this.touch.move = { id: t.identifier, x: t.clientX, y: t.clientY };
        else if (!this.touch.look) this.touch.look = { id: t.identifier, x: t.clientX, y: t.clientY, t0: performance.now(), sx: t.clientX, sy: t.clientY };
      }
      e.preventDefault();
    }, { passive: false });
    cv.addEventListener('touchmove', (e) => {
      for (const t of e.changedTouches) {
        if (this.touch.move && t.identifier === this.touch.move.id) { this.touch.mx = clamp((t.clientX - this.touch.move.x) / 60, -1, 1); this.touch.my = clamp((t.clientY - this.touch.move.y) / 60, -1, 1); }
        if (this.touch.look && t.identifier === this.touch.look.id) { this.mdx += (t.clientX - this.touch.look.x) * 2; this.mdy += (t.clientY - this.touch.look.y) * 2; this.touch.look.x = t.clientX; this.touch.look.y = t.clientY; }
      }
      e.preventDefault();
    }, { passive: false });
    cv.addEventListener('touchend', (e) => {
      for (const t of e.changedTouches) {
        if (this.touch.move && t.identifier === this.touch.move.id) { this.touch.move = null; this.touch.mx = this.touch.my = 0; }
        if (this.touch.look && t.identifier === this.touch.look.id) {
          const L = this.touch.look;
          if (performance.now() - L.t0 < 250 && Math.hypot(t.clientX - L.sx, t.clientY - L.sy) < 12) { this.keys.KeyE = true; setTimeout(() => { this.keys.KeyE = false; }, this.holdTarget ? 3200 : 120); this.tapInteract = true; }
          this.touch.look = null;
        }
      }
    });
  }
  lock() { const cv = this.renderer.domElement; if (cv.requestPointerLock && !('ontouchstart' in window && navigator.maxTouchPoints > 0 && !matchMedia('(pointer:fine)').matches)) { try { const r = cv.requestPointerLock(); if (r && r.catch) r.catch(() => {}); } catch (e) { /* ignore */ } } }
  unlock() { if (document.pointerLockElement) { this._intentUnlock = true; document.exitPointerLock(); } }

  onKey(e) {
    const c = e.code;
    if (this.mode === 'end') return;
    if (c === 'Escape') { if (this.ui.anyOpen()) this.ui.closeTop(); else this.openPause(); return; }
    if (this.ui.anyOpen()) { if (c === 'KeyM' && this.ui.isOpen('mapview')) this.ui.closeTop(); if (c === 'KeyJ' && this.ui.isOpen('journal')) this.ui.closeTop(); return; }
    if (c === 'KeyE') this.interact(true);
    if (c === 'KeyM') this.openMap();
    if (c === 'KeyJ') this.openJournal();
    if (c === 'KeyH') { this.hudOn = !this.hudOn; this.ui.el.hud.classList.toggle('hidden', !this.hudOn); }
    if (c === 'KeyP') this.togglePhoto();
    if (c === 'KeyF' && !this.photo) { this.body.fly = !this.body.fly; this.body.vel.y = 0; this.ui.toast(this.body.fly ? 'Fly mode on — Space up · C down · F to land' : 'Fly mode off', ''); }
    if (/^Digit[123]$/.test(c) && this.inLift()) this.sendLift(+c.slice(5) - 1);
  }

  bindUI() {
    const ui = this.ui;
    const on = (id, fn) => document.getElementById(id).addEventListener('click', fn);
    on('btn-start', () => this.start(false));
    on('btn-explore', () => this.start(true));
    on('btn-settings', () => ui.open('settings'));
    on('btn-controls', () => ui.open('controls'));
    document.querySelectorAll('#pause [data-act], #end [data-act]').forEach(b => b.addEventListener('click', () => {
      const a = b.dataset.act;
      if (a === 'resume') { ui.closeAll(); this.lock(); }
      if (a === 'map') this.openMap();
      if (a === 'journal') this.openJournal();
      if (a === 'settings') ui.open('settings');
      if (a === 'controls') ui.open('controls');
      if (a === 'title') { ui.closeAll(); this.toTitle(); }
      if (a === 'continue') { ui.closeAll(); this.mode = 'play'; this.lock(); }
      if (a === 'export') this.onExport && this.onExport();
    }));
    ui.onClose = () => { if (this.mode === 'play' && !ui.anyOpen()) { this.lock(); if (!document.pointerLockElement && !('ontouchstart' in window)) ui.show('resume'); } };
    ui.onMapRedraw = () => this.drawBigMap();
    const s = this.settings;
    const bind = (id, key, conv) => document.getElementById(id).addEventListener('input', (e) => { s[key] = conv(e.target.type === 'checkbox' ? e.target.checked : e.target.value); this.applySettings(); this.saveSettings(); });
    bind('set-q', 'q', Number); bind('set-sens', 'sens', Number); bind('set-fov', 'fov', Number); bind('set-vol', 'vol', Number); bind('set-inv', 'inv', Boolean); bind('set-fps', 'fps', Boolean);
    document.getElementById('set-q').addEventListener('change', (e) => { s.q = +e.target.value; this.applySettings(); this.saveSettings(); });
    addEventListener('resize', () => { if (this.photo) ui.letterbox(true); });
  }

  // ---------------------------------------------------------------- flow
  showTitle() {
    this.mode = 'title';
    this.ui.hide('loading'); this.ui.hide('hud'); this.ui.show('title');
    this.ui.letterbox(false);
    this.ui.el.lbTop.classList.remove('hidden'); this.ui.el.lbBot.classList.remove('hidden');
    this.ui.el.lbTop.style.height = this.ui.el.lbBot.style.height = '7vh';
    this.titleT = 0;
  }
  toTitle() {
    this.unlock();
    if (this.photo) this.togglePhoto();
    this.ui.closeAll();
    this.showTitle();
  }
  start(explore) {
    this.audio.start();
    this.explore = explore;
    const fade = this.ui.el.fade; fade.classList.add('on');
    setTimeout(() => {
      this.ui.hide('title');
      this.ui.el.lbTop.classList.add('hidden'); this.ui.el.lbBot.classList.add('hidden');
      if (this.hudOn) this.ui.show('hud');
      if (!this.started || explore !== this.lastExplore || this.flags.transmitted) this.reset(explore);
      this.leaveTitleFov();
      this.lastExplore = explore;
      this.mode = 'play';
      this.lock();
      fade.classList.remove('on');
      if (!this.started) { this.started = true; this.ui.toast(explore ? 'Free explore — all doors unlocked' : 'Welcome to AEGIS. Click to look around.', 'ok'); }
    }, 800);
  }
  reset(explore) {
    const sp = this.ctx.spawn;
    this.body.pos.x = sp.p.x; this.body.pos.y = sp.p.y; this.body.pos.z = sp.p.z;
    this.body.vel.x = this.body.vel.y = this.body.vel.z = 0; this.body.fly = false;
    this.yaw = sp.yaw; this.pitch = -0.02;
    this.eyeY = sp.p.y + 1.62;
    this.flags = { keycard: false, restored: explore, scanned: false, transmitted: false, svcFound: false, pumpFound: false };
    this.logs = new Set(); for (const p of this.pickups) { p.taken = false; p.g.visible = true; }
    this.keycardMesh.visible = !explore;
    this.obj = explore ? OBJECTIVES.length - 1 : 0;
    this.playTime = 0; this.walked = 0;
    this.screens.state.restored = explore; this.screens.state.cryoOpen = explore; this.screens.state.scanned = false; this.screens.state.transmitted = false;
    this.screens.redrawAll(this.time);
    this.ctx.dishActive = false;
    this.ui.objective(explore ? { text: 'Free explore', hint: 'Every door is open. Press M for the map, P for photo mode.' } : OBJECTIVES[0], true);
  }
  setObjective(i) {
    if (this.explore) return;
    this.obj = i;
    this.ui.objective(OBJECTIVES[i], true);
    this.audio.chord([660, 880, 1320], 0.25);
  }
  openPause() { this.unlock(); this.ui.open('pause'); }
  openMap() {
    this.unlock();
    this.ui.mapLevel = LEVEL_OF(this.body.pos.y); if (this.zoneId && ['landing', 'energy', 'dock', 'comms', 'bridge', 'ocean'].includes(this.zoneId)) this.ui.mapLevel = 9;
    this.ui.syncTabs(); this.ui.open('mapview'); this.drawBigMap();
  }
  drawBigMap() {
    const t = this.objTarget();
    this.ui.bigMap(this.body.pos.x, this.body.pos.z, this.yaw, t, t ? LEVEL_OF(t.y) : 0);
  }
  openJournal() { this.unlock(); this.ui.journal(this.logs, (id) => this.ui.showLog(id)); this.ui.open('journal'); }

  // ---------------------------------------------------------------- actions
  takeLog(pk) {
    pk.taken = true; pk.g.visible = false; this.logs.add(pk.id);
    this.audio.chord([880, 1175], 0.2);
    this.ui.toast(`Data log recovered · ${this.logs.size}/${Object.keys(LOGS).length}`, 'ok');
    this.unlock(); this.ui.showLog(pk.id);
  }
  takeKeycard() {
    this.flags.keycard = true; this.keycardMesh.visible = false;
    this.audio.chord([520, 780, 1040], 0.3);
    this.ui.toast('Level-3 keycard acquired', 'ok');
    if (this.obj <= 2) this.setObjective(this.flags.restored ? 3 : Math.max(this.obj, 1));
  }
  restore() {
    this.flags.restored = true; this.screens.state.restored = true; this.screens.redrawAll(this.time);
    this.audio.chord([440, 660, 880, 1320], 0.4);
    this.ui.toast('Command bus re-sequenced · systems online', 'ok');
    this.ui.toast('Cryo bay remains sealed — Level-3 clearance required', 'warn');
    if (this.obj <= 1) this.setObjective(this.flags.keycard ? 3 : 2);
  }
  scan() {
    this.flags.scanned = true; this.screens.state.scanned = true;
    this.audio.chord([392, 523, 784, 1046], 0.5);
    this.ui.toast('Specimen AX-7 scanned · 2.4 PB dataset secured', 'ok');
    if (!this.explore) this.setObjective(5);
  }
  transmit() {
    this.flags.transmitted = true; this.screens.state.transmitted = true;
    this.ctx.dishActive = true;
    this.life.takeoff();
    this.audio.chord([330, 494, 659, 988, 1318], 0.7);
    this.ui.toast('Uplink locked · transmitting to orbital relay…', 'ok');
    if (!this.explore) {
      this.setObjective(6);
      setTimeout(() => this.showEnd(), 6500);
    }
  }
  showEnd() {
    this.mode = 'end'; this.unlock();
    const st = document.getElementById('end-stats');
    st.innerHTML = `<div><b>${fmtTime(this.playTime)}</b>Mission time</div><div><b>${this.logs.size}/${Object.keys(LOGS).length}</b>Data logs</div><div><b>${(this.flags.svcFound ? 1 : 0) + (this.flags.pumpFound ? 1 : 0)}/2</b>Hidden areas</div><div><b>${(this.walked / 1000).toFixed(2)} km</b>Walked</div>`;
    this.ui.open('end');
  }

  // ---------------------------------------------------------------- lift
  elevAt(i) { const E = this.ctx.elevator; return !E.moving && Math.abs(E.y - E.levels[i]) < 0.02; }
  callLift(i) { const E = this.ctx.elevator; if (E.target !== E.levels[i]) { E.target = E.levels[i]; this.audio.blip(990, 0.1); this.ui.toast('Lift called', ''); } }
  sendLift(i) { const E = this.ctx.elevator; if (Math.abs(E.target - E.levels[i]) > 0.01 || !this.elevAt(i)) { E.target = E.levels[i]; this.audio.blip(1180, 0.1); } }
  inLift() {
    const E = this.ctx.elevator, p = this.body.pos;
    return Math.hypot(p.x - E.center.x, p.z - E.center.z) < E.r - 0.15 && p.y > E.y - 0.6 && p.y < E.y + 2.0;
  }
  updateLift(dt) {
    const E = this.ctx.elevator;
    const d = E.target - E.y;
    const was = E.moving;
    if (Math.abs(d) > 0.005) {
      if (!E.moving) { E.moving = true; E.wait = 0.9; }
      if (E.wait > 0) { E.wait -= dt; }
      else {
        E.v = clamp((E.v || 0) + Math.sign(d) * dt * 2.5, -2.8, 2.8);
        const maxV = Math.sqrt(2 * 2.5 * Math.abs(d)) + 0.05;
        E.v = clamp(E.v, -maxV, maxV);
        let step = E.v * dt;
        if (Math.abs(step) > Math.abs(d)) step = d;
        E.y += step;
      }
    } else if (E.moving) { E.y = E.target; E.moving = false; E.v = 0; this.audio.blip(1320, 0.12); this.audio.door(); }
    void was;
    E.car.y1 = E.y; E.car.y0 = E.y - 0.3;
    E.carMesh.position.y = E.y;
    E.gates.forEach((g, i) => { g.enabled = !(!E.moving && Math.abs(E.y - E.levels[i]) < 0.02); });
    this.liftDir = E.moving && E.wait <= 0 ? Math.sign(d) : 0;
  }

  // ---------------------------------------------------------------- doors
  doorUnlocked(d, p) {
    if (!d.lock) return true;
    // restricted doors always let you out
    if (p && (p.x - d.pos.x) * Math.sin(d.yaw) + (p.z - d.pos.z) * Math.cos(d.yaw) > 0.2) return true;
    if (this.explore) return true;
    if (d.lock === 'cryo') return this.flags.restored && this.flags.keycard;
    return true;
  }
  updateDoors(dt) {
    const p = this.body.pos;
    this.lockedNear = null;
    for (const d of this.ctx.doors) {
      const dist = Math.hypot(p.x - d.pos.x, p.z - d.pos.z), dy = p.y - d.pos.y;
      const near = dist < 3.3 && dy > -1 && dy < 3;
      const ok = this.doorUnlocked(d, p);
      d.target = near && ok ? 1 : 0;
      if (near && !ok && dist < 2.6) this.lockedNear = d;
      if (d.target > d.open + 0.5 && !d.snd) { this.audio.door(); d.snd = true; }
      if (d.target < 0.5) d.snd = false;
      d.open = damp(d.open, d.target, 5, dt);
      const u = d.mesh.userData;
      u.L.position.x = -d.open * u.w * 0.48; u.R.position.x = d.open * u.w * 0.48;
      d.col.enabled = d.open < 0.8;
    }
    if (this.cryoDoor) this.screens.state.cryoOpen = this.doorUnlocked(this.cryoDoor);
  }

  // ---------------------------------------------------------------- zones
  zoneAt(x, y, z) {
    const E = elevWorld();
    if (Math.hypot(x - E.x, z - E.z) < 1.5 && y > 5.5) return 'lift';
    for (const s of SATS) {
      const [cx, cz] = sectorToWorld(s.k, 0, s.v);
      if (Math.hypot(x - cx, z - cz) < satRadius(s) + 1) return s.id;
    }
    const a = octApothem(x, z), k = sectorOf(x, z);
    if (a > 56.3) {
      const [u, v] = worldToSector(k, x, z);
      if (k % 2 === 0 && Math.abs(u) < 3 && v < 100) return 'bridge';
      if (k % 2 === 1 && v < 68.5 && Math.abs(u) < 10) return 'obs';
      return 'ocean';
    }
    if (y < 5.3) return Math.hypot(x, z) < 10.5 ? 'pump' : 'service';
    if (y < 11.5) {
      if (a < 22) return 'atrium';
      if (a < 27) return 'corridor';
      if (a < 42) return ROOM_BY_SECTOR[k];
      return (k === 2 || k === 6) && a < 45 && y > 6.4 ? 'stairs' : 'promenade';
    }
    if (y < 17.5) {
      if (a < 24) return 'atrium';
      if (a < 34) return k === 4 ? 'mc' : 'gallery';
      return a < 42.3 ? 'terrace' : 'stairs';
    }
    return a < 34.3 ? 'roof' : 'stairs';
  }
  updateZone(dt) {
    this._zoneAcc -= dt;
    if (this._zoneAcc > 0) return;
    this._zoneAcc = 0.2;
    const p = this.body.pos;
    const z = this.zoneAt(p.x, p.y + 0.1, p.z);
    if (z !== this.zoneId) {
      this.zoneId = z;
      const lv = LEVEL_OF(p.y);
      const sat = ['landing', 'energy', 'dock', 'comms', 'bridge', 'ocean', 'obs'].includes(z);
      this.ui.zone(ZONES[z] || '', sat ? 'EXTERIOR · SEA LEVEL +6 M' : LEVEL_NAME[lv], `LOGS ${this.logs.size}/${Object.keys(LOGS).length}`);
      // story triggers
      if (!this.explore) {
        if (this.obj === 0 && INDOOR.has(z) && z !== 'service' && z !== 'pump') this.setObjective(this.flags.restored ? 2 : 1);
        if (z === 'cryo' && this.obj <= 3 && this.obj >= 1) {
          if (this.flags.restored) this.setObjective(4);
        }
      }
      if (z === 'cryo' && this.body.pos.y < 11 && !this.flags.svcFound && !this.doorUnlocked(this.cryoDoor)) { this.flags.svcFound = true; this.ui.toast('Hidden area found · cryo sublevel passage', 'ok'); }
      if (z === 'pump' && !this.flags.pumpFound) { this.flags.pumpFound = true; this.ui.toast('Hidden area found · Hydro Core', 'ok'); }
      if (z === 'service' && !this._svcToast) { this._svcToast = true; this.ui.toast('Service ring · maintenance access', 'warn'); }
    } else {
      this.ui.el.zoneC.textContent = `LOGS ${this.logs.size}/${Object.keys(LOGS).length}`;
    }
  }

  objTarget() {
    if (this.explore) return null;
    const o = OBJECTIVES[this.obj];
    if (!o || !o.target) return null;
    return this.targets[o.target] || null;
  }

  // ---------------------------------------------------------------- interaction
  interact(pressed) {
    const t = this.focus;
    if (!t) { if (this.lockedNear && pressed) this.audio.denied(); return; }
    if (t.hold) return; // handled in update
    if (t.can && !t.can()) { this.audio.denied(); return; }
    t.use();
  }
  updateInteract(dt) {
    const p = this.body.pos, cam = this.camera;
    const fwd = new THREE.Vector3(); cam.getWorldDirection(fwd);
    let best = null, bs = 1e9;
    for (const it of this.inter) {
      if (!it.p || !it.ok()) continue;
      const dx = it.p.x - p.x, dz = it.p.z - p.z, dy = it.p.y - p.y;
      if (dy < -1.2 || dy > 2.2) continue;
      const d = Math.hypot(dx, dz);
      if (d > it.r) continue;
      const dot = d < 0.6 ? 1 : (dx * fwd.x + dz * fwd.z) / (d * Math.hypot(fwd.x, fwd.z) + 1e-6);
      if (dot < 0.2) continue;
      const score = d * (1.6 - dot);
      if (score < bs) { bs = score; best = it; }
    }
    this.focus = best;
    this.holdTarget = best && best.hold;
    // hold interactions
    if (best && best.hold && this.keys.KeyE && (!best.can || best.can())) {
      if (this.holdId !== best.id) { this.holdId = best.id; this.holdT = 0; }
      this.holdT += dt;
      this.ui.hold(this.holdT / best.hold);
      if (this.holdT >= best.hold) { this.holdT = 0; this.holdId = null; this.ui.hold(0); best.use(); this.keys.KeyE = false; }
    } else { if (this.holdT > 0) this.ui.hold(0); this.holdT = 0; this.holdId = null; }
    if (this.tapInteract && best && !best.hold) { this.tapInteract = false; this.interact(true); } else this.tapInteract = false;
    // prompt
    const inLift = this.inLift();
    this.ui.liftPick(inLift && !this.ctx.elevator.moving, this.ctx.elevator.levels.indexOf(this.ctx.elevator.target));
    if (inLift) { this.ui.prompt(''); return; }
    if (best) {
      const can = !best.can || best.can();
      const lab = best.label();
      this.ui.prompt(can ? `<kbd>E</kbd>${best.hold ? '' : ''}${lab}` : lab, !can && !/nominal|complete|secured|here/.test(lab));
    } else if (this.lockedNear) {
      const d = this.lockedNear;
      const msg = !this.flags.restored ? 'SEALED · command bus offline — restore Mission Control' : 'RESTRICTED · Level-3 clearance required';
      this.ui.prompt(msg, true);
    } else this.ui.prompt('');
  }

  // ---------------------------------------------------------------- photo mode
  togglePhoto() {
    this.photo = !this.photo;
    this.ui.letterbox(this.photo);
    this.ui.el.photoHint.classList.toggle('hidden', !this.photo);
    this.ui.el.hud.classList.toggle('hidden', this.photo || !this.hudOn);
    if (this.photo) { this.photoPos = this.camera.position.clone(); this.photoYaw = this.yaw; this.photoPitch = this.pitch; this.savedFov = this.camera.fov; setTimeout(() => this.ui.el.photoHint.classList.add('hidden'), 4000); }
    else { this.camera.fov = this.settings.fov; this.camera.updateProjectionMatrix(); this.yaw = this.photoYaw; this.pitch = this.photoPitch; }
  }

  // ---------------------------------------------------------------- per-frame
  update(dt, t) {
    this.time = t;
    if (this.mode === 'title' || this.mode === 'loading') { this.updateTitle(dt, t); return; }
    const s = this.settings;
    const sens = 0.0022 * s.sens;
    this.yaw -= this.mdx * sens;
    this.pitch -= this.mdy * sens * (s.inv ? -1 : 1);
    this.pitch = clamp(this.pitch, -1.5, 1.5);
    this.mdx = this.mdy = 0;
    const K = this.keys, blocked = this.ui.anyOpen() || this.mode === 'end';
    let fx = 0, fz = 0;
    if (!blocked) {
      if (K.KeyW || K.ArrowUp) fz += 1; if (K.KeyS || K.ArrowDown) fz -= 1;
      if (K.KeyD || K.ArrowRight) fx += 1; if (K.KeyA || K.ArrowLeft) fx -= 1;
      fx += this.touch.mx; fz -= this.touch.my;
    }
    const l = Math.hypot(fx, fz); if (l > 1) { fx /= l; fz /= l; }
    const sy = Math.sin(this.yaw), cy = Math.cos(this.yaw);
    const cam = this.camera;

    if (this.photo) {
      const sp = (K.ShiftLeft || K.ShiftRight ? 18 : 6) * dt;
      const fwd = new THREE.Vector3(-sy * Math.cos(this.pitch), Math.sin(this.pitch), -cy * Math.cos(this.pitch));
      const right = new THREE.Vector3(cy, 0, -sy);
      cam.position.addScaledVector(fwd, fz * sp).addScaledVector(right, fx * sp);
      if (K.KeyE || K.Space) cam.position.y += sp; if (K.KeyQ || K.KeyC) cam.position.y -= sp;
      cam.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
      this.common(dt, t);
      return;
    }

    this.playTime += dt;
    const b = this.body;
    const sprint = (K.ShiftLeft || K.ShiftRight) && !b.fly;
    this.crouch = damp(this.crouch, K.KeyC && !b.fly ? 1 : 0, 10, dt);
    const speed = b.fly ? (sprint || K.ShiftLeft ? 30 : 12) : (sprint ? 7.2 : 4.2) * (1 - this.crouch * 0.5);
    // forward = (-sin yaw, -cos yaw); right = (cos yaw, -sin yaw)
    const mvx = (-sy * fz + cy * fx) * speed, mvz = (-cy * fz - sy * fx) * speed;
    if (b.fly) {
      const up = (K.Space ? 1 : 0) - (K.KeyC ? 1 : 0);
      const pf = Math.sin(this.pitch) * fz;
      b.vel.y = (up + pf) * speed;
      b.move(dt, mvx * Math.cos(this.pitch), mvz * Math.cos(this.pitch), false);
    } else {
      const ox = b.pos.x, oz = b.pos.z;
      b.move(dt, blocked ? 0 : mvx, blocked ? 0 : mvz, !blocked && K.Space);
      const moved = Math.hypot(b.pos.x - ox, b.pos.z - oz);
      if (b.grounded) {
        this.walked += moved; this.stepAcc += moved;
        this.bob += moved * 1.9;
        if (this.stepAcc > (sprint ? 0.85 : 0.62)) { this.stepAcc = 0; const z = this.zoneId; this.audio.step(z === 'service' || z === 'bridge' || z === 'stairs' ? 'metal' : (z === 'atrium' ? 'soft' : 'hard')); }
      }
      // fell into the sea: back to the last safe spot
      if (b.pos.y < -2) {
        b.pos.x = b.safe.x; b.pos.y = b.safe.y + 0.2; b.pos.z = b.safe.z; b.vel.x = b.vel.y = b.vel.z = 0;
        this.ui.toast('Man overboard! A drone fished you out.', 'warn');
      }
    }
    // camera
    const eyeTarget = b.pos.y + (b.fly ? 1.62 : 1.62 - this.crouch * 0.55);
    this.eyeY = Math.abs(eyeTarget - this.eyeY) > 1.2 ? eyeTarget : damp(this.eyeY, eyeTarget, 18, dt);
    const bobA = b.grounded && !b.fly ? Math.sin(this.bob) * 0.035 * Math.min(1, Math.hypot(b.vel.x, b.vel.z) / 4) : 0;
    cam.position.set(b.pos.x, this.eyeY + bobA, b.pos.z);
    cam.rotation.set(this.pitch, this.yaw, Math.sin(this.bob * 0.5) * 0.004, 'YXZ');

    this.updateLift(dt);
    this.updateDoors(dt);
    this.updateZone(dt);
    if (!blocked) this.updateInteract(dt); else { this.ui.prompt(''); this.ui.hold(0); }

    // pickups idle animation
    for (const pk of this.pickups) if (!pk.taken) { pk.card.rotation.y = t * 1.4; pk.card.position.y = 0.33 + Math.sin(t * 2 + pk.p.x) * 0.03; }
    if (this.keycardMesh.visible) this.keycardMesh.rotation.y = t * 0.8;

    // HUD
    this._mapAcc -= dt;
    if (this._mapAcc <= 0) {
      this._mapAcc = 1 / 20;
      const tg = this.objTarget();
      let bearing = null;
      if (tg) {
        const dx = tg.x - b.pos.x, dz = tg.z - b.pos.z;
        bearing = (Math.atan2(dx, -dz) * 180 / Math.PI + 360) % 360;
        const dy = tg.y - b.pos.y;
        this.ui.objDistance(`${Math.round(Math.hypot(dx, dz))} m${dy > 3 ? '  ▲ above' : dy < -3 ? '  ▼ below' : ''}`);
      } else this.ui.objDistance('');
      this.ui.compass(this.yaw, bearing);
      this.ui.minimap(b.pos.x, b.pos.z, this.yaw, LEVEL_OF(b.pos.y), tg);
      if (this.ui.isOpen('mapview')) this.drawBigMap();
    }
    this.common(dt, t);
  }

  common(dt, t) {
    this.updateLights(dt);
    // audio mix: outdoor vs indoor, nearest aircraft
    const indoor = INDOOR.has(this.zoneId) ? 1 : 0;
    let air = 0;
    for (const v of this.life.vtols) { const d = v.g.position.distanceTo(this.camera.position); air = Math.max(air, clamp(1 - d / 160, 0, 1)); }
    if (this.life.parked && this.life.parked.state === 'takeoff') air = Math.max(air, clamp(1 - this.life.parked.g.position.distanceTo(this.camera.position) / 200, 0, 1));
    this.audio.mix(1 - indoor * 0.85, indoor, air * (indoor ? 0.2 : 1), this.liftDir || 0, dt);
  }

  // cinematic orbit behind the title screen
  updateTitle(dt, t) {
    this.titleT = (this.titleT || 0) + dt;
    const T = this.titleT;
    // high aerial three-quarter view, slowly orbiting
    const a = -2.35 + T * 0.018;
    const R = 185 + Math.sin(T * 0.045) * 25;
    const H = 88 + Math.sin(T * 0.06 + 0.8) * 14;
    const cam = this.camera;
    cam.position.set(Math.sin(a) * R, H, Math.cos(a) * R);
    // aim left of the colony so it sits in the right two-thirds, clear of the title text
    const cx = Math.sin(a + 0.9) * 8, cz = Math.cos(a + 0.9) * 8;
    const dx = cx - cam.position.x, dz = cz - cam.position.z, dl = Math.hypot(dx, dz);
    const off = innerWidth > 900 ? 0.36 * dl * (innerWidth / innerHeight) / 1.78 : 0;
    this.camTarget.set(cx + dz / dl * off, 2 + Math.sin(T * 0.05) * 3, cz - dx / dl * off);
    cam.lookAt(this.camTarget);
    if (cam.fov !== 50) { cam.fov = 50; cam.updateProjectionMatrix(); }
    this.zoneId = 'ocean';
    this.updateLights(dt, false);
    this.audio.mix(1, 0, 0, 0, dt);
  }
  leaveTitleFov() { this.camera.fov = this.settings.fov; this.camera.updateProjectionMatrix(); }
}
