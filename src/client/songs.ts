// 0.9.9.9.9.7 (round 2): Song lyrics — a song plays (public-domain songs, sung by the game: shared/songs.ts), its line
// shows with some words hidden, and you type them in romaji as it sings. If a line ends before you have typed its
// words, the song waits for you. Esc (or "Skip") shows the word you're stuck on. At the end: words right, mistakes.
import { lineWords, sameWord, SONGS, songTimeline, startsWord, type Song, type TimedLine } from '../shared/songs';
import { jpLine } from './grammarui';
import { lang, tr } from './i18n';
import * as audio from './audio';
import * as ui from './ui';

const $ = ui.$;
const h = <K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', text?: string, attrs: Record<string, string> = {}) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
};
const t = (x: { en: string; ru: string }) => (lang() === 'ru' ? x.ru : x.en);

type Mode = 'easy' | 'hard';
let song: Song | null = null;
let lines: TimedLine[] = [];
let hidden: boolean[][] = []; // per line, per word: hidden (to type)
let done: boolean[][] = [];
let li = 0;
let mistakes = 0, skipped = 0;
let player: HTMLAudioElement | null = null;
let raf = 0;
let waiting = false;
let mode: Mode = 'easy';

export function openSongs() {
  stop();
  ui.show('songs');
  $('songPlay').hidden = true;
  $('songList').hidden = false;
  $('songCards').replaceChildren(...SONGS.map((s) => {
    const b = h('button', 'song-card', undefined, { type: 'button' });
    const head = h('span', 'sc-head');
    const jp = h('b', 'sc-jp', s.title.jp, { lang: 'ja' });
    head.append(jp, h('span', 'sc-lvl', s.level));
    b.append(head, h('span', 'sc-romaji', `${s.title.romaji} · ${t(s.title)}`), h('small', 'sc-credit', s.credit));
    b.onclick = () => start(s);
    return b;
  }));
  for (const m of document.querySelectorAll<HTMLButtonElement>('#songMode [data-mode]')) {
    m.setAttribute('aria-selected', String(m.dataset.mode === mode));
    m.onclick = () => { mode = m.dataset.mode as Mode; for (const x of document.querySelectorAll('#songMode [data-mode]')) x.setAttribute('aria-selected', String(x === m)); };
  }
}

function start(s: Song) {
  stop();
  song = s; lines = songTimeline(s); li = 0; mistakes = 0; skipped = 0; waiting = false;
  // easy: every other word hidden (a line's first word shown); hard: every word
  hidden = lines.map((l) => lineWords(l).map((_, i) => (mode === 'hard' ? true : i % 2 === 1)));
  done = hidden.map((ws) => ws.map((x) => !x));
  $('songList').hidden = true;
  $('songPlay').hidden = false;
  $('songTitle').replaceChildren(h('b', '', s.title.jp, { lang: 'ja' }), h('span', '', ` · ${s.title.romaji}`));
  $('songDone').hidden = true;
  player = new Audio(`songs/${s.id}.mp3`);
  player.volume = 0.9;
  player.onended = () => finish();
  void player.play().catch(() => { /* (the first tap plays it) */ });
  draw();
  const input = $<HTMLInputElement>('songInput');
  input.value = '';
  input.disabled = false;
  input.focus();
  loop();
}

function stop() {
  cancelAnimationFrame(raf); raf = 0;
  if (player) { player.onended = null; player.pause(); player = null; }
}

/** each frame: the song waits at a line's end until its words are typed; the progress bar moves */
function loop() {
  raf = requestAnimationFrame(loop);
  if (!player || !song) return;
  const now = player.currentTime;
  const l = lines[li];
  $<HTMLElement>('songBar').style.width = `${Math.min(100, (now / (player.duration || 1)) * 100)}%`;
  if (l && !lineDone(li) && now >= l.end - 0.05 && !player.paused) {
    player.pause();
    waiting = true;
    $('songWait').hidden = false;
  }
}
const lineDone = (i: number) => done[i]?.every(Boolean) ?? true;
/** the word being typed: the first hidden one not done yet in the current line */
const target = () => done[li]?.findIndex((d) => !d) ?? -1;

function draw() {
  if (!song) return;
  const l = lines[li];
  const box = $('songLine');
  if (!l) { box.replaceChildren(); return; }
  const words = lineWords(l);
  const romaji = h('p', 'sl-romaji');
  const cur = target();
  words.forEach((w, i) => {
    const typed = i === cur ? $<HTMLInputElement>('songInput').value : '';
    const span = h('span', `sl-w${hidden[li][i] ? ' hid' : ''}${done[li][i] ? ' ok' : ''}${i === cur ? ' cur' : ''}`);
    if (!hidden[li][i] || done[li][i]) span.textContent = w;
    else span.textContent = w.split('').map((c, k) => (k < typed.length ? typed[k] : '_')).join('');
    romaji.append(span, ' ');
  });
  const next = lines[li + 1];
  box.replaceChildren(jpLine(l.jp, 'sl-jp'), romaji, h('p', 'sl-tr', t(l)), ...(next ? [h('p', 'sl-next', `${tr('Next')}: `), jpLine(next.jp, 'sl-next-jp')] : []));
  $('songScore').textContent = tr(`${countDone()} of ${countHidden()} words`);
}
const countHidden = () => hidden.flat().filter(Boolean).length;
const countDone = () => hidden.flat().filter((x, i) => x && done.flat()[i]).length - skipped;

function advance() {
  while (li < lines.length && lineDone(li)) li++;
  if (waiting && player) { waiting = false; $('songWait').hidden = true; void player.play(); }
  if (li >= lines.length && player && player.ended) finish();
  draw();
}

function typed(value: string) {
  const i = target();
  if (i < 0 || !song) return;
  const word = lineWords(lines[li])[i];
  if (sameWord(value, word)) {
    done[li][i] = true;
    audio.sfx.correct(1);
    $<HTMLInputElement>('songInput').value = '';
    advance();
    return;
  }
  if (value && !startsWord(value, word)) {
    mistakes++;
    const input = $('songInput');
    input.classList.remove('bad'); void input.offsetWidth; input.classList.add('bad');
    $<HTMLInputElement>('songInput').value = value.slice(0, -1);
  }
  draw();
}
function skip() {
  const i = target();
  if (i < 0) return;
  done[li][i] = true; skipped++;
  $<HTMLInputElement>('songInput').value = '';
  advance();
}

function finish() {
  if (!song) return;
  cancelAnimationFrame(raf); raf = 0;
  // (the words not reached count as missed)
  const total = countHidden();
  const right = Math.max(0, countDone());
  $('songDone').hidden = false;
  $('songWait').hidden = true;
  $<HTMLInputElement>('songInput').disabled = true;
  $('songDoneText').textContent = tr(`${right} of ${total} words · ${mistakes} mistyped`);
  if (right >= total * 0.8) audio.sfx.win();
}

export function initSongs() {
  const input = $<HTMLInputElement>('songInput');
  input.addEventListener('input', () => typed(input.value));
  input.addEventListener('keydown', (e) => { if (e.key === 'Escape') { e.preventDefault(); skip(); } });
  $('songSkip').onclick = () => { skip(); input.focus(); };
  $('songAgain').onclick = () => { if (song) start(song); };
  $('songBackList').onclick = () => openSongs();
  $('songsBack').onclick = () => { stop(); ui.show('games'); };
  // (a tap anywhere on the line puts the keyboard back)
  $('songLine').onclick = () => input.focus();
}
/** main.ts: the page was left — the song stops */
export function songsLeft() { stop(); }
