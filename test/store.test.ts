import assert from 'node:assert/strict';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { PgStore } from '../src/server/db/PgStore';
import { FileStore, MemoryStore, type Store } from '../src/server/db/Store';
import { newCard } from '../src/shared/srs';

// The same contract for every implementation. Postgres runs when TEST_DATABASE_URL is set.
const stores: Array<[string, () => Store]> = [
  ['memory', () => new MemoryStore()],
  ['file', () => new FileStore(path.join(mkdtempSync(path.join(tmpdir(), 'kw-')), 'db.json'))],
];
if (process.env.TEST_DATABASE_URL) stores.push(['postgres', () => new PgStore(process.env.TEST_DATABASE_URL!)]);

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
