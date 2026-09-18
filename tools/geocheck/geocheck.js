// Overlapping-face audit ("double faces" / z-fighting).
// Loaded before the game in tools/geocheck/check.html (see run.mjs).  Every
// static piece the Builder adds is recorded with the source line that made
// it; __GEO_ANALYZE() then finds same-facing faces that lie on the same plane
// and overlap, which is what shows up in game as flickering stripes.
(function () {
  const recs = [];
  const here = /geocheck|builder\.js|props\.js|util\.js/;
  globalThis.__GEO_REC = (g, mat) => {
    const frames = (new Error().stack || '').split('\n').slice(1).map(l => l.trim());
    const site = frames.filter(f => /\/src\//.test(f) && !here.test(f)).slice(0, 2)
      .map(f => { const m = f.match(/at (?:(\S+) )?\(?.*\/src\/([^:]+):(\d+):\d+/); return m ? `${m[2]}:${m[3]}${m[1] ? ' ' + m[1] : ''}` : f; });
    const prop = frames.find(f => /props\.js/.test(f));
    const pm = prop && prop.match(/at (\S+) .*props\.js:(\d+)/);
    recs.push({ g, mat: mat.name || mat.type, transparent: !!mat.transparent, decal: !!mat.polygonOffset, site: site.join(' < ') + (pm ? ` [props ${pm[1]}:${pm[2]}]` : '') });
  };

  globalThis.__GEO_ANALYZE = (opt = {}) => {
    const PLANE_EPS = opt.eps ?? 0.012;   // faces closer than this fight in the depth buffer
    const MIN_AREA = opt.minArea ?? 0.004; // m² of overlap worth reporting
    const tris = []; // [rec, nx,ny,nz,d, ax,ay,az, bx,by,bz, cx,cy,cz]
    recs.forEach((r, ri) => {
      const p = r.g.attributes.position.array;
      for (let i = 0; i < p.length; i += 9) {
        const ax = p[i], ay = p[i + 1], az = p[i + 2], bx = p[i + 3], by = p[i + 4], bz = p[i + 5], cx = p[i + 6], cy = p[i + 7], cz = p[i + 8];
        const ux = bx - ax, uy = by - ay, uz = bz - az, vx = cx - ax, vy = cy - ay, vz = cz - az;
        let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
        const l = Math.hypot(nx, ny, nz);
        if (l < 2e-4) continue; // area < 1e-4
        nx /= l; ny /= l; nz /= l;
        tris.push([ri, nx, ny, nz, nx * ax + ny * ay + nz * az, ax, ay, az, bx, by, bz, cx, cy, cz]);
      }
    });
    // bucket by (quantised normal, plane offset)
    const Q = 40, DQ = 1 / (PLANE_EPS * 2);
    const key = (t, dd) => `${Math.round(t[1] * Q)},${Math.round(t[2] * Q)},${Math.round(t[3] * Q)},${Math.round(t[4] * DQ) + dd}`;
    const buckets = new Map();
    for (const t of tris) { const k = key(t, 0); let b = buckets.get(k); if (!b) buckets.set(k, b = []); b.push(t); }
    // 2D helpers
    const clip = (poly, a, b) => { // keep left of a->b
      const out = [];
      for (let i = 0; i < poly.length; i++) {
        const p = poly[i], q = poly[(i + 1) % poly.length];
        const sp = (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]);
        const sq = (b[0] - a[0]) * (q[1] - a[1]) - (b[1] - a[1]) * (q[0] - a[0]);
        if (sp >= 0) out.push(p);
        if ((sp >= 0) !== (sq >= 0)) { const t = sp / (sp - sq); out.push([p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t]); }
      }
      return out;
    };
    const area = (P) => { let s = 0; for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length]; s += a[0] * b[1] - a[1] * b[0]; } return s / 2; };
    const ccw = (T) => (area(T) < 0 ? [T[0], T[2], T[1]] : T);
    const pairs = new Map();
    for (const [k, list] of buckets) {
      const [qx, qy, qz, qd] = k.split(',').map(Number);
      const cand = list.concat(buckets.get(`${qx},${qy},${qz},${qd + 1}`) || []);
      if (cand.length < 2) continue;
      // plane basis from the bucket normal
      const t0 = list[0], n = [t0[1], t0[2], t0[3]];
      const up = Math.abs(n[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
      let e1 = [up[1] * n[2] - up[2] * n[1], up[2] * n[0] - up[0] * n[2], up[0] * n[1] - up[1] * n[0]];
      const el = Math.hypot(...e1); e1 = e1.map(v => v / el);
      const e2 = [n[1] * e1[2] - n[2] * e1[1], n[2] * e1[0] - n[0] * e1[2], n[0] * e1[1] - n[1] * e1[0]];
      const pr = (t) => [[t[5], t[6], t[7]], [t[8], t[9], t[10]], [t[11], t[12], t[13]]].map(v => [v[0] * e1[0] + v[1] * e1[1] + v[2] * e1[2], v[0] * e2[0] + v[1] * e2[1] + v[2] * e2[2]]);
      const P = cand.map(t => { const T = ccw(pr(t)); const xs = T.map(v => v[0]), ys = T.map(v => v[1]); return { t, T, x0: Math.min(...xs), x1: Math.max(...xs), y0: Math.min(...ys), y1: Math.max(...ys) }; });
      P.sort((a, b) => a.x0 - b.x0);
      const own = new Set(list);
      for (let i = 0; i < P.length; i++) {
        const A = P[i];
        for (let j = i + 1; j < P.length && P[j].x0 < A.x1; j++) {
          const B = P[j];
          if (!own.has(A.t) && !own.has(B.t)) continue; // both from the neighbour bucket: handled there
          if (A.t[0] === B.t[0]) continue; // same primitive
          if (B.y0 > A.y1 || B.y1 < A.y0) continue;
          if (Math.abs(A.t[4] - B.t[4]) > PLANE_EPS) continue;
          if (A.t[1] * B.t[1] + A.t[2] * B.t[2] + A.t[3] * B.t[3] < 0.9995) continue;
          let poly = A.T;
          for (let e = 0; e < 3 && poly.length; e++) poly = clip(poly, B.T[e], B.T[(e + 1) % 3]);
          const ar = poly.length > 2 ? Math.abs(area(poly)) : 0;
          if (ar < 1e-4) continue;
          const [r1, r2] = A.t[0] < B.t[0] ? [A.t[0], B.t[0]] : [B.t[0], A.t[0]];
          const pk = r1 + '|' + r2;
          let e = pairs.get(pk);
          if (!e) pairs.set(pk, e = { r1, r2, area: 0, gap: Math.abs(A.t[4] - B.t[4]), at: [A.t[5], A.t[6], A.t[7]] });
          e.area += ar;
        }
      }
    }
    // group by source-site pair
    const groups = new Map();
    for (const e of pairs.values()) {
      if (e.area < MIN_AREA) continue;
      const a = recs[e.r1], b = recs[e.r2];
      if (a.decal !== b.decal) continue; // a depth-offset decal always wins over its base
      const same = a.mat === b.mat;
      const [s1, s2] = [`${a.site} {${a.mat}}`, `${b.site} {${b.mat}}`].sort();
      const gk = s1 + '  <>  ' + s2;
      let g = groups.get(gk);
      if (!g) groups.set(gk, g = { a: s1, b: s2, sameMat: same, count: 0, area: 0, maxGap: 0, at: e.at.map(v => +v.toFixed(2)) });
      g.count++; g.area += e.area; g.maxGap = Math.max(g.maxGap, e.gap);
    }
    const out = [...groups.values()].sort((x, y) => (x.sameMat - y.sameMat) || y.area - x.area);
    return { recs: recs.length, tris: tris.length, pairs: out.length, diffMat: out.filter(g => !g.sameMat).length, groups: out.map(g => ({ ...g, area: +g.area.toFixed(3), maxGap: +g.maxGap.toFixed(4) })) };
  };
})();
