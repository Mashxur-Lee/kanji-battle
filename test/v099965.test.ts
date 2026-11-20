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

import { Room, DEFAULT_ROOM_OPTIONS } from '../src/server/Room';
import type { ServerMessage } from '../src/shared/protocol';
function client() {
  const msgs: ServerMessage[] = [];
  return { msgs, send: (m: ServerMessage) => msgs.push(m), all: <T extends ServerMessage['type']>(t: T) => msgs.filter((m) => m.type === t) as Array<Extract<ServerMessage, { type: T }>> };
}

test('0.9.9.9.6.5 the host changes the room\'s mode in the lobby (others told; AI who don\'t fit leave; a party too big can\'t)', () => {
  const room = new Room('MODE', 'boss', { onEmpty: () => {} }, DEFAULT_ROOM_OPTIONS);
  const a = client(), b = client();
  room.join('a', 'Ann', a); room.join('b', 'Bo', b);
  assert.equal(room.setMode('b', 'reading'), 'Only the host can change the mode');
  room.addBot('a', 'N3'); room.addBot('a', 'N4');
  // two people and two AI → a duel: the AI leave, the two people stay
  assert.equal(room.setMode('a', 'reading'), null);
  assert.equal(room.mode, 'reading');
  assert.deepEqual(a.all('lobby').at(-1)!.players.map((p) => p.name), ['Ann', 'Bo']);
  // three people can't go into a duel
  room.setMode('a', 'boss');
  const c0 = client(); room.join('x', 'Xi', c0);
  assert.equal(room.setMode('a', 'deck'), 'Too many players for Deck Duel - it is for 2');
  room.leave('x'); room.leave('b');
  room.addBot('a', 'N3'); room.addBot('a', 'N5');
  assert.equal(room.setMode('a', 'deck'), null);
  assert.equal(room.mode, 'deck');
  const lobby = a.all('lobby').at(-1)!;
  assert.equal(lobby.mode, 'deck');
  assert.equal(lobby.players.length, 2, 'Ann and one AI (the other left: a duel is for two)');
  // back to Boss: the party may grow again
  assert.equal(room.setMode('a', 'boss'), null);
  assert.equal(a.all('lobby').at(-1)!.maxPlayers, 4);
  // somebody else is told
  const c = client(); room.join('c', 'Cy', c);
  room.setMode('a', 'rapid');
  assert.match(c.all('notice').at(-1)!.message, /Ann switched the game to 1v1 Rapid/);
  assert.equal(c.all('joined').at(-1)!.mode, 'rapid');
  room.leave('c'); room.leave('a');
});

test('0.9.9.9.6.5 a group\'s picture can be taken away again (and the chat says so)', async () => {
  const store = new MemoryStore();
  const messages = new MessageService(store, { deliver: () => {}, online: () => false });
  const a = await store.create({ username: 'owner', passwordHash: 'x', role: 'user' } as never);
  const b = await store.create({ username: 'pal', passwordHash: 'x', role: 'user' } as never);
  await store.requestFriend(a.id, b.id); await store.acceptFriend(b.id, a.id);
  const png = 'data:image/png;base64,' + Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0, 0, 0]).toString('base64');
  const up = await messages.upload(a, png);
  const { id } = await messages.createGroup(a, 'Club', [b.id], up.id);
  assert.ok((await messages.groupInfo(a, id)).pic);
  await messages.updateGroup(a, id, { pic: null });
  assert.equal((await messages.groupInfo(a, id)).pic, null);
  const t = await messages.thread(a, id);
  assert.equal(t.messages.at(-1)?.text.split('\n')[0], 'nophoto');
});

import { AuthService } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
test('0.9.9.9.6.5 change your password: the current one first; every other device is signed out', async () => {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('secret'));
  const { token: phone } = await auth.register('walker', 'first-pass', `t${Math.random().toString(36).slice(2)}@test.dev`);
  await new Promise((r) => setTimeout(r, 1100)); // (a token from an earlier second)
  const u = await auth.authenticate(phone);
  await assert.rejects(auth.changePassword(u, 'wrong', 'second-pass'), /current password is wrong/);
  await assert.rejects(auth.changePassword(u, 'first-pass', '123'), /at least 8/);
  const { token: pc } = await auth.changePassword(u, 'first-pass', 'second-pass');
  await assert.rejects(auth.authenticate(phone), /password was changed/);
  assert.equal((await auth.authenticate(pc)).id, u.id, 'the device that changed it stays signed in');
  await assert.rejects(auth.login('walker', 'first-pass'));
  assert.ok((await auth.login('walker', 'second-pass')).token);
});
