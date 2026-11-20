import type { GameMode, PlayerId, VocabEntry } from '../shared/protocol';
import type { WritingJudge } from './Game';
import { DEFAULT_ROOM_OPTIONS, Room, type MatchEndHook, type ReplayData, type RoomOptions, type Suspect } from './Room';
import { Strikes } from './strikes';

const LETTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ';

export interface ManagerDeps { judgeWriting?: WritingJudge; judgeDeck?: WritingJudge; writableFilter?: (v: VocabEntry) => boolean; spellIds?: (id: string) => Promise<ReadonlySet<string>>; onMatchEnd?: MatchEndHook; onGameStart?: (mode: GameMode, playerIds: PlayerId[]) => void; /** 0.9.9.9.9 */ saveReplay?: (data: ReplayData) => Promise<string | null>; /** 0.9.9.9.9.2 */ onSuspect?: (who: Suspect[], mode: GameMode) => void }

/** Owns all rooms and remembers which room each account is sitting in (for reconnects). */
export class RoomManager {
  private rooms = new Map<string, Room>();
  private seatOf = new Map<PlayerId, Room>();

  constructor(private readonly deps: ManagerDeps = {}, private readonly opts: RoomOptions = DEFAULT_ROOM_OPTIONS) {}

  /** quick: the tutorial's first battle — 30 s of study, a 2-minute fight. */
  create(mode: GameMode, quick = false): Room {
    let code: string;
    do {
      code = Array.from({ length: 4 }, () => LETTERS[Math.floor(Math.random() * LETTERS.length)]).join('');
    } while (this.rooms.has(code));
    const room: Room = new Room(code, mode, {
      onEmpty: () => this.rooms.delete(code),
      onMemberLeft: (id) => { if (this.seatOf.get(id) === room) this.seatOf.delete(id); },
      judgeWriting: this.deps.judgeWriting,
      judgeDeck: this.deps.judgeDeck,
      writableFilter: this.deps.writableFilter,
      spellIds: this.deps.spellIds,
      onMatchEnd: this.deps.onMatchEnd,
      onGameStart: this.deps.onGameStart,
      saveReplay: this.deps.saveReplay,
      onSuspect: this.deps.onSuspect,
    }, quick ? { ...this.opts, tutorial: true, game: { ...this.opts.game, prepMs: 20_000, battleMs: 150_000 } } : this.opts); // (0.9.9.9.6: the tutorial)
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

  // ── 0.9.9.9.7.2: wrong room codes — 10 a minute per account, 20 per address (a family or a school shares one) ──
  private wrongByUser = new Strikes(10, 60_000);
  private wrongByIp = new Strikes(20, 60_000);
  codesBlocked(who: { user: string; ip?: string }, now = Date.now()) { return this.wrongByUser.blocked(who.user, now) || (!!who.ip && this.wrongByIp.blocked(who.ip, now)); }
  wrongCode(who: { user: string; ip?: string }, now = Date.now()) { this.wrongByUser.add(who.user, now); if (who.ip) this.wrongByIp.add(who.ip, now); }
}
