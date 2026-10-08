import { randomUUID } from 'node:crypto';
import type { JlptLevel, PlayerId, PlayerView, RoomSettings, ServerMessage } from '../shared/protocol';
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

type Phase = 'lobby' | 'game' | 'results';

/** Lobby → game → results → (rematch) game … Owns who is in the room and who the host is. */
export class Room {
  private roster: Array<{ id: PlayerId; name: string }> = [];
  private clients = new Map<PlayerId, Client>();
  private hostId: PlayerId | null = null;
  private settings: RoomSettings = { levels: ['N3', 'N2'] };
  private phase: Phase = 'lobby';
  private game?: Game;
  private rematchVotes = new Set<PlayerId>();

  constructor(
    readonly code: string,
    private readonly onEmpty: () => void,
    private readonly opts: RoomOptions = DEFAULT_ROOM_OPTIONS,
  ) {}

  join(name: string, client: Client): { ok: true; id: PlayerId } | { ok: false; error: string } {
    if (this.phase !== 'lobby') return { ok: false, error: 'That battle has already started' };
    if (this.roster.length >= this.opts.maxPlayers) return { ok: false, error: 'Room is full' };
    const id = randomUUID();
    this.roster.push({ id, name: name.trim().slice(0, 16) || 'Player' });
    this.clients.set(id, client);
    this.hostId ??= id;
    client.send({ type: 'joined', code: this.code, you: id });
    this.broadcastLobby();
    return { ok: true, id };
  }

  updateSettings(by: PlayerId, levels: JlptLevel[]) {
    if (by !== this.hostId || this.phase !== 'lobby' || levels.length === 0) return;
    this.settings = { levels };
    this.broadcastLobby();
  }

  start(by: PlayerId) {
    if (by !== this.hostId || this.phase !== 'lobby') return;
    if (this.roster.length < this.opts.maxPlayers) return this.clients.get(by)?.send({ type: 'error', message: 'Waiting for an opponent' });
    this.startGame();
  }

  ready(id: PlayerId) { this.game?.markReady(id); }

  answer(id: PlayerId, challengeId: number, text: string) { this.game?.submit(id, challengeId, text); }

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

  private startGame() {
    this.game?.dispose();
    this.rematchVotes.clear();
    const pool = pickPool(this.settings.levels, this.opts.poolSize);
    this.phase = 'game';
    this.game = new Game(this.roster.map((p) => p.id), pool, (e) => this.onGameEvent(e), this.opts.game);
    this.game.start();
  }

  private onGameEvent(e: GameEvent) {
    switch (e.type) {
      case 'prep':
        return this.broadcast({ type: 'prep', pool: e.pool, durationMs: e.durationMs });
      case 'prep_ready':
        return this.broadcast({ type: 'prep_ready', readyIds: e.readyIds });
      case 'battle_start':
        return this.broadcast({ type: 'battle_start', players: this.view(), durationMs: e.durationMs, countdownMs: e.countdownMs });
      case 'challenge':
        return this.clients.get(e.playerId)?.send({ type: 'challenge', id: e.id, kanji: e.kanji, timeLimitMs: e.timeLimitMs });
      case 'answer_result': {
        const { entry } = e;
        return this.clients.get(e.playerId)?.send({
          type: 'answer_result', challengeId: e.challengeId, correct: e.correct, timedOut: e.timedOut,
          kanji: entry.kanji, reading: entry.reading, meaning: entry.meaning,
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
    const maxHp = this.opts.game.maxHp;
    return this.roster.map((p) => ({
      id: p.id,
      name: p.name,
      hp: this.phase === 'lobby' ? maxHp : (this.game?.getHp(p.id) ?? maxHp),
      maxHp,
      combo: this.game?.getCombo(p.id) ?? 0,
    }));
  }

  private broadcastLobby() {
    if (!this.hostId) return;
    this.broadcast({ type: 'lobby', players: this.view(), hostId: this.hostId, settings: this.settings, maxPlayers: this.opts.maxPlayers });
  }

  private broadcast(msg: ServerMessage) {
    for (const c of this.clients.values()) c.send(msg);
  }
}
