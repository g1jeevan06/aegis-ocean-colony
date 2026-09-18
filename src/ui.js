// DOM HUD: objective, compass, zone readout, minimap, full map, journal,
// prompts, toasts and the menu sheets.
import { octPts, circlePts, sectorToWorld, T8, TAU } from './util.js';
import { SATS, satOutline } from './satellites.js';
import { LOGS } from './data.js';
import { SPEAKERS } from './story.js';
import { ELEV, SVC_STAIR } from './colony.js';

const $ = (id) => document.getElementById(id);
const CY = '#4ff2ff', CYD = 'rgba(79,242,255,0.35)', CYF = 'rgba(79,242,255,0.07)', WH = '#e8f6ff', AMB = '#ffb347', RED = '#ff5a4a';

const ROOMS_L1 = ['LOBBY', 'CREW LOUNGE', 'RESEARCH LAB', 'CRYO LAB', 'DOCK AIRLOCK', 'ENGINEERING', 'QUARTERS', 'MESS HALL'];

export class UI {
  constructor() {
    this.el = {
      loading: $('loading'), bar: $('load-bar'), status: $('load-status'), title: $('title'), hud: $('hud'),
      objT: $('obj-t'), objH: $('obj-h'), objD: $('obj-d'), obj: $('obj'), zoneN: $('zone-n'), zoneL: $('zone-l'), zoneC: $('zone-c'),
      prompt: $('prompt'), toasts: $('toasts'), hold: $('hold'), holdArc: $('hold-arc'), fps: $('fps'), lifepick: $('lifepick'),
      compass: $('compass'), minimap: $('minimap'), mapcanvas: $('mapcanvas'), resume: $('resume'), fade: $('fade'),
      lbTop: $('lb-top'), lbBot: $('lb-bot'), photoHint: $('photo-hint'),
    };
    this.cg = this.el.compass.getContext('2d');
    this.mg = this.el.minimap.getContext('2d');
    this.fg = this.el.mapcanvas.getContext('2d');
    this.mapLevel = 0;
    this.stack = [];
    this._lastPrompt = '';
    document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => this.closeTop()));
    document.querySelectorAll('#map-tabs button').forEach(b => b.addEventListener('click', () => { this.mapLevel = +b.dataset.l; this.syncTabs(); this.onMapRedraw && this.onMapRedraw(); }));
  }
  progress(f, msg) { this.el.bar.style.width = (f * 100).toFixed(1) + '%'; if (msg) this.el.status.textContent = msg; }
  show(id) { $(id).classList.remove('hidden'); }
  hide(id) { $(id).classList.add('hidden'); }
  isOpen(id) { return !$(id).classList.contains('hidden'); }
  open(id) {
    if (this.stack.includes(id)) return;
    this.stack.push(id); this.show(id);
  }
  closeTop() {
    const id = this.stack.pop(); if (id) this.hide(id);
    this.onClose && this.onClose(id);
  }
  closeAll() { while (this.stack.length) this.hide(this.stack.pop()); }
  anyOpen() { return this.stack.length > 0; }
  syncTabs() { document.querySelectorAll('#map-tabs button').forEach(b => b.classList.toggle('on', +b.dataset.l === this.mapLevel)); }

  objective(o, flash) {
    this.el.objT.textContent = o ? o.text : '';
    this.el.objH.textContent = o ? (o.hint || '') : '';
    this.el.obj.classList.toggle('hidden', !o);
    if (flash) { this.el.obj.classList.remove('flash'); void this.el.obj.offsetWidth; this.el.obj.classList.add('flash'); }
  }
  objDistance(txt) { this.el.objD.textContent = txt; }
  zone(name, level, extra) { this.el.zoneN.textContent = name; this.el.zoneL.textContent = level; this.el.zoneC.textContent = extra; }
  prompt(html, locked) {
    if (!html) { if (this._lastPrompt) { this.el.prompt.classList.add('hidden'); this._lastPrompt = ''; } return; }
    if (html !== this._lastPrompt) { this.el.prompt.innerHTML = html; this._lastPrompt = html; }
    this.el.prompt.classList.remove('hidden');
    this.el.prompt.classList.toggle('locked', !!locked);
    this.el.prompt.classList.toggle('drive', locked === 'drive');
  }
  hold(f) {
    if (f <= 0) { this.el.hold.classList.add('hidden'); return; }
    this.el.hold.classList.remove('hidden');
    this.el.holdArc.setAttribute('stroke-dashoffset', (163.4 * (1 - f)).toFixed(1));
  }
  liftPick(show, cur) {
    const L = this.el.lifepick;
    if (!show) { L.classList.add('hidden'); return; }
    L.classList.remove('hidden');
    const names = ['1 · Lobby', '2 · Gallery / Mission Control', '3 · Observation Roof'];
    const html = names.map((n, i) => `<div class="${i === cur ? 'cur' : ''}"><kbd>${i + 1}</kbd>${n.slice(4)}</div>`).join('');
    if (L._h !== html) { L.innerHTML = html; L._h = html; }
  }
  toast(msg, cls = '') {
    const d = document.createElement('div'); d.className = 'toast ' + cls; d.textContent = msg;
    this.el.toasts.appendChild(d); setTimeout(() => d.remove(), 4100);
    while (this.el.toasts.children.length > 4) this.el.toasts.firstChild.remove();
  }

  // ---------------------------------------------------------------- compass
  compass(yaw, marker) {
    const g = this.cg, w = 1040, h = 68;
    g.clearRect(0, 0, w, h);
    const grd = g.createLinearGradient(0, 0, w, 0);
    grd.addColorStop(0, 'rgba(4,16,24,0)'); grd.addColorStop(0.2, 'rgba(4,16,24,0.55)'); grd.addColorStop(0.8, 'rgba(4,16,24,0.55)'); grd.addColorStop(1, 'rgba(4,16,24,0)');
    g.fillStyle = grd; g.fillRect(0, 10, w, 40);
    // heading in degrees, 0 = north (-Z), clockwise
    const head = ((-yaw * 180 / Math.PI) % 360 + 360) % 360;
    const pxPerDeg = 5.2;
    g.textAlign = 'center'; g.textBaseline = 'middle';
    for (let d = -100; d <= 100; d += 5) {
      const ang = Math.round((head + d) / 5) * 5, x = w / 2 + (ang - head) * pxPerDeg;
      if (x < 20 || x > w - 20) continue;
      const a = ((ang % 360) + 360) % 360;
      const fade = 1 - Math.abs(x - w / 2) / (w / 2);
      g.globalAlpha = Math.max(0, fade);
      if (a % 45 === 0) {
        const lab = { 0: 'N', 45: 'NE', 90: 'E', 135: 'SE', 180: 'S', 225: 'SW', 270: 'W', 315: 'NW' }[a];
        g.fillStyle = a % 90 === 0 ? WH : CY; g.font = `${a % 90 === 0 ? 600 : 400} 22px "Exo 2", sans-serif`;
        g.fillText(lab, x, 30);
      } else if (a % 15 === 0) { g.fillStyle = CYD; g.fillRect(x - 1, 22, 2, 16); }
      else { g.fillStyle = 'rgba(79,242,255,0.2)'; g.fillRect(x - 1, 26, 2, 8); }
    }
    g.globalAlpha = 1;
    g.fillStyle = CY; g.beginPath(); g.moveTo(w / 2 - 7, 6); g.lineTo(w / 2 + 7, 6); g.lineTo(w / 2, 14); g.fill();
    if (marker !== null && marker !== undefined) {
      let d = ((marker - head + 540) % 360) - 180;
      const off = Math.max(-96, Math.min(96, d));
      const x = w / 2 + off * pxPerDeg;
      g.fillStyle = AMB; g.beginPath(); g.moveTo(x, 44); g.lineTo(x - 8, 58); g.lineTo(x + 8, 58); g.fill();
      if (Math.abs(d) > 96) { g.font = '600 18px sans-serif'; g.fillText(d > 0 ? '›' : '‹', x + (d > 0 ? 16 : -16), 51); }
    }
  }

  // ---------------------------------------------------------------- plan drawing shared by minimap + map
  drawPlan(g, level, tf, opts = {}) {
    const P = (x, z) => tf(x, z);
    const poly = (pts, stroke, fill, lw = 1.5) => {
      g.beginPath(); pts.forEach(([x, z], i) => { const [a, b] = P(x, z); i ? g.lineTo(a, b) : g.moveTo(a, b); }); g.closePath();
      if (fill) { g.fillStyle = fill; g.fill(); }
      if (stroke) { g.strokeStyle = stroke; g.lineWidth = lw; g.stroke(); }
    };
    const line = (x0, z0, x1, z1, stroke, lw = 1.5) => { const [a, b] = P(x0, z0), [c, d] = P(x1, z1); g.strokeStyle = stroke; g.lineWidth = lw; g.beginPath(); g.moveTo(a, b); g.lineTo(c, d); g.stroke(); };
    const text = (s, x, z, col = WH, size = 12) => { const [a, b] = P(x, z); g.fillStyle = col; g.font = `600 ${size}px "Exo 2", sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(s, a, b); };
    // satellites & bridges (always faint)
    for (const s of SATS) {
      const pts = satOutline(s).map(([u, v]) => sectorToWorld(s.k, u, v));
      poly(pts, level === 0 || level === 9 ? CYD : 'rgba(79,242,255,0.15)', level === 0 || level === 9 ? CYF : null);
      const br = [[-2.3, 56.5], [2.3, 56.5], [2.3, (s.shape === 'rect' ? s.v - s.d / 2 : s.v - s.a)], [-2.3, (s.shape === 'rect' ? s.v - s.d / 2 : s.v - s.a)]].map(([u, v]) => sectorToWorld(s.k, u, v));
      poly(br, level === 0 || level === 9 ? CYD : 'rgba(79,242,255,0.15)', level === 0 || level === 9 ? CYF : null);
      if (opts.labels) { const [x, z] = sectorToWorld(s.k, 0, s.v); text(s.name.toUpperCase(), x, z, WH, opts.big ? 15 : 11); }
    }
    for (const k of [1, 3, 5, 7]) {
      const pts = [[-6.2, 56.2], [6.2, 56.2], [9, 60], [9, 64], [6, 67.5], [-6, 67.5], [-9, 64], [-9, 60]].map(([u, v]) => sectorToWorld(k, u, v));
      poly(pts, level === 0 ? CYD : 'rgba(79,242,255,0.12)', level === 0 ? CYF : null, 1);
    }
    const on = CY, off = 'rgba(79,242,255,0.18)';
    poly(octPts(56.5), level === 0 || level === 9 ? on : off, level === 0 || level === 9 ? CYF : null, 2);
    if (level === 0 || level === 9) { poly(octPts(56.2), null, 'rgba(79,242,255,0.10)'); poly(octPts(48), CYD, 'rgba(2,10,16,0.55)', 1.5); poly(octPts(48), null, CYF); }
    if (level === -1) {
      poly(octPts(27), on, 'rgba(255,179,71,0.06)'); poly(octPts(21), on);
      poly(circlePts(10, 32), AMB, 'rgba(86,255,154,0.08)');
      const [a0, b0] = [sectorToWorld(0, -1.4, 10), sectorToWorld(0, 1.4, 21)];
      poly([[a0[0], a0[1]], [b0[0], a0[1]], [b0[0], b0[1]], [a0[0], b0[1]]], AMB);
      for (const k of [3, 5]) poly([[SVC_STAIR.u0, 27], [SVC_STAIR.u1, 27], [SVC_STAIR.u1, SVC_STAIR.v1], [SVC_STAIR.u0, SVC_STAIR.v1]].map(([u, v]) => sectorToWorld(k, u, v)), AMB, 'rgba(255,179,71,0.12)');
      if (opts.labels) { text('HYDRO CORE', 0, 0, '#56ff9a', opts.big ? 14 : 10); const [x, z] = sectorToWorld(1, 0, 24); text('SERVICE RING', x, z, AMB, opts.big ? 13 : 9); }
    }
    if (level === 0 || level === 9) {
      poly(octPts(42), on, level === 0 ? 'rgba(79,242,255,0.05)' : null); poly(octPts(27), level === 0 ? CYD : off); poly(octPts(22), level === 0 ? on : off);
      if (level === 0) {
        for (let k = 0; k < 8; k++) {
          const [x0, z0] = sectorToWorld(k, T8 * 27, 27), [x1, z1] = sectorToWorld(k, T8 * 42, 42);
          line(x0, z0, x1, z1, CYD);
          if (opts.labels) { const [x, z] = sectorToWorld(k, 0, 35); text(ROOMS_L1[k], x, z, k === 3 ? RED : WH, opts.big ? 13 : 9); }
        }
        for (const k of [2, 6]) { const pts = [[-7.9, 42.25], [1.4, 42.25], [1.4, 44.75], [-7.9, 44.75]].map(([u, v]) => sectorToWorld(k, u, v)); poly(pts, AMB, 'rgba(255,179,71,0.15)', 1); }
        if (opts.labels) text('ATRIUM', 0, 0, '#56ff9a', opts.big ? 14 : 10);
      }
    }
    if (level === 1) {
      poly(octPts(42), off); poly(octPts(34), on, 'rgba(79,242,255,0.05)'); poly(octPts(24), on);
      for (const k of [3, 4]) { const [x0, z0] = sectorToWorld(k, T8 * 24, 24), [x1, z1] = sectorToWorld(k, T8 * 34, 34); line(x0, z0, x1, z1, CY, 2); }
      poly(octPts(42), CYD, null, 1);
      for (const k of [2, 6]) { const pts = [[-7.9, 34.25], [1.4, 34.25], [1.4, 36.75], [-7.9, 36.75]].map(([u, v]) => sectorToWorld(k, u, v)); poly(pts, AMB, 'rgba(255,179,71,0.15)', 1); }
      if (opts.labels) { const [x, z] = sectorToWorld(4, 0, 29); text('MISSION CONTROL', x, z, AMB, opts.big ? 13 : 9); const [a, b] = sectorToWorld(0, 0, 29); text('GALLERY', a, b, WH, opts.big ? 12 : 9); const [c, d] = sectorToWorld(0, 0, 38); text('TERRACE', c, d, CYD, opts.big ? 11 : 8); }
    }
    if (level === 2) {
      poly(octPts(34), on, 'rgba(79,242,255,0.05)'); poly(circlePts(26, 48), on, 'rgba(79,242,255,0.1)');
      if (opts.labels) { text('DOME', 0, 0, WH, opts.big ? 14 : 10); const [x, z] = sectorToWorld(4, 0, 30.6); text('UPLINK', x, z, AMB, opts.big ? 13 : 9); }
    }
    if (level !== -1) { const [ex, ez] = sectorToWorld(ELEV.k, ELEV.u, ELEV.v); const [a, b] = P(ex, ez); g.fillStyle = CY; g.beginPath(); g.arc(a, b, opts.big ? 6 : 3, 0, TAU); g.fill(); }
  }
  marker(g, x, y, col, r = 7) { g.fillStyle = col; g.beginPath(); g.moveTo(x, y - r); g.lineTo(x + r, y); g.lineTo(x, y + r); g.lineTo(x - r, y); g.closePath(); g.fill(); }
  arrow(g, x, y, ang, r = 9) {
    g.save(); g.translate(x, y); g.rotate(ang);
    g.fillStyle = WH; g.beginPath(); g.moveTo(0, -r * 1.3); g.lineTo(r * 0.8, r); g.lineTo(0, r * 0.5); g.lineTo(-r * 0.8, r); g.closePath(); g.fill();
    g.restore();
  }

  minimap(px, pz, yaw, level, obj) {
    const g = this.mg, W = 420, R = W / 2, s = 1.55;
    g.clearRect(0, 0, W, W);
    g.save(); g.beginPath(); g.arc(R, R, R - 2, 0, TAU); g.clip();
    const c = Math.cos(yaw), sn = Math.sin(yaw);
    // heading-up: rotate world so forward (-sin yaw, -cos yaw) points up
    const tf = (x, z) => { const dx = x - px, dz = z - pz; const rx = dx * c - dz * sn, rz = dx * sn + dz * c; return [R + rx * s, R + rz * s]; };
    this.drawPlan(g, level, tf, { labels: true });
    if (obj) {
      let [ox, oy] = tf(obj.x, obj.z);
      const d = Math.hypot(ox - R, oy - R);
      if (d > R - 16) { ox = R + (ox - R) / d * (R - 16); oy = R + (oy - R) / d * (R - 16); }
      this.marker(g, ox, oy, AMB, 9);
    }
    g.restore();
    this.arrow(g, R, R, 0, 10);
    g.strokeStyle = CYD; g.lineWidth = 2; g.beginPath(); g.arc(R, R, R - 2, 0, TAU); g.stroke();
    // north tick
    const nx = R + (-sn) * 0 + Math.sin(-yaw) * 0, ang = yaw; void nx;
    const tx = R + Math.sin(ang) * (R - 16), ty = R - Math.cos(ang) * (R - 16);
    g.fillStyle = WH; g.font = '600 18px "Exo 2", sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('N', tx, ty);
  }

  bigMap(px, pz, yaw, obj, objLevel) {
    const g = this.fg, W = 1600, H = 1000;
    g.clearRect(0, 0, W, H);
    const site = this.mapLevel === 9;
    const s = site ? 3.2 : 6.6, cx = W / 2, cz = H / 2;
    const tf = (x, z) => [cx + x * s, cz + z * s];
    g.strokeStyle = 'rgba(79,242,255,0.05)'; g.lineWidth = 1;
    for (let x = 0; x < W; x += 40) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); }
    for (let y = 0; y < H; y += 40) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
    this.drawPlan(g, this.mapLevel === 9 ? 9 : this.mapLevel, tf, { labels: true, big: true });
    if (obj && (objLevel === this.mapLevel || site)) { const [ox, oy] = tf(obj.x, obj.z); this.marker(g, ox, oy, AMB, 14); g.fillStyle = AMB; g.font = '600 16px "Exo 2"'; g.textAlign = 'left'; g.fillText('OBJECTIVE', ox + 18, oy + 5); }
    const [a, b] = tf(px, pz); this.arrow(g, a, b, -yaw, 14);
    g.fillStyle = WH; g.font = '600 15px "Exo 2"'; g.textAlign = 'left'; g.fillText('YOU', a + 18, b + 5);
    g.fillStyle = 'rgba(232,246,255,0.5)'; g.font = '14px "Share Tech Mono"'; g.fillText('N ↑   ·   grid 6 m', 20, H - 20);
  }

  journal(found, onPick, heard = []) {
    const list = $('j-list'); list.innerHTML = '';
    const ids = Object.keys(LOGS);
    $('j-count').textContent = `${found.size} / ${ids.length}`;
    for (const id of ids) {
      const b = document.createElement('button');
      if (found.has(id)) { b.textContent = LOGS[id].title + '  —  ' + LOGS[id].by; b.onclick = () => onPick(id); }
      else { b.textContent = '▢  Unrecovered log'; b.className = 'locked'; }
      list.appendChild(b);
    }
    if (heard.length) {
      const h = document.createElement('div'); h.className = 'sec'; h.textContent = 'RADIO TRANSMISSIONS'; list.appendChild(h);
      for (const [who, text] of heard.slice().reverse()) {
        const d = document.createElement('div'); d.className = 'tx'; d.style.setProperty('--sp', SPEAKERS[who].color);
        const b = document.createElement('b'); b.textContent = SPEAKERS[who].name; d.append(b, text); list.appendChild(d);
      }
    }
  }
  // ---------------------------------------------------------------- story
  radio(who, text) {
    const r = $('radio');
    if (!who) { r.classList.add('hidden'); return; }
    const sp = SPEAKERS[who];
    r.style.setProperty('--sp', sp.color);
    $('radio-who').textContent = sp.name; $('radio-say').textContent = text;
    r.classList.add('hidden'); void r.offsetWidth; r.classList.remove('hidden');
  }
  chapter(c) {
    const el = $('chapter');
    $('ch-n').textContent = c.n; $('ch-t').textContent = c.t;
    el.classList.remove('hidden', 'show'); void el.offsetWidth; el.classList.add('show');
    clearTimeout(this._chT); this._chT = setTimeout(() => el.classList.add('hidden'), 5000);
  }
  caption(text, mono) {
    const c = $('caption');
    if (!text) { c.style.opacity = 0; return; }
    c.classList.remove('hidden'); c.classList.toggle('mono', !!mono);
    if (c.textContent !== text) { c.style.opacity = 0; clearTimeout(this._capT); this._capT = setTimeout(() => { c.textContent = text; c.style.opacity = 1; }, c.textContent ? 450 : 0); }
    else c.style.opacity = 1;
  }
  clearCaption() { const c = $('caption'); c.textContent = ''; c.style.opacity = 0; c.classList.add('hidden'); clearTimeout(this._capT); }
  showLog(id) { const L = LOGS[id]; $('lv-title').textContent = L.title; $('lv-by').textContent = L.by.toUpperCase(); $('lv-body').textContent = L.text; this.open('logview'); }
  letterbox(on) {
    const W = window.innerWidth, H = window.innerHeight;
    const bh = on ? Math.max(0, (H - W * 9 / 16) / 2) : 0;
    for (const e of [this.el.lbTop, this.el.lbBot]) { e.classList.toggle('hidden', !on); e.style.height = bh + 'px'; }
  }
}
