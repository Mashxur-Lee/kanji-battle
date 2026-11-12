// The daily streak (0.9.9.3): a day counts once the tasks are done — study 10 spells, a JLPT quiz or a reading
// passage (one task since 0.9.9.7.1), and the daily challenge. Shown when you log in (unless you tick "don't show again"), from the menu,
// and in your profile card.

import { kanjiNumber } from '../shared/kanjinum';
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
// ── 0.9.9.9.6: the streak emblem — the day count written in kanji (一, 二, 三 … 十二 … 百), set alight ────────────
// Each tier burns differently and better: Ash smoulders grey; Spark is a small orange flame; Ember has sparks
// rising; Blaze burns crimson; Inferno purple, with a second flame; Azure blue and white-hot, with rays; Legend
// gold, with a halo. The number is also written plainly underneath (it was in the middle of the flame and often
// lost in it), and the flame just breathes (it used to skew from side to side).
let flameId = 0;
// 0.9.9.9.6.1: every tier has its own fire, not only its own colour — more tongues, taller, wider, with the tiers
// above: Ash smoulders (a glowing heap, smoke); Spark is one small flame; Ember has two side tongues; Blaze is tall,
// three-tongued; Inferno is wide with a second fire behind; Azure is tall and slim, blue, with rays; Legend spreads
// its tongues like wings, with a halo. Every tongue flickers on its own (taller and back, a little sway).
type Tongue = [cx: number, h: number, w: number, lean: number, layer: 'o' | 'm' | 'c'];
const FIRES: Tongue[][] = [
  [],
  [[32, 44, 14, 0, 'o'], [32, 28, 8, 1, 'm'], [32, 16, 4.5, 0, 'c']],
  [[32, 52, 15, 0, 'o'], [21, 34, 8, -5, 'o'], [43, 36, 8, 5, 'o'], [32, 34, 9, 1, 'm'], [32, 20, 5, 0, 'c']],
  [[32, 64, 15, 2, 'o'], [19, 46, 9, -7, 'o'], [45, 48, 9, 7, 'o'], [32, 46, 10, -1, 'm'], [26, 30, 5, -3, 'm'], [32, 26, 6, 0, 'c']],
  [[32, 70, 19, 0, 'o'], [15, 52, 10, -9, 'o'], [49, 54, 10, 9, 'o'], [8, 34, 6, -10, 'o'], [56, 36, 6, 10, 'o'], [24, 56, 9, -3, 'm'], [40, 58, 9, 3, 'm'], [32, 34, 7, 0, 'c']],
  [[32, 76, 12, 3, 'o'], [21, 60, 8, -6, 'o'], [43, 62, 8, 7, 'o'], [32, 58, 8, -2, 'm'], [27, 40, 5, -3, 'm'], [37, 42, 5, 3, 'm'], [32, 36, 5, 1, 'c']],
  [[32, 76, 16, 0, 'o'], [13, 56, 9, -12, 'o'], [51, 56, 9, 12, 'o'], [5, 40, 6, -15, 'o'], [59, 40, 6, 15, 'o'], [32, 58, 10, 0, 'm'], [22, 40, 6, -5, 'm'], [42, 40, 6, 5, 'm'], [32, 36, 6, 0, 'c']],
];
const BASE = 74;
const tongue = ([cx, hh, w, lean]: Tongue) => {
  const tip = cx + lean, y = BASE - hh;
  return `M${cx - w} ${BASE}C${cx - w * 1.1} ${BASE - hh * 0.45} ${tip - w * 0.35} ${y + hh * 0.3} ${tip} ${y}C${tip + w * 0.35} ${y + hh * 0.3} ${cx + w * 1.1} ${BASE - hh * 0.45} ${cx + w} ${BASE}Q${cx} ${BASE + 4} ${cx - w} ${BASE}Z`;
};
/**
 * The streak emblem. `lit`: today's tasks are done (dim until then — still yours until midnight).
 * Size by CSS (.sf's width in its container; everything inside scales with it).
 */
export function streakFlame(n: number, lit: boolean): HTMLElement {
  const tier = streakTier(n);
  const k = kanjiNumber(n);
  const box = document.createElement('span');
  box.className = `sf t${tier}${lit ? ' lit' : ''} k${Math.min(5, [...k].length)}`;
  box.title = tr(`${STREAK_TIERS[tier].name} · ${n} days`);
  const id = ++flameId;
  const grad = (name: string, a: string, b: string, c: string) => `<linearGradient id="${name}${id}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" style="stop-color:var(${a})"/><stop offset=".6" style="stop-color:var(${b})"/><stop offset="1" style="stop-color:var(${c})"/></linearGradient>`;
  const fire = FIRES[tier].map((t, i) => `<path class="tg tg-${t[4]}" style="--d:${(i * 0.37) % 1.3}s;--s:${(1.1 + (i % 3) * 0.35).toFixed(2)}s" fill="url(#${t[4]}${id})" d="${tongue(t)}"/>`).join('');
  // Ash: a smouldering heap and smoke
  const ash = tier === 0 ? `<ellipse cx="32" cy="70" rx="20" ry="7" fill="url(#o${id})"/><ellipse cx="32" cy="68" rx="11" ry="3.5" fill="#ff7a3a" opacity=".55" class="sf-glow"/>`
    + `<path class="sf-smoke" d="M27 62c-4-6 4-9 0-15s3-9 1-14" stroke="#9a9aae" stroke-width="3" fill="none" stroke-linecap="round" opacity=".55"/><path class="sf-smoke s2" d="M37 62c4-6-4-9 0-15s-3-9-1-14" stroke="#9a9aae" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".45"/>` : '';
  box.innerHTML = `<svg class="sf-fire" viewBox="0 0 64 80" aria-hidden="true"><defs>${grad('o', '--f1', '--f2', '--f3')}${grad('m', '--f2', '--f3', '--k1')}${grad('c', '--f3', '--k1', '--k1')}</defs>`
    + `<g class="sf-flames">${ash}${fire}</g></svg><i class="sf-halo" aria-hidden="true"></i>`;
  const kan = document.createElement('b');
  kan.className = 'sf-k'; kan.lang = 'ja'; kan.textContent = k; kan.setAttribute('aria-hidden', 'true');
  const num = document.createElement('i');
  num.className = 'sf-n';
  num.textContent = String(n);
  box.append(kan, num);
  if (tier >= 2) for (let i = 0; i < Math.min(5, tier); i++) { const e = document.createElement('i'); e.className = 'sf-e'; e.style.setProperty('--i', String(i)); box.append(e); }
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
  // 0.9.9.9.6: the next flame itself, small, with its name and how many days — and a bar to it
  const nextPic = next ? streakFlame(next.min, true) : streakFlame(streak, true);
  nextPic.classList.add('tn-pic');
  const txt = mk('span', 'tn-text');
  if (next) {
    txt.append(mk('small', 'tn-lbl', tr('Next flame')), mk('b', 'tn-name', tr(next.name)), mk('span', 'tn-left', tr(`in ${left} ${left === 1 ? 'day' : 'days'}`)));
  } else txt.append(mk('small', 'tn-lbl', tr('Your flame')), mk('b', 'tn-name', tr('Legend — the highest')));
  sub.append(nextPic, txt, Object.assign(mk('span', 'tn-bar'), { innerHTML: '<i></i>' }));
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

// 0.9.9.9.5.4: the profile cards (yours and your friends') show the streak flames too
ui.useStreakFlame(streakFlame);
