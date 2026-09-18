// Procedural Web Audio: ocean + wind outdoors, machine hum indoors, footsteps,
// doors, UI blips, the lift and nearby aircraft.  No audio files needed.
export class Audio {
  constructor() { this.ctx = null; this.vol = 0.8; this.ready = false; }
  start() {
    if (this.ctx) { this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const c = this.ctx = new AC();
    this.master = c.createGain(); this.master.gain.value = this.vol; this.master.connect(c.destination);
    const noise = c.createBuffer(1, c.sampleRate * 4, c.sampleRate), d = noise.getChannelData(0);
    let b = 0;
    for (let i = 0; i < d.length; i++) { const w = Math.random() * 2 - 1; b = (b + 0.02 * w) / 1.02; d[i] = b * 3.5; }
    const white = c.createBuffer(1, c.sampleRate * 2, c.sampleRate), wd = white.getChannelData(0);
    for (let i = 0; i < wd.length; i++) wd[i] = Math.random() * 2 - 1;
    this.whiteBuf = white;
    const loop = (buf) => { const s = c.createBufferSource(); s.buffer = buf; s.loop = true; s.start(); return s; };
    // ocean: brown noise, lowpass, slow swell LFO
    this.ocean = c.createGain(); this.ocean.gain.value = 0; this.ocean.connect(this.master);
    const of = c.createBiquadFilter(); of.type = 'lowpass'; of.frequency.value = 520;
    loop(noise).connect(of); of.connect(this.ocean);
    const lfo = c.createOscillator(); lfo.frequency.value = 0.09; const lg = c.createGain(); lg.gain.value = 180; lfo.connect(lg); lg.connect(of.frequency); lfo.start();
    // wind
    this.wind = c.createGain(); this.wind.gain.value = 0; this.wind.connect(this.master);
    const wf = c.createBiquadFilter(); wf.type = 'bandpass'; wf.frequency.value = 700; wf.Q.value = 0.6;
    loop(white).connect(wf); wf.connect(this.wind);
    const lfo2 = c.createOscillator(); lfo2.frequency.value = 0.05; const lg2 = c.createGain(); lg2.gain.value = 300; lfo2.connect(lg2); lg2.connect(wf.frequency); lfo2.start();
    // interior hum
    this.hum = c.createGain(); this.hum.gain.value = 0; this.hum.connect(this.master);
    for (const [f, g] of [[55, 0.35], [110, 0.12], [165, 0.05]]) { const o = c.createOscillator(); o.frequency.value = f; const og = c.createGain(); og.gain.value = g; o.connect(og); og.connect(this.hum); o.start(); }
    const hf = c.createBiquadFilter(); hf.type = 'lowpass'; hf.frequency.value = 260; loop(noise).connect(hf); const hg = c.createGain(); hg.gain.value = 0.5; hf.connect(hg); hg.connect(this.hum);
    // aircraft
    this.air = c.createGain(); this.air.gain.value = 0; this.air.connect(this.master);
    const af = c.createBiquadFilter(); af.type = 'bandpass'; af.frequency.value = 240; af.Q.value = 1.2;
    loop(white).connect(af); af.connect(this.air);
    const saw = c.createOscillator(); saw.type = 'sawtooth'; saw.frequency.value = 92; const sg = c.createGain(); sg.gain.value = 0.05; saw.connect(sg); sg.connect(this.air); saw.start();
    // lift
    this.liftG = c.createGain(); this.liftG.gain.value = 0; this.liftG.connect(this.master);
    const lo = c.createOscillator(); lo.type = 'triangle'; lo.frequency.value = 140; lo.connect(this.liftG); lo.start(); this.liftOsc = lo;
    this.ready = true;
  }
  setVolume(v) { this.vol = v; if (this.master) this.master.gain.value = v; }
  mix(out, indoor, air, lift, dt) {
    if (!this.ready) return;
    const t = this.ctx.currentTime, k = 0.25;
    this.ocean.gain.setTargetAtTime(out * 0.55 + indoor * 0.05, t, k);
    this.wind.gain.setTargetAtTime(out * 0.12, t, k);
    this.hum.gain.setTargetAtTime(indoor * 0.07, t, k);
    this.air.gain.setTargetAtTime(air * 0.35, t, 0.15);
    this.liftG.gain.setTargetAtTime(lift ? 0.04 : 0, t, 0.2);
    if (lift) this.liftOsc.frequency.setTargetAtTime(lift > 0 ? 170 : 120, t, 0.5);
  }
  blip(f = 880, dur = 0.08, type = 'sine', vol = 0.15) {
    if (!this.ready) return;
    const c = this.ctx, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.value = f; g.gain.value = vol;
    g.gain.setTargetAtTime(0, c.currentTime + dur * 0.5, dur * 0.4);
    o.connect(g); g.connect(this.master); o.start(); o.stop(c.currentTime + dur * 3);
  }
  chord(fs, dur = 0.5) { fs.forEach((f, i) => setTimeout(() => this.blip(f, dur, 'sine', 0.1), i * 90)); }
  noiseHit(freq = 800, dur = 0.12, vol = 0.2, type = 'bandpass', sweep = 0) {
    if (!this.ready) return;
    const c = this.ctx, s = c.createBufferSource(); s.buffer = this.whiteBuf;
    const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = 1.5;
    if (sweep) f.frequency.exponentialRampToValueAtTime(Math.max(40, freq + sweep), c.currentTime + dur);
    const g = c.createGain(); g.gain.value = vol; g.gain.setTargetAtTime(0, c.currentTime + dur * 0.3, dur * 0.35);
    s.connect(f); f.connect(g); g.connect(this.master);
    s.start(0, Math.random() * 1.5); s.stop(c.currentTime + dur * 2.5);
  }
  step(surface) {
    if (surface === 'metal') this.noiseHit(2400 + Math.random() * 600, 0.07, 0.12, 'bandpass');
    else if (surface === 'soft') this.noiseHit(500 + Math.random() * 100, 0.08, 0.06, 'lowpass');
    else this.noiseHit(1200 + Math.random() * 300, 0.06, 0.09, 'bandpass');
  }
  door() { this.noiseHit(1800, 0.45, 0.12, 'bandpass', -1500); }
  denied() { this.blip(220, 0.12, 'square', 0.06); setTimeout(() => this.blip(180, 0.16, 'square', 0.06), 130); }
}
