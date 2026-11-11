// 0.9.9.9.5.2: the Quizzes screen — today's streak goal on top, then a card for each quiz (JLPT, onomatopoeia, the
// reading passage) with its facts and your own record on this device: best score, last score, how many played.
// The Start buttons keep their ids (quizBtn / onoQuizBtn / passageBtn): decks.ts opens the quizzes.
// (0.9.9.9.5.5: the records are your account's now — the same on every device)

import { api, type Profile } from './api';
import { locale, tr } from './i18n';
import { addPlay, mergeStats, type QuizKind, type QuizStats } from '../shared/quizstats';

export type { QuizKind };
// 0.9.9.9.5.5: the records live with your account (the server); every device shows the same. A play made offline
// waits here and is sent later. The old records of this device (kb:quizStats, from before) are added to the
// account once, by the first account to sign in here.
const OLD_KEY = 'kb:quizStats';
let me = '';
let server: QuizStats = {};
const queueKey = () => `kb:quizQueue:${me}`;
type Play = { kind: QuizKind; score: number; total: number; ms: number; at: number };
function queue(): Play[] { try { return JSON.parse(localStorage.getItem(queueKey()) ?? '[]') ?? []; } catch { return []; } }
function setQueue(q: Play[]) { try { if (q.length) localStorage.setItem(queueKey(), JSON.stringify(q.slice(-50))); else localStorage.removeItem(queueKey()); } catch { /* private mode */ } }

function load(): QuizStats {
  let all: QuizStats = { ...server };
  for (const p of queue()) all = { ...all, [p.kind]: addPlay(all[p.kind], p.score, p.total, p.ms, p.at) };
  return all;
}
let flushing = false;
async function flush() {
  if (flushing || !me) return;
  flushing = true;
  try {
    for (let q = queue(); q.length; q = queue()) {
      const p = q[0];
      const r = await api.recordQuiz(p.kind, p.score, p.total, p.ms);
      if (r.quizStats) keep(r.quizStats);
      setQueue(queue().slice(1));
    }
  } catch { /* offline: later */ } finally { flushing = false; }
  if (!document.getElementById('quizzes')?.hidden) render();
}
/** main.ts: signed in (or the profile came) — the account's records, and this device's old ones added once */
const cacheKey = () => `kb:quizCache:${me}`;
function keep(s: QuizStats) { server = s; try { localStorage.setItem(cacheKey(), JSON.stringify(s)); } catch { /* private mode */ } }
function syncFrom(p: Profile, userId: string) {
  if (userId !== me) {
    me = userId;
    try { server = JSON.parse(localStorage.getItem(cacheKey()) ?? '{}') ?? {}; } catch { server = {}; } // (offline: the last known)
  }
  if (p.quizStats) keep(p.quizStats);
  let old: QuizStats | null = null;
  try { old = JSON.parse(localStorage.getItem(OLD_KEY) ?? 'null'); } catch { old = null; }
  if (old && Object.keys(old).length && me) {
    try { localStorage.removeItem(OLD_KEY); } catch { /* fine */ }
    server = mergeStats(server, old); // (shown at once; the server adds them too)
    api.mergeQuizStats(old).then((r) => { if (r.quizStats) keep(r.quizStats); if (!document.getElementById('quizzes')?.hidden) render(); })
      .catch(() => { try { localStorage.setItem(OLD_KEY, JSON.stringify(old)); } catch { /* fine */ } });
  }
  if (queue().length) void flush();
}
/** decks.ts: a quiz (or passage) was finished with this score */
export function recordQuiz(kind: QuizKind, score: number, total: number, ms = 0) {
  if (!(total > 0)) return;
  setQueue([...queue(), { kind, score, total, ms: Math.round(ms), at: Date.now() }]);
  void flush();
  if (!document.getElementById('quizzes')?.hidden) render();
}

let profile: Profile | null = null;
/** main.ts: every profile update (for today's goal) */
export function quizzesProfile(p: Profile, userId = '') { profile = p; if (userId) syncFrom(p, userId); if (!document.getElementById('quizzes')?.hidden) render(); }

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
