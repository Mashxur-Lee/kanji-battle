// Progress: this week at a glance, this month's goals (and their seasonal reward), a 26-week activity
// month calendar, and a mastery grid with every word of each level coloured by how well you know it.

import { locale } from './i18n';
import { LEVEL_LABEL, LEVELS, type Level } from '../shared/protocol';
import { FLAMES, isoWeek, STAFFS } from '../shared/progress';
import { api, today, type DayActivity, type MonthProgress, type ProgressPage } from './api';
import * as ui from './ui';
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

export async function openProgress() {
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
      }
      if (day === t) cell.classList.add('today');
      grid.append(cell);
    }
  }
  box.replaceChildren(head, grid);
  $('progHeatSub').textContent = `${active} active days this month`;
}

function renderMastery() {
  if (!page) return;
  const tabs = $('progLevels');
  tabs.replaceChildren(...LEVELS.map((l) => {
    const words = page!.mastery[l];
    const known = words.filter(([, m]) => m >= 3).length;
    const b = el('button', 'cust-tab' + (l === level ? ' on' : ''), `${LEVEL_LABEL[l]} · ${known}/${words.length}`);
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', String(l === level));
    b.onclick = () => { level = l; renderMastery(); };
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
  const frag = document.createDocumentFragment();
  for (const [kanji, m] of words) {
    const c = el('span', `mg ${MASTERY[m].cls}`);
    c.title = `${kanji} — ${MASTERY[m].label}`;
    frag.append(c);
  }
  grid.replaceChildren(frag);
}

$('progressBack').onclick = () => ui.show('menu');
