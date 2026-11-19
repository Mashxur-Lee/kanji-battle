// 0.9.9.9.7.3 — round 3 of the pre-1.0 review, and the owner's reports: the fly-in, the hit, the kneel, the results
// screen after a long break. Each test plays the problem and checks it is gone.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { AuthService } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { hashPassword } from '../src/server/auth/passwords';
import { PgStore } from '../src/server/db/PgStore';
import { MemoryStore, type Store } from '../src/server/db/Store';
import { DEFAULT_ROOM_OPTIONS } from '../src/server/Room';
import { RoomManager } from '../src/server/RoomManager';
import { Session, SessionHub } from '../src/server/Session';
import { DailyService, dailyKey } from '../src/server/study/DailyService';
import { MEDIA_BYTES_PER_DAY, MessageService } from '../src/server/study/MessageService';
import { MASTERED_DAYS, ProgressService } from '../src/server/study/ProgressService';
import { StudyService } from '../src/server/study/StudyService';
import { deckOf, newCard } from '../src/shared/srs';
import type { ServerMessage } from '../src/shared/protocol';
import { VERSION } from '../src/shared/version';

const src = (f: string) => readFileSync(f, 'utf8').replace(/\r\n/g, '\n');
const sleep = (ms: number) => new Promise((ok) => setTimeout(ok, ms));

test('0.9.9.9.7.3 version, patch notes, Russian for the new messages', () => {
  assert.ok(VERSION >= '0.9.9.9.7.3');
  assert.match(src('src/client/whatsnew.ts'), /v: '0\.9\.9\.9\.7\.3'/);
  const ru = src('src/client/i18n.ts');
  for (const s of ["'The room closed while you were away':", "'This account still has its built-in password"]) assert.ok(ru.includes(s), s);
});

// ── the owner's reports: the 3D arena ────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.7.3 the fly-in: the arena is built while you study, and the fly-in ends when your first word is up', () => {
  const main = src('src/client/main.ts'), a3 = src('src/client/arena3d.ts');
  assert.match(main, /case 'prep':[\s\S]{0,300}primeArena\(mode, players, you\)/, 'built during the study phase');
  assert.match(main, /case 'challenge':[\s\S]{0,120}arena\(\)\?\.endIntro\(\)/, 'the word is up: no more fly-in');
  assert.match(a3, /prime\(s\) \{[\s\S]{0,600}renderer\.compile\(scene, camera\); renderer\.render\(scene, camera\)/, 'shaders and textures ready before the battle');
  assert.match(a3, /endIntro\(\) \{[\s\S]{0,200}cine\.end = cine\.t/);
});

test('0.9.9.9.7.3 a hit: a step back with one leg (the other one next time); a knock-out kneels without the last hit frozen on it', () => {
  const a3 = src('src/client/arena3d.ts');
  assert.match(a3, /f\.hitLeg = 1 - f\.hitLeg/);
  assert.match(a3, /const back = legs\[f\.hitLeg\], front = legs\[1 - f\.hitLeg\];[\s\S]{0,300}back\.hip\.rotation\.x \+=[\s\S]{0,80}back\.knee\.rotation\.x \+=/, 'the thigh goes back, the knee bends as the foot lifts');
  // the leg step comes after applyPose (which puts the legs back to standing every frame)
  assert.ok(a3.indexOf('applyPose(m, f.pose, f.poseK, time)') < a3.indexOf('const back = legs[f.hitLeg]'));
  assert.match(a3, /const was = m \? \{ rx: m\.root\.rotation\.x[\s\S]{0,2000}const r = 1 - Math\.min\(1, k\);[\s\S]{0,600}m\.kneel\(k\)/, 'the lean, the step and the pose ease out as they kneel');
});

// ── the owner's report: back on the results screen after a long break ───────────────────────────────────────────
test('0.9.9.9.7.3 back after the room closed: told at once, and a results button takes you to the menu (it did nothing)', async () => {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('s'));
  const hub = new SessionHub();
  const rooms = new RoomManager({}, { ...DEFAULT_ROOM_OPTIONS, graceLobbyMs: 30, graceGameMs: 30 });
  const study = new StudyService(store);
  const { token } = await auth.register('afk', 'secret12', 'afk@gmail.com');
  const connect = () => { const got: ServerMessage[] = []; const s = new Session(rooms, auth, hub, study, (j) => got.push(JSON.parse(j)), () => {}); return { s, got, say: (m: object) => s.onRaw(JSON.stringify(m)) }; };
  const first = connect();
  await first.say({ type: 'hello', token });
  await first.say({ type: 'create', mode: 'reading' });
  assert.ok(first.got.some((m) => m.type === 'joined'));
  // back within the room's grace: the seat is still there
  first.s.onClose();
  const quick = connect();
  await quick.say({ type: 'hello', token });
  assert.equal((quick.got.find((m) => m.type === 'welcome') as Extract<ServerMessage, { type: 'welcome' }>).seated, true);
  // the app in the background longer than the grace: the room closes
  quick.s.onClose();
  await sleep(80);
  const back = connect();
  await back.say({ type: 'hello', token });
  assert.equal((back.got.find((m) => m.type === 'welcome') as Extract<ServerMessage, { type: 'welcome' }>).seated, false, 'the app knows at once (and goes to the menu)');
  await back.say({ type: 'rematch' }); // an older app still showing the results: it presses Rematch
  assert.ok(back.got.some((m) => m.type === 'notice' && m.message === 'The room closed while you were away'));
  assert.ok(back.got.some((m) => m.type === 'left'), 'an answer: back to the menu (the button did nothing)');
  assert.match(src('src/client/main.ts'), /msg\.seated === false && inRoom && !inLocalRoom\(\)\) \{ backToMenu\(\)/);
});

// ── #12: photos ──────────────────────────────────────────────────────────────────────────────────────────────────
const photo = (kb: number) => 'data:image/png;base64,' + Buffer.concat([Buffer.from([0x89, 0x50, 0x4e, 0x47]), Buffer.alloc(kb * 1024 - 4, 7)]).toString('base64');
async function chat() {
  const store = new MemoryStore();
  let now = Date.parse('2026-11-20T10:00:00Z');
  const messages = new MessageService(store, { deliver: () => {} }, () => now);
  const ann = await store.create({ username: 'ann', passwordHash: 'x', role: 'user' } as never);
  const bob = await store.create({ username: 'bob', passwordHash: 'x', role: 'user' } as never);
  await store.requestFriend(ann.id, bob.id); await store.acceptFriend(bob.id, ann.id);
  return { store, messages, ann: (await store.findById(ann.id))!, bob, at: (t: number) => { now = t; }, now: () => now };
}

test('0.9.9.9.7.3 #12 photos: at most 10 MB a day per player (it was 60 × 700 KB = 42 MB)', async () => {
  const { messages, ann } = await chat();
  let sent = 0;
  for (let i = 0; i < 20; i++) { try { await messages.upload(ann, photo(690)); sent++; } catch (e) { assert.match((e as Error).message, /a lot of photos for one day/); break; } }
  assert.equal(sent, Math.floor(MEDIA_BYTES_PER_DAY / (690 * 1024)), `${sent} photos of 690 KB`);
});

test('0.9.9.9.7.3 #12 photos nothing uses are swept away: a deleted message\'s, one never sent; the rest stay', async () => {
  const { store, messages, ann, bob, at, now } = await chat();
  const kept = await messages.upload(ann, photo(20));
  const gone = await messages.upload(ann, photo(20));
  const never = await messages.upload(ann, photo(20));
  const pic = await messages.upload(ann, photo(20));
  await messages.send(ann, bob.id, 'look', false, undefined, { media: kept.id });
  const del = await messages.send(ann, bob.id, 'oops', false, undefined, { media: gone.id });
  await messages.remove(ann, del.id);
  await messages.createGroup(ann, 'club', [bob.id], pic.id);
  assert.equal(await store.sweepMedia(now() - 86_400_000), 0, 'nothing younger than a day (a photo on its way)');
  at(now() + 2 * 86_400_000);
  assert.equal(await store.sweepMedia(now() - 86_400_000), 2);
  assert.ok(await store.media(kept.id), 'a photo in a message stays');
  assert.ok(await store.media(pic.id), 'a group\'s picture stays');
  assert.equal(await store.media(gone.id), null, 'a deleted message\'s photo goes (it was kept forever)');
  assert.equal(await store.media(never.id), null);
});

// ── #15: the built-in admin password ─────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.7.3 #15 the built-in password (it is in the public code) signs in only on the server itself', async () => {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('s'));
  await auth.seed([{ username: 'admin', password: 'adminn123', role: 'admin', fromEnv: false }], false); // a server that isn't Render
  await assert.rejects(auth.login('admin', 'adminn123', Date.now(), '203.0.113.5'), /built-in password — it signs in only on the server itself/);
  assert.ok((await auth.login('admin', 'adminn123', Date.now(), '127.0.0.1')).token, 'on your own computer it works, as before');
  assert.ok((await auth.login('admin', 'adminn123', Date.now(), '::1')).token);
  // the admin gives it a password of their own: from anywhere then
  const me = await auth.authenticate((await auth.login('admin', 'adminn123', Date.now(), '127.0.0.1')).token);
  await auth.changePassword(me, 'adminn123', 'my-own-pass');
  assert.ok((await auth.login('admin', 'my-own-pass', Date.now(), '203.0.113.5')).token);
  // and with ADMIN_PASSWORD set, that one works from anywhere
  const other = new AuthService(new MemoryStore(), new TokenSigner('s'));
  await other.seed([{ username: 'admin', password: 'from-the-env-1', role: 'admin', fromEnv: true }], false);
  assert.ok((await other.login('admin', 'from-the-env-1', Date.now(), '203.0.113.5')).token);
});

// ── #17, #18: the Daily challenge's queries ─────────────────────────────────────────────────────────────────────
test('0.9.9.9.7.3 #17 #18 the Daily page asks once for all friends, and finishing counts the players (no 100,000-row fetch)', async () => {
  const store = new MemoryStore();
  let now = Date.parse('2026-11-20T10:00:00Z');
  const daily = new DailyService(store, new ProgressService(store), () => now);
  const me = await store.create({ username: 'me', passwordHash: 'x', role: 'user' } as never);
  const key = dailyKey('2026-11-20', 'KANA');
  for (let i = 0; i < 30; i++) {
    const f = await store.create({ username: `friend${i}`, passwordHash: 'x', role: 'user' } as never);
    await store.requestFriend(me.id, f.id); await store.acceptFriend(f.id, me.id);
    await store.saveDaily(key, f.id, i % 10, 20_000 + i, '1'.repeat(i % 10).padEnd(10, '0'));
  }
  const calls = { daily: 0, board: 0 };
  const realDaily = store.daily.bind(store), realBoard = store.dailyBoard.bind(store);
  store.daily = async (...a) => { calls.daily++; return realDaily(...a); };
  store.dailyBoard = async (d, limit) => { calls.board++; assert.ok(limit <= 20, `a board of ${limit} rows`); return realBoard(d, limit); };
  const o = await daily.overview((await store.findById(me.id))!, '2026-11-20');
  assert.equal(o.ghost?.correct, 9, 'the best friend to race');
  assert.ok(calls.daily <= 2, `${calls.daily} lookups (one per friend before: 31)`);
  await daily.start((await store.findById(me.id))!, '2026-11-20');
  const done = await daily.finishStale((await store.findById(me.id))!);
  assert.equal(done?.players, 31);
  assert.equal(await store.dailyCount(key), 31);
});

// ── #19: a profile's achievements ────────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.7.3 #19 a profile no longer loads the whole history to check achievements — and counts the same', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await store.create({ username: 'busy', passwordHash: 'x', role: 'user' } as never);
  const f = await store.create({ username: 'pal', passwordHash: 'x', role: 'user' } as never);
  await store.requestFriend(u.id, f.id); await store.acceptFriend(f.id, u.id);
  for (let d = 1; d <= 28; d++) await store.addActivity(u.id, `2026-10-${String(d).padStart(2, '0')}`, { reviews: d % 7, games: d % 3, quizzes: d % 2, passages: 1, challenges: d % 4, login: d % 5 === 0 });
  await store.addCards(u.id, [newCard('n5-1', 1, 'all'), newCard('n5-2', 1, 'custom'), newCard('n5-3', 1, 'all')]);
  const c = (await store.card(u.id, 'all', 'n5-1'))!; await store.saveCard(u.id, { ...c, state: 'review', intervalDays: MASTERED_DAYS + 3 });
  // (counted outside the store's own totals — in memory those are added up from the rows, as a database would)
  let wholeHistory = 0, inStore = false;
  const realActivity = store.activity.bind(store), realStats = store.achStats.bind(store);
  store.activity = async (id, from) => { if (from === '0000-01-01' && !inStore) wholeHistory++; return realActivity(id, from); };
  store.achStats = async (id, d) => { inStore = true; try { return await realStats(id, d); } finally { inStore = false; } };
  const facts = await study.achFacts((await store.findById(u.id))!);
  // the same numbers as the old way (summing every row and every card here)
  const days = await realActivity(u.id, '0000-01-01');
  const sum = (k: 'reviews' | 'games' | 'quizzes' | 'passages' | 'challenges') => days.reduce((a, d) => a + (d[k] ?? 0), 0);
  const cards = await store.cards(u.id);
  assert.deepEqual(
    [facts.reviews, facts.games, facts.quizzes, facts.passages, facts.challenges, facts.activeDays, facts.bestDay, facts.mastered, facts.custom, facts.friends],
    [sum('reviews'), sum('games'), sum('quizzes'), sum('passages'), sum('challenges'), days.filter((d) => d.login || d.reviews > 0 || d.games > 0).length, Math.max(...days.map((d) => d.reviews)), 1, cards.filter((x) => deckOf(x) === 'custom').length, 1],
  );
  wholeHistory = 0;
  await study.profile((await store.findById(u.id))!);
  assert.equal(wholeHistory, 0, 'the store adds it up (Postgres: one row back, not hundreds)');
});

// ── the same in every store (Postgres in CI): the new queries ───────────────────────────────────────────────────
const stores: Array<[string, () => Store]> = [['memory', () => new MemoryStore()]];
if (process.env.TEST_DATABASE_URL) stores.push(['postgres', () => new PgStore(process.env.TEST_DATABASE_URL! + (process.env.TEST_DATABASE_URL!.includes('?') ? '&' : '?') + 'channel_binding=require')]);
for (const [name, make] of stores) {
  test(`0.9.9.9.7.3 store: totals, daily counts, unused photos, a start that skips an unchanged schema — ${name}`, async () => {
    const s = make();
    await s.init();
    if (s instanceof PgStore) {
      // #20: a second start with the same schema runs none of the ~80 statements
      let migrated = 0;
      const real = (s as any).migrate.bind(s);
      (s as any).migrate = async () => { migrated++; return real(); };
      await s.init();
      assert.equal(migrated, 0, 'the schema is unchanged: nothing to run');
      assert.match((await s.getValue('schema')) ?? '', /^[0-9a-f]{16}$/);
    }
    const tag = Math.random().toString(36).slice(2, 8);
    const u = await s.create({ username: `st${tag}`, passwordHash: await hashPassword('x1x1x1'), role: 'user' });
    const pal = await s.create({ username: `pa${tag}`, passwordHash: 'x', role: 'user' });
    await s.requestFriend(u.id, pal.id); await s.acceptFriend(pal.id, u.id);
    await s.addActivity(u.id, '2026-10-01', { reviews: 5, games: 2, login: true });
    await s.addActivity(u.id, '2026-10-02', { reviews: -1, quizzes: 3 }); // (an undo can take a count below zero)
    await s.addActivity(u.id, '2026-10-03', { challenges: 1, passages: 2 });
    await s.addCards(u.id, [newCard('n5-1', 1, 'all'), newCard('n5-1', 1, 'struggling'), newCard('n5-2', 1, 'custom')]);
    for (const deck of ['all', 'struggling'] as const) { const c = (await s.card(u.id, deck, 'n5-1'))!; await s.saveCard(u.id, { ...c, deck, state: 'review', intervalDays: 30 }); }
    assert.deepEqual(await s.achStats(u.id, 21), { reviews: 4, games: 2, quizzes: 3, passages: 2, challenges: 1, activeDays: 1, bestDay: 5, mastered: 1, custom: 1, friends: 1 });
    const key = `2026-10-01:${tag}`;
    await s.saveDaily(key, u.id, 7, 30_000, '1111111000'); await s.saveDaily(key, pal.id, 9, 20_000, '1111111110');
    assert.equal(await s.dailyCount(key), 2);
    const both = await s.dailyOf(key, [u.id, pal.id]);
    assert.deepEqual([both.get(u.id)?.correct, both.get(pal.id)?.marks], [7, '1111111110']);
    assert.equal((await s.dailyOf(key, [])).size, 0);
    // photos: bytes in a day, and the sweep keeps what a message uses
    await s.addMedia({ id: `used${tag}0000`, ownerId: u.id, mime: 'image/png', data: Buffer.alloc(1000), at: 1000 });
    await s.addMedia({ id: `lost${tag}0000`, ownerId: u.id, mime: 'image/png', data: Buffer.alloc(500), at: 1000 });
    assert.equal(await s.mediaBytesSince(u.id, 0), 1500);
    await s.addMessage({ fromId: u.id, toId: pal.id, text: 'pic', at: 2000, kind: null, by: null, media: `used${tag}0000` });
    assert.ok((await s.sweepMedia(5000)) >= 1);
    assert.ok(await s.media(`used${tag}0000`));
    assert.equal(await s.media(`lost${tag}0000`), null);
    await s.close?.();
  });
}
