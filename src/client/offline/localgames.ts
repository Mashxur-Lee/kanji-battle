// Private games against the AI without internet (0.9.9.8.2). The server's own Room — the same rules, AI and
// balance — runs inside the app: the messages the app would send over the game socket go to it instead, and its
// answers come back through the same handler. Kanji Reading, Rapid and Boss Elimination work this way; Writing and
// Deck Duel need the server's handwriting recognizer, and friends need the server, so those stay online.
// Offline games give no XP (there is no server to record them); everything else is as online.

import { RoomManager } from '../../server/RoomManager';
import type { Client, MemberProfile, Room } from '../../server/Room';
import { CHAT_MAX_LENGTH, LEVELS, MODES, type ClientMessage, type GameMode, type Level, type ServerMessage } from '../../shared/protocol';
import { localEngine } from './index';
import { loadVocab } from './vocab';

export const OFFLINE_MODES: readonly GameMode[] = ['reading', 'rapid', 'boss'];

const parseLevels = (raw: unknown): Level[] => (Array.isArray(raw) ? LEVELS.filter((l) => raw.includes(l)) : []);

let rooms: RoomManager | null = null;
let room: Room | null = null;
let me: { id: string; name: string } | null = null;
let deliver: (m: ServerMessage) => void = () => {};

/** Messages from the local room reach the app a moment later, as from a socket (never inside the sender's call). */
const client: Client = { send: (m) => { setTimeout(() => deliver(m), 0); } };

export function initLocalGames(onMessage: (m: ServerMessage) => void) { deliver = onMessage; }
/** You're in a local room (its messages go here even if the internet comes back mid-game). */
export const inLocalRoom = () => !!room;

async function profile(): Promise<MemberProfile> {
  const e = await localEngine();
  return (await e?.memberProfile()) ?? { crit: 0, xp: 0 };
}

/** Handle one message the app would have sent to the server. */
export async function localSend(msg: ClientMessage, user: { id: string; name: string }) {
  me = user;
  const m = msg as ClientMessage & Record<string, unknown>;
  if (m.type === 'create') {
    if (room) return;
    const mode: GameMode = MODES.includes(m.mode as GameMode) ? (m.mode as GameMode) : 'reading';
    if (!OFFLINE_MODES.includes(mode)) return client.send({ type: 'error', message: 'This mode needs internet — offline you can play Kanji Reading, Rapid or Boss Elimination against the AI.' });
    await loadVocab();
    const engine = await localEngine();
    rooms ??= new RoomManager({ spellIds: async () => (await engine?.spellIds()) ?? new Set() });
    const r = rooms.create(mode);
    const res = r.join(me.id, me.name, client, parseLevels(m.levels), await profile());
    if (!res.ok) return client.send({ type: 'error', message: res.error });
    room = r;
    rooms.seat(me.id, r);
    return;
  }
  if (m.type === 'join' || m.type === 'invite' || m.type === 'queue') {
    return client.send({ type: 'error', message: 'Playing with friends needs internet — offline you can play the AI.' });
  }
  if (m.type === 'queue_cancel' || m.type === 'where' || m.type === 'pong' || m.type === 'hello') return;
  const r = room;
  if (!r) return;
  const id = me.id;
  switch (m.type) {
    case 'levels': { const lv = parseLevels(m.levels); if (lv.length) r.setLevels(id, lv); return; }
    case 'pause': { const err = r.setPaused(id, m.on === true); if (err) client.send({ type: 'error', message: err }); return; }
    case 'leave': r.leave(id); room = null; client.send({ type: 'left' }); return;
    case 'forfeit': return r.forfeit(id);
    case 'leave_game': return r.leaveGame(id);
    case 'back_to_lobby': return r.backToLobby(id);
    case 'start': return r.start(id);
    case 'ready': return r.ready(id);
    case 'lobby_ready': return r.setLobbyReady(id, !!m.ready);
    case 'add_bot': return r.addBot(id, m.level);
    case 'remove_bot': return r.removeBot(id, m.id);
    case 'typing': return r.typing(id, m.on === true);
    case 'look': if (typeof m.yaw === 'number' && typeof m.pitch === 'number') r.look(id, m.yaw, m.pitch); return;
    case 'chat': if (typeof m.text === 'string') r.chat(id, m.text.slice(0, CHAT_MAX_LENGTH * 2)); return;
    case 'answer': if (typeof m.challengeId === 'number' && typeof m.text === 'string') r.answer(id, m.challengeId, m.text.slice(0, 40)); return;
    case 'skip': if (typeof m.challengeId === 'number') r.skip(id, m.challengeId); return;
    case 'rematch': return r.rematch(id);
    default: return; // (writing / Deck Duel messages: not offline)
  }
}
