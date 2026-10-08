import type { BossView, GameMode, Level, PlayerId, PlayerView, ServerMessage } from '../shared/protocol';
import { BOSS_PLAYER_HP, bossHp, hpAgainst } from './Balance';
import { DEFAULT_CONFIG, Game, WRITING_CONFIG, type GameConfig, type GameEvent, type WritingJudge } from './Game';
import { pickPool } from './VocabPool';
import type { VocabEntry } from '../shared/protocol';

/** Transport-agnostic: Room only needs something it can send messages to. */
export interface Client { send(msg: ServerMessage): void }

export interface RoomOptions {
  maxPlayers: number;
  poolSize: number;
  game: GameConfig;
  writingGame: GameConfig;
  /** How long a disconnected player keeps their seat (phones drop sockets when you switch apps). */
  graceLobbyMs: number;
  graceGameMs: number;
}
export const DEFAULT_ROOM_OPTIONS: RoomOptions = {
  maxPlayers: 2, poolSize: 10, game: DEFAULT_CONFIG, writingGame: WRITING_CONFIG,
  graceLobbyMs: 5 * 60_000, graceGameMs: 60_000,
};
export const DEFAULT_LEVELS: Level[] = ['N3', 'N2'];
export const BOSS_NAME = 'Black Dragon';

/** Things the Room needs from the outside world (writing judge, word filter, lifecycle hooks). */
export interface RoomDeps {
  onEmpty: () => void;
  onMemberLeft?: (id: PlayerId) => void;
  judgeWriting?: WritingJudge;
  writableFilter?: (v: VocabEntry) => boolean;
}

type Phase = 'lobby' | 'game' | 'results';
interface Member { id: PlayerId; name: string; levels: Level[]; online: boolean; graceTimer?: ReturnType<typeof setTimeout> }

/**
 * Lobby → game → results → (rematch) game … Owns who is in the room, who is host, who picked which
 * levels, and who is temporarily disconnected. Seats are keyed by account id, so reconnecting
 * (same account) takes the seat back.
 */
export class Room {
  private roster: Member[] = [];
  private clients = new Map<PlayerId, Client>();
  private hostId: PlayerId | null = null;
  private phase: Phase = 'lobby';
  private game?: Game;
  private rematchVotes = new Set<PlayerId>();
  private lastGameOver?: ServerMessage;

  constructor(
    readonly code: string,
    readonly mode: GameMode,
    private readonly deps: RoomDeps,
    private readonly opts: RoomOptions = DEFAULT_ROOM_OPTIONS,
  ) {}

  get minPlayers() { return this.mode === 'boss' ? 1 : this.opts.maxPlayers; }
  has(id: PlayerId) { return this.roster.some((m) => m.id === id); }

  join(id: PlayerId, name: string, client: Client, levels?: Level[]): { ok: true } | { ok: false; error: string } {
    if (this.has(id)) { this.reconnect(id, client); return { ok: true }; }
    if (this.phase !== 'lobby') return { ok: false, error: 'That battle has already started' };
    if (this.roster.length >= this.opts.maxPlayers) return { ok: false, error: 'Room is full' };
    this.roster.push({ id, name: name.slice(0, 16) || 'Player', levels: levels?.length ? levels : [...DEFAULT_LEVELS], online: true });
    this.clients.set(id, client);
    this.hostId ??= id;
    client.send({ type: 'joined', code: this.code, you: id, mode: this.mode });
    this.broadcastLobby();
    return { ok: true };
  }

  /** Same account came back (new socket): hand them the seat and catch them up. */
  reconnect(id: PlayerId, client: Client) {
    const m = this.roster.find((p) => p.id === id);
    if (!m) return;
    clearTimeout(m.graceTimer);
    m.online = true;
    this.clients.set(id, client);
    client.send({ type: 'joined', code: this.code, you: id, mode: this.mode });
    if (this.phase === 'lobby') return this.broadcastLobby();
    if (this.phase === 'results') {
      if (this.lastGameOver) client.send(this.lastGameOver);
      return client.send({ type: 'rematch_status', votes: [...this.rematchVotes] });
    }
    this.sendSnapshot(id, client);
  }

  /** Socket dropped (app switched, network blip). Keep the seat for a while. */
  disconnect(id: PlayerId, client: Client) {
    if (this.clients.get(id) !== client) return; // an older socket closing after a reconnect
    const m = this.roster.find((p) => p.id === id);
    if (!m) return;
    this.clients.delete(id);
    m.online = false;
    const grace = this.phase === 'game' ? this.opts.graceGameMs : this.opts.graceLobbyMs;
    m.graceTimer = setTimeout(() => this.leave(id), grace);
    if (this.phase === 'lobby') this.broadcastLobby();
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
    if (this.roster.length < this.minPlayers) return this.clients.get(by)?.send({ type: 'error', message: 'Waiting for an opponent' });
    this.startGame();
  }

  ready(id: PlayerId) { this.game?.markReady(id); }
  answer(id: PlayerId, challengeId: number, text: string) { this.game?.submit(id, challengeId, text); }
  write(id: PlayerId, challengeId: number, chars: Parameters<Game['submitWriting']>[2]) { this.game?.submitWriting(id, challengeId, chars); }
  skip(id: PlayerId, challengeId: number) { this.game?.skip(id, challengeId); }

  rematch(id: PlayerId) {
    if (this.phase !== 'results') return;
    if (this.roster.length < this.minPlayers) {
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
    const m = this.roster.find((p) => p.id === id);
    if (!m) return;
    clearTimeout(m.graceTimer);
    this.clients.delete(id);
    // Forfeit while the leaver is still on the roster, so the results screen can name them.
    const wasInGame = this.phase === 'game';
    if (wasInGame) this.game?.forfeit(id);
    this.roster = this.roster.filter((p) => p.id !== id);
    this.rematchVotes.delete(id);
    if (this.hostId === id) this.hostId = this.roster[0]?.id ?? null;
    this.deps.onMemberLeft?.(id);

    if (this.roster.length === 0) {
      this.game?.dispose();
      return this.deps.onEmpty();
    }
    if (wasInGame) return;
    if (this.phase === 'lobby') this.broadcastLobby();
    else this.broadcast({ type: 'rematch_status', votes: [...this.rematchVotes] });
  }

  // ── internals ─────────────────────────────────────────────────────────────

  /** Duels: your HP is set by how hard your opponents hit (their levels). Boss mode: everyone has 1000. */
  private hpFor(id: PlayerId): number {
    if (this.mode === 'boss') return BOSS_PLAYER_HP;
    const opponents = this.roster.filter((p) => p.id !== id);
    if (opponents.length === 0) return hpAgainst(DEFAULT_LEVELS);
    return Math.round(opponents.reduce((s, o) => s + hpAgainst(o.levels), 0) / opponents.length);
  }

  private startGame() {
    this.game?.dispose();
    this.rematchVotes.clear();
    this.lastGameOver = undefined;
    this.phase = 'game';
    const filter = this.mode === 'writing' ? this.deps.writableFilter : undefined;
    const setups = this.roster.map((p) => ({ id: p.id, pool: pickPool(p.levels, this.opts.poolSize, Math.random, undefined, filter), maxHp: this.hpFor(p.id) }));
    // a level combination with no writable words would leave someone with an empty pool
    for (const s of setups) {
      if (s.pool.length === 0) {
        this.phase = 'lobby';
        const name = this.roster.find((p) => p.id === s.id)?.name;
        this.broadcast({ type: 'error', message: `${name}'s levels have no words for this mode — pick other levels` });
        return;
      }
    }
    this.game = new Game(
      setups,
      (e) => this.onGameEvent(e),
      this.mode === 'writing' ? this.opts.writingGame : this.opts.game,
      Math.random,
      Date.now,
      {
        mode: this.mode,
        boss: this.mode === 'boss' ? { name: BOSS_NAME, maxHp: bossHp(this.roster.map((p) => p.levels)) } : undefined,
        judgeWriting: this.deps.judgeWriting,
      },
    );
    this.game.start();
  }

  private sendSnapshot(id: PlayerId, client: Client) {
    if (!this.game) return;
    const snap = this.game.snapshot(id);
    if (snap.prep) {
      client.send({ type: 'prep', pool: snap.prep.pool, durationMs: snap.prep.leftMs, readyIds: snap.prep.readyIds, players: this.view() });
    } else if (snap.battle) {
      client.send({
        type: 'battle_start', mode: this.mode, players: this.view(), boss: this.bossView(),
        durationMs: snap.battle.leftMs, countdownMs: snap.battle.countdownLeftMs,
      });
      if (snap.challenge) {
        const c = snap.challenge;
        client.send({ type: 'challenge', id: c.id, kanji: c.kanji, answer: c.answerMode, timeLimitMs: c.timeLimitMs, meaning: c.meaning, charCount: c.charCount, flashMs: c.flashMs });
      }
    }
  }

  private onGameEvent(e: GameEvent) {
    switch (e.type) {
      case 'prep':
        return this.clients.get(e.playerId)?.send({ type: 'prep', pool: e.pool, durationMs: e.durationMs, readyIds: [], players: this.view() });
      case 'prep_ready':
        return this.broadcast({ type: 'prep_ready', readyIds: e.readyIds });
      case 'battle_start':
        return this.broadcast({ type: 'battle_start', mode: this.mode, players: this.view(), boss: this.bossView(), durationMs: e.durationMs, countdownMs: e.countdownMs });
      case 'challenge':
        return this.clients.get(e.playerId)?.send({
          type: 'challenge', id: e.id, kanji: e.kanji, answer: e.answerMode, timeLimitMs: e.timeLimitMs,
          meaning: e.meaning, charCount: e.charCount, flashMs: e.flashMs,
        });
      case 'answer_result': {
        const { entry } = e;
        return this.clients.get(e.playerId)?.send({
          type: 'answer_result', challengeId: e.challengeId, correct: e.correct, timedOut: e.timedOut, skipped: e.skipped,
          kanji: entry.kanji, reading: entry.romaji ?? entry.reading, meaning: entry.meaning,
          damage: e.damage, combo: e.combo, responseMs: e.responseMs, nextInMs: e.nextInMs, recognized: e.recognized,
        });
      }
      case 'battle_update':
        return this.broadcast({ type: 'battle_update', players: this.view(), boss: this.bossView(), event: e.event });
      case 'game_over': {
        this.phase = 'results';
        const msg: ServerMessage = {
          type: 'game_over', mode: this.mode, winnerId: e.winnerId, teamWon: e.teamWon, reason: e.reason,
          players: this.view(), boss: this.bossView(), stats: e.stats,
        };
        this.lastGameOver = msg;
        return this.broadcast(msg);
      }
    }
  }

  private bossView(): BossView | null { return this.game?.bossView() ?? null; }

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
        online: p.online,
      };
    });
  }

  private broadcastLobby() {
    if (!this.hostId) return;
    this.broadcast({ type: 'lobby', players: this.view(), hostId: this.hostId, maxPlayers: this.opts.maxPlayers, minPlayers: this.minPlayers, mode: this.mode });
  }

  private broadcast(msg: ServerMessage) {
    for (const c of this.clients.values()) c.send(msg);
  }
}
