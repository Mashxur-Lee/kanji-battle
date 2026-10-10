// A compact keyboard for phones in battles (Reading, Rapid, Boss): letters only, about a third of the
// height of the phone's own keyboard, and it never pops in and out between words. Typed romaji shows as
// kana above it as you type. Writing modes keep the phone keyboard (a Japanese IME is needed there).
// Settings → "Battle keyboard" switches back to the phone's keyboard.

import { romajiToHiragana } from '../shared/kana';
import * as ui from './ui';

const KEY = 'kb:gamekb';
const ROWS = ['qwertyuiop', 'asdfghjkl-', 'zxcvbnm'];
const touch = () => matchMedia('(pointer: coarse)').matches;

export const gameKbPref = (): boolean => { try { return localStorage.getItem(KEY) !== 'system'; } catch { return true; } };
export function setGameKbPref(on: boolean) { try { localStorage.setItem(KEY, on ? 'game' : 'system'); } catch { /* private mode */ } }
/** Is the setting relevant on this device? */
export const gameKbAvailable = touch;

let active = false;

function input() { return ui.$<HTMLInputElement>('answer'); }
function preview() {
  const v = input().value;
  ui.$('gkPreview').textContent = ui.currentAnswerMode() === 'romaji' || !v ? v : romajiToHiragana(v);
}
function type(ch: string) {
  const i = input();
  if (ui.answerLocked()) return;
  i.value += ch;
  i.dispatchEvent(new Event('input', { bubbles: true })); // the staff reacts, the gem grows
  preview();
}

function build() {
  const kb = ui.$('gameKb');
  const key = (label: string, cls: string, fn: () => void) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = `gk ${cls}`; b.textContent = label;
    // pointerdown: instant, and the answer box keeps the focus
    b.addEventListener('pointerdown', (e) => { e.preventDefault(); fn(); b.classList.add('down'); setTimeout(() => b.classList.remove('down'), 90); });
    return b;
  };
  const rows = ROWS.map((r, i) => {
    const row = document.createElement('div');
    row.className = 'gk-row';
    for (const c of r) row.append(key(c, 'ch', () => type(c)));
    if (i === 2) row.append(key('⌫', 'wide back', () => { const el = input(); el.value = el.value.slice(0, -1); el.dispatchEvent(new Event('input', { bubbles: true })); preview(); }));
    return row;
  });
  const last = document.createElement('div');
  last.className = 'gk-row';
  last.append(
    key('Skip', 'wide skip', () => ui.$('skip').click()),
    key('n\'', 'ch', () => type('\'')),
    key('Cast ⏎', 'wide enter', () => { input().dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })); preview(); }),
  );
  const pv = document.createElement('div');
  pv.id = 'gkPreview'; pv.className = 'gk-preview'; pv.lang = 'ja';
  kb.replaceChildren(pv, ...rows, last);
}

/** On (battle, typed answers, phone, setting on) or off. */
export function setGameKb(on: boolean) {
  on = on && touch() && gameKbPref();
  if (on && !ui.$('gameKb').childElementCount) build();
  active = on;
  ui.$('gameKb').hidden = !on;
  document.body.classList.toggle('game-kb', on);
  const i = input();
  i.inputMode = on ? 'none' : ''; // no phone keyboard while ours is up
  if (on) preview();
}
export const gameKbActive = () => active;
ui.$('answer').addEventListener('input', () => { if (active) preview(); });
/** A new word: clear the preview. */
export function gameKbReset() { if (active) preview(); }
