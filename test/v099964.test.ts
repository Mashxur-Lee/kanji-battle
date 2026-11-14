import assert from 'node:assert/strict';
import { test } from 'node:test';
import { MemoryStore } from '../src/server/db/Store';
import { StudyService } from '../src/server/study/StudyService';
import { AuthService } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { createApiRouter } from '../src/server/router';
import { MessageService, mentions, quietFor, type MessageView } from '../src/server/study/MessageService';
import { DailyService, DAILY_WORDS, dailyWords } from '../src/server/study/DailyService';
import { ProgressService } from '../src/server/study/ProgressService';
import { SocialService } from '../src/server/study/SocialService';
import { runMigrations } from '../src/server/migrations';
import { borderUnlocked, characterUnlocked, leaguePassed } from '../src/shared/progress';

const ask = (route: ReturnType<typeof createApiRouter>, token: string, method: string, url: string, body: unknown = {}, query = '') =>
  route({ method, url, query: new URLSearchParams(query), token, ip: '1.2.3.4', json: async () => body });
type Body = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

async function world() {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const auth = new AuthService(store, new TokenSigner('t'));
  const live: Array<{ kind: string; to: unknown; data: unknown }> = [];
  const pushed: Array<{ to: string; from: string }> = [];
  const online = new Set<string>();
  const hub = { presence: (id: string) => ({ online: online.has(id) }), sendTo: () => true };
  const social = new SocialService(store, hub);
  const messages = new MessageService(store, {
    deliver: (to, msg) => live.push({ kind: 'dm', to, data: msg }),
    update: (to, msg) => live.push({ kind: 'update', to, data: msg }),
    typing: (to, conv, from, name, on) => live.push({ kind: 'typing', to, data: { conv, from, name, on } }),
    group: (to, group, event) => live.push({ kind: 'group', to, data: { group, event } }),
    read: (writer, reader) => live.push({ kind: 'read', to: writer, data: reader }),
    push: (to, from) => pushed.push({ to, from }),
    online: (id) => online.has(id),
    status: (id) => social.statusOf(id),
  });
  const route = createApiRouter(auth, study, { messages, social, insights: { feedback: async () => {} } as never });
  const friends = async (a: string, b: string) => { await store.requestFriend(a, b); await store.acceptFriend(b, a); };
  return { store, study, auth, messages, route, live, pushed, online, friends };
}
const PNG = 'data:image/png;base64,' + Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 1, 2, 3, 4]).toString('base64');

test('0.9.9.9.6.4 daily leagues: a league\'s rewards come when you PASS it (7/10), the top one keeps a mark', async () => {
  const store = new MemoryStore();
  let now = Date.parse('2026-11-14T08:00:00Z');
  const daily = new DailyService(store, new ProgressService(store), () => now);
  const run = async (u: { id: string }, day: string, league: string, right: number) => {
    const fresh = (await store.findById(u.id))!;
    await daily.start(fresh, day);
    const words = dailyWords(day, league as never);
    let r;
    for (let i = 0; i < DAILY_WORDS; i++) { r = await daily.answer((await store.findById(u.id))!, i < right ? words[i].reading : 'zzz'); now += 1000; }
    return r!.done!;
  };
  const u = await store.create({ username: 'climber', passwordHash: 'x', role: 'user' } as never);
  await store.update(u.id, { unlocks: ['dleague:N5'] });
  assert.ok(!borderUnlocked('lg-n5', 0, ['dleague:N5']), 'arriving in N5 is not passing it');
  const d1 = await run(u, '2026-11-14', 'N5', 7);
  assert.equal(d1.promoted, 'N4');
  assert.equal(d1.passed, 'N5', 'N5 passed: its rewards (border and the Knight) are yours');
  const un = (await store.findById(u.id))!.unlocks;
  assert.ok(borderUnlocked('lg-n5', 0, un) && characterUnlocked('knight', un) && !borderUnlocked('lg-n4', 0, un));
  // the top league: 7/10 in N1 passes it (once)
  const top = await store.create({ username: 'topper', passwordHash: 'x', role: 'user' } as never);
  await store.update(top.id, { unlocks: ['dleague:N1'] });
  assert.ok(!leaguePassed('N1', ['dleague:N1']));
  const d2 = await run(top, '2026-11-14', 'N1', 8);
  assert.equal(d2.promoted, null);
  assert.equal(d2.passed, 'N1');
  assert.ok(borderUnlocked('lg-n1', 0, (await store.findById(top.id))!.unlocks));
  const d3 = await run(top, '2026-11-15', 'N1', 9);
  assert.equal(d3.passed, null, 'passed already: no second reward screen');
  // fewer than 7: nothing
  const low = await store.create({ username: 'lowscore', passwordHash: 'x', role: 'user' } as never);
  const d4 = await run(low, '2026-11-14', 'KANA', 0);
  assert.equal(d4.passed, null);
  assert.ok(!borderUnlocked('lg-kana', 0, (await store.findById(low.id))!.unlocks), 'the Kana border no longer comes with the first try');
  assert.deepEqual((await daily.overview((await store.findById(u.id))!, '2026-11-14')).passed, ['KANA', 'N5']);
});

test('0.9.9.9.6.4 migration: a league border or character worn without having passed that league comes off', async () => {
  const store = new MemoryStore();
  const a = await store.create({ username: 'early', passwordHash: 'x', role: 'user' } as never);
  await store.update(a.id, { border: 'lg-kana', unlocks: ['dplayed:2026-11-01:KANA'] });
  const b = await store.create({ username: 'earned', passwordHash: 'x', role: 'user' } as never);
  await store.update(b.id, { border: 'lg-kana', unlocks: ['dleague:N4', 'char:knight'] });
  const c = await store.create({ username: 'witchy', passwordHash: 'x', role: 'user' } as never);
  await store.update(c.id, { unlocks: ['dleague:N3', 'char:witch'] });
  await runMigrations(store);
  assert.equal((await store.findById(a.id))!.border, 'none');
  assert.equal((await store.findById(b.id))!.border, 'lg-kana', 'passed Kana: kept');
  assert.ok((await store.findById(b.id))!.unlocks.includes('char:knight'), 'passed N5: the Knight stays');
  assert.ok(!(await store.findById(c.id))!.unlocks.includes('char:witch'), 'in N3, not yet passed it: back to the Goblin');
});

test('0.9.9.9.6.4 messages: edit ("edited"), delete, one reaction each, forward ("Forwarded from")', async () => {
  const w = await world();
  const a = await w.auth.register('anna', 'secret12'), b = await w.auth.register('boris', 'secret12'), c = await w.auth.register('cyril', 'secret12');
  await w.friends(a.user.id, b.user.id); await w.friends(a.user.id, c.user.id);
  const m = ((await ask(w.route, a.token, 'POST', `/api/messages/${b.user.id}`, { text: 'helo' }))!.body as Body).message as MessageView;
  // edit: hers only
  assert.equal((await ask(w.route, b.token, 'PATCH', `/api/messages/m/${m.id}`, { text: 'hacked' }))?.status, 403);
  const ed = ((await ask(w.route, a.token, 'PATCH', `/api/messages/m/${m.id}`, { text: 'hello' }))!.body as Body).message as MessageView;
  assert.equal(ed.text, 'hello'); assert.ok(ed.edited, 'marked edited');
  assert.ok(w.live.some((x) => x.kind === 'update' && Array.isArray(x.to) && (x.to as string[]).includes(b.user.id)), 'Boris sees the edit at once');
  // reactions: one each; another replaces it, the same again takes it back
  let r = ((await ask(w.route, b.token, 'PUT', `/api/messages/m/${m.id}/react`, { emoji: '👍' }))!.body as Body).message as MessageView;
  assert.deepEqual(r.reactions, { '👍': [b.user.id] });
  r = ((await ask(w.route, b.token, 'PUT', `/api/messages/m/${m.id}/react`, { emoji: '❤️' }))!.body as Body).message as MessageView;
  assert.deepEqual(r.reactions, { '❤️': [b.user.id] });
  r = ((await ask(w.route, a.token, 'PUT', `/api/messages/m/${m.id}/react`, { emoji: '❤️' }))!.body as Body).message as MessageView;
  assert.deepEqual(r.reactions, { '❤️': [b.user.id, a.user.id] });
  r = ((await ask(w.route, b.token, 'PUT', `/api/messages/m/${m.id}/react`, { emoji: '❤️' }))!.body as Body).message as MessageView;
  assert.deepEqual(r.reactions, { '❤️': [a.user.id] });
  assert.equal((await ask(w.route, b.token, 'PUT', `/api/messages/m/${m.id}/react`, { emoji: 'lol' }))?.status, 400, 'emoji only');
  assert.equal((await ask(w.route, c.token, 'PUT', `/api/messages/m/${m.id}/react`, { emoji: '👍' }))?.status, 404, 'not his conversation');
  // forward to Cyril
  const fw = ((await ask(w.route, b.token, 'POST', `/api/messages/m/${m.id}/forward`, { to: [a.user.id] }))!.body as Body).messages as MessageView[];
  assert.equal(fw[0].fwd, 'anna');
  assert.equal((await ask(w.route, b.token, 'POST', `/api/messages/m/${m.id}/forward`, { to: [c.user.id] }))?.status, 403, 'not to a stranger');
  // delete: gone for both
  assert.equal((await ask(w.route, b.token, 'DELETE', `/api/messages/m/${m.id}`))?.status, 403);
  const del = ((await ask(w.route, a.token, 'DELETE', `/api/messages/m/${m.id}`))!.body as Body).message as MessageView;
  assert.ok(del.deleted); assert.equal(del.text, '');
  const thread = ((await ask(w.route, b.token, 'GET', `/api/messages/${a.user.id}`))!.body as Body).messages as MessageView[];
  assert.ok(thread.find((x) => x.id === m.id)!.deleted);
});

test('0.9.9.9.6.4 photos: checked, kept behind an unguessable address, sent with a message', async () => {
  const w = await world();
  const a = await w.auth.register('anna', 'secret12'), b = await w.auth.register('boris', 'secret12');
  await w.friends(a.user.id, b.user.id);
  assert.equal((await ask(w.route, a.token, 'POST', '/api/messages/media', { image: 'data:image/png;base64,AAAA' }))?.status, 400, 'not a PNG');
  const up = (await ask(w.route, a.token, 'POST', '/api/messages/media', { image: PNG }))!.body as Body;
  assert.match(up.url, /^\/api\/media\/[\w-]{20,}$/);
  const got = await ask(w.route, '', 'GET', up.url);
  assert.equal(got?.status, 200); assert.equal(got?.raw?.mime, 'image/png');
  const sent = ((await ask(w.route, a.token, 'POST', `/api/messages/${b.user.id}`, { text: '', media: up.id }))!.body as Body).message as MessageView;
  assert.equal(sent.media, up.url);
  // someone else's upload can't be sent as yours
  assert.equal((await ask(w.route, b.token, 'POST', `/api/messages/${a.user.id}`, { text: 'x', media: up.id }))?.status, 400);
});

test('0.9.9.9.6.4 groups: owner, admins, members — who may add, remove, rename, write; leaving passes the crown', async () => {
  const w = await world();
  const [o, a, m, x, s] = await Promise.all(['owner1', 'admin1', 'member1', 'extra1', 'stranger'].map((n) => w.auth.register(n, 'secret12')));
  for (const f of [a, m, x]) await w.friends(o.user.id, f.user.id);
  await w.friends(m.user.id, x.user.id);
  // only friends can be put in
  assert.equal((await ask(w.route, o.token, 'POST', '/api/groups', { name: 'Study club', members: [s.user.id] }))?.status, 403);
  const g = ((await ask(w.route, o.token, 'POST', '/api/groups', { name: '  Study   club ', members: [a.user.id, m.user.id] }))!.body as Body).id as string;
  assert.match(g, /^g:[0-9a-f-]{36}$/);
  let info = ((await ask(w.route, m.token, 'GET', `/api/groups/${encodeURIComponent(g)}`))!.body as Body).group;
  assert.equal(info.name, 'Study club'); assert.equal(info.members.length, 3); assert.equal(info.role, 'member');
  assert.equal((await ask(w.route, s.token, 'GET', `/api/groups/${g}`))?.status, 403, 'not for strangers');
  // in everyone's list, with members and who's online
  w.online.add(a.user.id);
  const list = ((await ask(w.route, m.token, 'GET', '/api/messages'))!.body as Body).conversations as Body[];
  const row = list.find((c) => c.id === g)!;
  assert.deepEqual(row.group, { members: 3, online: 1, role: 'member' });
  // the owner makes an admin; only the owner can
  assert.equal((await ask(w.route, m.token, 'PUT', `/api/groups/${g}/members/${a.user.id}`, { role: 'admin' }))?.status, 403);
  assert.equal((await ask(w.route, o.token, 'PUT', `/api/groups/${g}/members/${a.user.id}`, { role: 'admin' }))?.status, 200);
  // renaming: admins (members can't by default)
  assert.equal((await ask(w.route, m.token, 'PATCH', `/api/groups/${g}`, { name: 'Mine now' }))?.status, 403);
  assert.equal((await ask(w.route, a.token, 'PATCH', `/api/groups/${g}`, { name: 'Kanji club' }))?.status, 200);
  // a member adds their friend (members may invite by default) — not a stranger
  assert.equal((await ask(w.route, m.token, 'POST', `/api/groups/${g}/members`, { ids: [s.user.id] }))?.status, 403);
  info = ((await ask(w.route, m.token, 'POST', `/api/groups/${g}/members`, { ids: [x.user.id] }))!.body as Body).group;
  assert.equal(info.members.length, 4);
  // messages: everyone gets them, read receipts, unread counts
  const sent = ((await ask(w.route, m.token, 'POST', `/api/messages/${encodeURIComponent(g)}`, { text: 'hi all' }))!.body as Body).message as MessageView;
  assert.equal(sent.to, g);
  const dm = w.live.filter((l) => l.kind === 'dm' && (l.data as MessageView).id === sent.id)[0];
  assert.deepEqual((dm.to as Array<{ id: string }>).map((r) => r.id).sort(), [o.user.id, a.user.id, m.user.id, x.user.id].sort());
  assert.equal(((await ask(w.route, o.token, 'GET', '/api/messages/unread'))!.body as Body).unread >= 1, true);
  const th = (await ask(w.route, o.token, 'GET', `/api/messages/${g}`))!.body as Body;
  assert.ok(th.messages.some((v: MessageView) => v.kind === 'sys' && v.text.startsWith('renamed\nKanji club')), 'the rename is a line in the chat');
  assert.equal(th.people[m.user.id].name, 'member1');
  assert.ok(((await ask(w.route, m.token, 'GET', `/api/messages/${g}`))!.body as Body).messages.find((v: MessageView) => v.id === sent.id).read, 'read by the owner: ✓✓');
  // only admins may write (the owner says so)
  await ask(w.route, o.token, 'PATCH', `/api/groups/${g}`, { perms: { send: 'admins' } });
  assert.equal((await ask(w.route, m.token, 'POST', `/api/messages/${g}`, { text: 'hey' }))?.status, 403);
  assert.equal((await ask(w.route, a.token, 'POST', `/api/messages/${g}`, { text: 'admins only now' }))?.status, 200);
  // removing: an admin removes a member, not the owner
  assert.equal((await ask(w.route, a.token, 'DELETE', `/api/groups/${g}/members/${o.user.id}`))?.status, 403);
  assert.equal((await ask(w.route, a.token, 'DELETE', `/api/groups/${g}/members/${x.user.id}`))?.status, 200);
  assert.ok(w.live.some((l) => l.kind === 'group' && (l.data as Body).event === 'removed' && (l.to as string[]).includes(x.user.id)));
  assert.equal((await ask(w.route, x.token, 'GET', `/api/messages/${g}`))?.status, 403, 'gone means gone');
  // an admin deletes a member's message; a member can't delete others'
  const own = ((await ask(w.route, a.token, 'POST', `/api/messages/${g}`, { text: 'to delete' }))!.body as Body).message as MessageView;
  assert.equal((await ask(w.route, m.token, 'DELETE', `/api/messages/m/${own.id}`))?.status, 403);
  assert.equal((await ask(w.route, a.token, 'DELETE', `/api/messages/m/${sent.id}`))?.status, 200);
  // the owner leaves: the admin takes over
  await ask(w.route, o.token, 'POST', `/api/groups/${g}/leave`);
  info = ((await ask(w.route, a.token, 'GET', `/api/groups/${g}`))!.body as Body).group;
  assert.equal(info.role, 'owner');
  assert.equal(info.members.length, 2);
  // the new owner deletes it
  assert.equal((await ask(w.route, m.token, 'DELETE', `/api/groups/${g}`))?.status, 403);
  assert.equal((await ask(w.route, a.token, 'DELETE', `/api/groups/${g}`))?.status, 200);
  assert.equal((await ask(w.route, m.token, 'GET', `/api/groups/${g}`))?.status, 404);
});

test('0.9.9.9.6.4 notifications: all, only @mentions, or nothing — per conversation; pushes follow it', async () => {
  const w = await world();
  const a = await w.auth.register('anna', 'secret12'), b = await w.auth.register('boris', 'secret12');
  await w.friends(a.user.id, b.user.id);
  const g = ((await ask(w.route, a.token, 'POST', '/api/groups', { name: 'G', members: [b.user.id] }))!.body as Body).id as string;
  assert.equal((await ask(w.route, b.token, 'PUT', '/api/messages/notify', { who: g, mode: 'mentions' }))?.status, 200);
  const bRec = (await w.store.findById(b.user.id))!;
  assert.ok(quietFor(bRec, g, 'hello everyone'));
  assert.ok(!quietFor(bRec, g, 'hey @boris look'));
  assert.ok(mentions('cc @Boris.', bRec) && !mentions('boris@mail.com', bRec));
  w.pushed.length = 0;
  await ask(w.route, a.token, 'POST', `/api/messages/${g}`, { text: 'plain' });
  assert.equal(w.pushed.length, 0, 'only mentions: no push for a plain message');
  await ask(w.route, a.token, 'POST', `/api/messages/${g}`, { text: '@boris come' });
  assert.deepEqual(w.pushed.map((p) => p.from), [g], 'a mention: a push (it opens the group)');
  await ask(w.route, b.token, 'PUT', '/api/messages/notify', { who: g, mode: 'none' });
  w.pushed.length = 0;
  await ask(w.route, a.token, 'POST', `/api/messages/${g}`, { text: '@boris again' });
  assert.equal(w.pushed.length, 0, 'muted: nothing');
  const row = (((await ask(w.route, b.token, 'GET', '/api/messages'))!.body as Body).conversations as Body[]).find((c) => c.id === g)!;
  assert.equal(row.notify, 'none'); assert.equal(row.muted, true);
});

test('0.9.9.9.6.4 typing… and a friend\'s status (online, playing, away, last seen)', async () => {
  const w = await world();
  const a = await w.auth.register('anna', 'secret12'), b = await w.auth.register('boris', 'secret12'), s = await w.auth.register('stranger', 'secret12');
  await w.friends(a.user.id, b.user.id);
  await w.messages.typing((await w.store.findById(a.user.id))!, b.user.id, true);
  assert.deepEqual(w.live.at(-1), { kind: 'typing', to: [b.user.id], data: { conv: a.user.id, from: a.user.id, name: 'anna', on: true } });
  const n = w.live.length;
  await w.messages.typing((await w.store.findById(s.user.id))!, a.user.id, true);
  assert.equal(w.live.length, n, 'a stranger\'s typing goes nowhere');
  await w.store.update(b.user.id, { lastSeen: Date.now() - 5 * 60_000 });
  const th = (await ask(w.route, a.token, 'GET', `/api/messages/${b.user.id}`))!.body as Body;
  assert.equal(th.with.status.online, false); assert.ok(th.with.status.lastSeen > 0, 'last seen');
  // a friend's card says it too (a stranger's doesn't)
  w.online.add(b.user.id);
  assert.equal(((await ask(w.route, a.token, 'GET', `/api/users/${b.user.id}`))!.body as Body).profile.status.online, true);
  assert.equal(((await ask(w.route, s.token, 'GET', `/api/users/${b.user.id}`))!.body as Body).profile.status, undefined);
});

test('0.9.9.9.6.4 profiles: the Daily challenge league; friends: words learned today', async () => {
  const w = await world();
  const a = await w.auth.register('anna', 'secret12'), b = await w.auth.register('boris', 'secret12');
  await w.friends(a.user.id, b.user.id);
  await w.store.update(b.user.id, { unlocks: ['dleague:N4'], critCount: 12, critExpires: Date.now() + 3600_000 });
  const p = ((await ask(w.route, a.token, 'GET', `/api/users/${b.user.id}`))!.body as Body).profile;
  assert.equal(p.league, 'N4'); assert.equal(p.today, 12);
  const social = new SocialService(w.store, { presence: () => ({ online: false }), sendTo: () => true });
  assert.equal((await social.list(a.user.id)).find((f) => f.id === b.user.id)!.today, 12);
});
