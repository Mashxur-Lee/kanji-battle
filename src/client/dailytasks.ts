// The daily streak (0.9.9.3): a day counts once the tasks are done — study 10 spells, a JLPT quiz or a reading
// passage (one task since 0.9.9.7.1), and the daily challenge. Shown when you log in (unless you tick "don't show again"), from the menu,
// and in your profile card.

import type { Profile } from './api';
import { tr } from './i18n';
import * as ui from './ui';

const $ = ui.$;
const NEVER = 'kb:tasksNoticeOff';
const store = {
  get: (k: string) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k: string, v: string) => { try { if (v) localStorage.setItem(k, v); else localStorage.removeItem(k); } catch { /* private mode */ } },
};
const ICON: Record<string, string> = { learn: '学', practice: '問', daily: '日' };
/** what each task's "Go" button opens (set by main.ts) */
export const taskActions: Partial<Record<string, () => void>> = {};

let last: Profile | null = null;
let shownThisVisit = false;
// 0.9.9.9.5: the banner folds up (▾) to a slim bar with your streak — it was an ✕ that hid it for the day
const FOLD = 'kb:tasksFolded';

const doneCount = (p: Profile) => (p.tasks ?? []).filter((t) => t.value >= t.target).length;

// ── 0.9.9.9.5: the streak flame — its colour climbs with the streak (like Duolingo / chess.com) ──────────────
/** the streak's tier: the flame's colours and name */
export const STREAK_TIERS = [
  { min: 0, name: 'Ash' }, { min: 1, name: 'Spark' }, { min: 3, name: 'Ember' }, { min: 7, name: 'Blaze' },
  { min: 14, name: 'Inferno' }, { min: 30, name: 'Azure' }, { min: 100, name: 'Legend' },
] as const;
/** each flame's main colour (for the "next flame" pill) */
const TIER_COLOR = ['#9a9aae', '#ff8a2a', '#ffb000', '#ff2e63', '#b26bff', '#3aa0ff', '#ffd84d'];
export const streakTier = (n: number) => { let t = 0; STREAK_TIERS.forEach((x, i) => { if (n >= x.min) t = i; }); return t; };
let flameId = 0;
/**
 * A flame with the day count on it. `lit`: today's tasks are done (dim until then — still yours until midnight).
 * Size by CSS (.sf in its container).
 */
export function streakFlame(n: number, lit: boolean): HTMLElement {
  const tier = streakTier(n);
  const box = document.createElement('span');
  box.className = `sf t${tier}${lit ? ' lit' : ''}`;
  box.title = tr(`${STREAK_TIERS[tier].name} · ${n} days`);
  const g = `sfg${++flameId}`, c = `sfc${flameId}`;
  // (a fixed drawing; only the numbers are data)
  box.innerHTML = `<svg viewBox="0 0 64 80" aria-hidden="true"><defs>`
    + `<linearGradient id="${g}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" style="stop-color:var(--f1)"/><stop offset=".55" style="stop-color:var(--f2)"/><stop offset="1" style="stop-color:var(--f3)"/></linearGradient>`
    + `<linearGradient id="${c}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" style="stop-color:var(--c1)"/><stop offset="1" style="stop-color:var(--c2)"/></linearGradient></defs>`
    + `<g class="sf-body"><path class="sf-outer" fill="url(#${g})" d="M33 2c3 13 15 20 19 33 5 16 0 32-12 39-9 6-22 5-29-4C2 59 6 46 13 37c2 7 5 11 10 12-5-14 0-32 10-47z"/>`
    + `<path class="sf-core" fill="url(#${c})" d="M33 34c2 8 9 12 10 21 1 10-5 17-11 17-7 0-12-6-11-14 0-6 4-10 6-15 1 4 3 6 6 6-2-5-2-10 0-15z"/></g></svg>`;
  const num = document.createElement('b');
  num.className = 'sf-n';
  num.textContent = String(n);
  box.append(num);
  return box;
}

/** The menu banner and the profile card line; called on every profile update. */
let wasAll: boolean | null = null;
export function renderTasks(p: Profile) {
  last = p;
  const tasks = p.tasks ?? [];
  if (!tasks.length) return;
  const n = doneCount(p), all = n === tasks.length;
  const justDone = wasAll === false && all;
  if (justDone) ui.toast(`🔥 ${tr('Daily streak kept!')} +500 XP`, 5000); // just finished the last task
  wasAll = all;
  const btn = $('tasksBtn');
  btn.hidden = false;
  btn.classList.toggle('done', all);
  STREAK_TIERS.forEach((_, i) => btn.classList.toggle(`tier-${i}`, i === streakTier(p.streak ?? 0)));
  const folded = store.get(FOLD) === '1';
  btn.classList.toggle('folded', folded);
  // 0.9.9.8.2: a banner with each task and its progress (it was one thin line that was easy to miss)
  const mk = (tag: string, cls: string, text = '') => Object.assign(document.createElement(tag), { className: cls, textContent: text });
  const streak = p.streak ?? 0;
  const tier = streakTier(streak);
  const head = mk('span', 'tb-head');
  head.append(
    mk('b', 'tb-title', all ? tr('Streak kept today — well done!') : tr('Daily streak tasks')),
    mk('span', 'tb-count', `${n}/${tasks.length}`),
  );
  // the next colour of the flame
  const next = STREAK_TIERS[tier + 1];
  // 0.9.9.9.5.1: the next flame, in its own colour, with how far there is to go (it was a faint line of text)
  const sub = mk('span', 'tb-next');
  sub.style.setProperty('--nc', TIER_COLOR[next ? tier + 1 : tier]);
  sub.style.setProperty('--np', next ? `${Math.round(((streak - STREAK_TIERS[tier].min) / (next.min - STREAK_TIERS[tier].min)) * 100)}%` : '100%');
  const left = next ? next.min - streak : 0;
  sub.append(
    mk('span', 'tn-flame', '🔥'),
    mk('span', 'tn-text', next ? tr(`Next: ${next.name} — ${left} more ${left === 1 ? 'day' : 'days'}`) : tr('Legend flame — the highest')),
    Object.assign(mk('span', 'tn-bar'), { innerHTML: '<i></i>' }),
  );
  const dots = mk('span', 'tb-dots');
  for (const t of tasks) dots.append(mk('i', t.value >= t.target ? 'on' : ''));
  head.append(dots);
  const list = mk('span', 'tb-tasks');
  for (const t of tasks) {
    const ok = t.value >= t.target;
    const chip = mk('span', `tb-task${ok ? ' ok' : ''}`);
    chip.style.setProperty('--p', `${Math.min(100, Math.round((t.value / Math.max(1, t.target)) * 100))}%`);
    const ic = mk('span', 'tb-ic', ok ? '✓' : ICON[t.id] ?? '•'); ic.lang = 'ja';
    chip.append(ic, mk('span', 'tb-label', tr(t.label)), mk('span', 'tb-val', `${Math.min(t.value, t.target)}/${t.target}`));
    list.append(chip);
  }
  const fold = mk('span', 'tb-fold'); fold.append(list); // (folds smoothly: grid rows 1fr → 0fr)
  const main = mk('span', 'tb-main'); main.append(head, sub, fold);
  const flame = streakFlame(streak, all);
  if (justDone) flame.classList.add('burst');
  const toggle = mk('span', 'tb-toggle');
  toggle.setAttribute('role', 'button'); toggle.tabIndex = 0;
  const label = () => tr(btn.classList.contains('folded') ? 'Show the tasks' : 'Hide the tasks');
  toggle.title = label(); toggle.setAttribute('aria-label', label());
  toggle.setAttribute('aria-expanded', String(!folded));
  toggle.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const flip = (e: Event) => {
    e.preventDefault(); e.stopPropagation();
    const f = !btn.classList.contains('folded');
    store.set(FOLD, f ? '1' : '');
    btn.classList.toggle('folded', f);
    toggle.setAttribute('aria-expanded', String(!f));
    toggle.title = label(); toggle.setAttribute('aria-label', label());
  };
  toggle.addEventListener('click', flip);
  toggle.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') flip(e); });
  btn.replaceChildren(flame, main, toggle);
  $('ppTasks').textContent = `${tr('Today’s streak tasks')}: ${n}/${tasks.length} ›`;
  if (!$<HTMLDialogElement>('tasksDialog').open) return;
  fill(p);
}

function fill(p: Profile) {
  const tasks = p.tasks ?? [];
  const all = doneCount(p) === tasks.length;
  $('tasksStreak').replaceChildren(
    streakFlame(p.streak ?? 0, all),
    Object.assign(document.createElement('span'), { textContent: tr('days in a row') }),
  );
  $('tasksList').replaceChildren(...tasks.map((t) => {
    const li = document.createElement('li');
    const ok = t.value >= t.target;
    li.className = ok ? 'ok' : '';
    const ic = Object.assign(document.createElement('span'), { className: 'tk-ic', textContent: ok ? '✓' : ICON[t.id] ?? '•' });
    ic.lang = 'ja';
    const label = Object.assign(document.createElement('span'), { className: 'tk-label', textContent: tr(t.label) });
    const prog = Object.assign(document.createElement('span'), { className: 'tk-prog', textContent: `${t.value}/${t.target}` });
    li.append(ic, label, prog);
    const go = taskActions[t.id];
    if (!ok && go) {
      const b = Object.assign(document.createElement('button'), { className: 'pill', textContent: tr('Go'), type: 'button' });
      b.onclick = () => { $<HTMLDialogElement>('tasksDialog').close(); go(); };
      li.append(b);
    }
    return li;
  }));
}

export function openTasks() {
  if (!last) return;
  fill(last);
  $<HTMLInputElement>('tasksNever').checked = store.get(NEVER) === '1';
  const d = $<HTMLDialogElement>('tasksDialog');
  if (!d.open) d.showModal();
}

/** At login: once per visit, unless switched off or today's tasks are all done. */
export function tasksAtLogin(p: Profile) {
  if (shownThisVisit || store.get(NEVER) === '1' || !(p.tasks ?? []).length || doneCount(p) === (p.tasks ?? []).length) return;
  shownThisVisit = true;
  last = p;
  openTasks();
}

export function initTasks() {
  // (screenshots of every streak colour: the harness draws the banner itself — only with this local flag)
  if (store.get('kb:debugui') === '1') (window as unknown as { __kwRenderTasks: typeof renderTasks }).__kwRenderTasks = (p) => { wasAll = null; renderTasks(p); };
  $('tasksBtn').onclick = openTasks;
  $('ppTasks').onclick = () => { $('profilePop').hidden = true; openTasks(); };
  $('tasksOk').onclick = () => $<HTMLDialogElement>('tasksDialog').close();
  $<HTMLInputElement>('tasksNever').onchange = (e) => store.set(NEVER, (e.target as HTMLInputElement).checked ? '1' : '');
}
