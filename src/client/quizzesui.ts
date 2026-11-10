// 0.9.9.9.5.2: the Quizzes screen — today's streak goal on top, then a card for each quiz (JLPT, onomatopoeia, the
// reading passage) with its facts and your own record on this device: best score, last score, how many played.
// The Start buttons keep their ids (quizBtn / onoQuizBtn / passageBtn): decks.ts opens the quizzes.

import type { Profile } from './api';
import { locale, tr } from './i18n';

export type QuizKind = 'jlpt' | 'ono' | 'passage';
/**
 * your record of one quiz on this device. 0.9.9.9.5.3: also the average (as correct answers out of 10) and the
 * times — best (fastest), last and average (`timed`: how many of the plays had a time).
 */
interface Record_ {
  best: number; bestOf: number; last: number; lastOf: number; plays: number; at: number;
  sum10?: number; bestMs?: number; lastMs?: number; sumMs?: number; timed?: number;
}
const KEY = 'kb:quizStats';

function load(): Partial<Record<QuizKind, Record_>> {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '{}') ?? {}; } catch { return {}; }
}
/** decks.ts: a quiz (or passage) was finished with this score */
export function recordQuiz(kind: QuizKind, score: number, total: number, ms = 0) {
  if (!(total > 0)) return;
  const all = load();
  const r = all[kind] ?? { best: 0, bestOf: total, last: 0, lastOf: total, plays: 0, at: 0 };
  // (records from 0.9.9.9.5.2 had no average: it starts from what they had, the last score for each play)
  if (r.sum10 === undefined) r.sum10 = r.plays * (r.last / Math.max(1, r.lastOf)) * 10;
  if (r.plays === 0 || score / total > r.best / Math.max(1, r.bestOf)) { r.best = score; r.bestOf = total; }
  r.last = score; r.lastOf = total; r.plays++; r.at = Date.now();
  r.sum10 += (score / total) * 10;
  // a time that makes sense (not a quiz left open overnight)
  if (ms > 2000 && ms < 45 * 60_000) {
    r.lastMs = ms; r.bestMs = Math.min(r.bestMs ?? Infinity, ms);
    r.sumMs = (r.sumMs ?? 0) + ms; r.timed = (r.timed ?? 0) + 1;
  }
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
  // each card: your record — the score (best, last, average out of 10) and the time (fastest, last, average)
  const all = load();
  for (const box of document.querySelectorAll<HTMLElement>('#quizzes .qz-stats')) {
    const r = all[box.dataset.stats as QuizKind];
    if (!r?.plays) { box.classList.add('empty'); box.replaceChildren(mk('span', 'qs-none', tr('Not played yet — good luck!'))); continue; }
    box.classList.remove('empty');
    const pct = Math.round((r.best / Math.max(1, r.bestOf)) * 100);
    const ring = mk('span', 'qs-ring');
    ring.style.setProperty('--p', `${pct}%`);
    ring.append(mk('i', '', `${pct}%`));
    const head = mk('div', 'qs-head');
    const played = mk('span', 'qs-played');
    played.append(mk('b', '', `${r.plays}×`), mk('small', '', `${tr('Played')} · ${tr('Last')}: ${when(r.at)}`));
    head.append(ring, played);
    const avg10 = (r.sum10 ?? r.plays * (r.last / Math.max(1, r.lastOf)) * 10) / r.plays;
    const row = (label: string, cells: [string, string][]) => {
      const line = mk('div', 'qs-line');
      line.append(mk('span', 'qs-label', tr(label)));
      for (const [k, v] of cells) { const c = mk('span', 'qs-cell'); c.append(mk('small', '', tr(k)), mk('b', '', v)); line.append(c); }
      return line;
    };
    const t = (ms?: number) => (ms ? clock(ms) : '—');
    box.replaceChildren(head,
      row('Score', [['Best', `${r.best}/${r.bestOf}`], ['Last', `${r.last}/${r.lastOf}`], ['Avg', `${avg10.toFixed(1)}/10`]]),
      row('Time', [['Best', t(r.bestMs)], ['Last', t(r.lastMs)], ['Avg', r.timed ? clock((r.sumMs ?? 0) / r.timed) : '—']]));
  }
}
/** 1:42 */
const clock = (ms: number) => { const s = Math.round(ms / 1000); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };

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
