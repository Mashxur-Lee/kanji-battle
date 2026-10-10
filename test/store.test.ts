import assert from 'node:assert/strict';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { PgStore, cleanUrl } from '../src/server/db/PgStore';
import { FileStore, MemoryStore, type Store } from '../src/server/db/Store';
import { newCard } from '../src/shared/srs';

// The same contract for every implementation. Postgres runs when TEST_DATABASE_URL is set.
const stores: Array<[string, () => Store]> = [
  ['memory', () => new MemoryStore()],
  ['file', () => new FileStore(path.join(mkdtempSync(path.join(tmpdir(), 'kw-')), 'db.json'))],
];
if (process.env.TEST_DATABASE_URL) stores.push(['postgres', () => new PgStore(process.env.TEST_DATABASE_URL! + (process.env.TEST_DATABASE_URL!.includes('?') ? '&' : '?') + 'channel_binding=require')]);

for (const [name, make] of stores) {
  test(`store contract: ${name}`, async () => {
    const s = make();
    await s.init();
    if (s instanceof PgStore) await (s as any).sql`truncate kw_users cascade`;
    const u = await s.create({ username: 'Mika', passwordHash: 'h', role: 'user' });
    assert.equal(u.username, 'mika');
    assert.deepEqual([u.xp, u.background, u.studyLevels, u.banned, u.newNotice], [0, 'forest', [], false, 0]);
    await assert.rejects(s.create({ username: 'MIKA', passwordHash: 'h', role: 'user' }), /UsernameTaken|Error/);
    assert.equal((await s.findByUsername('MiKa'))!.id, u.id);
    assert.equal(await s.findById('not-a-uuid'), null);
    assert.equal(await s.addXp(u.id, 372), 372);
    assert.equal(await s.addXp(u.id, -1000), 0, 'never negative');
    const upd = await s.update(u.id, { background: 'swamp', studyLevels: ['N5', 'N4'], lastNewDate: '2026-10-09', newNotice: 25, banned: true });
    assert.deepEqual([upd!.background, upd!.studyLevels, upd!.lastNewDate, upd!.newNotice, upd!.banned], ['swamp', ['N5', 'N4'], '2026-10-09', 25, true]);

    const now = 1_700_000_000_000;
    assert.equal(await s.addCards(u.id, [newCard('山:やま', now), newCard('川:かわ', now)]), 2);
    assert.equal(await s.addCards(u.id, [newCard('山:やま', now), newCard('水:みず', now)]), 1, 'existing cards are kept');
    const c = (await s.card(u.id, '山:やま'))!;
    await s.saveCard(u.id, { ...c, state: 'review', intervalDays: 3, due: now + 3 * 86400000, reps: 3 });
    assert.equal(await s.learnedCount(u.id), 1);
    await s.markStruggling(u.id, ['山:やま', '火:ひ'], now);
    const cards = await s.cards(u.id);
    assert.equal(cards.length, 4);
    const yama = cards.find((x) => x.vocabId === '山:やま')!;
    assert.deepEqual([yama.struggling, yama.state, yama.due], [true, 'review', now], 'missed word is due right away, keeps its progress');
    assert.equal(cards.find((x) => x.vocabId === '火:ひ')!.state, 'new');
    assert.equal((await s.list()).length, 1);
    await s.close?.();
  });
}

test('file store survives a restart', async () => {
  const file = path.join(mkdtempSync(path.join(tmpdir(), 'kw-')), 'db.json');
  const a = new FileStore(file);
  const u = await a.create({ username: 'kenji', passwordHash: 'h', role: 'user' });
  await a.addXp(u.id, 1500);
  await a.addCards(u.id, [newCard('山:やま', 1)]);
  const b = new FileStore(file);
  assert.equal((await b.findById(u.id))!.xp, 1500);
  assert.equal((await b.cards(u.id)).length, 1);
});

test('cleanUrl drops libpq-only options from a Neon connection string', () => {
  const u = cleanUrl('postgresql://neondb_owner:pw@ep-x.us-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require');
  assert.equal(u, 'postgresql://neondb_owner:pw@ep-x.us-west-2.aws.neon.tech/neondb?sslmode=require');
});

test('XP saved before the steeper levels is converted once, so nobody drops a level', async () => {
  const { writeFileSync } = await import('node:fs');
  const { levelOf } = await import('../src/shared/progress');
  const file = path.join(mkdtempSync(path.join(tmpdir(), 'kw-')), 'db.json');
  // a v0.4-era file: 5,400 XP meant level 5
  writeFileSync(file, JSON.stringify({ users: [{ id: 'u1', username: 'old', passwordHash: 'h', role: 'user', banned: false, createdAt: '2026-01-01', xp: 5400 }], srs: {} }));
  const a = new FileStore(file);
  const u = (await a.findById('u1'))!;
  assert.equal(levelOf(u.xp), 5);
  await a.addXp('u1', 0); // saves in the new format
  assert.equal((await new FileStore(file).findById('u1'))!.xp, u.xp, 'converted only once');
});

test('admin card stats: study-set size and learned cards per user', async () => {
  const s = new MemoryStore();
  const u = await s.create({ username: 'x', passwordHash: 'h', role: 'user' });
  await s.addCards(u.id, [newCard('a', 0), newCard('b', 0)]);
  await s.saveCard(u.id, { ...newCard('a', 0), state: 'review' });
  assert.deepEqual((await s.cardStats())[u.id], { cards: 2, learned: 1 });
});

if (process.env.TEST_DATABASE_URL) {
  test('postgres: old XP rows are converted once on start, study cards are kept', async () => {
    const s = new PgStore(process.env.TEST_DATABASE_URL!);
    await s.init();
    await (s as any).sql`truncate kw_users cascade`;
    const u = await s.create({ username: 'veteran', passwordHash: 'h', role: 'user' });
    await s.addCards(u.id, [newCard('v1', 0)]);
    await (s as any).sql`update kw_users set xp = 5400, xp_scheme = 1 where id = ${u.id}`;
    await s.init(); // what a deploy does
    const after = (await s.findById(u.id))!;
    assert.equal(after.xp, 15_000 + Math.round(0.4 * 6000));
    await s.init();
    assert.equal((await s.findById(u.id))!.xp, after.xp, 'only once');
    // the SQL conversion matches legacyXpToCurrent exactly
    const { legacyXpToCurrent } = await import('../src/shared/progress');
    const samples = [0, 1, 499, 500, 999, 1000, 1001, 2500, 9999, 12345, 48_000];
    const users = [];
    for (const [i, xp] of samples.entries()) {
      const v = await s.create({ username: `legacy${i}`, passwordHash: 'h', role: 'user' });
      await (s as any).sql`update kw_users set xp = ${xp}, xp_scheme = 1 where id = ${v.id}`;
      users.push(v.id);
    }
    await s.init();
    for (const [i, id] of users.entries()) assert.equal((await s.findById(id))!.xp, legacyXpToCurrent(samples[i]), `xp ${samples[i]}`);
    assert.equal((await s.cards(u.id)).length, 1, 'study set untouched');
    await s.close!();
  });
}

for (const [name, make] of stores) {
  test(`store: wins/losses and profile pictures (${name})`, async () => {
    const s = make();
    await s.init();
    const u = await s.create({ username: `pic-${name}-${Date.now()}`, passwordHash: 'h', role: 'user' });
    await s.addResult(u.id, 'win'); await s.addResult(u.id, 'win'); await s.addResult(u.id, 'loss'); await s.addResult(u.id, 'draw');
    const rec = (await s.findById(u.id))!;
    assert.deepEqual([rec.wins, rec.losses, rec.avatarV], [2, 1, 0]);
    const png = Buffer.from('89504e470d0a1a0a0000', 'hex');
    assert.equal(await s.setAvatar(u.id, { mime: 'image/png', data: png }), 1);
    assert.deepEqual(await s.getAvatar(u.id), { mime: 'image/png', data: png });
    assert.equal(await s.setAvatar(u.id, null), 0);
    assert.equal(await s.getAvatar(u.id), null);
    await s.close?.();
  });
}

test('profile pictures: only small real PNG/JPEG/WebP files; admins have every background', async () => {
  const { StudyService } = await import('../src/server/study/StudyService');
  const s = new MemoryStore();
  const study = new StudyService(s);
  const u = await s.create({ username: 'p', passwordHash: 'h', role: 'user' });
  const png = 'data:image/png;base64,' + Buffer.from('89504e470d0a1a0a00000000', 'hex').toString('base64');
  await study.setAvatar(u, png);
  const prof = await study.profile((await s.findById(u.id))!);
  assert.equal(prof.pic, `/api/avatar/${u.id}?v=1`);
  await assert.rejects(study.setAvatar(u, 'data:image/svg+xml;base64,PHN2Zz4='), /PNG, JPEG or WebP/);
  await assert.rejects(study.setAvatar(u, 'data:image/png;base64,' + Buffer.from('not a png').toString('base64')), /not a valid picture/);
  await assert.rejects(study.setAvatar(u, 'data:image/jpeg;base64,' + Buffer.alloc(70_000, 0xff).toString('base64')), /too large/);
  // backgrounds: a level-0 user can't pick the castle, an admin can
  await assert.rejects(study.setBackground(u, 'castle'), /Unlocks at level/);
  const admin = await s.create({ username: 'boss', passwordHash: 'h', role: 'admin' });
  await study.setBackground(admin, 'castle');
  assert.equal((await s.findById(admin.id))!.background, 'castle');
});

for (const [name, make] of stores) {
  test(`store: match history keeps only the newest 15, list without the heavy parts, detail with them (${name})`, async () => {
    const { MATCH_HISTORY_LIMIT } = await import('../src/server/db/Store');
    const s = make();
    await s.init();
    const u = await s.create({ username: `hist-${name}-${Date.now()}`, passwordHash: 'h', role: 'user' });
    const stats = { [u.id]: { damageDealt: 300, attempts: 4, correct: 3, accuracy: 0.75, avgResponseMs: 2100, bestCombo: 2, words: [], struggled: [] } };
    for (let i = 0; i < MATCH_HISTORY_LIMIT + 3; i++) {
      await s.addMatch(u.id, {
        mode: i % 2 ? 'deck' : 'reading', outcome: i % 3 ? 'win' : 'loss', character: i % 2 ? 'witch' : 'kid', at: 1_700_000_000_000 + i,
        opponents: [{ id: 'bot-1', name: 'Oni (AI N3)', bot: true, character: 'wizard' }],
        you: u.id, players: [], winnerId: u.id, teamWon: null, reason: 'ko', stats,
      });
    }
    const list = await s.matches(u.id, 100);
    assert.equal(list.length, MATCH_HISTORY_LIMIT);
    assert.equal(list[0].at, 1_700_000_000_000 + MATCH_HISTORY_LIMIT + 2, 'newest first');
    const newest = MATCH_HISTORY_LIMIT + 2;
    assert.deepEqual([list[0].mode, list[0].character, list[0].opponents[0].name], [newest % 2 ? 'deck' : 'reading', newest % 2 ? 'witch' : 'kid', 'Oni (AI N3)']);
    assert.equal(MATCH_HISTORY_LIMIT, 15);
    assert.equal((list[0] as any).stats, undefined, 'the list stays small');
    const d = (await s.match(u.id, list[0].id))!;
    assert.equal(d.stats[u.id].correct, 3);
    assert.equal(await s.match(u.id, 'nope'), null);
    const other = await s.create({ username: `hist2-${name}-${Date.now()}`, passwordHash: 'h', role: 'user' });
    assert.equal(await s.match(other.id, list[0].id), null, "someone else's match");
    await s.close?.();
  });
}

for (const [name, make] of stores) {
  test(`store: the combo flame colour and staff skin are saved (${name})`, async () => {
    const s = make();
    await s.init();
    const u = await s.create({ username: `flm-${name}-${Date.now()}`, passwordHash: 'h', role: 'user' });
    assert.equal(u.flame, 'blue');
    assert.equal((await s.update(u.id, { flame: 'purple' }))!.flame, 'purple');
    assert.equal((await s.findById(u.id))!.flame, 'purple');
    assert.equal(u.staff, 'verdant');
    assert.equal((await s.update(u.id, { staff: 'storm' }))!.staff, 'storm');
    assert.equal((await s.findById(u.id))!.staff, 'storm');
    await s.close?.();
  });
}

for (const [name, make] of stores) {
  test(`store: activity, daily challenge results, friends, tutorial and unlocks (${name})`, async () => {
    const s = make();
    await s.init();
    const tag = `${name}-${Date.now().toString(36)}`;
    const a = await s.create({ username: `act-a-${tag}`, passwordHash: 'h', role: 'user' });
    const b = await s.create({ username: `act-b-${tag}`, passwordHash: 'h', role: 'user' });
    const c = await s.create({ username: `act-c-${tag}`, passwordHash: 'h', role: 'user' });
    assert.equal(a.tutorialDone, false, 'new accounts get the tutorial');
    assert.deepEqual(a.unlocks, []);
    assert.equal((await s.update(a.id, { tutorialDone: true, unlocks: ['flame:harvest'] }))!.unlocks[0], 'flame:harvest');
    // activity adds up per day
    await s.addActivity(a.id, '2026-10-01', { login: true });
    await s.addActivity(a.id, '2026-10-01', { reviews: 3, games: 1, wins: 1, xp: 300 });
    await s.addActivity(a.id, '2026-10-02', { reviews: 2 });
    const act = await s.activity(a.id, '2026-10-01');
    assert.deepEqual(act.map((d) => [d.day, d.login, d.reviews, d.games, d.wins, d.xp]), [['2026-10-01', true, 3, 1, 1, 300], ['2026-10-02', false, 2, 0, 0, 0]]);
    assert.equal((await s.activity(a.id, '2026-10-02')).length, 1);
    // daily challenge: one result per player per day, best first
    const day = `2099-01-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`;
    if (s instanceof PgStore) await (s as any).sql`delete from kw_daily where day = ${day}`;
    assert.equal(await s.saveDaily(day, a.id, 7, 50_000), true);
    assert.equal(await s.saveDaily(day, a.id, 10, 1), false, 'only one try');
    await s.saveDaily(day, b.id, 7, 40_000);
    await s.saveDaily(day, c.id, 9, 90_000);
    assert.deepEqual((await s.dailyBoard(day, 10)).map((r) => r.userId), [c.id, b.id, a.id]);
    assert.equal(await s.dailyBetter(day, 7, 50_000), 2);
    assert.deepEqual(await s.daily(day, a.id), { correct: 7, ms: 50_000 });
    // friends: request → incoming / outgoing → accept; a mutual request accepts at once; remove
    assert.equal(await s.requestFriend(a.id, b.id), 'requested');
    assert.equal(await s.requestFriend(a.id, b.id), 'exists');
    assert.deepEqual((await s.friends(a.id)).map((f) => [f.id, f.status]), [[b.id, 'outgoing']]);
    assert.deepEqual((await s.friends(b.id)).map((f) => [f.id, f.status]), [[a.id, 'incoming']]);
    assert.equal(await s.acceptFriend(b.id, a.id), true);
    assert.deepEqual((await s.friends(b.id)).map((f) => f.status), ['accepted']);
    await s.requestFriend(c.id, a.id);
    assert.equal(await s.requestFriend(a.id, c.id), 'accepted', 'both asked: friends');
    assert.equal((await s.friends(a.id)).filter((f) => f.status === 'accepted').length, 2);
    await s.removeFriend(a.id, b.id);
    assert.deepEqual((await s.friends(b.id)), []);
    await s.close?.();
  });
}
