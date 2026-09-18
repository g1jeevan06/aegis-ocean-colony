// Boot: build the colony, the sea and the sky, then run the loop.
import * as THREE from 'three';
import { makeRenderer, makeSky, makeSun, makeMist, makeComposer, SUN_DIR, FOG_COLOR, MOODS } from './env.js';
import { makeTextures } from './textures.js';
import { makeMaterials } from './materials.js';
import { makeScreens } from './screens.js';
import { Builder } from './builder.js';
import { CollisionWorld } from './physics.js';
import { buildColony } from './colony.js';
import { buildSatellites } from './satellites.js';
import { buildExterior } from './exterior.js';
import { makeOcean } from './ocean.js';
import { createLife } from './vehicles.js';
import { makeSpray } from './spray.js';
import { underwaterMaterials, buildUnderwater, makeUnderwater } from './underwater.js';
import { Game } from './game.js';
import { UI } from './ui.js';
import { Audio } from './audio.js';
import { exportLevel, download } from './export.js';

const wait = () => new Promise(r => setTimeout(r, 0));

async function boot() {
  const ui = new UI();
  const tick = async (f, msg) => { ui.progress(f, msg); await wait(); };
  const canvas = document.getElementById('view');
  let renderer;
  try { renderer = makeRenderer(canvas); }
  catch (e) { ui.progress(0, 'WebGL is not available on this device/browser.'); throw e; }
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(FOG_COLOR, 0.00085);
  const camera = new THREE.PerspectiveCamera(72, innerWidth / innerHeight, 0.12, 14000); // near 0.12 (player radius 0.34): 2.4x the depth precision of 0.05
  camera.layers.enable(1);
  camera.layers.enable(2);
  scene.add(camera);

  await tick(0.02, 'Generating surface materials…');
  let n = 0;
  const T = await makeTextures(async (k) => { n++; await tick(0.02 + n / 19 * 0.36, 'Texturing · ' + k); });
  const M = makeMaterials(T);
  const screens = makeScreens();

  await tick(0.40, 'Laying the hull and decks…');
  const world = new CollisionWorld(6);
  const B = new Builder(world);
  B.warmSwap = M.warmSwap;
  const ctx = { scene, M, marks: {}, doors: [], creatures: [], pods: [], holoSpots: [], blinkers: [], turbines: [], foam: [] };
  buildColony(B, M, screens.S, ctx);
  await tick(0.60, 'Floating the satellite platforms…');
  buildSatellites(B, M, screens.S, ctx);
  buildExterior(B, M, screens.S, ctx);
  const U = underwaterMaterials(M);
  ctx.uwBeams = [];
  buildUnderwater(B, M, U, ctx);
  await tick(0.70, 'Merging geometry…');
  const meshes = B.finalize(scene);
  console.info(`[AEGIS] hidden faces: ${B.dedupe.cut} triangles trimmed into ${B.dedupe.added} in ${B.dedupe.pieces} pieces, ${B.dedupe.skipped} left whole (${B.dedupe.ms} ms)`);
  console.info(`[AEGIS] ${meshes.length} batches, ${(B.tris / 1e6).toFixed(2)}M tris, ${world.all.length} colliders, ${B.lights.length} light anchors`);

  await tick(0.78, 'Lighting the sky…');
  const skyCtl = makeSky(scene, renderer);
  const { sky, envCube } = skyCtl;
  const sunCtl = makeSun(scene);
  const ocean = makeOcean(renderer, envCube, T.waterNormals, SUN_DIR, 2);
  scene.add(ocean.mesh);
  ctx.foam.slice(0, 8).forEach((f, i) => ocean.discs[i].set(f[0], f[1], f[2], f[3]));
  ocean.mesh.getReflectionCamera(camera).layers.set(0);
  const mist = makeMist(scene, T.mist);
  // spray emitters: the colony hull (octagon, flat sides at 54.6 m) and every satellite / buoy ring
  const hull = [];
  for (let k = 0; k < 8; k++) {
    const a = k * Math.PI / 4, nx = Math.sin(a), nz = Math.cos(a), tx = nz, tz = -nx, half = 54.6 * Math.tan(Math.PI / 8);
    for (let u = -half; u <= half; u += 3) hull.push([nx * 54.8 + tx * u, nz * 54.8 + tz * u, nx, nz]);
  }
  for (const [x, z, r] of ctx.foam) for (let i = 0, n = Math.max(6, Math.round(r * 2 * Math.PI / 3)); i < n; i++) { const a = i / n * Math.PI * 2; hull.push([x + Math.sin(a) * r, z + Math.cos(a) * r, Math.sin(a), Math.cos(a)]); }
  const spray = makeSpray(scene, T.mist, hull);

  await tick(0.86, 'Waking the drones…');
  const a3 = 3 * Math.PI / 4;
  ctx.gantryAxis = new THREE.Vector3(Math.cos(a3), 0, -Math.sin(a3));
  ctx.gantryYaw = a3;
  const life = createLife(scene, M, T, ctx, ocean);
  (ctx.staticGlows || []).forEach((g, i) => { const v = ocean.glows[32 + i]; if (v) v.set(g[0], g[1], g[2], g[3]); });
  const post = makeComposer(renderer, scene, camera);
  // below the surface: legs, seabed and sea life are only drawn while the camera is under water
  const underMeshes = meshes.filter(m => m.name.startsWith('under_'));
  for (const m of underMeshes) m.visible = false;
  const uw = makeUnderwater(scene, M, U, T, ctx, SUN_DIR);
  const aboveFog = scene.fog;
  let under = false, mistOn = true, aoOn = true;
  const setUnder = (on) => {
    under = on; game.underwater = on;
    for (const m of underMeshes) m.visible = on;
    uw.group.visible = on;
    scene.fog = on ? uw.fog : aboveFog;
    sky.visible = !on; ocean.mesh.visible = !on;
    scene.background = on ? uw.water : null; // no black gap at the far edge
    renderer.toneMappingExposure = (MOODS[game.settings.mood] || MOODS.sunset).exposure * (on ? 1.5 : 1); mist.group.visible = !on && mistOn; spray.points.visible = !on && mistOn;
    sunCtl.hemi.intensity = on ? 1.1 : sunCtl.hemi.userData.base; sunCtl.hemi.color.set(on ? 0x6fd6d0 : sunCtl.hemi.userData.sky);
    post.grade.uniforms.uUnder.value = on ? 1 : 0;
    post.ao.enabled = !on && aoOn; // at the murky horizon the depth-based shadowing turns into a dark band
  };
  const audio = new Audio();
  const game = new Game({ renderer, scene, camera, world, ctx, M, T, screens, life, ocean, audio, ui, anchors: B.lights });

  game.onExport = async () => {
    if (game._exporting) return;
    game._exporting = true;
    ui.toast('Exporting the colony for Unreal… this takes a few seconds', 'warn');
    await wait();
    try {
      const blob = await exportLevel(meshes, (m) => ui.toast(m));
      download(blob, 'AEGIS_Colony.glb');
      ui.toast('Saved AEGIS_Colony.glb · ' + (blob.size / 1048576).toFixed(1) + ' MB', 'ok');
    } catch (e) { console.error(e); ui.toast('Export failed: ' + e.message, 'bad'); }
    game._exporting = false;
  };
  window.__exportLevel = () => exportLevel(meshes);

  let pr = 1;
  const resize = () => {
    const w = innerWidth, h = innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    post.composer.setPixelRatio(renderer.getPixelRatio());
    post.composer.setSize(w, h);
    ocean.resize(w * pr, h * pr);
  };
  game.onQuality = (q) => {
    const dpr = window.devicePixelRatio || 1;
    pr = [Math.min(dpr, 1) * 0.7, Math.min(dpr, 1), Math.min(dpr, 1.25), Math.min(dpr, 2)][q] || 1;
    renderer.setPixelRatio(pr);
    sunCtl.setShadowSize([0, 2048, 4096, 4096][q]);
    ocean.setPlanar(q >= 2, q >= 3 ? 0.75 : 0.5);
    post.bloom.enabled = q >= 1;
    aoOn = q >= 2;
    post.ao.enabled = aoOn && !under;
    mistOn = q >= 1;
    mist.group.visible = mistOn && !under;
    spray.points.visible = mistOn && !under;
    resize();
  };
  // first-run default: Medium on small / touch screens
  try { if (!localStorage.getItem('aegis.settings') && (matchMedia('(pointer:coarse)').matches || innerWidth < 900)) game.settings.q = 1; } catch (e) { /* ignore */ }
  // time of day
  const seaBody = [ocean.uniforms.uDeep.value.clone(), ocean.uniforms.uShallow.value.clone()];
  game.onMood = (name) => {
    const m = MOODS[name] || MOODS.sunset;
    SUN_DIR.set(...m.sun).normalize(); FOG_COLOR.set(m.fog);
    scene.fog.color.copy(FOG_COLOR); scene.fog.density = m.fogD;
    renderer.toneMappingExposure = m.exposure;
    skyCtl.setMood(m); sunCtl.setMood(m); mist.setColor(m.mist);
    sunCtl.hemi.userData.base = m.hemiI; sunCtl.hemi.userData.sky = m.hemiSky; if (under) setUnder(true);
    ocean.uniforms.uSunDir.value.copy(SUN_DIR); ocean.uniforms.uSunColor.value.setRGB(...m.seaSun);
    ocean.uniforms.uDeep.value.copy(seaBody[0]).multiplyScalar(m.seaBody); ocean.uniforms.uShallow.value.copy(seaBody[1]).multiplyScalar(m.seaBody);
    spray.setColor(name === 'day' ? 1.5 : 0.62);
    sunCtl.follow(camera.position);
  };
  game.applySettings();
  addEventListener('resize', resize);

  await tick(0.94, 'Compiling shaders…');
  game.updateTitle(0.016, 0);
  sunCtl.follow(new THREE.Vector3(0, 0, 0));
  renderer.compile(scene, camera);
  post.composer.render(0.016);
  await tick(1.0, 'Ready');

  const focus = new THREE.Vector3();
  const clock = new THREE.Clock();
  let t = 0, frames = 0, fpsT = 0;
  renderer.info.autoReset = false;
  window.AEGIS = { game, ctx, world, scene, camera, renderer, life, ocean, M, post, mist, sunCtl, sky };
  function frame() {
    requestAnimationFrame(frame);
    const dt = Math.min(clock.getDelta(), 0.05);
    t += dt;
    game.update(dt, t);
    life.update(t, dt, camera);
    screens.update(dt, t);
    ocean.update(t, camera);
    mist.update(dt, camera);
    spray.update(dt, t, camera);
    const sub = game.mode !== 'title' && game.mode !== 'loading' && camera.position.y < ocean.heightAt(camera.position.x, camera.position.z) - 0.05;
    if (sub !== under) setUnder(sub);
    if (under) uw.update(dt, t, camera);
    if (game.mode === 'title') focus.set(0, 0, 0); else focus.copy(camera.position);
    sunCtl.follow(focus);
    sky.material.uniforms.time && (sky.material.uniforms.time.value = t);
    const ls = M.leaf.userData.shader; if (ls) ls.uniforms.uTime.value = t;
    M.cryoFluid.emissiveIntensity = game.cryoGlow(t);
    M.growLight.emissiveIntensity = 5.0 + Math.sin(t * 0.5) * 0.5;
    post.grade.uniforms.uTime.value = t;
    renderer.info.reset();
    post.composer.render(dt);
    frames++; fpsT += dt;
    if (fpsT > 0.5) { if (game.settings.fps) ui.el.fps.textContent = `${Math.round(frames / fpsT)} FPS · ${renderer.info.render.calls} draws · ${(renderer.info.render.triangles / 1e6).toFixed(2)}M tris`; frames = 0; fpsT = 0; }
  }
  game.showTitle();
  frame();
}

boot().catch((e) => { console.error(e); const s = document.getElementById('load-status'); if (s) s.textContent = 'Error: ' + e.message; });
