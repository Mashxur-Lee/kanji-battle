// 0.9.9.9.9.7 (round 2): Song lyrics — a song plays, its line shows with some words hidden, and you type them in
// romaji as it is sung. If a line ends before you have typed its words, the song waits for you. Esc (or "Skip") shows the
// word you're stuck on; Tab (or "Replay line") sings the line again. At the end: words right, mistakes.
// Round 3: the owner's own songs (shared/songs.ts), from easy to hard, each with what to study first — its words, and
// its grammar with a way into the lesson. No chime for a right word (it broke into the music); a quiet zap for a wrong
// letter. An admin times a new song here (Time this song): Space as each line starts, N for a line the cut doesn't sing.
import { lineWords, playable, sameWord, SONGS, songTimeline, startsWord, type Song, type TimedLine } from '../shared/songs';
import { jpLine, openGrammarLesson } from './grammarui';
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
const DIFFICULTY = ['', 'Easy', 'Medium', 'Hard', 'Very hard', 'Hardest'];

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
let admin = false;
/** main.ts: admins may time a song */
export function setSongsAdmin(on: boolean) { admin = on; }

export function openSongs() {
  stop();
  ui.show('songs');
  $('songPlay').hidden = true;
  $('songTime').hidden = true;
  $('songList').hidden = false;
  const list = [...SONGS].sort((a, b) => a.difficulty - b.difficulty);
  $('songCards').replaceChildren(...list.map(card));
  for (const m of document.querySelectorAll<HTMLButtonElement>('#songMode [data-mode]')) {
    m.setAttribute('aria-selected', String(m.dataset.mode === mode));
    m.onclick = () => { mode = m.dataset.mode as Mode; for (const x of document.querySelectorAll('#songMode [data-mode]')) x.setAttribute('aria-selected', String(x === m)); };
  }
}

/** a song's card: cover, title, level and difficulty, what it's about; Study first (its words and grammar); Play */
function card(s: Song): HTMLElement {
  const ready = playable(s);
  const c = h('article', `song-card d${s.difficulty}${ready ? '' : ' soon'}`);
  const cover = h('img', 'sc-cover', undefined, { src: `songs/${s.id}.webp`, alt: '', loading: 'lazy', decoding: 'async' });
  const head = h('div', 'sc-head');
  head.append(h('b', 'sc-jp', s.title.jp, { lang: 'ja' }), h('span', 'sc-romaji', `${s.title.romaji} · ${t(s.title)}`));
  const tags = h('div', 'sc-tags');
  const dots = h('span', 'sc-diff', undefined, { title: tr(DIFFICULTY[s.difficulty]) });
  for (let i = 1; i <= 5; i++) dots.append(h('i', i <= s.difficulty ? 'on' : ''));
  tags.append(h('span', 'sc-lvl', s.level), dots, h('span', 'sc-diff-name', tr(DIFFICULTY[s.difficulty])), h('span', 'sc-bpm', `${s.bpm} BPM`));
  const body = h('div', 'sc-body');
  body.append(head, tags, h('p', 'sc-about', t(s.about)));
  // what to study first
  const study = h('details', 'sc-study');
  study.append(h('summary', '', tr('Study first: {w} words, {g} grammar points').replace('{w}', String(s.words.length)).replace('{g}', String(s.grammar.length))));
  const words = h('ul', 'sc-words');
  for (const w of s.words) {
    const li = h('li');
    li.append(h('b', '', w.w, { lang: 'ja' }), h('span', 'sc-r', w.r, { lang: 'ja' }), h('span', 'sc-m', t(w)), h('i', 'sc-wl', w.level));
    words.append(li);
  }
  study.append(words);
  if (s.grammar.length) {
    const gl = h('ul', 'sc-grammar');
    for (const g of s.grammar) {
      const li = h('li');
      li.append(h('b', '', g.pattern, { lang: 'ja' }), jpLine(g.example, 'sc-ex'), h('span', 'sc-m', t(g)));
      if (g.lesson) {
        const b = h('button', 'pill sc-lesson', tr('Lesson'), { type: 'button' }) as HTMLButtonElement;
        b.onclick = () => { stop(); openGrammarLesson(g.lesson!); };
        li.append(b);
      }
      gl.append(li);
    }
    study.append(gl);
  }
  body.append(study);
  const foot = h('div', 'sc-foot');
  if (ready) {
    const play = h('button', 'big sc-play', tr('Play'), { type: 'button' }) as HTMLButtonElement;
    play.onclick = () => start(s);
    foot.append(play);
  } else foot.append(h('span', 'sc-soon', tr(s.lines.length ? 'Coming soon' : 'Lyrics coming soon')));
  if (admin && s.lines.length) {
    const time = h('button', 'pill sc-time', tr('Time this song'), { type: 'button' }) as HTMLButtonElement;
    time.onclick = () => startTiming(s);
    foot.append(time);
  }
  body.append(foot);
  c.append(cover, body);
  return c;
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
  timing = null;
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
  box.replaceChildren(...(l.part ? [h('p', 'sl-part', tr(l.part))] : []), jpLine(l.jp, 'sl-jp'), romaji, h('p', 'sl-tr', t(l)), ...(next ? [h('p', 'sl-next', `${tr('Next')}: `), jpLine(next.jp, 'sl-next-jp')] : []));
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
    done[li][i] = true; // (round 3: no chime — it broke into the music)
    $<HTMLInputElement>('songInput').value = '';
    advance();
    return;
  }
  if (value && !startsWord(value, word)) {
    mistakes++;
    audio.sfx.zap(); // (round 3: a quiet shock under the music)
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

/**
 * 0.9.9.9.9.7 (round 3): hear the line again — the song goes back to the start of the line you are on (a word you
 * couldn't catch); Tab does it too
 */
function replayLine() {
  const l = lines[li];
  if (!l || !player || $<HTMLInputElement>('songInput').disabled) return;
  player.currentTime = Math.max(0, l.start - 0.4);
  waiting = false; $('songWait').hidden = true;
  void player.play();
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

// ── 0.9.9.9.9.7 (round 3): timing a song (admins) ──
// The song plays; Space as each line starts, N when the cut leaves the line out, Backspace to take the last one back.
// At the end: the times to paste into shared/songs.ts (copied, and shown).
let timing: { s: Song; times: Array<number | null>; k: number } | null = null;
function startTiming(s: Song) {
  stop();
  timing = { s, times: [], k: 0 };
  $('songList').hidden = true;
  $('songTime').hidden = false;
  $('songTimeOut').hidden = true;
  player = new Audio(`songs/${s.id}.mp3`);
  player.onended = () => timingDone();
  void player.play().catch(() => { /* a tap */ });
  drawTiming();
  $('songTime').focus();
}
function drawTiming() {
  if (!timing) return;
  const { s, k } = timing;
  const l = s.lines[k], next = s.lines[k + 1];
  $('songTimeLine').replaceChildren(
    h('p', 'hint', tr('Line {n} of {all}').replace('{n}', String(Math.min(k + 1, s.lines.length))).replace('{all}', String(s.lines.length))),
    ...(l ? [h('p', 'sl-part', l.part ?? ''), jpLine(l.jp, 'sl-jp'), h('p', 'sl-romaji', l.romaji)] : [h('p', '', tr('All lines done'))]),
    ...(next ? [h('p', 'sl-next', `${tr('Next')}: `), jpLine(next.jp, 'sl-next-jp')] : []),
  );
}
function timingKey(e: KeyboardEvent) {
  if (!timing || !player || $('songTime').hidden) return;
  if (e.key === ' ' || e.key === 'n' || e.key === 'N' || e.key === 'Backspace' || e.key === 'Enter') e.preventDefault(); else return;
  if (e.key === 'Enter') return timingDone();
  if (e.key === 'Backspace') { if (timing.k > 0) { timing.k--; timing.times.length = timing.k; } return drawTiming(); }
  if (timing.k >= timing.s.lines.length) return;
  timing.times[timing.k++] = e.key === ' ' ? Math.round(player.currentTime * 100) / 100 : null;
  drawTiming();
  if (timing.k >= timing.s.lines.length) timingDone();
}
function timingDone() {
  if (!timing) return;
  player?.pause();
  const { s, times } = timing;
  while (times.length < s.lines.length) times.push(null); // (lines after the cut ends: not sung)
  const text = `times: [${times.map((x) => (x === null ? 'null' : x.toFixed(2))).join(', ')}],`;
  $<HTMLTextAreaElement>('songTimeText').value = `// ${s.id}\n${text}`;
  $('songTimeOut').hidden = false;
  void navigator.clipboard?.writeText(`// ${s.id}\n${text}`).catch(() => { /* select it by hand */ });
}

export function initSongs() {
  const input = $<HTMLInputElement>('songInput');
  input.addEventListener('input', () => typed(input.value));
  input.addEventListener('keydown', (e) => { if (e.key === 'Escape') { e.preventDefault(); skip(); } if (e.key === 'Tab') { e.preventDefault(); replayLine(); } });
  $('songSkip').onclick = () => { skip(); input.focus(); };
  $('songReplay').onclick = () => { replayLine(); input.focus(); };
  $('songAgain').onclick = () => { if (song) start(song); };
  $('songBackList').onclick = () => openSongs();
  $('songsBack').onclick = () => { stop(); ui.show('games'); };
  // (a tap anywhere on the line puts the keyboard back)
  $('songLine').onclick = () => input.focus();
  // timing (admins)
  addEventListener('keydown', timingKey);
  $('songTimeTap').onclick = () => timingKey(new KeyboardEvent('keydown', { key: ' ' }));
  $('songTimeSkip').onclick = () => timingKey(new KeyboardEvent('keydown', { key: 'n' }));
  $('songTimeUndo').onclick = () => timingKey(new KeyboardEvent('keydown', { key: 'Backspace' }));
  $('songTimeEnd').onclick = () => timingDone();
  $('songTimeBack').onclick = () => openSongs();
}
/** main.ts: the page was left — the song stops */
export function songsLeft() { stop(); }
