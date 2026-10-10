// Progress: this week at a glance, this month's goals (and their seasonal reward), a 26-week activity
// heatmap, and a mastery grid with every word of each level coloured by how well you know it.

import { LEVEL_LABEL, LEVELS, type Level } from '../shared/protocol';
import { FLAMES, STAFFS } from '../shared/progress';
import { api, today, type DayActivity, type MonthProgress, type ProgressPage } from './api';
import * as ui from './ui';

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
    bar.append(fill, el('span', '', new Date(`${day}T12:00:00`).toLocaleDateString(undefined, { weekday: 'narrow' })));
    bars.append(bar);
  }
  $('progWeek').replaceChildren(el('h3', '', 'This week'), grid, bars);
}

const score = (a?: DayActivity) => (a ? a.reviews + a.games * 5 + (a.login ? 1 : 0) : 0);

/** Month goals with progress bars and the reward (also used on the menu). */
export function monthNodes(m: MonthProgress): HTMLElement[] {
  const [kind, id] = m.reward.split(':');
  const reward = kind === 'flame' ? FLAMES.find((f) => f.id === id) : STAFFS.find((s) => s.id === id);
  const sw = el('span', 'reward-swatch');
  sw.style.setProperty('--c', kind === 'flame' ? (reward as { color: string }).color : (reward as { gem: string }).gem);
  const monthName = new Date(`${m.month}-15T12:00:00`).toLocaleDateString(undefined, { month: 'long' });
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

function renderHeatmap(activity: DayActivity[]) {
  const t = today();
  const byDay = new Map(activity.map((a) => [a.day, a]));
  const box = $('progHeat');
  box.replaceChildren();
  // 26 columns (weeks, Monday first), today in the last one
  const dow = (new Date(`${t}T12:00:00`).getDay() + 6) % 7;
  const start = shift(t, -(25 * 7 + dow));
  const max = Math.max(1, ...activity.map(score));
  let active = 0;
  for (let w = 0; w < 26; w++) {
    const col = el('div', 'hm-col');
    for (let d = 0; d < 7; d++) {
      const day = shift(start, w * 7 + d);
      const cell = el('div', 'hm-cell');
      if (day > t) { cell.classList.add('future'); col.append(cell); continue; }
      const a = byDay.get(day);
      const s = score(a);
      if (s > 0) active++;
      cell.dataset.l = String(s === 0 ? 0 : Math.min(4, 1 + Math.floor((s / max) * 3.999)));
      cell.title = `${new Date(`${day}T12:00:00`).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}: ${a ? `${a.reviews} cards passed, ${a.games} games${a.wins ? ` (${a.wins} won)` : ''}` : 'no activity'}`;
      if (day === t) cell.classList.add('today');
      col.append(cell);
    }
    box.append(col);
  }
  $('progHeatSub').textContent = `${active} active days in the last 6 months`;
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
