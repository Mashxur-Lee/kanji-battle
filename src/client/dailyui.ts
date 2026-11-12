// Daily challenge: the same 10 words for everyone today (2 each from N5 to N1). Type each reading
// (kana or romaji) within 15 s — checked on the server, one word at a time. One try a day; the board
// ranks by correct answers, then total time.

import { locale, tr } from './i18n';
import { LEVEL_LABEL } from '../shared/protocol';
import * as offline from './offline';
import { api, type DailyAnswer, type DailyOverview, type DailyPast, type DailyWord } from './api';
import { nextLeagueRow, showLeagueUp } from './leagueup';
import * as audio from './audio';
import * as ui from './ui';
import { tickCards } from './decks';
import { useGameKb } from './gamekb';

const $ = ui.$;
const el = (tag: string, cls = '', text?: string | number) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = String(text);
  return e;
};
const secs = (ms: number) => `${(ms / 1000).toFixed(1)} s`;
/** 0.9.9.9.5: the words change at midnight where you are (with the daily tasks and the streak): in how long */
const nextReset = () => {
  const d = new Date(); d.setHours(24, 0, 0, 0);
  const min = Math.max(1, Math.round((d.getTime() - Date.now()) / 60_000));
  const h = Math.floor(min / 60), m = min % 60;
  return `at midnight — in ${h ? `${h} h ` : ''}${m} min`; // (Russian: a pattern in i18n.ts)
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
  setWhen('today');
  ui.show('daily');
  $('dailyMain').replaceChildren(el('p', 'hint', 'Loading…'));
  try { renderOverview(await api.daily()); } catch (e) { ui.toast((e as Error).message); }
}

// 0.9.9.8.2: a tab per league above the board (yours first selected); each shows that league's results today
let boardLeague = '';
function renderBoard(o: DailyOverview) {
  const list = $('dailyBoard');
  const show = boardLeague || o.league || 'KANA';
  const rows = o.boards?.[show] ?? (show === o.league ? o.board : []);
  let tabs = document.getElementById('dailyTabs');
  if (!tabs) { tabs = el('div', 'daily-tabs'); tabs.id = 'dailyTabs'; tabs.setAttribute('role', 'tablist'); list.before(tabs); }
  tabs.hidden = !o.boards;
  tabs.replaceChildren(...LEAGUES.map((l) => {
    const b = el('button', `dt-tab${l === show ? ' on' : ''}${l === o.league ? ' mine' : ''}`, l === 'KANA' ? 'かな' : l) as HTMLButtonElement;
    b.type = 'button'; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', String(l === show));
    b.title = LEAGUE_NAME[l];
    const n = o.boards?.[l]?.length ?? 0;
    if (n) b.append(el('small', 'dt-n', n));
    b.onclick = () => { boardLeague = l; renderBoard(o); };
    return b;
  }));
  $('dailyBoardTitle').textContent = `${tr('League')}: ${LEAGUE_NAME[show]}${show === o.league ? ` · ${tr('yours')}` : ''}`;
  if (!rows.length) { list.replaceChildren(el('li', 'hint', show === o.league ? 'Nobody has played today yet — be the first!' : tr('Nobody in this league has played today yet.'))); return; }
  list.replaceChildren(...rows.map((r, i) => {
    const li = el('li', r.id === me ? 'me' : '');
    li.append(el('span', 'db-rank', i + 1), el('span', 'db-name', r.name), el('span', 'db-score', `${r.correct}/${o.total}`), el('span', 'db-time', secs(r.ms)));
    return li;
  }));
}

/** the words you missed as red cards, ticked = in Struggling spells; tap one to keep it out (0.9.9.3) */
function missedBlock(o: DailyOverview): HTMLElement[] {
  const missed = (o.words ?? []).filter((w) => w.ok === false && w.id);
  if (!missed.length) return [];
  const grid = el('div', 'grid small daily-missed');
  const cards = missed.map((w) => {
    const card = el('div', 'card miss-card'); card.tabIndex = 0;
    const k = el('div', 'k', w.kanji); k.lang = 'ja';
    const r = el('div', 'r', w.reading); r.lang = 'ja';
    card.append(k, r, el('div', 'm', w.meaning));
    grid.append(card);
    return { card, id: w.id! };
  });
  const set = tickCards(cards, (id, on) => { void (on ? api.deckAdd('struggling', [id]) : api.deckRemove('struggling', [id])).catch((e) => ui.toast((e as Error).message)); });
  // as they are now: a word you unticked earlier is no longer in Struggling spells (0.9.9.3.2)
  void api.deckWords('struggling').then((r) => { const have = new Set(r.words.map((w) => w.vocabId)); for (const c of cards) set(c.id, have.has(c.id)); }).catch(() => { /* offline: keep the ticks */ });
  return [el('h4', '', 'Missed — ticked words go to Struggling spells'), grid];
}

// 0.9.9.7.3: leagues — Kana → N5 → N4 → N3 → N2 → N1; 7 / 10 or better (0.9.9.9.5; was 9) moves you up one
const LEAGUES = ['KANA', 'N5', 'N4', 'N3', 'N2', 'N1'] as const;
const LEAGUE_NAME: Record<string, string> = { KANA: 'ひらがな・カタカナ', N5: 'N5', N4: 'N4', N3: 'N3', N2: 'N2', N1: 'N1' };
let league = 'KANA';
function ladder(current: string, next?: string) {
  const row = el('div', 'league-ladder');
  LEAGUES.forEach((l, i) => {
    if (i) row.append(el('span', 'll-arrow', '›'));
    const step = el('span', `ll-step${l === current ? ' on' : ''}${LEAGUES.indexOf(l) < LEAGUES.indexOf(current as never) ? ' done' : ''}${next && next !== current && l === next ? ' next' : ''}`, LEAGUE_NAME[l]);
    step.lang = 'ja';
    row.append(step);
  });
  return row;
}
function renderOverview(o: DailyOverview) {
  league = o.league ?? 'KANA';
  boardLeague = '';
  renderBoard(o);
  const main = $('dailyMain');
  const date = `Challenge of ${new Date(`${o.day}T12:00:00Z`).toLocaleDateString(locale(), { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' })}`;
  if (o.mine) {
    const words = el('div', 'daily-words');
    for (const w of o.words ?? []) {
      // right ✓ / wrong ✗ (older results without marks show neither)
      const row = el('div', 'dw' + (w.ok === true ? ' ok' : w.ok === false ? ' no' : ''));
      const k = el('span', 'dw-k', w.kanji); k.lang = 'ja';
      const r = el('span', 'dw-r', w.reading); r.lang = 'ja';
      const lv = el('span', 'dw-l', LEVEL_LABEL[w.level]);
      if (w.ok !== null) lv.prepend(el('b', 'dw-mark', w.ok ? '✓ ' : '✗ '));
      row.append(lv, k, r, el('span', 'dw-m', w.meaning));
      words.append(row);
    }
    const up = o.nextLeague && o.nextLeague !== league;
    const nextL = LEAGUES[LEAGUES.indexOf((o.nextLeague ?? league) as never) + 1];
    main.replaceChildren(
      el('p', 'sub', date),
      ladder(league, o.nextLeague),
      ...[nextL ? nextLeagueRow(nextL) : null].filter((x): x is HTMLElement => !!x),
      el('div', 'daily-score', `${o.mine.correct} / ${o.total}`),
      el('p', `center league-note${up ? ' up' : ''}`, up ? `▲ ${tr('Promoted')}: ${LEAGUE_NAME[o.nextLeague!]} — ${tr('tomorrow you play in the new league')}` : `${tr('Get')} ${o.promoteAt ?? 7}/${o.total} ${tr('to move up a league')}`),
      el('p', 'center', `${secs(o.mine.ms)} · rank ${o.rank} today`),
      el('p', 'hint center', `10 new words ${nextReset()}.`),
      el('h4', '', "Today's words"), words,
      ...missedBlock(o),
    );
    return;
  }
  const start = el('button', 'big', o.inProgress ? 'Continue' : 'Start') as HTMLButtonElement;
  start.onclick = () => void begin();
  const nextL = LEAGUES[LEAGUES.indexOf(league as never) + 1];
  main.replaceChildren(
    el('p', 'sub', date),
    ladder(league),
    ...[nextL ? nextLeagueRow(nextL) : null].filter((x): x is HTMLElement => !!x),
    el('h3', '', `${tr('League')}: ${LEAGUE_NAME[league]}`),
    el('p', '', league === 'KANA'
      ? `Ten kana, the same for everyone in your league today: five hiragana, five katakana. Type each in romaji and press Enter — ${o.wordMs / 1000} s each. Get ${o.promoteAt ?? 7}/10 or better to move up to N5.`
      : `Ten ${league} words, the same for everyone in your league today, easiest first. Type the reading (kana or romaji) and press Enter — ${o.wordMs / 1000} s per word. Get ${o.promoteAt ?? 7}/10 or better to move up a league.`),
    el('p', 'hint', 'One try a day: most correct wins, then fastest. Everyone starts in the kana league.'),
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
  input.lang = 'ja'; input.autocomplete = 'off'; input.spellcheck = false; input.placeholder = tr(league === 'KANA' ? 'romaji' : 'reading (かな or romaji)');
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
  useGameKb(input, { skip: () => void submit('') }); // 0.9.9.7: phones type with the game keyboard here too
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
    useGameKb(null);
    const o = await api.daily();
    renderOverview(o);
    if (r.done) {
      ui.toast(offline.isOffline()
        ? `Daily challenge: ${r.done.correct}/10${r.done.xp ? ` · +${r.done.xp} XP` : ''} · your rank comes when you're back online`
        : `Daily challenge: ${r.done.correct}/10 · rank ${r.done.rank} of ${r.done.players}${r.done.xp ? ` · +${r.done.xp} XP` : ''}`, 6000);
      // 0.9.9.9.6: a league up is a moment — its own screen, with the rewards (it was a toast)
      if (r.done.promoted) { const lg = r.done.promoted; setTimeout(() => void showLeagueUp(me, lg), 1200); }
      if (r.done.correct === 10) audio.sfx.go();
    }
  } catch (e) {
    busy = false;
    ui.toast((e as Error).message);
    void openDaily(me);
  }
}

$('dailyBack').onclick = () => { clearInterval(timer); word = null; ui.show('menu'); };

// ── 0.9.9.9.6: earlier days — each league's ten words (with readings and meanings), its board, and how you did ──
let pastDay = '';
let pastLeague = '';
function setWhen(w: 'today' | 'past') {
  for (const b of document.querySelectorAll<HTMLElement>('#dailyWhen [data-when]')) b.setAttribute('aria-selected', String(b.dataset.when === w));
  $('dailyToday').hidden = w !== 'today';
  $('dailyPast').hidden = w !== 'past';
}
const dayShift = (day: string, n: number) => new Date(Date.parse(`${day}T12:00:00Z`) + n * 86_400_000).toISOString().slice(0, 10);
const localToday = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
async function openPast(day?: string) {
  setWhen('past');
  if (word) return; // (not in the middle of today's run)
  const box = $('dailyPast');
  box.replaceChildren(el('p', 'hint', 'Loading…'));
  let o: DailyPast;
  try { o = await api.dailyPast(day); } catch (e) { box.replaceChildren(el('p', 'hint', (e as Error).message)); return; }
  pastDay = o.day;
  if (!pastLeague || !o.leagues[pastLeague]) pastLeague = o.played ?? o.league ?? 'KANA';
  renderPast(o);
}
function renderPast(o: DailyPast) {
  const box = $('dailyPast');
  const today = localToday();
  const nav = el('div', 'dp-nav');
  const prev = el('button', 'pill', '‹') as HTMLButtonElement;
  const next = el('button', 'pill', '›') as HTMLButtonElement;
  prev.type = next.type = 'button';
  prev.setAttribute('aria-label', tr('Earlier')); next.setAttribute('aria-label', tr('Later'));
  const back = Math.round((Date.parse(`${today}T12:00:00Z`) - Date.parse(`${o.day}T12:00:00Z`)) / 86_400_000);
  prev.disabled = back >= 7; next.disabled = back <= 1;
  prev.onclick = () => void openPast(dayShift(pastDay, -1));
  next.onclick = () => void openPast(dayShift(pastDay, 1));
  const title = el('b', 'dp-day', back === 1 ? tr('Yesterday') : new Date(`${o.day}T12:00:00Z`).toLocaleDateString(locale(), { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' }));
  nav.append(prev, title, next);
  const tabs = el('div', 'daily-tabs');
  tabs.setAttribute('role', 'tablist');
  for (const l of LEAGUES) {
    const b = el('button', `dt-tab${l === pastLeague ? ' on' : ''}${l === o.played ? ' mine' : ''}`, l === 'KANA' ? 'かな' : l) as HTMLButtonElement;
    b.type = 'button'; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', String(l === pastLeague));
    if (l === o.played) b.title = tr('You played this one');
    b.onclick = () => { pastLeague = l; renderPast(o); };
    tabs.append(b);
  }
  const lg = o.leagues[pastLeague];
  const left = el('div', 'prog-card dp-words');
  left.append(el('h3', '', `${tr('League')}: ${LEAGUE_NAME[pastLeague]}`));
  if (lg.mine) left.append(el('p', 'dp-mine', `${tr('You')}: ${lg.mine.correct} / ${o.total} · ${secs(lg.mine.ms)}`));
  const words = el('div', 'daily-words');
  for (const w of lg.words) {
    const row = el('div', 'dw' + (w.ok === true ? ' ok' : w.ok === false ? ' no' : ''));
    const k = el('span', 'dw-k', w.kanji); k.lang = 'ja';
    const rd = el('span', 'dw-r', w.reading); rd.lang = 'ja';
    const lv = el('span', 'dw-l', LEVEL_LABEL[w.level]);
    if (w.ok !== null) lv.prepend(el('b', 'dw-mark', w.ok ? '✓ ' : '✗ '));
    row.append(lv, k, rd, el('span', 'dw-m', w.meaning));
    words.append(row);
  }
  left.append(words);
  const right = el('div', 'prog-card daily-side');
  right.append(el('h3', '', tr('Results')));
  const ol = el('ol', 'daily-board');
  if (!lg.board.length) ol.append(el('li', 'hint', tr('Nobody played this league that day.')));
  lg.board.forEach((r, i) => {
    const li = el('li', r.id === me ? 'me' : '');
    li.append(el('span', 'db-rank', i + 1), el('span', 'db-name', r.name), el('span', 'db-score', `${r.correct}/${o.total}`), el('span', 'db-time', secs(r.ms)));
    ol.append(li);
  });
  right.append(ol);
  const body = el('div', 'daily-body dp-body');
  body.append(left, right);
  box.replaceChildren(nav, tabs, body);
}
for (const b of document.querySelectorAll<HTMLElement>('#dailyWhen [data-when]')) {
  b.onclick = () => {
    if (word) return ui.toast(tr('Finish today’s challenge first'), 2500);
    if (b.dataset.when === 'past') void openPast(pastDay || undefined);
    else setWhen('today');
  };
}
