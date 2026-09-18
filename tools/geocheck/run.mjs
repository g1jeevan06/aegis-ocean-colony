// Overlapping-face audit runner.
//   node tools/geocheck/run.mjs [report.json]
// Serves the repo, loads the game unbundled (so stack traces point at src/
// lines) with geocheck.js recording every static piece, and prints every pair
// of source lines whose faces sit on top of each other.
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import os from 'node:os';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..', '..');
const out = process.argv[2];
// debug page: the real index.html, but loading src/ as ES modules
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
html = html.replace('<script src="dist/game.js"></script>',
  '<script type="importmap">{"imports":{"three":"/node_modules/three/build/three.module.js","three/addons/":"/node_modules/three/examples/jsm/"}}</script>\n<script src="/tools/geocheck/geocheck.js"></script>\n<script type="module" src="/src/main.js"></script>');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.mp3': 'audio/mpeg' };
const srv = http.createServer((req, res) => {
  const p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/check.html') { res.writeHead(200, { 'content-type': 'text/html' }); res.end(html); return; }
  const f = path.join(root, p);
  if (!f.startsWith(root) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
}).listen(0);
const httpPort = srv.address().port;

const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const port = 9800 + Math.floor(Math.random() * 150);
const udd = fs.mkdtempSync(path.join(os.tmpdir(), 'geocheck-'));
const proc = spawn(chrome, ['--headless=new', '--use-angle=d3d11', '--ignore-gpu-blocklist', `--remote-debugging-port=${port}`, `--user-data-dir=${udd}`, 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
let target;
for (let i = 0; i < 100 && !target; i++) { try { target = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find(t => t.type === 'page'); } catch (e) { /* not up yet */ } await sleep(200); }
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise(r => { ws.onopen = r; });
let id = 0; const pend = new Map();
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } if (d.method === 'Runtime.exceptionThrown') console.log('EXC', JSON.stringify(d.params.exceptionDetails).slice(0, 400)); };
const send = (method, params = {}) => new Promise(r => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async (e) => (await send('Runtime.evaluate', { expression: e, awaitPromise: true, returnByValue: true })).result?.result?.value;
await send('Runtime.enable'); await send('Page.enable');
await send('Page.navigate', { url: `http://127.0.0.1:${httpPort}/check.html` });
for (let i = 0; i < 300; i++) { await sleep(500); if (await ev(`!!(window.AEGIS && document.getElementById('title') && !document.getElementById('title').classList.contains('hidden'))`)) break; }
const t0 = Date.now(); const r = await ev('__GEO_ANALYZE()'); console.log('analyze ms', Date.now() - t0);
console.log(`${r.recs} pieces · ${r.tris} triangles · ${r.pairs} overlapping pairs (${r.diffMat} with different materials)\n`);
for (const g of r.groups) console.log(`${g.sameMat ? 'same' : 'DIFF'}  ${g.area.toFixed(2).padStart(7)} m²  x${String(g.count).padEnd(4)} gap ${g.maxGap}  @${g.at.join(',')}\n   ${g.a}\n   ${g.b}`);
if (out) fs.writeFileSync(out, JSON.stringify(r, null, 1));
ws.close(); proc.kill(); srv.close();
await sleep(400);
try { fs.rmSync(udd, { recursive: true, force: true }); } catch (e) { /* locked */ }
process.exit(0);
