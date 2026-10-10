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
/** Players found for each other: all must press Accept within ACCEPT_MS. */
interface Pending { matchId: number; tickets: Ticket[]; mode: GameMode; accepted: Set<PlayerId>; timer: ReturnType<typeof setTimeout> }
export const ACCEPT_MS = 5_000;
/** How many players a queued match needs: Boss is always a full party of 4 against the dragon. */
export const QUEUE_SIZE: Partial<Record<GameMode, number>> = { boss: 4 };
const sizeOf = (m: GameMode) => QUEUE_SIZE[m] ?? 2;

/**
 * Online queue: players tick the modes they'd play (or Deck Duel on its own) and the levels they bring.
 * As soon as enough tickets share a mode (2, or 4 for Boss), everyone is asked to accept; then a room is
 * created, they are seated and the game starts at once.
 */
export class Matchmaker {
  private tickets: Ticket[] = [];
  private busy = false; // matching is async (joining needs the player's profile); one at a time
  private pending = new Map<number, Pending>();
  private nextMatch = 1;

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
    const p = this.pendingOf(id);
    if (p) return this.endPending(p, id, notify);
    const t = this.tickets.find((x) => x.id === id);
    if (!t) return;
    this.tickets = this.tickets.filter((x) => x !== t);
    if (notify) t.client.send({ type: 'queue', state: 'idle' });
    this.broadcast();
  }

  isQueued(id: PlayerId) { return this.tickets.some((t) => t.id === id) || !!this.pendingOf(id); }

  private pendingOf(id: PlayerId) { return [...this.pending.values()].find((p) => p.tickets.some((t) => t.id === id)); }

  /** "Accept" in the Match found box. When both have accepted, the room is made and the game starts. */
  accept(id: PlayerId, matchId: unknown) {
    const p = this.pending.get(matchId as number);
    if (!p || !p.tickets.some((t) => t.id === id) || p.accepted.has(id)) return;
    p.accepted.add(id);
    for (const t of p.tickets) t.client.send({ type: 'queue', state: 'found', mode: p.mode, matchId: p.matchId, acceptMs: 0, accepted: [...p.accepted], players: p.tickets.length });
    if (p.accepted.size < p.tickets.length) return;
    clearTimeout(p.timer);
    this.pending.delete(p.matchId);
    void this.seat(p.tickets, p.mode);
  }

  /**
   * Time's up (or someone cancelled/declined): whoever accepted goes back into the queue at their old
   * place; whoever didn't is taken out of the queue.
   */
  private endPending(p: Pending, decliner: PlayerId | null, notify = true) {
    clearTimeout(p.timer);
    this.pending.delete(p.matchId);
    for (const t of p.tickets) {
      const back = decliner === null ? p.accepted.has(t.id) : t.id !== decliner;
      if (back) {
        this.tickets.push(t);
        t.client.send({ type: 'queue', state: 'searching', modes: t.modes, since: t.since, now: this.now(), searching: this.tickets.length, boss: this.tickets.filter((x) => x.modes.includes('boss')).length, requeued: true });
      } else if (notify || t.id !== decliner) {
        t.client.send({ type: 'queue', state: 'idle', reason: decliner === null ? 'missed' : 'declined' });
      }
    }
    this.tickets.sort((a, b) => a.since - b.since); // first come, first served
    void this.match();
    this.broadcast();
  }
  get size() { return this.tickets.length; }

  /** Group the oldest compatible tickets (first come, first served) and ask them all to accept. */
  private async match() {
    for (;;) {
      const group = this.findGroup();
      if (!group) break;
      const [tickets, mode] = group;
      this.tickets = this.tickets.filter((t) => !tickets.includes(t));
      const matchId = this.nextMatch++;
      const p: Pending = { matchId, tickets, mode, accepted: new Set(), timer: setTimeout(() => this.endPending(p, null), ACCEPT_MS) };
      this.pending.set(matchId, p);
      for (const t of tickets) t.client.send({ type: 'queue', state: 'found', mode, matchId, acceptMs: ACCEPT_MS, accepted: [], players: tickets.length });
    }
    this.broadcast();
  }

  /** Everyone accepted: make the room, seat them and start. */
  private async seat(group: Ticket[], mode: GameMode) {
    while (this.busy) await new Promise((r) => setTimeout(r, 5));
    this.busy = true;
    try {
      for (const t of group) t.client.send({ type: 'queue', state: 'matched', mode });
      const room = this.rooms.create(mode);
      const seated: Ticket[] = [];
      const shared = mode === 'rapid' ? group[0].levels.filter((l) => group.every((t) => t.levels.includes(l))) : null; // Rapid: only the levels all picked
      for (const t of group) if (await t.client.joinMatched(room, shared ?? (t.levels.length ? t.levels : ['N5']))) seated.push(t);
      if (seated.length < group.length) {
        // someone vanished while we were seating them: put the other back in the queue
        for (const t of seated) room.leave(t.id);
        for (const t of seated) this.tickets.unshift(t);
        return;
      }
      // start right away, as if the host pressed Start / both pressed Ready
      if (mode === 'deck') for (const t of seated) room.setLobbyReady(t.id, true);
      else room.start(seated[0].id);
    } finally {
      this.busy = false;
      this.broadcast();
    }
  }

  /**
   * The oldest ticket that can form a full group: for each of its modes, the earliest others who want it
   * too (Rapid: with a level in common). Several modes possible → one at random.
   */
  private findGroup(): [Ticket[], GameMode] | null {
    for (let i = 0; i < this.tickets.length; i++) {
      const a = this.tickets[i];
      const options: Array<[Ticket[], GameMode]> = [];
      for (const m of a.modes) {
        const others = this.tickets.slice(i + 1).filter((b) => b.modes.includes(m) && (m !== 'rapid' || a.levels.some((l) => b.levels.includes(l))));
        if (others.length >= sizeOf(m) - 1) options.push([[a, ...others.slice(0, sizeOf(m) - 1)], m]);
      }
      if (options.length) return options[Math.floor(this.rng() * options.length)];
    }
    return null;
  }

  /** Everyone searching sees how long they've waited and how many others are looking. */
  private broadcast() {
    for (const t of this.tickets) {
      t.client.send({ type: 'queue', state: 'searching', modes: t.modes, since: t.since, now: this.now(), searching: this.tickets.length, boss: this.tickets.filter((x) => x.modes.includes('boss')).length });
    }
  }
}
