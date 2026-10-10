import { locale } from './i18n';
import { LEVEL_LABEL, LEVELS, type Level } from '../shared/protocol';
import { avatarFor, BACKGROUNDS, critText, flameUnlocked, levelOf, staffUnlocked, type BackgroundId, FLAMES, STAFFS } from '../shared/progress';
import { staffPreview } from './arena';
import type { StaffPreview } from './staffpreview';
import { avatarSvg } from './wizard';
import { pixelStaffSvg } from './pixelstaffs';
import { showStrokeOrder } from './strokes';
import type { Rating } from '../shared/srs';
import { api, type DeckCounts, type Profile, type StudyCard } from './api';
import { backgroundThumb, getTimePref, resolveTime, setTimePref, TIMES } from './backgrounds';
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
  $('studyCrit').textContent = `✦ ${critText(s.profile.crit)} crit today · ${s.profile.learnedToday} learned today (+1% each, max 50%) · ${s.profile.learned} learned in total`;
  const notice = $('studyNotice');
  notice.hidden = !s.notice;
  notice.textContent = s.notice ? `${s.notice} new spell${s.notice === 1 ? '' : 's'} added to “All spells” — happy studying!` : '';
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
}
/** How to write the word: animated stroke order under the card. */
function strokes() {
  if (!current || !flipped || $('fcStrokes').hidden) return;
  const box = $('fcStrokeBox');
  box.hidden = false;
  void showStrokeOrder(box, current.kanji);
}
$('fcStrokes').onclick = (e) => { e.stopPropagation(); strokes(); };

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
  if ((e.key === 's' || e.key === 'S') && flipped) strokes();
});
$('studyAll').onclick = () => void startSession('all');
$('studyStruggle').onclick = () => void startSession('struggling');
$('reviewBack').onclick = () => void openStudy();
$('reviewDoneBack').onclick = () => void openStudy();

// ── customize: magic staff (login streak) · arena (level) · omnipotence (level) ──────────────────
type CustTab = 'staff' | 'arena' | 'omni';
interface CustItem {
  id: string; name: string; blurb: string; locked: boolean; lock: string; equipped: boolean;
  tile: () => Node; equip: () => Promise<{ profile: Profile }>; lockedToast: string;
}
let custTab: CustTab = 'staff';
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
      locked: !isAdmin && lvl < b.level, lock: `Level ${b.level}`,
      lockedToast: `Reach level ${b.level} to unlock ${b.name}`,
      equipped: profile.background === b.id,
      tile: () => { const d = el('div', 'bg-thumb'); d.innerHTML = backgroundThumb(b.id, time); return d; },
      equip: () => api.setBackground(b.id as BackgroundId),
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

  // the preview
  const canvas = $<HTMLCanvasElement>('staffCanvas');
  const stage2 = $('custStage2');
  const showCanvas = custTab === 'staff' && !!preview;
  canvas.hidden = !showCanvas;
  stage2.hidden = showCanvas;
  $('custStage').dataset.tab = custTab;
  if (custTab === 'staff') {
    if (preview) preview.show(sel.id);
    else { const g = el('div', 'pixel-staff big'); g.innerHTML = pixelStaffSvg(sel.id); stage2.replaceChildren(g); }
  } else if (custTab === 'arena') {
    stage2.innerHTML = backgroundThumb(sel.id as BackgroundId, resolveTime(getTimePref()));
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
  const btn = el('button', 'big cust-equip', sel.equipped ? '✓ Equipped' : sel.locked ? (sel.lock.startsWith('Level') ? `Unlocks at ${sel.lock.replace('Level', 'level')}` : sel.lock.endsWith('goals') ? `Unlocks with the ${sel.lock}` : `Unlocks at a ${sel.lock}`) : 'Equip') as HTMLButtonElement;
  btn.disabled = sel.equipped;
  btn.classList.toggle('locked', sel.locked);
  btn.onclick = () => void equip(sel);
  const info: Node[] = [el('h3', '', sel.name), el('p', 'sub', sel.blurb)];
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
