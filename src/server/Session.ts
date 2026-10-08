import type { ClientMessage, PlayerId, ServerMessage } from '../shared/protocol';
import type { Client, Room } from './Room';
import type { RoomManager } from './RoomManager';

/** One per socket connection: parses messages and routes them to the right Room. */
export class Session implements Client {
  private room?: Room;
  private playerId?: PlayerId;

  constructor(private readonly rooms: RoomManager, private readonly out: (json: string) => void) {}

  send(msg: ServerMessage) { this.out(JSON.stringify(msg)); }

  onRaw(raw: string) {
    let msg: ClientMessage;
    try { msg = JSON.parse(raw); } catch { return; }
    if (typeof msg?.type !== 'string') return;

    switch (msg.type) {
      case 'create':
        if (!this.room) this.enter(this.rooms.create(), String(msg.name ?? ''));
        break;
      case 'join': {
        if (this.room) break;
        const room = this.rooms.get(String(msg.code ?? ''));
        if (!room) return this.send({ type: 'error', message: 'Room not found' });
        this.enter(room, String(msg.name ?? ''));
        break;
      }
      case 'answer':
        if (this.room && this.playerId) this.room.answer(this.playerId, String(msg.text ?? ''));
        break;
    }
  }

  onClose() {
    if (this.room && this.playerId) this.room.leave(this.playerId);
  }

  private enter(room: Room, name: string) {
    const id = room.join(name, this);
    if (!id) return this.send({ type: 'error', message: 'Room is full' });
    this.room = room;
    this.playerId = id;
  }
}
