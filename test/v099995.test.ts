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
  assert.ok(src('src/client/whatsnew.ts').includes("v: '0.9.9.9.9.5'")); // (0.9.9.9.9.6 is the version now)
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
  assert.ok(nav.includes("const page = on || s === 'lobby' || s === 'results' || s === 'chess' || s === 'clash';"), 'the private room and the results too');
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
  assert.ok(a3.includes(": (swingNo + 1 + Math.floor(Math.random() * 2)) % SWINGS.length;"), 'a different slash each time'); // (round 6: a filming hook may pick one)
  assert.ok(a3.includes("from === 'me' && swordCast ? SWINGS[swingNo].tilt : undefined"), 'the wave flies at the angle of the cut');
  assert.ok(a3.includes('if (before < 0 && fl.launch) { fl.from.copy(fl.launch());'), 'it leaves the blade at the moment of the cut');
  assert.ok(src('src/client/swords3d.ts').includes('r.geometry.setDrawRange(0, Math.floor((n * grow) / 3) * 3);'), 'the ribbons wind up the blade as it powers up');
  assert.ok(src('src/client/study.ts').includes('const THUMBS_KEY = `kb:staffThumbs:${VERSION}:${THUMBS_REV}`;'), 'new pictures in Customize when the models change');
  assert.ok(a3.includes('else if (u >= SW_BACK) { A = sw.to; B = rest; k = sm((u - SW_BACK) / (1 - SW_BACK)); }'), 'a smooth return (it snapped back)');
  assert.ok(a3.includes('const SWING_MS = 900;') && a3.includes('fp.rotation.z = at(2); // the forearm rolls with it'), 'a full swing of the arm, not the wrist');
  assert.ok(a3.includes('const shoulder = new THREE.Vector3(fpBase.x + 0.55, fpBase.y - 0.95, fpBase.z + 0.6);'), 'the forearm reaches back to the shoulder');
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

test('0.9.9.9.9.5 "Kanji seals": each page\u2019s own kanji stamped by its title, in the display font, sentence-case headings', () => {
  const nav = src('src/client/nav.ts');
  assert.ok(nav.includes("const SEALS: Record<string, string> = { games: '遊', queue: '戦',"));
  assert.ok(nav.includes("const head = document.createElement('div'); head.className = 'seal-head';"));
  const css = src('public/style.css');
  assert.ok(css.includes('.seal.stamp { animation: sealIn'));
  assert.ok(css.includes('body.has-nav .screen:not(#menu) h3 { text-transform: none;'));
  // every seal kanji is in a self-hosted subset of the display font
  const faces = [...css.matchAll(/font-family: "KW Display";[^}]*unicode-range: ([^;]+);/g)].map((m) => m[1]);
  const inR = (cp: number, r: string) => r.split(',').some((x) => { const [a, b] = x.trim().replace('U+', '').split('-'); return cp >= parseInt(a, 16) && cp <= parseInt(b || a, 16); });
  for (const ch of '戦友術か進日史辞学文問装管') assert.ok(faces.some((f) => inR(ch.codePointAt(0)!, f)), ch);
});

test('0.9.9.9.9.5 Battles and Results: a rank card with every rank, mode tiles, Find match; result actions as icon tiles', () => {
  const html = src('public/index.html');
  assert.ok(html.includes('<div id="qModes" class="q-tiles" role="group" aria-label="What to queue for"></div>'));
  assert.ok(html.includes('<span>Find match</span>'));
  const lad = src('src/client/ladder.ts');
  assert.ok(lad.includes("card.onclick = () => void openLadder('top', mode ?? 'rapid');")); // (0.9.9.9.9.6 round 6: a card per ranked mode)
  assert.ok(lad.includes("['ranks', 'All ranks']"));
  const res = html.slice(html.indexOf('<section id="results"'), html.indexOf('</section>', html.indexOf('<section id="results"')));
  assert.ok(res.indexOf('class="result-bar"') < res.indexOf('id="statCompare"'));
  assert.ok(res.includes('<span>Replay</span>') && res.includes('<span>Rematch</span>') && res.includes('<span>Lobby</span>') && res.includes('<span>Menu</span>'));
});

test('0.9.9.9.9.5 phones: light effects on weaker phones, the background scrolls, the FABs stay off pages with bottom controls, the chat above the keyboard', () => {
  assert.ok(src('src/client/perf.ts').includes("if ((nav.hardwareConcurrency ?? 8) <= 4 || (nav.deviceMemory ?? 8) <= 2) { set(true, true); return; }")) // (0.9.9.9.9.7 round 4: fairer — the rest are measured);
  const css = src('public/style.css');
  assert.ok(css.includes('@media (pointer: coarse) { body { background-attachment: scroll; } }'));
  assert.ok(css.includes('body.kb-up[data-screen="inbox"] .inbox-screen .msgr { height: calc(var(--kbh, 100dvh) - 76px) !important;'));
  assert.ok(css.includes(':is([data-screen="inbox"], [data-screen="kana"], [data-screen="kanaplay"]'));
  assert.ok(src('src/client/achievements.ts').includes("sheet.className = 'ach-tip ach-sheet';"));
});

// ── round 6 ──────────────────────────────────────────────────────────────────────────────────────────────────────
import { RankedService, REPLAY_DAYS, SAVED_REPLAYS_MAX } from '../src/server/study/RankedService';
import { SCREEN_ACTIVITY } from '../src/server/Session';
import { clipOf, type TapeEntry } from '../src/client/replayclip';

test('0.9.9.9.9.5 replays: kept a week; one saved to an account stays for good (the sweep and the trim skip it), a few at most', async () => {
  assert.equal(REPLAY_DAYS, 7);
  assert.ok(SAVED_REPLAYS_MAX >= 5 && SAVED_REPLAYS_MAX <= 30, 'a small limit');
  const store = new MemoryStore();
  const ranked = new RankedService(store);
  const day = 86_400_000, now = Date.now();
  const old = (await ranked.saveReplay({ v: 1, mode: 'reading', at: now - 9 * day, tape: [] }))!;
  const kept = (await ranked.saveReplay({ v: 1, mode: 'rapid', at: now - 9 * day, tape: [] }))!;
  assert.equal(await ranked.saveFor('u1', kept, 'Rapid'), 'ok');
  assert.equal(await ranked.saveFor('u1', kept, 'Rapid'), 'ok', 'saving twice is fine');
  assert.equal((await ranked.savedList('u1')).saved.length, 1);
  await ranked.sweep(now);
  assert.equal(await ranked.replay(old), null, 'a week on: gone');
  assert.ok(await ranked.replay(kept), 'saved: still there');
  assert.equal(await store.trimReplays(0), 0, 'the trim leaves a saved one too');
  assert.ok(await ranked.replay(kept));
  assert.equal(await ranked.saveFor('u1', old, ''), 'gone');
  assert.equal(await ranked.saveFor('u1', 'not-a-replay-id!', ''), 'gone');
  const [s] = (await ranked.savedList('u1')).saved as Array<{ id: string; mode: string; label: string }>;
  assert.deepEqual([s.id, s.mode, s.label], [kept, 'rapid', 'Rapid']);
  // the limit
  for (let i = 0; i < SAVED_REPLAYS_MAX - 1; i++) assert.equal(await ranked.saveFor('u1', (await ranked.saveReplay({ v: 1, mode: 'reading', at: now, tape: [] }))!, ''), 'ok');
  assert.equal(await ranked.saveFor('u1', (await ranked.saveReplay({ v: 1, mode: 'reading', at: now, tape: [] }))!, ''), 'full');
  // removed: back to the week (and with it, gone at the next sweep)
  assert.equal(await ranked.unsaveFor('u1', kept), true);
  await ranked.sweep(now);
  assert.equal(await ranked.replay(kept), null);
  // the routes and the Postgres table (its sweep and trim skip saved ones; a deleted account's list goes with it)
  const router = src('src/server/router.ts');
  for (const r of ["r.method === 'GET' && url === '/api/me/replays'", "r.method === 'PUT' && /^\\/api\\/me\\/replays\\/[\\w-]{16}$/", "r.method === 'DELETE' && /^\\/api\\/me\\/replays\\/[\\w-]{16}$/"]) assert.ok(router.includes(r), r);
  const pg = src('src/server/db/PgStore.ts');
  assert.ok(pg.includes('create table if not exists kw_saved_replays ('));
  assert.ok(pg.includes('user_id uuid not null references kw_users(id) on delete cascade')); // (uuid, as kw_users.id: text failed in Postgres)
  assert.equal((pg.match(/not exists \(select 1 from kw_saved_replays s where s\.replay_id = r\.id\)/g) ?? []).length, 2);
  assert.ok(src('src/server/db/Store.ts').includes('this.saved.delete(id);'));
});

test('0.9.9.9.9.5 replays: watched from the results or history only once saved; history has a Saved tab; a shared link still plays', () => {
  const main = src('src/client/main.ts');
  assert.ok(main.includes("w.onclick = () => void watchSaved(id, side ?? you, ui.$('resultMode').textContent?.trim() ?? '');"));
  assert.ok(main.includes("const ok = await ui.confirmBox('Save this replay?'"));
  assert.ok(main.includes('if (st.n >= st.max) {'), 'the limit is told before asking');
  assert.ok(/function replayFromLink\(\): boolean \{[\s\S]*?void openReplay\(id\);/.test(main), 'a link plays straight away');
  const html = src('public/index.html');
  assert.ok(html.includes('<div id="savedList" class="history-list" hidden></div>'));
  assert.ok(html.includes('data-tab="saved"'));
  assert.ok(src('src/client/ui.ts').includes('export function showSavedReplays('));
});

test('0.9.9.9.9.5 a replay stops on the fall: no results screen, the clip ends soon after the last blow', () => {
  assert.ok(src('src/client/main.ts').includes("if (watching() === 'replay') break; // (0.9.9.9.9.5: a replay stops on the fall"));
  const p = { id: 'a', name: 'A', hp: 0, maxHp: 100 } as never;
  const tape: TapeEntry[] = [
    [0, null, { type: 'battle_start', players: [p], countdownMs: 0, durationMs: 60000 } as never],
    [5000, null, { type: 'game_over', mode: 'reading', players: [p], winnerId: 'b', reason: 'ko', stats: {} } as never],
  ];
  const c = clipOf(tape, 'reading', 'a');
  assert.ok(c.end - 5000 >= 1500 && c.end - 5000 <= 2000, `the fall plays, then it stops (${c.end - 5000} ms)`);
});

test('0.9.9.9.9.5 results: one row of equal tiles (Rematch, Replay, Lobby, Menu), no link button', () => {
  const html = src('public/index.html');
  assert.ok(!html.includes('replayCopy') && !html.includes('id="replayRow"'));
  const start = html.indexOf('<div class="row result-btns">');
  const row = html.slice(start, html.indexOf('</div>', start));
  const at = (id: string) => row.indexOf(`id="${id}"`);
  assert.ok(at('rematch') >= 0 && at('rematch') < at('replayWatch') && at('replayWatch') < at('resultLobby') && at('resultLobby') < at('leave'));
  assert.ok(src('public/style.css').includes('.result-bar { display: grid; grid-template-columns: repeat(auto-fit, 118px);'));
  assert.ok(src('src/client/ui.ts').includes("for (const id of ['rematch', 'resultLobby', 'leave', 'rematchStatus']) $(id).hidden = !!opts.history;"));
});

test('0.9.9.9.9.5 friends see "Watching a replay" / "Watching a game"', () => {
  assert.equal(SCREEN_ACTIVITY.replay, 'Watching a replay');
  assert.equal(SCREEN_ACTIVITY.watching, 'Watching a game');
  assert.ok(src('src/client/main.ts').includes("const where = w === 'replay' ? 'replay' : w === 'live' ? 'watching' :"));
  assert.ok(src('src/server/Session.ts').includes("if (this.watched || this.watchedHub) return 'Watching a game';")); // (0.9.9.9.9.7 round 3: a chess / Clash game too)
  assert.ok(src('src/client/i18n.ts').includes("'Watching a replay': 'Смотрит повтор'"));
});

test('0.9.9.9.9.5 the sword swing: the beats of the owner\'s reference video, the wrist leading, a trail; the wave from the blade during a close-up', () => {
  const a = src('src/client/arena3d.ts');
  assert.ok(a.includes('const SW_UP = 0.2, SW_CUT = 0.27, SW_END = 0.4, SW_BACK = 0.6;'));
  const ms = Number(/const SWING_MS = (\d+);/.exec(a)?.[1]);
  assert.ok(ms * (0.4 - 0.27) <= 150, 'the cut is fast');
  assert.ok(a.includes('staffGroup.rotation.x += wristAt(sw.wp);') && a.includes('staffGroup.rotation.z += wristAt(sw.wr);'));
  assert.ok(a.includes('scene.add(trail);') && a.includes('blending: THREE.AdditiveBlending'));
  assert.ok(a.includes("if ((part === 'staff' || part === 'head') && cine && cineW > 0.05) return new THREE.Vector3(CAM.x + 0.55, CAM.y - 0.45, CAM.z - 1.2);"));
  // the dragon's breath: a fan centred on everyone it hits
  assert.ok(a.includes('const centre = targets.reduce((a, p) => a.add(p), new THREE.Vector3()).multiplyScalar(1 / targets.length);'));
});

test('0.9.9.9.9.5 round 6 looks: the x30 number all gradient, Copy inside its card, the chat a screen of its own on phones, the Verdant wood solid', () => {
  const css = src('public/style.css');
  assert.ok(css.includes('.combo-hud.tier-5 b, .combo-banner.tier-5 b { padding: 0 .28em .06em .12em; margin: 0 -.28em -.06em -.12em;'));
  assert.ok(css.includes('#lobby .code-row { flex-wrap: wrap; min-width: 0; }'));
  assert.ok(css.includes('.open-switch { width: auto; min-width: 132px;'));
  assert.ok(css.includes('position: fixed; z-index: 35; left: 0; right: 0; top: var(--kbt, 0px);'));
  assert.ok(css.includes('body[data-screen="inbox"]:has(#inbox.thread-open) :is(.app-nav, #railFab, #dictFab, .version, .topbar) { display: none !important; }'));
  assert.ok(src('src/client/inbox.ts').includes("document.documentElement.style.setProperty('--kbt',"));
  const st = src('src/client/staffs3d.ts');
  const verdant = st.slice(st.indexOf('function buildVerdant'), st.indexOf('function buildEmber'));
  assert.ok(!verdant.includes('m.bark('), 'one solid wood');
  assert.ok(!verdant.includes('k.stat(tubeGeo([2.1,') && !verdant.includes('k.stat(tubeGeo([2.2,'), 'the knot is the shaft\'s own tube');
});
