import { LEVELS, type ClientMessage, type Level, type PlayerId, type ServerMessage } from '../shared/protocol';
import type { Client, Room } from './Room';
import type { RoomManager } from './RoomManager';

const MAX_ANSWER_LENGTH = 40;

/** Keep only known levels, in canonical order. */
function parseLevels(raw: unknown): Level[] {
  return Array.isArray(raw) ? LEVELS.filter((l) => raw.includes(l)) : [];
}

/** One per socket connection: validates untrusted input and routes it to the right Room. */
export class Session implements Client {
  private room?: Room;
  private playerId?: PlayerId;

  constructor(private readonly rooms: RoomManager, private readonly out: (json: string) => void) {}

  send(msg: ServerMessage) { this.out(JSON.stringify(msg)); }

  onRaw(raw: string) {
    let msg: Partial<ClientMessage> & Record<string, unknown>;
    try { msg = JSON.parse(raw); } catch { return; }
    if (!msg || typeof msg !== 'object' || typeof msg.type !== 'string') return;

    // Messages that don't need a room
    if (msg.type === 'create') {
      if (!this.room) this.enter(this.rooms.create(), String(msg.name ?? ''), parseLevels(msg.levels));
      return;
    }
    if (msg.type === 'join') {
      if (this.room) return;
      const room = this.rooms.get(String(msg.code ?? ''));
      if (!room) return this.send({ type: 'error', message: 'Room not found' });
      return this.enter(room, String(msg.name ?? ''), parseLevels(msg.levels));
    }

    const { room, playerId } = this;
    if (!room || !playerId) return;
    switch (msg.type) {
      case 'levels': {
        const levels = parseLevels(msg.levels);
        if (levels.length > 0) room.setLevels(playerId, levels);
        break;
      }
      case 'leave':
        this.exitRoom();
        this.send({ type: 'left' });
        break;
      case 'start': return room.start(playerId);
      case 'ready': return room.ready(playerId);
      case 'answer':
        if (typeof msg.challengeId === 'number' && typeof msg.text === 'string') {
          room.answer(playerId, msg.challengeId, msg.text.slice(0, MAX_ANSWER_LENGTH));
        }
        break;
      case 'skip':
        if (typeof msg.challengeId === 'number') room.skip(playerId, msg.challengeId);
        break;
      case 'rematch': return room.rematch(playerId);
    }
  }

  onClose() { this.exitRoom(); }

  private exitRoom() {
    if (this.room && this.playerId) this.room.leave(this.playerId);
    this.room = undefined;
    this.playerId = undefined;
  }

  private enter(room: Room, name: string, levels: Level[]) {
    const result = room.join(name, this, levels);
    if (!result.ok) return this.send({ type: 'error', message: result.error });
    this.room = room;
    this.playerId = result.id;
  }
}
