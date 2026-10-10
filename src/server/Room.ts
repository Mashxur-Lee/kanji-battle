import { Bot, botName, isBotLevel, type BotHost } from './Bot';
import { CRIT_BASE } from '../shared/progress';
import { CHAT_MAX_LENGTH, type BossView, type MatchDetail, type ChatMessage, type DrawnChar, type GameMode, type Level, type PlayerId, type PlayerView, type ServerMessage, type VocabEntry } from '../shared/protocol';
import { avatarFor, levelOf, type MatchOutcome } from '../shared/progress';
import { BOSS_PARTY_SIZE, BOSS_PLAYER_HP, bossHp, hpAgainst, rapidHp } from './Balance';
import { DEFAULT_CONFIG, Game, WRITING_CONFIG, type GameConfig, type GameEvent, type Match, type WritingJudge } from './Game';
import { RapidGame } from './RapidGame';
import { buildDraftPool, DeckGame } from './DeckGame';
import { VOCAB } from './vocab';
import { pickPool } from './VocabPool';

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

/** Per-player progress the room shows and uses (crit chance, account level). */
export interface MemberProfile { crit: number; xp: number; pic?: string | null; flame?: string; staff?: string }

/** `forfeited`: someone gave up or left — nobody gets XP (stops win-trading between accounts). */
export interface MatchResult {
  id: PlayerId; outcome: MatchOutcome; accuracy: number; missed: string[]; forfeited: boolean; vsAi: boolean;
  /** words met in the match that join the player's All spells (Deck Duel) */
  seen?: string[];
  /** what goes into the player's match history */
  record?: Omit<MatchDetail, 'id'>;
}
export type MatchEndHook = (mode: GameMode, results: MatchResult[]) => Promise<Record<PlayerId, { gained: number; xp: number; crit: number }>>;

/** Things the Room needs from the outside world. */
export interface RoomDeps {
  onEmpty: () => void;
  onMemberLeft?: (id: PlayerId) => void;
  onMatchEnd?: MatchEndHook;
  judgeWriting?: WritingJudge;
  /** Deck Duel's extra-forgiving judge (falls back to judgeWriting) */
  judgeDeck?: WritingJudge;
  writableFilter?: (v: VocabEntry) => boolean;
}

type Phase = 'lobby' | 'game' | 'results';
interface Member {
  id: PlayerId; name: string; levels: Level[]; online: boolean; profile: MemberProfile; ready: boolean;
  graceTimer?: ReturnType<typeof setTimeout>;
  rtt?: number; // last measured round trip (ms)
  bot?: Bot; // an AI player (no socket)
  lastChatAt?: number;
}

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
  private game?: Match;
  private rematchVotes = new Set<PlayerId>();
  private chatLog: ChatMessage[] = [];
  private nextChatId = 1;
  private lastGameOver?: ServerMessage;

  constructor(
    readonly code: string,
    readonly mode: GameMode,
    private readonly deps: RoomDeps,
    private readonly opts: RoomOptions = DEFAULT_ROOM_OPTIONS,
  ) {}

  /** Boss mode is a party of up to 4 against the dragon; the duels are 1v1. */
  get maxPlayers() { return this.mode === 'boss' ? BOSS_PARTY_SIZE : this.opts.maxPlayers; }
  get minPlayers() { return this.mode === 'boss' ? 1 : this.opts.maxPlayers; }
  has(id: PlayerId) { return this.roster.some((m) => m.id === id); }

  join(id: PlayerId, name: string, client: Client, levels?: Level[], profile: MemberProfile = { crit: 0, xp: 0 }): { ok: true } | { ok: false; error: string } {
    if (this.has(id)) { this.setProfile(id, profile); this.reconnect(id, client); return { ok: true }; }
    if (this.phase !== 'lobby') return { ok: false, error: 'That battle has already started' };
    if (this.roster.length >= this.maxPlayers) return { ok: false, error: 'Room is full' };
    const shared = this.mode === 'rapid' ? this.roster.find((p) => !p.bot)?.levels : undefined; // Rapid: join the room's levels
    this.roster.push({ id, name: name.slice(0, 32) || 'Player', levels: shared ? [...shared] : levels?.length ? levels : [...DEFAULT_LEVELS], online: true, profile, ready: false });
    this.clients.set(id, client);
    this.hostId ??= id;
    client.send({ type: 'joined', code: this.code, you: id, mode: this.mode });
    if (this.chatLog.length) client.send({ type: 'chat', messages: this.chatLog });
    this.broadcastLobby();
    this.broadcastNet();
    return { ok: true };
  }

  setProfile(id: PlayerId, profile: MemberProfile) {
    const m = this.roster.find((p) => p.id === id);
    if (m) m.profile = profile;
  }

  /** Same account came back (new socket): hand them the seat and catch them up. */
  reconnect(id: PlayerId, client: Client) {
    const m = this.roster.find((p) => p.id === id);
    if (!m) return;
    clearTimeout(m.graceTimer);
    m.online = true;
    this.clients.set(id, client);
    client.send({ type: 'joined', code: this.code, you: id, mode: this.mode });
    if (this.chatLog.length) client.send({ type: 'chat', messages: this.chatLog });
    this.broadcastNet();
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
    this.broadcastNet();
    if (this.phase === 'lobby') this.broadcastLobby();
  }

  /**
   * Every player picks their own levels — they decide their own words and how hard they hit.
   * Rapid is the exception: both race on the same kanji, so the room has one shared set of levels
   * (whoever changes it changes it for everyone).
   */
  setLevels(id: PlayerId, levels: Level[]) {
    const m = this.roster.find((p) => p.id === id);
    if (!m || this.phase === 'game' || levels.length === 0) return;
    if (this.mode === 'rapid') {
      for (const p of this.roster) if (!p.bot) p.levels = [...levels];
    } else m.levels = levels;
    if (this.phase === 'lobby') this.broadcastLobby();
  }

  start(by: PlayerId) {
    if (by !== this.hostId || this.phase !== 'lobby' || this.mode === 'deck') return; // Deck Duel starts on Ready
    if (this.roster.length < this.minPlayers) return this.clients.get(by)?.send({ type: 'error', message: 'Waiting for an opponent' });
    this.startGame();
  }

  ready(id: PlayerId) { this.game?.markReady(id); }

  // ── AI players ────────────────────────────────────────────────────────────
  private nextBot = 0;
  /** Host adds an AI player (knowledge N5–N1) to the lobby: an opponent in duels, a teammate vs the dragon. */
  addBot(by: PlayerId, level: unknown) {
    if (by !== this.hostId || this.phase !== 'lobby' || !isBotLevel(level)) return;
    if (this.roster.length >= this.maxPlayers) return this.clients.get(by)?.send({ type: 'error', message: 'Room is full' });
    const id = `ai-${this.code}-${++this.nextBot}`;
    const bot = new Bot(id, level, this.botHost());
    this.roster.push({ id, name: botName(this.nextBot - 1, level), levels: [level], online: true, profile: { crit: CRIT_BASE, xp: 0 }, ready: true, rtt: 1, bot });
    this.broadcastLobby();
    this.broadcastNet();
  }
  removeBot(by: PlayerId, botId: unknown) {
    const m = this.roster.find((p) => p.id === botId && p.bot);
    if (by !== this.hostId || this.phase !== 'lobby' || !m) return;
    m.bot!.dispose();
    this.roster = this.roster.filter((p) => p !== m);
    this.broadcastLobby();
  }
  private botHost(): BotHost {
    return {
      mode: () => this.mode,
      peek: (id) => this.game?.peek(id) ?? null,
      deckView: (id) => (this.game instanceof DeckGame ? this.game.viewFor(id) : null),
      ready: (id) => this.ready(id),
      answer: (id, cid, text) => this.answer(id, cid, text),
      skip: (id, cid) => this.skip(id, cid),
      deckCharacter: (id, ch) => this.deckCharacter(id, ch),
      deckPick: (id, c) => this.deckPick(id, c),
      deckPlay: (id, c) => this.deckPlay(id, c),
      deckAbility: (id) => this.deckAbility(id),
      deckCastReady: (id, c) => this.deckCastReady(id, c),
      deckCastGo: (id, c) => this.deckCastGo(id, c),
    };
  }
  private get humans() { return this.roster.filter((p) => !p.bot); }

  /** Connection quality for everyone in the room (shown as signal bars next to names). */
  setRtt(id: PlayerId, rtt: number) {
    const m = this.roster.find((p) => p.id === id);
    if (!m) return;
    m.rtt = Math.round(rtt);
    this.broadcastNet();
  }
  private broadcastNet() {
    this.broadcast({ type: 'net', rtt: Object.fromEntries(this.roster.map((p) => [p.id, p.online && p.rtt !== undefined ? p.rtt : null])) });
  }

  /** Room chat (shown in Deck Duel). Plain text only, short, and at most ~1 message per 0.7 s per player. */
  chat(id: PlayerId, raw: string, now = Date.now()) {
    const m = this.roster.find((p) => p.id === id);
    if (!m) return;
    const text = raw.replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, CHAT_MAX_LENGTH);
    if (!text || (m.lastChatAt !== undefined && now - m.lastChatAt < 700)) return;
    m.lastChatAt = now;
    const msg: ChatMessage = { id: this.nextChatId++, from: id, name: m.name, text, at: now };
    this.chatLog.push(msg);
    if (this.chatLog.length > 50) this.chatLog.shift();
    this.broadcast({ type: 'chat', messages: [msg] });
  }

  /** Deck Duel lobby: no levels to pick, just Ready / Not ready. Starts once everyone is ready. */
  setLobbyReady(id: PlayerId, ready: boolean) {
    const m = this.roster.find((p) => p.id === id);
    if (!m || this.phase !== 'lobby' || this.mode !== 'deck') return;
    m.ready = !!ready;
    if (this.roster.length >= this.minPlayers && this.roster.every((p) => p.ready)) return this.startGame();
    this.broadcastLobby();
  }
  deckCharacter(id: PlayerId, ch: unknown) { if (this.game instanceof DeckGame) this.game.chooseCharacter(id, ch); }
  deckPick(id: PlayerId, cardId: unknown) { if (this.game instanceof DeckGame) this.game.pick(id, cardId); }
  deckPlay(id: PlayerId, cardId: unknown) { if (this.game instanceof DeckGame) this.game.play(id, cardId); }
  deckAbility(id: PlayerId) { if (this.game instanceof DeckGame) this.game.ability(id); }
  deckCastReady(id: PlayerId, castId: unknown) { if (this.game instanceof DeckGame) this.game.castReady(id, castId); }
  deckCastGo(id: PlayerId, castId: unknown) { if (this.game instanceof DeckGame) this.game.castGo(id, castId); }
  private lastInk = new Map<PlayerId, number>();
  /** Relay a player's handwriting (in progress) to the others, so they can watch the spell being written. */
  deckInk(id: PlayerId, castId: number, strokes: DrawnChar, cells: number) {
    if (!(this.game instanceof DeckGame) || !this.game.canShareInk(id, castId)) return;
    const now = Date.now();
    if (now - (this.lastInk.get(id) ?? 0) < 80) return; // at most ~12 updates a second
    this.lastInk.set(id, now);
    const msg: ServerMessage = { type: 'deck_ink', castId, strokes, cells: Math.max(1, Math.min(4, Math.round(cells))) };
    for (const [pid, c] of this.clients) if (pid !== id) c.send(msg);
  }
  answer(id: PlayerId, challengeId: number, text: string) { this.game?.submit(id, challengeId, text); }
  write(id: PlayerId, challengeId: number, chars: DrawnChar[]) { this.game?.submitWriting(id, challengeId, chars); }
  skip(id: PlayerId, challengeId: number) { this.game?.skip(id, challengeId); }

  /** Give up the battle but stay in the room: everyone goes to the results screen (mistakes + rematch). */
  forfeit(id: PlayerId) {
    if (this.phase !== 'game' || !this.has(id)) return;
    this.game?.forfeit(id);
    // boss mode: once every human has given up (or fallen), the AI teammates give up too
    if (this.game && !this.game.isOver && this.humans.every((h) => this.game!.getHp(h.id) <= 0)) {
      for (const p of this.roster) if (p.bot) this.game.forfeit(p.id);
    }
  }

  /** "Back" during the study phase: the match is called off and everyone returns to the lobby. */
  backToLobby(id: PlayerId) {
    if (this.phase !== 'game' || !this.game) return;
    // study phase of the classic modes, or hero pick / first draft of a Deck Duel (nothing played yet)
    const early = this.game instanceof DeckGame ? this.game.canReturnToLobby() : this.game.snapshot(id).phase === 'prep';
    if (!early) return;
    this.game.dispose();
    for (const p of this.roster) p.bot?.dispose();
    this.game = undefined;
    this.phase = 'lobby';
    const name = this.roster.find((p) => p.id === id)?.name ?? 'Someone';
    this.broadcastLobby();
    this.broadcast({ type: 'notice', message: `${name} went back to the lobby.` });
  }

  rematch(id: PlayerId) {
    if (this.phase !== 'results') return;
    if (this.roster.length < this.minPlayers) {
      // Opponent left: go back to the lobby so someone new can join with the same code.
      this.phase = 'lobby';
      this.rematchVotes.clear();
      return this.broadcastLobby();
    }
    this.rematchVotes.add(id);
    for (const p of this.roster) if (p.bot) this.rematchVotes.add(p.id); // AI is always up for another round
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
    if (this.hostId === id) this.hostId = this.humans[0]?.id ?? null;
    this.deps.onMemberLeft?.(id);

    if (this.humans.length === 0) {
      // only AI left: close the room
      for (const p of this.roster) p.bot?.dispose();
      this.roster = [];
      this.game?.dispose();
      return this.deps.onEmpty();
    }
    if (wasInGame && this.phase !== 'lobby') return;
    if (this.phase === 'lobby') this.broadcastLobby();
    else this.broadcast({ type: 'rematch_status', votes: [...this.rematchVotes] });
  }

  // ── internals ─────────────────────────────────────────────────────────────

  /** Duels: your HP is set by how hard your opponents hit (their levels). Boss mode: everyone has 1000. */
  private hpFor(id: PlayerId): number {
    if (this.mode === 'boss') return BOSS_PLAYER_HP;
    if (this.mode === 'rapid') return rapidHp(this.unionLevels());
    const opponents = this.roster.filter((p) => p.id !== id);
    if (opponents.length === 0) return hpAgainst(DEFAULT_LEVELS);
    return Math.round(opponents.reduce((s, o) => s + hpAgainst(o.levels), 0) / opponents.length);
  }

  /** Rapid's shared levels (AI players don't add their own: they only decide how much the AI knows). */
  private unionLevels(): Level[] {
    const humans = this.roster.filter((p) => !p.bot);
    return [...new Set((humans.length ? humans : this.roster).flatMap((p) => p.levels))];
  }

  private startGame() {
    this.game?.dispose();
    this.rematchVotes.clear();
    this.lastGameOver = undefined;
    for (const p of this.roster) p.ready = !!p.bot; // AI is always ready
    const emit = (e: GameEvent) => this.onGameEvent(e);
    if (this.mode === 'deck') {
      const judge = this.deps.judgeDeck ?? this.deps.judgeWriting;
      if (!judge) return;
      const writable = this.deps.writableFilter ?? (() => true);
      this.phase = 'game';
      this.game = new DeckGame(this.roster.map((p) => ({ id: p.id, name: p.name, crit: p.profile.crit, pic: p.profile.pic ?? null, flame: p.bot ? 'purple' : p.profile.flame ?? 'blue', staff: p.bot ? 'storm' : p.profile.staff ?? 'verdant' })), () => buildDraftPool(VOCAB, writable, Math.random), emit, judge);
      this.game.start();
      return;
    }
    if (this.mode === 'rapid') {
      const pool = pickPool(this.unionLevels(), 40);
      this.phase = 'game';
      this.game = new RapidGame(this.roster.map((p) => ({ id: p.id, maxHp: this.hpFor(p.id), crit: p.profile.crit })), pool, emit, this.opts.game);
      this.game.start();
      return;
    }
    const filter = this.mode === 'writing' ? this.deps.writableFilter : undefined;
    const setups = this.roster.map((p) => ({ id: p.id, pool: pickPool(p.levels, this.opts.poolSize, Math.random, undefined, filter), maxHp: this.hpFor(p.id), crit: p.profile.crit }));
    // a level combination with no writable words would leave someone with an empty pool
    for (const s of setups) {
      if (s.pool.length === 0) {
        const name = this.roster.find((p) => p.id === s.id)?.name;
        this.broadcast({ type: 'error', message: `${name}'s levels have no words for this mode — pick other levels` });
        return;
      }
    }
    this.phase = 'game';
    this.game = new Game(
      setups, emit,
      this.mode === 'writing' ? this.opts.writingGame : this.opts.game,
      Math.random, Date.now,
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
    if (this.game instanceof DeckGame) return client.send({ type: 'deck_state', view: this.game.viewFor(id) });
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
        client.send({ type: 'challenge', id: c.id, kanji: c.kanji, answer: c.answerMode, timeLimitMs: c.timeLimitMs, meaning: c.meaning, reading: c.reading, charCount: c.charCount, flashMs: c.flashMs });
      }
    }
  }

  private onGameEvent(e: GameEvent) {
    for (const p of this.roster) p.bot?.onEvent(e); // AI players react (always with a delay)
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
          meaning: e.meaning, reading: e.reading, charCount: e.charCount, flashMs: e.flashMs,
        });
      case 'answer_result': {
        const { entry } = e;
        return this.clients.get(e.playerId)?.send({
          type: 'answer_result', challengeId: e.challengeId, correct: e.correct, timedOut: e.timedOut, skipped: e.skipped,
          kanji: entry.kanji, reading: entry.romaji ?? entry.reading, meaning: entry.meaning,
          damage: e.damage, combo: e.combo, responseMs: e.responseMs, nextInMs: e.nextInMs, recognized: e.recognized,
          crit: e.crit, retry: e.retry, beaten: e.beaten,
        });
      }
      case 'deck_state':
        return this.clients.get(e.playerId)?.send({ type: 'deck_state', view: e.view });
      case 'deck_event':
        return this.broadcast({ type: 'deck_event', event: e.event });
      case 'battle_update':
        return this.broadcast({ type: 'battle_update', players: this.view(), boss: this.bossView(), event: e.event });
      case 'game_over': {
        this.phase = 'results';
        const msg: ServerMessage = {
          type: 'game_over', mode: this.mode, winnerId: e.winnerId, teamWon: e.teamWon, reason: e.reason,
          players: this.view(), boss: this.bossView(), stats: e.stats,
        };
        this.lastGameOver = msg;
        this.broadcast(msg);
        void this.awardProgress(e);
        return;
      }
    }
  }

  /** XP for everyone (win/loss + accuracy), missed words into each player's "Struggling spells". */
  private async awardProgress(e: Extract<GameEvent, { type: 'game_over' }>) {
    if (!this.deps.onMatchEnd) return;
    const vsAi = this.roster.some((p) => p.bot);
    const players = this.view();
    const at = Date.now();
    const characterOf = (id: PlayerId) => this.game?.heroOf?.(id) ?? players.find((v) => v.id === id)?.avatar ?? 'wizard';
    const results: MatchResult[] = this.roster.filter((p) => e.stats[p.id] && !p.bot).map((p) => {
      const outcome: MatchOutcome = e.teamWon !== null ? (e.teamWon ? 'win' : 'loss') : e.winnerId === null ? 'draw' : e.winnerId === p.id ? 'win' : 'loss';
      return {
        id: p.id,
        outcome,
        accuracy: e.stats[p.id].accuracy,
        missed: e.missed[p.id] ?? [],
        seen: e.seen ?? [],
        forfeited: e.reason === 'forfeit',
        vsAi,
        record: {
          mode: this.mode, outcome, character: characterOf(p.id), at,
          opponents: this.roster.filter((o) => o.id !== p.id).map((o) => ({ id: o.id, name: o.name, bot: !!o.bot, character: characterOf(o.id) })),
          you: p.id, players, winnerId: e.winnerId, teamWon: e.teamWon, reason: e.reason, stats: e.stats,
        },
      };
    });
    try {
      const out = await this.deps.onMatchEnd(this.mode, results);
      for (const [id, r] of Object.entries(out)) {
        const m = this.roster.find((p) => p.id === id);
        const before = m ? levelOf(m.profile.xp) : 0;
        if (m) m.profile = { ...m.profile, crit: r.crit, xp: r.xp };
        this.clients.get(id)?.send({ type: 'progress', gained: r.gained, xp: r.xp, level: levelOf(r.xp), levelUp: levelOf(r.xp) > before, crit: r.crit });
      }
    } catch (err) {
      console.error('could not save match results', err);
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
        avatar: avatarFor(p.levels),
        crit: p.profile.crit,
        level: levelOf(p.profile.xp),
        bot: p.bot?.level ?? null,
        pic: p.profile.pic ?? null,
        flame: p.bot ? 'purple' : p.profile.flame ?? 'blue',
        staff: p.bot ? 'storm' : p.profile.staff ?? 'verdant',
        ready: p.ready,
      };
    });
  }

  private broadcastLobby() {
    if (!this.hostId) return;
    this.broadcast({ type: 'lobby', players: this.view(), hostId: this.hostId, maxPlayers: this.maxPlayers, minPlayers: this.minPlayers, mode: this.mode });
  }

  private broadcast(msg: ServerMessage) {
    for (const c of this.clients.values()) c.send(msg);
  }
}
