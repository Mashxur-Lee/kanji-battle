// 0.9.9.8: every staff has a cast sound of its own, played when your answer is right in a battle (and when you
// tap a staff in Customize). It gets bigger with the combo: more notes, a deeper floor, a longer tail.
// 0.9.9.9.9.1: remade. A staff and its seasonal colours sound alike now (the Jade staff is an Ember staff, so it
// burns like one; Blossom and Moon grow like the Verdant, Frost and Abyss sound like deep water like the Tide), and
// each staff has three spells that take turns, so a long battle doesn't ring the same sound over and over:
//   Verdant — a wooden knock, leaves rushing in, a chord of soft bells that blooms; a vine's whip; a deep grove drum
//             with plucked strings. With the combo, the chord climbs (each right answer a step higher).
//   Ember   — a fireball: the whoosh, the blast, the boom and the crackle; a roaring flare; sparks that kindle.
//   Tide    — the Abyss sound kept for the whole staff: a sonar ping, slow bubbles, a deep swell; a current of rising
//             bubbles; a wave that crashes over a glassy ping.
//   Storm   — the thunder kept: an arc, the crack, the rumble; chain lightning; one great thunderclap.
//   Void    — the air drawn in, a sub drop that falls through the floor, a dark chord sliding down; a pull with
//             beating tones and an implosion; stars falling over a deep choir.
// Everything is synthesised (no audio files). The functions take any audio context, so the same sounds can also be
// rendered offline (to listen to them as files, and to check their loudness).

/** where a sound goes: the context, the dry bus and the reverb send */
export interface Out { c: BaseAudioContext; dry: AudioNode; wet: AudioNode }
type Sig = (o: Out, t: number, step: number) => void;

const midi = (n: number) => 440 * 2 ** ((n - 69) / 12);
/** how far each combo step lifts a staff's notes: up the major pentatonic, like a run of kills */
const RISE = [0, 2, 4, 7, 9];

/** a gain with an envelope, to the dry bus (and the reverb), panned left (−1) to right (1) */
function env(o: Out, at: number, peak: number, attack: number, dur: number, wet = 0, pan = 0) {
  const c = o.c, g = c.createGain();
  g.gain.setValueAtTime(0.0001, at);
  g.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), at + Math.max(0.001, attack));
  g.gain.exponentialRampToValueAtTime(0.0001, at + Math.max(attack + 0.01, dur));
  let out: AudioNode = g;
  if (pan && (c as BaseAudioContext & { createStereoPanner?: () => StereoPannerNode }).createStereoPanner) {
    const p = c.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan)); g.connect(p); out = p;
  }
  out.connect(o.dry);
  if (wet > 0) { const s = c.createGain(); s.gain.value = wet; out.connect(s).connect(o.wet); }
  return g;
}

interface OscOpts { to?: number; toAt?: number; attack?: number; wet?: number; detune?: number; lp?: number; pan?: number }
function osc(o: Out, type: OscillatorType, f: number, at: number, dur: number, peak: number, opts: OscOpts = {}) {
  const v = o.c.createOscillator();
  v.type = type;
  v.frequency.setValueAtTime(f, at);
  if (opts.to) v.frequency.exponentialRampToValueAtTime(opts.to, at + (opts.toAt ?? dur));
  if (opts.detune) v.detune.value = opts.detune;
  const g = env(o, at, peak, opts.attack ?? 0.005, dur, opts.wet, opts.pan);
  if (opts.lp) { const f2 = o.c.createBiquadFilter(); f2.type = 'lowpass'; f2.frequency.value = opts.lp; v.connect(f2).connect(g); } else v.connect(g);
  v.start(at); v.stop(at + dur + 0.05);
}

/** a soft saturator (warmth and grit for fire and thunder); `k` is the drive */
function drive(o: Out, k: number): AudioNode {
  const c = o.c as BaseAudioContext & { createWaveShaper?: () => WaveShaperNode };
  if (!c.createWaveShaper) return o.c.createGain();
  const ws = c.createWaveShaper(), n = 512, curve = new Float32Array(n);
  for (let i = 0; i < n; i++) { const x = (i / (n - 1)) * 2 - 1; curve[i] = Math.tanh(k * x) / Math.tanh(k); }
  ws.curve = curve; ws.oversample = '2x';
  return ws;
}

interface NoiseFilter { type: BiquadFilterType; f: number; to?: number; q?: number; /** the filter opens to `peakF` at `peakAt` (0..1), then closes to `to` */ peakF?: number; peakAt?: number }
/** filtered noise; `shape` gives each sample's level over 0..1 of the length */
function noise(o: Out, at: number, dur: number, peak: number, filter: NoiseFilter, shape: (x: number) => number = (x) => 1 - x, wet = 0, opts: { drive?: number; pan?: number } = {}) {
  const c = o.c, n = Math.max(1, Math.ceil(c.sampleRate * dur));
  const buf = c.createBuffer(1, n, c.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * shape(i / n);
  const src = c.createBufferSource(); src.buffer = buf;
  const f = c.createBiquadFilter(); f.type = filter.type; f.frequency.setValueAtTime(filter.f, at); if (filter.q) f.Q.value = filter.q;
  if (filter.peakF) {
    f.frequency.exponentialRampToValueAtTime(filter.peakF, at + dur * (filter.peakAt ?? 0.4));
    f.frequency.exponentialRampToValueAtTime(filter.to ?? filter.f, at + dur);
  } else if (filter.to) f.frequency.exponentialRampToValueAtTime(filter.to, at + dur);
  const g = c.createGain(); g.gain.value = peak;
  let chain: AudioNode = src.connect(f);
  if (opts.drive) { const ws = drive(o, opts.drive); chain = chain.connect(ws); }
  chain.connect(g);
  let out: AudioNode = g;
  if (opts.pan && (c as BaseAudioContext & { createStereoPanner?: () => StereoPannerNode }).createStereoPanner) { const p = c.createStereoPanner(); p.pan.value = opts.pan; g.connect(p); out = p; }
  out.connect(o.dry);
  if (wet > 0) { const s = c.createGain(); s.gain.value = wet; out.connect(s).connect(o.wet); }
  src.start(at);
}

/** crackles: short random clicks (fire, frost, leaves) — `density` clicks a second */
function crackle(o: Out, at: number, dur: number, density: number, peak: number, hp: number, fade: (x: number) => number = (x) => 1 - x) {
  const c = o.c, n = Math.ceil(c.sampleRate * dur);
  const buf = c.createBuffer(1, n, c.sampleRate), d = buf.getChannelData(0);
  const clicks = Math.round(density * dur);
  for (let k = 0; k < clicks; k++) {
    const i0 = Math.floor(Math.random() * n), len = 20 + Math.floor(Math.random() * 120), a = (0.3 + Math.random() * 0.7) * fade(i0 / n);
    for (let i = 0; i < len && i0 + i < n; i++) d[i0 + i] += (Math.random() * 2 - 1) * a * (1 - i / len) ** 2;
  }
  const src = c.createBufferSource(); src.buffer = buf;
  const f = c.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = hp;
  const g = c.createGain(); g.gain.value = peak;
  src.connect(f).connect(g).connect(o.dry);
  src.start(at);
}

/** a plucked string (Karplus–Strong): harp, koto. `bright` 0..1 */
function pluck(o: Out, f: number, at: number, dur: number, peak: number, bright = 0.5, wet = 0.4) {
  const c = o.c, n = Math.ceil(c.sampleRate * dur), p = Math.max(2, Math.round(c.sampleRate / f));
  const buf = c.createBuffer(1, n, c.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < p; i++) d[i] = Math.random() * 2 - 1;
  const keep = 0.996 - (1 - bright) * 0.006, mix = 0.5 + bright * 0.45;
  for (let i = p; i < n; i++) d[i] = keep * (mix * d[i - p] + (1 - mix) * d[i - p + 1]);
  for (let i = 0; i < Math.min(n, 64); i++) d[i] *= i / 64; // (no click at the start)
  const src = c.createBufferSource(); src.buffer = buf;
  // (it has faded out well before the end of its buffer: a string still ringing when the sound stops would click)
  const g = c.createGain(); g.gain.setValueAtTime(peak, at); g.gain.setTargetAtTime(0.0001, at + dur * 0.35, dur * 0.12);
  src.connect(g).connect(o.dry);
  if (wet > 0) { const s = c.createGain(); s.gain.value = wet; g.connect(s).connect(o.wet); }
  src.start(at);
}

/** a struck bar or bell from its partials (ratio, level, length) */
function strike(o: Out, f: number, at: number, peak: number, partials: ReadonlyArray<readonly [number, number, number]>, wet = 0.5, pan = 0) {
  for (const [r, lv, len] of partials) osc(o, 'sine', f * r, at, len, peak * lv, { attack: 0.002, wet, pan });
}
const MARIMBA = [[1, 1, 0.5], [4, 0.24, 0.14], [9.9, 0.06, 0.05]] as const; // wood: the 4th and 10th partials
const SOFTBELL = [[1, 1, 1.3], [2, 0.22, 0.6], [3.01, 0.07, 0.35], [4.2, 0.04, 0.2]] as const; // a clear, gentle bell
const GLASS = [[1, 1, 0.9], [2.32, 0.4, 0.5], [4.25, 0.18, 0.3], [6.63, 0.08, 0.18]] as const; // bright, inharmonic
const CELESTA = [[1, 1, 1.1], [2, 0.18, 0.5], [3, 0.06, 0.25]] as const;

/** a wave or a gust: noise through a filter that opens and closes */
function wash(o: Out, at: number, dur: number, peak: number, lo: number, hi: number) {
  noise(o, at, dur, peak, { type: 'lowpass', f: lo, peakF: hi, peakAt: 0.4, to: lo, q: 0.7 }, (x) => Math.sin(Math.PI * x) ** 1.5, 0.3);
}
/** a drop into water: a short sine that rises fast */
function drop(o: Out, at: number, f: number, peak: number, pan = 0) {
  osc(o, 'sine', f, at, 0.09, peak, { to: f * 2.6, toAt: 0.05, attack: 0.002, wet: 0.35, pan });
}
/** an electric arc: a buzzing saw jumping about in pitch */
function zap(o: Out, at: number, dur: number, peak: number, centre = 2200) {
  const c = o.c, v = c.createOscillator(); v.type = 'sawtooth';
  for (let x = 0; x < dur; x += 0.012) v.frequency.setValueAtTime(180 + Math.random() * 900, at + x);
  const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = centre; bp.Q.value = 0.8;
  const g = env(o, at, peak, 0.003, dur, 0.2);
  v.connect(bp).connect(g); v.start(at); v.stop(at + dur + 0.05);
}
/** an impact: a sine that falls fast (a drum's body), with a click on top */
function thump(o: Out, at: number, f0: number, f1: number, dur: number, peak: number, click = 0.25) {
  osc(o, 'sine', f0, at, dur, peak, { to: f1, toAt: Math.min(dur, 0.3), attack: 0.003 });
  if (click > 0) noise(o, at, 0.025, peak * click, { type: 'lowpass', f: 3000 }, (x) => (1 - x) ** 2);
}
/** a soft chord held under a sound: detuned pairs, slow to rise */
function pad(o: Out, at: number, notes: number[], dur: number, peak: number, type: OscillatorType = 'triangle', lp = 2000, wet = 0.6) {
  notes.forEach((n, k) => { for (const d of [-7, 7]) osc(o, type, midi(n), at, dur, peak, { attack: dur * 0.22, detune: d, lp, wet, pan: (k - (notes.length - 1) / 2) * 0.35 }); });
}
const spread = (k: number, n: number) => (n > 1 ? (k / (n - 1)) * 1.2 - 0.6 : 0); // (notes of a chord across the stereo)

const SETS: Record<string, Sig[]> = {
  // ── Verdant (Blossom, Moon) ─────────────────────────────────────────────────────────────────────────────────
  verdant: [
    // bloom: a low wooden knock, the leaves rushing in, then a chord of soft bells opening, warm underneath
    (o, t, s) => {
      const r = 64 + RISE[s];
      thump(o, t, 190, 85, 0.3, 0.3, 0.3);
      noise(o, t, 0.24, 0.1, { type: 'bandpass', f: 500, to: 3600, q: 1.3 }, (x) => x ** 1.3 * 1.4, 0.3); // leaves rushing in
      crackle(o, t + 0.05, 0.55, 220, 0.055, 3200, (x) => Math.sin(Math.PI * x));
      const bloom = t + 0.17;
      const chord = [0, 7, 12, 16, 19, 24].slice(0, 4 + Math.min(2, s));
      chord.forEach((n, k) => strike(o, midi(r + n), bloom + k * 0.032, 0.13 - k * 0.012, SOFTBELL, 0.7, spread(k, chord.length)));
      pad(o, bloom, [r - 12, r - 5, r], 1.2 + s * 0.15, 0.022, 'triangle', 1800, 0.6);
      noise(o, bloom, 0.9, 0.03, { type: 'highpass', f: 7000 }, (x) => (1 - x) ** 2, 0.7); // the air sparkles
      if (s >= 1) osc(o, 'sine', midi(r - 24), t, 0.8 + s * 0.15, 0.1 + s * 0.02, { attack: 0.02, wet: 0.2 });
      if (s >= 3) { strike(o, midi(r + 28), bloom + 0.22, 0.05, SOFTBELL, 0.9, -0.4); strike(o, midi(r + 31), bloom + 0.3, 0.04, SOFTBELL, 0.9, 0.4); }
    },
    // thorn: a vine's whip, a woody knock, a bright little chime, the leaves stirring
    (o, t, s) => {
      const r = 64 + RISE[s];
      noise(o, t, 0.1, 0.26, { type: 'highpass', f: 1500, to: 7000 }, (x) => Math.sqrt(x) * (1 - x) ** 2 * 3, 0.15, { pan: -0.3 }); // the whip
      crackle(o, t + 0.08, 0.06, 1200, 0.18, 2500);
      strike(o, midi(r - 12), t + 0.08, 0.26, MARIMBA, 0.3);
      strike(o, midi(r - 5), t + 0.12, 0.2, MARIMBA, 0.3, 0.2);
      [12, 16, 19].forEach((n, k) => strike(o, midi(r + n), t + 0.15 + k * 0.05, 0.09, CELESTA, 0.6, spread(k, 3)));
      crackle(o, t + 0.1, 0.45, 180, 0.05, 3000, (x) => Math.sin(Math.PI * x));
      if (s >= 1) thump(o, t + 0.08, 130, 60, 0.4, 0.14 + s * 0.02, 0);
      if (s >= 2) { noise(o, t + 0.24, 0.09, 0.18, { type: 'highpass', f: 1800, to: 8000 }, (x) => Math.sqrt(x) * (1 - x) ** 2 * 3, 0.15, { pan: 0.35 }); strike(o, midi(r + 24), t + 0.32, 0.07, CELESTA, 0.7); }
    },
    // grove: a deep wooden drum, two plucked strings, a breath of wind through the leaves
    (o, t, s) => {
      const r = 62 + RISE[s];
      thump(o, t, 120, 55, 0.5, 0.36, 0.2);
      pluck(o, midi(r), t + 0.04, 1.2, 0.22, 0.6, 0.5);
      pluck(o, midi(r + 7), t + 0.1, 1.2, 0.2, 0.6, 0.5);
      pad(o, t + 0.06, [r - 12, r - 5, r + 4], 1.3 + s * 0.15, 0.02, 'triangle', 1600, 0.6);
      wash(o, t, 1.0, 0.06, 400, 2400);
      crackle(o, t + 0.05, 0.5, 160, 0.05, 3000, (x) => Math.sin(Math.PI * x));
      if (s >= 2) pluck(o, midi(r + 12), t + 0.17, 1.1, 0.18, 0.7, 0.5);
      if (s >= 3) strike(o, midi(r + 24), t + 0.24, 0.06, SOFTBELL, 0.8);
    },
  ],
  // ── Ember (Jade, Maple) ─────────────────────────────────────────────────────────────────────────────────────
  ember: [
    // fireball: the whoosh, the blast, the boom, the crackle
    (o, t, s) => {
      noise(o, t, 0.24, 0.3, { type: 'bandpass', f: 300, to: 2600, q: 0.9 }, (x) => x ** 1.6, 0.1);
      const go = t + 0.2;
      noise(o, go, 0.55 + s * 0.1, 0.34, { type: 'lowpass', f: 4500, to: 500 }, (x) => Math.min(1, x * 40) * (1 - x) ** 1.3, 0.2, { drive: 3 });
      thump(o, go, 120, 42, 0.55 + s * 0.1, 0.36, 0.15);
      crackle(o, go, 0.8 + s * 0.2, 110 + s * 30, 0.26, 1800);
      osc(o, 'sawtooth', midi(40 + RISE[s]), go, 0.5, 0.06, { lp: 700, attack: 0.01, wet: 0.2 });
      noise(o, go + 0.1, 0.9, 0.03, { type: 'highpass', f: 5000 }, (x) => (1 - x) ** 2, 0.3);
      if (s >= 3) thump(o, go + 0.02, 70, 30, 0.8, 0.16, 0);
    },
    // flare: a flick, then a roar that opens and closes, low and warm under it
    (o, t, s) => {
      noise(o, t, 0.03, 0.22, { type: 'highpass', f: 3000 }, (x) => (1 - x) ** 2);
      noise(o, t + 0.02, 0.7 + s * 0.12, 0.3, { type: 'lowpass', f: 700, peakF: 3600, peakAt: 0.25, to: 600 }, (x) => Math.min(1, x * 12) * (1 - x) ** 1.1, 0.25, { drive: 4 });
      osc(o, 'sine', 75, t + 0.02, 0.6, 0.22, { to: 45, attack: 0.01 });
      crackle(o, t + 0.05, 0.9 + s * 0.2, 150 + s * 30, 0.24, 2000);
      osc(o, 'triangle', midi(52 + RISE[s]), t + 0.04, 0.45, 0.05, { attack: 0.02, wet: 0.3 });
      if (s >= 2) noise(o, t + 0.27, 0.5, 0.2, { type: 'lowpass', f: 900, peakF: 3000, peakAt: 0.3, to: 600 }, (x) => Math.min(1, x * 12) * (1 - x) ** 1.2, 0.25, { drive: 3, pan: 0.3 });
      if (s >= 3) thump(o, t + 0.05, 90, 35, 0.7, 0.18, 0);
    },
    // kindle: sparks catch first, then the blast, a warm horn of fire and a long sizzle
    (o, t, s) => {
      crackle(o, t, 0.18, 600, 0.17, 3000);
      const go = t + 0.12;
      noise(o, go, 0.35, 0.3, { type: 'bandpass', f: 900, q: 0.7 }, (x) => Math.min(1, x * 30) * (1 - x) ** 2, 0.2, { drive: 2.5 });
      thump(o, go, 140, 50, 0.45 + s * 0.08, 0.34, 0.2);
      const r = 45 + RISE[s];
      for (const n of [r, r + 7]) osc(o, 'sawtooth', midi(n), go, 0.45, 0.045, { lp: 1200, attack: 0.02, wet: 0.3 });
      noise(o, go + 0.05, 1.0, 0.035, { type: 'highpass', f: 6000 }, (x) => (1 - x) ** 1.5, 0.3);
      crackle(o, go + 0.1, 0.7 + s * 0.2, 90 + s * 30, 0.22, 1800);
      if (s >= 2) osc(o, 'sine', midi(28 + s), go, 0.8, 0.14, { to: midi(24), attack: 0.004 });
    },
  ],
  // ── Tide (Frost, Abyss) ─────────────────────────────────────────────────────────────────────────────────────
  tide: [
    // abyss: a sonar ping into the deep, slow low bubbles, a swell under it (the sound the Abyss staff had)
    (o, t, s) => {
      const k = 2 ** (RISE[s] / 12);
      osc(o, 'sine', 1320 * k, t, 1.2, 0.12, { to: 1250 * k, attack: 0.003, wet: 0.9 });
      osc(o, 'sine', 2640 * k, t, 0.3, 0.02, { attack: 0.003, wet: 0.9 });
      for (let i = 0; i < 2 + s; i++) drop(o, t + 0.15 + i * 0.11 + Math.random() * 0.05, 180 + Math.random() * 160, 0.16, (Math.random() - 0.5) * 0.8);
      osc(o, 'sine', midi(31 + s), t, 1.1 + s * 0.15, 0.16 + s * 0.03, { attack: 0.08, wet: 0.2 });
      wash(o, t + 0.1, 0.9 + s * 0.1, 0.08 + s * 0.02, 150, 700);
      if (s >= 2) osc(o, 'sine', 1980 * k, t + 0.3, 0.9, 0.05, { to: 1900 * k, attack: 0.003, wet: 0.9 });
    },
    // current: two pings a fifth apart, a stream of bubbles rising, a deep swell
    (o, t, s) => {
      const k = 2 ** (RISE[s] / 12);
      osc(o, 'sine', 990 * k, t, 1.0, 0.11, { to: 960 * k, attack: 0.003, wet: 0.9, pan: -0.25 });
      osc(o, 'sine', 1485 * k, t + 0.12, 0.9, 0.08, { to: 1450 * k, attack: 0.003, wet: 0.9, pan: 0.25 });
      const n = 4 + s * 2;
      for (let i = 0; i < n; i++) drop(o, t + 0.05 + i * (0.4 / n), 200 + (500 * i) / n + Math.random() * 80, 0.12, (Math.random() - 0.5) * 0.9);
      osc(o, 'sine', midi(28 + s), t, 1.2, 0.17 + s * 0.02, { attack: 0.12, wet: 0.2 });
      wash(o, t + 0.05, 1.0, 0.08, 150, 900);
      if (s >= 2) osc(o, 'sine', 1485 * k, t + 0.5, 0.8, 0.035, { to: 1450 * k, attack: 0.003, wet: 0.95 });
    },
    // wave: the sea draws back and crashes over a glassy ping; bubbles in its wake
    (o, t, s) => {
      noise(o, t, 0.3, 0.12, { type: 'lowpass', f: 200, to: 1300 }, (x) => x ** 2, 0.2);
      const go = t + 0.28;
      wash(o, go, 0.9 + s * 0.1, 0.18 + s * 0.02, 300, 3500);
      osc(o, 'sine', midi(31 + s), t + 0.05, 1.2, 0.15 + s * 0.02, { attack: 0.15, wet: 0.2 });
      strike(o, 1760 * 2 ** (RISE[s] / 12), go, 0.07, GLASS, 0.9);
      for (let i = 0; i < 3 + s * 2; i++) drop(o, go + 0.08 + Math.random() * 0.4, 180 + Math.random() * 220, 0.12, (Math.random() - 0.5) * 0.9);
      if (s >= 3) osc(o, 'sine', 2640 * 2 ** (RISE[s] / 12), go + 0.35, 0.8, 0.03, { attack: 0.003, wet: 0.95 });
    },
  ],
  // ── Storm ───────────────────────────────────────────────────────────────────────────────────────────────────
  storm: [
    // thunder: a crackling arc, the crack, and a rumble that rolls away (the Storm staff's sound, kept)
    (o, t, s) => {
      zap(o, t, 0.1 + s * 0.02, 0.07);
      const hit = t + 0.08;
      noise(o, hit, 0.06, 0.55, { type: 'highpass', f: 1800 }, (x) => (1 - x) ** 3);
      crackle(o, hit, 0.35, 700, 0.22, 1200, (x) => (1 - x) ** 2);
      noise(o, hit + 0.02, 1.1 + s * 0.35, 0.5, { type: 'lowpass', f: 420, to: 90 }, (x) => (x < 0.06 ? x / 0.06 : (1 - x) ** 1.6), 0.25);
      osc(o, 'sine', 90, hit, 0.6 + s * 0.15, 0.18 + s * 0.03, { to: 38, attack: 0.004 });
      if (s >= 2) { noise(o, hit + 0.38, 0.05, 0.3, { type: 'highpass', f: 2400 }, (x) => (1 - x) ** 3); crackle(o, hit + 0.38, 0.25, 500, 0.12, 1500); }
      if (s >= 4) osc(o, 'triangle', midi(88), hit, 0.9, 0.04, { wet: 0.6 });
    },
    // chain lightning: three arcs jumping, a crack, a shorter rumble
    (o, t, s) => {
      [0, 0.06, 0.12].forEach((d, k) => zap(o, t + d, 0.06, 0.06, 1800 + k * 500));
      const hit = t + 0.16;
      noise(o, hit, 0.05, 0.5, { type: 'highpass', f: 2000 }, (x) => (1 - x) ** 3, 0, { pan: -0.2 });
      crackle(o, hit, 0.25, 700, 0.2, 1500, (x) => (1 - x) ** 2);
      noise(o, hit + 0.02, 0.7 + s * 0.25, 0.42, { type: 'lowpass', f: 380, to: 90 }, (x) => (x < 0.05 ? x / 0.05 : (1 - x) ** 1.5), 0.25);
      osc(o, 'sine', 80, hit, 0.5 + s * 0.12, 0.18 + s * 0.03, { to: 35, attack: 0.004 });
      if (s >= 2) { noise(o, hit + 0.16, 0.05, 0.32, { type: 'highpass', f: 2600 }, (x) => (1 - x) ** 3, 0, { pan: 0.3 }); crackle(o, hit + 0.16, 0.2, 600, 0.12, 1800); }
      if (s >= 4) osc(o, 'triangle', midi(91), hit, 0.8, 0.035, { wet: 0.6 });
    },
    // thunderclap: the charge, one great clap, and the thunder rolling three times, further each time
    (o, t, s) => {
      zap(o, t, 0.12, 0.045, 1600);
      const hit = t + 0.11;
      noise(o, hit, 0.09, 0.55, { type: 'highpass', f: 600 }, (x) => (1 - x) ** 4, 0.1, { drive: 5 });
      [[0.06, 0.4], [0.32, 0.27], [0.68, 0.17]].forEach(([d, p], k) => noise(o, hit + d, 0.65 + s * 0.12, p, { type: 'lowpass', f: 320 - k * 60, to: 80 }, (x) => (x < 0.08 ? x / 0.08 : (1 - x) ** 1.5), 0.3, { pan: [0, -0.35, 0.35][k] }));
      osc(o, 'sine', 70, hit, 0.9 + s * 0.15, 0.2 + s * 0.03, { to: 30, attack: 0.004 });
      osc(o, 'triangle', midi(84 + RISE[s]), hit, 1.0, 0.025, { wet: 0.7 });
    },
  ],
  // ── Void ────────────────────────────────────────────────────────────────────────────────────────────────────
  void: [
    // singularity: the air drawn in, a sub drop that falls through the floor, a dark chord sliding down, glass
    (o, t, s) => {
      noise(o, t, 0.34, 0.26, { type: 'lowpass', f: 200, to: 4000 }, (x) => x ** 3, 0.2);
      osc(o, 'sine', 220, t, 0.34, 0.05, { to: 880, attack: 0.3, wet: 0.3 });
      const go = t + 0.34;
      osc(o, 'sine', 150, go, 1.0 + s * 0.15, 0.36, { to: 28, toAt: 0.5, attack: 0.004 });
      for (const [n, d] of [[38, -8], [45, 8], [50, -4]] as const) osc(o, 'sawtooth', midi(n), go, 0.9 + s * 0.12, 0.035, { to: midi(n - 5), detune: d, lp: 900, attack: 0.02, wet: 0.5 });
      noise(o, go, 0.6, 0.1, { type: 'bandpass', f: 4000, to: 500, q: 3 }, (x) => 1 - x, 0.4);
      strike(o, midi(86 + RISE[s]), go + 0.03, 0.06, GLASS, 0.9);
      if (s >= 2) strike(o, midi(93 + RISE[s]), go + 0.2, 0.04, GLASS, 0.9, 0.3);
    },
    // horizon: two tones beating as they are pulled down, a cymbal sucked backwards, the implosion, an echoing ping
    (o, t, s) => {
      osc(o, 'sine', 440, t, 0.45, 0.06, { to: 110, attack: 0.05, wet: 0.4, pan: -0.3 });
      osc(o, 'sine', 446, t, 0.45, 0.06, { to: 111.5, attack: 0.05, wet: 0.4, pan: 0.3 });
      noise(o, t, 0.42, 0.12, { type: 'highpass', f: 3000 }, (x) => x ** 4, 0.3);
      const go = t + 0.42;
      thump(o, go, 100, 30, 0.8 + s * 0.12, 0.38, 0.1);
      strike(o, midi(91 + RISE[s]), go + 0.02, 0.07, GLASS, 0.9, -0.2);
      strike(o, midi(91 + RISE[s]), go + 0.26, 0.035, GLASS, 0.95, 0.3);
      noise(o, go, 0.7, 0.04, { type: 'bandpass', f: 6000, q: 6 }, (x) => 1 - x, 0.8);
      if (s >= 1) osc(o, 'sine', midi(26), go, 1.2, 0.1 + s * 0.02, { attack: 0.05, wet: 0.2 });
    },
    // starfall: glass stars cascading down over a deep choir, a boom beneath
    (o, t, s) => {
      const top = 100 + RISE[s], steps = [0, -3, -5, -7, -10, -12, -15, -17, -19];
      steps.slice(0, 6 + Math.min(3, s)).forEach((d, k, a) => strike(o, midi(top + d), t + k * 0.045, 0.06, GLASS, 0.85, spread(k, a.length)));
      pad(o, t + 0.04, [50, 53, 57], 1.4 + s * 0.12, 0.028, 'triangle', 1400, 0.7);
      thump(o, t + 0.05, 80, 30, 1.0 + s * 0.12, 0.32, 0.1);
      noise(o, t, 1.0, 0.03, { type: 'highpass', f: 8000 }, (x) => Math.sin(Math.PI * x), 0.8);
      if (s >= 2) osc(o, 'sine', midi(26), t + 0.05, 1.3, 0.1, { attack: 0.05, wet: 0.2 });
    },
  ],
};

/** the staffs with sounds of their own (a seasonal one takes its classic staff's: the same staff, another colour) */
export const STAFF_FAMILIES = Object.keys(SETS);
/** how many spells each staff takes turns with */
export const spellsOf = (family: string) => SETS[family]?.length ?? 0;

/** each spell's level, so they're about as loud as each other (measured: the RMS of a single cast) */
const TRIM: Record<string, number[]> = { verdant: [1.2, 1.2, 1.4], ember: [0.65, 0.6, 1.12], tide: [1.43, 1.38, 1.25], storm: [1.2, 1.45, 0.9], void: [0.83, 0.89, 0.95] };

const lastSpell: Record<string, number> = {};
/**
 * plays `staff`'s cast at `t` for a combo of `combo` (1 = a single right answer; from 5 on it stays at its fullest).
 * The staff's spells take turns at random, never the same one twice in a row; `spell` picks one (for the tests).
 */
export function staffCast(o: Out, staff: string, combo: number, t: number, base?: string, spell?: number) {
  const step = Math.min(Math.max(combo, 1), 5) - 1;
  const family = base && SETS[base] ? base : SETS[staff] ? staff : 'verdant';
  const set = SETS[family];
  let i = spell ?? Math.floor(Math.random() * set.length);
  if (spell === undefined && set.length > 1 && i === lastSpell[family]) i = (i + 1) % set.length;
  i = Math.max(0, Math.min(set.length - 1, i));
  lastSpell[family] = i;
  const k = TRIM[family]?.[i] ?? 1;
  const dry = o.c.createGain(), wet = o.c.createGain();
  dry.gain.value = k; wet.gain.value = k;
  dry.connect(o.dry); wet.connect(o.wet);
  set[i]({ c: o.c, dry, wet }, t, step);
}
