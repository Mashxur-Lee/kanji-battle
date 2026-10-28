import { exampleFor, loadExamples } from './examples';
import { hideKanji, kanjiTappable } from './kanjihelp';
import { locale } from './i18n';
import { LEVEL_LABEL, LEVELS, ONO_TYPES, type Level } from '../shared/protocol';
import { avatarFor, BACKGROUNDS, beta, BORDERS, borderUnlocked, flameColor, flameUnlocked, levelOf, staffUnlocked, type BackgroundId, FLAMES, STAFFS } from '../shared/progress';
import { arenaPreview, staffPreview } from './arena';
import type { ArenaApi } from './arena3d';
import { sceneSvg } from './backgrounds';
import type { StaffPreview } from './staffpreview';
import { avatarSvg } from './wizard';
import { pixelStaffSvg } from './pixelstaffs';
import { showStrokeOrder } from './strokes';
import type { Rating } from '../shared/srs';
import { api, type DeckCounts, type Profile, type StudyCard } from './api';
import type { DeckId } from '../shared/srs';
import { DECK_LABEL, initDecks } from './decks';
import { backgroundThumb, getTimePref, resolveTime, setTimePref, TIMES } from './backgrounds';
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
const planTotal = (p: Partial<Record<Level, number>>) => LEVELS.reduce((a, l) => a + (lockedLv.has(l) ? 0 : p[l] ?? 0), 0);
function levelPlan(per: Partial<Record<Level, number>>) {
  savedPlan = { ...per };
  draftPlan = { ...per };
  const box = $('studyLevels');
  box.replaceChildren(...LEVELS.map((lv) => {
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
    const locked = ui.lockLevelChip(row, lv);
    // 0.9.9.4.4.5: a locked level (かな beginner) keeps its number — greyed out, unchangeable, no words from it
    if (locked.classList.contains('locked')) { input.disabled = minus.disabled = plus.disabled = true; lockedLv.add(lv); } else lockedLv.delete(lv);
    return locked;
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
  const dirty = LEVELS.some((l) => (draftPlan[l] ?? 0) !== (savedPlan[l] ?? 0));
  const bar = $('planApply');
  bar.hidden = !dirty;
  if (!dirty) return;
  const more = LEVELS.reduce((a, l) => a + Math.max(0, (draftPlan[l] ?? 0) - (savedPlan[l] ?? 0)), 0);
  $('planApplyText').textContent = more ? `Adds up to ${more} new words to “All spells” today` : 'Fewer new words from tomorrow';
}
$('planApplyBtn').onclick = async () => {
  const per: Partial<Record<Level, number>> = {};
  for (const l of LEVELS) if ((draftPlan[l] ?? 0) > 0) per[l] = draftPlan[l];
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
  counts($('countsAll'), s.decks.all);
  counts($('countsStruggle'), s.decks.struggling);
  counts($('countsCustom'), s.decks.custom);
  if (s.decks.ono) counts($('countsOno'), s.decks.ono);
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

initDecks({ changed: () => { if (!$('study').hidden) void api.study().then(render).catch(() => {}); }, back: () => void openStudy() });

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
  void exampleFor(card.vocabId).then((ex) => { if (ex && current === card && flipped) { kanjiTappable(ex); $('fcExample').replaceChildren(ex); } });
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
type CustTab = 'staff' | 'arena' | 'omni' | 'profile';
interface CustItem {
  id: string; name: string; blurb: string; locked: boolean; lock: string; equipped: boolean;
  tile: () => Node; equip: () => Promise<{ profile: Profile }>; lockedToast: string;
}
let custTab: CustTab = 'profile';
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
export function openCustomize(profile: Profile, isAdmin = false, onTimeChange: () => void = () => {}) {
  cust = { profile, isAdmin, onTimeChange };
  renderCustomize();
  ui.show('customize');
  void ensurePreview();
}

async function ensurePreview() {
  if (previewTried) { if (custTab === 'staff') renderCustomize(); return; }
  previewTried = true;
  preview = await staffPreview($<HTMLCanvasElement>('staffCanvas'));
  if (preview) staffThumbs = Object.fromEntries(preview.thumbs(STAFFS.map((s) => s.id), 200, 200).map((u, i) => [STAFFS[i].id, u]));
  renderCustomize();
}

for (const b of document.querySelectorAll<HTMLButtonElement>('#custTabs .cust-tab')) {
  b.onclick = () => { custTab = b.dataset.tab as CustTab; renderCustomize(); };
}

const thisMonth = () => new Date().getMonth() + 1;
const monthName = (m: number) => new Date(2026, m - 1, 15).toLocaleDateString(locale(), { month: 'long' });

function custItems(profile: Profile, isAdmin: boolean): CustItem[] {
  const lvl = levelOf(profile.xp);
  const best = Math.max(profile.bestStreak ?? 0, profile.streak ?? 0);
  const time = resolveTime(getTimePref());
  if (custTab === 'staff') {
    // every staff is listed — seasonal ones stay locked until you complete their month's goals
    return STAFFS.map((s) => ({
      id: s.id, name: s.name, blurb: s.blurb,
      locked: !isAdmin && !staffUnlocked(s.id, best, profile.unlocks),
      lock: s.season ? `${monthName(s.season)} goals` : s.streak ? `${s.streak}-day streak` : '',
      lockedToast: s.season ? `The ${s.name} is the ${monthName(s.season)} reward — complete that month's goals (see Progress)${s.season === thisMonth() ? ' — it\'s on now!' : ''}` : `Log in ${s.streak} days in a row to unlock the ${s.name} (your best: ${best})`,
      equipped: (profile.staff ?? 'verdant') === s.id,
      tile: () => {
        if (staffThumbs[s.id]) { const img = document.createElement('img'); img.src = staffThumbs[s.id]; img.alt = ''; return img; }
        const g = el('div', 'pixel-staff'); g.innerHTML = pixelStaffSvg(s.id); return g;
      },
      equip: () => api.setStaff(s.id),
    }));
  }
  if (custTab === 'arena') {
    return BACKGROUNDS.map((b) => ({
      id: b.id, name: b.name, blurb: 'The scene behind every battle (and its sounds in the menus).',
      locked: !isAdmin && !beta.open && lvl < b.level, lock: `Level ${b.level}`,
      lockedToast: `Reach level ${b.level} to unlock ${b.name}`,
      equipped: profile.background === b.id,
      tile: () => { const d = el('div', 'bg-thumb'); d.innerHTML = backgroundThumb(b.id, time); return d; },
      equip: () => api.setBackground(b.id as BackgroundId),
    }));
  }
  if (custTab === 'profile') {
    return BORDERS.map((b) => ({
      id: b.id, name: b.name === 'No border' ? b.name : `${b.name} border`, blurb: `${b.blurb} Round your profile picture — everyone sees it in lobbies, battles and on your profile card.`,
      locked: !isAdmin && !borderUnlocked(b.id, lvl, profile.unlocks), lock: b.unlock ? 'Tutorial' : `Level ${b.level}`,
      lockedToast: b.unlock ? 'Finish the tutorial to get the Beta border' : `Reach level ${b.level} to unlock the ${b.name} border`,
      equipped: (profile.border ?? 'none') === b.id,
      tile: () => avatarDisc(profile, b.id, 'ci-avatar'),
      equip: () => api.setBorder(b.id),
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

const days = (n: number) => `${n} day${n === 1 ? '' : 's'}`;
const CUST_SUB: Record<CustTab, (p: Profile) => string> = {
  staff: (p) => `The staff in your hand (other players see it too). Classic staffs unlock with your login streak — your best: ${days(Math.max(p.bestStreak ?? 0, p.streak ?? 0))}. Seasonal staffs are monthly rewards (see Progress).`,
  arena: () => 'The background of your battles. Backgrounds unlock as you level up (each level needs 1000 XP more than the last).',
  profile: () => 'Your profile card: a border round your picture (unlocks at levels 1, 5, 10 and 15) and up to 3 achievement badges under your name.',
  omni: () => 'Omnipotence: the flames of a 5× combo in battle, and of your Omnipotence (hero power) in Deck Duel. More colours unlock as you level up.',
};

function renderCustomize() {
  if (!cust) return;
  const { profile, isAdmin, onTimeChange } = cust;
  for (const b of document.querySelectorAll<HTMLButtonElement>('#custTabs .cust-tab')) {
    const on = b.dataset.tab === custTab;
    b.classList.toggle('on', on); b.setAttribute('aria-selected', String(on));
  }
  const items = custItems(profile, isAdmin);
  const lvl = levelOf(profile.xp);
  const sel = items.find((i) => i.id === picked[custTab]) ?? items.find((i) => i.equipped) ?? items[0];
  $('custSub').textContent = CUST_SUB[custTab](profile);

  // time of day (arena only)
  const times = $('bgTimes');
  times.hidden = custTab !== 'arena';
  if (custTab === 'arena') {
    const pref = getTimePref();
    times.replaceChildren(...TIMES.map((t) => {
      const b = el('button', 'pill' + (t.id === pref ? ' on' : ''), t.id === 'auto' ? `Cycle (now: ${resolveTime(pref)})` : t.id === 'day' ? 'Day' : t.id === 'sunset' ? 'Sunset' : 'Night');
      b.onclick = () => { setTimePref(t.id); onTimeChange(); renderCustomize(); };
      return b;
    }));
  }

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
  const in3d = (custTab === 'arena' || custTab === 'omni') && !!arena3;
  canvas.hidden = !showCanvas;
  $('arenaPreview').hidden = !in3d;
  stage2.hidden = showCanvas || in3d;
  $('custStage').dataset.tab = custTab;
  if ((custTab === 'arena' || custTab === 'omni') && !arena3Tried) void ensureArena3();
  if (in3d) showArena3(custTab as 'arena' | 'omni', sel.id, profile); else arena3?.setActive(false);
  if (custTab === 'staff') {
    if (preview) preview.show(sel.id);
    else { const g = el('div', 'pixel-staff big'); g.innerHTML = pixelStaffSvg(sel.id); stage2.replaceChildren(g); }
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
  } else {
    const w = el('div', 'wizard me onfire');
    ui.paintFlame(w, sel.id);
    const sprite = el('div', 'sprite'); sprite.innerHTML = avatarSvg(avatarFor(profile.studyLevels), 'me', profile.staff);
    w.append(el('div', 'aura'), sprite);
    const badge = el('div', 'combo-hud hot omni-badge'); badge.style.setProperty('--flame', FLAMES.find((f) => f.id === sel.id)!.color);
    badge.append(el('b', '', '×5'), el('span', '', 'COMBO'));
    stage2.replaceChildren(w, badge);
  }

  // name, description, Equip
  const btn = el('button', 'big cust-equip', sel.equipped ? '✓ Equipped' : sel.locked ? (sel.lock.startsWith('Level') ? `Unlocks at ${sel.lock.replace('Level', 'level')}` : sel.lock === 'Tutorial' ? 'Finish the tutorial to unlock' : sel.lock.endsWith('goals') ? `Unlocks with the ${sel.lock}` : `Unlocks at a ${sel.lock}`) : 'Equip') as HTMLButtonElement;
  btn.disabled = sel.equipped;
  btn.classList.toggle('locked', sel.locked);
  btn.onclick = () => void equip(sel);
  const info: Node[] = [el('h3', '', sel.name), el('p', 'sub', sel.blurb)];
  if (in3d && custTab === 'arena') { const t = el('div', 'cust-2d'); const th = el('div', 'bg-thumb'); th.innerHTML = backgroundThumb(sel.id as BackgroundId, resolveTime(getTimePref())); t.append(th, el('span', 'hint', '2D arena')); info.push(t); }
  if (in3d && custTab === 'omni') {
    const t = el('div', 'cust-2d');
    const w = el('div', 'wizard me onfire c2-char'); ui.paintFlame(w, sel.id);
    const sp = el('div', 'sprite'); sp.innerHTML = avatarSvg(avatarFor(profile.studyLevels), 'me', profile.staff);
    w.append(el('div', 'aura'), sp); t.append(w, el('span', 'hint', '2D arena')); info.push(t);
  }
  if (custTab === 'staff') {
    // the pixel version: what the 2D arena shows, in your character's hand
    const row = el('div', 'cust-2d');
    const who = el('div', 'c2-char'); who.innerHTML = avatarSvg(avatarFor(profile.studyLevels), 'me', sel.id);
    const st = el('div', 'pixel-staff'); st.innerHTML = pixelStaffSvg(sel.id);
    row.append(who, st, el('span', 'hint', '2D arena'));
    info.push(row);
  }
  $('custInfo').replaceChildren(...info, btn);
}

/** Your picture (or initial) in a round frame with the given border — the Profile tab's tiles and preview. */
function avatarDisc(p: Profile, border: string, cls: string) {
  const d = el('div', `${cls}${p.pic ? ' has-pic' : ''}${ui.borderCls(border)}`);
  if (p.pic) { const img = ui.picEl(p.pic, 'pic fill'); if (img) d.append(img); } else d.textContent = (ui.myName() || '✦').slice(0, 1).toUpperCase();
  return d;
}

// ── Customize → Arena / Omnipotence: a small live 3D arena with you in it (0.9.9.3.2) ──────────────────
let arena3: ArenaApi | null = null;
let arena3Tried = false;
let arena3Key = '';
let arena3Bg = '';
async function ensureArena3() {
  arena3Tried = true;
  arena3 = await arenaPreview($<HTMLCanvasElement>('arenaPreview'));
  if (arena3 && !$('customize').hidden) renderCustomize();
}
/** you stand across the arena (as others see you): the chosen arena, or your flames burning round you */
function showArena3(tab: 'arena' | 'omni', id: string, p: Profile) {
  if (!arena3) return;
  const bgId = (tab === 'arena' ? id : p.background) as BackgroundId, time = resolveTime(getTimePref());
  const character = avatarFor(p.studyLevels);
  const who = `${character}-${p.staff}`, bg = `${bgId}-${time}`;
  // the fighters are built once; picking another arena only swaps the arena (0.9.9.3.3: no rebuild, no stutter)
  if (who !== arena3Key) {
    arena3Key = who; arena3Bg = bg;
    arena3.setup({ layout: 'battle', bgSvg: sceneSvg(bgId, time), bgKey: bg, time,
      me: { id: 'me', character, staff: p.staff }, opp: { id: 'you', name: ui.myName(), character, staff: p.staff }, allies: [], boss: null });
  } else if (bg !== arena3Bg) {
    arena3Bg = bg;
    arena3.setBackground(bg, time, sceneSvg(bgId, time));
  }
  arena3.setActive(true);
  if (tab === 'arena') arena3.prewarm(BACKGROUNDS.map((b) => b.id), time); // the other arenas get built while you look
  arena3.focusOpp(tab === 'omni'); // the flames: up close; the arena: the whole view
  const color = tab === 'omni' ? flameColor(id) : undefined;
  arena3.onfire('opp', tab === 'omni', color);
  arena3.onfire('me', tab === 'omni', color); // and the first-person fire along the bottom, as you see it in a battle
}
/** leaving Customize: the preview stops drawing */
export function customizeHidden() { arena3?.setActive(false); }
