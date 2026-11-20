// 0.9.9.9.7.4 — the last round of the pre-1.0 review, and the owner's reports: the hit reaction, the email "Later",
// the speed on phones, block and report, unused code, emojis, the Windows build.
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';
import { AuthService } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { MemoryStore } from '../src/server/db/Store';
import { createApiRouter } from '../src/server/router';
import { MessageService } from '../src/server/study/MessageService';
import { SocialService } from '../src/server/study/SocialService';
import { StudyService } from '../src/server/study/StudyService';
import { CURATED, KANA_ALT } from '../src/shared/vocab';
import { VERSION } from '../src/shared/version';

const src = (f: string) => readFileSync(f, 'utf8').replace(/\r\n/g, '\n');

test('0.9.9.9.7.4 version, patch notes, Russian for the new words', () => {
  assert.ok(VERSION >= '0.9.9.9.7.4');
  assert.match(src('src/client/whatsnew.ts'), /v: '0\.9\.9\.9\.7\.4'/);
  const ru = src('src/client/i18n.ts');
  for (const s of ["'Block':", "'Unblock':", "'Report':", "'Send report':", "'Rude or hurtful':", "'Later: you can play now, but until your email is confirmed", "'(Only to a confirmed email"]) assert.ok(ru.includes(s), s);
});

// ── the owner's report: the hit ──────────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.7.4 a hit: the staff arm no longer runs away; the body takes it (chest, head a beat later, knees, a catch step)', () => {
  const a3 = src('src/client/arena3d.ts');
  // the arm eases on a value of its own; the hit's jolt goes on top of it (it went into the easing and piled up)
  assert.match(a3, /f\.armX = \(f\.armX \?\? m\.arm\.rotation\.x\) \+ \(ax - \(f\.armX \?\? m\.arm\.rotation\.x\)\) \* Math\.min\(1, dt \* 10\);\s*m\.arm\.rotation\.x = f\.armX;/);
  assert.doesNotMatch(a3, /m\.arm\.rotation\.x \+= \(ax - m\.arm\.rotation\.x\)/, 'no easing from the jolted value');
  // every part with its own timing
  for (const part of ['const hit = hitCurve(since, 60, 110, 520)', 'const head = hitCurve(since - 40,', 'const absorb = hitCurve(since, 110,', 'const step = hitCurve(since, 150,', 'const rebound = hitCurve(since - 430,']) assert.ok(a3.includes(part), part);
  // about 15° at the chest (it was ~45°, ~55° with the head: a limbo)
  const glb = src('src/client/glbchars.ts');
  assert.match(glb, /chest\.rotation\.x = -0\.08 \* k;[\s\S]{0,80}spine\.rotation\.x -= 0\.16 \* k;[\s\S]{0,40}neck\.rotation\.x -= 0\.04 \* k;/);
  assert.match(a3, /m\.flinch\?\.\(hit\);/);
});

// ── the owner's question: the email's "Later" ───────────────────────────────────────────────────────────────────
test('0.9.9.9.7.4 "Later" on the email code says what it means before it is pressed', () => {
  const acc = src('src/client/account.ts');
  assert.match(acc, /const laterNote = el\('p', 'hint code-later', tr\('Later: you can play now, but until your email is confirmed “Forgot password\?” can’t send you a code/);
  assert.match(acc, /f\.append\(h3, line, code, msg, extra, laterNote, row\);/);
  assert.match(acc, /'\(Only to a confirmed email - one you entered the code for\.\)'/, 'and Forgot password? says so too');
});

// ── #13: block and report ────────────────────────────────────────────────────────────────────────────────────────
async function people() {
  const store = new MemoryStore();
  const hub = { presence: () => ({ online: false }), sendTo: () => true };
  const social = new SocialService(store, hub);
  const messages = new MessageService(store, { deliver: () => {} });
  const mk = async (n: string) => (await store.create({ username: n, passwordHash: 'x', role: 'user' } as never));
  const ann = await mk('ann'), bob = await mk('bob');
  await store.requestFriend(ann.id, bob.id); await store.acceptFriend(bob.id, ann.id);
  const me = async (u: { id: string }) => (await store.findById(u.id))!;
  return { store, social, messages, ann, bob, me };
}

test('0.9.9.9.7.4 #13 blocked: no messages either way, no friend requests either way, no longer friends — and they aren\'t told', async () => {
  const { social, messages, ann, bob, me } = await people();
  await messages.send(await me(bob), ann.id, 'hi');
  assert.deepEqual(await social.block(await me(ann), bob.id, true), [bob.id]);
  assert.equal(await social.areFriends(ann.id, bob.id), false, 'the friendship ends');
  await assert.rejects(messages.send(await me(bob), ann.id, 'hello?'), /You can write to your friends/, 'not even as an answer to an old message');
  await assert.rejects(messages.send(await me(ann), bob.id, 'bye'), /You can write to your friends/);
  await assert.rejects(social.request(bob.id, 'bob', 'ann'), /can't add this player/);
  await assert.rejects(social.request(ann.id, 'ann', 'bob'), /can't add this player/);
  // unblocked: a request works again
  assert.deepEqual(await social.block(await me(ann), bob.id, false), []);
  assert.equal(await social.request(bob.id, 'bob', 'ann'), 'requested');
});

test('0.9.9.9.7.4 #13 a report reaches the team\'s inbox — with the message only if the reporter could see it', async () => {
  const { store, social, messages, ann, bob, me } = await people();
  const m = await messages.send(await me(bob), ann.id, 'you are terrible');
  await social.report(await me(ann), bob.id, 'rude', 'keeps saying this', m.id);
  const [r] = await store.reports(10);
  assert.equal(r.kind, 'report');
  assert.match(r.text, /^Report on @bob: rude or hurtful - keeps saying this\nThe message: “you are terrible”$/);
  assert.equal(JSON.parse(r.meta).target, bob.id);
  // someone else's message isn't quoted
  const carl = await store.create({ username: 'carl', passwordHash: 'x', role: 'user' } as never);
  await social.report((await store.findById(carl.id))!, bob.id, 'nonsense', '', m.id);
  const latest = (await store.reports(10)).find((x) => x.userId === carl.id)!;
  assert.match(latest.text, /^Report on @bob: something else$/);
  // ten an hour
  for (let i = 0; i < 9; i++) await social.report(await me(ann), bob.id, 'spam', '', null);
  await assert.rejects(social.report(await me(ann), bob.id, 'spam', '', null), /a lot of reports/);
});

test('0.9.9.9.7.4 #13 guests can\'t block or report (they can\'t write to people either)', async () => {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('s'));
  const route = createApiRouter(auth, new StudyService(store), { social: new SocialService(store, { presence: () => ({ online: false }), sendTo: () => true }) });
  const g = await auth.guest();
  for (const url of ['/api/block', '/api/report']) {
    const out = await route({ method: url === '/api/block' ? 'PUT' : 'POST', url, query: new URLSearchParams(), token: g.token, ip: '1.1.1.1', json: async () => ({ id: g.user.id }) });
    assert.equal(out!.status, 403, url);
  }
});

// ── speed on phones ──────────────────────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.7.4 speed: the menu background rests off the menu; no 3D at login on phones; shaders unchecked; staff pictures only in Customize', () => {
  const css = src('public/style.css');
  assert.match(css, /body:not\(\[data-screen="menu"\]\):not\(\[data-screen="auth"\]\) :is\(\.art-stage, \.art-stage \*, \.menu-veil, \.menu-veil \*\) \{ animation-play-state: paused !important; \}/);
  assert.match(src('src/client/arena.ts'), /export function preloadArena\(\) \{ if \(wanted\(\) && !smallOrTouch\(\)\)/);
  assert.match(src('src/client/arena3d.ts'), /renderer\.debug\.checkShaderErrors = location\.search\.includes\('debug3d'\);/);
  assert.match(src('src/client/staffpreview.ts'), /renderer\.debug\.checkShaderErrors = location\.search\.includes\('debug3d'\);/);
  assert.match(src('src/client/study.ts'), /if \(\$\('customize'\)\.hidden\) \{ thumbsRunning = false; return; \}/);
});

// ── #21–#25: unused code, emojis, line endings; the Windows build ────────────────────────────────────────────────
test('0.9.9.9.7.4 #21 the hand-written word lists are the vocabulary script\'s source again (it couldn\'t run)', () => {
  assert.ok((CURATED.N5?.length ?? 0) > 20 && (CURATED.KANA?.length ?? 0) > 40);
  assert.deepEqual(KANA_ALT['ぢ'], ['じ']);
  assert.match(src('scripts/build-vocab.ts'), /import \{ CURATED, KANA_ALT, LEVEL_DIFFICULTY \} from '\.\.\/src\/shared\/vocab'/);
});

test('0.9.9.9.7.4 #23 unused code fails the typecheck from now on', () => {
  for (const f of ['tsconfig.json', 'tsconfig.client.json']) assert.match(src(f), /"noUnusedLocals": true/, f);
});

test('0.9.9.9.7.4 #24 no emojis as design in the UI (the owner\'s rule) — players\' own emoji (reactions, the picker) are theirs', () => {
  const EMOJI = /[\u{1F300}-\u{1FAFF}]|[\u{2600}-\u{27BF}]\u{FE0F}|[⚔✍✉⚡]/u;
  const allowed = new Set(['emojis.ts', 'whatsnew.ts']); // (the picker's list; old patch notes quote old labels)
  const files = (dir: string): string[] => readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? files(path.join(dir, e.name)) : e.name.endsWith('.ts') ? [path.join(dir, e.name)] : []));
  const found: string[] = [];
  for (const f of [...files('src/client'), ...files('src/server'), 'public/index.html']) {
    if (allowed.has(path.basename(f))) continue;
    src(f).split('\n').forEach((line, i) => {
      const code = line.replace(/\/\/.*$/, '').replace(/^\s*\*.*$/, '').replace(/\/\*.*?\*\//g, '');
      if (EMOJI.test(code) && !/Bug report\\n\|\^\(💡 \)\?Suggestion/.test(code)) found.push(`${f}:${i + 1}`);
    });
  }
  assert.deepEqual(found, []);
});

test('0.9.9.9.7.4 #25 LF line endings everywhere; the Windows build installs exactly its locked versions', () => {
  assert.match(src('.gitattributes'), /^\* text=auto eol=lf$/m);
  assert.ok(existsSync('desktop/package-lock.json'), 'desktop/package-lock.json');
  assert.match(src('.github/workflows/apps.yml'), /working-directory: desktop[\s\S]{0,300}run: npm ci --no-audit --no-fund/);
  assert.match(src('.gitignore'), /^GitHub CLI\/$/m, 'the GitHub CLI\'s own settings are never committed');
});
