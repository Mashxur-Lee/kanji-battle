// Progress: this week at a glance, this month's goals (and their seasonal reward), a 26-week activity
// month calendar, and a mastery grid with every word of each level coloured by how well you know it.

import { locale, meaningIn, tr } from './i18n';
import { isKanaLevel, LEVEL_LABEL, LEVELS, studyLevelOf, type Level } from '../shared/protocol';
import { KANA_BASIC, KANA_COMBO, KANA_VOICED, toKatakana } from '../shared/vocab';
import { loadVocab, VOCAB } from './offline/vocab';
import { FLAMES, isoWeek, STAFFS } from '../shared/progress';
import { api, today, type DayActivity, type MonthProgress, type ProgressPage } from './api';
import * as ui from './ui';
import { renderAchievements } from './achievements';
import { pixelStaffSvg } from './pixelstaffs';
import { wizardSvg } from './wizard';

const $ = ui.$;
const el = (tag: string, cls = '', text?: string | number) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = String(text);
  return e;
};
const DAY_MS = 86_400_000;
const shift = (day: string, n: number) => new Date(Date.parse(day) + n * DAY_MS).toISOString().slice(0, 10);
const MASTERY = [
  { cls: 'm0', label: 'Not in your spells yet' },
  { cls: 'm1', label: 'New' },
  { cls: 'm2', label: 'Learning' },
  { cls: 'm3', label: 'Learned' },
  { cls: 'm4', label: 'Mastered (3+ weeks)' },
];

let page: ProgressPage | null = null;
let level: Level = 'N5';

let unlocks: readonly string[] = [];
let badges: string[] = [];
let onBadgesChanged: (b: string[]) => void = () => {};
export async function openProgress(myUnlocks: readonly string[] = [], myBadges: readonly string[] = [], changed: (b: string[]) => void = () => {}) {
  unlocks = myUnlocks;
  badges = [...myBadges];
  onBadgesChanged = changed;
  ui.show('progress');
  $('progGrid').replaceChildren(el('p', 'hint', 'Loading…'));
  try { page = await api.progress(); } catch (e) { ui.toast((e as Error).message); return; }
  // start on the level you have the most going on in
  const busiest = LEVELS.map((l) => [l, page!.mastery[l].filter(([, m]) => m > 0).length] as const).sort((a, b) => b[1] - a[1])[0];
  if (busiest && busiest[1] > 0) level = busiest[0];
  render();
}

function render() {
  if (!page) return;
  renderWeek(page.activity);
  $('progMonth').replaceChildren(...monthNodes(page.month));
  renderHeatmap(page.activity);
  renderAchievements($('progAch'), unlocks, badges, (next) => {
    const before = badges;
    badges = next; render();
    api.setBadges(next).then((r) => { badges = r.badges; onBadgesChanged(badges); }).catch((e) => { badges = before; render(); ui.toast((e as Error).message); });
  });
  renderMastery();
}

function renderWeek(activity: DayActivity[]) {
  const t = today();
  const sum = (from: number, to: number) => {
    const days = activity.filter((a) => a.day > shift(t, -from) && a.day <= shift(t, -to));
    return {
      days: days.filter((a) => a.login || a.games || a.reviews).length,
      reviews: days.reduce((n, a) => n + a.reviews, 0),
      games: days.reduce((n, a) => n + a.games, 0),
      wins: days.reduce((n, a) => n + a.wins, 0),
      xp: days.reduce((n, a) => n + a.xp, 0),
    };
  };
  const now = sum(7, 0), before = sum(14, 7);
  const stat = (label: string, v: number, prev: number) => {
    const d = v - prev;
    const box = el('div', 'pw-stat');
    box.append(el('b', '', v.toLocaleString()), el('span', '', label),
      el('small', d > 0 ? 'up' : d < 0 ? 'down' : '', prev || v ? `${d > 0 ? '+' : ''}${d.toLocaleString()} vs last week` : '—'));
    return box;
  };
  const grid = el('div', 'pw-grid');
  grid.append(stat('days active', now.days, before.days), stat('cards passed', now.reviews, before.reviews), stat('games', now.games, before.games), stat('wins', now.wins, before.wins), stat('XP', now.xp, before.xp));
  // a little bar for each of the last 7 days
  const bars = el('div', 'pw-bars');
  const max = Math.max(1, ...Array.from({ length: 7 }, (_, i) => score(activity.find((a) => a.day === shift(t, i - 6)))));
  for (let i = -6; i <= 0; i++) {
    const day = shift(t, i);
    const a = activity.find((x) => x.day === day);
    const bar = el('div', 'pw-bar');
    const fill = el('i');
    fill.style.height = `${Math.round((score(a) / max) * 100)}%`;
    bar.title = `${day}: ${a ? `${a.reviews} cards, ${a.games} games` : 'nothing'}`;
    bar.append(fill, el('span', '', new Date(`${day}T12:00:00`).toLocaleDateString(locale(), { weekday: 'narrow' })));
    bars.append(bar);
  }
  $('progWeek').replaceChildren(el('h3', '', 'This week'), grid, bars);
}

const score = (a?: DayActivity) => (a ? a.reviews + a.games * 5 + (a.login ? 1 : 0) : 0);

/** Month goals with progress bars and the reward (also used on the menu). */
export function monthNodes(m: MonthProgress): HTMLElement[] {
  const [kind, id] = m.reward.split(':');
  const reward = kind === 'flame' ? FLAMES.find((f) => f.id === id) : STAFFS.find((s) => s.id === id);
  // the reward itself: the staff (pixel art), or a little wizard wrapped in the flames
  const sw = el('span', `reward-img ${kind}`);
  if (kind === 'flame') {
    const w = el('div', 'wizard me onfire');
    ui.paintFlame(w, id);
    const sprite = el('div', 'sprite'); sprite.innerHTML = wizardSvg('me');
    w.append(el('div', 'aura'), sprite);
    sw.append(w);
  } else sw.innerHTML = pixelStaffSvg(id);
  sw.title = `${reward?.name}${kind === 'flame' ? ' flames' : ''}`;
  const monthName = new Date(`${m.month}-15T12:00:00`).toLocaleDateString(locale(), { month: 'long' });
  const head = el('h3', '', `${monthName}: ${m.name} season`);
  const rw = el('div', 'reward-line');
  rw.append(sw, el('span', '', m.unlocked ? `Unlocked: ${reward?.name}${kind === 'flame' ? ' flames' : ''} — equip it in Customize` : `Reward: ${reward?.name}${kind === 'flame' ? ' flames' : ''} (only this month)`));
  const goals = el('div', 'goals');
  for (const g of m.goals) {
    const row = el('div', 'goal' + (g.value >= g.target ? ' done' : ''));
    const bar = el('div', 'goal-bar');
    const fill = el('i');
    fill.style.width = `${Math.round((g.value / g.target) * 100)}%`;
    bar.append(fill);
    row.append(el('span', 'goal-label', `${g.value >= g.target ? '✓ ' : ''}${g.label}`), el('span', 'goal-num', `${g.value} / ${g.target}`), bar);
    goals.append(row);
  }
  return [head, rw, goals];
}

let calMonth = ''; // 'YYYY-MM' shown in the activity calendar
let calActivity: DayActivity[] = [];
/** Activity: a month calendar (Monday first) with week numbers; ‹ › go back up to 6 months. */
function renderHeatmap(activity: DayActivity[]) {
  calActivity = activity;
  calMonth ||= today().slice(0, 7);
  renderCalendar();
}
function renderCalendar() {
  const t = today();
  const byDay = new Map(calActivity.map((a) => [a.day, a]));
  const max = Math.max(1, ...calActivity.map(score));
  const [y, m] = calMonth.split('-').map(Number);
  const first = `${calMonth}-01`;
  const days = new Date(Date.UTC(y, m, 0)).getUTCDate();
  const lead = (new Date(`${first}T12:00:00Z`).getUTCDay() + 6) % 7;
  const box = $('progHeat');
  const oldest = shift(t, -182).slice(0, 7);
  const prev = el('button', 'pill cal-nav', '‹') as HTMLButtonElement;
  const next = el('button', 'pill cal-nav', '›') as HTMLButtonElement;
  const step = (n: number) => { const d = new Date(Date.UTC(y, m - 1 + n, 15)); calMonth = d.toISOString().slice(0, 7); renderCalendar(); };
  prev.disabled = calMonth <= oldest; next.disabled = calMonth >= t.slice(0, 7);
  prev.onclick = () => step(-1); next.onclick = () => step(1);
  prev.setAttribute('aria-label', 'Previous month'); next.setAttribute('aria-label', 'Next month');
  const title = el('b', 'cal-title', new Date(Date.UTC(y, m - 1, 15)).toLocaleDateString(locale(), { month: 'long', year: 'numeric', timeZone: 'UTC' }));
  const head = el('div', 'cal-head');
  head.append(prev, title, next);
  const grid = el('div', 'cal-grid');
  grid.append(el('span', 'cal-wd wk', 'Wk'));
  for (let i = 0; i < 7; i++) grid.append(el('span', 'cal-wd', new Date(Date.UTC(2024, 0, 1 + i, 12)).toLocaleDateString(locale(), { weekday: 'short', timeZone: 'UTC' }))); // 2024-01-01 was a Monday
  let active = 0;
  const cells = lead + days, rows = Math.ceil(cells / 7);
  for (let r = 0; r < rows; r++) {
    const firstOfRow = shift(first, r * 7 - lead);
    grid.append(el('span', 'cal-wk', isoWeek(firstOfRow)));
    for (let c = 0; c < 7; c++) {
      const i = r * 7 + c - lead;
      if (i < 0 || i >= days) { grid.append(el('span', 'cal-day blank')); continue; }
      const day = shift(first, i);
      const cell = el('span', 'cal-day', i + 1);
      if (day > t) cell.classList.add('future');
      else {
        const a = byDay.get(day);
        const sc = score(a);
        if (sc > 0) active++;
        cell.dataset.l = String(sc === 0 ? 0 : Math.min(4, 1 + Math.floor((sc / max) * 3.999)));
        cell.title = `${new Date(`${day}T12:00:00`).toLocaleDateString(locale(), { weekday: 'short', month: 'short', day: 'numeric' })}: ${a ? `${a.reviews} cards passed, ${a.games} games${a.wins ? ` (${a.wins} won)` : ''}` : 'no activity'}`;
        // phones have no hover: tap a day to read it
        cell.onclick = () => { $('progHeatInfo').textContent = cell.title; for (const x of grid.querySelectorAll('.cal-day.sel')) x.classList.remove('sel'); cell.classList.add('sel'); };
      }
      if (day === t) cell.classList.add('today');
      grid.append(cell);
    }
  }
  // 0.9.9.4.2: what the shades mean
  const legend = el('div', 'cal-legend');
  legend.append(el('span', '', 'Less'));
  for (let l = 0; l <= 4; l++) { const i = el('i', 'cal-day'); i.dataset.l = String(l); legend.append(i); }
  legend.append(el('span', '', 'More'));
  const why = el('p', 'hint cal-why', 'The brighter a day, the more you did — cards passed and games played, compared with your busiest day. Tap a day for details.');
  const info = el('p', 'cal-info'); info.id = 'progHeatInfo';
  box.replaceChildren(head, grid, legend, why, info);
  $('progHeatSub').textContent = `${active} active days this month`;
}

// ── spell mastery (0.9.9.4.2: tiles with the word and a progress bar, like Duolingo's kana charts) ──
// The kana levels are laid out as the kana table (rows of あいうえお, ゛゜, then the combinations); the kanji
// levels as small tiles, your own words first, with a filter and "show more" — a level has 1000+ words.
// Tap (or hover) a tile for its reading, meaning and how far along it is.
const GOJUON = 'あいうえお かきくけこ さしすせそ たちつてと なにぬねの はひふへほ まみむめも や_ゆ_よ らりるれろ わ___を ん____';
const VOICED = 'がぎぐげご ざじずぜぞ だぢづでど ばびぶべぼ ぱぴぷぺぽ';
const ROMAJI = new Map<string, string>();
for (const list of [KANA_BASIC, KANA_VOICED]) for (const t of list.split(' ')) ROMAJI.set(t[0], t.slice(1));
const COMBOS = KANA_COMBO.split(' ').map((t) => { ROMAJI.set(t.slice(0, 2), t.slice(2)); return t.slice(0, 2); });
type MFilter = 'mine' | 'all' | 'studying' | 'mastered' | 'unseen';
let mFilter: MFilter = 'mine';
let mShown = 150;
const PAGE = 150;

function tile(word: string, m: number, pct: number, kana: string | null) {
  const t = el('button', `mt ${MASTERY[m].cls}${kana === null ? ' word' : ' kana'}`) as HTMLButtonElement;
  t.type = 'button';
  const shown = kana === null ? word : word;
  const k = el('span', 'mt-k', shown);
  if (kana === null) k.dataset.len = String(Math.min(5, [...word].length));
  t.append(k);
  if (kana !== null) t.append(el('span', 'mt-r', ROMAJI.get(kana) ?? ''));
  const bar = el('span', 'mt-bar'); const fill = el('i'); fill.style.width = `${pct}%`; bar.append(fill);
  t.append(bar);
  t.title = `${word} — ${tr(MASTERY[m].label)}`;
  t.onclick = () => void showWord(t, word, m, pct);
  return t;
}

async function showWord(at: HTMLElement, word: string, m: number, pct: number) {
  const pop = $('mgPop');
  for (const x of document.querySelectorAll('.mt.sel')) x.classList.remove('sel');
  at.classList.add('sel');
  try { await loadVocab(); } catch { /* offline and not cached: just the word */ }
  const v = VOCAB.find((x) => x.kanji === word && studyLevelOf(x) === level) ?? VOCAB.find((x) => x.kanji === word);
  const head = el('div', 'mp-head');
  const big = el('b', 'mp-k', word); big.lang = 'ja';
  head.append(big);
  if (v) {
    const rd = el('span', 'mp-rd', v.romaji ? `${v.reading === word ? '' : `${v.reading} · `}${v.romaji}` : v.reading); rd.lang = 'ja';
    head.append(rd);
  }
  const close = el('button', 'mp-x', '✕') as HTMLButtonElement;
  close.type = 'button'; close.setAttribute('aria-label', 'Close');
  close.onclick = () => { pop.hidden = true; at.classList.remove('sel'); };
  head.append(close);
  const bar = el('span', 'mt-bar big'); const fill = el('i'); fill.style.width = `${pct}%`; bar.append(fill);
  const meaning = el('p', 'mp-m', v ? meaningIn(v.meaning) : '');
  meaning.setAttribute('data-no-i18n', '');
  pop.replaceChildren(head, meaning, el('p', `mp-st ${MASTERY[m].cls}`, `${tr(MASTERY[m].label)} · ${pct}%`), bar);
  pop.hidden = false;
}

function renderMastery() {
  if (!page) return;
  $('mgPop').hidden = true;
  const tabs = $('progLevels');
  tabs.replaceChildren(...LEVELS.map((l) => {
    const words = page!.mastery[l];
    const known = words.filter(([, m]) => m >= 3).length;
    const b = el('button', 'cust-tab' + (l === level ? ' on' : ''), `${LEVEL_LABEL[l]} · ${known}/${words.length}`);
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', String(l === level));
    b.onclick = () => { level = l; mShown = PAGE; renderMastery(); };
    return b;
  }));
  const words = page.mastery[level];
  const counts = [0, 0, 0, 0, 0];
  for (const [, m] of words) counts[m]++;
  $('progLegend').replaceChildren(...MASTERY.map((m, i) => {
    const item = el('span', 'ml-item');
    item.append(el('i', m.cls), el('span', '', `${m.label} · ${counts[i]}`));
    return item;
  }));
  const grid = $('progGrid');
  grid.className = 'mastery-grid';
  const by = new Map(words.map(([k, m, p]) => [k, [m, p ?? 0] as const]));
  if (isKanaLevel(level)) {
    // the kana table
    const conv = level === 'KATA' ? toKatakana : (x: string) => x;
    const section = (title: string, rows: string[][], cols: number) => {
      const box = el('div', 'kana-sec');
      box.append(el('h4', '', title));
      const g = el('div', `kana-grid c${cols}`);
      for (const row of rows) for (const ch of row) {
        if (!ch || ch === '_') { g.append(el('span', 'mt blank')); continue; }
        const w = conv(ch); const [m, p] = by.get(w) ?? [0, 0];
        g.append(tile(w, m, p, ch));
      }
      box.append(g);
      return box;
    };
    const rowsOf = (str: string) => str.split(' ').map((r) => [...r]);
    const comboRows: string[][] = [];
    for (let i = 0; i < COMBOS.length; i += 3) comboRows.push(COMBOS.slice(i, i + 3));
    grid.classList.add('kana');
    grid.replaceChildren(section(level === 'KATA' ? 'Katakana' : 'Hiragana', rowsOf(GOJUON), 5), section('Dakuon and handakuon (゛ ゜)', rowsOf(VOICED), 5), section('Combinations', comboRows, 3));
    return;
  }
  // kanji levels: a filter, your words first, a page at a time
  const filters: Array<[MFilter, string, (m: number) => boolean]> = [
    ['mine', 'Your spells', (m) => m > 0], ['studying', 'Learning', (m) => m >= 1 && m <= 2], ['mastered', 'Learned & mastered', (m) => m >= 3],
    ['unseen', 'Not started', (m) => m === 0], ['all', 'All', () => true],
  ];
  if (mFilter === 'mine' && !words.some(([, m]) => m > 0)) mFilter = 'all';
  const bar = el('div', 'mg-filters');
  for (const [id, label, test] of filters) {
    const n = words.filter(([, m]) => test(m)).length;
    const b = el('button', 'pill mg-f' + (id === mFilter ? ' on' : ''), `${label} · ${n}`) as HTMLButtonElement;
    b.type = 'button';
    b.onclick = () => { mFilter = id; mShown = PAGE; renderMastery(); };
    bar.append(b);
  }
  const test = filters.find(([id]) => id === mFilter)![2];
  const list = words.filter(([, m]) => test(m)).sort((a, b) => b[2] - a[2]);
  const tiles = el('div', 'word-grid');
  for (const [k, m, p] of list.slice(0, mShown)) tiles.append(tile(k, m, p ?? 0, null));
  const nodes: Node[] = [bar, tiles];
  if (!list.length) nodes.push(el('p', 'hint', 'Nothing here yet.'));
  if (list.length > mShown) {
    const more = el('button', 'pill mg-more', `Show more (${list.length - mShown} left)`) as HTMLButtonElement;
    more.onclick = () => { mShown += PAGE * 2; renderMastery(); };
    nodes.push(more);
  }
  grid.replaceChildren(...nodes);
}

$('progressBack').onclick = () => ui.show('menu');
