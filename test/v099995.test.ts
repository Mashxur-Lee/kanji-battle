// 0.9.9.9.9.5: the phone's More tab; deleting your own account; the Privacy policy and the Terms; agreeing to them
// (and the age) on Register.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { AuthService, AuthError } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { MemoryStore } from '../src/server/db/Store';

import { VERSION } from '../src/shared/version';

const src = (f: string) => readFileSync(f, 'utf8').replace(/\r\n/g, '\n');

test('0.9.9.9.9.5 phones: five tabs and More (the rest of the pages in a sheet; Escape closes it)', () => {
  const nav = src('src/client/nav.ts');
  assert.match(nav, /more\.className = 'an-item an-more'/);
  assert.match(nav, /for \(const b of nav\.querySelectorAll<HTMLButtonElement>\('\.an-item:not\(\.an-phone\)'\)\)/, 'every page that is not a tab is in More');
  assert.match(nav, /if \(e\.key === 'Escape' && !sheet\.hidden\) \{ setMore\(false\); more\.focus\(\); \}/);
  assert.ok(src('src/client/i18n.ts').includes("'More':"));
});

test('0.9.9.9.9.5 delete your own account: the password, then everything goes and every session is closed', async () => {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('t'));
  await auth.seed([{ username: 'ann', password: 'tea-kettle-42', role: 'user' }, { username: 'boss', password: 'tea-kettle-43', role: 'admin' }]);
  const kicked: string[] = [];
  auth.onBan((id) => kicked.push(id));
  const ann = (await store.findByUsername('ann'))!;
  await assert.rejects(auth.deleteSelf(ann, 'wrong-one'), (e) => e instanceof AuthError && e.status === 403);
  assert.ok(await store.findById(ann.id), 'a wrong password deletes nothing');
  await auth.deleteSelf(ann, 'tea-kettle-42');
  assert.equal(await store.findById(ann.id), null);
  assert.deepEqual(kicked, [ann.id]);
  // an admin can't (the role goes first)
  const boss = (await store.findByUsername('boss'))!;
  await assert.rejects(auth.deleteSelf(boss, 'tea-kettle-43'), AuthError);
  assert.ok(await store.findById(boss.id));
  // a guest has no password to give
  const g = await auth.guest();
  await auth.deleteSelf((await store.findById(g.user.id))!, undefined);
  assert.equal(await store.findById(g.user.id), null);
  assert.match(src('src/server/router.ts'), /r\.method === 'DELETE' && url === '\/api\/me'\)/);
});

test('0.9.9.9.9.5 the Privacy policy and the Terms: pages of their own, linked from sign-up, About and the menu; agreeing on Register', () => {
  for (const f of ['public/privacy.html', 'public/terms.html', 'public/legal.css']) assert.ok(existsSync(f), f);
  const pp = src('public/privacy.html'), tos = src('public/terms.html');
  for (const s of ['no cookies', 'Delete my account', 'Firebase', 'Brevo', 'nothing to unsubscribe from', '13 or older']) assert.ok(pp.includes(s), s);
  for (const s of ['free', 'nothing to refund', 'No cheating']) assert.ok(tos.includes(s), s);
  for (const p of [pp, tos]) assert.ok(p.includes('<article id="ru" lang="ru">'), 'Russian too');
  const html = src('public/index.html');
  assert.match(html, /<label id="authConsentRow" class="consent" hidden><input id="authConsent" type="checkbox">/);
  assert.ok(!html.includes('Ask the admin to delete your account'));
  assert.match(html, /<button id="accDelete" class="link acc-delete" type="button">Delete my account<\/button>/);
  assert.match(src('src/client/ui.ts'), /\$\('authConsentRow'\)\.hidden = login; \$<HTMLInputElement>\('authConsent'\)\.required = !login;/);
  // the app's offline copy doesn't swap them for the game
  assert.match(src('src/client/sw.js'), /shell\(LEGAL\.has\(url\.pathname\) \? url\.pathname : '\/index\.html', req\)/);
  assert.match(src('public/sitemap.xml'), /privacy\.html/);
});

test('0.9.9.9.9.5 version and patch notes', () => {
  assert.equal(VERSION, '0.9.9.9.9.5');
  assert.ok(src('src/client/whatsnew.ts').includes("v: '0.9.9.9.9.5'"));
});

test('0.9.9.9.9.5 the Channel pose: each hand aimed by where it really is on the arm, the grips from the model’s own shoulders', () => {
  const p = src('src/client/poses3d.ts');
  for (const s of [
    'q1.setFromUnitVectors(hand && hand.lengthSq() > 1e-6 ? hand.clone().normalize() : DOWN, dir);',
    'const gripY = (s: THREE.Vector3, len: number, x: number, z: number) =>',
    'reach(m.leftArm, m.body, new THREE.Vector3(x, yL + lift, z), k, m.leftHand);',
  ]) assert.ok(p.includes(s), s);
  assert.ok(src('src/client/glbchars.ts').includes('const leftHand = leftArm.worldToLocal('));
});
