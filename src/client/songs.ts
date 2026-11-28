// 0.9.9.9.9.7 (round 2): Song lyrics — a song plays, its line shows with some words hidden, and you type them in
// romaji as it is sung. If a line ends before you have typed its words, the song waits for you.
// Round 3: the owner's own songs (shared/songs.ts), from easy to hard, each with what to study first — its words, and
// its grammar with a way into the lesson. An admin times a new song here (Time this song).
// Round 4 (the owner: "make the UI like in the video … you should be able to type anything, it should mark as green if
// correct and red if wrong as you type … with a waves line while there is no lyrics"): the line is one big row of
// letter slots — the hidden letters are dots, and what you type fills them in place, each letter green or red as it
// lands; nothing typed is refused (Backspace mends a mistake). Above it the song's cover and a live wave line of the
// music; between the sung lines (an intro, a solo) the wave line takes the lyric's place. A bar of controls: the line
// you're on, previous / play-pause / replay the line / next, a hint (the next letter), the time.
import { lineWords, playable, sameWord, SONGS, songTimeline, startsWord, type Song, type TimedLine } from '../shared/songs';
import { jpLine, openGrammarLesson, patternEl } from './grammarui';
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
const PREFS = 'kw:songPrefs';
const VOLUME = 0.9;
/** (round 5) the song stops this long after a line's end when its words aren't typed yet, fading out over FADE */
const END_GRACE = 0.18, FADE = 0.25;

type Mode = 'easy' | 'hard';
type WordState = 'shown' | 'todo' | 'ok' | 'hint';
interface LineState { words: string[]; state: WordState[]; typed: string[]; hinted: boolean[] }
let song: Song | null = null;
let lines: TimedLine[] = [];
let ls: LineState[] = [];
let li = 0;
let mistakes = 0;
let player: HTMLAudioElement | null = null;
let raf = 0;
let waiting = false;
let mode: Mode = 'easy';
let admin = false;
let showJp = true, showTr = true;
try { const p = JSON.parse(localStorage.getItem(PREFS) ?? '{}') as { jp?: boolean; tr?: boolean; mode?: Mode }; showJp = p.jp !== false; showTr = p.tr !== false; if (p.mode === 'hard') mode = 'hard'; } catch { /* private mode */ }
const keepPrefs = () => { try { localStorage.setItem(PREFS, JSON.stringify({ jp: showJp, tr: showTr, mode })); } catch { /* private mode */ } };
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
    m.onclick = () => { mode = m.dataset.mode as Mode; keepPrefs(); for (const x of document.querySelectorAll('#songMode [data-mode]')) x.setAttribute('aria-selected', String(x === m)); };
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
      li.append(patternEl('b', '', g.pattern), jpLine(g.example, 'sc-ex'), h('span', 'sc-m', t(g)));
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

// ── playing ──
function start(s: Song) {
  stop();
  song = s; lines = songTimeline(s); li = 0; mistakes = 0; waiting = false;
  // easy: every other word to type (a line's first word shown); hard: every word. A line whose words were heard from
  // the recording and not checked (unsure) is shown whole — nothing to type in it
  ls = lines.map((l) => {
    const words = lineWords(l);
    return { words, state: words.map((_, i) => (l.unsure ? 'shown' : mode === 'hard' || i % 2 === 1 ? 'todo' : 'shown') as WordState), typed: words.map(() => ''), hinted: words.map(() => false) };
  });
  $('songList').hidden = true;
  $('songPlay').hidden = false;
  $('songTitle').replaceChildren(h('b', '', s.title.jp, { lang: 'ja' }), h('span', '', s.title.romaji));
  for (const id of ['songCover', 'songCoverBg']) $<HTMLImageElement>(id).src = `songs/${s.id}.webp`;
  $('songDone').hidden = true;
  player = new Audio(`songs/${s.id}.mp3`);
  player.volume = VOLUME;
  player.onended = () => finish();
  player.onplay = player.onpause = () => drawToggle();
  wave.attach(player);
  void player.play().catch(() => drawToggle());
  const input = $<HTMLInputElement>('songInput');
  input.value = '';
  input.disabled = false;
  drawToggles();
  draw();
  input.focus();
  loop();
}

function stop() {
  cancelAnimationFrame(raf); raf = 0;
  if (player) { player.onended = null; player.onplay = player.onpause = null; player.pause(); player = null; }
  wave.detach();
  timing = null;
}

const lineDone = (i: number) => ls[i]?.state.every((s) => s !== 'todo') ?? true;
/** the word being typed: the first one still to type in the current line */
const target = () => ls[li]?.state.findIndex((s) => s === 'todo') ?? -1;

/** each frame: the song waits at a line's end until its words are typed; the bar, the clock, the wave line */
function loop() {
  raf = requestAnimationFrame(loop);
  if (!player || !song) return;
  const now = player.currentTime, dur = player.duration || song.length;
  const l = lines[li];
  // (round 5, the owner: "the song sometimes cuts off before finishing the whole sentence"): the song stops a moment
  // after the line's end (its last syllable rings out, never cut), fading in the last quarter second
  const stopAt = l ? l.end + END_GRACE : 0;
  if (l && !lineDone(li) && !player.paused) {
    if (now >= stopAt) {
      player.pause();
      player.volume = VOLUME;
      waiting = true;
      $('songWait').hidden = false;
    } else player.volume = now > stopAt - FADE ? VOLUME * Math.max(0, (stopAt - now) / FADE) : VOLUME;
  } else if (player.volume !== VOLUME) player.volume = VOLUME;
  $<HTMLElement>('songBar').style.width = `${Math.min(100, (now / dur) * 100)}%`;
  $('songClock').textContent = `${clock(now)} / ${clock(dur)}`;
  // between the sung lines: the wave line in the lyric's place
  const prevEnd = li > 0 ? lines[li - 1].end : 0;
  const gap = !l ? now > (lines[lines.length - 1]?.end ?? 0) : now < l.start - 0.6 && now >= prevEnd - 0.05;
  $('songLine').classList.toggle('gap', gap);
  wave.draw(gap);
}
const clock = (s: number) => { const x = Math.max(0, Math.floor(s)); return `${String(Math.floor(x / 60)).padStart(2, '0')}:${String(x % 60).padStart(2, '0')}`; };

/** a word as a row of letter slots: hidden letters are dots, typed letters fill them — right ones green, wrong red */
function wordEl(lsi: LineState, i: number, current: boolean): HTMLElement {
  const word = lsi.words[i], st = lsi.state[i];
  const el = h('span', `sw sw-${st}${current ? ' cur' : ''}`);
  if (st === 'shown') { el.textContent = word; return el; }
  if (st === 'ok' || st === 'hint') { el.textContent = word; return el; }
  const typed = lsi.typed[i];
  const n = Math.max(word.length, typed.length);
  for (let k = 0; k < n; k++) {
    const ch = typed[k];
    if (ch === undefined) { el.append(h('i', `sl${current && k === typed.length ? ' at' : ''}`, '•')); continue; }
    // right: this letter, or the start of another accepted spelling (si for shi, o for wo)
    const good = (k < word.length && ch === word[k] && typed.slice(0, k) === word.slice(0, k)) || startsWord(typed.slice(0, k + 1), word);
    el.append(h('i', `sl ${good ? 'good' : 'bad'}`, ch));
  }
  if (current && typed.length >= word.length) el.append(h('i', 'sl at', ' '));
  return el;
}

function draw() {
  if (!song) return;
  const l = lines[li];
  const box = $('songLine');
  $('songCount').textContent = `${Math.min(li + 1, lines.length)} / ${lines.length}`;
  $('songPart').textContent = l?.part ? tr(l.part) : '';
  if (!l) { box.replaceChildren(h('canvas', 'sp-gapwave', undefined, { 'aria-hidden': 'true' })); return; }
  const s = ls[li], cur = target();
  const row = h('p', 'sl-row');
  s.words.forEach((_, i) => { row.append(wordEl(s, i, i === cur)); if (i < s.words.length - 1) row.append(' '); });
  const next = lines[li + 1];
  box.replaceChildren(
    h('canvas', 'sp-gapwave', undefined, { 'aria-hidden': 'true' }),
    ...(showJp ? [jpLine(l.jp, 'sl-jp')] : []),
    row,
    ...(showTr ? [h('p', 'sl-tr', t(l))] : []),
    ...(next ? [h('p', 'sl-next', undefined)] : []),
  );
  if (next) box.querySelector('.sl-next')!.append(h('span', '', `${tr('Next')}: `), jpLine(next.jp, 'sl-next-jp'));
  wave.gapCanvas(box.querySelector<HTMLCanvasElement>('.sp-gapwave'));
  $('songScore').textContent = tr(`${countRight()} of ${countHidden()} words`) + (mistakes ? ` · ${tr(`${mistakes} mistyped`)}` : '');
}
const countHidden = () => ls.reduce((n, s) => n + s.state.filter((x) => x !== 'shown').length, 0);
const countRight = () => ls.reduce((n, s) => n + s.state.filter((x) => x === 'ok').length, 0);

/** the line is typed: on to the next one (the song goes on if it was waiting) */
function advance() {
  while (li < lines.length && lineDone(li)) li++;
  if (waiting && player) { waiting = false; $('songWait').hidden = true; void player.play(); }
  if (li >= lines.length && player?.ended) finish();
  draw();
}

/** what's in the box is the word being typed — every letter is taken, each marked as it lands */
function typed(raw: string, submit = false) {
  const i = target();
  if (i < 0 || !song) { $<HTMLInputElement>('songInput').value = ''; return; }
  const s = ls[li], word = s.words[i];
  const v = raw.toLowerCase().replace(/[^a-zāīūēō'-]/g, '');
  const before = s.typed[i];
  s.typed[i] = v;
  // a new letter that isn't right: a quiet zap under the music (counted once)
  if (v.length > before.length && !startsWord(v, word) && !(v.length <= word.length && v === word.slice(0, v.length))) {
    mistakes++;
    audio.sfx.zap();
  }
  const complete = v === word || (v.length >= word.length && sameWord(v, word)) || (submit && sameWord(v, word));
  if (complete) {
    s.state[i] = s.hinted[i] ? 'hint' : 'ok';
    $<HTMLInputElement>('songInput').value = '';
    if (lineDone(li)) advance(); else draw();
    return;
  }
  if (submit && v) { const input = $('songInput'); input.classList.remove('bad'); void input.offsetWidth; input.classList.add('bad'); }
  draw();
}

/** the next letter, given (the word then counts as helped) */
function hint() {
  const i = target();
  if (i < 0) return;
  const s = ls[li], word = s.words[i];
  // keep what's right so far, then the next letter of the word
  let k = 0; while (k < s.typed[i].length && s.typed[i][k] === word[k]) k++;
  s.hinted[i] = true;
  const input = $<HTMLInputElement>('songInput');
  input.value = word.slice(0, k + 1);
  typed(input.value);
  input.focus();
}
/** the word you're stuck on, shown (Esc) */
function skipWord() {
  const i = target();
  if (i < 0) return;
  ls[li].state[i] = 'hint';
  $<HTMLInputElement>('songInput').value = '';
  if (lineDone(li)) advance(); else draw();
}

/** hear the line you're on again (Tab) */
function replayLine() {
  const l = lines[li] ?? lines[lines.length - 1];
  if (!l || !player || $<HTMLInputElement>('songInput').disabled) return;
  player.currentTime = Math.max(0, l.start - 0.4);
  waiting = false; $('songWait').hidden = true;
  void player.play();
}
/** back a line: it is yours to type again, and the song goes back to it */
function prevLine() {
  if (!player || li === 0) return replayLine();
  li = Math.min(li, lines.length) - 1;
  const s = ls[li];
  s.state = s.state.map((x) => (x === 'shown' ? 'shown' : 'todo')); s.typed = s.typed.map(() => '');
  $<HTMLInputElement>('songInput').value = '';
  replayLine();
  draw();
}
/** on to the next line: the rest of this one is shown, and the song moves on if it hadn't got there yet */
function nextLine() {
  if (!player || li >= lines.length) return;
  const s = ls[li];
  s.state = s.state.map((x) => (x === 'todo' ? 'hint' : x));
  $<HTMLInputElement>('songInput').value = '';
  const next = lines[li + 1];
  if (next && player.currentTime < next.start - 0.4) player.currentTime = next.start - 0.4;
  advance();
}
function togglePlay() {
  if (!player) return;
  if (player.paused) { waiting = false; $('songWait').hidden = true; void player.play(); } else player.pause();
}
function drawToggle() {
  const playing = !!player && !player.paused;
  const b = $('songToggle');
  b.dataset.state = playing ? 'playing' : 'paused';
  b.setAttribute('aria-label', tr(playing ? 'Pause' : 'Play'));
  b.title = tr(playing ? 'Pause' : 'Play');
}
function drawToggles() {
  $('songShowJp').setAttribute('aria-pressed', String(showJp));
  $('songShowTr').setAttribute('aria-pressed', String(showTr));
}

function finish() {
  if (!song) return;
  cancelAnimationFrame(raf); raf = 0;
  // (the words not reached count as missed)
  const total = countHidden(), right = countRight();
  $('songDone').hidden = false;
  $('songWait').hidden = true;
  $<HTMLInputElement>('songInput').disabled = true;
  $('songDoneText').textContent = tr(`${right} of ${total} words · ${mistakes} mistyped`);
  drawToggle();
  if (right >= total * 0.8) audio.sfx.win();
}

// ── the wave line: the music itself (Web Audio), drawn across the stage and, between lines, in the lyric's place ──
const wave = (() => {
  let ac: AudioContext | null = null, an: AnalyserNode | null = null, buf: Uint8Array<ArrayBuffer> | null = null;
  let gapCv: HTMLCanvasElement | null = null;
  let phase = 0;
  const fit = (cv: HTMLCanvasElement) => {
    const r = cv.getBoundingClientRect(), d = Math.min(2, window.devicePixelRatio || 1);
    const w = Math.max(1, Math.round(r.width * d)), hh = Math.max(1, Math.round(r.height * d));
    if (cv.width !== w || cv.height !== hh) { cv.width = w; cv.height = hh; }
  };
  const paint = (cv: HTMLCanvasElement | null, gain: number) => {
    if (!cv || !cv.isConnected || cv.offsetParent === null) return;
    fit(cv);
    const g = cv.getContext('2d');
    if (!g) return;
    const { width: w, height: hh } = cv;
    g.clearRect(0, 0, w, hh);
    const col = getComputedStyle(cv).color || '#4fd1c5';
    g.lineWidth = Math.max(1.5, hh / 40); g.lineJoin = 'round'; g.lineCap = 'round';
    g.strokeStyle = col;
    g.beginPath();
    const n = 160;
    for (let k = 0; k <= n; k++) {
      const x = (k / n) * w;
      let y = 0;
      if (buf && an && player && !player.paused) y = (buf[Math.floor((k / n) * (buf.length - 1))] - 128) / 128;
      else y = Math.sin(k / 9 + phase) * 0.04; // (quiet: a slow ripple)
      // the ends taper, so the line rests on the page
      const edge = Math.sin((k / n) * Math.PI);
      const py = hh / 2 + y * gain * edge * (hh / 2);
      if (k) g.lineTo(x, py); else g.moveTo(x, py);
    }
    g.stroke();
  };
  return {
    attach(p: HTMLAudioElement) {
      try {
        const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!AC) return;
        ac = new AC();
        const src = ac.createMediaElementSource(p);
        an = ac.createAnalyser(); an.fftSize = 1024; an.smoothingTimeConstant = 0.6;
        src.connect(an); an.connect(ac.destination);
        buf = new Uint8Array(new ArrayBuffer(an.fftSize));
        void ac.resume().catch(() => { /* a tap */ });
      } catch { ac = null; an = null; buf = null; }
    },
    detach() { try { void ac?.close(); } catch { /* fine */ } ac = null; an = null; buf = null; },
    gapCanvas(cv: HTMLCanvasElement | null) { gapCv = cv; },
    draw(gap: boolean) {
      phase += 0.05;
      if (an && buf) an.getByteTimeDomainData(buf);
      paint($<HTMLCanvasElement>('songWave'), 1.6);
      if (gap) paint(gapCv, 2.2);
    },
  };
})();

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
  input.addEventListener('input', () => {
    // a space or the end of the word moves on (a shorter accepted spelling, like si for shi, needs the space)
    if (/\s/.test(input.value)) { const v = input.value.replace(/\s+/g, ''); input.value = v; typed(v, true); return; }
    typed(input.value);
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.preventDefault(); skipWord(); }
    else if (e.key === 'Tab') { e.preventDefault(); replayLine(); }
    else if (e.key === 'Enter') { e.preventDefault(); typed(input.value, true); }
  });
  $('songSkip').onclick = () => { skipWord(); input.focus(); };
  $('songReplay').onclick = () => { replayLine(); input.focus(); };
  $('songPrev').onclick = () => { prevLine(); input.focus(); };
  $('songNext').onclick = () => { nextLine(); input.focus(); };
  $('songToggle').onclick = () => { togglePlay(); input.focus(); };
  $('songHint').onclick = () => hint();
  $('songShowJp').onclick = () => { showJp = !showJp; keepPrefs(); drawToggles(); draw(); input.focus(); };
  $('songShowTr').onclick = () => { showTr = !showTr; keepPrefs(); drawToggles(); draw(); input.focus(); };
  $('songAgain').onclick = () => { if (song) start(song); };
  $('songBackList').onclick = () => openSongs();
  $('songsBack').onclick = () => { if (!$('songPlay').hidden || !$('songTime').hidden) { openSongs(); return; } stop(); ui.show('games'); };
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
