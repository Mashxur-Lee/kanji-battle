// Admin: Inbox (players' bug reports and suggestions, and the game's own errors) and Stats (new players,
// daily active players, how many come back on day 1 / day 7, the tutorial funnel, games per mode).

import { api, type AdminReport, type AdminStats } from './api';
import { dateTime } from './ui';
import * as ui from './ui';

const $ = ui.$;
const el = (tag: string, cls = '', text?: string | number) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = String(text);
  return e;
};

export type AdminTab = 'users' | 'inbox' | 'stats';
let tab: AdminTab = 'users';
let reports: AdminReport[] = [];
export const adminTab = () => tab;

export function setAdminTab(t: AdminTab) {
  tab = t;
  for (const b of document.querySelectorAll<HTMLElement>('#adminTabs [data-atab]')) b.classList.toggle('on', b.dataset.atab === t);
  $('adminUsers').hidden = t !== 'users';
  $('adminInbox').hidden = t !== 'inbox';
  $('adminStats').hidden = t !== 'stats';
  if (t === 'inbox') void loadInbox();
  if (t === 'stats') void loadStats();
}

/** The number of open (not done) player reports — the badge on the Inbox tab. */
export async function refreshInboxBadge() {
  try { reports = (await api.inbox()).reports; } catch { return; }
  const open = reports.filter((r) => !r.done && r.kind !== 'error').length;
  for (const id of ['inboxBadge', 'adminBadge']) { $(id).hidden = open === 0; $(id).textContent = String(open); }
}

async function loadInbox() {
  await refreshInboxBadge();
  renderInbox();
}

const KIND_LABEL: Record<AdminReport['kind'], string> = { bug: 'Bug report', suggestion: 'Suggestion', error: 'Error' };
function renderInbox() {
  const kind = document.querySelector<HTMLInputElement>('input[name="inboxKind"]:checked')?.value ?? 'all';
  const showDone = $<HTMLInputElement>('inboxShowDone').checked;
  const list = reports.filter((r) => (kind === 'all' || r.kind === kind) && (showDone || !r.done));
  $('inboxList').replaceChildren(...(list.length ? list.map((r) => {
    const card = el('article', `inbox-item k-${r.kind}${r.done ? ' done' : ''}`);
    const head = el('div', 'ii-head');
    head.append(el('span', `ii-kind k-${r.kind}`, KIND_LABEL[r.kind]), el('b', '', r.username || (r.kind === 'error' ? 'game' : '?')), el('small', 'hint', dateTime(r.at)));
    const done = el('button', 'pill', r.done ? 'Reopen' : '✓ Done') as HTMLButtonElement;
    done.onclick = async () => { await api.inboxDone(r.id, !r.done); r.done = !r.done; renderInbox(); void refreshInboxBadge(); };
    const del = el('button', 'pill danger', 'Delete') as HTMLButtonElement;
    del.onclick = async () => { await api.inboxDelete(r.id); reports = reports.filter((x) => x.id !== r.id); renderInbox(); void refreshInboxBadge(); };
    head.append(el('span', 'ii-sp'), done, del);
    const text = el('p', 'ii-text', r.text);
    card.append(head, text);
    if (r.meta) { const m = el('details', 'ii-meta'); m.append(el('summary', '', 'Details'), el('pre', '', r.meta)); card.append(m); }
    return card;
  }) : [el('p', 'hint', 'Nothing here.')]));
}
for (const i of document.querySelectorAll<HTMLInputElement>('input[name="inboxKind"]')) {
  i.addEventListener('change', () => {
    for (const l of document.querySelectorAll('#adminInbox .inbox-filters .chip')) l.classList.toggle('on', !!l.querySelector('input:checked'));
    renderInbox();
  });
}
$('inboxShowDone').addEventListener('change', renderInbox);
for (const b of document.querySelectorAll<HTMLElement>('#adminTabs [data-atab]')) b.onclick = () => setAdminTab(b.dataset.atab as AdminTab);

// ── stats ───────────────────────────────────────────────────────────────────
const pct = (a: number, b: number) => (b ? `${Math.round((a / b) * 100)}%` : '—');
const FUNNEL_LABEL: Record<string, string> = {
  signup: 'Signed up', tutorial_start: 'Started the tutorial', tutorial_kana_yes: 'Knows hiragana', tutorial_kana_no: 'Hiragana beginner',
  tutorial_battle: 'Started the first battle', tutorial_done: 'Finished the tutorial', tutorial_skip: 'Skipped the tutorial',
};
async function loadStats() {
  const box = $('adminStats');
  box.replaceChildren(el('p', 'hint', 'Loading…'));
  let s: AdminStats;
  try { s = await api.adminStats(); } catch (e) { box.replaceChildren(el('p', 'error', (e as Error).message)); return; }
  const tiles = el('div', 'stat-tiles');
  const tile = (n: string | number, label: string, sub = '') => { const t = el('div', 'stat-tile'); t.append(el('b', '', n), el('span', '', label)); if (sub) t.append(el('small', 'hint', sub)); return t; };
  const today = s.daily[s.daily.length - 1];
  tiles.append(
    tile(s.onlineNow, 'online now'),
    tile(today?.active ?? 0, 'active today'),
    tile(s.players, 'accounts'),
    tile(pct(s.day1.returned, s.day1.players), 'back on day 1', `${s.day1.returned} of ${s.day1.players} (last 30 days)`),
    tile(pct(s.day7.returned, s.day7.players), 'back on day 7', `${s.day7.returned} of ${s.day7.players}`),
  );
  // last 14 days: bars for active players, a dot count for sign-ups
  const max = Math.max(1, ...s.daily.map((d) => d.active));
  const chart = el('div', 'stat-chart');
  for (const d of s.daily) {
    const col = el('div', 'sc-col');
    const bar = el('i', 'sc-bar'); bar.style.height = `${(d.active / max) * 100}%`;
    col.title = `${d.day}: ${d.active} active, ${d.signups} new`;
    col.append(el('b', 'sc-n', d.active || ''), bar, el('span', 'sc-new', d.signups ? `+${d.signups}` : ''), el('small', '', d.day.slice(8)));
    chart.append(col);
  }
  const funnel = el('table', 'stat-table');
  const signups = s.funnel.find((f) => f.name === 'signup')?.players ?? 0;
  funnel.append(...s.funnel.map((f) => { const tr = el('tr'); tr.append(el('td', '', FUNNEL_LABEL[f.name] ?? f.name), el('td', 'num', f.players), el('td', 'num hint', pct(f.players, signups))); return tr; }));
  const modes = el('table', 'stat-table');
  const rows = Object.entries(s.modes);
  modes.append(...(rows.length ? rows.map(([m, v]) => { const tr = el('tr'); tr.append(el('td', '', m), el('td', 'num', `${v.started} started`), el('td', 'num', `${v.finished} finished`)); return tr; }) : [el('tr')]));
  box.replaceChildren(
    tiles,
    el('h3', '', 'Active players (bars) and new players (+n), last 14 days'), chart,
    el('div', 'stat-cols'),
  );
  const cols = box.lastElementChild!;
  const c1 = el('section'); c1.append(el('h3', '', 'Tutorial funnel (last 30 days)'), funnel);
  const c2 = el('section'); c2.append(el('h3', '', 'Games this week'), rows.length ? modes : el('p', 'hint', 'No games yet.'));
  cols.append(c1, c2);
}
