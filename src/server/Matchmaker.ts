import { LEVELS, type GameMode, type Level, type PlayerId, type ServerMessage } from '../shared/protocol';
import type { Room } from './Room';
import type { RoomManager } from './RoomManager';

/** Modes you can tick together in the online queue. Deck Duel has its own queue (it never mixes). */
export const QUEUE_MODES = ['reading', 'writing', 'rapid', 'boss'] as const;

/** The player's side of matchmaking (a Session). */
export interface QueueClient {
  send(msg: ServerMessage): void;
  /** Take a seat in the matched room (same as joining by code). */
  joinMatched(room: Room, levels: Level[]): Promise<boolean>;
  /** Already sitting in a room? Then they can't queue. */
  inRoom(): boolean;
}

interface Ticket { id: PlayerId; client: QueueClient; modes: GameMode[]; levels: Level[]; since: number }

/**
 * Online queue: players tick the modes they'd play (or Deck Duel on its own) and the levels they bring.
 * As soon as two tickets share a mode, a room is created, both are seated and the game starts at once.
 */
export class Matchmaker {
  private tickets: Ticket[] = [];
  private busy = false; // matching is async (joining needs the player's profile); one at a time

  constructor(private readonly rooms: RoomManager, private readonly rng: () => number = Math.random, private readonly now: () => number = Date.now) {}

  /** Start (or update) searching. Returns an error message if the request is invalid. */
  enqueue(id: PlayerId, client: QueueClient, rawModes: unknown, rawLevels: unknown): string | null {
    if (client.inRoom()) return 'Leave your room first';
    const want = Array.isArray(rawModes) ? rawModes : [];
    const deck = want.includes('deck');
    const modes: GameMode[] = deck ? ['deck'] : QUEUE_MODES.filter((m) => want.includes(m));
    if (modes.length === 0) return 'Pick at least one mode';
    const levels = Array.isArray(rawLevels) ? LEVELS.filter((l) => rawLevels.includes(l)) : [];
    if (!deck && levels.length === 0) return 'Pick at least one level';
    this.cancel(id, false);
    this.tickets.push({ id, client, modes, levels: deck ? [] : levels, since: this.now() });
    void this.match();
    this.broadcast();
    return null;
  }

  cancel(id: PlayerId, notify = true) {
    const t = this.tickets.find((x) => x.id === id);
    if (!t) return;
    this.tickets = this.tickets.filter((x) => x !== t);
    if (notify) t.client.send({ type: 'queue', state: 'idle' });
    this.broadcast();
  }

  isQueued(id: PlayerId) { return this.tickets.some((t) => t.id === id); }
  get size() { return this.tickets.length; }

  /** Pair the oldest compatible tickets (first come, first served). */
  private async match() {
    if (this.busy) return;
    this.busy = true;
    try {
      for (;;) {
        const pair = this.findPair();
        if (!pair) break;
        const [a, b, mode] = pair;
        this.tickets = this.tickets.filter((t) => t !== a && t !== b);
        for (const t of [a, b]) t.client.send({ type: 'queue', state: 'matched', mode });
        const room = this.rooms.create(mode);
        const seated: Ticket[] = [];
        for (const t of [a, b]) if (await t.client.joinMatched(room, t.levels.length ? t.levels : ['N5'])) seated.push(t);
        if (seated.length < 2) {
          // someone vanished while we were seating them: put the other back in the queue
          for (const t of seated) room.leave(t.id);
          for (const t of seated) this.tickets.unshift({ ...t, since: t.since });
          continue;
        }
        // start right away, as if the host pressed Start / both pressed Ready
        if (mode === 'deck') for (const t of seated) room.setLobbyReady(t.id, true);
        else room.start(seated[0].id);
      }
    } finally {
      this.busy = false;
      this.broadcast();
    }
  }

  private findPair(): [Ticket, Ticket, GameMode] | null {
    for (let i = 0; i < this.tickets.length; i++) {
      for (let j = i + 1; j < this.tickets.length; j++) {
        const a = this.tickets[i], b = this.tickets[j];
        const common = a.modes.filter((m) => b.modes.includes(m));
        if (common.length) return [a, b, common[Math.floor(this.rng() * common.length)]];
      }
    }
    return null;
  }

  /** Everyone searching sees how long they've waited and how many others are looking. */
  private broadcast() {
    for (const t of this.tickets) {
      t.client.send({ type: 'queue', state: 'searching', modes: t.modes, since: t.since, now: this.now(), searching: this.tickets.length });
    }
  }
}
