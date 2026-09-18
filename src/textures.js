// Procedural PBR textures, drawn on canvases at load time.
// Every surface map is tileable; the builder assigns world-space UVs so the
// texel density is the same everywhere in the colony.
import * as THREE from 'three';
import { rng } from './util.js';

const R = rng(20260918);
const rnd = (a = 0, b = 1) => a + (b - a) * R();

function cv(w, h = w) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }

// tileable fbm value noise -> grayscale canvas
function noiseField(size, cells, octaves, gain = 0.5) {
  const out = new Float32Array(size * size);
  let amp = 1, tot = 0;
  for (let o = 0; o < octaves; o++) {
    const n = cells << o;
    const lat = new Float32Array(n * n);
    for (let i = 0; i < lat.length; i++) lat[i] = R();
    for (let y = 0; y < size; y++) {
      const fy = y / size * n, y0 = Math.floor(fy), ty = fy - y0, sy = ty * ty * (3 - 2 * ty);
      const r0 = (y0 % n) * n, r1 = ((y0 + 1) % n) * n;
      for (let x = 0; x < size; x++) {
        const fx = x / size * n, x0 = Math.floor(fx), tx = fx - x0, sx = tx * tx * (3 - 2 * tx);
        const c0 = x0 % n, c1 = (x0 + 1) % n;
        const a = lat[r0 + c0] + (lat[r0 + c1] - lat[r0 + c0]) * sx;
        const b = lat[r1 + c0] + (lat[r1 + c1] - lat[r1 + c0]) * sx;
        out[y * size + x] += (a + (b - a) * sy) * amp;
      }
    }
    tot += amp; amp *= gain;
  }
  for (let i = 0; i < out.length; i++) out[i] /= tot;
  return out;
}
function fieldCanvas(field, size, lo = 0, hi = 1) {
  const c = cv(size), g = c.getContext('2d'), im = g.createImageData(size, size);
  for (let i = 0; i < field.length; i++) {
    const v = Math.max(0, Math.min(255, ((field[i] - lo) / (hi - lo)) * 255));
    im.data[i * 4] = im.data[i * 4 + 1] = im.data[i * 4 + 2] = v; im.data[i * 4 + 3] = 255;
  }
  g.putImageData(im, 0, 0);
  return c;
}

let NOISE = null, NOISE_FINE = null, NOISE_COARSE = null;
function initNoise() {
  if (NOISE) return;
  NOISE = fieldCanvas(noiseField(512, 4, 6), 512, 0.15, 0.85);
  NOISE_FINE = fieldCanvas(noiseField(256, 16, 3), 256, 0.2, 0.8);
  NOISE_COARSE = fieldCanvas(noiseField(256, 2, 4), 256, 0.2, 0.8);
}
// overlay tiled noise onto a context with a blend mode
function noiseOver(g, size, src, alpha, mode = 'multiply', scale = 1) {
  g.save(); g.globalAlpha = alpha; g.globalCompositeOperation = mode;
  const s = size * scale;
  for (let y = 0; y < size; y += s) for (let x = 0; x < size; x += s) g.drawImage(src, x, y, s, s);
  g.restore();
}

// height canvas (grayscale) -> tangent-space normal map canvas
function normalFrom(hc, strength = 2) {
  const w = hc.width, h = hc.height;
  const src = hc.getContext('2d').getImageData(0, 0, w, h).data;
  const c = cv(w, h), g = c.getContext('2d'), im = g.createImageData(w, h), d = im.data;
  const H = (x, y) => src[(((y + h) % h) * w + ((x + w) % w)) * 4] / 255;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const dx = (H(x + 1, y - 1) + 2 * H(x + 1, y) + H(x + 1, y + 1)) - (H(x - 1, y - 1) + 2 * H(x - 1, y) + H(x - 1, y + 1));
    const dy = (H(x - 1, y + 1) + 2 * H(x, y + 1) + H(x + 1, y + 1)) - (H(x - 1, y - 1) + 2 * H(x, y - 1) + H(x + 1, y - 1));
    let nx = -dx * strength, ny = dy * strength, nz = 1;
    const l = Math.hypot(nx, ny, nz); nx /= l; ny /= l; nz /= l;
    const i = (y * w + x) * 4;
    d[i] = (nx * 0.5 + 0.5) * 255; d[i + 1] = (ny * 0.5 + 0.5) * 255; d[i + 2] = (nz * 0.5 + 0.5) * 255; d[i + 3] = 255;
  }
  g.putImageData(im, 0, 0);
  return c;
}

function tex(c, srgb = true, rep = true) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (rep) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  return t;
}
function set(c, srgb) { return tex(c, srgb); }

// recursive panel layout inside a rect
function panelSplit(x, y, w, h, depth, out) {
  if (depth <= 0 || (w < 120 && h < 120) || (depth < 3 && R() < 0.3)) { out.push([x, y, w, h]); return; }
  if (w >= h) {
    const s = Math.round(w * (R() < 0.5 ? 0.5 : (R() < 0.5 ? 1 / 3 : 2 / 3)));
    panelSplit(x, y, s, h, depth - 1, out); panelSplit(x + s, y, w - s, h, depth - 1, out);
  } else {
    const s = Math.round(h * (R() < 0.5 ? 0.5 : (R() < 0.5 ? 1 / 3 : 2 / 3)));
    panelSplit(x, y, w, s, depth - 1, out); panelSplit(x, y + s, w, h - s, depth - 1, out);
  }
}
function screw(g, hg, x, y, r = 5) {
  g.fillStyle = 'rgba(120,130,140,0.9)'; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
  g.strokeStyle = 'rgba(40,45,50,0.6)'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(x - r * .6, y); g.lineTo(x + r * .6, y); g.stroke();
  hg.fillStyle = '#fff'; hg.beginPath(); hg.arc(x, y, r, 0, 7); hg.fill();
}
function hexPath(g, x, y, r) {
  g.beginPath();
  for (let i = 0; i < 6; i++) { const a = Math.PI / 6 + i * Math.PI / 3; const px = x + r * Math.cos(a), py = y + r * Math.sin(a); i ? g.lineTo(px, py) : g.moveTo(px, py); }
  g.closePath();
}
function ventSlots(g, hg, x, y, w, h, n) {
  const sh = h / (n * 2);
  for (let i = 0; i < n; i++) {
    const yy = y + sh * 0.5 + i * sh * 2;
    g.fillStyle = 'rgba(10,12,14,0.85)'; g.fillRect(x, yy, w, sh);
    hg.fillStyle = '#000'; hg.fillRect(x, yy, w, sh);
    g.fillStyle = 'rgba(255,255,255,0.08)'; g.fillRect(x, yy + sh, w, 2);
  }
}

// ---------------------------------------------------------------- white composite panel
function whitePanel(size = 1024, base = [226, 231, 235], grime = 0.10, seamDark = 0.5, detail = true) {
  const c = cv(size), g = c.getContext('2d');
  const hc = cv(size), hg = hc.getContext('2d');
  const rc = cv(size), rg = rc.getContext('2d');
  g.fillStyle = `rgb(${base})`; g.fillRect(0, 0, size, size);
  hg.fillStyle = '#b0b0b0'; hg.fillRect(0, 0, size, size);
  rg.fillStyle = 'rgb(105,105,105)'; rg.fillRect(0, 0, size, size);
  const panels = [];
  panelSplit(0, 0, size, size, 4, panels);
  for (const [x, y, w, h] of panels) {
    const t = rnd(-6, 6);
    g.fillStyle = `rgb(${base[0] + t},${base[1] + t},${base[2] + t + 1})`;
    g.fillRect(x + 3, y + 3, w - 6, h - 6);
    // bevel in height
    hg.fillStyle = '#d8d8d8'; hg.fillRect(x + 4, y + 4, w - 8, h - 8);
    hg.fillStyle = '#e8e8e8'; hg.fillRect(x + 9, y + 9, w - 18, h - 18);
    // grime near panel bottom
    const gr = g.createLinearGradient(0, y + h * 0.55, 0, y + h);
    gr.addColorStop(0, 'rgba(80,70,60,0)'); gr.addColorStop(1, `rgba(80,70,60,${grime})`);
    g.fillStyle = gr; g.fillRect(x, y, w, h);
    const rr = rnd(95, 125) | 0;
    rg.fillStyle = `rgb(${rr},${rr},${rr})`; rg.fillRect(x + 4, y + 4, w - 8, h - 8);
    if (detail && w > 150 && h > 150 && R() < 0.35) {
      screw(g, hg, x + 18, y + 18); screw(g, hg, x + w - 18, y + 18);
      screw(g, hg, x + 18, y + h - 18); screw(g, hg, x + w - 18, y + h - 18);
    }
    if (detail && w > 220 && h > 200 && R() < 0.18) {
      ventSlots(g, hg, x + w * 0.2, y + h * 0.3, w * 0.6, h * 0.35, 6);
    }
    if (detail && w > 180 && R() < 0.2) {
      g.fillStyle = 'rgba(40,50,60,0.55)'; g.font = `600 ${16}px monospace`;
      g.fillText(['A-07', 'SV-12', 'C2', 'HX-4', 'PNL 31', 'AC-9'][(R() * 6) | 0], x + 26, y + h - 26);
    }
    if (detail && w > 200 && h > 200 && R() < 0.12) {
      g.strokeStyle = 'rgba(60,70,80,0.35)'; g.lineWidth = 3; hexPath(g, x + w / 2, y + h / 2, Math.min(w, h) * 0.18); g.stroke();
      hg.strokeStyle = '#707070'; hg.lineWidth = 4; hexPath(hg, x + w / 2, y + h / 2, Math.min(w, h) * 0.18); hg.stroke();
    }
    // seams
    g.strokeStyle = `rgba(35,42,50,${seamDark})`; g.lineWidth = 3; g.strokeRect(x + 1.5, y + 1.5, w - 3, h - 3);
    hg.strokeStyle = '#000'; hg.lineWidth = 4; hg.strokeRect(x + 1, y + 1, w - 2, h - 2);
    rg.strokeStyle = 'rgb(200,200,200)'; rg.lineWidth = 4; rg.strokeRect(x + 1, y + 1, w - 2, h - 2);
  }
  noiseOver(g, size, NOISE, 0.10, 'multiply');
  noiseOver(g, size, NOISE_FINE, 0.05, 'multiply', 0.25);
  noiseOver(rg, size, NOISE, 0.25, 'overlay');
  return { map: set(c, true), normalMap: set(normalFrom(hc, 3.0), false), roughnessMap: set(rc, false) };
}

// ---------------------------------------------------------------- dark technical panel
function darkPanel(size = 1024) {
  const c = cv(size), g = c.getContext('2d');
  const hc = cv(size), hg = hc.getContext('2d');
  const rc = cv(size), rg = rc.getContext('2d');
  g.fillStyle = '#2c3239'; g.fillRect(0, 0, size, size);
  hg.fillStyle = '#909090'; hg.fillRect(0, 0, size, size);
  rg.fillStyle = 'rgb(140,140,140)'; rg.fillRect(0, 0, size, size);
  const panels = [];
  panelSplit(0, 0, size, size, 4, panels);
  for (const [x, y, w, h] of panels) {
    const t = rnd(-5, 5);
    g.fillStyle = `rgb(${44 + t},${50 + t},${57 + t})`; g.fillRect(x + 3, y + 3, w - 6, h - 6);
    hg.fillStyle = '#c0c0c0'; hg.fillRect(x + 5, y + 5, w - 10, h - 10);
    const k = R();
    if (k < 0.25 && w > 140 && h > 100) ventSlots(g, hg, x + 20, y + 20, w - 40, h - 40, Math.max(3, (h / 40) | 0));
    else if (k < 0.4 && w > 160 && h > 160) {
      // hex grille
      const r = 14;
      for (let yy = y + 24; yy < y + h - 20; yy += r * 1.5) for (let xx = x + 24 + ((((yy - y) / (r * 1.5)) | 0) % 2) * r * 0.87; xx < x + w - 20; xx += r * 1.74) {
        g.fillStyle = 'rgba(8,10,12,0.9)'; hexPath(g, xx, yy, r * 0.75); g.fill();
        hg.fillStyle = '#202020'; hexPath(hg, xx, yy, r * 0.75); hg.fill();
      }
    } else if (k < 0.5 && w > 120) {
      g.fillStyle = 'rgba(220,170,40,0.75)'; g.fillRect(x + 14, y + 14, 60, 8);
      g.fillStyle = 'rgba(200,210,220,0.5)'; g.font = '600 15px monospace'; g.fillText('MNT-' + ((R() * 90 + 10) | 0), x + 14, y + 42);
    }
    if (w > 100 && h > 100 && R() < 0.5) { screw(g, hg, x + 14, y + h - 14, 4); screw(g, hg, x + w - 14, y + h - 14, 4); }
    g.strokeStyle = 'rgba(8,10,12,0.9)'; g.lineWidth = 3; g.strokeRect(x + 1.5, y + 1.5, w - 3, h - 3);
    g.strokeStyle = 'rgba(255,255,255,0.05)'; g.lineWidth = 1; g.strokeRect(x + 4, y + 4, w - 8, h - 8);
    hg.strokeStyle = '#000'; hg.lineWidth = 4; hg.strokeRect(x + 1, y + 1, w - 2, h - 2);
  }
  noiseOver(g, size, NOISE, 0.18, 'overlay');
  noiseOver(rg, size, NOISE, 0.35, 'overlay');
  return { map: set(c, true), normalMap: set(normalFrom(hc, 2.5), false), roughnessMap: set(rc, false) };
}

// ---------------------------------------------------------------- brushed metal
function brushed(size = 512) {
  const c = cv(size), g = c.getContext('2d');
  const rc = cv(size), rg = rc.getContext('2d');
  g.fillStyle = '#b9bec4'; g.fillRect(0, 0, size, size);
  for (let i = 0; i < 1400; i++) {
    const y = rnd(0, size), l = rnd(40, 400), x = rnd(-100, size), v = rnd(-1, 1);
    g.strokeStyle = v > 0 ? `rgba(255,255,255,${v * 0.12})` : `rgba(0,0,0,${-v * 0.12})`;
    g.lineWidth = rnd(0.5, 1.6); g.beginPath(); g.moveTo(x, y); g.lineTo(x + l, y); g.stroke();
    g.beginPath(); g.moveTo(x - size, y); g.lineTo(x + l - size, y); g.stroke();
  }
  rg.drawImage(c, 0, 0);
  rg.globalCompositeOperation = 'multiply'; rg.fillStyle = 'rgb(120,120,120)'; rg.fillRect(0, 0, size, size);
  noiseOver(g, size, NOISE, 0.06, 'multiply');
  return { map: set(c, true), roughnessMap: set(rc, false) };
}

// ---------------------------------------------------------------- polished dark floor
function floorDark(size = 1024, base = [26, 29, 33], tiles = 2, inlay = false) {
  const c = cv(size), g = c.getContext('2d');
  const hc = cv(size), hg = hc.getContext('2d');
  const rc = cv(size), rg = rc.getContext('2d');
  g.fillStyle = `rgb(${base})`; g.fillRect(0, 0, size, size);
  hg.fillStyle = '#c0c0c0'; hg.fillRect(0, 0, size, size);
  rg.fillStyle = 'rgb(46,46,46)'; rg.fillRect(0, 0, size, size);
  const t = size / tiles;
  for (let j = 0; j < tiles; j++) for (let i = 0; i < tiles; i++) {
    const v = rnd(-3, 3);
    g.fillStyle = `rgb(${base[0] + v},${base[1] + v},${base[2] + v})`; g.fillRect(i * t + 2, j * t + 2, t - 4, t - 4);
    const r = rnd(38, 62) | 0; rg.fillStyle = `rgb(${r},${r},${r})`; rg.fillRect(i * t + 2, j * t + 2, t - 4, t - 4);
  }
  noiseOver(g, size, NOISE, 0.25, 'overlay');
  // smudges / scuffs in roughness
  for (let i = 0; i < 40; i++) {
    const x = rnd(0, size), y = rnd(0, size), r = rnd(20, 90);
    const gr = rg.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, 'rgba(140,140,140,0.35)'); gr.addColorStop(1, 'rgba(140,140,140,0)');
    rg.fillStyle = gr; rg.fillRect(x - r, y - r, r * 2, r * 2);
  }
  for (let j = 0; j <= tiles; j++) {
    g.fillStyle = 'rgba(0,0,0,0.9)'; g.fillRect(0, j * t - 2, size, 4); g.fillRect(j * t - 2, 0, 4, size);
    g.fillStyle = 'rgba(160,175,185,0.18)'; g.fillRect(0, j * t + 2, size, 1); g.fillRect(j * t + 2, 0, 1, size);
    hg.fillStyle = '#000'; hg.fillRect(0, j * t - 2, size, 4); hg.fillRect(j * t - 2, 0, 4, size);
    rg.fillStyle = 'rgb(180,180,180)'; rg.fillRect(0, j * t - 2, size, 4); rg.fillRect(j * t - 2, 0, 4, size);
  }
  if (inlay) {
    g.fillStyle = 'rgba(190,200,210,0.5)';
    g.fillRect(0, size / 2 - 3, size, 6);
  }
  return { map: set(c, true), normalMap: set(normalFrom(hc, 1.5), false), roughnessMap: set(rc, false) };
}

// ---------------------------------------------------------------- exterior composite decking
function deck(size = 1024) {
  const c = cv(size), g = c.getContext('2d');
  const hc = cv(size), hg = hc.getContext('2d');
  const rc = cv(size), rg = rc.getContext('2d');
  g.fillStyle = '#aeb5bb'; g.fillRect(0, 0, size, size);
  hg.fillStyle = '#c0c0c0'; hg.fillRect(0, 0, size, size);
  rg.fillStyle = 'rgb(175,175,175)'; rg.fillRect(0, 0, size, size);
  const rows = 4, rh = size / rows;
  for (let j = 0; j < rows; j++) {
    const off = (j % 2) * size / 4;
    for (let i = -1; i < 2; i++) {
      const x = off + i * size / 2, v = rnd(-8, 8);
      g.fillStyle = `rgb(${172 + v},${179 + v},${186 + v})`; g.fillRect(x + 3, j * rh + 3, size / 2 - 6, rh - 6);
      // anti-slip strips
      for (let s = 0; s < 3; s++) {
        const sy = j * rh + rh * (0.25 + s * 0.25) - 5;
        g.fillStyle = 'rgba(70,78,86,0.55)'; g.fillRect(x + 20, sy, size / 2 - 40, 10);
        hg.fillStyle = '#e0e0e0'; hg.fillRect(x + 20, sy, size / 2 - 40, 10);
        rg.fillStyle = 'rgb(235,235,235)'; rg.fillRect(x + 20, sy, size / 2 - 40, 10);
      }
      g.strokeStyle = 'rgba(30,35,40,0.8)'; g.lineWidth = 4; g.strokeRect(x + 2, j * rh + 2, size / 2 - 4, rh - 4);
      hg.strokeStyle = '#000'; hg.lineWidth = 5; hg.strokeRect(x + 2, j * rh + 2, size / 2 - 4, rh - 4);
      screw(g, hg, x + 14, j * rh + 14, 4); screw(g, hg, x + size / 2 - 14, j * rh + rh - 14, 4);
    }
  }
  noiseOver(g, size, NOISE, 0.28, 'multiply');
  noiseOver(g, size, NOISE_COARSE, 0.15, 'multiply');
  // water stains
  for (let i = 0; i < 18; i++) {
    const x = rnd(0, size), y = rnd(0, size), r = rnd(30, 140);
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, 'rgba(70,75,70,0.12)'); gr.addColorStop(1, 'rgba(70,75,70,0)');
    g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2);
  }
  return { map: set(c, true), normalMap: set(normalFrom(hc, 2), false), roughnessMap: set(rc, false) };
}

// ---------------------------------------------------------------- floor grating
function grating(size = 512) {
  const c = cv(size), g = c.getContext('2d');
  const hc = cv(size), hg = hc.getContext('2d');
  g.fillStyle = '#07090b'; g.fillRect(0, 0, size, size);
  hg.fillStyle = '#000'; hg.fillRect(0, 0, size, size);
  const n = 16, s = size / n;
  for (let i = 0; i < n; i++) {
    g.fillStyle = '#5a6168'; g.fillRect(0, i * s, size, s * 0.22); g.fillRect(i * s, 0, s * 0.3, size);
    hg.fillStyle = '#fff'; hg.fillRect(0, i * s, size, s * 0.22); hg.fillStyle = '#ccc'; hg.fillRect(i * s, 0, s * 0.3, size);
  }
  noiseOver(g, size, NOISE, 0.3, 'multiply');
  return { map: set(c, true), normalMap: set(normalFrom(hc, 3), false) };
}

// ---------------------------------------------------------------- hex panel
function hexTex(size = 512) {
  const c = cv(size), g = c.getContext('2d');
  const hc = cv(size), hg = hc.getContext('2d');
  g.fillStyle = '#e4e8ec'; g.fillRect(0, 0, size, size);
  hg.fillStyle = '#e0e0e0'; hg.fillRect(0, 0, size, size);
  const r = size / 8, w = r * Math.sqrt(3), hstep = r * 1.5;
  for (let row = -1; row < 7; row++) for (let col = -1; col < 6; col++) {
    const x = col * w + (row % 2 ? w / 2 : 0), y = row * hstep;
    g.strokeStyle = 'rgba(40,50,60,0.45)'; g.lineWidth = 4; hexPath(g, x, y, r - 1); g.stroke();
    hg.strokeStyle = '#000'; hg.lineWidth = 6; hexPath(hg, x, y, r - 1); hg.stroke();
    if (R() < 0.15) { g.fillStyle = 'rgba(0,0,0,0.05)'; hexPath(g, x, y, r - 4); g.fill(); }
  }
  noiseOver(g, size, NOISE, 0.1, 'multiply');
  return { map: set(c, true), normalMap: set(normalFrom(hc, 2.5), false) };
}

function hazard(size = 256) {
  const c = cv(size), g = c.getContext('2d');
  g.fillStyle = '#e8b21a'; g.fillRect(0, 0, size, size);
  g.fillStyle = '#16181b';
  for (let i = -2; i < 6; i++) { g.beginPath(); g.moveTo(i * size / 4, 0); g.lineTo(i * size / 4 + size / 8, 0); g.lineTo(i * size / 4 + size / 8 + size, size); g.lineTo(i * size / 4 + size, size); g.fill(); }
  noiseOver(g, size, NOISE, 0.35, 'multiply');
  return { map: set(c, true) };
}

function fabric(size = 256, col = [214, 96, 38]) {
  const c = cv(size), g = c.getContext('2d');
  g.fillStyle = `rgb(${col})`; g.fillRect(0, 0, size, size);
  for (let y = 0; y < size; y += 2) { g.fillStyle = `rgba(0,0,0,${0.05 + R() * 0.05})`; g.fillRect(0, y, size, 1); }
  for (let x = 0; x < size; x += 2) { g.fillStyle = `rgba(255,255,255,${0.03 + R() * 0.03})`; g.fillRect(x, 0, 1, size); }
  noiseOver(g, size, NOISE_FINE, 0.2, 'overlay');
  return { map: set(c, true) };
}

function leafTex(size = 512) {
  const c = cv(size), g = c.getContext('2d');
  g.clearRect(0, 0, size, size);
  for (let i = 0; i < 70; i++) {
    const x = rnd(size * 0.12, size * 0.88), y = rnd(size * 0.12, size * 0.88);
    const a = rnd(0, Math.PI * 2), l = rnd(38, 70), w = l * 0.42;
    const gc = [rnd(40, 80), rnd(95, 150), rnd(35, 65)].map(v => v | 0);
    g.save(); g.translate(x, y); g.rotate(a);
    g.fillStyle = `rgb(${gc})`;
    g.beginPath(); g.moveTo(0, 0); g.quadraticCurveTo(w, l * 0.45, 0, l); g.quadraticCurveTo(-w, l * 0.45, 0, 0); g.fill();
    g.strokeStyle = 'rgba(200,230,150,0.35)'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(0, 2); g.lineTo(0, l - 4); g.stroke();
    g.restore();
  }
  return { map: set(c, true) };
}
function barkTex(size = 512) {
  const c = cv(size), g = c.getContext('2d');
  const hc = cv(size), hg = hc.getContext('2d');
  g.fillStyle = '#5b4a3b'; g.fillRect(0, 0, size, size);
  hg.drawImage(NOISE, 0, 0, size * 0.25, size * 4);
  hg.drawImage(NOISE, size * 0.25, 0, size * 0.25, size * 4);
  hg.drawImage(NOISE, size * 0.5, 0, size * 0.25, size * 4);
  hg.drawImage(NOISE, size * 0.75, 0, size * 0.25, size * 4);
  g.globalAlpha = 0.6; g.globalCompositeOperation = 'multiply'; g.drawImage(hc, 0, 0); g.globalAlpha = 1; g.globalCompositeOperation = 'source-over';
  for (let i = 0; i < 200; i++) { g.strokeStyle = `rgba(30,22,16,${rnd(0.2, 0.5)})`; g.lineWidth = rnd(1, 3); const x = rnd(0, size); g.beginPath(); g.moveTo(x, 0); g.bezierCurveTo(x + rnd(-10, 10), size / 3, x + rnd(-10, 10), size * 2 / 3, x, size); g.stroke(); }
  return { map: set(c, true), normalMap: set(normalFrom(hc, 4), false) };
}
function grassTex(size = 512) {
  const c = cv(size), g = c.getContext('2d');
  g.fillStyle = '#35521f'; g.fillRect(0, 0, size, size);
  for (let i = 0; i < 6000; i++) {
    const x = rnd(0, size), y = rnd(0, size), l = rnd(4, 12);
    g.strokeStyle = `rgb(${rnd(40, 90) | 0},${rnd(95, 150) | 0},${rnd(30, 60) | 0})`; g.lineWidth = 1.2;
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + rnd(-3, 3), y - l); g.stroke();
  }
  return { map: set(c, true) };
}
function soilTex(size = 256) {
  const c = cv(size), g = c.getContext('2d');
  g.fillStyle = '#3a2c21'; g.fillRect(0, 0, size, size);
  noiseOver(g, size, NOISE_FINE, 0.6, 'overlay');
  for (let i = 0; i < 400; i++) { g.fillStyle = `rgba(${rnd(80, 130) | 0},${rnd(70, 110) | 0},${rnd(60, 90) | 0},0.6)`; g.fillRect(rnd(0, size), rnd(0, size), 2, 2); }
  return { map: set(c, true) };
}

// tileable water detail normals
function waterNormals(size = 512) {
  const f = noiseField(size, 8, 5, 0.55);
  const hc = fieldCanvas(f, size, 0.2, 0.8);
  const t = tex(normalFrom(hc, 1.2), false);
  return t;
}

function mistTex(size = 256) {
  const c = cv(size), g = c.getContext('2d');
  const gr = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.5, 'rgba(255,255,255,0.45)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, size, size);
  g.globalCompositeOperation = 'destination-in';
  g.globalAlpha = 0.85; g.drawImage(NOISE, 0, 0, size, size);
  const t = tex(c, true, false); return t;
}
function glowTex(size = 128) {
  const c = cv(size), g = c.getContext('2d');
  const gr = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.15, 'rgba(255,255,255,0.6)'); gr.addColorStop(0.4, 'rgba(255,255,255,0.12)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, size, size);
  return tex(c, true, false);
}
function beamTex(w = 64, h = 256) {
  const c = cv(w, h), g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, h);
  gr.addColorStop(0, 'rgba(255,255,255,0.9)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
  const gx = g.createLinearGradient(0, 0, w, 0);
  gx.addColorStop(0, 'rgba(0,0,0,1)'); gx.addColorStop(0.5, 'rgba(0,0,0,0)'); gx.addColorStop(1, 'rgba(0,0,0,1)');
  g.globalCompositeOperation = 'destination-out'; g.fillStyle = gx; g.fillRect(0, 0, w, h);
  return tex(c, true, false);
}
// dome glass frit: hex pattern alpha (white = opaque frit)
function domeFrit(size = 512) {
  const c = cv(size), g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, size, size);
  const r = size / 4, w = r * Math.sqrt(3), hstep = r * 1.5;
  g.strokeStyle = '#fff'; g.lineWidth = 7;
  for (let row = -1; row < 4; row++) for (let col = -1; col < 4; col++) {
    const x = col * w + (row % 2 ? w / 2 : 0), y = row * hstep;
    hexPath(g, x, y, r); g.stroke();
  }
  return tex(c, false);
}
function caustic(size = 256) {
  const c = cv(size), g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, size, size);
  g.strokeStyle = 'rgba(255,255,255,0.7)';
  for (let i = 0; i < 60; i++) { g.lineWidth = rnd(1, 3); g.beginPath(); const x = rnd(0, size), y = rnd(0, size); g.arc(x, y, rnd(10, 40), rnd(0, 6), rnd(0, 6) + 2); g.stroke(); }
  return tex(c, true);
}

// ---------------------------------------------------------------- signs
export function signTex(lines, opt = {}) {
  const w = opt.w || 1024, h = opt.h || 256;
  const c = cv(w, h), g = c.getContext('2d');
  g.fillStyle = opt.bg || 'rgba(0,0,0,0)'; g.fillRect(0, 0, w, h);
  if (opt.border) { g.strokeStyle = opt.border; g.lineWidth = 6; g.strokeRect(8, 8, w - 16, h - 16); }
  let y = opt.top || h * 0.5;
  const n = lines.length;
  for (let i = 0; i < n; i++) {
    const L = lines[i];
    g.font = L.font || `600 ${L.size || 90}px "Exo 2", "Segoe UI", sans-serif`;
    g.fillStyle = L.color || '#ffffff';
    g.textAlign = L.align || 'center'; g.textBaseline = 'middle';
    if (L.spacing) g.letterSpacing = L.spacing + 'px';
    const x = L.align === 'left' ? (L.x || 40) : (L.align === 'right' ? w - (L.x || 40) : w / 2);
    g.fillText(L.text, x, L.y !== undefined ? L.y : y);
    y += (L.size || 90) * 1.2;
  }
  if (opt.stripe) { g.fillStyle = opt.stripe; g.fillRect(0, h - 14, w, 14); }
  const t = tex(c, true, false);
  t.anisotropy = 4;
  return t;
}

export async function makeTextures(progress) {
  initNoise();
  const T = {};
  const steps = [
    ['white', () => whitePanel(1024)],
    ['whiteClean', () => whitePanel(1024, [236, 239, 242], 0.04, 0.35, false)],
    ['dark', () => darkPanel(1024)],
    ['brushed', () => brushed(512)],
    ['floor', () => floorDark(1024)],
    ['floorLight', () => floorDark(1024, [150, 156, 162], 2)],
    ['deck', () => deck(1024)],
    ['grating', () => grating(512)],
    ['hex', () => hexTex(512)],
    ['hazard', () => hazard(256)],
    ['fabric', () => fabric(256)],
    ['fabricGrey', () => fabric(256, [72, 78, 86])],
    ['leaf', () => leafTex(512)],
    ['bark', () => barkTex(512)],
    ['grass', () => grassTex(512)],
    ['soil', () => soilTex(256)],
  ];
  for (const [k, f] of steps) { T[k] = f(); if (progress) await progress(k); }
  T.waterNormals = waterNormals(512);
  T.mist = mistTex(256);
  T.glow = glowTex(128);
  T.beam = beamTex();
  T.frit = domeFrit(512);
  T.caustic = caustic();
  return T;
}
