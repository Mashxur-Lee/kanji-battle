// The daily streak (0.9.9.3): a day counts once four tasks are done — study 10 spells, a JLPT quiz, the daily
// challenge and a reading passage. Shown when you log in (unless you tick "don't show again"), from the menu,
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
const ICON: Record<string, string> = { learn: '学', quiz: '問', daily: '日', passage: '読' };
/** what each task's "Go" button opens (set by main.ts) */
export const taskActions: Partial<Record<string, () => void>> = {};

let last: Profile | null = null;
let shownThisVisit = false;

const doneCount = (p: Profile) => (p.tasks ?? []).filter((t) => t.value >= t.target).length;

/** The menu button and the profile card line; called on every profile update. */
let wasAll: boolean | null = null;
export function renderTasks(p: Profile) {
  last = p;
  const tasks = p.tasks ?? [];
  if (!tasks.length) return;
  const n = doneCount(p), all = n === tasks.length;
  if (wasAll === false && all) ui.toast(`🔥 ${tr('Daily streak kept!')} +500 XP`, 5000); // just finished the fourth task
  wasAll = all;
  const btn = $('tasksBtn');
  btn.hidden = false;
  btn.classList.toggle('done', all);
  btn.replaceChildren(
    Object.assign(document.createElement('span'), { className: 'tb-fire', textContent: '🔥' }),
    Object.assign(document.createElement('span'), { className: 'tb-text', textContent: all ? tr('Streak kept today — well done!') : `${tr('Daily streak tasks')}: ${n}/${tasks.length}` }),
    Object.assign(document.createElement('span'), { className: 'tb-days', textContent: `${p.streak ?? 0}` }),
  );
  $('ppTasks').textContent = `${tr('Today’s streak tasks')}: ${n}/${tasks.length} ›`;
  if (!$<HTMLDialogElement>('tasksDialog').open) return;
  fill(p);
}

function fill(p: Profile) {
  const tasks = p.tasks ?? [];
  $('tasksStreak').replaceChildren(
    Object.assign(document.createElement('b'), { textContent: String(p.streak ?? 0) }),
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
  $('tasksBtn').onclick = openTasks;
  $('ppTasks').onclick = () => { $('profilePop').hidden = true; openTasks(); };
  $('tasksOk').onclick = () => $<HTMLDialogElement>('tasksDialog').close();
  $<HTMLInputElement>('tasksNever').onchange = (e) => store.set(NEVER, (e.target as HTMLInputElement).checked ? '1' : '');
}
