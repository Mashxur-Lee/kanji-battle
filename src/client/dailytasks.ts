// The daily streak (0.9.9.3): a day counts once the tasks are done — study 10 spells, a JLPT quiz or a reading
// passage (one task since 0.9.9.7.1), and the daily challenge. Shown when you log in (unless you tick "don't show again"), from the menu,
// and in your profile card.

import { kanjiNumber } from '../shared/kanjinum';
import { FLAME_WEEKS, flameOf, weekStart } from '../shared/flames';
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

// ── 0.9.9.9.6.2: the streak flame — the player's own 30 weekly flames (public/flames/week-NN.webp) ─────────────
// The fire changes every week (7 streak days): six shapes — classic, sparks, hitodama, arcane, blaze, trident — and
// then the next colour — orange, red, blue, green, purple. Week 1 is orange classic … week 30 purple trident, and it
// stays there. No streak: the grey flame. The day count stays on it, in kanji (with the plain number at its foot).
/**
 * The streak emblem. `lit`: today's tasks are done (dim until then — still yours until midnight).
 * Size by CSS (.sf's width in its container; everything inside scales with it).
 */
export function streakFlame(n: number, lit: boolean): HTMLElement {
  const fl = flameOf(n);
  const k = kanjiNumber(n);
  const box = document.createElement('span');
  box.className = `sf sf2 s-${fl.shape}${fl.colour ? ` c-${fl.colour}` : ' lost'}${lit ? ' lit' : ''} k${Math.min(5, [...k].length)}`;
  box.style.setProperty('--fc', fl.hex);
  box.title = fl.week ? `${tr(fl.name)} · ${tr(`week ${fl.week}`)} · ${tr(`${n} days`)}` : tr('No streak yet — do today\'s tasks to light the flame');
  const img = document.createElement('img');
  img.className = 'sf-img'; img.src = fl.src; img.alt = ''; img.decoding = 'async'; img.draggable = false;
  const kan = document.createElement('b');
  kan.className = 'sf-k'; kan.lang = 'ja'; kan.textContent = k; kan.setAttribute('aria-hidden', 'true');
  const num = document.createElement('i');
  num.className = 'sf-n';
  num.textContent = String(n);
  box.append(img, kan, num);
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
  const streak = p.streak ?? 0;
  const fl = flameOf(streak);
  btn.style.setProperty('--fc', fl.hex);
  const folded = store.get(FOLD) === '1';
  btn.classList.toggle('folded', folded);
  // 0.9.9.8.2: a banner with each task and its progress (it was one thin line that was easy to miss)
  const mk = (tag: string, cls: string, text = '') => Object.assign(document.createElement(tag), { className: cls, textContent: text });
  const head = mk('span', 'tb-head');
  head.append(
    mk('b', 'tb-title', all ? tr('Streak kept today — well done!') : tr('Daily streak tasks')),
    mk('span', 'tb-count', `${n}/${tasks.length}`),
  );
  // 0.9.9.9.6.2: the next flame — next week's (the fire changes every 7 days), in its colour, with the days to it
  const nextWeek = fl.week < FLAME_WEEKS ? fl.week + 1 : 0;
  const sub = mk('span', 'tb-next');
  const nx = nextWeek ? flameOf(weekStart(nextWeek)) : fl;
  sub.style.setProperty('--nc', nx.hex);
  const from = fl.week ? weekStart(fl.week) - 1 : 0, to = nextWeek ? weekStart(nextWeek) - 1 : 0;
  sub.style.setProperty('--np', nextWeek ? `${Math.round(((streak - from) / Math.max(1, to + 1 - from)) * 100)}%` : '100%');
  const left = nextWeek ? weekStart(nextWeek) - streak : 0;
  const nextPic = nextWeek ? streakFlame(weekStart(nextWeek), true) : streakFlame(streak, true);
  nextPic.classList.add('tn-pic');
  const txt = mk('span', 'tn-text');
  if (nextWeek) {
    txt.append(mk('small', 'tn-lbl', tr('Next flame')), mk('b', 'tn-name', tr(nx.name)), mk('span', 'tn-left', tr(`in ${left} ${left === 1 ? 'day' : 'days'}`)));
  } else txt.append(mk('small', 'tn-lbl', tr('Your flame')), mk('b', 'tn-name', tr('The last flame — the highest')));
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
  // 0.9.9.9.6.3: the flame, and beside it the days in a row and which flame it is (week N)
  const streak = p.streak ?? 0;
  const fl = flameOf(streak);
  const txt = document.createElement('div');
  txt.className = 'ts-txt';
  txt.append(
    Object.assign(document.createElement('b'), { className: 'ts-n', textContent: String(streak) }),
    Object.assign(document.createElement('span'), { className: 'ts-l', textContent: tr(streak === 1 ? 'day in a row' : 'days in a row') }),
    Object.assign(document.createElement('small'), { className: 'ts-f', textContent: fl.week ? `${tr(fl.name)} · ${tr(`week ${fl.week}`)}` : tr('No flame yet') }),
  );
  txt.style.setProperty('--fc', fl.hex);
  $('tasksStreak').replaceChildren(streakFlame(streak, all), txt);
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
