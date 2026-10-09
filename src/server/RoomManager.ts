import type { GameMode, PlayerId, VocabEntry } from '../shared/protocol';
import type { WritingJudge } from './Game';
import { DEFAULT_ROOM_OPTIONS, Room, type MatchEndHook, type RoomOptions } from './Room';

const LETTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ';

export interface ManagerDeps { judgeWriting?: WritingJudge; writableFilter?: (v: VocabEntry) => boolean; onMatchEnd?: MatchEndHook }

/** Owns all rooms and remembers which room each account is sitting in (for reconnects). */
export class RoomManager {
  private rooms = new Map<string, Room>();
  private seatOf = new Map<PlayerId, Room>();

  constructor(private readonly deps: ManagerDeps = {}, private readonly opts: RoomOptions = DEFAULT_ROOM_OPTIONS) {}

  create(mode: GameMode): Room {
    let code: string;
    do {
      code = Array.from({ length: 4 }, () => LETTERS[Math.floor(Math.random() * LETTERS.length)]).join('');
    } while (this.rooms.has(code));
    const room: Room = new Room(code, mode, {
      onEmpty: () => this.rooms.delete(code),
      onMemberLeft: (id) => { if (this.seatOf.get(id) === room) this.seatOf.delete(id); },
      judgeWriting: this.deps.judgeWriting,
      writableFilter: this.deps.writableFilter,
      onMatchEnd: this.deps.onMatchEnd,
    }, this.opts);
    this.rooms.set(code, room);
    return room;
  }

  get(code: string): Room | undefined {
    return this.rooms.get(code.trim().toUpperCase());
  }

  /** The room this account currently has a seat in, if any. */
  roomOf(id: PlayerId): Room | undefined {
    const r = this.seatOf.get(id);
    return r && r.has(id) ? r : undefined;
  }

  seat(id: PlayerId, room: Room) { this.seatOf.set(id, room); }

  get roomCount() { return this.rooms.size; }
}
