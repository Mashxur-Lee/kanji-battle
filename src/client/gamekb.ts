// A compact keyboard for phones in battles (Reading, Rapid, Boss): letters only, about a third of the
// height of the phone's own keyboard, and it never pops in and out between words. Typed romaji shows as
// kana above it as you type. Writing modes keep the phone keyboard (a Japanese IME is needed there).
// Settings → "Battle keyboard" switches back to the phone's keyboard.

import { romajiToHiragana } from '../shared/kana';
import * as ui from './ui';
import { tr } from './i18n';
import { uiScale } from './zoom';

const KEY = 'kb:gamekb';
const ROWS = ['qwertyuiop', 'asdfghjkl-', 'zxcvbnm'];
const touch = () => matchMedia('(pointer: coarse)').matches;

export const gameKbPref = (): boolean => { try { return localStorage.getItem(KEY) !== 'system'; } catch { return true; } };
export function setGameKbPref(on: boolean) { try { localStorage.setItem(KEY, on ? 'game' : 'system'); } catch { /* private mode */ } }
/** Is the setting relevant on this device? */
export const gameKbAvailable = touch;

let active = false;
/**
 * 0.9.9.7: the keyboard types into any field, not only the battle's answer box — the Daily challenge,
 * Deck Duel's overtime, the dictionary search. `raw`: show what's typed (a search can be English too).
 */
interface Target { el: HTMLInputElement; skip?: () => void; raw?: boolean }
const battle = (): Target => ({ el: ui.$<HTMLInputElement>('answer'), skip: () => ui.$('skip').click() });
let target: Target | null = null;
let shownBefore = false;

function input() { return (target ?? battle()).el; }
const locked = () => (target && target.el.id !== 'answer' ? target.el.disabled : ui.answerLocked());
function preview() {
  const v = input().value;
  const raw = target?.raw || (target?.el.id === 'answer' && ui.currentAnswerMode() === 'romaji');
  ui.$('gkPreview').textContent = raw || !v ? v : romajiToHiragana(v);
}
function type(ch: string) {
  const i = input();
  if (locked()) return;
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
    key('Skip', 'wide skip', () => (target ?? battle()).skip?.()),
    key('n\'', 'ch', () => type('\'')),
    key('␣', 'wide space', () => type(' ')),
    key('Cast ⏎', 'wide enter cast', () => { input().dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })); preview(); }),
  );
  const pv = document.createElement('div');
  pv.id = 'gkPreview'; pv.className = 'gk-preview'; pv.lang = 'ja';
  kb.replaceChildren(pv, ...rows, last);
}

/** On (battle, typed answers, phone, setting on) or off. */
export function setGameKb(on: boolean) {
  if (on) target = battle();
  show(on);
}
/** 0.9.9.7: the keyboard for another field (null: off). `skip` adds the Skip key; `raw` shows the text as typed. */
export function useGameKb(el: HTMLInputElement | null, opts: { skip?: () => void; raw?: boolean } = {}) {
  if (!el) { if (target && target.el.id !== 'answer') show(false); return; }
  if (!touch() || !gameKbPref()) return;
  if (target && target.el !== el) target.el.inputMode = '';
  target = { el, ...opts };
  show(true);
}
function show(on: boolean) {
  on = on && touch() && gameKbPref();
  if (on && !ui.$('gameKb').childElementCount) build();
  active = on;
  ui.$('gameKb').hidden = !on;
  document.body.classList.toggle('game-kb', on);
  const t = target ?? battle();
  document.body.classList.toggle('game-kb-other', on && t.el.id !== 'answer');
  ui.$('gameKb').classList.toggle('no-skip', !t.skip);
  ui.$('gameKb').classList.toggle('no-space', t.el.id === 'answer');
  const enter = ui.$('gameKb').querySelector('.gk.cast'); if (enter) enter.textContent = t.el.id === 'answer' ? tr('Cast ⏎') : tr('Enter ⏎');
  const i = input();
  i.inputMode = on ? 'none' : ''; // no phone keyboard while ours is up
  if (!on) target = null;
  if (on) { preview(); if (i.id !== 'answer') { i.addEventListener('input', preview); } }
  if (on === shownBefore) return; // only a new field: no need to lay the screen out again
  shownBefore = on;
  // the 3D arena (hand, staff, combo, flames) fits in the space above the keyboard
  requestAnimationFrame(() => {
    const h = on ? ui.$('gameKb').getBoundingClientRect().height : 0;
    document.documentElement.style.setProperty('--kb-h', `${Math.round(h / uiScale())}px`); // page px (the UI may be zoomed)
    dispatchEvent(new Event('resize'));
  });
}
ui.$('answer').addEventListener('input', () => { if (active) preview(); });
/** A new word: clear the preview. */
export function gameKbReset() { if (active) preview(); }
