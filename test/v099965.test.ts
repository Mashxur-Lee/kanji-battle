import assert from 'node:assert/strict';
import { test } from 'node:test';
import { MemoryStore } from '../src/server/db/Store';
import { MessageService } from '../src/server/study/MessageService';

test('0.9.9.9.6.5 an invite / a challenge lands in the chat as a card — quiet, not editable, not forwardable', async () => {
  const store = new MemoryStore();
  const live: Array<{ to: unknown; msg: { kind?: string; text: string } }> = [];
  const pushed: string[] = [];
  const messages = new MessageService(store, { deliver: (to, msg) => live.push({ to, msg }), push: (to) => pushed.push(to), online: () => false });
  const a = await store.create({ username: 'host', passwordHash: 'x', role: 'user' } as never);
  const b = await store.create({ username: 'guest', passwordHash: 'x', role: 'user' } as never);
  await store.requestFriend(a.id, b.id); await store.acceptFriend(b.id, a.id);
  const v = await messages.invite(a, b.id, 'reading', 'ABCD', true);
  assert.ok(v);
  assert.equal(v!.kind, 'invite');
  assert.equal(v!.text, 'invite reading ABCD challenge');
  assert.equal(pushed.length, 0, 'the invite itself already pushed');
  assert.deepEqual(live.map((x) => (x.to as Array<{ id: string; muted: boolean }>).map((t) => [t.id, t.muted])), [[[b.id, true]], [[a.id, true]]]);
  const t = await messages.thread(b, a.id);
  assert.equal(t.messages.at(-1)?.text, 'invite reading ABCD challenge');
  await assert.rejects(messages.edit(a, v!.id, 'hi'));
  await assert.rejects(messages.forward(a, v!.id, [b.id]));
  // nonsense isn't stored
  assert.equal(await messages.invite(a, b.id, 'reading', 'ab', false), null);
  assert.equal(await messages.invite(a, b.id, 'READING!', 'ABCD', false), null);
  assert.equal(await messages.invite(a, a.id, 'reading', 'ABCD', false), null);
  assert.equal((await messages.invite(a, b.id, 'boss', 'WXYZ', false))?.text, 'invite boss WXYZ');
});
