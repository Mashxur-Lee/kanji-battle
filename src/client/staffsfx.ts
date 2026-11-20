// 0.9.9.9.8: every staff has a cast sound of its own, played when your answer is right in a battle (and when you
// tap a staff in Customize). Verdant grows (wooden notes, leaves, a blooming chime), Storm cracks with thunder,
// Tide drops into water, Ember catches fire, Void folds the air, and the seasonal staffs have theirs.
// Each one gets bigger with the combo, like the old chime did: more notes, a deeper floor, a longer tail.
// Everything is synthesised (no audio files). The functions take any audio context, so the same sounds can also be
// rendered offline (scripts/staff-sounds.html makes WAV files of them to listen to).

/** where a sound goes: the context, the dry bus and the reverb send */
export interface Out { c: BaseAudioContext; dry: AudioNode; wet: AudioNode }
type Sig = (o: Out, t: number, step: number) => void;

const midi = (n: number) => 440 * 2 ** ((n - 69) / 12);

function env(o: Out, at: number, peak: number, attack: number, dur: number, wet = 0) {
  const g = o.c.createGain();
  g.gain.setValueAtTime(0.0001, at);
  g.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), at + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
  g.connect(o.dry);
  if (wet > 0) { const s = o.c.createGain(); s.gain.value = wet; g.connect(s).connect(o.wet); }
  return g;
}

function osc(o: Out, type: OscillatorType, f: number, at: number, dur: number, peak: number, opts: { to?: number; toAt?: number; attack?: number; wet?: number; detune?: number; lp?: number } = {}) {
  const v = o.c.createOscillator();
  v.type = type;
  v.frequency.setValueAtTime(f, at);
  if (opts.to) v.frequency.exponentialRampToValueAtTime(opts.to, at + (opts.toAt ?? dur));
  if (opts.detune) v.detune.value = opts.detune;
  const g = env(o, at, peak, opts.attack ?? 0.005, dur, opts.wet);
  if (opts.lp) { const f2 = o.c.createBiquadFilter(); f2.type = 'lowpass'; f2.frequency.value = opts.lp; v.connect(f2).connect(g); } else v.connect(g);
  v.start(at); v.stop(at + dur + 0.05);
}

/** filtered noise; `shape` gives each sample's level over 0..1 of the length */
function noise(o: Out, at: number, dur: number, peak: number, filter: { type: BiquadFilterType; f: number; to?: number; q?: number }, shape: (x: number) => number = (x) => 1 - x, wet = 0) {
  const c = o.c, n = Math.max(1, Math.ceil(c.sampleRate * dur));
  const buf = c.createBuffer(1, n, c.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * shape(i / n);
  const src = c.createBufferSource(); src.buffer = buf;
  const f = c.createBiquadFilter(); f.type = filter.type; f.frequency.setValueAtTime(filter.f, at); if (filter.q) f.Q.value = filter.q;
  if (filter.to) f.frequency.exponentialRampToValueAtTime(filter.to, at + dur);
  const g = c.createGain(); g.gain.value = peak;
  src.connect(f).connect(g).connect(o.dry);
  if (wet > 0) { const s = c.createGain(); s.gain.value = wet; g.connect(s).connect(o.wet); }
  src.start(at);
}

/** crackles: short random clicks (fire, ice, leaves) — `density` clicks a second */
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
  // (no click at the start: the first few milliseconds fade in)
  for (let i = 0; i < Math.min(n, 64); i++) d[i] *= i / 64;
  const src = c.createBufferSource(); src.buffer = buf;
  // (it has faded out well before the end of its buffer: a string still ringing when the sound stops would click)
  const g = c.createGain(); g.gain.setValueAtTime(peak, at); g.gain.setTargetAtTime(0.0001, at + dur * 0.35, dur * 0.12);
  src.connect(g).connect(o.dry);
  if (wet > 0) { const s = c.createGain(); s.gain.value = wet; g.connect(s).connect(o.wet); }
  src.start(at);
}

/** a struck bar or bell from its partials (ratio, level, length) */
function strike(o: Out, f: number, at: number, peak: number, partials: ReadonlyArray<readonly [number, number, number]>, wet = 0.5) {
  for (const [r, lv, len] of partials) osc(o, 'sine', f * r, at, len, peak * lv, { attack: 0.002, wet });
}
const MARIMBA = [[1, 1, 0.55], [4, 0.28, 0.16], [9.9, 0.08, 0.05]] as const; // wood: the 4th and 10th partials
const BELL = [[1, 1, 1.4], [2.76, 0.3, 0.6], [5.4, 0.1, 0.25]] as const;
const GLASS = [[1, 1, 0.9], [2.32, 0.45, 0.5], [4.25, 0.22, 0.3], [6.63, 0.1, 0.18]] as const; // ice: inharmonic, bright
const STONE = [[1, 1, 0.22], [2.61, 0.6, 0.12], [4.93, 0.35, 0.07], [7.4, 0.15, 0.04]] as const; // jade: short and hard
const CELESTA = [[1, 1, 1.1], [2, 0.18, 0.5], [3, 0.06, 0.25]] as const;

/** a wave or a gust: noise through a filter that opens and closes */
function wash(o: Out, at: number, dur: number, peak: number, lo: number, hi: number) {
  const c = o.c, n = Math.ceil(c.sampleRate * dur);
  const buf = c.createBuffer(1, n, c.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) { const x = i / n; d[i] = (Math.random() * 2 - 1) * Math.sin(Math.PI * x) ** 1.5; }
  const src = c.createBufferSource(); src.buffer = buf;
  const f = c.createBiquadFilter(); f.type = 'lowpass'; f.Q.value = 0.7;
  f.frequency.setValueAtTime(lo, at); f.frequency.exponentialRampToValueAtTime(hi, at + dur * 0.4); f.frequency.exponentialRampToValueAtTime(lo, at + dur);
  const g = c.createGain(); g.gain.value = peak;
  src.connect(f).connect(g).connect(o.dry);
  const s = c.createGain(); s.gain.value = 0.3; g.connect(s).connect(o.wet);
  src.start(at);
}

/** a drop into water: a short sine that rises fast */
function drop(o: Out, at: number, f: number, peak: number) {
  osc(o, 'sine', f, at, 0.09, peak, { to: f * 2.6, toAt: 0.05, attack: 0.002, wet: 0.35 });
}

/** an electric arc: a buzzing saw jumping about in pitch */
function zap(o: Out, at: number, dur: number, peak: number) {
  const c = o.c, v = c.createOscillator(); v.type = 'sawtooth';
  for (let x = 0; x < dur; x += 0.012) v.frequency.setValueAtTime(180 + Math.random() * 900, at + x);
  const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 2200; bp.Q.value = 0.8;
  const g = env(o, at, peak, 0.003, dur, 0.2);
  v.connect(bp).connect(g); v.start(at); v.stop(at + dur + 0.05);
}

const pent = [0, 2, 4, 7, 9, 12, 14, 16]; // major pentatonic
const inScale = [0, 1, 5, 7, 8, 12, 13]; // the Japanese "in" scale (koto)

const SIGS: Record<string, Sig> = {
  // Verdant: life growing — a quick run of wooden notes, leaves stirring, and a chime opening like a flower
  verdant(o, t, s) {
    const root = 67 + s; // G4, a little higher with the combo
    const notes = pent.slice(0, 3 + Math.min(s, 3));
    notes.forEach((i, k) => strike(o, midi(root + i), t + k * 0.055, 0.2 - k * 0.012, MARIMBA, 0.25));
    crackle(o, t + 0.02, 0.45, 260, 0.05, 2500, (x) => Math.sin(Math.PI * x)); // the leaves
    noise(o, t + 0.05, 0.5 + s * 0.08, 0.06, { type: 'bandpass', f: 900, to: 5000, q: 1.2 }, (x) => Math.sin(Math.PI * x) ** 2, 0.4); // the bloom
    const top = t + notes.length * 0.055 + 0.04;
    strike(o, midi(root + 24), top, 0.11 + s * 0.012, BELL, 0.6);
    strike(o, midi(root + 31), top + 0.03, 0.05, BELL, 0.6);
    if (s >= 1) osc(o, 'sine', midi(root - 24), t, 0.7 + s * 0.2, 0.1 + s * 0.03, { attack: 0.02, wet: 0.2 }); // roots
    if (s >= 3) strike(o, midi(root + 36), top + 0.18, 0.05, BELL, 0.7);
  },
  // Storm: a crackling arc, then the thunder — a sharp crack and a rumble that rolls away
  storm(o, t, s) {
    zap(o, t, 0.1 + s * 0.02, 0.07);
    const hit = t + 0.08;
    noise(o, hit, 0.06, 0.55, { type: 'highpass', f: 1800 }, (x) => (1 - x) ** 3); // the crack
    crackle(o, hit, 0.35, 700, 0.22, 1200, (x) => (1 - x) ** 2);
    noise(o, hit + 0.02, 1.1 + s * 0.35, 0.5, { type: 'lowpass', f: 420, to: 90 }, (x) => (x < 0.06 ? x / 0.06 : (1 - x) ** 1.6), 0.25); // the rumble
    osc(o, 'sine', 90, hit, 0.6 + s * 0.15, 0.18 + s * 0.03, { to: 38, attack: 0.004 });
    if (s >= 2) { noise(o, hit + 0.38, 0.05, 0.3, { type: 'highpass', f: 2400 }, (x) => (1 - x) ** 3); crackle(o, hit + 0.38, 0.25, 500, 0.12, 1500); } // a second strike
    if (s >= 4) osc(o, 'triangle', midi(88), hit, 0.9, 0.04, { wet: 0.6 }); // ozone shimmer
  },
  // Tide: a drop falls in, bubbles rise, and a wave washes over
  tide(o, t, s) {
    drop(o, t, 520 + s * 40, 0.3);
    const bubbles = 3 + s * 2;
    for (let k = 0; k < bubbles; k++) drop(o, t + 0.07 + Math.random() * (0.25 + s * 0.05), 700 + Math.random() * 900, 0.08 + Math.random() * 0.06);
    wash(o, t + 0.04, 0.8 + s * 0.12, 0.16 + s * 0.02, 300, 2400);
    strike(o, midi(76 + s), t + 0.02, 0.08, BELL, 0.7);
    if (s >= 1) osc(o, 'sine', midi(40 + s), t, 0.9, 0.08 + s * 0.025, { attack: 0.15, wet: 0.3 }); // the swell under it
  },
  // Ember: it catches — a rush of air, fire crackling, a warm low blast
  ember(o, t, s) {
    noise(o, t, 0.28, 0.32, { type: 'bandpass', f: 350, to: 2600, q: 0.9 }, (x) => x ** 1.5 * (1 - x * 0.3)); // the whoosh
    const go = t + 0.22;
    noise(o, go, 0.7 + s * 0.15, 0.3, { type: 'lowpass', f: 1600, to: 500 }, (x) => (1 - x) ** 1.4, 0.2); // the fire's body
    crackle(o, go, 0.8 + s * 0.2, 90 + s * 30, 0.32, 1800);
    osc(o, 'sawtooth', midi(43 + s), go, 0.55, 0.11, { lp: 900, attack: 0.01, wet: 0.2 });
    osc(o, 'triangle', midi(55 + s), go, 0.5, 0.08, { attack: 0.01, wet: 0.3 });
    if (s >= 2) osc(o, 'sine', midi(31 + s), go, 0.8, 0.16, { to: midi(26), attack: 0.004 });
  },
  // Void: the air folds — a swell pulled backwards, falling, beating tones, and a deep thud
  void(o, t, s) {
    noise(o, t, 0.32, 0.3, { type: 'lowpass', f: 300, to: 3200 }, (x) => x ** 2.5); // drawn in
    const go = t + 0.3;
    osc(o, 'sine', 130, go, 0.9 + s * 0.15, 0.32, { to: 34, toAt: 0.5, attack: 0.004 }); // the thud
    for (const [n, d] of [[0, 0], [0.3, 7], [-0.25, 14]] as const) osc(o, 'sawtooth', midi(50 + d) * (1 + n / 100), go, 0.8 + s * 0.15, 0.04, { to: midi(38 + d), lp: 1100, attack: 0.02, wet: 0.4 });
    strike(o, midi(83 + s), go + 0.02, 0.06, GLASS, 0.8);
    noise(o, go, 0.5, 0.12, { type: 'bandpass', f: 4000, to: 600, q: 4 }, (x) => 1 - x, 0.4);
    if (s >= 3) strike(o, midi(95), go + 0.2, 0.04, GLASS, 0.8);
  },
  // Frost: ice crystals ringing, a crunch of frost
  frost(o, t, s) {
    const notes = [84, 88, 91, 96, 100].slice(0, 3 + Math.min(2, s));
    notes.forEach((n, k) => strike(o, midi(n + (k % 2 ? 0.2 : 0)), t + k * 0.045, 0.1, GLASS, 0.6));
    crackle(o, t, 0.25, 900, 0.18, 4500, (x) => (1 - x) ** 1.5); // the crunch
    noise(o, t + 0.05, 0.7, 0.05, { type: 'highpass', f: 6000 }, (x) => Math.sin(Math.PI * x), 0.5); // the cold air
    if (s >= 1) osc(o, 'sine', midi(60), t, 0.8 + s * 0.2, 0.07 + s * 0.02, { attack: 0.08, wet: 0.4 });
  },
  // Blossom: a harp's run up, petals in the air
  blossom(o, t, s) {
    const run = pent.slice(0, 4 + Math.min(4, s));
    run.forEach((i, k) => pluck(o, midi(64 + i), t + k * 0.05, 1.0, 0.24, 0.7, 0.45));
    noise(o, t + 0.1, 0.6, 0.04, { type: 'highpass', f: 5000 }, (x) => Math.sin(Math.PI * x), 0.5);
    strike(o, midi(88), t + run.length * 0.05, 0.07, CELESTA, 0.6);
    if (s >= 1) osc(o, 'sine', midi(40), t, 0.8, 0.08 + s * 0.02, { attack: 0.05, wet: 0.2 });
  },
  // Jade: two hard stone taps and a temple gong under them
  jade(o, t, s) {
    strike(o, midi(84), t, 0.22, STONE, 0.4);
    strike(o, midi(91), t + 0.09, 0.18, STONE, 0.4);
    if (s >= 2) strike(o, midi(96), t + 0.16, 0.14, STONE, 0.4);
    strike(o, midi(48 + s), t + 0.02, 0.12, [[1, 1, 1.6 + s * 0.2], [2.4, 0.5, 1.0], [3.8, 0.25, 0.6]], 0.6); // the gong
    crackle(o, t, 0.08, 400, 0.08, 3000);
    if (s >= 1) osc(o, 'sine', midi(36), t + 0.02, 0.9 + s * 0.2, 0.06 + s * 0.03, { attack: 0.01, wet: 0.3 });
  },
  // Abyss: a sonar ping into the deep, slow low bubbles
  abyss(o, t, s) {
    osc(o, 'sine', 1320, t, 1.2, 0.12, { to: 1250, attack: 0.003, wet: 0.9 }); // the ping
    osc(o, 'sine', 2640, t, 0.3, 0.02, { attack: 0.003, wet: 0.9 });
    for (let k = 0; k < 2 + s; k++) drop(o, t + 0.15 + k * 0.11 + Math.random() * 0.05, 180 + Math.random() * 160, 0.16);
    osc(o, 'sine', midi(31 + s), t, 1.1 + s * 0.15, 0.16 + s * 0.03, { attack: 0.08, wet: 0.2 });
    wash(o, t + 0.1, 0.9 + s * 0.1, 0.08 + s * 0.02, 150, 700);
    if (s >= 2) osc(o, 'sine', 1980, t + 0.3, 0.9, 0.05, { to: 1900, attack: 0.003, wet: 0.9 }); // the echo comes back
  },
  // Moon: soft celesta notes, high and slow, over a quiet airy chord
  moon(o, t, s) {
    [88, 84, 91, 96].slice(0, 2 + Math.min(2, s)).forEach((n, k) => strike(o, midi(n), t + k * 0.09, 0.12, CELESTA, 0.7));
    for (const n of [64, 71, 76]) osc(o, 'triangle', midi(n), t, 1.0 + s * 0.15, 0.03, { attack: 0.2, wet: 0.6, detune: 5 });
    noise(o, t, 0.9, 0.03, { type: 'bandpass', f: 3000, q: 0.8 }, (x) => Math.sin(Math.PI * x), 0.6);
  },
  // Maple: a koto phrase, dry leaves underfoot
  maple(o, t, s) {
    const phrase = inScale.slice(0, 3 + Math.min(3, s));
    phrase.forEach((i, k) => pluck(o, midi(64 + i), t + k * 0.07, 1.1, 0.26, 0.45, 0.35));
    crackle(o, t, 0.3, 500, 0.1, 2200, (x) => (1 - x) ** 1.2);
    if (s >= 1) pluck(o, midi(40), t, 1.4, 0.2 + s * 0.03, 0.3, 0.2);
  },
};

/** the staffs with a sound of their own (any other uses its classic staff's, then Verdant's) */
export const STAFF_SOUNDS = Object.keys(SIGS);

/** each staff's level, so they are about as loud as each other (measured: the RMS of a single cast) */
const TRIM: Record<string, number> = { verdant: 1, storm: 1.05, tide: 1.4, ember: 1.3, void: 0.9, frost: 1.25, blossom: 0.85, jade: 1.3, abyss: 1.2, moon: 1.3, maple: 1.15 };

/** plays `staff`'s cast at `t` for a combo of `combo` (1 = a single right answer; from 5 on it stays at its fullest) */
export function staffCast(o: Out, staff: string, combo: number, t: number, base?: string) {
  const step = Math.min(Math.max(combo, 1), 5) - 1;
  const id = SIGS[staff] ? staff : base && SIGS[base] ? base : 'verdant';
  const k = TRIM[id] ?? 1;
  const dry = o.c.createGain(), wet = o.c.createGain();
  dry.gain.value = k; wet.gain.value = k;
  dry.connect(o.dry); wet.connect(o.wet);
  SIGS[id]({ c: o.c, dry, wet }, t, step);
}
