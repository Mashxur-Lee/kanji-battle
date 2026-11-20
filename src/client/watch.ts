// 0.9.9.9.9: watching a battle you aren't playing in — a friend's game as it happens, or a replay (a link anyone can
// open, from the match history or the results). Both go through the battle screen itself: the messages a player's
// own game would get are played into it, from one player's side (in a replay you can switch sides), with the
// answer box and the buttons that would act on the game hidden (body[data-watch]). Live, you see what everyone sees —
// never a player's word before it is cast; a replay also shows each word and answer of the side you watch.
//
// 0.9.9.9.9.1: a replay is a player now, with a timeline: play and pause, drag (or tap) anywhere on it, 0.5× 1× 2×, and
// every hit and miss of both sides marked on it (yours above the line, theirs below). Jumping to a moment rebuilds the
// battle as it stood then, quietly (main.ts), instead of playing every message from the start. The clocks on screen
// (the battle's, the word's, the 3-2-1) follow the replay's time, so they stop when it stops and run fast at 2×.
// It pauses when the app goes to the background (it used to run on there, its sounds too).
import type { GameMode, PlayerId, ServerMessage } from '../shared/protocol';
import { tr } from './i18n';
import { setClockSource } from './ui';
import { clipOf, sidesOf, stateAt, type Clip, type ReplayState, type TapeEntry } from './replayclip';

export type { ReplayState } from './replayclip';
type Msg<T extends ServerMessage['type']> = Extract<ServerMessage, { type: T }>;

let kind: 'live' | 'replay' | null = null;
export const watching = () => kind;

let feed: (m: ServerMessage) => void = () => {};
let restore: (s: ReplayState) => void = () => {};
let leave: () => void = () => {};
let unwatch: () => void = () => {};
let toast: (s: string) => void = () => {};
/** main.ts: where messages go (its own handler), how a moment is rebuilt, what leaving looks like, how to tell the server to stop */
export function initWatch(o: { feed: (m: ServerMessage) => void; restore: (s: ReplayState) => void; leave: () => void; unwatch: () => void; toast: (s: string) => void }) {
  feed = o.feed; restore = o.restore; leave = o.leave; unwatch = o.unwatch; toast = o.toast;
  initWatchBar();
}

/** what the app may still send while watching (nothing that acts on a game) */
const ALLOWED = new Set(['pong', 'where', 'away', 'dm_typing', 'unwatch', 'watch', 'hello']);
export const mayWhileWatching = (type: string) => ALLOWED.has(type);
/** a button that would leave the game: leaves the watching instead */
export const LEAVING = new Set(['leave', 'forfeit', 'leave_game', 'back_to_lobby']);

const $ = (id: string) => document.getElementById(id)!;
function setBar(title: string, replay: boolean) {
  document.body.dataset.watch = kind ?? '';
  $('watchBar').hidden = false;
  $('watchTitle').textContent = title;
  for (const id of ['watchTime', 'watchLegend']) $(id).hidden = !replay;
}

// ── live ─────────────────────────────────────────────────────────────────────────────────────────────────────────
/** the server says you're watching (on) — the battle screen follows from its messages */
export function liveStarted(m: Msg<'watching'>) {
  stopReplay();
  kind = 'live';
  const target = m.target ?? m.players?.find((p) => !p.bot)?.id ?? '';
  feed({ type: 'joined', code: m.code ?? '', you: target, mode: m.mode ?? 'reading' });
  setBar(`${tr('Watching')} ${m.name ?? ''}`.trim(), false);
}
export function liveEnded() { if (kind === 'live') end(); }

// ── replays: the player ──────────────────────────────────────────────────────────────────────────────────────────
let replay: { data: { mode: string; at: number; tape: TapeEntry[] }; id: string; clip: Clip } | null = null;
let pos = 0, playing = false, rate = 1, next = 0, raf = 0, lastNow = 0;
let dragging: number | null = null; // (while you drag: where the thumb is — the battle jumps there when you let go)
const RATES = [1, 2, 0.5];

export function playReplay(id: string, data: { mode: string; at: number; tape: TapeEntry[] }, side?: PlayerId, from?: number) {
  if (kind === 'live') { unwatch(); kind = null; }
  stopReplay();
  // (0.9.9.9.9.2: anyone's eyes — the bots' too; their own words are only known for people)
  const all = sidesOf(data.tape), humans = all.filter((p) => !p.bot);
  const who = side && all.some((p) => p.id === side) ? side : humans[0]?.id ?? all[0]?.id ?? '';
  const clip = clipOf(data.tape, data.mode as GameMode, who);
  replay = { data, id, clip };
  kind = 'replay';
  const names = sidesOf(data.tape).map((p) => p.name).join(' vs ');
  setBar(`${tr('Replay')} · ${names}`, true);
  $('watchSide').hidden = all.length < 2;
  $('watchPov').textContent = all.find((p) => p.id === who)?.name ?? '';
  drawMarks();
  setClockSource(() => pos); // (the battle's clocks follow the replay)
  feed({ type: 'joined', code: '', you: who, mode: data.mode as GameMode });
  seek(from ?? clip.start);
  setPlaying(true);
  lastNow = performance.now();
  raf = requestAnimationFrame(frame);
}

function frame(now: number) {
  raf = requestAnimationFrame(frame);
  if (!replay) return;
  const dt = Math.min(250, Math.max(0, now - lastNow)); // (back from a pause in drawing: no jump)
  lastNow = now;
  if (playing) pos = Math.min(replay.clip.end, pos + dt * rate);
  const cues = replay.clip.cues;
  while (next < cues.length && cues[next].vt <= pos) feed(cues[next++].m);
  if (playing && pos >= replay.clip.end) setPlaying(false);
  paintBar();
}

/** jump to `at` on the clip: the battle as it stood then */
function seek(at: number) {
  if (!replay) return;
  const c = replay.clip;
  pos = Math.max(c.start, Math.min(c.end, at));
  const s = stateAt(c, pos);
  if (s) restore(s);
  next = c.cues.findIndex((q) => q.vt > pos);
  if (next < 0) next = c.cues.length;
  paintBar();
}

function setPlaying(on: boolean) {
  if (on && replay && pos >= replay.clip.end) seek(replay.clip.start); // (at the end, Play starts it again)
  playing = on;
  lastNow = performance.now();
  document.body.classList.toggle('replay-paused', !on); // (the 3D arena stands still too)
  const b = $('watchPlay');
  b.setAttribute('aria-label', tr(on ? 'Pause' : 'Play'));
  b.dataset.state = on ? 'playing' : replay && pos >= replay.clip.end ? 'ended' : 'paused';
}

function stopReplay() {
  cancelAnimationFrame(raf); raf = 0;
  playing = false; dragging = null;
  document.body.classList.remove('replay-paused');
}

function end() {
  stopReplay();
  const was = kind;
  kind = null; replay = null;
  setClockSource(null);
  delete document.body.dataset.watch;
  $('watchBar').hidden = true;
  if (was === 'live') unwatch();
  leave();
}
/** the Exit button (or a leaving button in the game) */
export function stopWatching() { if (kind) end(); }

export const replayLink = (id: string) => `${location.origin}/?replay=${encodeURIComponent(id)}`;

// ── the bar: the timeline ────────────────────────────────────────────────────────────────────────────────────────
const clock = (ms: number) => { const s = Math.max(0, Math.round(ms / 1000)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
const frac = (vt: number) => (replay ? Math.max(0, Math.min(1, (vt - replay.clip.start) / Math.max(1, replay.clip.end - replay.clip.start))) : 0);

function paintBar() {
  if (!replay) return;
  const at = dragging ?? pos, c = replay.clip;
  const f = frac(at);
  const track = $('watchTrack');
  track.style.setProperty('--at', `${(f * 100).toFixed(2)}%`);
  track.setAttribute('aria-valuenow', String(Math.round((at - c.start) / 1000)));
  track.setAttribute('aria-valuetext', clock(at - c.start));
  $('watchClock').textContent = `${clock(at - c.start)} / ${clock(c.end - c.start)}`;
}

function drawMarks() {
  if (!replay) return;
  const c = replay.clip, players = sidesOf(replay.data.tape);
  const me = players.find((p) => p.id === c.side)?.name ?? '';
  const them = c.mode === 'boss' ? tr('The dragon') : players.find((p) => p.id !== c.side)?.name ?? '';
  const box = $('watchTrack').querySelector('.wb-marks')!;
  box.replaceChildren(...c.marks.map((m) => {
    const i = document.createElement('i');
    i.className = `wb-m ${m.mine ? 'mine' : 'theirs'} ${m.hit ? 'hit' : 'miss'}${m.crit ? ' crit' : ''}`;
    i.style.left = `${(frac(m.vt) * 100).toFixed(2)}%`;
    const who = m.mine ? me : them;
    i.title = `${clock(m.vt - c.start)} · ${who}: ${m.hit ? `${m.kanji ?? ''} −${m.damage ?? 0}${m.crit ? '!' : ''}`.trim() : `${tr('miss')}${m.kanji ? ` ${m.kanji}` : ''}`}`;
    i.dataset.vt = String(m.vt);
    return i;
  }));
  const track = $('watchTrack');
  track.setAttribute('aria-valuemin', '0');
  track.setAttribute('aria-valuemax', String(Math.round((c.end - c.start) / 1000)));
  // the legend: whose row is whose
  const key = (cls: string, name: string) => {
    const s = document.createElement('span'); s.className = `wb-key ${cls}`;
    const b = document.createElement('b'); b.textContent = name;
    s.append(b, dot('hit'), document.createTextNode(tr('hits')), dot('miss'), document.createTextNode(tr('misses')));
    return s;
  };
  const dot = (k: string) => { const d = document.createElement('i'); d.className = `wb-m ${k}`; return d; };
  $('watchLegend').replaceChildren(key('mine', me), key('theirs', them));
}

function initWatchBar() {
  $('watchExit').onclick = () => stopWatching();
  $('watchSide').onclick = () => {
    if (!replay) return;
    const all = sidesOf(replay.data.tape), i = all.findIndex((p) => p.id === replay!.clip.side);
    const other = all[(i + 1) % all.length];
    if (other && other.id !== replay.clip.side) { const was = playing; playReplay(replay.id, replay.data, other.id, pos); setPlaying(was); }
  };
  const sp = $('watchSpeed');
  sp.onclick = () => { rate = RATES[(RATES.indexOf(rate) + 1) % RATES.length]; sp.textContent = `${rate}×`; lastNow = performance.now(); };
  $('watchPlay').onclick = () => setPlaying(!playing);
  $('watchCopy').onclick = async () => {
    if (!replay) return;
    try { await navigator.clipboard.writeText(replayLink(replay.id)); toast(tr('Replay link copied')); } catch { prompt(tr('Replay link'), replayLink(replay.id)); }
  };
  // the timeline: tap or drag anywhere; a mark, tapped, jumps to just before it (to see it happen)
  const track = $('watchTrack');
  const at = (x: number) => { const r = track.getBoundingClientRect(); const c = replay!.clip; return c.start + Math.max(0, Math.min(1, (x - r.left) / Math.max(1, r.width))) * (c.end - c.start); };
  track.onpointerdown = (e) => {
    if (!replay) return;
    e.preventDefault();
    track.setPointerCapture(e.pointerId);
    const mark = (e.target as HTMLElement).closest<HTMLElement>('.wb-m');
    dragging = mark?.dataset.vt ? Math.max(replay.clip.start, Number(mark.dataset.vt) - 1200) : at(e.clientX);
    track.classList.add('drag');
    paintBar();
  };
  track.onpointermove = (e) => { if (dragging !== null && replay) { dragging = at(e.clientX); paintBar(); } };
  const drop = () => { if (dragging === null) return; const to = dragging; dragging = null; track.classList.remove('drag'); seek(to); lastNow = performance.now(); };
  track.onpointerup = drop;
  track.onpointercancel = drop;
  track.onkeydown = (e) => {
    if (!replay) return;
    const c = replay.clip;
    const k: Record<string, number> = { ArrowLeft: pos - 5000, ArrowRight: pos + 5000, Home: c.start, End: c.end, PageDown: pos - 15000, PageUp: pos + 15000 };
    if (e.key in k) { e.preventDefault(); seek(k[e.key]); }
    else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); setPlaying(!playing); }
  };
  // Space plays and pauses (unless you're typing somewhere)
  addEventListener('keydown', (e) => {
    if (kind !== 'replay' || e.key !== ' ' || e.repeat) return;
    const t = e.target as HTMLElement | null;
    if (t?.closest?.('input, textarea, select, button, [contenteditable], [role="slider"]')) return;
    e.preventDefault(); setPlaying(!playing);
  });
  // the app in the background: the replay waits for you (it used to run on there, sounds and all)
  document.addEventListener('visibilitychange', () => { if (document.hidden && kind === 'replay' && playing) setPlaying(false); });
}
