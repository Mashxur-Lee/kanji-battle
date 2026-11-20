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
import { PLACEMENT, rankView, rate, START_RATING, type RankView } from '../../shared/ranked';
import { picUrl } from './StudyService';

const zip = promisify(gzip), unzip = promisify(gunzip);
export const REPLAY_DAYS = 14;
/** a replay bigger than this (compressed) isn't kept — a normal match is 10–40 KB */
export const REPLAY_MAX_BYTES = 600 * 1024;
/** 0.9.9.9.9.2: the most replays kept (about 25 KB each: some 75 MB, well inside a free 0.5 GB database) */
export const REPLAYS_KEPT = 3000;
export const isReplayId = (s: string) => /^[\w-]{16}$/.test(s);

export interface LadderRow extends RankView { id: string; name: string; login: string; pic: string | null; place: number }

export class RankedService {
  constructor(private readonly store: Store) {}

  /** a finished match: the ratings of a ranked one move (returns each player's change; empty if it wasn't ranked) */
  async settle(results: MatchResult[]): Promise<Record<string, RatingChange>> {
    const rated = results.filter((r) => r.ranked);
    if (rated.length !== 2) return {};
    const [a, b] = rated;
    const [ua, ub] = await Promise.all([this.store.findById(a.id), this.store.findById(b.id)]);
    if (!ua || !ub) return {};
    const score = a.outcome === 'win' ? 1 : a.outcome === 'draw' ? 0.5 : 0;
    const [da, db] = rate({ rating: ua.rating ?? START_RATING, games: ua.rated ?? 0 }, { rating: ub.rating ?? START_RATING, games: ub.rated ?? 0 }, score);
    const out: Record<string, RatingChange> = {};
    for (const [u, d] of [[ua, da], [ub, db]] as const) {
      const before = u.rating ?? START_RATING, games = (u.rated ?? 0) + 1;
      await this.store.update(u.id, { rating: before + d, rated: games });
      out[u.id] = { before, after: before + d, games };
    }
    return out;
  }

  /** a player's place on the ladder (null until the placement games are played) */
  async view(u: Pick<UserRecord, 'rating' | 'rated'>): Promise<RankView> {
    const games = u.rated ?? 0;
    const rank = games >= PLACEMENT ? (await this.store.ratedAbove(u.rating ?? START_RATING, PLACEMENT)) + 1 : null;
    return rankView(u.rating, games, rank);
  }

  /** the top of the ladder, you, and your friends who play ranked */
  async ladder(me: UserRecord, friendIds: string[], limit = 50) {
    const row = (u: UserRecord, place: number): LadderRow => ({ id: u.id, name: displayName(u), login: u.username, pic: picUrl(u), place, ...rankView(u.rating, u.rated) });
    const top = (await this.store.ladder(limit + 10, PLACEMENT)).filter((u) => !isGuest(u)).slice(0, limit);
    const friends: LadderRow[] = [];
    for (const id of friendIds.slice(0, 200)) {
      const f = await this.store.findById(id);
      if (f && (f.rated ?? 0) > 0) friends.push(row(f, (f.rated ?? 0) >= PLACEMENT ? (await this.store.ratedAbove(f.rating ?? START_RATING, PLACEMENT)) + 1 : 0));
    }
    friends.sort((x, y) => y.rating - x.rating);
    return { top: top.map((u, i) => row(u, i + 1)), me: { ...(await this.view(me)), id: me.id }, friends };
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

  private saved = 0;
  async sweep(now = Date.now()) { const n = await this.store.sweepReplays(now - REPLAY_DAYS * 86_400_000); return n + (await this.store.trimReplays(REPLAYS_KEPT)); }
}
