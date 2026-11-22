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

test('0.9.9.9.9.5 pages are drawn at the size chosen in Settings (not shrunk with a small window); their width limit leaves the navigation out', () => {
  const z = src('src/client/zoom.ts');
  assert.ok(z.includes("const z = Math.round(pref * (pageMode() ? Math.max(1, f) : f) * 1000) / 1000;"));
  assert.ok(z.includes("document.body?.classList.contains('page-zoom')"));
  const nav = src('src/client/nav.ts');
  assert.ok(nav.includes("const page = on || s === 'lobby';"), 'the private room too');
  const css = src('public/style.css');
  assert.ok(css.includes('body.has-nav #history { max-width: calc(980px + var(--nav-pad)); }'));
  assert.ok(css.includes('body.has-nav { --nav-pad: calc(60px + 212px + 28px); }'));
});

test('0.9.9.9.9.5 the navigation: Back (a page\u2019s own step back, the page before, or Home), Home stands out, a gear for Settings, no menu between two pages', () => {
  const nav = src('src/client/nav.ts');
  assert.ok(nav.includes("backBtn.type = 'button'; backBtn.className = 'an-back';"));
  assert.ok(nav.includes('const own = [...document.querySelectorAll<HTMLElement>(`#${s} > .back:not(.to-menu)`)]'));
  assert.ok(nav.includes("settings: '<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M19.78 10.13"), 'the menu\u2019s own gear');
  assert.ok(nav.includes("document.body.classList.add('nav-jump');"));
  assert.ok(!nav.includes('b.getClientRects().length && /menu'), '"← Menu" is used even though it is hidden behind the navigation (its clean-up runs)');
  const css = src('public/style.css');
  assert.ok(css.includes('body.nav-jump #menu { visibility: hidden !important; }'));
  assert.ok(css.includes('.app-nav .an-item[data-nav="home"] { color: #fff; background: linear-gradient(135deg, var(--accent), #7d5cf0);'));
  assert.ok(css.includes('.app-nav .an-item.an-more { display: flex; }'), 'More shows on phones (it was hidden by a more specific rule)');
});

test('0.9.9.9.9.5 the private room: a calm page, one card for the room, cards beside it, from the top', () => {
  const css = src('public/style.css');
  assert.ok(css.includes('body[data-screen="lobby"] #bg::after { opacity: 1 !important;'));
  // (b) four cards across the page: the room and the chat, the party, the levels and the guide
  assert.ok(css.includes('#lobby.lobby-grid:not([hidden]) { display: grid; grid-template-columns: minmax(250px, 310px) minmax(360px, 1fr) minmax(290px, 370px);'));
  const html = src('public/index.html');
  const room = html.slice(html.indexOf('<section id="lobby"'), html.indexOf('</section>', html.indexOf('<section id="lobby"')));
  for (const c of ['lb-room', 'lb-party', 'lb-talk', 'lb-side']) assert.ok(room.includes(`class="lb-card ${c}"`) || room.includes(`class="${c}"`), c);
  for (const id of ['code', 'copyCode', 'lobbyOpen', 'lobbyPlayers', 'addBotBtn', 'botLevel', 'lobbyInvite', 'start', 'readyBtn', 'lobbyChat', 'levels', 'modeGuide', 'deckGuide']) assert.ok(room.includes(`id="${id}"`), id);
  assert.ok(src('src/client/selects.ts').includes("!(wrap.parentElement?.contains(t) && (t as Element).closest?.('button'))"), 'Add bot works while the level list is open');
});

test('0.9.9.9.9.5 the arenas by day: colours by what things are (not the sunset greyed), clearer fog, a colour grade on High', () => {
  const kit = src('src/client/arenas/kit.ts');
  assert.ok(kit.includes('const recolour = (c: C3, fam: C3): C3 =>'), 'stone, grass, bark, water… each its own daylight colour');
  assert.ok(!kit.includes("out[k] = Array.isArray(v[0]) ? v.map((c: C3) => neutral(c)) : neutral(v as C3);\n    }\n  }\n  out.emit"), 'no more greying everything by half');
  assert.ok(src('src/client/arena3d.ts').includes("if (current?.time === 'day') { fog.near *= 1.4; fog.far *= 1.7; }"));
  const look = src('src/client/arenalook.ts');
  assert.ok(look.includes('composer.addPass(new ShaderPass(GRADE));'));
  assert.ok(look.indexOf('new ShaderPass(GRADE)') < look.indexOf('new ShaderPass(VIGNETTE)'));
});

test('0.9.9.9.9.5 the arenas like their paintings: a wet floor mirroring the sky (High), the kanji circle in the arena\u2019s colour, the World Tree on the horizon, the forest\u2019s canopy', () => {
  const kit = src('src/client/arenas/kit.ts');
  assert.ok(kit.includes('export function wetStone(sky: THREE.Texture, flat = true, shine = 0.85, rough = 0.42) {'));
  assert.ok(kit.includes("floorMesh.name = 'arena-floor';"));
  for (const a of ['castle', 'forest', 'plains', 'swamp', 'worldtree']) assert.ok(src(`src/client/arenas/${a}.ts`).includes('sky: () => rig.envMap(), accent: ['), a);
  const a3 = src('src/client/arena3d.ts');
  assert.ok(a3.includes('const sky = !lite && env.sky ? env.sky() : null;'), 'High only');
  assert.ok(a3.includes("(rune.material as THREE.MeshBasicMaterial).color.copy(env.accent ? new THREE.Color(...env.accent) : RUNE_PURPLE);"));
  assert.ok(src('src/client/arenas/worldtree.ts').includes("crown.name = 'world-tree-crown';"));
  assert.ok(src('src/client/arenas/forest.ts').includes('// 0.9.9.9.9.5: the canopy'));
});

test('0.9.9.9.9.5 the swords: five, each grander than the last, the rewards of the Kana, N5, N4, N3 and N2 leagues (the server checks it too)', async () => {
  const { STAFFS, staffUnlocked, isSwordId, isStaff } = await import('../src/shared/progress');
  const swords = STAFFS.filter((s) => s.sword);
  assert.deepEqual(swords.map((s) => s.id), ['iron', 'longsword', 'saber', 'katana', 'dragonfang']);
  assert.deepEqual(swords.map((s) => s.league), ['KANA', 'N5', 'N4', 'N3', 'N2'], 'a league each, low to high');
  assert.equal(new Set(STAFFS.map((s) => s.id)).size, STAFFS.length, 'no id twice (the Ember Staff keeps "ember")');
  assert.ok(isStaff('katana') && isSwordId('katana') && !isSwordId('ember'));
  assert.equal(staffUnlocked('iron', 99, [], 10_000_000), false, 'neither a streak nor a level opens a sword');
  assert.equal(staffUnlocked('iron', 0, ['dleague:N5']), true, 'passing the Kana league (now in N5)');
  assert.equal(staffUnlocked('longsword', 0, ['dleague:N5']), false);
  assert.equal(staffUnlocked('dragonfang', 0, ['dleague:N1']), true, 'passing N2');
  assert.equal(staffUnlocked('saber', 0, ['staff:saber']), true, 'kept from before (the level it had)');
  assert.equal(staffUnlocked('verdant', 0, [], 0), true, 'the staffs as before');
  assert.ok(src('src/server/study/StudyService.ts').includes('staffUnlocked(s, u.bestStreak ?? 0, u.unlocks, u.xp ?? 0)'));
});

test('0.9.9.9.9.5 the swords in the arena: their own model, a tremor (no ∞), a slash and its wave, a cut on the target, their own sound, 2D art', () => {
  assert.ok(src('src/client/staffs3d.ts').includes('if (isSword(id)) return buildSword(id!, glowTex);'));
  const a3 = src('src/client/arena3d.ts');
  assert.ok(a3.includes('eightAmp += ((charge > 0.05 && !still && !swordMe ?'), 'no figure-eight with a sword');
  assert.ok(a3.includes('const SWINGS = ['), 'three slashes');
  assert.ok(a3.includes("if (from === 'me' && swordCast) swingNo = (swingNo + 1 + Math.floor(Math.random() * 2)) % SWINGS.length;"), 'a different slash each time');
  assert.ok(a3.includes("from === 'me' && swordCast ? SWINGS[swingNo].tilt : undefined"), 'the wave flies at the angle of the cut');
  assert.ok(a3.includes('if (before < 0 && fl.launch) { fl.from.copy(fl.launch());'), 'it leaves the blade at the moment of the cut');
  assert.ok(src('src/client/swords3d.ts').includes('r.geometry.setDrawRange(0, Math.floor((n * grow) / 3) * 3);'), 'the ribbons wind up the blade as it powers up');
  assert.ok(src('src/client/study.ts').includes('const THUMBS_KEY = `kb:staffThumbs:${VERSION}:${THUMBS_REV}`;'), 'new pictures in Customize when the models change');
  assert.ok(a3.includes('else if (u >= 0.66) { A = sw.to; B = [0, 0, 0, 0, 0]; k = sm((u - 0.66) / 0.34); }'), 'a smooth return (it snapped back)');
  assert.ok(a3.includes('channelShown = 0; channelLevel = 0;'), 'a miss drops the charge: the blade stops shaking and its light goes');
  assert.ok(src('src/client/main.ts').includes("if (caster === 'me' && !quiet && isSwordId(myStaff())) audio.sfx.cast(myStaff(), lastCombo);"), 'the slash sound with the swing');
  const sw = src('src/client/swords3d.ts');
  assert.ok(sw.includes('glow.visible = false; // (no light at the tip: the blade itself glows)'));
  assert.ok(sw.includes('bladeMat.emissiveIntensity = d.base * (0.85 + 0.3 * pulse) + shown * 1.9;'), 'the blade fills with light as you write');
  assert.ok(a3.includes("const swordCast = layout !== 'deck' && from !== 'boss' && isSword(staffIdOf(from));"), 'the wave instead of the orb');
  assert.ok(a3.includes('const inf = key === \'me\' || swordF ? 0 :'));
  assert.ok(src('src/client/staffhits.ts').includes('if (isSword(kind)) slash(h);'));
  const sfx = src('src/client/staffsfx.ts');
  assert.ok(sfx.includes("isSword(staff) ? 'sword' : 'verdant'"));
  assert.ok(!sfx.includes("from './swords3d'"), 'the sounds stay out of three.js (they are in the main bundle)');
  assert.ok(src('src/client/art2d.ts').includes("if (SWORD2D[id]) { swordBody(pic, id); return; }"));
});

test('0.9.9.9.9.5 Messages from a lesson leads back to it, as you left it (it went to the menu); a new kana\u2019s card waits meanwhile', () => {
  const ib = src('src/client/inbox.ts');
  assert.ok(ib.includes("const LESSONS = new Set(['study', 'review', 'quiz', 'passage', 'quizzes', 'kana', 'kanaplay', 'daily', 'dict']);"));
  assert.ok(ib.includes("if (from && from !== 'inbox') returnTo = LESSONS.has(from) ? from : null;"));
  assert.ok(ib.includes("ui.show(ui.isLobbyAside() ? 'lobby' : (to as ui.Screen | null) ?? 'menu');"));
  assert.ok(src('src/client/kanaui.ts').includes("if (sc === 'kanaplay' && practice && question?.intro && !locked)"));
});

test('0.9.9.9.9.5 the swords are the league rewards, the characters the level rewards (earned ones kept)', () => {
  const lu = src('src/client/leagueup.ts');
  assert.ok(lu.includes("const sword: StaffDef | null = STAFFS.find((s) => s.sword && s.league === league) ?? null;"));
  const mig = src('src/server/migrations.ts');
  assert.ok(mig.includes("const OLD_CHAR_LEAGUE: Record<string, string> = { knight: 'N5', witch: 'N3', wizard: 'N2' };"));
  assert.ok(mig.includes("const OLD_SWORD_LEVEL: Record<string, number> = { iron: 3, longsword: 6, saber: 10, katana: 15, dragonfang: 20 };"));
});
