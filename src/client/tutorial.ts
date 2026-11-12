// First-run tutorial: a few short cards (with a "try it" box), then a guided first battle against a
// beginner AI, with tips on each screen. Also: which modes are unlocked at your level (gradual unlocks).

import { MODE_LABEL, type GameMode } from '../shared/protocol';
import { MODE_LEVEL, modeUnlocked, xpForLevel } from '../shared/progress';
import { isCorrectReading } from '../shared/kana';
import { api } from './api';
import { lang, useRussianNow } from './i18n';
import * as audio from './audio';
import * as ui from './ui';
import { viewH, viewW, zrect } from './zoom';

const $ = ui.$;
const el = (tag: string, cls = '', text?: string | number) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = String(text);
  return e;
};

// ── gradual unlocks ─────────────────────────────────────────────────────────
let access = { level: 0, admin: false, beginner: false };
export function setModeAccess(level: number, admin: boolean, beginner = false) {
  access = { level, admin, beginner };
  for (const card of document.querySelectorAll<HTMLElement>('.mode-card[data-mode]')) {
    const mode = card.dataset.mode as GameMode;
    const locked = !canPlay(mode);
    card.classList.toggle('locked', locked);
    card.dataset.lock = !locked ? '' : beginnerLocked(mode) ? 'Master hiragana first' : `Unlocks at level ${MODE_LEVEL[mode]}`;
  }
}
const beginnerLocked = (_mode: GameMode) => false; // 0.9.9.3.4: every mode is open from the start
export const canPlay = (mode: GameMode) => !beginnerLocked(mode) && modeUnlocked(mode, xpForLevel(access.level), access.admin);
export const lockText = (mode: GameMode) => beginnerLocked(mode)
  ? 'Deck Duel is all kanji — tick "I\'ve mastered hiragana" in Settings first.'
  : `${MODE_LABEL[mode]} unlocks at level ${MODE_LEVEL[mode]} — win a few games first. (A friend can still invite you.)`;

// ── the tutorial ────────────────────────────────────────────────────────────
// 0.9.9.9.6: shorter, and it shows the game itself. Four cards (language; welcome + "do you read hiragana?";
// cast your first spell — 山, with the answer written out big; then a tour of the menu, a light on each part with a
// line on what it is and why), then a short battle against a beginner AI: the answer is shown under every word,
// the battle screen is explained (paused while it is), and the AI casts only once for every two of your spells.
type Stage = 'off' | 'cards' | 'tour' | 'battle';
let stage: Stage = 'off';
let hooks: { firstBattle: () => void; kana: (mastered: boolean) => Promise<void>; pause?: (on: boolean) => void };
export function initTutorial(h: typeof hooks) { hooks = h; }
export const inTutorialBattle = () => stage === 'battle';
/** the battle screen's tour is on: the game is paused, quietly (no pause screen) */
export const tutorialTouring = () => touring;
let touring = false;

const CARDS: Array<{ title: string; body: string; extra?: () => HTMLElement; choice?: true; language?: true; tryit?: true }> = [
  { title: 'Language · Язык', body: 'Choose the language for the game and this tutorial. · Выберите язык игры и обучения. (You can change it later in Settings.)', language: true },
  { title: 'Welcome, apprentice!', body: 'Every spell here is a Japanese word: read it right and it strikes your opponent. First — can you read hiragana (あいうえお)? If not, you start with kana and kanji open later.', choice: true },
  { title: 'Cast your first spell', body: 'A word appears. Type how it is read — in romaji with any keyboard, or in hiragana — and press Enter.', extra: tryIt, tryit: true },
];

/** The practice box: 山, its answer written out big, and a clear "type this" right above the box. */
function tryIt() {
  const box = el('div', 'tut-try');
  const k = el('span', 'tut-k', '山'); k.lang = 'ja';
  const ans = el('div', 'tut-ans');
  const kana = el('b', 'tut-ans-k', 'やま'); kana.lang = 'ja';
  ans.append(kana, el('span', 'tut-ans-r', 'yama'), el('span', 'tut-ans-m', '· mountain'));
  const say = el('div', 'tut-say');
  say.append(el('span', '', 'Type '), el('b', 'tut-say-w', 'yama'), el('span', '', ' and press Enter ↵'));
  const input = el('input', 'tut-in') as HTMLInputElement;
  input.placeholder = 'yama'; input.lang = 'ja'; input.autocomplete = 'off'; input.spellcheck = false; input.setAttribute('autocapitalize', 'off');
  input.setAttribute('aria-label', 'Type yama');
  const go = el('button', 'pill primary tut-cast', 'Cast ↵') as HTMLButtonElement;
  go.type = 'button';
  const msg = el('span', 'tut-msg hint', '');
  const cast = () => {
    if (isCorrectReading(input.value, ['やま'])) {
      msg.textContent = '✓ やま — your first spell!'; msg.className = 'tut-msg ok'; audio.sfx.correct(1);
      box.classList.add('done');
      setTimeout(() => (document.querySelector('#tutorial .tut-actions .big:not([hidden])') as HTMLButtonElement | null)?.focus(), 400);
    } else { msg.textContent = 'Almost — type yama (or やま)'; msg.className = 'tut-msg no'; audio.sfx.wrong(); input.select(); }
  };
  input.addEventListener('keydown', (e) => { if (e.key !== 'Enter' || e.isComposing) return; e.stopPropagation(); e.preventDefault(); cast(); });
  go.onclick = cast;
  const row = el('div', 'tut-row'); row.append(input, go);
  box.append(k, ans, say, row, msg);
  setTimeout(() => input.focus(), 60);
  return box;
}

export function startTutorial() {
  if (stage !== 'off') return;
  stage = 'cards';
  void api.event('tutorial_start');
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
  const next = el('button', 'big', last ? 'Next: a quick look around' : 'Next') as HTMLButtonElement;
  const skip = el('button', 'pill', 'Skip tutorial') as HTMLButtonElement;
  if (c.language) {
    // first of all: the language — the rest of the tutorial follows it
    const en = el('button', 'big' + (lang() === 'en' ? '' : ' alt'), 'English') as HTMLButtonElement;
    const ru = el('button', 'big' + (lang() === 'ru' ? '' : ' alt'), 'Русский') as HTMLButtonElement;
    en.dataset.noI18n = ''; ru.dataset.noI18n = '';
    en.onclick = () => show(i + 1);
    ru.onclick = () => { if (lang() !== 'ru') useRussianNow(); const sel = document.getElementById('langSel') as HTMLSelectElement | null; if (sel) sel.value = 'ru'; show(i + 1); };
    next.hidden = true;
    queueMicrotask(() => actions.append(en, ru));
  }
  if (c.choice) {
    // two answers instead of Next: they decide which levels this player starts with
    const yes = el('button', 'big', 'Yes — I read hiragana') as HTMLButtonElement;
    const no = el('button', 'big alt', 'Not yet — I\'m a beginner') as HTMLButtonElement;
    const pickKana = (mastered: boolean) => { yes.disabled = no.disabled = true; void api.event(mastered ? 'tutorial_kana_yes' : 'tutorial_kana_no'); void hooks.kana(mastered).finally(() => show(i + 1)); };
    yes.onclick = () => pickKana(true);
    no.onclick = () => pickKana(false);
    next.hidden = true;
    queueMicrotask(() => actions.append(no, yes)); // after "Skip tutorial"
  }
  next.onclick = () => {
    if (!last) return show(i + 1);
    box.hidden = true;
    void startTour();
  };
  skip.onclick = () => { void api.event('tutorial_skip'); finish(); };
  actions.append(skip, next);
  card.append(dots, el('h2', '', c.title), el('p', '', c.body), ...(c.extra ? [c.extra()] : []), actions);
  card.classList.toggle('tut-wide', !!c.tryit);
  box.replaceChildren(card);
  box.hidden = false;
  if (!c.tryit) next.focus();
}

// ── 0.9.9.9.6: the spotlight — one part of the screen lit, the rest dimmed, a bubble saying what it is ──────────
interface Step { sel: string; title: string; text: string }
const MENU_TOUR: Step[] = [
  { sel: '#whoBtn', title: 'You', text: 'Your name and level. Tap it for your stats, your picture and today’s streak tasks.' },
  { sel: '#tasksBtn:not([hidden])', title: 'Daily streak', text: 'Three small tasks a day keep your streak alight — the flame grows the longer it lasts.' },
  { sel: '.mc-cards', title: 'Play and learn', text: 'Battles online or with friends, Study spells (flashcards), Quizzes, the Daily challenge and Kana — every card is one of them.' },
  { sel: '.mc-nav', title: 'Your wizard', text: 'Customize your hero, see your Progress and past matches, and Settings (language, sound, theme).' },
  { sel: '#railFab:not([hidden]), #friendRail:not([hidden])', title: 'Friends', text: 'Who is online, invites to your room, and their profiles.' },
  { sel: '#inboxBtn', title: 'Messages', text: 'Chat with friends — and write to the team: bugs, ideas, questions. We answer here.' },
];
const BATTLE_TOUR: Step[] = [
  { sel: '#kanji', title: 'The spell', text: 'The word to cast. Read it…' },
  { sel: '#tutHint:not([hidden])', title: 'The answer', text: '…and here is how — only in this first battle. Type the romaji (or the kana).' },
  { sel: '#answer', title: 'Cast here', text: 'Type it and press Enter. Don’t know a word? Esc skips it.' },
  { sel: '#meCard', title: 'You', text: 'Your health. The AI’s spells take it down.' },
  { sel: '#oppCard', title: 'Your opponent', text: 'Its health — bring it to zero to win. Right and fast in a row (a combo) hits harder.' },
];
let tourAbort: (() => void) | null = null;
/** the first of the selector's choices that is really on screen (a hidden rail is still in the page, off to the side) */
function pick(sel: string): HTMLElement | null {
  for (const one of sel.split(',')) {
    const e = document.querySelector<HTMLElement>(one.trim());
    if (!e || !e.getClientRects().length) continue;
    const r = e.getBoundingClientRect();
    if (r.width > 0 && r.height > 0 && r.right > 0 && r.left < innerWidth) return e;
  }
  return null;
}
async function spotlight(steps: Step[], opts: { finalLabel: string; onSkip?: () => void }): Promise<'done' | 'skip'> {
  const live = steps.filter((s) => !!pick(s.sel));
  const spot = el('div', 'tut-spot');
  const hole = el('div', 'tut-hole');
  const bub = el('div', 'tut-bubble');
  spot.append(hole, bub);
  document.body.append(spot);
  return new Promise((done) => {
    let i = 0;
    const end = (how: 'done' | 'skip') => { removeEventListener('resize', place); spot.remove(); tourAbort = null; done(how); };
    tourAbort = () => end('skip');
    const place = () => {
      const s = live[i];
      const t = s && pick(s.sel);
      if (!t) return;
      const r = zrect(t), pad = 8;
      const x = Math.max(4, r.left - pad), y = Math.max(4, r.top - pad), w = Math.min(viewW() - x - 4, r.width + pad * 2), hh = Math.min(viewH() - y - 4, r.height + pad * 2);
      Object.assign(hole.style, { left: `${x}px`, top: `${y}px`, width: `${w}px`, height: `${hh}px` });
      const bw = Math.min(340, viewW() - 24);
      bub.style.width = `${bw}px`;
      bub.style.left = `${Math.max(12, Math.min(viewW() - bw - 12, x + w / 2 - bw / 2))}px`;
      const below = y + hh + 12;
      const bh = bub.offsetHeight || 150;
      bub.style.top = `${below + bh < viewH() - 8 ? below : Math.max(8, y - bh - 12)}px`;
    };
    const render = () => {
      const s = live[i];
      if (!s) return end('done');
      const lastStep = i === live.length - 1;
      const n = el('small', 'tb-step', `${i + 1} / ${live.length}`);
      const nx = el('button', 'pill primary', lastStep ? opts.finalLabel : 'Next') as HTMLButtonElement;
      const sk = el('button', 'pill', 'Skip') as HTMLButtonElement;
      nx.type = sk.type = 'button';
      nx.onclick = () => { i++; if (i >= live.length) end('done'); else render(); };
      sk.onclick = () => { opts.onSkip?.(); end('skip'); };
      const acts = el('div', 'tb-acts'); acts.append(sk, nx);
      bub.replaceChildren(n, el('b', 'tb-title', s.title), el('p', '', s.text), acts);
      // (a part below the fold — the menu's foot on a phone — is scrolled to first)
      const t = pick(s.sel);
      const tr = t?.getBoundingClientRect();
      if (t && tr && (tr.bottom > innerHeight - 20 || tr.top < 0)) { t.scrollIntoView({ block: 'center' }); setTimeout(place, 350); }
      place();
      requestAnimationFrame(place);
      nx.focus();
    };
    addEventListener('resize', place);
    render();
  });
}

async function startTour() {
  stage = 'tour';
  void api.event('tutorial_tour');
  ui.show('menu');
  await new Promise((r) => setTimeout(r, 350));
  const how = await spotlight(MENU_TOUR, { finalLabel: 'Got it' });
  if (stage !== 'tour') return;
  void how;
  // the last card: the short battle
  const box = $('tutorial');
  const card = el('div', 'tut-card');
  const actions = el('div', 'tut-actions');
  const go = el('button', 'big', 'Start the battle') as HTMLButtonElement;
  const later = el('button', 'pill', 'Maybe later') as HTMLButtonElement;
  go.onclick = () => { stage = 'battle'; box.hidden = true; void api.event('tutorial_battle'); hooks.firstBattle(); };
  later.onclick = () => { void api.event('tutorial_skip'); finish(); };
  actions.append(later, go);
  card.append(el('h2', '', 'Your first battle'), el('p', '', 'A short duel with a beginner AI. You get 20 seconds to look at the words first — then, in the battle, the answer is written under every word.'), actions);
  box.replaceChildren(card);
  box.hidden = false;
  go.focus();
}

/** Done (or skipped): never shown again. */
export function finish() {
  stage = 'off';
  tourAbort?.();
  if (touring) { touring = false; hooks.pause?.(false); }
  $('tutorial').hidden = true;
  coach(null);
  void api.tutorialDone().catch(() => {});
}

/** main.ts: a word came up in the battle — the first time, the battle screen is explained (the game waits) */
let battleToured = false;
export function tutorialChallenge() {
  if (stage !== 'battle' || battleToured) return;
  battleToured = true;
  coach(null);
  touring = true;
  hooks.pause?.(true);
  setTimeout(() => {
    void spotlight(BATTLE_TOUR, { finalLabel: 'Fight!' }).then(() => {
      touring = false;
      hooks.pause?.(false);
      ($('answer') as HTMLInputElement).focus();
    });
  }, 250);
}

/** Tips on each screen during the first battle. */
export function tutorialScreen(screen: string) {
  if (stage !== 'battle') return;
  if (screen === 'prep') coach('These are the words of the battle — a quick look (no need to learn them now: the answers will be shown). Press Ready when you like.');
  else if (screen === 'battle') coach(null);
  else if (screen === 'results') { void api.event('tutorial_done'); coach('Well cast — that was your first battle! Words you missed go to Struggling spells to review. Every mode is open now: have fun.'); setTimeout(finish, 12_000); }
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
