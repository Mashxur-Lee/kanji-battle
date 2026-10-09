// All sound is synthesised with the Web Audio API: no audio files, no licensing questions.
// Browsers only allow audio after a user gesture, so nothing plays until the first click/keypress.

type Prefs = { radio: boolean; sfx: boolean; musicVol: number; sfxVol: number };
const PREFS_KEY = 'kb:audio';
const DEFAULTS: Prefs = { radio: true, sfx: true, musicVol: 0.7, sfxVol: 0.8 };
const prefs: Prefs = (() => {
  try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(PREFS_KEY) ?? '{}') }; } catch { return { ...DEFAULTS }; }
})();
const clamp01 = (v: number) => Math.max(0, Math.min(1, Number.isFinite(v) ? v : 0));
/** Bus gains for a 0–1 slider (perceived loudness is roughly quadratic). */
const sfxGain = () => 0.7 * prefs.sfxVol * prefs.sfxVol * 1.4;
const musicGain = () => 0.9 * prefs.musicVol * prefs.musicVol * 1.3;
const savePrefs = () => { try { localStorage.setItem(PREFS_KEY, JSON.stringify(prefs)); } catch { /* ignore */ } };

let ctx: AudioContext | null = null;
let sfxBus: GainNode;
let musicBus: GainNode; // master music volume
let menuBus: GainNode; // the menu theme (crossfaded)
let battleBus: GainNode; // the battle theme (crossfaded)
let ambBus: GainNode; // background ambience (owls, frogs, goblins, clashes)
let reverb: ConvolverNode;
/** Menus play the calm theme; battles play the tense one. They crossfade. */
let scene: 'menu' | 'game' = 'menu';

function ensure(): AudioContext | null {
  if (ctx) return ctx;
  const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  ctx = new AC();
  const comp = ctx.createDynamicsCompressor();
  comp.connect(ctx.destination);
  sfxBus = ctx.createGain(); sfxBus.gain.value = sfxGain(); sfxBus.connect(comp);
  musicBus = ctx.createGain(); musicBus.gain.value = musicGain(); musicBus.connect(comp);
  menuBus = ctx.createGain(); menuBus.gain.value = 0; menuBus.connect(musicBus);
  battleBus = ctx.createGain(); battleBus.gain.value = 0; battleBus.connect(musicBus);
  ambBus = ctx.createGain(); ambBus.gain.value = 0.9; ambBus.connect(musicBus);
  // small hall reverb from generated noise (shared by music and chimes)
  reverb = ctx.createConvolver();
  const len = ctx.sampleRate * 2.6;
  const ir = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = ir.getChannelData(ch);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len) ** 3;
  }
  reverb.buffer = ir;
  const wet = ctx.createGain(); wet.gain.value = 0.35;
  reverb.connect(wet).connect(comp);
  return ctx;
}

// Phones keep playing a page's audio after you switch apps — stop it when the tab is hidden.
document.addEventListener('visibilitychange', () => {
  if (!ctx) return;
  if (document.visibilityState === 'hidden') void ctx.suspend();
  else void ctx.resume().then(() => syncMusic());
});

/** Call from any user gesture. */
export function unlock() {
  const c = ensure();
  if (!c) return;
  if (c.state === 'suspended' && document.visibilityState === 'visible') void c.resume();
  syncMusic();
}

/** Tell the audio which kind of screen is showing: menu theme or battle theme. */
export function setScene(s: 'menu' | 'game') {
  scene = s;
  syncMusic();
}

function syncMusic() {
  if (!ctx) return;
  const on = prefs.radio && prefs.musicVol > 0 && document.visibilityState === 'visible';
  const want = on ? (scene === 'menu' ? menuTheme : battleTheme) : null;
  for (const t of [menuTheme, battleTheme]) t === want ? t.fadeIn() : t.fadeOut();
  syncAmbience();
}

const midi = (n: number) => 440 * 2 ** ((n - 69) / 12);

interface ToneOpts { type?: OscillatorType; gain?: number; to?: number; bus?: AudioNode; attack?: number; send?: number; detune?: number }
function tone(freq: number, at: number, dur: number, opts: ToneOpts = {}) {
  const c = ctx!;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = opts.type ?? 'sine';
  o.frequency.setValueAtTime(freq, at);
  if (opts.detune) o.detune.value = opts.detune;
  if (opts.to) o.frequency.exponentialRampToValueAtTime(opts.to, at + dur);
  const peak = opts.gain ?? 0.3;
  g.gain.setValueAtTime(0.0001, at);
  g.gain.exponentialRampToValueAtTime(peak, at + (opts.attack ?? 0.008));
  g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
  o.connect(g).connect(opts.bus ?? sfxBus);
  if (opts.send) { const s = c.createGain(); s.gain.value = opts.send; g.connect(s).connect(reverb); }
  o.start(at);
  o.stop(at + dur + 0.05);
}

/** Bell: a sine with a slightly inharmonic overtone, long ring, into the reverb. */
function bell(freq: number, at: number, dur: number, gain: number, bus: AudioNode = sfxBus) {
  tone(freq, at, dur, { gain, bus, send: 0.6, attack: 0.003 });
  tone(freq * 2.76, at, dur * 0.4, { gain: gain * 0.25, bus, send: 0.6, attack: 0.002 });
  tone(freq * 5.4, at, dur * 0.18, { gain: gain * 0.08, bus, send: 0.6, attack: 0.002 });
}

function noise(at: number, dur: number, gain: number, cutoff: number, type: BiquadFilterType = 'lowpass', bus: AudioNode = sfxBus, swell = false) {
  const c = ctx!;
  const buf = c.createBuffer(1, Math.ceil(c.sampleRate * dur), c.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (swell ? (i / data.length) ** 2 : 1 - i / data.length);
  const src = c.createBufferSource();
  src.buffer = buf;
  const f = c.createBiquadFilter();
  f.type = type;
  f.frequency.value = cutoff;
  const g = c.createGain();
  g.gain.value = gain;
  src.connect(f).connect(g).connect(bus);
  src.start(at);
}

const sfxOk = () => prefs.sfx && ensure() !== null && ctx!.state === 'running';

export const sfx = {
  /**
   * Spell cast: a magical chime. Each combo step makes it deeper and longer (like a multi-kill
   * sound), from ×5 on it stays at its deepest, fullest version.
   */
  correct(combo = 1) {
    if (!sfxOk()) return;
    const t = ctx!.currentTime;
    const step = Math.min(Math.max(combo, 1), 5) - 1; // 0..4
    const root = 88 - step * 5; // E6 → … each step a fourth lower
    const ring = 0.7 + step * 0.45;
    const notes = [0, 7, 12, 16].map((i) => root + i);
    notes.forEach((n, i) => bell(midi(n), t + i * (0.045 + step * 0.012), ring, 0.16 + step * 0.015));
    if (step >= 1) tone(midi(root - 24), t, ring * 1.2, { gain: 0.12 + step * 0.05, send: 0.3, attack: 0.01 }); // sub swell
    if (step >= 4) [0.16, 0.32].forEach((dt) => bell(midi(root + 12), t + dt, 1.2, 0.1)); // full-power shimmer
    noise(t, 0.25, 0.05, 6000, 'highpass'); // sparkle
  },
  /** Miss / skip / timeout — soft descending fizzle. */
  wrong() {
    if (!sfxOk()) return;
    const t = ctx!.currentTime;
    tone(330, t, 0.3, { type: 'triangle', gain: 0.14, to: 140 });
    tone(311, t + 0.03, 0.3, { type: 'triangle', gain: 0.08, to: 130 });
    noise(t, 0.2, 0.06, 900);
  },
  /** You took damage — thump. */
  hurt() {
    if (!sfxOk()) return;
    const t = ctx!.currentTime;
    tone(140, t, 0.22, { gain: 0.35, to: 50 });
    noise(t, 0.15, 0.25, 900);
  },
  /** Your spell lands on the opponent. */
  impact() { if (sfxOk()) noise(ctx!.currentTime, 0.12, 0.15, 2500); },
  heal() {
    if (!sfxOk()) return;
    const t = ctx!.currentTime;
    [72, 76, 79, 84].forEach((n, i) => bell(midi(n), t + i * 0.08, 0.9, 0.1));
  },
  mana() {
    if (!sfxOk()) return;
    const t = ctx!.currentTime;
    for (let i = 0; i < 6; i++) bell(midi(84 + ((i * 5) % 12)), t + i * 0.05, 0.5, 0.06);
  },
  rip() {
    if (!sfxOk()) return;
    noise(ctx!.currentTime, 0.35, 0.3, 3000, 'bandpass');
  },
  flip() { if (sfxOk()) noise(ctx!.currentTime, 0.08, 0.12, 4000, 'highpass'); },
  inhale() { if (sfxOk()) tone(55, ctx!.currentTime, 2.6, { type: 'sawtooth', gain: 0.08, to: 110, attack: 1.5 }); },
  fire() {
    if (!sfxOk()) return;
    const t = ctx!.currentTime;
    noise(t, 1.2, 0.5, 1400);
    tone(70, t, 1.1, { type: 'sawtooth', gain: 0.12, to: 40 });
  },
  claw() {
    if (!sfxOk()) return;
    const t = ctx!.currentTime;
    noise(t, 0.18, 0.4, 6000);
    tone(160, t + 0.05, 0.2, { gain: 0.3, to: 60 });
  },
  tick() { if (sfxOk()) bell(1320, ctx!.currentTime, 0.25, 0.08); },
  go() { if (sfxOk()) bell(midi(88), ctx!.currentTime, 0.8, 0.14); },
  /** Victory: a bright fanfare (major, rising, with harmony and a final bell). */
  win() {
    if (!sfxOk()) return;
    const t = ctx!.currentTime;
    const brass = (n: number, at: number, dur: number) => {
      tone(midi(n), t + at, dur, { type: 'sawtooth', gain: 0.07, attack: 0.03, send: 0.4 });
      tone(midi(n), t + at, dur, { type: 'triangle', gain: 0.12, attack: 0.02, send: 0.4, detune: 6 });
    };
    [[67, 0], [72, 0.14], [76, 0.28]].forEach(([n, at]) => brass(n, at, 0.22));
    brass(79, 0.44, 0.9); brass(76, 0.44, 0.9); brass(72, 0.44, 0.9);
    bell(midi(91), t + 0.44, 1.8, 0.12);
    tone(midi(48), t + 0.44, 1.2, { gain: 0.2, send: 0.3 });
  },
  /** Defeat: slow, falling minor phrase. */
  lose() {
    if (!sfxOk()) return;
    const t = ctx!.currentTime;
    [[69, 0], [68, 0.38], [67, 0.76], [62, 1.14]].forEach(([n, at]) => {
      tone(midi(n), t + at, 0.7, { type: 'triangle', gain: 0.13, attack: 0.04, send: 0.5 });
    });
    tone(midi(38), t + 1.14, 1.8, { gain: 0.16, send: 0.4, attack: 0.05 });
  },
};

// ── Music ─────────────────────────────────────────────────────────────────────
/**
 * A looping track: `play(step, at)` schedules one eighth note at time `at` (lookahead scheduler).
 * fadeIn/fadeOut crossfade its bus; the scheduler stops once it's silent.
 */
function makeTrack(bpm: number, bus: () => GainNode, play: (step: number, at: number) => void) {
  const STEP = 60 / bpm / 2;
  let timer: number | undefined;
  let stopTimer: number | undefined;
  let nextTime = 0;
  let step = 0;
  const schedule = () => {
    const c = ctx!;
    while (nextTime < c.currentTime + 0.5) { play(step, nextTime); nextTime += STEP; step++; }
  };
  return {
    STEP,
    fadeIn() {
      if (!ctx) return;
      clearTimeout(stopTimer); stopTimer = undefined;
      bus().gain.cancelScheduledValues(ctx.currentTime);
      bus().gain.setTargetAtTime(1, ctx.currentTime, 0.9);
      if (timer !== undefined) return;
      nextTime = ctx.currentTime + 0.12;
      step = 0;
      schedule();
      timer = window.setInterval(schedule, 150);
    },
    fadeOut() {
      if (!ctx || timer === undefined || stopTimer !== undefined) return;
      bus().gain.cancelScheduledValues(ctx.currentTime);
      bus().gain.setTargetAtTime(0, ctx.currentTime, 0.45);
      stopTimer = window.setTimeout(() => { clearInterval(timer); timer = undefined; stopTimer = undefined; }, 2200);
    },
  };
}

function strings(notes: number[], at: number, dur: number, bus: AudioNode, level = 0.035, cutoff = 1100) {
  const c = ctx!;
  const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = cutoff;
  const g = c.createGain();
  g.gain.setValueAtTime(0.0001, at);
  g.gain.exponentialRampToValueAtTime(level, at + 0.9);
  g.gain.setValueAtTime(level, at + dur - 0.6);
  g.gain.exponentialRampToValueAtTime(0.0001, at + dur + 0.5);
  lp.connect(g).connect(bus);
  const s = c.createGain(); s.gain.value = 0.5; g.connect(s).connect(reverb);
  for (const n of notes) for (const d of [-7, 7]) {
    const o = c.createOscillator();
    o.type = 'sawtooth'; o.frequency.value = midi(n); o.detune.value = d;
    o.connect(lp); o.start(at); o.stop(at + dur + 0.6);
  }
}

function flute(n: number, at: number, dur: number, bus: AudioNode) {
  const c = ctx!;
  const o = c.createOscillator();
  const vib = c.createOscillator(); const vg = c.createGain();
  vib.frequency.value = 5.2; vg.gain.value = 4; vib.connect(vg).connect(o.frequency);
  o.type = 'sine'; o.frequency.value = midi(n);
  const g = c.createGain();
  g.gain.setValueAtTime(0.0001, at);
  g.gain.exponentialRampToValueAtTime(0.045, at + 0.06);
  g.gain.setValueAtTime(0.04, at + dur * 0.7);
  g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
  o.connect(g).connect(bus);
  const s = c.createGain(); s.gain.value = 0.7; g.connect(s).connect(reverb);
  o.start(at); vib.start(at); o.stop(at + dur + 0.05); vib.stop(at + dur + 0.05);
}

/** A dark brass voice: two detuned saws through a lowpass that opens as the note swells. */
function horn(n: number, at: number, dur: number, bus: AudioNode, level = 0.05) {
  const c = ctx!;
  const lp = c.createBiquadFilter(); lp.type = 'lowpass';
  lp.frequency.setValueAtTime(350, at);
  lp.frequency.linearRampToValueAtTime(1300, at + Math.min(0.5, dur * 0.5));
  lp.frequency.linearRampToValueAtTime(600, at + dur);
  const g = c.createGain();
  g.gain.setValueAtTime(0.0001, at);
  g.gain.exponentialRampToValueAtTime(level, at + 0.12);
  g.gain.setValueAtTime(level * 0.85, at + dur * 0.75);
  g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
  lp.connect(g).connect(bus);
  const s = c.createGain(); s.gain.value = 0.45; g.connect(s).connect(reverb);
  for (const d of [-9, 9]) {
    const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = midi(n); o.detune.value = d;
    o.connect(lp); o.start(at); o.stop(at + dur + 0.05);
  }
}

// ── Menu theme: a calm dark-fantasy loop in D minor (harp, strings, flute, low drum) ────────────────
const menuTheme = (() => {
  // i – VI – III – VII  (Dm – B♭ – F – C), then i – iv – V – i  (Dm – Gm – A – Dm)
  const PROG = [
    [50, 57, 62, 65], [46, 53, 58, 62], [41, 48, 53, 57], [48, 55, 60, 64],
    [50, 57, 62, 65], [43, 50, 55, 58], [45, 52, 57, 61], [50, 57, 62, 65],
  ];
  const MELODY = [
    [74, 0, 77, 0, 76, 74, 72, 0], [74, 0, 0, 70, 72, 0, 74, 0], [72, 0, 69, 0, 72, 74, 77, 0], [76, 0, 74, 72, 74, 0, 0, 0],
    [74, 0, 77, 0, 81, 0, 79, 77], [79, 0, 77, 0, 74, 0, 70, 0], [73, 0, 76, 0, 79, 77, 76, 73], [74, 0, 0, 0, 0, 0, 0, 0],
  ];
  const track = makeTrack(84, () => menuBus, (step, at) => {
    const STEP = track.STEP;
    const bar = Math.floor(step / 8) % PROG.length, inBar = step % 8, chord = PROG[bar];
    const loop = Math.floor(step / (8 * PROG.length));
    if (inBar === 0) {
      strings(chord.slice(1), at, STEP * 8, menuBus);
      tone(midi(chord[0] - 12), at, STEP * 7, { gain: 0.07, bus: menuBus, attack: 0.05 }); // bass
    }
    const arp = [0, 1, 2, 3, 2, 1, 2, 3][inBar];
    tone(midi(chord[arp] + 12), at, 1.4, { type: 'triangle', gain: 0.05, bus: menuBus, send: 0.5, attack: 0.003 }); // harp
    tone(midi(chord[arp] + 24), at, 0.5, { gain: 0.015, bus: menuBus, send: 0.5, attack: 0.003 });
    if (inBar === 0 || inBar === 3 || inBar === 6) tone(inBar === 0 ? 62 : 55, at, 0.45, { gain: inBar === 0 ? 0.16 : 0.09, to: 38, bus: menuBus, attack: 0.004 });
    if (loop % 3 !== 0) {
      const n = MELODY[bar][inBar];
      if (n) {
        let len = 1;
        while (inBar + len < 8 && MELODY[bar][inBar + len] === 0) len++;
        flute(n, at, STEP * Math.min(len, 4) * 0.95, menuBus);
      }
    }
  });
  return track;
})();

// ── Battle theme: same dark-fantasy world, but tense — driving low strings, war drums, ominous horns ──
const battleTheme = (() => {
  // i – ♭II – i – ♭VII  (Dm – E♭ – Dm – C), then i – VI – iv – V  (Dm – B♭ – Gm – A): the ♭II is the menace
  const PROG = [
    [38, 50, 53, 57], [39, 51, 55, 58], [38, 50, 53, 57], [36, 48, 52, 55],
    [38, 50, 53, 57], [34, 46, 50, 53], [31, 43, 46, 50], [33, 45, 49, 52],
  ];
  // horn calls (one bar each, eighths; 0 = hold/rest) — low and slow
  const HORN = [
    [62, 0, 0, 0, 63, 0, 62, 0], [63, 0, 0, 0, 0, 0, 58, 0], [62, 0, 0, 65, 0, 0, 62, 0], [60, 0, 0, 0, 0, 0, 0, 0],
    [62, 0, 0, 0, 65, 0, 69, 0], [70, 0, 0, 0, 69, 0, 65, 0], [67, 0, 0, 0, 70, 0, 69, 67], [69, 0, 0, 0, 0, 0, 0, 0],
  ];
  // war drums per bar (eighths): big hit, push, double before the bar line
  const DRUM = [1, 0, 0, 0.6, 0.8, 0, 0.5, 0.5];
  const track = makeTrack(100, () => battleBus, (step, at) => {
    const STEP = track.STEP;
    const bar = Math.floor(step / 8) % PROG.length, inBar = step % 8, chord = PROG[bar];
    const loop = Math.floor(step / (8 * PROG.length));
    // driving ostinato: low strings chugging every eighth, accents on 1 and the "and" of 2
    const accent = inBar === 0 || inBar === 3 || inBar === 6;
    for (const n of [chord[0] + 12, chord[1]]) tone(midi(n), at, STEP * 0.8, { type: 'sawtooth', gain: accent ? 0.022 : 0.012, bus: battleBus, attack: 0.005 });
    if (inBar === 0) {
      strings(chord.slice(1), at, STEP * 8, battleBus, 0.022, 800); // dark pad
      tone(midi(chord[0]), at, STEP * 7.5, { gain: 0.09, bus: battleBus, attack: 0.04 }); // sub bass
    }
    const d = DRUM[inBar];
    if (d) {
      tone(inBar === 0 ? 58 : 66, at, 0.5, { gain: 0.2 * d, to: 34, bus: battleBus, attack: 0.003 });
      noise(at, 0.12, 0.05 * d, 900, 'lowpass', battleBus);
    }
    // the first time round is just strings + drums; then the horns enter
    if (loop >= 1) {
      const n = HORN[bar][inBar];
      if (n) {
        let len = 1;
        while (inBar + len < 8 && HORN[bar][inBar + len] === 0) len++;
        horn(n - 12, at, STEP * len * 0.97, battleBus);
      }
    }
    // rising tension: a trembling high string over the second half of every other loop
    if (loop % 2 === 1 && bar >= 4) tone(midi(chord[2] + 24 + (bar === 7 ? 1 : 0)), at, STEP * 0.45, { type: 'sawtooth', gain: 0.008, bus: battleBus, send: 0.5, attack: 0.01 });
    // a cymbal swell into every 4th bar
    if (inBar === 4 && bar % 4 === 3) noise(at, STEP * 4, 0.035, 6000, 'highpass', battleBus, true);
  });
  return track;
})();

export const isRadioOn = () => prefs.radio;
export const isSfxOn = () => prefs.sfx;
export const getVolumes = () => ({ music: prefs.musicVol, sfx: prefs.sfxVol });

export function setRadio(on: boolean) {
  prefs.radio = on;
  savePrefs();
  ensure();
  if (on && ctx?.state === 'suspended') void ctx.resume();
  syncMusic();
}

export function setSfx(on: boolean) {
  prefs.sfx = on;
  savePrefs();
}

/** Volume sliders (0–1). Turning one up also switches that channel back on. */
export function setMusicVolume(v: number) {
  prefs.musicVol = clamp01(v);
  if (prefs.musicVol > 0) prefs.radio = true;
  savePrefs();
  ensure();
  if (ctx) musicBus.gain.setTargetAtTime(musicGain(), ctx.currentTime, 0.05);
  syncMusic();
}
export function setSfxVolume(v: number) {
  prefs.sfxVol = clamp01(v);
  if (prefs.sfxVol > 0) prefs.sfx = true;
  savePrefs();
  ensure();
  if (ctx) sfxBus.gain.setTargetAtTime(sfxGain(), ctx.currentTime, 0.05);
}
/** A short chime so you can hear the effects volume you just picked. */
export function previewSfx() { if (sfxOk()) bell(midi(76), ctx!.currentTime, 0.8, 0.18); }

// ── Ambience: each background has its own occasional sounds (menus only, follows the music volume) ──
let ambBg: string | null = null;
let ambTime: 'day' | 'sunset' | 'night' = 'night';
let ambTimer: number | undefined;

export function setAmbience(bg: string | null, time: 'day' | 'sunset' | 'night') {
  const changed = bg !== ambBg;
  ambBg = bg; ambTime = time;
  if (changed) syncAmbience();
}
function syncAmbience() {
  clearTimeout(ambTimer);
  ambTimer = undefined;
  if (!ctx || !ambBg || !prefs.radio || prefs.musicVol <= 0 || scene !== 'menu' || document.visibilityState !== 'visible') return;
  const next = (first: boolean) => {
    ambTimer = window.setTimeout(() => {
      if (ctx?.state === 'running') ambientCall(ambBg!, ambTime);
      next(false);
    }, (first ? 4_000 : 12_000) + Math.random() * 16_000);
  };
  next(true);
}

function ambientCall(bg: string, time: 'day' | 'sunset' | 'night') {
  const t = ctx!.currentTime + 0.05;
  if (bg === 'forest') time === 'day' ? birds(t) : owl(t);
  else if (bg === 'swamp') frogs(t);
  else if (bg === 'plains') goblins(t);
  else if (bg === 'castle') { clash(t); if (Math.random() < 0.6) clash(t + 0.32 + Math.random() * 0.2); if (Math.random() < 0.25) roar(t + 1.4); }
  else if (bg === 'worldtree') sparkle(t);
}

/** "Hoo — hoo-hoooo": a tawny owl, soft and far away. */
function owl(at: number) {
  const hoot = (t0: number, dur: number, f0: number) => {
    const c = ctx!;
    const o = c.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(f0, t0); o.frequency.exponentialRampToValueAtTime(f0 * 0.88, t0 + dur);
    const vib = c.createOscillator(); const vg = c.createGain(); vib.frequency.value = 7; vg.gain.value = 6; vib.connect(vg).connect(o.frequency);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.09, t0 + 0.06); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = f0; bp.Q.value = 2;
    o.connect(bp).connect(g).connect(ambBus);
    const s = c.createGain(); s.gain.value = 0.8; g.connect(s).connect(reverb);
    o.start(t0); vib.start(t0); o.stop(t0 + dur + 0.05); vib.stop(t0 + dur + 0.05);
  };
  const f0 = 360 + Math.random() * 40;
  hoot(at, 0.32, f0); hoot(at + 0.75, 0.18, f0 * 1.04); hoot(at + 1.0, 0.75, f0 * 1.06);
}
function birds(at: number) {
  for (let i = 0; i < 3 + Math.floor(Math.random() * 3); i++) {
    const t = at + i * 0.16 + Math.random() * 0.05, f0 = 2600 + Math.random() * 900;
    tone(f0, t, 0.09, { gain: 0.02, to: f0 * 1.35, bus: ambBus, send: 0.4, attack: 0.005 });
  }
}
/** A few frogs answering each other: "rib-bit". */
function frogs(at: number) {
  const ribbit = (t0: number, k: number) => {
    const c = ctx!;
    for (const [off, len, pitch] of [[0, 0.11, 1], [0.17, 0.14, 1.12]] as const) {
      const o = c.createOscillator(); o.type = 'square'; o.frequency.value = 190 * k * pitch;
      const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 850 * k; bp.Q.value = 3;
      const g = c.createGain(); g.gain.setValueAtTime(0.0001, t0 + off);
      // the croak is a fast train of pulses
      for (let p = 0; p < len / 0.025; p++) {
        const tp = t0 + off + p * 0.025;
        g.gain.setValueAtTime(0.0001, tp); g.gain.linearRampToValueAtTime(0.05, tp + 0.006); g.gain.linearRampToValueAtTime(0.0001, tp + 0.02);
      }
      o.connect(bp).connect(g).connect(ambBus);
      const s = c.createGain(); s.gain.value = 0.35; g.connect(s).connect(reverb);
      o.start(t0 + off); o.stop(t0 + off + len + 0.03);
    }
  };
  const n = 2 + Math.floor(Math.random() * 3);
  for (let i = 0; i < n; i++) ribbit(at + Math.random() * 1.6, 0.85 + Math.random() * 0.5);
}
/** Goblin gibberish and a cackle, from somewhere across the fields. */
function goblins(at: number) {
  const c = ctx!;
  const syll = (t0: number, f0: number, dur: number, formant: number, level = 0.035) => {
    const o = c.createOscillator(); o.type = 'sawtooth';
    o.frequency.setValueAtTime(f0, t0); o.frequency.linearRampToValueAtTime(f0 * (0.85 + Math.random() * 0.4), t0 + dur);
    const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = formant; bp.Q.value = 5;
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(level, t0 + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(bp).connect(g).connect(ambBus);
    const s = c.createGain(); s.gain.value = 0.4; g.connect(s).connect(reverb);
    o.start(t0); o.stop(t0 + dur + 0.02);
  };
  let t = at;
  const n = 5 + Math.floor(Math.random() * 5);
  for (let i = 0; i < n; i++) { const d = 0.06 + Math.random() * 0.06; syll(t, 520 + Math.random() * 420, d, [700, 1100, 1500, 2100][Math.floor(Math.random() * 4)]); t += d + 0.02; }
  if (Math.random() < 0.7) for (let i = 0; i < 4; i++) syll(t + 0.15 + i * 0.11, 900 + i * 40, 0.07, 1800, 0.04); // "he-he-he-he"
}
/** Steel on steel: a few bright, inharmonic partials and a scrape of noise. */
function clash(at: number) {
  for (const [f0, dur, g] of [[1760, 0.7, 0.035], [2730, 0.55, 0.025], [3980, 0.4, 0.02], [5560, 0.3, 0.012]] as const) {
    const fr = f0 * (0.97 + Math.random() * 0.06);
    tone(fr, at, dur, { gain: g, bus: ambBus, send: 0.6, attack: 0.002 });
  }
  noise(at, 0.07, 0.05, 2600, 'highpass', ambBus);
}
function roar(at: number) {
  const c = ctx!;
  const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(95, at); o.frequency.exponentialRampToValueAtTime(55, at + 1.5);
  const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 420;
  const g = c.createGain(); g.gain.setValueAtTime(0.0001, at); g.gain.exponentialRampToValueAtTime(0.05, at + 0.3); g.gain.exponentialRampToValueAtTime(0.0001, at + 1.6);
  o.connect(lp).connect(g).connect(ambBus);
  const s = c.createGain(); s.gain.value = 0.9; g.connect(s).connect(reverb);
  o.start(at); o.stop(at + 1.7);
}
function sparkle(at: number) {
  const notes = [79, 81, 84, 86, 88, 91];
  for (let i = 0; i < 4; i++) bell(midi(notes[Math.floor(Math.random() * notes.length)]), at + i * 0.18, 1.4, 0.03, ambBus);
}
