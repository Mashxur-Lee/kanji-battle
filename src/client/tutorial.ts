// First-run tutorial: a few short cards (with a "try it" box), then a guided first battle against a
// beginner AI, with tips on each screen. Also: which modes are unlocked at your level (gradual unlocks).

import { MODE_LABEL, type GameMode } from '../shared/protocol';
import { MODE_LEVEL, modeUnlocked, xpForLevel } from '../shared/progress';
import { isCorrectReading } from '../shared/kana';
import { api } from './api';
import * as audio from './audio';
import * as ui from './ui';

const $ = ui.$;
const el = (tag: string, cls = '', text?: string | number) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = String(text);
  return e;
};

// ── gradual unlocks ─────────────────────────────────────────────────────────
let access = { level: 0, admin: false };
export function setModeAccess(level: number, admin: boolean) {
  access = { level, admin };
  for (const card of document.querySelectorAll<HTMLElement>('.mode-card[data-mode]')) {
    const mode = card.dataset.mode as GameMode;
    const locked = !canPlay(mode);
    card.classList.toggle('locked', locked);
    card.dataset.lock = locked ? `Unlocks at level ${MODE_LEVEL[mode]}` : '';
  }
}
export const canPlay = (mode: GameMode) => modeUnlocked(mode, xpForLevel(access.level), access.admin);
export const lockText = (mode: GameMode) => `${MODE_LABEL[mode]} unlocks at level ${MODE_LEVEL[mode]} — win a few games first. (A friend can still invite you.)`;

// ── the tutorial ────────────────────────────────────────────────────────────
type Stage = 'off' | 'cards' | 'battle';
let stage: Stage = 'off';
let hooks: { firstBattle: () => void };
export function initTutorial(h: typeof hooks) { hooks = h; }
export const inTutorialBattle = () => stage === 'battle';

const CARDS: Array<{ title: string; body: string; extra?: () => HTMLElement }> = [
  { title: 'Welcome, apprentice', body: 'In Kanji Wizards every spell is a Japanese word. Learn a word — and you can cast it at your opponent.' },
  {
    title: 'Cast by reading',
    body: 'A kanji appears; type how it is read — in hiragana, or in romaji with a normal keyboard — and press Enter. Fast and right in a row hits harder.',
    extra: tryIt,
  },
  { title: 'Study makes you stronger', body: 'Study spells is a flashcard deck. Every spell you learn today raises your critical-hit chance, and words you miss in battle come back there to review.' },
  { title: 'More to unlock', body: 'You start with Kanji Reading and Rapid. Kanji Writing and the Boss fight unlock at level 1, Deck Duel at level 2. There is also a Daily challenge, Progress, Friends — and monthly goals with rewards.' },
  { title: 'Your first battle', body: 'Ready? You\'ll study 10 easy words for a minute, then duel a beginner AI with them.' },
];

/** A tiny practice box: 山 → やま / yama. */
function tryIt() {
  const box = el('div', 'tut-try');
  const k = el('span', 'tut-k', '山'); k.lang = 'ja';
  const input = el('input') as HTMLInputElement;
  input.placeholder = 'type its reading: yama'; input.lang = 'ja'; input.autocomplete = 'off';
  const msg = el('span', 'hint', 'Mountain — try it!');
  input.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' || e.isComposing) return;
    e.stopPropagation();
    if (isCorrectReading(input.value, ['やま'])) { msg.textContent = '✓ やま — a spell!'; msg.className = 'ok'; audio.sfx.correct(1); }
    else { msg.textContent = 'Not quite — it\'s やま (yama)'; msg.className = 'no'; audio.sfx.wrong(); }
  });
  box.append(k, input, msg);
  setTimeout(() => input.focus(), 50);
  return box;
}

export function startTutorial() {
  if (stage !== 'off') return;
  stage = 'cards';
  show(0);
}

function show(i: number) {
  const c = CARDS[i];
  const box = $('tutorial');
  const dots = el('div', 'tut-dots');
  CARDS.forEach((_, j) => dots.append(el('i', j === i ? 'on' : '')));
  const card = el('div', 'tut-card');
  const actions = el('div', 'tut-actions');
  const last = i === CARDS.length - 1;
  const next = el('button', 'big', last ? 'Fight a beginner AI' : 'Next') as HTMLButtonElement;
  const skip = el('button', 'pill', last ? 'Maybe later' : 'Skip tutorial') as HTMLButtonElement;
  next.onclick = () => {
    if (!last) return show(i + 1);
    stage = 'battle';
    box.hidden = true;
    hooks.firstBattle();
  };
  skip.onclick = () => finish();
  actions.append(skip, next);
  card.append(dots, el('h2', '', c.title), el('p', '', c.body), ...(c.extra ? [c.extra()] : []), actions);
  box.replaceChildren(card);
  box.hidden = false;
  next.focus();
}

/** Done (or skipped): never shown again. */
export function finish() {
  stage = 'off';
  $('tutorial').hidden = true;
  coach(null);
  void api.tutorialDone().catch(() => {});
}

/** Tips on each screen during the first battle. */
export function tutorialScreen(screen: string) {
  if (stage !== 'battle') return;
  if (screen === 'prep') coach('Read the 10 words — reading and meaning. When the battle starts, they come back as kanji only. Press Ready when you\'re done.');
  else if (screen === 'battle') coach('Type the reading of the kanji (hiragana or romaji) and press Enter. Don\'t know it? Esc skips. Keep your HP above the AI\'s!');
  else if (screen === 'results') { coach('Well cast! Words you missed are now in Study spells → Struggling. Level up to unlock Writing, Boss and Deck Duel.'); setTimeout(finish, 12_000); }
  else if (screen === 'menu') finish();
}

function coach(text: string | null) {
  const c = $('coach');
  if (!text) { c.hidden = true; return; }
  const close = el('button', 'pill', 'Got it') as HTMLButtonElement;
  close.onclick = () => { c.hidden = true; };
  c.replaceChildren(el('b', '', 'Tip'), el('span', '', text), close);
  c.hidden = false;
}
