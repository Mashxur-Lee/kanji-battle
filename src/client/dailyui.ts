// Daily challenge: the same 10 words for everyone today (2 each from N5 to N1). Type each reading
// (kana or romaji) within 15 s — checked on the server, one word at a time. One try a day; the board
// ranks by correct answers, then total time.

import { locale } from './i18n';
import { LEVEL_LABEL } from '../shared/protocol';
import { api, type DailyAnswer, type DailyOverview, type DailyWord } from './api';
import * as audio from './audio';
import * as ui from './ui';

const $ = ui.$;
const el = (tag: string, cls = '', text?: string | number) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = String(text);
  return e;
};
const secs = (ms: number) => `${(ms / 1000).toFixed(1)} s`;
/** The words change at midnight UTC: say when that is for this player. */
const nextReset = () => {
  const d = new Date(); d.setUTCHours(24, 0, 0, 0);
  return `at ${d.toLocaleTimeString(locale(), { hour: '2-digit', minute: '2-digit' })} your time`;
};

let me = '';
let word: DailyWord | null = null;
let timer = 0;
let busy = false;
let results: boolean[] = [];

/** Whether today's challenge is still open for you (menu badge). */
export async function dailyPending(): Promise<boolean> {
  try { return !(await api.daily()).mine; } catch { return false; }
}

export async function openDaily(userId: string) {
  me = userId;
  ui.show('daily');
  $('dailyMain').replaceChildren(el('p', 'hint', 'Loading…'));
  try { renderOverview(await api.daily()); } catch (e) { ui.toast((e as Error).message); }
}

function renderBoard(o: DailyOverview) {
  const list = $('dailyBoard');
  if (!o.board.length) { list.replaceChildren(el('li', 'hint', 'Nobody has played today yet — be the first!')); return; }
  list.replaceChildren(...o.board.map((r, i) => {
    const li = el('li', r.id === me ? 'me' : '');
    li.append(el('span', 'db-rank', i + 1), el('span', 'db-name', r.name), el('span', 'db-score', `${r.correct}/${o.total}`), el('span', 'db-time', secs(r.ms)));
    return li;
  }));
}

function renderOverview(o: DailyOverview) {
  renderBoard(o);
  const main = $('dailyMain');
  const date = `Challenge of ${new Date(`${o.day}T12:00:00Z`).toLocaleDateString(locale(), { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' })}`;
  if (o.mine) {
    const words = el('div', 'daily-words');
    for (const w of o.words ?? []) {
      const row = el('div', 'dw');
      const k = el('span', 'dw-k', w.kanji); k.lang = 'ja';
      const r = el('span', 'dw-r', w.reading); r.lang = 'ja';
      row.append(el('span', 'dw-l', LEVEL_LABEL[w.level]), k, r, el('span', 'dw-m', w.meaning));
      words.append(row);
    }
    main.replaceChildren(
      el('p', 'sub', date),
      el('div', 'daily-score', `${o.mine.correct} / ${o.total}`),
      el('p', 'center', `${secs(o.mine.ms)} · rank ${o.rank} today`),
      el('p', 'hint center', `10 new words ${nextReset()}.`),
      el('h4', '', "Today's words"), words,
    );
    return;
  }
  const start = el('button', 'big', o.inProgress ? 'Continue' : 'Start') as HTMLButtonElement;
  start.onclick = () => void begin();
  main.replaceChildren(
    el('p', 'sub', date),
    el('h3', '', 'Ten words, the same for everyone today'),
    el('p', '', `Two words each from N5 to N1, easiest first. Type the reading (kana or romaji) and press Enter — ${o.wordMs / 1000} s per word. One try a day: most correct wins, then fastest.`),
    el('p', 'hint', `Every correct word gives 30 XP (+100 for a perfect 10). New words ${nextReset()}.`),
    start,
  );
}

async function begin() {
  if (busy) return;
  busy = true;
  results = [];
  try { word = (await api.dailyStart()).word; } catch (e) { ui.toast((e as Error).message); busy = false; return void openDaily(me); }
  busy = false;
  renderPlay(null);
}

function renderPlay(last: DailyAnswer | null) {
  if (!word) return;
  const main = $('dailyMain');
  const dots = el('div', 'daily-dots');
  for (let i = 0; i < word.total; i++) dots.append(el('i', i < results.length ? (results[i] ? 'ok' : 'no') : i === word.index ? 'now' : ''));
  const k = el('div', 'daily-kanji', word.kanji); k.lang = 'ja';
  const bar = el('div', 'timer thin'); const fill = el('div'); bar.append(fill);
  const input = el('input', 'daily-input') as HTMLInputElement;
  input.lang = 'ja'; input.autocomplete = 'off'; input.spellcheck = false; input.placeholder = 'reading (かな or romaji)';
  input.addEventListener('paste', (e) => e.preventDefault());
  const skip = el('button', 'pill', 'Skip') as HTMLButtonElement;
  const fb = el('div', 'daily-fb');
  if (last) {
    fb.className = `daily-fb ${last.correct ? 'ok' : 'no'}`;
    const kk = el('span', 'rk', last.kanji); kk.lang = 'ja';
    const rr = el('span', 'rr', last.reading); rr.lang = 'ja';
    fb.append(el('b', '', last.correct ? '✓' : '✗'), kk, rr, el('span', '', last.meaning));
  }
  main.replaceChildren(el('div', 'daily-head', `Word ${word.index + 1} of ${word.total} · ${LEVEL_LABEL[word.level]}`), dots, k, bar, input, skip, fb);
  input.focus();
  // the clock (the server keeps the real one)
  const t0 = performance.now(), limit = word.timeLimitMs;
  clearInterval(timer);
  timer = window.setInterval(() => {
    const left = Math.max(0, limit - (performance.now() - t0));
    fill.style.width = `${(left / limit) * 100}%`;
    if (left <= 0) void submit('');
  }, 100);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.isComposing && e.keyCode !== 229) void submit(input.value); });
  skip.onclick = () => void submit('');
}

async function submit(text: string) {
  if (busy || !word) return;
  busy = true;
  clearInterval(timer);
  try {
    const r = await api.dailyAnswer(text);
    results.push(r.correct);
    if (r.correct) audio.sfx.correct(1); else audio.sfx.wrong();
    if (r.next) { word = r.next; busy = false; renderPlay(r); return; }
    word = null;
    busy = false;
    const o = await api.daily();
    renderOverview(o);
    if (r.done) {
      ui.toast(`Daily challenge: ${r.done.correct}/10 · rank ${r.done.rank} of ${r.done.players}${r.done.xp ? ` · +${r.done.xp} XP` : ''}`, 6000);
      if (r.done.correct === 10) audio.sfx.go();
    }
  } catch (e) {
    busy = false;
    ui.toast((e as Error).message);
    void openDaily(me);
  }
}

$('dailyBack').onclick = () => { clearInterval(timer); word = null; ui.show('menu'); };
