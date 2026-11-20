// 0.9.9.9.9.2: replays (Exit at the top, anyone's eyes, no fly-in on a jump, nobody left down, Exit stays in the game),
// the results' Back, Block / Report on the card, ranked fairness, the replay cap, the time of day's crossfade, folded
// explanations, softer staff cores, no flames on the staff, the dragon's wings, the Boss guide, the tall menu, the
// stale app.js crash.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { VERSION } from '../src/shared/version';
import { TOO_FAST, tooFast } from '../src/server/Room';
import { MemoryStore } from '../src/server/db/Store';
import { REPLAYS_KEPT } from '../src/server/study/RankedService';
import type { PlayerStats } from '../src/shared/protocol';

const src = (f: string) => readFileSync(f, 'utf8').replace(/\r\n/g, '\n');

test('0.9.9.9.9.2 version, patch notes, Russian', () => {
  assert.ok(VERSION >= '0.9.9.9.9.2');
  assert.match(src('src/client/whatsnew.ts'), /v: '0\.9\.9\.9\.9\.2'/);
  const ru = src('src/client/i18n.ts');
  for (const k of ["'← Back':", "'Whose eyes':"]) assert.ok(ru.includes(k), k);
});

test('0.9.9.9.9.2 replays: Exit where Leave is; anyone\'s eyes (bots too); a jump sets the arena up at once (no fly-in) and drops waiting knock-outs', () => {
  const html = src('public/index.html');
  assert.match(html, /<div class="clock-btns"><button id="watchExit" class="link forfeit watch-exit" type="button">Exit<\/button>/);
  assert.match(src('public/style.css'), /body\[data-watch\] #watchExit \{ display: inline-flex; \}/);
  const w = src('src/client/watch.ts');
  assert.match(w, /const who = side && all\.some\(\(p\) => p\.id === side\) \? side : humans\[0\]\?\.id \?\? all\[0\]\?\.id \?\? '';/);
  assert.match(w, /const other = all\[\(i \+ 1\) % all\.length\];/);
  assert.match(src('src/client/arena.ts'), /const a = api \?\? await load\(\);/, 'no await when the 3D is loaded: set up before the fly-in is turned off');
  const a3 = src('src/client/arena3d.ts');
  assert.match(a3, /koGen\+\+; koWait\.clear\(\);/);
  assert.match(a3, /setTimeout\(\(\) => \{ if \(g !== koGen\) return; koWait\.delete\(who\); api\.ko\(who\); \}, 120\);/);
});

test('0.9.9.9.9.2 Exit doesn\'t leave the game: back at the menu, no history.back() of our own', () => {
  const shell = src('src/client/appshell.ts');
  const sync = shell.slice(shell.indexOf('function syncGuard()'), shell.indexOf('function initBack()'));
  assert.ok(!sync.includes('history.back()'), 'syncGuard never steps back');
  assert.match(shell, /if \(away\(\)\) goBack\(\); \/\/ \(at the menu: it was the spare entry — nothing to do\)/);
});

test('0.9.9.9.9.2 the results: Back at the top (replay, history, lobby, menu); Watch replay under the result', () => {
  const html = src('public/index.html');
  const res = html.slice(html.indexOf('<section id="results"'), html.indexOf('</section>', html.indexOf('<section id="results"')));
  assert.ok(res.indexOf('id="resultBack"') < res.indexOf('id="resultTitle"'));
  assert.ok(res.indexOf('id="replayRow"') < res.indexOf('id="statCompare"'), 'the replay right under the result');
  const main = src('src/client/main.ts');
  assert.match(main, /ui\.\$\('resultBack'\)\.onclick = \(\) => \{\n\s+if \(watching\(\)\) return stopWatching\(\);\n\s+if \(!ui\.\$\('historyBackRow'\)\.hidden\) return void openHistory\(\);/);
});

test('0.9.9.9.9.2 Block and Report on the player\'s card; a report reason lights up', () => {
  const pv = src('src/client/playerview.ts');
  assert.match(pv, /export function safetyRow\(p: PublicProfile\): HTMLElement \| null \{/);
  assert.ok(!/body\.push\(safe\)/.test(pv), 'not in View profile any more');
  assert.match(src('src/client/main.ts'), /safety: safetyRow\(p\), \/\/ \(0\.9\.9\.9\.9\.2: Block and Report on the card\)/);
  assert.match(src('src/client/ui.ts'), /if \(a\.safety\) box\.append\(a\.safety\);/);
  assert.match(src('src/client/account.ts'), /list\.onchange = \(\) => \{ for \(const c of list\.querySelectorAll\('label'\)\) c\.classList\.toggle\('on', !!c\.querySelector\('input'\)\?\.checked\); \};/);
});

test('0.9.9.9.9.2 ranked: answers faster than a person can give them don\'t count, and the team is told', () => {
  const s = (correct: number, avg: number | null) => ({ correct, avgResponseMs: avg } as unknown as PlayerStats);
  assert.equal(tooFast(s(20, 300)), true, 'a script');
  assert.equal(tooFast(s(20, 1800)), false, 'a quick person');
  assert.equal(tooFast(s(TOO_FAST.words - 1, 300)), false, 'too few words to tell');
  assert.equal(tooFast(s(20, null)), false);
  assert.equal(tooFast(undefined), false);
  const room = src('src/server/Room.ts');
  assert.match(room, /const ranked = rankable && suspects\.length === 0;/);
  assert.match(src('src/server/index.ts'), /onSuspect: \(who, mode\) => \{\n\s+for \(const s of who\) void store\.addReport\(\{ kind: 'report'/);
});

test('0.9.9.9.9.2 replays: at most REPLAYS_KEPT, the oldest go first', async () => {
  const store = new MemoryStore();
  for (let i = 0; i < 12; i++) await store.saveReplay(`id${String(i).padStart(14, '0')}`, 1000 + i, Buffer.from('x'));
  assert.equal(await store.trimReplays(5), 7);
  assert.ok(await store.replay(`id${String(11).padStart(14, '0')}`), 'the newest stay');
  assert.equal(await store.replay(`id${String(0).padStart(14, '0')}`), null, 'the oldest go');
  assert.ok(REPLAYS_KEPT >= 1000);
  assert.match(src('src/server/db/PgStore.ts'), /delete from kw_replays where id in \(select id from kw_replays order by at desc offset \$\{Math\.max\(0, keep\)\}\)/);
});

test('0.9.9.9.9.2 the time of day crossfades (the new picture over the old, once it has loaded)', () => {
  const bg = src('src/client/backgrounds.ts');
  assert.match(bg, /layer\.classList\.add\('bg-xfade'\);/);
  assert.match(bg, /window\.setTimeout\(once, cross \? 6000 : 1500\);/);
  assert.ok(!bg.includes("veil.className = 'bg-veil'"), 'no dark veil');
  assert.match(src('public/style.css'), /\.bg-layer\.bg-xfade\.in \{ opacity: 1; \}/);
});

test('0.9.9.9.9.2 less text: explanations fold behind an (i)', () => {
  const tips = src('src/client/tips.ts');
  assert.match(tips, /const FOLDED = \['#custSub', '#struggledBox h3 small', '#volPanel \.set-sec > p\.hint:not\(\[id\]\)'\];/);
  assert.match(src('public/style.css'), /\.tip-text:not\(\.open\) \{ display: none !important; \}/);
  assert.match(src('src/client/main.ts'), /initTips\(\);/);
});

test('0.9.9.9.9.2 staffs: softer Verdant / Tide cores; no combo flames on your staff; the colours only in the Magic staff slot', () => {
  const st = src('src/client/staffs3d.ts');
  assert.match(st, /const GLOW_SOFT: Record<string, number> = \{ verdant: 0\.45, tide: 0\.5,/);
  assert.match(st, /coreMat\.emissiveIntensity \*= soft;\n\s+gemMat\.emissive\.multiplyScalar\(soft\);/);
  assert.ok(!src('src/client/arena3d.ts').includes('// combo / Omnipotence: your staff and hand burn'));
  assert.match(src('src/client/study.ts'), /\$\('custSwatches'\)\.hidden = true; \/\/ \(0\.9\.9\.9\.9\.2: the staff's colours belong to the Magic staff slot only\)/);
});

test('0.9.9.9.9.2 the dragon: a steady wing beat (its own phase), wings spread wide on the fire', () => {
  const g = src('src/client/glbchars.ts');
  assert.match(g, /if \(!st\.still\) wingPh \+= dt \* \(1\.8 \+ 2\.2 \* st\.inhale \* \(1 - st\.breath\)\);/);
  assert.ok(!/Math\.sin\(t \* \(2 \+ open \* 4\)\)/.test(g), 'no speed × the whole clock');
  assert.match(g, /const spread = st\.breath;/);
});

test('0.9.9.9.9.2 fixes from the inbox: the Boss guide\'s pictures, the closed photo sheet, a stale app.js', () => {
  const css = src('public/style.css');
  assert.match(css, /\.g-art \{ display: inline-block; width: 64px; height: 72px; flex: none; \}/);
  assert.match(css, /\.photo-sheet \{ width: min\(560px, calc\(100vw - 20px\)\); max-height: min\(86vh, 760px\); padding: 14px; flex-direction: column; gap: 10px; \}/);
  assert.match(css, /\.photo-sheet\[open\] \{ display: flex; \}/);
  const idx = src('src/server/index.ts');
  assert.match(idx, /const SHELL_CODE = new Set\(\['\/app\.js', '\/style\.css', '\/arena3d\.js'\]\);/);
  assert.match(idx, /if \(req\.headers\['if-none-match'\] === tag\) \{ res\.writeHead\(304, fresh\)\.end\(\); return; \}/);
});
