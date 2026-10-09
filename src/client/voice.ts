// Spoken pronunciation of a word after a correct cast.
//
// Source: the browser's own Japanese text-to-speech (Web Speech API). It covers every word in the game,
// needs no audio files and has no licensing questions. Open recordings (Kanji alive, Lingua Libre)
// only cover a small part of our 6,600 words. A male voice is preferred when the device has one
// (Windows: Ichiro / Keita, Apple: Otoya / Hattori …); otherwise the default Japanese voice is pitched
// down. We speak the kana reading, so the voice can't pick a wrong reading for the kanji.

const KEY = 'kb:voice';
type Prefs = { on: boolean; vol: number };
const prefs: Prefs = (() => { try { return { on: true, vol: 0.9, ...JSON.parse(localStorage.getItem(KEY) ?? '{}') }; } catch { return { on: true, vol: 0.9 }; } })();
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(prefs)); } catch { /* private mode */ } };

const MALE = /ichiro|keita|otoya|hattori|daichi|naoki|takumi|male|男/i;
const synth = typeof speechSynthesis !== 'undefined' ? speechSynthesis : null;
let voice: SpeechSynthesisVoice | null = null;
let male = false;

function pick() {
  if (!synth) return;
  const ja = synth.getVoices().filter((v) => v.lang.toLowerCase().startsWith('ja'));
  const m = ja.find((v) => MALE.test(v.name));
  voice = m ?? ja.find((v) => v.localService) ?? ja[0] ?? null;
  male = !!m;
}
if (synth) { pick(); synth.addEventListener?.('voiceschanged', pick); }

export const voiceAvailable = () => !!synth;
export const getVoicePrefs = () => ({ ...prefs, name: voice?.name ?? null, male });
export function setVoiceVolume(v: number) { prefs.vol = Math.max(0, Math.min(1, v)); prefs.on = prefs.vol > 0; save(); }

/** Say a word (kana reading). Kana-only or romaji strings: pass the kana. */
export function say(kana: string) {
  if (!synth || !prefs.on || prefs.vol <= 0 || document.visibilityState !== 'visible') return;
  if (!voice) pick();
  if (!voice && !synth.getVoices().length) return; // no Japanese voice on this device
  const u = new SpeechSynthesisUtterance(kana);
  u.lang = 'ja-JP';
  if (voice) u.voice = voice;
  u.rate = 0.95;
  u.pitch = male ? 1 : 0.6; // no male voice installed: lower the default one
  u.volume = prefs.vol;
  synth.cancel();
  synth.speak(u);
}
