// 0.9.9.9.9: the ranked ladder (Elo for 1v1 from the online queue), watching a friend's game, replays you can share.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { afterEach, beforeEach, mock, test } from 'node:test';
import { AuthService } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { MemoryStore } from '../src/server/db/Store';
import { DEFAULT_CONFIG, type GameConfig } from '../src/server/Game';
import { DEFAULT_ROOM_OPTIONS, Room, type MatchResult, type ReplayData } from '../src/server/Room';
import { createApiRouter } from '../src/server/router';
import { RankedService } from '../src/server/study/RankedService';
import { StudyService } from '../src/server/study/StudyService';
import { expected, PLACEMENT, rankView, rate, tierOf } from '../src/shared/ranked';
import type { ServerMessage } from '../src/shared/protocol';
import { VERSION } from '../src/shared/version';

const src = (f: string) => readFileSync(f, 'utf8').replace(/\r\n/g, '\n');
const CFG: GameConfig = { ...DEFAULT_CONFIG, prepMs: 1000, countdownMs: 100, battleMs: 300_000, challengeMs: 1_000_000, nextDelayMs: 10, missPenaltyMs: 50 };
const OPTS = { ...DEFAULT_ROOM_OPTIONS, game: CFG, graceLobbyMs: 60_000, graceGameMs: 20_000 };
function client() {
  const msgs: ServerMessage[] = [];
  return { msgs, send: (m: ServerMessage) => msgs.push(m), last: <T extends ServerMessage['type']>(t: T) => msgs.filter((m) => m.type === t).at(-1) as Extract<ServerMessage, { type: T }> | undefined };
}
const settle = () => new Promise((r) => setImmediate(r));

test('0.9.9.9.9 version and patch notes', () => {
  assert.ok(VERSION >= '0.9.9.9.9');
  assert.match(src('src/client/whatsnew.ts'), /v: '0\.9\.9\.9\.9'/);
});

// ── the rating ───────────────────────────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.9 Elo: an upset gains more than an expected win; placement games move faster; nobody drops below 100', () => {
  assert.equal(expected(1000, 1000), 0.5);
  assert.deepEqual(rate({ rating: 1000, games: 10 }, { rating: 1000, games: 10 }, 1), [12, -12]);
  assert.deepEqual(rate({ rating: 1000, games: 0 }, { rating: 1000, games: 0 }, 1), [20, -20], 'placement: K 40');
  const [upset] = rate({ rating: 900, games: 10 }, { rating: 1300, games: 10 }, 1);
  const [expectedWin] = rate({ rating: 1300, games: 10 }, { rating: 900, games: 10 }, 1);
  assert.ok(upset > 20 && expectedWin >= 1 && expectedWin < 4, `${upset} / ${expectedWin}`);
  assert.deepEqual(rate({ rating: 1000, games: 10 }, { rating: 1000, games: 10 }, 0.5), [0, 0], 'a draw between equals');
  assert.equal(rate({ rating: 105, games: 10 }, { rating: 105, games: 10 }, 0)[0], -5, 'the floor');
  assert.equal(tierOf(899).id, 'apprentice'); assert.equal(tierOf(1100).id, 'mage'); assert.equal(tierOf(2000).id, 'grand');
  assert.deepEqual(rankView(1000, 2), { rating: 1000, games: 2, tier: null, placement: 2 }, 'no tier until the placement games are played');
  assert.equal(rankView(1150, PLACEMENT).tier, 'mage');
});

// ── ranked rooms ─────────────────────────────────────────────────────────────────────────────────────────────────
let clock = 0;
beforeEach(() => { clock = 0; mock.timers.enable({ apis: ['setTimeout', 'Date'], now: 0 }); });
afterEach(() => mock.timers.reset());
const tick = (ms: number) => { for (let left = ms; left > 0; left -= 1000) { const d = Math.min(1000, left); clock += d; mock.timers.tick(d); } };

function rankedRoom(ranked: boolean, replays: ReplayData[] = []) {
  const calls: MatchResult[][] = [];
  const room = new Room('RANK', 'reading', {
    onEmpty: () => {},
    onMatchEnd: async (_m, results) => { calls.push(results); return Object.fromEntries(results.map((r) => [r.id, { gained: 0, xp: 0, crit: 0.01, ...(r.ranked ? { rating: { before: 1000, after: r.outcome === 'win' ? 1020 : 980, games: 1 } } : {}) }])); },
    saveReplay: async (d) => { replays.push(d); return 'replay0000000001'; },
  }, OPTS);
  room.ranked = ranked;
  const a = client(), b = client();
  room.join('a', 'A', a); room.join('b', 'B', b);
  return { room, a, b, calls, replays };
}

test('0.9.9.9.9 a ranked room\'s first game is ranked (a forfeit is a loss); its rematch is not; a private room never is', async () => {
  const r = rankedRoom(true);
  r.room.start('a'); r.room.ready('a'); r.room.ready('b'); tick(100);
  r.room.forfeit('b');
  await settle(); await settle();
  assert.deepEqual(r.calls[0].map((x) => [x.id, x.outcome, x.ranked]), [['a', 'win', true], ['b', 'loss', true]]);
  assert.deepEqual(r.a.last('progress')!.rating, { before: 1000, after: 1020, games: 1 }, 'the change reaches the player');
  assert.equal(r.calls[0][0].record!.ranked, true, 'and the match history says it was ranked');
  // the rematch
  r.room.rematch('a'); r.room.rematch('b'); r.room.ready('a'); r.room.ready('b'); tick(100);
  r.room.forfeit('a');
  await settle(); await settle();
  assert.deepEqual(r.calls[1].map((x) => x.ranked), [false, false], 'two friends can\'t trade wins in rematches');
  const p = rankedRoom(false);
  p.room.start('a'); p.room.ready('a'); p.room.ready('b'); tick(100); p.room.forfeit('a');
  await settle(); await settle();
  assert.deepEqual(p.calls[0].map((x) => x.ranked), [false, false]);
});

test('0.9.9.9.9 the queue makes ranked rooms for 1v1, not for Boss', () => {
  // (0.9.9.9.9.6 round 6: from the queue's Ranked side, in the ranked modes only)
  const mm = src('src/server/Matchmaker.ts');
  assert.ok(mm.includes('room.ranked = ranked;') && mm.includes('ranked: tickets[0].ranked && isRankedMode(mode)'));
});

test('0.9.9.9.9 settle: both ratings move once; the ladder lists players after their placement games', async () => {
  const store = new MemoryStore();
  const ranked = new RankedService(store);
  const mk = async (n: string) => store.create({ username: n, passwordHash: 'x', role: 'user' } as never);
  const ann = await mk('ann'), bob = await mk('bob'), cat = await mk('cat');
  const res = (w: string, l: string, ranked = true): MatchResult[] => [
    { id: w, outcome: 'win', accuracy: 1, missed: [], forfeited: false, vsAi: false, ranked },
    { id: l, outcome: 'loss', accuracy: 0, missed: [], forfeited: false, vsAi: false, ranked },
  ];
  const ch = await ranked.settle(res(ann.id, bob.id));
  assert.deepEqual(ch[ann.id], { before: 1000, after: 1020, games: 1, mode: 'rapid' });
  assert.deepEqual(ch[bob.id], { before: 1000, after: 980, games: 1, mode: 'rapid' });
  assert.deepEqual(await ranked.settle(res(ann.id, bob.id, false)), {}, 'not ranked: nothing moves');
  for (let i = 0; i < PLACEMENT; i++) await ranked.settle(res(ann.id, cat.id));
  const board = await ranked.ladder((await store.findById(bob.id))!, [ann.id]);
  assert.deepEqual(board.top.map((r) => r.login), ['ann', 'cat'], 'only after the placement games (bob has played 1)');
  assert.equal(board.top[0].place, 1);
  assert.equal(board.me.placement, 1, 'bob: 1 of the placement games played');
  assert.equal(board.friends[0].login, 'ann');
});

// ── replays ──────────────────────────────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.9 replays: the battle as everyone saw it plus each player\'s own words, kept compressed, open to anyone with the link', async () => {
  const replays: ReplayData[] = [];
  const r = rankedRoom(false, replays);
  r.room.start('a'); r.room.ready('a'); r.room.ready('b'); tick(100);
  r.room.forfeit('b');
  await settle(); await settle();
  const tape = replays[0].tape;
  assert.ok(tape.some(([, to, m]) => to === null && m.type === 'battle_start'));
  assert.ok(tape.some(([, to, m]) => to === 'a' && m.type === 'challenge'), 'each player\'s words');
  assert.ok(tape.some(([, , m]) => m.type === 'game_over'));
  assert.equal(r.a.last('progress')!.replay, 'replay0000000001');
  assert.equal(r.calls[0][0].record!.replay, 'replay0000000001', 'the match history links it');
  // stored and read back through the API, without signing in
  const store = new MemoryStore();
  const ranked = new RankedService(store);
  const id = (await ranked.saveReplay(replays[0]))!;
  assert.match(id, /^[\w-]{16}$/);
  const route = createApiRouter(new AuthService(store, new TokenSigner('t')), new StudyService(store), { ranked });
  const out = await route({ method: 'GET', url: `/api/replays/${id}`, query: new URLSearchParams(), token: '', ip: '1.1.1.1', json: async () => ({}) });
  assert.equal(out?.status, 200);
  assert.equal((out?.body as { replay: ReplayData }).replay.tape.length, tape.length);
  const gone = await route({ method: 'GET', url: '/api/replays/AAAAAAAAAAAAAAAA', query: new URLSearchParams(), token: '', ip: '1.1.1.1', json: async () => ({}) });
  assert.equal(gone?.status, 404);
  assert.equal(await ranked.sweep(replays[0].at + 15 * 86_400_000), 1, 'two weeks, then gone');
});

// ── watching ─────────────────────────────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.9 watching: a watcher sees the battle, never a player\'s word before it is cast; players see how many watch', async () => {
  const r = rankedRoom(false);
  r.room.start('a'); r.room.ready('a'); r.room.ready('b'); tick(100);
  const w = client();
  assert.equal(r.room.watch('w', w, 'A'), null);
  assert.equal(w.last('watching')!.on, true);
  assert.ok(w.last('battle_start'), 'joins mid-battle with the clock');
  assert.equal(r.a.last('watchers')!.count, 1);
  r.room.forfeit('b');
  await settle();
  assert.ok(w.last('game_over'), 'sees the end');
  assert.equal(w.msgs.filter((m) => m.type === 'challenge' || m.type === 'answer_result').length, 0, 'no one\'s word, no one\'s answers');
  assert.match(r.room.watch('a', client(), 'B') ?? '', /playing/, 'a player can\'t watch their own game');
  r.room.unwatch('w');
  assert.equal(r.a.last('watchers')!.count, 0);
  // the session: only a friend's game
  const sess = src('src/server/Session.ts');
  assert.match(sess, /if \(!this\.social \|\| !\(await this\.social\.areFriends\(user\.id, friendId\)\)\) return this\.send\(\{ type: 'watching', on: false, reason: 'You can watch your friends’ games' \}\);/);
});

// ── the app ──────────────────────────────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.9 the app: watching sends nothing that acts on a game; a replay link plays signed in or not; the ladder; Russian', () => {
  const main = src('src/client/main.ts');
  assert.match(main, /if \(watching\(\)\) \{ if \(LEAVING\.has\(m\.type\)\) \{ stopWatching\(\); return; \} if \(!mayWhileWatching\(m\.type\)\) return; \}/);
  const w = src('src/client/watch.ts');
  assert.match(w, /const ALLOWED = new Set\(\['pong', 'where', 'away', 'dm_typing', 'unwatch', 'watch', 'hello'\]\);/);
  // (0.9.9.9.9.1: the clip is made in replayclip.ts — a pause in the game is cut out, a long silence shortened)
  const clip = src('src/client/replayclip.ts');
  assert.match(clip, /if \(to !== null && to !== side\) continue;/, 'a replay shows only the watched side\'s own words');
  assert.match(clip, /const SILENCE_MS = 15000;/, 'long silences are shortened');
  assert.match(main, /if \(!watching\(\)\) replayFromLink\(\); \/\/ 0\.9\.9\.9\.9: a shared replay plays without signing in/);
  assert.match(main, /if \(!watching\(\)\) noteBattle\(\);/, 'watching a battle isn\'t playing one');
  assert.match(main, /watch: link\?\.status === 'accepted' && link\.online && \/\^Playing \/\.test/);
  assert.match(src('public/style.css'), /body\[data-watch\] :is\(#typeArea, #skip, #forfeit/);
  assert.match(src('public/index.html'), /<div id="rankBox" class="rank-box" hidden><\/div>/);
  const ru = src('src/client/i18n.ts');
  for (const k of ["'Ranked ladder':", "'Watch their game':", "'Watch replay':", "'Grand Sage':", "'This replay is gone (they are kept for two weeks)':", ' watching$/']) assert.ok(ru.includes(k), k);
});
