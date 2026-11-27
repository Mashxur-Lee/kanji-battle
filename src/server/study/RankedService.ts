// 0.9.9.9.9: the ranked ladder and match replays.
//  · settle: after a ranked 1v1 (the online queue's first game in a room, two people), both ratings move (Elo —
//    shared/ranked.ts). A forfeit is a loss for the one who left.
//  · replays: every battle (not Deck Duel) is recorded as it is played (Room.ts: the tape) and kept for two weeks,
//    compressed. Anyone with the link can watch it (the id is long and random, like a photo's).
//  · the ladder: the top players (after their placement games), your own place, and your friends'.
import { randomBytes } from 'node:crypto';
import { promisify } from 'node:util';
import { gunzip, gzip } from 'node:zlib';
import { isGuest } from '../auth/AuthService';
import type { Store, UserRecord } from '../db/Store';
import { displayName } from '../db/Store';
import type { MatchResult, ReplayData } from '../Room';
import type { RatingChange } from '../../shared/protocol';
import { isRankedMode, PLACEMENT, RANKED_MODES, rankView, rate, START_RATING, type RankedMode, type RankView } from '../../shared/ranked';
import { picUrl } from './StudyService';

const zip = promisify(gzip), unzip = promisify(gunzip);
// 0.9.9.9.9.5: a week (was two) — the owner: "keep the replays for 1 week only"; one a player saves to their account
// stays for good (SAVED_REPLAYS_MAX each)
export const REPLAY_DAYS = 7;
export const SAVED_REPLAYS_MAX = 15;
/** a replay bigger than this (compressed) isn't kept — a normal match is 10–40 KB */
export const REPLAY_MAX_BYTES = 600 * 1024;
/** 0.9.9.9.9.2: the most replays kept (about 25 KB each: some 75 MB, well inside a free 0.5 GB database) */
export const REPLAYS_KEPT = 3000;
export const isReplayId = (s: string) => /^[\w-]{16}$/.test(s);

export interface LadderRow extends RankView { id: string; name: string; login: string; pic: string | null; place: number }

/** 0.9.9.9.9.6 (round 6): a player's rating in one ranked mode (1000, no games, until they play it) */
export const ratingIn = (u: Pick<UserRecord, 'ratings'>, mode: RankedMode) => ({ rating: u.ratings?.[mode]?.r ?? START_RATING, games: u.ratings?.[mode]?.g ?? 0 });

export class RankedService {
  constructor(private readonly store: Store) {}

  /** (round 6) a mode's rating moved: kept with the others (and the whole-game rating, the profile's, moves along) */
  private async put(u: UserRecord, mode: RankedMode, after: number, games: number) {
    const fresh = (await this.store.findById(u.id)) ?? u;
    await this.store.update(u.id, { ratings: { ...(fresh.ratings ?? {}), [mode]: { r: after, g: games } } });
  }

  /** a finished match: the ratings of a ranked one move — in its mode (returns each player's change; empty if it wasn't ranked) */
  async settle(results: MatchResult[], mode: string = 'rapid'): Promise<Record<string, RatingChange>> {
    const rated = results.filter((r) => r.ranked);
    if (rated.length !== 2 || !isRankedMode(mode)) return {};
    const [a, b] = rated;
    const [ua, ub] = await Promise.all([this.store.findById(a.id), this.store.findById(b.id)]);
    if (!ua || !ub) return {};
    const score = a.outcome === 'win' ? 1 : a.outcome === 'draw' ? 0.5 : 0;
    const [da, db] = rate(ratingIn(ua, mode), ratingIn(ub, mode), score);
    // (the profile's overall rating moves as before)
    const [oa, ob] = rate({ rating: ua.rating ?? START_RATING, games: ua.rated ?? 0 }, { rating: ub.rating ?? START_RATING, games: ub.rated ?? 0 }, score);
    const out: Record<string, RatingChange> = {};
    for (const [u, d, o] of [[ua, da, oa], [ub, db, ob]] as const) {
      const { rating: before, games: g } = ratingIn(u, mode);
      await this.store.update(u.id, { rating: (u.rating ?? START_RATING) + o, rated: (u.rated ?? 0) + 1 });
      await this.put(u, mode, before + d, g + 1);
      out[u.id] = { before, after: before + d, games: g + 1, mode };
    }
    return out;
  }

  /**
   * 0.9.9.9.9.6 (round 4): a game of 2–8 (Grammar Clash, ranked): the final order, best first. Each pair of players
   * counts as a game between them, the changes summed and divided by the others' number (one game's worth in all).
   */
  async settleField(order: string[], mode: RankedMode = 'clash'): Promise<Record<string, RatingChange>> {
    const users = (await Promise.all(order.map((id) => this.store.findById(id)))).filter((u): u is NonNullable<typeof u> => !!u);
    if (users.length < 2) return {};
    const side = (u: (typeof users)[number]) => ratingIn(u, mode);
    const delta = new Map<string, number>(users.map((u) => [u.id, 0]));
    for (let a = 0; a < users.length; a++) for (let b = a + 1; b < users.length; b++) {
      const [da, db] = rate(side(users[a]), side(users[b]), 1); // a finished above b
      delta.set(users[a].id, delta.get(users[a].id)! + da); delta.set(users[b].id, delta.get(users[b].id)! + db);
    }
    const out: Record<string, RatingChange> = {};
    for (const u of users) {
      const { rating: before, games: g } = ratingIn(u, mode);
      const after = Math.max(100, before + Math.round(delta.get(u.id)! / (users.length - 1)));
      await this.put(u, mode, after, g + 1);
      await this.store.update(u.id, { rated: (u.rated ?? 0) + 1 });
      out[u.id] = { before, after, games: g + 1, mode };
    }
    return out;
  }
  /** a player's place on the ladder (null until the placement games are played) */
  async view(u: Pick<UserRecord, 'rating' | 'rated'>): Promise<RankView> {
    const games = u.rated ?? 0;
    const rank = games >= PLACEMENT ? (await this.store.ratedAbove(u.rating ?? START_RATING, PLACEMENT)) + 1 : null;
    return rankView(u.rating, games, rank);
  }
  /** (round 6) a player's place in one mode */
  async viewIn(u: Pick<UserRecord, 'ratings'>, mode: RankedMode): Promise<RankView> {
    const { rating, games } = ratingIn(u, mode);
    const rank = games >= PLACEMENT ? (await this.store.ratedAboveIn(mode, rating, PLACEMENT)) + 1 : null;
    return rankView(rating, games, rank);
  }
  /** (round 6) your rank in every ranked mode (the queue's Ranked side shows them all) */
  async mine(u: UserRecord) {
    const out = {} as Record<RankedMode, RankView>;
    for (const m of RANKED_MODES) out[m] = await this.viewIn(u, m);
    return out;
  }

  /** the top of the ladder, you, and your friends who play ranked */
  async ladder(me: UserRecord, friendIds: string[], limit = 50, rawMode: unknown = 'rapid') {
    // 0.9.9.9.9.6 (round 6): one mode's ladder (Rapid, Deck Duel, Kanji chess, Grammar Clash), and your rank in each
    const mode: RankedMode = isRankedMode(rawMode) ? rawMode : 'rapid';
    const row = (u: UserRecord, place: number): LadderRow => { const x = ratingIn(u, mode); return { id: u.id, name: displayName(u), login: u.username, pic: picUrl(u), place, ...rankView(x.rating, x.games) }; };
    const top = (await this.store.ladderIn(mode, limit + 10, PLACEMENT)).filter((u) => !isGuest(u)).slice(0, limit);
    const friends: LadderRow[] = [];
    for (const id of friendIds.slice(0, 200)) {
      const f = await this.store.findById(id);
      const x = f && ratingIn(f, mode);
      if (f && x && x.games > 0) friends.push(row(f, x.games >= PLACEMENT ? (await this.store.ratedAboveIn(mode, x.rating, PLACEMENT)) + 1 : 0));
    }
    friends.sort((x, y) => y.rating - x.rating);
    return { mode, top: top.map((u, i) => row(u, i + 1)), me: { ...(await this.viewIn(me, mode)), id: me.id }, modes: await this.mine(me), friends };
  }

  /** keeps a replay; its id (null: too big) */
  async saveReplay(data: ReplayData): Promise<string | null> {
    const bytes = await zip(Buffer.from(JSON.stringify(data)));
    if (bytes.length > REPLAY_MAX_BYTES) return null;
    const id = randomBytes(12).toString('base64url');
    await this.store.saveReplay(id, data.at, bytes);
    // 0.9.9.9.9.2: at most REPLAYS_KEPT (the oldest go first) — two weeks of a busy game would fill the free database
    if (++this.saved % 25 === 0) await this.store.trimReplays(REPLAYS_KEPT).catch(() => 0);
    return id;
  }

  async replay(id: string): Promise<ReplayData | null> {
    if (!isReplayId(id)) return null;
    const bytes = await this.store.replay(id);
    if (!bytes) return null;
    try { return JSON.parse((await unzip(bytes)).toString('utf8')) as ReplayData; } catch { return null; }
  }

  // 0.9.9.9.9.5: replays saved to an account
  async savedList(userId: string) { return { saved: await this.store.savedReplays(userId), max: SAVED_REPLAYS_MAX }; }
  /** 'gone': the replay was already removed; 'full': SAVED_REPLAYS_MAX saved */
  async saveFor(userId: string, id: string, label: string): Promise<'ok' | 'gone' | 'full'> {
    if (!isReplayId(id)) return 'gone';
    const list = await this.store.savedReplays(userId);
    if (list.some((r) => r.id === id)) return 'ok';
    if (list.length >= SAVED_REPLAYS_MAX) return 'full';
    const rp = await this.replay(id);
    if (!rp) return 'gone';
    await this.store.addSavedReplay(userId, { id, savedAt: Date.now(), at: rp.at, mode: String(rp.mode), label: label.replace(/[\u0000-\u001f]/g, '').trim().slice(0, 80) });
    return 'ok';
  }
  async unsaveFor(userId: string, id: string) { return this.store.removeSavedReplay(userId, id); }

  private saved = 0;
  async sweep(now = Date.now()) { const n = await this.store.sweepReplays(now - REPLAY_DAYS * 86_400_000); return n + (await this.store.trimReplays(REPLAYS_KEPT)); }
}
