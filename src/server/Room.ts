import { randomUUID } from 'node:crypto';
import type { Level, PlayerId, PlayerView, ServerMessage } from '../shared/protocol';
import { hpAgainst } from './Balance';
import { DEFAULT_CONFIG, Game, type GameConfig, type GameEvent } from './Game';
import { pickPool } from './VocabPool';

/** Transport-agnostic: Room only needs something it can send messages to. */
export interface Client { send(msg: ServerMessage): void }

export interface RoomOptions {
  maxPlayers: number;
  poolSize: number;
  game: GameConfig;
}
export const DEFAULT_ROOM_OPTIONS: RoomOptions = { maxPlayers: 2, poolSize: 10, game: DEFAULT_CONFIG };
export const DEFAULT_LEVELS: Level[] = ['N3', 'N2'];

type Phase = 'lobby' | 'game' | 'results';
interface Member { id: PlayerId; name: string; levels: Level[] }

/** Lobby → game → results → (rematch) game … Owns who is in the room, who is host, and who picked which levels. */
export class Room {
  private roster: Member[] = [];
  private clients = new Map<PlayerId, Client>();
  private hostId: PlayerId | null = null;
  private phase: Phase = 'lobby';
  private game?: Game;
  private rematchVotes = new Set<PlayerId>();

  constructor(
    readonly code: string,
    private readonly onEmpty: () => void,
    private readonly opts: RoomOptions = DEFAULT_ROOM_OPTIONS,
  ) {}

  join(name: string, client: Client, levels?: Level[]): { ok: true; id: PlayerId } | { ok: false; error: string } {
    if (this.phase !== 'lobby') return { ok: false, error: 'That battle has already started' };
    if (this.roster.length >= this.opts.maxPlayers) return { ok: false, error: 'Room is full' };
    const id = randomUUID();
    this.roster.push({ id, name: name.trim().slice(0, 16) || 'Player', levels: levels?.length ? levels : [...DEFAULT_LEVELS] });
    this.clients.set(id, client);
    this.hostId ??= id;
    client.send({ type: 'joined', code: this.code, you: id });
    this.broadcastLobby();
    return { ok: true, id };
  }

  /** Every player picks their own levels — they decide their own words and how hard they hit. */
  setLevels(id: PlayerId, levels: Level[]) {
    const m = this.roster.find((p) => p.id === id);
    if (!m || this.phase === 'game' || levels.length === 0) return;
    m.levels = levels;
    if (this.phase === 'lobby') this.broadcastLobby();
  }

  start(by: PlayerId) {
    if (by !== this.hostId || this.phase !== 'lobby') return;
    if (this.roster.length < this.opts.maxPlayers) return this.clients.get(by)?.send({ type: 'error', message: 'Waiting for an opponent' });
    this.startGame();
  }

  ready(id: PlayerId) { this.game?.markReady(id); }
  answer(id: PlayerId, challengeId: number, text: string) { this.game?.submit(id, challengeId, text); }
  skip(id: PlayerId, challengeId: number) { this.game?.skip(id, challengeId); }

  rematch(id: PlayerId) {
    if (this.phase !== 'results') return;
    if (this.roster.length < this.opts.maxPlayers) {
      // Opponent left: go back to the lobby so someone new can join with the same code.
      this.phase = 'lobby';
      this.rematchVotes.clear();
      return this.broadcastLobby();
    }
    this.rematchVotes.add(id);
    this.broadcast({ type: 'rematch_status', votes: [...this.rematchVotes] });
    if (this.rematchVotes.size === this.roster.length) this.startGame();
  }

  leave(id: PlayerId) {
    if (!this.clients.has(id)) return;
    this.clients.delete(id);
    // Forfeit while the leaver is still on the roster, so the results screen can name them.
    const wasInGame = this.phase === 'game';
    if (wasInGame) this.game?.forfeit(id); // remaining player wins → results
    this.roster = this.roster.filter((p) => p.id !== id);
    this.rematchVotes.delete(id);
    if (this.hostId === id) this.hostId = this.roster[0]?.id ?? null;

    if (this.roster.length === 0) {
      this.game?.dispose();
      return this.onEmpty();
    }
    if (wasInGame) return;
    if (this.phase === 'lobby') this.broadcastLobby();
    else this.broadcast({ type: 'rematch_status', votes: [...this.rematchVotes] });
  }

  // ── internals ─────────────────────────────────────────────────────────────

  /** Your HP is set by how hard your opponents hit (their levels). */
  private hpFor(id: PlayerId): number {
    const opponents = this.roster.filter((p) => p.id !== id);
    if (opponents.length === 0) return hpAgainst(DEFAULT_LEVELS);
    return Math.round(opponents.reduce((s, o) => s + hpAgainst(o.levels), 0) / opponents.length);
  }

  private startGame() {
    this.game?.dispose();
    this.rematchVotes.clear();
    this.phase = 'game';
    const setups = this.roster.map((p) => ({ id: p.id, pool: pickPool(p.levels, this.opts.poolSize), maxHp: this.hpFor(p.id) }));
    this.game = new Game(setups, (e) => this.onGameEvent(e), this.opts.game);
    this.game.start();
  }

  private onGameEvent(e: GameEvent) {
    switch (e.type) {
      case 'prep':
        return this.clients.get(e.playerId)?.send({ type: 'prep', pool: e.pool, durationMs: e.durationMs });
      case 'prep_ready':
        return this.broadcast({ type: 'prep_ready', readyIds: e.readyIds });
      case 'battle_start':
        return this.broadcast({ type: 'battle_start', players: this.view(), durationMs: e.durationMs, countdownMs: e.countdownMs });
      case 'challenge':
        return this.clients.get(e.playerId)?.send({ type: 'challenge', id: e.id, kanji: e.kanji, answer: e.answer, timeLimitMs: e.timeLimitMs });
      case 'answer_result': {
        const { entry } = e;
        return this.clients.get(e.playerId)?.send({
          type: 'answer_result', challengeId: e.challengeId, correct: e.correct, timedOut: e.timedOut, skipped: e.skipped,
          kanji: entry.kanji, reading: entry.romaji ?? entry.reading, meaning: entry.meaning,
          damage: e.damage, combo: e.combo, responseMs: e.responseMs, nextInMs: e.nextInMs,
        });
      }
      case 'battle_update':
        return this.broadcast({ type: 'battle_update', players: this.view(), event: e.event });
      case 'game_over':
        this.phase = 'results';
        return this.broadcast({ type: 'game_over', winnerId: e.winnerId, reason: e.reason, players: this.view(), stats: e.stats });
    }
  }

  private view(): PlayerView[] {
    const inGame = this.game && this.phase !== 'lobby';
    return this.roster.map((p) => {
      const maxHp = inGame ? this.game!.getMaxHp(p.id) || this.hpFor(p.id) : this.hpFor(p.id);
      return {
        id: p.id,
        name: p.name,
        hp: inGame ? this.game!.getHp(p.id) : maxHp,
        maxHp,
        combo: inGame ? this.game!.getCombo(p.id) : 0,
        levels: p.levels,
      };
    });
  }

  private broadcastLobby() {
    if (!this.hostId) return;
    this.broadcast({ type: 'lobby', players: this.view(), hostId: this.hostId, maxPlayers: this.opts.maxPlayers });
  }

  private broadcast(msg: ServerMessage) {
    for (const c of this.clients.values()) c.send(msg);
  }
}
