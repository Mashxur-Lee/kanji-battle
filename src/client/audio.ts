// All sound is synthesised with the Web Audio API: no audio files, no licensing questions.
// Browsers only allow audio after a user gesture, so nothing plays until the first click/keypress.

type Prefs = { radio: boolean; sfx: boolean };
const PREFS_KEY = 'kb:audio';
const prefs: Prefs = (() => {
  try { return { radio: true, sfx: true, ...JSON.parse(localStorage.getItem(PREFS_KEY) ?? '{}') }; } catch { return { radio: true, sfx: true }; }
})();
const savePrefs = () => { try { localStorage.setItem(PREFS_KEY, JSON.stringify(prefs)); } catch { /* ignore */ } };

let ctx: AudioContext | null = null;
let sfxBus: GainNode;
let musicBus: GainNode;
let reverb: ConvolverNode;
/** Music only plays on menu-type screens, never during a battle. */
let scene: 'menu' | 'game' = 'menu';

function ensure(): AudioContext | null {
  if (ctx) return ctx;
  const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  ctx = new AC();
  const comp = ctx.createDynamicsCompressor();
  comp.connect(ctx.destination);
  sfxBus = ctx.createGain(); sfxBus.gain.value = 0.55; sfxBus.connect(comp);
  musicBus = ctx.createGain(); musicBus.gain.value = 0; musicBus.connect(comp);
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

/** Tell the audio which kind of screen is showing: music plays in menus only. */
export function setScene(s: 'menu' | 'game') {
  scene = s;
  syncMusic();
}

function syncMusic() {
  if (!ctx) return;
  if (prefs.radio && scene === 'menu' && document.visibilityState === 'visible') radio.start();
  else radio.stop();
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

function noise(at: number, dur: number, gain: number, cutoff: number, type: BiquadFilterType = 'lowpass') {
  const c = ctx!;
  const buf = c.createBuffer(1, Math.ceil(c.sampleRate * dur), c.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  const src = c.createBufferSource();
  src.buffer = buf;
  const f = c.createBiquadFilter();
  f.type = type;
  f.frequency.value = cutoff;
  const g = c.createGain();
  g.gain.value = gain;
  src.connect(f).connect(g).connect(sfxBus);
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

// ── Radio: a composed dark-fantasy loop in D minor (harp, strings, flute, low drum) ──────────────
const radio = (() => {
  const BPM = 84;
  const STEP = 60 / BPM / 2; // eighth notes
  // i – VI – III – VII  (Dm – B♭ – F – C), then i – iv – V – i  (Dm – Gm – A – Dm)
  const PROG = [
    [50, 57, 62, 65], [46, 53, 58, 62], [41, 48, 53, 57], [48, 55, 60, 64],
    [50, 57, 62, 65], [43, 50, 55, 58], [45, 52, 57, 61], [50, 57, 62, 65],
  ];
  // flute melody, one bar per chord (eighth-note slots; 0 = rest)
  const MELODY = [
    [74, 0, 77, 0, 76, 74, 72, 0], [74, 0, 0, 70, 72, 0, 74, 0], [72, 0, 69, 0, 72, 74, 77, 0], [76, 0, 74, 72, 74, 0, 0, 0],
    [74, 0, 77, 0, 81, 0, 79, 77], [79, 0, 77, 0, 74, 0, 70, 0], [73, 0, 76, 0, 79, 77, 76, 73], [74, 0, 0, 0, 0, 0, 0, 0],
  ];
  let timer: number | undefined;
  let nextTime = 0;
  let step = 0;

  function strings(notes: number[], at: number, dur: number) {
    const c = ctx!;
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1100;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(0.035, at + 0.9);
    g.gain.setValueAtTime(0.035, at + dur - 0.6);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur + 0.5);
    lp.connect(g).connect(musicBus);
    const s = c.createGain(); s.gain.value = 0.5; g.connect(s).connect(reverb);
    for (const n of notes) for (const d of [-7, 7]) {
      const o = c.createOscillator();
      o.type = 'sawtooth'; o.frequency.value = midi(n); o.detune.value = d;
      o.connect(lp); o.start(at); o.stop(at + dur + 0.6);
    }
  }

  function harp(n: number, at: number) {
    tone(midi(n), at, 1.4, { type: 'triangle', gain: 0.05, bus: musicBus, send: 0.5, attack: 0.003 });
    tone(midi(n + 12), at, 0.5, { gain: 0.015, bus: musicBus, send: 0.5, attack: 0.003 });
  }

  function flute(n: number, at: number, dur: number) {
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
    o.connect(g).connect(musicBus);
    const s = c.createGain(); s.gain.value = 0.7; g.connect(s).connect(reverb);
    o.start(at); vib.start(at); o.stop(at + dur + 0.05); vib.stop(at + dur + 0.05);
  }

  function drum(at: number, accent: boolean) {
    tone(accent ? 62 : 55, at, 0.45, { gain: accent ? 0.16 : 0.09, to: 38, bus: musicBus, attack: 0.004 });
  }

  function schedule() {
    const c = ctx!;
    while (nextTime < c.currentTime + 0.5) {
      const bar = Math.floor(step / 8) % PROG.length;
      const inBar = step % 8;
      const chord = PROG[bar];
      const loop = Math.floor(step / (8 * PROG.length));
      if (inBar === 0) {
        strings(chord.slice(1), nextTime, STEP * 8);
        tone(midi(chord[0] - 12), nextTime, STEP * 7, { gain: 0.07, bus: musicBus, attack: 0.05 }); // bass
      }
      // harp arpeggio up and down the chord
      const arp = [0, 1, 2, 3, 2, 1, 2, 3][inBar];
      harp(chord[arp] + 12, nextTime);
      if (inBar === 0 || inBar === 3 || inBar === 6) drum(nextTime, inBar === 0);
      // melody from the second time round; first pass is just harp + strings
      if (loop % 3 !== 0) {
        const n = MELODY[bar][inBar];
        if (n) {
          let len = 1;
          while (inBar + len < 8 && MELODY[bar][inBar + len] === 0) len++;
          flute(n, nextTime, STEP * Math.min(len, 4) * 0.95);
        }
      }
      nextTime += STEP;
      step++;
    }
  }

  return {
    start() {
      if (!ctx || timer !== undefined) return;
      nextTime = ctx.currentTime + 0.15;
      musicBus.gain.cancelScheduledValues(ctx.currentTime);
      musicBus.gain.setTargetAtTime(0.7, ctx.currentTime, 0.8);
      schedule();
      timer = window.setInterval(schedule, 150);
    },
    stop() {
      if (!ctx || timer === undefined) return;
      clearInterval(timer);
      timer = undefined;
      musicBus.gain.setTargetAtTime(0, ctx.currentTime, 0.25);
    },
  };
})();

export const isRadioOn = () => prefs.radio;
export const isSfxOn = () => prefs.sfx;

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
