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

function ensure(): AudioContext | null {
  if (ctx) return ctx;
  const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  ctx = new AC();
  const comp = ctx.createDynamicsCompressor();
  comp.connect(ctx.destination);
  sfxBus = ctx.createGain(); sfxBus.gain.value = 0.5; sfxBus.connect(comp);
  musicBus = ctx.createGain(); musicBus.gain.value = 0; musicBus.connect(comp);
  return ctx;
}

/** Call from any user gesture. Starts the radio if it is switched on. */
export function unlock() {
  const c = ensure();
  if (!c) return;
  if (c.state === 'suspended') void c.resume();
  if (prefs.radio) radio.start();
}

const midi = (n: number) => 440 * 2 ** ((n - 69) / 12);

function tone(freq: number, at: number, dur: number, opts: { type?: OscillatorType; gain?: number; to?: number; bus?: AudioNode; attack?: number } = {}) {
  const c = ctx!;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = opts.type ?? 'sine';
  o.frequency.setValueAtTime(freq, at);
  if (opts.to) o.frequency.exponentialRampToValueAtTime(opts.to, at + dur);
  const peak = opts.gain ?? 0.3;
  g.gain.setValueAtTime(0.0001, at);
  g.gain.exponentialRampToValueAtTime(peak, at + (opts.attack ?? 0.008));
  g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
  o.connect(g).connect(opts.bus ?? sfxBus);
  o.start(at);
  o.stop(at + dur + 0.05);
}

function noise(at: number, dur: number, gain: number, cutoff: number) {
  const c = ctx!;
  const buf = c.createBuffer(1, Math.ceil(c.sampleRate * dur), c.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  const src = c.createBufferSource();
  src.buffer = buf;
  const f = c.createBiquadFilter();
  f.type = 'lowpass';
  f.frequency.value = cutoff;
  const g = c.createGain();
  g.gain.value = gain;
  src.connect(f).connect(g).connect(sfxBus);
  src.start(at);
}

/** A deep "bum": sine with a falling pitch, a click for punch and a sub-octave for weight. */
function boom(at: number, freq: number, dur: number, gain: number) {
  tone(freq * 2.2, at, dur, { gain, to: freq * 0.55, attack: 0.004 });
  tone(freq, at, dur * 1.2, { gain: gain * 0.7, to: freq * 0.6, attack: 0.004 });
  noise(at, 0.035, gain * 0.5, 3500); // transient click
}

const sfxOk = () => prefs.sfx && ensure() !== null && ctx!.state === 'running';

export const sfx = {
  /**
   * Spell cast. Escalates with the combo like a multi-kill: bum → buum → buuum → buuuum, getting
   * deeper and longer, then from ×5 on a punchy "bam-bam  bam-bam" that stays.
   */
  correct(combo = 1) {
    if (!sfxOk()) return;
    const t = ctx!.currentTime;
    if (combo >= 5) {
      [0, 0.12, 0.36, 0.48].forEach((dt) => boom(t + dt, 70, 0.22, 0.75));
      tone(midi(88), t, 0.25, { type: 'triangle', gain: 0.06 });
      return;
    }
    const step = Math.max(1, combo) - 1; // 0..3
    boom(t, 95 - step * 13, 0.28 + step * 0.22, 0.55 + step * 0.1);
    tone(midi(84 - step * 2), t, 0.18, { type: 'triangle', gain: 0.05 }); // tiny sparkle so it still reads as "correct"
  },
  /** Miss / skip / timeout — soft descending buzz. */
  wrong() {
    if (!sfxOk()) return;
    const t = ctx!.currentTime;
    tone(220, t, 0.28, { type: 'sawtooth', gain: 0.12, to: 110 });
    tone(233, t + 0.02, 0.28, { type: 'square', gain: 0.05, to: 116 });
  },
  /** You took damage — thump. */
  hurt() {
    if (!sfxOk()) return;
    const t = ctx!.currentTime;
    tone(140, t, 0.22, { gain: 0.35, to: 50 });
    noise(t, 0.15, 0.25, 900);
  },
  /** Your spell lands on the opponent. */
  impact() {
    if (!sfxOk()) return;
    noise(ctx!.currentTime, 0.12, 0.15, 2500);
  },
  /** Dragon draws breath before the fire. */
  inhale() {
    if (!sfxOk()) return;
    const t = ctx!.currentTime;
    tone(55, t, 2.6, { type: 'sawtooth', gain: 0.08, to: 110, attack: 1.5 });
  },
  /** Fire breath roar. */
  fire() {
    if (!sfxOk()) return;
    const t = ctx!.currentTime;
    noise(t, 1.2, 0.5, 1400);
    tone(70, t, 1.1, { type: 'sawtooth', gain: 0.12, to: 40 });
  },
  /** Claw swipe on a mistake. */
  claw() {
    if (!sfxOk()) return;
    const t = ctx!.currentTime;
    noise(t, 0.18, 0.4, 6000);
    tone(160, t + 0.05, 0.2, { gain: 0.3, to: 60 });
  },
  tick() { if (sfxOk()) tone(880, ctx!.currentTime, 0.08, { gain: 0.12 }); },
  go() { if (sfxOk()) tone(1320, ctx!.currentTime, 0.25, { type: 'triangle', gain: 0.18 }); },
  win() {
    if (!sfxOk()) return;
    const t = ctx!.currentTime;
    [67, 71, 74, 79].forEach((n, i) => tone(midi(n), t + i * 0.12, 0.6, { type: 'triangle', gain: 0.2 }));
  },
  lose() {
    if (!sfxOk()) return;
    const t = ctx!.currentTime;
    [67, 63, 60].forEach((n, i) => tone(midi(n), t + i * 0.22, 0.7, { type: 'triangle', gain: 0.16 }));
  },
};

// ── Radio: endless generative music in the Japanese "in" scale (D Eb G A Bb) ──────────────
const radio = (() => {
  const STEP = 60 / 72 / 2; // eighth notes at 72 bpm
  const SCALE = [62, 63, 67, 69, 70]; // D Eb G A Bb
  const CHORDS = [[50, 57, 62], [55, 58, 62], [51, 55, 58], [50, 55, 57]]; // Dm5, Gm, Eb, Dsus4
  let timer: number | undefined;
  let nextTime = 0;
  let step = 0;
  let degree = 5;
  let delayIn: GainNode | null = null;

  function buildDelay() {
    const c = ctx!;
    const input = c.createGain();
    const d = c.createDelay(2);
    d.delayTime.value = STEP * 3;
    const fb = c.createGain(); fb.gain.value = 0.35;
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2200;
    input.connect(musicBus);
    input.connect(d); d.connect(lp).connect(fb).connect(d);
    lp.connect(musicBus);
    return input;
  }

  function pad(notes: number[], at: number, dur: number) {
    const c = ctx!;
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 700;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(0.05, at + 1.2);
    g.gain.setValueAtTime(0.05, at + dur - 1);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur + 0.6);
    lp.connect(g).connect(musicBus);
    for (const n of notes) {
      for (const detune of [-6, 6]) {
        const o = c.createOscillator();
        o.type = 'sawtooth';
        o.frequency.value = midi(n);
        o.detune.value = detune;
        o.connect(lp);
        o.start(at);
        o.stop(at + dur + 0.7);
      }
    }
  }

  function schedule() {
    const c = ctx!;
    while (nextTime < c.currentTime + 0.4) {
      const inBar = step % 8;
      const bar = Math.floor(step / 8);
      if (inBar === 0) {
        const chord = CHORDS[bar % CHORDS.length];
        pad(chord, nextTime, STEP * 8);
        tone(midi(chord[0] - 12), nextTime, STEP * 6, { gain: 0.09, bus: musicBus, attack: 0.05 }); // bass
        if (bar % 2 === 0) tone(90, nextTime, 0.5, { gain: 0.12, to: 45, bus: musicBus }); // soft taiko
      }
      // koto-like pluck: a sparse random walk over the scale
      if (Math.random() < (inBar % 2 === 0 ? 0.55 : 0.25)) {
        degree = Math.max(0, Math.min(9, degree + [-2, -1, -1, 1, 1, 2][Math.floor(Math.random() * 6)]));
        const note = SCALE[degree % 5] + 12 * Math.floor(degree / 5);
        tone(midi(note), nextTime, 1.4, { type: 'triangle', gain: 0.07, bus: delayIn!, attack: 0.004 });
        tone(midi(note + 12), nextTime, 0.4, { gain: 0.02, bus: delayIn!, attack: 0.004 });
      }
      nextTime += STEP;
      step++;
    }
  }

  return {
    start() {
      if (!ctx || timer !== undefined) return;
      delayIn ??= buildDelay();
      nextTime = ctx.currentTime + 0.1;
      musicBus.gain.cancelScheduledValues(ctx.currentTime);
      musicBus.gain.setTargetAtTime(0.55, ctx.currentTime, 0.8);
      schedule();
      timer = window.setInterval(schedule, 120);
    },
    stop() {
      if (!ctx || timer === undefined) return;
      clearInterval(timer);
      timer = undefined;
      musicBus.gain.setTargetAtTime(0, ctx.currentTime, 0.2);
    },
  };
})();

export const isRadioOn = () => prefs.radio;
export const isSfxOn = () => prefs.sfx;

export function setRadio(on: boolean) {
  prefs.radio = on;
  savePrefs();
  if (on) { ensure(); if (ctx?.state === 'suspended') void ctx.resume(); radio.start(); } else radio.stop();
}

export function setSfx(on: boolean) {
  prefs.sfx = on;
  savePrefs();
}
