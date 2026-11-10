// 0.9.9.9.5.2: the Quizzes screen — today's streak goal on top, then a card for each quiz (JLPT, onomatopoeia, the
// reading passage) with its facts and your own record on this device: best score, last score, how many played.
// The Start buttons keep their ids (quizBtn / onoQuizBtn / passageBtn): decks.ts opens the quizzes.

import type { Profile } from './api';
import { locale, tr } from './i18n';

export type QuizKind = 'jlpt' | 'ono' | 'passage';
interface Record_ { best: number; bestOf: number; last: number; lastOf: number; plays: number; at: number }
const KEY = 'kb:quizStats';

function load(): Partial<Record<QuizKind, Record_>> {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '{}') ?? {}; } catch { return {}; }
}
/** decks.ts: a quiz (or passage) was finished with this score */
export function recordQuiz(kind: QuizKind, score: number, total: number) {
  if (!(total > 0)) return;
  const all = load();
  const r = all[kind] ?? { best: 0, bestOf: total, last: 0, lastOf: total, plays: 0, at: 0 };
  if (r.plays === 0 || score / total > r.best / Math.max(1, r.bestOf)) { r.best = score; r.bestOf = total; }
  r.last = score; r.lastOf = total; r.plays++; r.at = Date.now();
  all[kind] = r;
  try { localStorage.setItem(KEY, JSON.stringify(all)); } catch { /* private mode */ }
  if (!document.getElementById('quizzes')?.hidden) render();
}

let profile: Profile | null = null;
/** main.ts: every profile update (for today's goal) */
export function quizzesProfile(p: Profile) { profile = p; if (!document.getElementById('quizzes')?.hidden) render(); }

const mk = (tag: string, cls: string, text = '') => Object.assign(document.createElement(tag), { className: cls, textContent: text });
const when = (t: number) => {
  const d = new Date(t), now = new Date();
  if (d.toDateString() === now.toDateString()) return tr('today');
  const y = new Date(now); y.setDate(now.getDate() - 1);
  if (d.toDateString() === y.toDateString()) return tr('yesterday');
  return d.toLocaleDateString(locale(), { day: 'numeric', month: 'short' });
};

function render() {
  // today's goal: the streak's practice task
  const goal = document.getElementById('qzGoal')!;
  const t = profile?.tasks?.find((x) => x.id === 'practice');
  goal.hidden = !t;
  if (t) {
    const done = t.value >= t.target;
    goal.classList.toggle('done', done);
    goal.replaceChildren(
      mk('span', 'qg-ic', done ? '✓' : '🔥'),
      mk('span', 'qg-text', done ? tr('Today’s quiz task is done — nice work!') : tr('Today’s streak task: pass a JLPT quiz (7 / 10) or a reading passage (half right).')),
      mk('b', 'qg-val', `${Math.min(t.value, t.target)}/${t.target}`),
    );
  }
  // each card: your record
  const all = load();
  for (const box of document.querySelectorAll<HTMLElement>('#quizzes .qz-stats')) {
    const r = all[box.dataset.stats as QuizKind];
    if (!r?.plays) { box.replaceChildren(mk('span', 'qs-none', tr('Not played yet — good luck!'))); continue; }
    const pct = Math.round((r.best / Math.max(1, r.bestOf)) * 100);
    const best = mk('span', 'qs-best');
    best.append(mk('small', '', tr('Best')), mk('b', '', `${r.best}/${r.bestOf}`));
    const ring = mk('span', 'qs-ring');
    ring.style.setProperty('--p', `${pct}%`);
    ring.append(mk('i', '', `${pct}%`));
    const last = mk('span', 'qs-last');
    last.append(mk('small', '', tr('Last')), mk('b', '', `${r.last}/${r.lastOf}`), mk('small', 'qs-when', when(r.at)));
    const plays = mk('span', 'qs-plays');
    plays.append(mk('small', '', tr('Played')), mk('b', '', `${r.plays}×`));
    box.replaceChildren(ring, best, last, plays);
  }
}

export function initQuizzes() {
  // the whole card opens its quiz (its button does the opening)
  for (const card of document.querySelectorAll<HTMLElement>('#quizzes .qz-card')) {
    card.addEventListener('click', (e) => {
      const go = card.querySelector<HTMLButtonElement>('.qz-go');
      if (go && !(e.target as Element).closest('button')) go.click();
    });
  }
  addEventListener('kw:screenin', (e) => { if ((e as CustomEvent<string>).detail === 'quizzes') render(); });
}
