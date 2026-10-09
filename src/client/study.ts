import { LEVEL_LABEL, LEVELS, type Level } from '../shared/protocol';
import { BACKGROUNDS, critText, levelOf, type BackgroundId } from '../shared/progress';
import type { Rating } from '../shared/srs';
import { api, type DeckCounts, type Profile, type StudyCard } from './api';
import { backgroundThumb } from './backgrounds';
import * as ui from './ui';

const $ = ui.$;
type Deck = 'all' | 'struggling';

/** Called whenever XP / crit / background change, so the top bar and background stay in sync. */
let onProfile: (p: Profile) => void = () => {};
export const onProfileChange = (fn: (p: Profile) => void) => { onProfile = fn; };

function counts(el: HTMLElement, c: DeckCounts) {
  el.innerHTML = '';
  for (const [cls, n, label] of [['c-new', c.new, 'new'], ['c-learn', c.learning, 'learning'], ['c-due', c.due, 'to review']] as const) {
    const s = document.createElement('span');
    s.className = cls;
    const b = document.createElement('b');
    b.textContent = String(n);
    s.append(b, label);
    el.append(s);
  }
}

function levelChips(selected: Level[]) {
  const box = $('studyLevels');
  box.replaceChildren(...LEVELS.map((lv) => {
    const label = document.createElement('label');
    label.className = 'chip' + (selected.includes(lv) ? ' on' : '');
    const input = document.createElement('input');
    input.type = 'checkbox'; input.value = lv; input.checked = selected.includes(lv);
    label.append(input, LEVEL_LABEL[lv]);
    return label;
  }));
}

/** The "Study spells" screen: deck counts, level ticks, and the "new spells added" notice. */
export async function openStudy() {
  ui.show('study');
  try {
    const s = await api.study();
    render(s);
  } catch (e) { ui.toast((e as Error).message); }
}

function render(s: Awaited<ReturnType<typeof api.study>>) {
  levelChips(s.studyLevels);
  counts($('countsAll'), s.decks.all);
  counts($('countsStruggle'), s.decks.struggling);
  $('studyCrit').textContent = `✦ ${critText(s.profile.crit)} crit · ${s.profile.learned} learned`;
  const notice = $('studyNotice');
  notice.hidden = !s.notice;
  notice.textContent = s.notice ? `✨ ${s.notice} new spell${s.notice === 1 ? '' : 's'} added to “All spells” — happy studying!` : '';
  if (!s.studyLevels.length && !s.decks.all.total) {
    notice.hidden = false;
    notice.textContent = 'Tick one or more levels under “All spells” to get 25 new spells today (and every day).';
  }
  const has = (c: DeckCounts) => c.new + c.learning + c.due > 0;
  $<HTMLButtonElement>('studyAll').disabled = !has(s.decks.all);
  $<HTMLButtonElement>('studyStruggle').disabled = !has(s.decks.struggling);
  onProfile(s.profile);
}

$('studyLevels').addEventListener('change', async () => {
  const levels = [...document.querySelectorAll<HTMLInputElement>('#studyLevels input')].filter((i) => i.checked).map((i) => i.value as Level);
  try { render(await api.setStudyLevels(levels)); } catch (e) { ui.toast((e as Error).message); }
});

// ── flashcard session (Anki-style) ──────────────────────────────────────────
let queue: StudyCard[] = [];
let deck: Deck = 'all';
let current: StudyCard | null = null;
let flipped = false;
let busy = false;

async function startSession(d: Deck) {
  deck = d;
  ui.show('review');
  $('reviewDone').hidden = true;
  try {
    queue = (await api.queue(d)).cards;
  } catch (e) { ui.toast((e as Error).message); queue = []; }
  next();
}

function next() {
  current = queue.shift() ?? null;
  flipped = false;
  const done = !current;
  $('flash').hidden = done;
  $('showAnswer').hidden = done;
  $('rateRow').hidden = true;
  $('reviewDone').hidden = !done;
  $('reviewLeft').textContent = done ? '' : `${queue.length + 1} left · ${deck === 'all' ? 'All spells' : 'Struggling'}`;
  if (!current) return;
  $('fcKanji').textContent = current.kanji;
  $('fcLevel').textContent = LEVEL_LABEL[current.level] + (current.state === 'new' ? ' · new' : '');
  $('fcReading').textContent = current.reading;
  $('fcMeaning').textContent = current.meaning;
  $('fcBack').hidden = true;
  const card = $('flash');
  card.style.animation = 'none'; void card.offsetWidth; card.style.animation = '';
  for (const b of document.querySelectorAll<HTMLButtonElement>('#rateRow .rate')) {
    b.querySelector('.iv')!.textContent = current.intervals[b.dataset.rating as Rating];
  }
  card.focus();
}

function flip() {
  if (!current || flipped) return;
  flipped = true;
  $('fcBack').hidden = false;
  $('showAnswer').hidden = true;
  $('rateRow').hidden = false;
}

async function rate(r: Rating) {
  if (!current || !flipped || busy) return;
  busy = true;
  const card = current;
  try {
    const res = await api.review(card.vocabId, r);
    $('whoCrit').textContent = `✦ ${critText(res.crit)} crit`;
    // Anki shows "again" cards again in the same session once their short step is up
    if (r === 'again') queue.splice(Math.min(3, queue.length), 0, { ...card, state: 'learning', intervals: { again: '1m', hard: '6m', good: '10m', easy: '4d' } });
    else if (r === 'hard' && card.state !== 'review') queue.splice(Math.min(6, queue.length), 0, card);
  } catch (e) { ui.toast((e as Error).message); }
  busy = false;
  next();
}

$('showAnswer').onclick = flip;
$('flash').onclick = flip;
for (const b of document.querySelectorAll<HTMLButtonElement>('#rateRow .rate')) b.onclick = () => void rate(b.dataset.rating as Rating);
addEventListener('keydown', (e) => {
  if ($('review').hidden || e.target instanceof HTMLInputElement) return;
  if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipped ? void rate('good') : flip(); }
  const n = ['1', '2', '3', '4'].indexOf(e.key);
  if (n >= 0 && flipped) void rate((['again', 'hard', 'good', 'easy'] as Rating[])[n]);
});
$('studyAll').onclick = () => void startSession('all');
$('studyStruggle').onclick = () => void startSession('struggling');
$('reviewBack').onclick = () => void openStudy();
$('reviewDoneBack').onclick = () => void openStudy();

// ── customize: backgrounds unlocked by level ────────────────────────────────
export function openCustomize(profile: Profile) {
  const lvl = levelOf(profile.xp);
  $('bgGrid').replaceChildren(...BACKGROUNDS.map((b) => {
    const locked = lvl < b.level;
    const tile = document.createElement('button');
    tile.className = 'bg-tile' + (profile.background === b.id ? ' on' : '') + (locked ? ' locked' : '');
    tile.innerHTML = backgroundThumb(b.id);
    const name = document.createElement('div');
    name.className = 'bg-name';
    name.textContent = `${b.name}${profile.background === b.id ? ' ✓' : ''}`;
    tile.append(name);
    if (locked) {
      const lock = document.createElement('div');
      lock.className = 'lock';
      lock.textContent = `🔒 Level ${b.level}`;
      tile.append(lock);
    }
    tile.onclick = async () => {
      if (locked) return ui.toast(`Reach level ${b.level} to unlock ${b.name}`);
      try {
        const { profile: p } = await api.setBackground(b.id as BackgroundId);
        onProfile(p);
        openCustomize(p);
      } catch (e) { ui.toast((e as Error).message); }
    };
    return tile;
  }));
  ui.show('customize');
}
