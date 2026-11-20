// 0.9.9.9.9: watching a battle you aren't playing in — a friend's game as it happens, or a replay (a link anyone can
// open, from the match history or the results). Both go through the battle screen itself: the messages a player's
// own game would get are played into it, from one player's side (in a replay you can switch sides), with the
// answer box and the buttons that would act on the game hidden (body[data-watch]). Live, you see what everyone sees —
// never a player's word before it is cast; a replay also shows each word and answer of the side you watch.
import type { PlayerId, PlayerView, ServerMessage } from '../shared/protocol';
import { tr } from './i18n';

type TapeEntry = [number, PlayerId | null, ServerMessage];

let kind: 'live' | 'replay' | null = null;
export const watching = () => kind;

let feed: (m: ServerMessage) => void = () => {};
let leave: () => void = () => {};
let unwatch: () => void = () => {};
let toast: (s: string) => void = () => {};
/** main.ts: where messages go (its own handler), what leaving looks like, how to tell the server to stop */
export function initWatch(o: { feed: (m: ServerMessage) => void; leave: () => void; unwatch: () => void; toast: (s: string) => void }) { feed = o.feed; leave = o.leave; unwatch = o.unwatch; toast = o.toast; initWatchBar(); }

/** what the app may still send while watching (nothing that acts on a game) */
const ALLOWED = new Set(['pong', 'where', 'away', 'dm_typing', 'unwatch', 'watch', 'hello']);
export const mayWhileWatching = (type: string) => ALLOWED.has(type);
/** a button that would leave the game: leaves the watching instead */
export const LEAVING = new Set(['leave', 'forfeit', 'leave_game', 'back_to_lobby']);

const bar = () => document.getElementById('watchBar')!;
function setBar(title: string, replay: boolean) {
  document.body.dataset.watch = kind ?? '';
  bar().hidden = false;
  document.getElementById('watchTitle')!.textContent = title;
  for (const id of ['watchSpeed', 'watchSide', 'watchAgain', 'watchCopy']) document.getElementById(id)!.hidden = !replay;
}

// ── live ─────────────────────────────────────────────────────────────────────────────────────────────────────────
/** the server says you're watching (on) — the battle screen follows from its messages */
export function liveStarted(m: Extract<ServerMessage, { type: 'watching' }>) {
  stopReplay();
  kind = 'live';
  const target = m.target ?? m.players?.find((p) => !p.bot)?.id ?? '';
  feed({ type: 'joined', code: m.code ?? '', you: target, mode: m.mode ?? 'reading' });
  setBar(`${tr('Watching')} ${m.name ?? ''}`.trim(), false);
}
export function liveEnded() { if (kind === 'live') end(); }

// ── replays ──────────────────────────────────────────────────────────────────────────────────────────────────────
let replay: { data: { mode: string; at: number; tape: TapeEntry[] }; side: PlayerId; id: string } | null = null;
let timers: number[] = [];
let speed = 1;
/** the longest pause a replay keeps (a paused game against a bot, someone thinking a long while) */
const GAP_MS = 3000;

export function sidesOf(tape: TapeEntry[]): PlayerView[] {
  const start = tape.find(([, , m]) => m.type === 'battle_start')?.[2] as Extract<ServerMessage, { type: 'battle_start' }> | undefined;
  return start?.players ?? [];
}

export function playReplay(id: string, data: { mode: string; at: number; tape: TapeEntry[] }, side?: PlayerId) {
  if (kind === 'live') { unwatch(); kind = null; }
  stopReplay();
  const humans = sidesOf(data.tape).filter((p) => !p.bot);
  const who = side && humans.some((p) => p.id === side) ? side : humans[0]?.id ?? '';
  replay = { data, side: who, id };
  kind = 'replay';
  const names = sidesOf(data.tape).map((p) => p.name).join(' vs ');
  setBar(`${tr('Replay')} · ${names}`, true);
  document.getElementById('watchSide')!.hidden = humans.length < 2;
  feed({ type: 'joined', code: '', you: who, mode: data.mode as never });
  let at = 0, last = 0;
  for (const [t, to, m] of data.tape) {
    if (to !== null && to !== who) continue;
    at += Math.min(GAP_MS, Math.max(0, t - last)) / speed;
    last = t;
    timers.push(window.setTimeout(() => feed(m), at));
  }
}
function stopReplay() { for (const t of timers) clearTimeout(t); timers = []; }

function end() {
  stopReplay();
  const was = kind;
  kind = null; replay = null;
  delete document.body.dataset.watch;
  bar().hidden = true;
  if (was === 'live') unwatch();
  leave();
}
/** the Exit button (or a leaving button in the game) */
export function stopWatching() { if (kind) end(); }

export const replayLink = (id: string) => `${location.origin}/?replay=${encodeURIComponent(id)}`;

function initWatchBar() {
  document.getElementById('watchExit')!.onclick = () => stopWatching();
  document.getElementById('watchAgain')!.onclick = () => { if (replay) playReplay(replay.id, replay.data, replay.side); };
  document.getElementById('watchSide')!.onclick = () => {
    if (!replay) return;
    const other = sidesOf(replay.data.tape).find((p) => !p.bot && p.id !== replay!.side);
    if (other) playReplay(replay.id, replay.data, other.id);
  };
  const sp = document.getElementById('watchSpeed')!;
  sp.onclick = () => { speed = speed === 1 ? 2 : 1; sp.textContent = `${speed}×`; if (replay) playReplay(replay.id, replay.data, replay.side); };
  document.getElementById('watchCopy')!.onclick = async () => {
    if (!replay) return;
    try { await navigator.clipboard.writeText(replayLink(replay.id)); toast(tr('Replay link copied')); } catch { prompt(tr('Replay link'), replayLink(replay.id)); }
  };
}
