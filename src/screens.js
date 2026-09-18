// Animated canvas displays.  One canvas per display "kind"; every mesh that
// shows that kind shares its material, so screens batch like any other surface.
import * as THREE from 'three';

const CY = '#4ff2ff', CY2 = 'rgba(79,242,255,0.35)', AMB = '#ffb347', RED = '#ff4a3d', WH = '#e8f6ff', GRN = '#56ff9a';
const FONT = '"Share Tech Mono", "Consolas", monospace';

function frame(g, w, h, title, col = CY) {
  const gr = g.createLinearGradient(0, 0, 0, h);
  gr.addColorStop(0, '#04121a'); gr.addColorStop(1, '#020a10');
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
  g.strokeStyle = 'rgba(79,242,255,0.08)'; g.lineWidth = 1;
  for (let x = 0; x < w; x += 32) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, h); g.stroke(); }
  for (let y = 0; y < h; y += 32) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); }
  g.fillStyle = col; g.font = `20px ${FONT}`; g.textBaseline = 'top';
  g.fillText(title, 16, 12);
  g.fillRect(16, 38, 120, 2);
  g.strokeStyle = col; g.globalAlpha = 0.5; g.strokeRect(4, 4, w - 8, h - 8); g.globalAlpha = 1;
}

const DRAW = {
  status(g, w, h, t, S) {
    frame(g, w, h, 'AEGIS // COLONY STATUS');
    const rows = [['REACTOR', 0.82 + Math.sin(t * 0.7) * 0.03], ['LIFE SUPPORT', 0.97], ['DESALINATION', 0.64 + Math.sin(t * 0.3) * 0.05], ['HYDROPONICS', 0.88], ['CRYO CONTAIN.', S.restored ? 0.92 : 0.41 + Math.sin(t * 5) * 0.03], ['UPLINK', S.transmitted ? 1 : 0.12]];
    rows.forEach(([k, v], i) => {
      const y = 62 + i * 34;
      g.fillStyle = WH; g.font = `17px ${FONT}`; g.fillText(k, 16, y);
      g.fillStyle = 'rgba(79,242,255,0.12)'; g.fillRect(200, y + 2, 240, 16);
      g.fillStyle = v < 0.5 ? RED : (v < 0.7 ? AMB : CY); g.fillRect(200, y + 2, 240 * v, 16);
      g.fillStyle = WH; g.fillText((v * 100 | 0) + '%', 452, y);
    });
    g.strokeStyle = CY; g.lineWidth = 2; g.beginPath();
    for (let x = 0; x < w - 32; x += 4) { const y = h - 26 + Math.sin(x * 0.05 + t * 3) * 8 * Math.sin(x * 0.011 + t); x ? g.lineTo(16 + x, y) : g.moveTo(16 + x, y); }
    g.stroke();
  },
  sonar(g, w, h, t) {
    frame(g, w, h, 'SONAR // 360 SWEEP');
    const cx = w / 2, cy = h / 2 + 14, r = h * 0.4;
    g.strokeStyle = CY2; g.lineWidth = 1;
    for (let i = 1; i <= 4; i++) { g.beginPath(); g.arc(cx, cy, r * i / 4, 0, 7); g.stroke(); }
    g.beginPath(); g.moveTo(cx - r, cy); g.lineTo(cx + r, cy); g.moveTo(cx, cy - r); g.lineTo(cx, cy + r); g.stroke();
    const a = t * 1.2;
    const gr = g.createConicGradient ? g.createConicGradient(a - 0.8, cx, cy) : null;
    if (gr) { gr.addColorStop(0, 'rgba(79,242,255,0)'); gr.addColorStop(0.12, 'rgba(79,242,255,0.45)'); gr.addColorStop(0.1201, 'rgba(79,242,255,0)'); g.fillStyle = gr; g.beginPath(); g.arc(cx, cy, r, 0, 7); g.fill(); }
    g.strokeStyle = CY; g.lineWidth = 2; g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); g.stroke();
    const blips = [[0.3, 0.6], [1.9, 0.8], [2.8, 0.35], [4.1, 0.7], [5.2, 0.5]];
    for (const [ba, br] of blips) {
      const age = ((a - ba) % 6.283 + 6.283) % 6.283;
      g.fillStyle = `rgba(86,255,154,${Math.max(0, 1 - age / 4)})`;
      g.beginPath(); g.arc(cx + Math.cos(ba) * r * br, cy + Math.sin(ba) * r * br, 5, 0, 7); g.fill();
    }
    g.fillStyle = WH; g.font = `15px ${FONT}`; g.fillText('CONTACTS 05', 16, h - 30); g.fillText('DEPTH 1,840 M', w - 150, h - 30);
  },
  vitals(g, w, h, t, S) {
    frame(g, w, h, 'SPECIMEN AX-7 // VITALS', S.restored ? CY : RED);
    g.strokeStyle = GRN; g.lineWidth = 2.5; g.beginPath();
    for (let x = 0; x < w - 32; x += 2) {
      const ph = ((x + t * 180) % 160) / 160;
      let y = 0;
      if (ph > 0.42 && ph < 0.46) y = -38; else if (ph > 0.46 && ph < 0.5) y = 26; else if (ph > 0.6 && ph < 0.7) y = -8 * Math.sin((ph - 0.6) * 31);
      x ? g.lineTo(16 + x, 110 + y) : g.moveTo(16 + x, 110 + y);
    }
    g.stroke();
    g.font = `18px ${FONT}`; g.fillStyle = WH;
    g.fillText('CORE TEMP  -196.4 C', 16, 160);
    g.fillText('NEURAL     ' + (S.scanned ? 'ACTIVE' : 'DORMANT'), 16, 186);
    g.fillStyle = S.restored ? GRN : RED; g.fillText(S.restored ? 'CONTAINMENT NOMINAL' : 'CONTAINMENT: POWER FAULT', 16, 214);
    // helix
    for (let i = 0; i < 26; i++) {
      const y = 60 + i * 8, s = Math.sin(t * 2 + i * 0.5);
      g.fillStyle = CY; g.fillRect(w - 110 + s * 40, y, 5, 5); g.fillStyle = AMB; g.fillRect(w - 110 - s * 40, y, 5, 5);
      g.fillStyle = CY2; g.fillRect(w - 110 - Math.abs(s) * 40, y + 2, Math.abs(s) * 80, 1);
    }
  },
  map(g, w, h, t) {
    frame(g, w, h, 'COLONY LAYOUT // LEVEL 1');
    const cx = w / 2, cy = h / 2 + 12, s = h * 0.0068;
    const oct = (a) => { g.beginPath(); for (let i = 0; i <= 8; i++) { const f = (i + 0.5) * Math.PI / 4, R = a / Math.cos(Math.PI / 8) * s; const x = cx + Math.sin(f) * R, y = cy - Math.cos(f) * R; i ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke(); };
    g.strokeStyle = CY; g.lineWidth = 1.5; oct(56); oct(42); g.strokeStyle = CY2; oct(27); oct(22);
    for (let k = 0; k < 8; k++) { const a = k * Math.PI / 4; g.fillStyle = CY; g.fillRect(cx + Math.sin(a) * 110 * s * 1.0 - 2, cy - Math.cos(a) * 110 * s - 2, 4, 4); }
    g.fillStyle = `rgba(255,179,71,${0.5 + 0.5 * Math.sin(t * 4)})`; g.beginPath(); g.arc(cx, cy + 56 * s * 1.6, 5, 0, 7); g.fill();
  },
  log(g, w, h, t) {
    frame(g, w, h, 'SYS.LOG');
    const lines = ['> desal loop B pressure ok', '> hydro ring 2 nutrient 94%', '> drone D-07 returning', '> buoy S-14 telemetry', '> cryo bay: power variance', '> uplink handshake pending', '> tide model updated', '> hull strain 0.02%', '> VTOL-3 approach vector', '> atrium O2 21.2%', '> sample AX-7 stable', '> ballast trim +0.4'];
    g.font = `16px ${FONT}`;
    const off = Math.floor(t * 1.5);
    for (let i = 0; i < 9; i++) {
      const L = lines[(off + i) % lines.length];
      g.fillStyle = L.includes('cryo') ? AMB : (i === 8 ? WH : 'rgba(200,240,255,0.75)');
      g.fillText(L, 16, 54 + i * 24);
    }
    if ((t * 2 | 0) % 2) { g.fillStyle = CY; g.fillRect(16, 54 + 9 * 24, 10, 16); }
  },
  weather(g, w, h, t) {
    frame(g, w, h, 'OCEAN // CONDITIONS');
    g.font = `34px ${FONT}`; g.fillStyle = WH; g.fillText('SEA STATE 2', 16, 58);
    g.font = `17px ${FONT}`; g.fillStyle = CY;
    g.fillText('SWELL 0.6 M  /  11 S', 16, 104); g.fillText('WIND 7 KN  NNE', 16, 128); g.fillText('VIS 9.2 KM  HAZE', 16, 152);
    g.strokeStyle = CY; g.lineWidth = 2; g.beginPath();
    for (let x = 0; x < w - 32; x += 3) { const y = h - 50 + Math.sin(x * 0.03 + t) * 12 + Math.sin(x * 0.08 - t * 1.7) * 5; x ? g.lineTo(16 + x, y) : g.moveTo(16 + x, y); }
    g.stroke();
  },
  welcome(g, w, h, t) {
    g.fillStyle = '#031018'; g.fillRect(0, 0, w, h);
    const gr = g.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, w * 0.6);
    gr.addColorStop(0, 'rgba(79,242,255,0.18)'); gr.addColorStop(1, 'rgba(79,242,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.textAlign = 'center'; g.fillStyle = WH; g.font = `600 64px "Exo 2", sans-serif`; g.letterSpacing = '14px';
    g.fillText('AEGIS', w / 2 + 7, h * 0.34);
    g.letterSpacing = '4px'; g.font = `18px ${FONT}`; g.fillStyle = CY;
    g.fillText('DEEP OCEAN RESEARCH COLONY', w / 2, h * 0.6);
    g.fillStyle = 'rgba(232,246,255,0.6)'; g.fillText('PACIFIC SECTOR 7  ·  EST. 2071', w / 2, h * 0.72);
    g.fillStyle = CY; g.fillRect(w / 2 - 60 + Math.sin(t) * 40, h * 0.84, 120, 3);
    g.textAlign = 'left'; g.letterSpacing = '0px';
  },
  alert(g, w, h, t, S) {
    const on = S.cryoOpen ? 0 : (Math.sin(t * 4) > 0 ? 1 : 0.6);
    g.fillStyle = S.cryoOpen ? '#021408' : '#1a0404'; g.fillRect(0, 0, w, h);
    g.fillStyle = S.cryoOpen ? GRN : RED; g.globalAlpha = S.cryoOpen ? 1 : on;
    for (let i = -4; i < 20; i++) { g.beginPath(); g.moveTo(i * 40, 0); g.lineTo(i * 40 + 20, 0); g.lineTo(i * 40 - 20, 26); g.lineTo(i * 40 - 40, 26); g.fill(); g.beginPath(); g.moveTo(i * 40, h - 26); g.lineTo(i * 40 + 20, h - 26); g.lineTo(i * 40 - 20, h); g.lineTo(i * 40 - 40, h); g.fill(); }
    g.textAlign = 'center'; g.font = `600 52px "Exo 2", sans-serif`;
    g.fillText(S.cryoOpen ? 'ACCESS GRANTED' : 'RESTRICTED', w / 2, h * 0.47);
    g.font = `20px ${FONT}`; g.fillText(S.cryoOpen ? 'CRYOGENIC LABORATORY' : 'LEVEL-3 CLEARANCE REQUIRED', w / 2, h * 0.68);
    g.globalAlpha = 1; g.textAlign = 'left';
  },
  holo(g, w, h, t) {
    g.clearRect(0, 0, w, h);
    g.strokeStyle = CY; g.fillStyle = CY; g.lineWidth = 2;
    g.font = `18px ${FONT}`; g.fillText('UPLINK // ORBITAL RELAY', 12, 24);
    g.strokeRect(6, 6, w - 12, h - 12);
    for (let i = 0; i < 7; i++) { const v = 0.3 + 0.6 * Math.abs(Math.sin(t * 0.9 + i)); g.fillRect(20 + i * 34, h - 20 - v * 120, 22, v * 120); }
    g.beginPath(); for (let x = 0; x < 200; x += 3) { const y = 90 + Math.sin(x * 0.07 + t * 2) * 22; x ? g.lineTo(270 + x, y) : g.moveTo(270 + x, y); } g.stroke();
    g.beginPath(); g.arc(370, 190, 40, t % 6.28, (t % 6.28) + 4.5); g.stroke();
  },
  dna(g, w, h, t) {
    frame(g, w, h, 'GENOME SEQUENCER');
    for (let i = 0; i < 40; i++) {
      const x = 20 + i * ((w - 40) / 40), s = Math.sin(t * 2 + i * 0.4);
      g.fillStyle = CY; g.fillRect(x, h / 2 + s * 50, 6, 6); g.fillStyle = GRN; g.fillRect(x, h / 2 - s * 50, 6, 6);
      g.fillStyle = CY2; g.fillRect(x + 2, h / 2 - Math.abs(s) * 50, 2, Math.abs(s) * 100);
    }
    g.font = `15px ${FONT}`; g.fillStyle = WH; g.fillText('SEQ ' + (Math.floor(t * 40) % 100000).toString().padStart(6, '0') + '  ATCG-GCTA-TTAG', 16, h - 24);
  },
};

export function makeScreens() {
  const S = {}, list = [];
  const state = { restored: false, cryoOpen: false, scanned: false, transmitted: false };
  for (const k of Object.keys(DRAW)) {
    const c = document.createElement('canvas'); c.width = 512; c.height = 288;
    const g = c.getContext('2d');
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
    const holo = k === 'holo';
    const m = holo
      ? new THREE.MeshBasicMaterial({ map: t, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, color: new THREE.Color(1.6, 1.6, 1.6) })
      : new THREE.MeshBasicMaterial({ map: t, color: new THREE.Color(1.5, 1.5, 1.5), toneMapped: true });
    m.polygonOffset = true; m.polygonOffsetFactor = -1; m.polygonOffsetUnits = -4; // sits 1-2 mm on its bezel
    m.userData.noShadow = true; m.userData.keepUV = true; m.name = 'scr_' + k;
    S[k] = m;
    list.push({ k, c, g, t });
    DRAW[k](g, 512, 288, 0, state); t.needsUpdate = true;
  }
  let i = 0, acc = 0;
  return {
    S, state,
    update(dt, time) {
      acc += dt;
      if (acc < 0.06) return;
      acc = 0;
      // redraw one display per tick, round-robin
      const e = list[i++ % list.length];
      if (e.k === 'welcome') return;
      DRAW[e.k](e.g, 512, 288, time, state); e.t.needsUpdate = true;
    },
    redrawAll(time) { for (const e of list) { DRAW[e.k](e.g, 512, 288, time, state); e.t.needsUpdate = true; } },
  };
}
