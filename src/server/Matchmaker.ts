import { LEVELS, type GameMode, type Level, type PlayerId, type ServerMessage } from '../shared/protocol';
import type { Room } from './Room';
import { isRankedMode } from '../shared/ranked';
import type { RoomManager } from './RoomManager';

/** Modes you can tick together in the online queue. Deck Duel has its own queue (it never mixes). */
export const QUEUE_MODES = ['reading', 'writing', 'rapid', 'boss', 'chess', 'clash'] as const;
/** 0.9.9.9.9.6 (round 5): modes with no word levels (chess, Grammar Clash) */
const NO_LEVELS = new Set<GameMode>(['chess', 'clash']);
/** Grammar Clash gathers 2–8: it starts with 8, or with whoever is there once the first has waited this long */
export const CLASH_GATHER_MS = 12_000;
/** (round 7) Grammar Clash players with no JLPT level in common meet after this long */
export const CLASH_ANY_LEVEL_MS = 45_000;

/** The player's side of matchmaking (a Session). */
export interface QueueClient {
  send(msg: ServerMessage): void;
  /** Take a seat in the matched room (same as joining by code). */
  joinMatched(room: Room, levels: Level[]): Promise<boolean>;
  /** Already sitting in a room? Then they can't queue. */
  inRoom(): boolean;
}

/** (round 6) ranked: the Ranked side of the queue (only ranked modes; meets only others on that side) */
interface Ticket { id: PlayerId; client: QueueClient; modes: GameMode[]; levels: Level[]; since: number; ranked: boolean }
/** Players found for each other: all must press Accept within ACCEPT_MS. */
interface Pending { matchId: number; tickets: Ticket[]; mode: GameMode; ranked: boolean; accepted: Set<PlayerId>; timer: ReturnType<typeof setTimeout> }
export const ACCEPT_MS = 5_000;
/** How many players a queued match needs: Boss is always a full party of 4 against the dragon. */
export const QUEUE_SIZE: Partial<Record<GameMode, number>> = { boss: 4, clash: 8 };
const sizeOf = (m: GameMode) => QUEUE_SIZE[m] ?? 2;
/** Rapid prefers a partner with a level in common; after this long it takes anyone (the room then uses both players' levels). */
export const RAPID_ANY_AFTER_MS = 8_000;

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
  enqueue(id: PlayerId, client: QueueClient, rawModes: unknown, rawLevels: unknown, rawRanked?: unknown): string | null {
    if (client.inRoom()) return 'Leave your room first';
    const want = Array.isArray(rawModes) ? rawModes : [];
    // (round 6: an app from before the two sides sends no flag — its ranked modes stay ranked, as they were)
    const ranked = rawRanked !== false;
    const deck = want.includes('deck');
    let modes: GameMode[] = deck ? ['deck'] : QUEUE_MODES.filter((m) => want.includes(m));
    if (rawRanked === true) modes = modes.filter((m) => isRankedMode(m));
    if (modes.length === 0) return 'Pick at least one mode';
    const levels = Array.isArray(rawLevels) ? LEVELS.filter((l) => rawLevels.includes(l)) : [];
    if (!deck && levels.length === 0 && modes.some((m) => !NO_LEVELS.has(m))) return 'Pick at least one level';
    this.cancel(id, false);
    this.tickets.push({ id, client, modes, levels: deck ? [] : levels, since: this.now(), ranked });
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
    if (p.accepted.size < p.tickets.length || !this.pending.has(p.matchId)) return; // (round 6: seated once, even if an accept came in meanwhile)
    clearTimeout(p.timer);
    this.pending.delete(p.matchId);
    void this.seat(p.tickets, p.mode, p.ranked);
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

  /** Called every couple of seconds: tickets that waited long enough may now match (Rapid without a common level). */
  tick() { if (this.tickets.length > 1 && !this.busy) void this.match(); }

  /** Group the oldest compatible tickets (first come, first served) and ask them all to accept. */
  private async match() {
    for (;;) {
      const group = this.findGroup();
      if (!group) break;
      const [tickets, mode] = group;
      this.tickets = this.tickets.filter((t) => !tickets.includes(t));
      const matchId = this.nextMatch++;
      const p: Pending = { matchId, tickets, mode, ranked: tickets[0].ranked && isRankedMode(mode), accepted: new Set(), timer: setTimeout(() => this.endPending(p, null), ACCEPT_MS) };
      this.pending.set(matchId, p);
      for (const t of tickets) t.client.send({ type: 'queue', state: 'found', mode, matchId, acceptMs: ACCEPT_MS, accepted: [], players: tickets.length });
    }
    this.broadcast();
  }

  /** Everyone accepted: make the room, seat them and start. */
  private async seat(group: Ticket[], mode: GameMode, ranked: boolean) {
    while (this.busy) await new Promise((r) => setTimeout(r, 5));
    this.busy = true;
    try {
      for (const t of group) t.client.send({ type: 'queue', state: 'matched', mode });
      const room = this.rooms.create(mode);
      // 0.9.9.9.9: a 1v1 from the queue is ranked (its first game); 0.9.9.9.9.6: only Rapid and Deck Duel (the owner:
      // "ranked for Deck Duel and 1v1 Rapid only") — Reading and Writing from the queue are friendly games
      // (0.9.9.9.9.6 round 5: chess and Grammar Clash too; round 6: only from the queue's Ranked side)
      room.ranked = ranked;
      const seated: Ticket[] = [];
      // Rapid: both race on the same words — the levels everyone picked, or (no level in common) all of them
      const common = group[0].levels.filter((l) => group.every((t) => t.levels.includes(l)));
      const shared = mode === 'rapid' ? (common.length ? common : LEVELS.filter((l) => group.some((t) => t.levels.includes(l)))) : null;
      for (const t of group) if (await t.client.joinMatched(room, shared ?? (t.levels.length ? t.levels : ['N5']))) seated.push(t);
      if (seated.length < group.length) {
        // someone vanished while we were seating them: put the other back in the queue
        for (const t of seated) room.leave(t.id);
        for (const t of seated) this.tickets.unshift(t);
        return;
      }
      // start right away, as if the host pressed Start / both pressed Ready
      if (mode === 'deck') for (const t of seated) room.setLobbyReady(t.id, true);
      else {
        // (round 5: every level's grammar; round 7: the JLPT level the players have in common, when they picked one)
        if (mode === 'clash') {
          const lv = (t: Ticket) => t.levels.filter((l) => /^N\d$/.test(l));
          const both = ['N5', 'N4', 'N3', 'N2', 'N1'].filter((l) => seated.every((t) => !lv(t).length || lv(t).includes(l as Level)));
          const any = seated.some((t) => lv(t).length);
          room.setSettings(seated[0].id, { level: any && both.length ? both[Math.floor(this.rng() * both.length)] : 'mix', count: 10 });
        }
        room.start(seated[0].id);
      }
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
        const waited = (t: Ticket) => this.now() - t.since >= RAPID_ANY_AFTER_MS;
        // (round 7) Grammar Clash: players who picked JLPT levels meet others with one in common (no levels: any)
        const nLv = (t: Ticket) => t.levels.filter((l) => /^N\d$/.test(l));
        const longWait = (t: Ticket) => this.now() - t.since >= CLASH_ANY_LEVEL_MS; // (it gathers for 12 s anyway: the level holds longer)
        const fits = (b: Ticket) => m === 'clash' ? (!nLv(a).length || !nLv(b).length || nLv(a).some((l) => nLv(b).includes(l)) || (longWait(a) && longWait(b)))
          : m !== 'rapid' || a.levels.some((l) => b.levels.includes(l)) || (waited(a) && waited(b));
        // (round 6: a ranked mode — only players on the same side of the queue)
        const others = this.tickets.slice(i + 1).filter((b) => b.modes.includes(m) && fits(b) && (!isRankedMode(m) || b.ranked === a.ranked));
        if (others.length >= sizeOf(m) - 1) options.push([[a, ...others.slice(0, sizeOf(m) - 1)], m]);
        // (round 5) Grammar Clash: fewer than 8 will do once the first has waited a while
        else if (m === 'clash' && others.length >= 1 && this.now() - a.since >= CLASH_GATHER_MS) options.push([[a, ...others.slice(0, sizeOf(m) - 1)], m]);
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
