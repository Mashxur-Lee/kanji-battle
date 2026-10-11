import assert from 'node:assert/strict';
import { test } from 'node:test';
import { PausableClock } from '../src/server/clock';
import { MemoryStore } from '../src/server/db/Store';
import { DailyService, dailyWords } from '../src/server/study/DailyService';
import { ProgressService } from '../src/server/study/ProgressService';

test('the game clock pauses: time and timers stand still, then carry on', async () => {
  let real = 1000;
  const clock = new PausableClock(() => real);
  const fired: string[] = [];
  clock.setTimeout(() => fired.push('a'), 30);
  assert.equal(clock.now(), 1000);
  clock.pause();
  real += 5000;
  assert.equal(clock.now(), 1000, 'no time passes while paused');
  await new Promise((r) => setTimeout(r, 60));
  assert.deepEqual(fired, [], 'no timer fires while paused');
  clock.resume();
  assert.equal(clock.now(), 1000);
  await new Promise((r) => setTimeout(r, 60));
  assert.deepEqual(fired, ['a']);
  const id = clock.setTimeout(() => fired.push('b'), 10);
  clock.clearTimeout(id);
  await new Promise((r) => setTimeout(r, 30));
  assert.deepEqual(fired, ['a']);
});

test('daily challenge: the result says which words were right, and the missed ones become Struggling spells', async () => {
  const store = new MemoryStore();
  let now = Date.parse('2026-10-11T08:00:00Z');
  const daily = new DailyService(store, new ProgressService(store), () => now);
  const u = await store.create({ username: 'dee', passwordHash: 'x', role: 'user' } as never);
  const words = dailyWords('2026-10-11');
  await daily.start(u);
  for (let i = 0; i < 10; i++) { now += 1000; await daily.answer(u, i % 2 === 0 ? words[i].reading : 'zzz'); }
  const o = await daily.overview(u);
  assert.deepEqual(o.words!.map((w) => w.ok), words.map((_, i) => i % 2 === 0));
  const cards = await store.cards(u.id);
  const struggling = cards.filter((c) => c.struggling).map((c) => c.vocabId).sort();
  assert.deepEqual(struggling, words.filter((_, i) => i % 2 === 1).map((w) => w.id).sort());
});
