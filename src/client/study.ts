import { starButton } from './stars';
import { exampleFor, loadExamples } from './examples';
import { hideKanji, kanjiTappable, wordsTappable } from './kanjihelp';
import { locale } from './i18n';
import { LEVEL_LABEL, LEVELS, ONO_TYPES, type Level } from '../shared/protocol';
import { BACKGROUNDS, beta, BORDERS, CHARACTER_DEFS, characterOf, characterUnlocked, leagueIn, type CharacterId, borderUnlocked, flameColor, flameUnlocked, levelOf, staffUnlocked, type BackgroundId, FLAMES, STAFFS, POSE_DEFS, poseOf, poseUnlocked } from '../shared/progress';
import { arenaPreview, staffPreview } from './arena';
import type { ArenaApi } from './arena3d';
import { artUrl } from './backgrounds';
import type { StaffPreview } from './staffpreview';
import { avatarSvg } from './wizard';
import { staffSvg } from './art2d';
import { showStrokeOrder } from './strokes';
import type { Rating } from '../shared/srs';
import { api, type DeckCounts, type Profile, type StudyCard } from './api';
import type { ProfileLook } from '../shared/protocol';
import { VERSION } from '../shared/version';
import type { DeckId } from '../shared/srs';
import { DECK_LABEL, initDecks } from './decks';
import { backgroundThumb, getTimePref, resolveTime } from './backgrounds';
import * as ui from './ui';
import { BADGES_MAX, badgeRow, renderAchievements } from './achievements';
import { tr } from './i18n';

const $ = ui.$;
type Deck = DeckId;

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

/**
 * All spells — a number per level: how many of its words are added a day (0.9.9.4.4). 0.9.9.4.4.1: − / + buttons
 * (steps of 1) and nothing is saved until you press Apply — a slip of the finger can't add a pile of words.
 */
let savedPlan: Partial<Record<Level, number>> = {};
let draftPlan: Partial<Record<Level, number>> = {};
const lockedLv = new Set<Level>();
/** The day's total — locked levels give no words, so they don't count. */
const planTotal = (p: Partial<Record<Level, number>>) => PLAN_LEVELS.reduce((a, l) => a + (lockedLv.has(l) ? 0 : p[l] ?? 0), 0);
/** 0.9.9.9.5: the word levels — hiragana and katakana are learned in the Kana section, not in All spells */
const PLAN_LEVELS = LEVELS.filter((l) => l !== 'KANA' && l !== 'KATA');
function levelPlan(per: Partial<Record<Level, number>>) {
  savedPlan = { ...per };
  draftPlan = { ...per };
  const box = $('studyLevels');
  box.replaceChildren(...PLAN_LEVELS.map((lv) => {
    const row = document.createElement('div');
    row.className = 'lp-row';
    row.dataset.level = lv;
    const name = document.createElement('span');
    name.className = 'lp-name';
    name.textContent = LEVEL_LABEL[lv];
    const minus = Object.assign(document.createElement('button'), { type: 'button', className: 'lp-btn', textContent: '−' });
    const plus = Object.assign(document.createElement('button'), { type: 'button', className: 'lp-btn', textContent: '+' });
    minus.setAttribute('aria-label', `${LEVEL_LABEL[lv]} −1`); plus.setAttribute('aria-label', `${LEVEL_LABEL[lv]} +1`);
    const input = document.createElement('input');
    Object.assign(input, { type: 'text', inputMode: 'numeric', value: String(per[lv] ?? 0), maxLength: 3 });
    input.dataset.level = lv;
    input.setAttribute('aria-label', `${LEVEL_LABEL[lv]}: ${tr('new words a day')}`);
    const set = (n: number) => { draftPlan[lv] = Math.max(0, Math.min(150, Math.round(n) || 0)); input.value = String(draftPlan[lv]); planChanged(); };
    minus.onclick = () => set((draftPlan[lv] ?? 0) - 1);
    plus.onclick = () => set((draftPlan[lv] ?? 0) + 1);
    input.oninput = () => { input.value = input.value.replace(/\D/g, ''); draftPlan[lv] = Math.min(150, Number(input.value) || 0); planChanged(); };
    input.onblur = () => set(Number(input.value));
    input.onkeydown = (e) => { if (e.key === 'ArrowUp') { e.preventDefault(); plus.click(); } if (e.key === 'ArrowDown') { e.preventDefault(); minus.click(); } if (e.key === 'Enter') input.blur(); };
    const step = document.createElement('div');
    step.className = 'lp-step';
    step.append(minus, input, plus);
    row.append(name, step);
    // (0.9.9.9.5: no level is locked here any more — a かな beginner learns kana in the Kana section meanwhile)
    lockedLv.delete(lv);
    return row;
  }));
  planChanged();
}
function planChanged() {
  for (const row of document.querySelectorAll<HTMLElement>('#studyLevels .lp-row')) {
    const l = row.dataset.level as Level;
    row.classList.toggle('on', (draftPlan[l] ?? 0) > 0 && !lockedLv.has(l));
    row.classList.toggle('changed', (draftPlan[l] ?? 0) !== (savedPlan[l] ?? 0));
  }
  const total = planTotal(draftPlan);
  // 0.9.9.4.4.2: the day's total, big — "25 new spells a day"
  const tot = $('dailyTotal');
  tot.hidden = !total;
  tot.replaceChildren(Object.assign(document.createElement('b'), { textContent: String(total) }), document.createTextNode(` ${tr('new spells a day')}`));
  const dirty = PLAN_LEVELS.some((l) => (draftPlan[l] ?? 0) !== (savedPlan[l] ?? 0));
  const bar = $('planApply');
  bar.hidden = !dirty;
  if (!dirty) return;
  const more = PLAN_LEVELS.reduce((a, l) => a + Math.max(0, (draftPlan[l] ?? 0) - (savedPlan[l] ?? 0)), 0);
  $('planApplyText').textContent = more ? `Adds up to ${more} new words to “All spells” today` : 'Fewer new words from tomorrow';
}
$('planApplyBtn').onclick = async () => {
  const per: Partial<Record<Level, number>> = {};
  for (const l of PLAN_LEVELS) if ((draftPlan[l] ?? 0) > 0) per[l] = draftPlan[l];
  const btn = $<HTMLButtonElement>('planApplyBtn');
  btn.disabled = true;
  try { render(await api.setDailyLevels(per)); } catch (err) { ui.toast((err as Error).message); }
  btn.disabled = false;
};
$('planCancelBtn').onclick = () => levelPlan(savedPlan);

/** The "Study spells" screen: deck counts, level ticks, and the "new spells added" notice. */
export async function openStudy() {
  ui.show('study');
  try {
    const s = await api.study();
    render(s);
  } catch (e) { ui.toast((e as Error).message); }
}

function render(s: Awaited<ReturnType<typeof api.study>>) {
  levelPlan(s.dailyByLevel ?? Object.fromEntries(s.studyLevels.map((l) => [l, Math.round(s.dailyNew / s.studyLevels.length)])));
  paintPaused(s.paused);
  counts($('countsAll'), s.decks.all);
  counts($('countsStruggle'), s.decks.struggling);
  counts($('countsCustom'), s.decks.custom);
  if (s.decks.ono) counts($('countsOno'), s.decks.ono);
  onoSaved = s.onoDaily ?? 0;
  $<HTMLInputElement>('onoDaily').value = String(onoSaved);
  onoChanged();
  $('ssToday').textContent = String(s.profile.learnedToday);
  $('ssTotal').textContent = String(s.profile.learned);
  $('ssXp').textContent = `+${s.studyXpToday ?? 0}`;
  const notice = $('studyNotice');
  notice.hidden = !s.notice;
  notice.textContent = s.notice ? `${s.notice} new spell${s.notice === 1 ? '' : 's'} added to “All spells” — happy studying!` : '';
  if (!s.studyLevels.length && !s.decks.all.total) {
    notice.hidden = false;
    notice.textContent = 'Set how many new words of a level you want under “All spells” (e.g. N5: 10) — they are added today and every day.';
  }
  const has = (c: DeckCounts) => c.new + c.learning + c.due > 0;
  $<HTMLButtonElement>('studyAll').disabled = !has(s.decks.all);
  $<HTMLButtonElement>('studyStruggle').disabled = !has(s.decks.struggling);
  $<HTMLButtonElement>('studyCustom').disabled = !has(s.decks.custom);
  $<HTMLButtonElement>('studyOno').disabled = !!s.decks.ono && !has(s.decks.ono);
  onProfile(s.profile);
}

// 0.9.9.7: new Onomatopoeia words a day — 0.9.9.7.1: like All spells, a change waits for Apply (or Cancel)
let onoSaved = 0;
function onoChanged() {
  const box = $<HTMLInputElement>('onoDaily');
  const n = Number(box.value) || 0;
  $('onoPlanRow').classList.toggle('on', n > 0);
  $('onoPlanRow').classList.toggle('changed', n !== onoSaved);
  $('onoApply').hidden = n === onoSaved;
  $('onoApplyText').textContent = n > onoSaved ? `${n} new a day — adds ${n - onoSaved} more today` : n ? `${n} new a day` : 'No new onomatopoeia';
}
{
  const box = $<HTMLInputElement>('onoDaily');
  const set = (n: number) => { box.value = String(Math.max(0, Math.min(100, Math.round(n) || 0))); onoChanged(); };
  $('onoMinus').onclick = () => set(Number(box.value) - 1);
  $('onoPlus').onclick = () => set(Number(box.value) + 1);
  box.oninput = () => { box.value = box.value.replace(/\D/g, '').slice(0, 3); onoChanged(); };
  box.onblur = () => set(Number(box.value));
  box.onkeydown = (e) => { if (e.key === 'Enter') box.blur(); };
  $('onoCancelBtn').onclick = () => set(onoSaved);
  $('onoApplyBtn').onclick = async () => {
    const btn = $<HTMLButtonElement>('onoApplyBtn');
    btn.disabled = true;
    try { render(await api.setOnoDaily(Number(box.value) || 0)); } catch (e) { ui.toast((e as Error).message); }
    btn.disabled = false;
  };
}

initDecks({ changed: () => { if (!$('study').hidden) void api.study().then(render).catch(() => {}); }, back: () => ui.show('quizzes') }); // (0.9.9.9.5.1: the quizzes have their own screen)

// ── flashcard session (Anki-style) ──────────────────────────────────────────
let queue: StudyCard[] = [];
let deck: Deck = 'all';
let current: StudyCard | null = null;
let flipped = false;
let busy = false;

async function startSession(d: Deck) {
  deck = d;
  history = []; undoBtn();
  void loadExamples(); // ready by the first answer
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
  $('reviewLeft').textContent = done ? '' : `${queue.length + 1} left · ${DECK_LABEL[deck]}`;
  if (!current) return;
  hideKanji();
  $('fcKanji').textContent = current.kanji;
  $('fcLevel').textContent = (current.custom ? 'Custom' : LEVEL_LABEL[current.level]) + (current.state === 'new' ? ' · new' : '');
  // onomatopoeia: which kind (擬声語 sound · 擬態語 state · 擬情語 feeling)
  if (current.ono) $('fcLevel').append(' · ', Object.assign(document.createElement('span'), { className: 'ono-kind', lang: 'ja', textContent: `${ONO_TYPES[current.ono].ja} ${ONO_TYPES[current.ono].romaji}` }));
  $('fcReading').textContent = current.reading;
  $('fcMeaning').textContent = current.meaning;
  $('fcBack').hidden = true;
  $('fcExample').replaceChildren();
  // 0.9.9.5: ★ the word (reading passages use starred words first)
  $('fcStar').replaceChildren(starButton(current.vocabId, 'star-btn fc-star-btn'));
  $('fcStrokes').hidden = true;
  $('fcStrokeBox').hidden = true;
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
  $('fcStrokes').hidden = !/[\p{Script=Han}々]/u.test(current.kanji);
  // 0.9.9.4.2: an example sentence with the word in it, and its translation
  const card = current;
  void exampleFor(card.vocabId).then((ex) => { if (ex && current === card && flipped) { wordsTappable(ex); $('fcExample').replaceChildren(ex); } });
  // 0.9.9.4.4: tap a kanji of the word (or of the example) for its meaning, readings and parts
  kanjiTappable($('fcKanji'));
}
/** How to write the word: animated stroke order under the card. */
function strokes() {
  if (!current || !flipped || $('fcStrokes').hidden) return;
  const box = $('fcStrokeBox');
  box.hidden = false;
  void showStrokeOrder(box, current.kanji);
}
$('fcStrokes').onclick = (e) => { e.stopPropagation(); strokes(); };

// 0.9.9.4.2: the next card comes at once; the rating goes to the server behind it, in order. Waiting for
// the server first made every swipe stall (and froze the buttons when the connection dropped mid-session).
let sending: Promise<void> = Promise.resolve();
// 0.9.9.4.4: "Undo" — the card you just answered comes back (a misclick or a wrong swipe), as it was
let history: Array<{ card: StudyCard; queue: StudyCard[] }> = [];
const undoBtn = () => { $<HTMLButtonElement>('reviewUndo').disabled = !history.length; };
function undo() {
  const h = history.pop();
  undoBtn();
  if (!h) return;
  const d = deck;
  sending = sending.then(() => api.undo(h.card.vocabId, d).then(() => {}, (e) => { ui.toast((e as Error).message); }));
  queue = [h.card, ...h.queue];
  next();
}
/**
 * 0.9.9.4.4.2: each answered card gives +5 XP. The first few of a session say so on the card; after that it's
 * quiet (it would only distract).
 */
const XP_SHOW = 5; // per day
let xpShown = 0;
function xpPop(n: number) {
  const key = `kb:xpPop:${new Date().toDateString()}`;
  try { xpShown = Number(localStorage.getItem(key)) || xpShown; } catch { /* private mode */ }
  if (xpShown >= XP_SHOW || $('review').hidden) return;
  xpShown++;
  try { localStorage.setItem(key, String(xpShown)); } catch { /* private mode */ }
  const p = document.createElement('div');
  p.className = 'xp-pop';
  p.textContent = `+${n} XP`;
  $('flash').append(p);
  setTimeout(() => p.remove(), 1200);
}
function rate(r: Rating) {
  if (!current || !flipped || busy) return;
  const card = current, d = deck;
  history.push({ card, queue: [...queue] });
  if (history.length > 30) history.shift();
  undoBtn();
  sending = sending.then(() => api.review(card.vocabId, r, d).then((res) => { if (res.xp) xpPop(res.xp); }, (e) => { ui.toast((e as Error).message); }));
  // Anki shows "again" cards again in the same session once their short step is up
  if (r === 'again') queue.splice(Math.min(3, queue.length), 0, { ...card, state: 'learning', intervals: { again: '1m', hard: '6m', good: '10m', easy: '4d' } });
  else if (r === 'hard' && card.state !== 'review') queue.splice(Math.min(6, queue.length), 0, card);
  next();
}
/** Back to the decks once every rating has been saved (so the counts are right). */
async function leaveSession() {
  hideKanji();
  await sending;
  void openStudy();
}

$('showAnswer').onclick = flip;
$('flash').onclick = () => { if (!swiped) flip(); };

// ── swipe the card (0.9.9.3, like Quizlet): drag it left for Again / Hard, right for Okay / Easy — the further
// you drag, the stronger the answer; a label on the card says which one you'd give if you let go here
let swiped = false;
{
  const card = $('flash');
  const stamp = document.createElement('div');
  stamp.className = 'fc-stamp';
  stamp.hidden = true;
  card.append(stamp);
  const ZONES: Array<[Rating, string]> = [['again', 'Again'], ['hard', 'Hard'], ['good', 'Okay'], ['easy', 'Easy']];
  const zoneOf = (dx: number): [Rating, string] | null => {
    // 0.9.9.4.4: half as far as before — a short drag is enough (was 16% / 42% of the card)
    const w = Math.max(220, card.offsetWidth), f = dx / w;
    if (f <= -0.3) return ZONES[0];
    if (f <= -0.09) return ZONES[1];
    if (f >= 0.3) return ZONES[3];
    if (f >= 0.09) return ZONES[2];
    return null;
  };
  let x0 = 0, y0 = 0, id = -1, dx = 0, dragging = false, lastX = 0, lastT = 0, vx = 0;
  const reset = (animate: boolean) => {
    card.style.transition = animate ? 'transform .25s ease-out' : '';
    card.style.transform = '';
    stamp.hidden = true;
    card.classList.remove('dragging');
  };
  card.addEventListener('pointerdown', (e) => {
    if (!current || busy || (e.target as Element).closest('button, .kj')) return;
    id = e.pointerId; x0 = e.clientX; y0 = e.clientY; dx = 0; dragging = false; swiped = false; lastX = e.clientX; lastT = e.timeStamp; vx = 0;
  });
  card.addEventListener('pointermove', (e) => {
    if (e.pointerId !== id) return;
    dx = e.clientX - x0;
    const dt = e.timeStamp - lastT;
    if (dt > 0) { vx = 0.6 * vx + 0.4 * ((e.clientX - lastX) / dt); lastX = e.clientX; lastT = e.timeStamp; }
    if (!dragging) {
      if (Math.abs(dx) < 10 || Math.abs(dx) < Math.abs(e.clientY - y0)) return; // a tap, or scrolling
      dragging = true; card.setPointerCapture(id); card.classList.add('dragging'); card.style.transition = '';
    }
    card.style.transform = `translateX(${dx}px) rotate(${dx / 22}deg)`;
    const z = zoneOf(dx);
    stamp.hidden = !z;
    if (z) { stamp.textContent = tr(z[1]); stamp.className = `fc-stamp ${z[0]} ${dx < 0 ? 'l' : 'r'}`; }
  });
  const end = (e: PointerEvent) => {
    if (e.pointerId !== id) return;
    id = -1;
    if (!dragging) return;
    swiped = true; setTimeout(() => { swiped = false; }, 0); // no flip from the click that follows
    // a quick flick counts too (Hard / Okay), even if it was short
    const z = zoneOf(dx) ?? (Math.abs(vx) > 0.45 && Math.abs(dx) > 24 && Math.sign(vx) === Math.sign(dx) ? ZONES[dx < 0 ? 1 : 2] : null);
    if (!z || !current) { reset(true); return; }
    // away it flies, then the rating (seeing the answer first if you hadn't)
    card.style.transition = 'transform .22s ease-in, opacity .22s';
    card.style.transform = `translateX(${Math.sign(dx) * innerWidth}px) rotate(${Math.sign(dx) * 25}deg)`;
    setTimeout(() => { reset(false); if (!flipped) flip(); rate(z[0]); }, 200);
  };
  card.addEventListener('pointerup', end);
  card.addEventListener('pointercancel', (e) => { if (e.pointerId === id) { id = -1; reset(true); } });
}
for (const b of document.querySelectorAll<HTMLButtonElement>('#rateRow .rate')) b.onclick = () => rate(b.dataset.rating as Rating);
addEventListener('keydown', (e) => {
  if ($('review').hidden || e.target instanceof HTMLInputElement) return;
  if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipped ? rate('good') : flip(); }
  const n = ['1', '2', '3', '4'].indexOf(e.key);
  if (n >= 0 && flipped) rate((['again', 'hard', 'good', 'easy'] as Rating[])[n]);
  if ((e.key === 's' || e.key === 'S') && flipped) strokes();
  if ((e.key === 'z' || e.key === 'Z' || e.key === 'Backspace') && !e.repeat) { e.preventDefault(); undo(); }
});
$('studyAll').onclick = () => void startSession('all');
$('studyStruggle').onclick = () => void startSession('struggling');
$('studyCustom').onclick = () => void startSession('custom');
$('studyOno').onclick = () => void startSession('ono');
$('reviewBack').onclick = () => void leaveSession();
$('reviewUndo').onclick = () => undo();
$('reviewDoneBack').onclick = () => void leaveSession();

// ── customize: magic staff (login streak) · arena (level) · omnipotence (level) ──────────────────
type CustTab = 'staff' | 'arena' | 'omni' | 'profile' | 'pose' | 'character';
interface CustItem {
  id: string; name: string; blurb: string; locked: boolean; lock: string; equipped: boolean;
  tile: () => Node; equip: () => Promise<{ profile: Profile }>; lockedToast: string;
}
let custTab: CustTab = 'character'; // (0.9.9.9.5.3: the Hero Locker opens on your character)
const picked: Partial<Record<CustTab, string>> = {};
let cust: { profile: Profile; isAdmin: boolean; onTimeChange: () => void } | null = null;
let preview: StaffPreview | null = null;
let previewTried = false;
let staffThumbs: Record<string, string> = {};

const el = (tag: string, cls = '', text?: string | number) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = String(text);
  return e;
};

/** Staffs unlock by login streak, backgrounds and flames by level; admins have everything. */
// 0.9.9.9.5.5: Customize opened only after ~10 s on a phone — the 3D previews were made (and every staff drawn for
// its tile) before the screen could show. Now the screen shows at once; the 3D starts a moment later, and the staff
// pictures are drawn one at a time while the phone is idle (and kept for the next visit).
let heavyOk = false;
export function openCustomize(profile: Profile, isAdmin = false, onTimeChange: () => void = () => {}) {
  cust = { profile, isAdmin, onTimeChange };
  heavyOk = false;
  orbitIdle = true;
  renderCustomize();
  ui.show('customize');
  requestAnimationFrame(() => setTimeout(() => {
    heavyOk = true;
    if ($('customize').hidden) return;
    renderCustomize();
    void ensurePreview();
  }, 60));
}

const THUMBS_KEY = `kb:staffThumbs:${VERSION}`; // (new pictures with each version: the staffs may have changed)
const idle = (cb: () => void) => ((globalThis as unknown as { requestIdleCallback?: (f: () => void, o?: object) => number }).requestIdleCallback ?? ((f: () => void) => setTimeout(f, 120)))(cb, { timeout: 1500 });
async function ensurePreview() {
  if (previewTried) { if (custTab === 'staff') renderCustomize(); return; }
  previewTried = true;
  try { staffThumbs = { ...JSON.parse(localStorage.getItem(THUMBS_KEY) ?? '{}'), ...staffThumbs }; } catch { /* none kept */ }
  preview = await staffPreview($<HTMLCanvasElement>('staffCanvas'));
  renderCustomize();
  if (!preview) return;
  const todo = STAFFS.map((s) => s.id).filter((id) => !staffThumbs[id]);
  if (!todo.length) return;
  const step = () => {
    const id = todo.shift();
    if (!id || !preview) {
      try {
        for (let i = localStorage.length - 1; i >= 0; i--) { const k = localStorage.key(i); if (k?.startsWith('kb:staffThumbs:') && k !== THUMBS_KEY) localStorage.removeItem(k); }
        localStorage.setItem(THUMBS_KEY, JSON.stringify(staffThumbs));
      } catch { /* full */ }
      if (!$('customize').hidden) renderCustomize();
      return;
    }
    try { staffThumbs[id] = preview.thumbs([id], 128, 128)[0]; } catch { /* skip it */ }
    idle(step);
  };
  idle(step);
}

/** 0.9.9.9.5.3: the Hero Locker's slots — your loadout, on both sides of you (they were tabs along the top) */
const SLOTS: { tab: CustTab; label: string; side: 'left' | 'right' }[] = [
  { tab: 'character', label: 'Character', side: 'left' },
  { tab: 'staff', label: 'Magic staff', side: 'left' },
  { tab: 'arena', label: 'Arena', side: 'left' },
  { tab: 'omni', label: 'Omnipotence', side: 'right' },
  { tab: 'pose', label: 'Combo pose', side: 'right' },
  { tab: 'profile', label: 'Profile card', side: 'right' },
];
let trayTab: CustTab | null = null; // (the tray slides up when the slot changes)
/** 0.9.9.9.5.5: no slot picked — the camera swings slowly round you (tap the open slot again to get back here) */
let orbitIdle = true;

const thisMonth = () => new Date().getMonth() + 1;
const monthName = (m: number) => new Date(2026, m - 1, 15).toLocaleDateString(locale(), { month: 'long' });

function custItems(profile: Profile, isAdmin: boolean, tab: CustTab = custTab): CustItem[] {
  const lvl = levelOf(profile.xp);
  const best = Math.max(profile.bestStreak ?? 0, profile.streak ?? 0);
  const time = resolveTime(getTimePref());
  if (tab === 'staff') {
    // every staff is listed — seasonal ones stay locked until you complete their month's goals
    return STAFFS.map((s) => ({
      id: s.id, name: s.name, blurb: s.blurb,
      locked: !isAdmin && !staffUnlocked(s.id, best, profile.unlocks),
      lock: s.season ? `${monthName(s.season)} goals` : s.streak ? `${s.streak}-day streak` : '',
      lockedToast: s.season ? `The ${s.name} is the ${monthName(s.season)} reward — complete that month's goals (see Progress)${s.season === thisMonth() ? ' — it\'s on now!' : ''}` : `Log in ${s.streak} days in a row to unlock the ${s.name} (your best: ${best})`,
      equipped: (profile.staff ?? 'verdant') === s.id,
      tile: () => {
        if (staffThumbs[s.id]) { const img = document.createElement('img'); img.src = staffThumbs[s.id]; img.alt = ''; return img; }
        const g = el('div', 'pixel-staff'); g.innerHTML = staffSvg(s.id); return g;
      },
      equip: () => api.setStaff(s.id),
    }));
  }
  if (tab === 'arena') {
    return BACKGROUNDS.map((b) => ({
      id: b.id, name: b.name, blurb: 'The scene behind every battle (and its sounds in the menus).',
      locked: !isAdmin && !beta.open && lvl < b.level, lock: `Level ${b.level}`,
      lockedToast: `Reach level ${b.level} to unlock ${b.name}`,
      equipped: profile.background === b.id,
      tile: () => { const d = el('div', 'bg-thumb'); d.innerHTML = backgroundThumb(b.id, time); return d; },
      equip: () => api.setBackground(b.id as BackgroundId),
    }));
  }
  if (tab === 'profile') {
    return BORDERS.map((b) => ({
      id: b.id, name: b.name === 'No border' ? b.name : `${b.name} border`, blurb: `${b.blurb} Round your profile picture — everyone sees it in lobbies, battles and on your profile card.`,
      locked: !isAdmin && !borderUnlocked(b.id, lvl, profile.unlocks), lock: b.league ? `${b.league === 'KANA' ? 'Kana' : b.league} league` : b.unlock ? 'Tutorial' : `Level ${b.level}`,
      lockedToast: b.league ? (b.league === 'KANA' ? 'Play your first Daily challenge to get the Kana League border' : `Reach the ${b.league} league in the Daily challenge to unlock the ${b.name} border`)
        : b.unlock ? 'Finish the tutorial to get the Beta border' : `Reach level ${b.level} to unlock the ${b.name} border`,
      equipped: (profile.border ?? 'none') === b.id,
      tile: () => avatarDisc(profile, b.id, 'ci-avatar'),
      equip: () => api.setBorder(b.id),
    }));
  }
  if (tab === 'character') {
    // 0.9.9.9.5.2: your character — picked here (it came from your levels); the Daily challenge leagues unlock them
    const mine = characterOf(profile.unlocks), league = leagueIn(profile.unlocks);
    return CHARACTER_DEFS.map((d) => ({
      id: d.id, name: d.name, blurb: `${d.blurb} Everyone sees your character in battles.`,
      locked: !isAdmin && !characterUnlocked(d.id, profile.unlocks), lock: `${d.league} league`,
      lockedToast: `Reach the ${d.league} league in the Daily challenge to unlock the ${d.name} (you are in the ${league === 'KANA' ? 'Kana' : league} league)`,
      equipped: mine === d.id,
      tile: () => { const t = el('div', 'char-tile'); t.innerHTML = avatarSvg(d.id, 'me', profile.staff); return t; },
      equip: () => api.setCharacter(d.id),
    }));
  }
  if (tab === 'pose') {
    const mine = poseOf(profile.unlocks);
    return POSE_DEFS.map((d) => ({
      id: d.id, name: d.name, blurb: `${d.blurb} ${d.id === 'none' ? '' : 'You strike it while you’re on fire — 5 correct casts in a row, or your Omnipotence — and everyone in the battle sees it.'}`.trim(),
      locked: !isAdmin && !poseUnlocked(d.id, profile.learned ?? 0), lock: `${d.learned} spells learned`,
      lockedToast: `Learn ${d.learned} spells to unlock the ${d.name} pose (you have ${profile.learned ?? 0})`,
      equipped: mine === d.id,
      tile: () => { const t = el('div', 'pose-tile'); t.innerHTML = poseArt(d.id); return t; },
      equip: () => api.setPose(d.id),
    }));
  }
  return FLAMES.map((f) => ({
    id: f.id, name: `${f.name} flames`, blurb: f.season ? `${monthName(f.season)} reward: complete that month's goals (Progress page). Wraps you at 5 in a row and during your Omnipotence.` : 'Wraps you at 5 correct casts in a row (Reading, Writing, Rapid, Boss) and while your Omnipotence (hero power) is active in Deck Duel. Everyone sees your colour.',
    locked: !isAdmin && !flameUnlocked(f.id, profile.xp, profile.unlocks), lock: f.season ? `${monthName(f.season)} goals` : `Level ${f.level}`,
    lockedToast: f.season ? `${f.name} flames are the ${monthName(f.season)} reward — complete that month's goals (see Progress)${f.season === thisMonth() ? ' — it\'s on now!' : ''}` : `Reach level ${f.level} to unlock ${f.name} flames`,
    equipped: (profile.flame ?? 'blue') === f.id,
    tile: () => { const d = el('span', 'flame-dot big'); d.style.setProperty('--c', f.color); return d; },
    equip: () => api.setFlame(f.id),
  }));
}

/**
 * 0.9.9.7.1: a little drawing of each combo pose (it was an emoji) — a robed wizard with a glowing staff:
 * standing, floating with a bent leg, side-on aiming the staff, the staff upright in both hands.
 */
function poseArt(id: string): string {
  const robe = '#a58bff', robeLo = '#7a5ce6', skin = '#ffe2cc', wood = '#c08850', gem = '#8ff0ff';
  const glow = (x: number, y: number) => `<circle cx="${x}" cy="${y}" r="7" fill="${gem}" opacity=".28"/><circle cx="${x}" cy="${y}" r="3.6" fill="${gem}"/>`;
  const shadow = (y: number, w: number) => `<ellipse cx="40" cy="${y}" rx="${w}" ry="3" fill="#000" opacity=".22"/>`;
  const head = (x: number, y: number, tilt = 0) => `<g transform="rotate(${tilt} ${x} ${y})"><path d="M${x - 11} ${y - 5} L${x + 11} ${y - 5} L${x + 2} ${y - 25} Z" fill="${robeLo}"/><rect x="${x - 13}" y="${y - 7}" width="26" height="4" rx="2" fill="${robeLo}"/><circle cx="${x}" cy="${y + 3}" r="6.5" fill="${skin}"/></g>`;
  let art = '';
  if (id === 'float') {
    art = `${shadow(74, 10)}<path d="M33 30 L47 30 L52 54 L28 54 Z" fill="${robe}"/><path d="M34 54 L33 64" stroke="${robeLo}" stroke-width="4" stroke-linecap="round"/><path d="M45 54 L48 60 L42 63" stroke="${robeLo}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      ${head(40, 24)}<path d="M33 34 L24 42" stroke="${robe}" stroke-width="4" stroke-linecap="round"/><path d="M47 34 L54 40" stroke="${robe}" stroke-width="4" stroke-linecap="round"/><path d="M57 14 L54 62" stroke="${wood}" stroke-width="3" stroke-linecap="round"/>${glow(57, 13)}
      <path d="M20 60 q4 -4 8 0 M52 66 q4 -4 8 0" stroke="${gem}" stroke-width="1.5" fill="none" opacity=".7"/>`;
  } else if (id === 'aim') {
    art = `${shadow(72, 12)}<path d="M30 34 L42 34 L46 68 L26 68 Z" fill="${robe}"/>${head(36, 28, -4)}<path d="M40 38 L54 40" stroke="${robe}" stroke-width="4" stroke-linecap="round"/><circle cx="55" cy="40" r="2.6" fill="${skin}"/>
      <path d="M46 41 L70 39" stroke="${wood}" stroke-width="3" stroke-linecap="round"/>${glow(71, 39)}<path d="M74 34 l4 -3 M75 39 h5 M74 44 l4 3" stroke="${gem}" stroke-width="1.5" stroke-linecap="round"/>`;
  } else if (id === 'twohand') {
    art = `${shadow(72, 12)}<path d="M31 34 L49 34 L54 68 L26 68 Z" fill="${robe}"/>${head(40, 28)}<path d="M40 10 L40 70" stroke="${wood}" stroke-width="3" stroke-linecap="round"/>${glow(40, 9)}
      <path d="M32 38 L38 46 M48 38 L42 52" stroke="${robe}" stroke-width="4" stroke-linecap="round"/><circle cx="40" cy="46" r="2.8" fill="${skin}"/><circle cx="40" cy="52" r="2.8" fill="${skin}"/>`;
  } else {
    art = `${shadow(72, 12)}<path d="M31 34 L49 34 L54 68 L26 68 Z" fill="${robe}"/>${head(40, 28)}<path d="M32 38 L28 52 M48 38 L54 46" stroke="${robe}" stroke-width="4" stroke-linecap="round"/><path d="M58 16 L54 70" stroke="${wood}" stroke-width="3" stroke-linecap="round"/>${glow(58, 15)}`;
  }
  return `<svg viewBox="4 4 78 74" aria-hidden="true">${art}</svg>`;
}
const days = (n: number) => `${n} day${n === 1 ? '' : 's'}`;
const CUST_SUB: Record<CustTab, (p: Profile) => string> = {
  staff: (p) => `The staff in your hand (other players see it too). Classic staffs unlock with your login streak — your best: ${days(Math.max(p.bestStreak ?? 0, p.streak ?? 0))}. Seasonal staffs are monthly rewards (see Progress).`,
  arena: () => 'The background of your battles. Backgrounds unlock as you level up (each level needs 1000 XP more than the last).',
  profile: () => 'Your profile card: a frame round your picture (the Beta one, and one for each Daily challenge league you reach) and up to 3 achievement badges under your name.',
  character: (p) => `Your character in battles. The Goblin is yours from the start — climb the Daily challenge leagues to unlock the Knight (N5), the Witch (N3) and the Wizard (N2). You are in the ${leagueIn(p.unlocks) === 'KANA' ? 'Kana' : leagueIn(p.unlocks)} league.`,
  pose: () => 'Combo pose: what your character does while it’s on fire (5 in a row, or Omnipotence) — float, take aim, or hold the staff in both hands. New poses unlock as you learn spells (100, 200, 300).',
  omni: () => 'Omnipotence: the flames of a 5× combo in battle, and of your Omnipotence (hero power) in Deck Duel. More colours unlock as you level up.',
};

function renderCustomize() {
  if (!cust) return;
  const { profile, isAdmin, onTimeChange } = cust;
  // the slots: each shows what you have on (its picture and name); the open one is lit
  for (const side of ['left', 'right'] as const) {
    $(side === 'left' ? 'lkLeft' : 'lkRight').replaceChildren(...SLOTS.filter((x) => x.side === side).map((slot) => {
      const its = custItems(profile, isAdmin, slot.tab);
      const on = its.find((i) => i.equipped) ?? its[0];
      const have = its.filter((i) => !i.locked).length;
      const sel0 = !orbitIdle && slot.tab === custTab;
      const b = el('button', `lk-slot${sel0 ? ' on' : ''}`) as HTMLButtonElement;
      b.type = 'button'; b.dataset.tab = slot.tab;
      b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', String(sel0));
      const pic = el('div', `lk-pic ${slot.tab}`); if (on) pic.append(on.tile());
      const txt = el('div', 'lk-txt');
      txt.append(el('small', '', slot.label), el('b', '', on?.name ?? '—'), el('span', 'lk-count', `${have} / ${its.length}`));
      b.append(pic, txt);
      // (0.9.9.9.5.5: the open slot, tapped again, closes — nothing picked, the camera goes round you)
      b.onclick = () => { if (sel0) orbitIdle = true; else { orbitIdle = false; custTab = slot.tab; } renderCustomize(); };
      return b;
    }));
  }
  $('customize').classList.toggle('lk-idle', orbitIdle);
  $('lkTray').hidden = orbitIdle;
  if (orbitIdle) {
    trayTab = null;
    renderIdle();
    return;
  }
  arena3?.orbit?.(false);
  $('lkTrayTitle').textContent = SLOTS.find((x) => x.tab === custTab)!.label;
  if (trayTab !== custTab) {
    trayTab = custTab;
    $('lkTray').animate([{ opacity: 0, translate: '0 26px' }, { opacity: 1, translate: '0 0' }], { duration: 380, easing: 'cubic-bezier(.2, .8, .2, 1)' });
  }
  const items = custItems(profile, isAdmin);
  const lvl = levelOf(profile.xp);
  const sel = items.find((i) => i.id === picked[custTab]) ?? items.find((i) => i.equipped) ?? items[0];
  $('custSub').textContent = CUST_SUB[custTab](profile);

  // time of day (arena only)
  // (0.9.9.6: no time-of-day choice any more — the arena follows your clock)
  $('bgTimes').hidden = true;
  void onTimeChange;

  const equip = async (it: CustItem) => {
    if (it.locked) return ui.toast(it.lockedToast);
    try {
      const { profile: p } = await it.equip();
      cust!.profile = p;
      onProfile(p);
      renderCustomize();
    } catch (e) { ui.toast((e as Error).message); }
  };

  $('custGrid').className = `cust-grid ${custTab}`;
  $('custGrid').replaceChildren(...items.map((it) => {
    const b = el('button', 'cust-item' + (it === sel ? ' sel' : '') + (it.equipped ? ' equipped' : '') + (it.locked ? ' locked' : ''));
    b.setAttribute('aria-pressed', String(it === sel));
    const pic = el('div', 'ci-pic'); pic.append(it.tile());
    b.append(pic, el('div', 'ci-name', it.name), el('div', 'ci-state', it.equipped ? '✓ Equipped' : it.locked ? `Locked · ${it.lock}` : 'Unlocked'));
    b.onclick = () => { picked[custTab] = it.id; renderCustomize(); };
    b.ondblclick = () => void equip(it);
    return b;
  }));

  // Profile: your badges (earned achievements) under the borders
  const extra = $('custExtra');
  extra.hidden = custTab !== 'profile';
  if (custTab === 'profile') {
    const box = el('div', 'ach-box');
    const draw = () => renderAchievements(box, profile.unlocks, profile.badges ?? [], (next) => {
      const before = profile.badges ?? [];
      profile.badges = next; renderCustomize();
      api.setBadges(next).then((r) => { profile.badges = r.badges; onProfile({ ...profile }); renderCustomize(); })
        .catch((e) => { profile.badges = before; renderCustomize(); ui.toast((e as Error).message); });
    });
    draw();
    extra.replaceChildren(box);
  }

  // the preview: the staff in 3D; the arena and the flames in a small 3D arena (0.9.9.3.2) — 2D without WebGL
  const canvas = $<HTMLCanvasElement>('staffCanvas');
  const stage2 = $('custStage2');
  const showCanvas = custTab === 'staff' && !!preview;
  const in3d = (custTab === 'arena' || custTab === 'omni' || custTab === 'pose' || custTab === 'character') && !!arena3;
  canvas.hidden = !showCanvas;
  $('arenaPreview').hidden = !in3d;
  stage2.hidden = showCanvas || in3d;
  $('custStage').dataset.tab = custTab;
  if (heavyOk && (custTab === 'arena' || custTab === 'omni' || custTab === 'pose' || custTab === 'character' || orbitIdle) && !arena3Tried) void ensureArena3();
  $('poseInsetLbl').hidden = !(in3d && custTab === 'pose');
  if (in3d) showArena3(custTab as 'arena' | 'omni' | 'pose' | 'character', sel.id, profile); else arena3?.setActive(false);
  if (custTab === 'staff') {
    if (preview) preview.show(sel.id);
    else { const g = el('div', 'pixel-staff big'); g.innerHTML = staffSvg(sel.id); stage2.replaceChildren(g); }
  } else if (custTab === 'arena') {
    stage2.innerHTML = backgroundThumb(sel.id as BackgroundId, resolveTime(getTimePref()));
  } else if (custTab === 'profile') {
    // a preview of your profile card, as others see it
    const card = el('div', 'cust-card');
    const meta = el('div', 'cc-meta');
    meta.append(el('div', 'pp-name', ui.myName()), el('div', 'pp-level', `Lv ${lvl}`));
    const row = badgeRow(profile.badges);
    if (row) meta.append(row); else meta.append(el('div', 'hint', 'No badges yet — pick up to 3 below.'));
    card.append(avatarDisc(profile, sel.id, 'pp-pic big'), meta);
    stage2.replaceChildren(card);
  } else if (custTab === 'character') {
    const big = el('div', 'char-tile big'); big.innerHTML = avatarSvg(sel.id as CharacterId, 'me', profile.staff);
    stage2.replaceChildren(big);
  } else if (custTab === 'pose') {
    const big = el('div', 'pose-tile big'); big.innerHTML = poseArt(sel.id);
    const box = el('div', 'pose-2d'); box.append(big, el('p', 'hint', 'Combo poses show in the 3D arena (Settings → 3D arena: Full or Lite).'));
    stage2.replaceChildren(box);
  } else {
    const w = el('div', 'wizard me onfire');
    ui.paintFlame(w, sel.id);
    const sprite = el('div', 'sprite'); sprite.innerHTML = avatarSvg(characterOf(profile.unlocks), 'me', profile.staff);
    w.append(el('div', 'aura'), sprite);
    const badge = el('div', 'combo-hud hot omni-badge'); badge.style.setProperty('--flame', FLAMES.find((f) => f.id === sel.id)!.color);
    badge.append(el('b', '', '×5'), el('span', '', 'COMBO'));
    stage2.replaceChildren(w, badge);
  }

  // name, description, Equip
  const btn = el('button', 'big cust-equip', sel.equipped ? '✓ Equipped' : sel.locked ? (sel.lock.startsWith('Level') ? `Unlocks at ${sel.lock.replace('Level', 'level')}` : sel.lock === 'Tutorial' ? 'Finish the tutorial to unlock' : sel.lock.endsWith('goals') ? `Unlocks with the ${sel.lock}` : sel.lock.endsWith('learned') ? `Unlocks at ${sel.lock}` : sel.lock.endsWith('league') ? `Unlocks in the ${sel.lock}` : `Unlocks at a ${sel.lock}`) : 'Equip') as HTMLButtonElement;
  btn.disabled = sel.equipped;
  btn.classList.toggle('locked', sel.locked);
  btn.onclick = () => void equip(sel);
  const info: Node[] = [el('h3', '', sel.name), el('p', 'sub', sel.blurb)];
  if (in3d && custTab === 'arena') { const t = el('div', 'cust-2d'); const th = el('div', 'bg-thumb'); th.innerHTML = backgroundThumb(sel.id as BackgroundId, resolveTime(getTimePref())); t.append(th, el('span', 'hint', '2D arena')); info.push(t); }
  if (in3d && custTab === 'omni') {
    const t = el('div', 'cust-2d');
    const w = el('div', 'wizard me onfire c2-char'); ui.paintFlame(w, sel.id);
    const sp = el('div', 'sprite'); sp.innerHTML = avatarSvg(characterOf(profile.unlocks), 'me', profile.staff);
    w.append(el('div', 'aura'), sp); t.append(w, el('span', 'hint', '2D arena')); info.push(t);
  }
  if (custTab === 'character' && in3d) {
    // 0.9.9.9.5.2: the 2D version too (the 2D arena, and the 3D one above)
    const row = el('div', 'cust-2d');
    const who = el('div', 'c2-char'); who.innerHTML = avatarSvg(sel.id as CharacterId, 'me', profile.staff);
    row.append(who, el('span', 'hint', '2D arena'));
    info.push(row);
  }
  if (custTab === 'staff') {
    // the pixel version: what the 2D arena shows, in your character's hand
    const row = el('div', 'cust-2d');
    const who = el('div', 'c2-char'); who.innerHTML = avatarSvg(characterOf(profile.unlocks), 'me', sel.id);
    const st = el('div', 'pixel-staff'); st.innerHTML = staffSvg(sel.id);
    row.append(who, st, el('span', 'hint', '2D arena'));
    info.push(row);
  }
  $('custInfo').replaceChildren(...info, btn);
}

// ── 0.9.9.9.5.5: someone else's Customize ("View profile") ─────────────────────────────────────────────
/** What they wear: their arena behind their character (on fire in their colour), then the six slots as the Locker shows them. */
export function lookCard(look: ProfileLook, pic: string | null, name: string): HTMLElement {
  const unlocks = [`char:${look.character}`, `pose:${look.pose}`];
  const p = { xp: 0, level: 0, learned: 0, bestStreak: 0, streak: 0, unlocks, staff: look.staff, background: look.arena, border: look.border, flame: look.flame, pic } as unknown as Profile;
  const box = el('div', 'look');
  // the scene
  const scene = el('div', 'look-scene');
  const bg = el('div', 'look-bg'); bg.innerHTML = backgroundThumb(look.arena as BackgroundId, resolveTime(getTimePref()));
  const w = el('div', 'wizard me onfire look-char');
  ui.paintFlame(w, look.flame);
  const sprite = el('div', 'sprite'); sprite.innerHTML = avatarSvg(characterOf(unlocks), 'me', look.staff);
  w.append(el('div', 'aura'), sprite);
  scene.append(bg, w);
  // the slots
  const grid = el('div', 'look-slots');
  for (const slot of SLOTS) {
    const its = custItems(p, true, slot.tab);
    const on = its.find((i) => i.equipped) ?? its[0];
    const cell = el('div', 'look-slot');
    const tile = el('div', `lk-pic ${slot.tab}`);
    if (slot.tab === 'profile') {
      const d = el('div', `ci-avatar${pic ? ' has-pic' : ''}${ui.borderCls(look.border)}`);
      if (pic) { const img = ui.picEl(pic, 'pic fill'); if (img) d.append(img); } else d.textContent = (name || '✦').slice(0, 1).toUpperCase();
      tile.append(d);
    } else if (on) tile.append(on.tile());
    const txt = el('div', 'lk-txt'); txt.append(el('small', '', slot.label), el('b', '', on?.name ?? '—'));
    cell.append(tile, txt);
    grid.append(cell);
  }
  box.append(scene, grid);
  return box;
}

/** 0.9.9.9.5.5: nothing picked — you on the pedestal, the camera swinging round; a line on what to do */
function renderIdle() {
  const { profile } = cust!;
  const canvas = $<HTMLCanvasElement>('staffCanvas');
  canvas.hidden = true;
  const stage2 = $('custStage2');
  $('custStage').dataset.tab = 'idle';
  $('poseInsetLbl').hidden = true;
  if (heavyOk && !arena3Tried) void ensureArena3();
  if (arena3) {
    $('arenaPreview').hidden = false; stage2.hidden = true;
    showArena3('character', characterOf(profile.unlocks), profile);
    arena3.spin(false);
    arena3.orbit?.(true);
  } else {
    $('arenaPreview').hidden = true; stage2.hidden = false;
    const big = el('div', 'char-tile big'); big.innerHTML = avatarSvg(characterOf(profile.unlocks), 'me', profile.staff);
    stage2.replaceChildren(big);
  }
  $('custInfo').replaceChildren(el('h3', '', ui.myName() || 'Your hero'), el('p', 'sub', 'Pick a slot on either side to change it — tap it again to close it.'));
}

/** Your picture (or initial) in a round frame with the given border — the Profile tab's tiles and preview. */
function avatarDisc(p: Profile, border: string, cls: string) {
  const d = el('div', `${cls}${p.pic ? ' has-pic' : ''}${ui.borderCls(border)}`);
  if (p.pic) { const img = ui.picEl(p.pic, 'pic fill'); if (img) d.append(img); } else d.textContent = (ui.myName() || '✦').slice(0, 1).toUpperCase();
  return d;
}

// ── Customize → Arena / Omnipotence: a small live 3D arena with you in it (0.9.9.3.2) ──────────────────
let arena3: ArenaApi | null = null;
/** 0.9.9.7.3: which character the 3D preview shows (Goblin / Knight / Witch / Wizard; yours until you pick) */
// (0.9.9.9.5.4: no more "preview as Goblin / Knight / …" buttons — the preview is you, as the Character slot says)
let arena3Tried = false;
let arena3Key = '';
let arena3Bg = '';
async function ensureArena3() {
  arena3Tried = true;
  arena3 = await arenaPreview($<HTMLCanvasElement>('arenaPreview'));
  if (arena3 && !$('customize').hidden) renderCustomize();
}

/** you stand across the arena (as others see you): the chosen arena, or your flames burning round you */
function showArena3(tab: 'arena' | 'omni' | 'pose' | 'character', id: string, p: Profile) {
  if (!arena3) return;
  const bgId = (tab === 'arena' ? id : p.background) as BackgroundId, time = resolveTime(getTimePref());
  const character = tab === 'character' ? id : characterOf(p.unlocks);
  const who = `${character}-${p.staff}`, bg = `${bgId}-${time}`;
  // the fighters are built once; picking another arena only swaps the arena (0.9.9.3.3: no rebuild, no stutter)
  if (who !== arena3Key) {
    arena3Key = who; arena3Bg = bg;
    arena3.setup({ layout: 'battle', bgSvg: artUrl(bgId, time), bgKey: bg, time,
      me: { id: 'me', character, staff: p.staff }, opp: { id: 'you', name: ui.myName(), character, staff: p.staff }, allies: [], boss: null });
  } else if (bg !== arena3Bg) {
    arena3Bg = bg;
    arena3.setBackground(bg, time, artUrl(bgId, time));
  }
  arena3.setActive(true);
  if (tab === 'arena') arena3.prewarm(BACKGROUNDS.map((b) => b.id), time); // the other arenas get built while you look
  arena3.focusOpp(tab === 'omni' || tab === 'pose' || tab === 'character'); // the flames / the pose / the character: up close; the arena: the whole view
  arena3.spin(tab === 'character'); // 0.9.9.9.5.3: on the pedestal, turning
  const color = tab === 'omni' ? flameColor(id) : tab === 'pose' ? flameColor(p.flame) : undefined;
  arena3.setPose('opp', tab === 'pose' ? id : 'none'); // 0.9.9.7: you, in the combo pose you're looking at
  arena3.setPose('me', tab === 'pose' ? id : 'none'); // … and in the corner as you see it yourself (0.9.9.7.1)
  arena3.setInset(tab === 'pose');
  $('poseInsetLbl').hidden = tab !== 'pose';
  arena3.onfire('opp', tab === 'omni' || tab === 'pose', color);
  arena3.onfire('me', tab === 'omni' || tab === 'pose', color); // and the first-person fire along the bottom, as you see it in a battle
}
/** leaving Customize: the preview stops drawing */
export function customizeHidden() { arena3?.setActive(false); }

// ── 0.9.9.9.6.3: pause a deck ────────────────────────────────────────────────────────────────────────────────
// One button on each of All spells, Onomatopoeia and Struggling: paused, All spells and Onomatopoeia get no new words
// each day from now on, Struggling gets none of the words you miss. Pressing it again resumes.
const PAUSE_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1.5" fill="currentColor"/><rect x="14" y="5" width="4" height="14" rx="1.5" fill="currentColor"/></svg>';
const PLAY_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10-6.5a1 1 0 0 0 0-1.72l-10-6.5A1 1 0 0 0 8 5.5z" fill="currentColor"/></svg>';
const PAUSED_NOTE: Record<string, string> = {
  all: 'Paused — no new words are added each day. What you have can still be studied.',
  ono: 'Paused — no new onomatopoeia are added each day. What you have can still be studied.',
  struggling: 'Paused — words you miss aren\'t added here. What you have can still be studied.',
};
let pausedNow: Record<string, boolean> = {};
function paintPaused(p: Awaited<ReturnType<typeof api.study>>['paused']) {
  pausedNow = { ...(p ?? {}) };
  for (const b of document.querySelectorAll<HTMLButtonElement>('#study .deck-pause')) {
    const deck = b.dataset.deckPause!;
    const on = !!pausedNow[deck];
    b.innerHTML = `${on ? PLAY_ICON : PAUSE_ICON}<span>${tr(on ? 'Resume' : 'Pause')}</span>`;
    b.setAttribute('aria-pressed', String(on));
    b.title = tr(on ? 'Resume: new words come in again' : 'Pause: stop adding new words');
    const card = b.closest<HTMLElement>('.deck-card')!;
    card.classList.toggle('paused', on);
    const note = card.querySelector<HTMLElement>('.deck-paused-note')!;
    note.hidden = !on; note.textContent = tr(PAUSED_NOTE[deck]);
    b.onclick = async () => {
      b.disabled = true;
      try { const r = await api.setPaused(deck as 'all' | 'ono' | 'struggling', !on); render(r); ui.toast(tr(!on ? 'Paused' : 'Resumed'), 1600); }
      catch (e) { ui.toast((e as Error).message); }
      finally { b.disabled = false; }
    };
  }
}
