// 0.9.9.9.9.1: the staffs (their colours in Customize, their sounds, their hits, feeling the enemy fall), the 3D
// arena's look and weather, the replay's timeline, the weather in the menu, the combo's sun on phones.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { VERSION } from '../src/shared/version';
import { STAFFS } from '../src/shared/progress';
import type { PlayerView, ServerMessage } from '../src/shared/protocol';
import { spellsOf, staffCast, STAFF_FAMILIES } from '../src/client/staffsfx';
import { clipOf, stateAt, type TapeEntry } from '../src/client/replayclip';
import { weatherFor, WEATHER_LIST } from '../src/client/backgrounds';

const src = (f: string) => readFileSync(f, 'utf8').replace(/\r\n/g, '\n');

test('0.9.9.9.9.1 version, patch notes, Russian for the new words', () => {
  assert.ok(VERSION >= '0.9.9.9.9.1');
  assert.match(src('src/client/whatsnew.ts'), /v: '0\.9\.9\.9\.9\.1'/);
  const ru = src('src/client/i18n.ts');
  for (const k of ["'Menu weather':", "'Changes by itself':", "'Thunderstorm':", "'Copy link':", "'hits':", "'misses':", "'The dragon':", "reward - complete that month's goals \\(see Progress\\)( - it's on now!)?$/"]) assert.ok(ru.includes(k), k);
});

// ── Customize: five staffs, their colours on the preview ─────────────────────────────────────────────────────────
test('0.9.9.9.9.1 Customize lists the five staffs; their colours are buttons on the preview that show and equip (a locked one says how)', () => {
  const study = src('src/client/study.ts');
  assert.match(study, /return STAFFS\.filter\(\(s\) => !s\.base\)\.map\(\(fam\) => \{/, 'the classic staffs only');
  assert.equal(STAFFS.filter((s) => !s.base && !s.sword).length, 5); // (0.9.9.9.9.5: and five swords)
  for (const s of STAFFS.filter((x) => x.base)) assert.ok(STAFFS.some((b) => b.id === s.base && !b.base), `${s.id}: a colour of a classic staff`);
  // a colour tapped: shown, its sound, then put on — or, locked, how to get it
  assert.match(study, /staffShade\[sel\.id\] = v\.id;\n\s+audio\.sfx\.cast\(v\.id, 1\);\n\s+if \(it\.locked\) \{ ui\.toast\(it\.lockedToast, 4500\); renderCustomize\(\); return; \}\n\s+if \(it\.equipped\) \{ renderCustomize\(\); return; \}\n\s+void equip\(it\);/);
  assert.match(study, /if \(custTab === 'staff' && cur\.locked\) info\.push\(el\('p', 'cust-how', cur\.lockedToast\)\);/);
  assert.match(src('public/index.html'), /<div id="custSwatches" class="cust-swatches" role="group" aria-label="Colours" hidden><\/div>/);
  // the locker's count is every colour
  assert.match(study, /const all = slot\.tab === 'staff' \? STAFFS\.length : its\.length;/);
});

// ── staff sounds ─────────────────────────────────────────────────────────────────────────────────────────────────
function fakeContext() {
  let nodes = 0;
  const param = () => ({ value: 0, setValueAtTime() { return this; }, exponentialRampToValueAtTime(v: number) { assert.ok(v > 0, 'an exponential ramp needs a value above 0'); return this; }, setTargetAtTime() { return this; }, linearRampToValueAtTime() { return this; } });
  const node = (extra: object = {}) => { nodes++; return { connect(n: unknown) { return n; }, ...extra }; };
  const c = {
    sampleRate: 8000, currentTime: 0,
    createGain: () => node({ gain: param() }),
    createOscillator: () => node({ type: 'sine', frequency: param(), detune: param(), start() {}, stop() {} }),
    createBiquadFilter: () => node({ type: 'lowpass', frequency: param(), Q: param() }),
    createBuffer: (_ch: number, n: number) => { assert.ok(n > 0 && Number.isInteger(n), 'a buffer of whole samples'); const d = new Float32Array(n); return { getChannelData: () => d }; },
    createBufferSource: () => node({ buffer: null, start() {} }),
    createWaveShaper: () => node({ curve: null, oversample: 'none' }),
    createStereoPanner: () => node({ pan: param() }),
  };
  return { c, count: () => nodes };
}
const cast = (staff: string, combo: number, base?: string, spell?: number) => { const f = fakeContext(); const out = f.c.createGain(); staffCast({ c: f.c as never, dry: out as never, wet: out as never }, staff, combo, 0, base, spell); return f.count(); };

test('0.9.9.9.9.1 staff sounds: a staff and its colours sound alike; three spells each, taking turns, never the same twice in a row', () => {
  assert.deepEqual([...STAFF_FAMILIES].sort(), ['ember', 'storm', 'sword', 'tide', 'verdant', 'void']); // (0.9.9.9.9.5: the swords' family)
  for (const f of STAFF_FAMILIES) assert.ok(spellsOf(f) >= 2, `${f}: at least two spells`);
  // a colour plays its classic staff's spell (the same spell: the same sound)
  for (const s of STAFFS.filter((x) => x.base)) for (let k = 0; k < spellsOf(s.base!); k++) assert.equal(cast(s.id, 3, s.base, k), cast(s.base!, 3, undefined, k), `${s.id} spell ${k} = ${s.base}'s`);
  // every spell builds and grows with the combo
  for (const f of STAFF_FAMILIES) for (let k = 0; k < spellsOf(f); k++) assert.ok(cast(f, 5, undefined, k) >= cast(f, 1, undefined, k), `${f} ${k}`);
  // at random, but never the same spell twice in a row (the node count tells them apart for the Tide: drops vary — so watch the module's turn)
  const sfx = src('src/client/staffsfx.ts');
  assert.match(sfx, /if \(spell === undefined && set\.length > 1 && i === lastSpell\[family\]\) i = \(i \+ 1\) % set\.length;/);
  // the Abyss sound kept, as the Tide staff's first; the Storm's thunder kept as its first
  assert.match(sfx, /\/\/ abyss: a sonar ping into the deep, slow low bubbles, a swell under it \(the sound the Abyss staff had\)/);
  assert.match(sfx, /\/\/ thunder: a crackling arc, the crack, and a rumble that rolls away \(the Storm staff's sound, kept\)/);
});

// ── the staffs feel the enemy falling; their hits in their own colours ───────────────────────────────────────────
test('0.9.9.9.9.1 a staff feels its enemy nearly down (from 45% HP), and every staff reacts its own way', () => {
  const ui = src('src/client/ui.ts');
  assert.match(ui, /const fury = \(hp: number, max: number\) => \(hp > 0 && max > 0 \? Math\.max\(0, Math\.min\(1, \(0\.45 - hp \/ max\) \/ 0\.35\)\) : 0\);/);
  assert.match(ui, /a3\.fury\('me', me && me\.hp > 0 \? foe : 0\);/);
  const a3 = src('src/client/arena3d.ts');
  assert.match(a3, /staff\.update\(time, dt, charge, still \? 0 : myFury\);/);
  assert.match(a3, /m\.staff\.update\(time, dt, glowLevel, f\.fury \?\? 0\);/);
  const st = src('src/client/staffs3d.ts');
  assert.match(st, /lf \+= k\.frames\(dt, 1 \+ 2\.8 \* fu\);/, 'Verdant: the leaves sway faster and wider');
  assert.match(st, /df \+= k\.frames\(dt, 1 \+ 3 \* fu\);/, 'Ember: the lava drips faster');
  assert.match(st, /mm = Math\.max\(morph\(f, 120, off, 12\), Math\.min\(1, fu \* 1\.6\)\)/, 'Tide: the water whirls without stopping');
  assert.match(st, /bf \+= d; bspin \+= d \* 0\.25 \* fu;/, 'Storm: the gems race and spin');
  assert.match(st, /const far = 1 \+ 1\.1 \* fu, big = 1 \+ 0\.7 \* fu;/, 'Void: stars pulled in from further');
  // the Void staff rebuilt: floating spindles, a disc of light with motes falling in
  assert.match(st, /p\.m\.position\.z = p\.z \+ \(0\.014 \+ 0\.012 \* fu\) \* Math\.sin\(sf \* 0\.085 \+ p\.ph\);/);
  assert.match(st, /const disk = k\.mesh\(new THREE\.RingGeometry\(0\.19, 0\.46, 48, 1\), diskMat, \[0, 0, 3\]\);/);
});

test('0.9.9.9.9.1 hits in the staff\'s colours: the spell flies in it, the screen flash uses it, every staff\'s hit remade', () => {
  const a3 = src('src/client/arena3d.ts');
  assert.match(a3, /layout !== 'deck' && from !== 'boss' \? spellColour\(from\)/);
  assert.match(a3, /hits\.impact\(kind, \{ ground, chest, height, main, tint, seasonal: !!def\.season, firstPerson \}, lightning\);/);
  const css = src('public/style.css');
  for (const k of ['bolt', 'frost', 'fire']) assert.match(css, new RegExp(`\\.arena3d-hit\\.${k} \\{[^}]*var\\(--hit`), `${k} uses the staff's colour`);
  const hits = src('src/client/staffhits.ts');
  for (const f of ['function verdant(', 'function ember(', 'function tide(', 'function storm(', 'function voidHit(']) assert.ok(hits.includes(f), f);
  assert.match(hits, /const fire = h\.main\.clone\(\)/, 'Ember\'s fire is the staff\'s colour (Jade: green)');
  assert.match(hits, /if \(\(o as THREE\.Sprite\)\.isSprite\) continue; \/\/ \(a sprite's quad is shared by every sprite\)/);
});

// ── the 3D arena's look ──────────────────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.9.1 the 3D arena on High: glow, soft shadows, light from all round, worn floor, the place\'s weather', () => {
  const a3 = src('src/client/arena3d.ts');
  assert.match(a3, /const high = !lite && !opts\.preview;/, 'High only (Low and the previews as before)');
  assert.match(a3, /if \(post\) post\.render\(\); else renderer\.render\(scene, camera\);/);
  assert.match(a3, /renderer\.shadowMap\.type = THREE\.PCFSoftShadowMap;/);
  assert.match(a3, /shadowsFor\(env\.group\);/);
  assert.match(a3, /const wear = floorWear\(\);/);
  assert.match(a3, /function setWeather\(w: string \| undefined\)/);
  assert.match(src('src/client/arena.ts'), /weather: weatherFor\(bg\.id\) \/\* 0\.9\.9\.9\.9\.1 \*\//);
  const look = src('src/client/arenalook.ts');
  assert.match(look, /new UnrealBloomPass\(new THREE\.Vector2\(size\.x, size\.y\), 0\.6, 0\.5, 1\.0\)/);
  for (const w of ['rain', 'storm', 'snow', 'leaves', 'petals']) assert.ok(look.includes(`'${w}'`), w);
});

// ── the menu's weather ───────────────────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.9.1 the weather: rain, storms and snow come round (not nearly always leaves); it changes every 2 hours; Settings can pick one', () => {
  const places = ['castle', 'plains', 'forest', 'swamp', 'worldtree'] as const;
  // a week of November and of July, every 2 hours, every place: what weather comes
  for (const month of [10, 6]) {
    for (const id of places) {
      const seen = new Set<string>();
      for (let d = 1; d <= 7; d++) for (let h = 0; h < 24; h += 2) seen.add(weatherFor(id, new Date(2026, month, d, h)));
      assert.ok(seen.has('rain') || seen.has('storm'), `${id} in month ${month + 1}: rain or a storm (${[...seen]})`);
      if (month === 10) assert.ok(seen.has('snow') || id === 'swamp' || seen.size >= 3, `${id} in November: snow or plenty of change (${[...seen]})`);
      assert.ok(seen.size >= 2, `${id}: the weather changes`);
    }
  }
  // leaves no longer most of the time in autumn
  let leaves = 0, all = 0;
  for (const id of places) for (let d = 1; d <= 30; d++) for (let h = 0; h < 24; h += 2) { all++; if (weatherFor(id, new Date(2026, 10, d, h)) === 'leaves') leaves++; }
  assert.ok(leaves / all < 0.35, `leaves ${(100 * leaves / all).toFixed(0)}% of November`);
  // every 2 hours: the same within, different slots across
  const bg = src('src/client/backgrounds.ts');
  assert.match(bg, /Math\.floor\(d\.getHours\(\) \/ 2\)/);
  assert.deepEqual(WEATHER_LIST, ['clear', 'leaves', 'rain', 'storm', 'snow', 'petals', 'seeds', 'spores']);
  // Settings → Graphics → Menu weather; a new weather repaints the picture
  assert.match(src('public/index.html'), /<select id="weatherSel" aria-label="Menu weather"><option value="auto">Changes by itself<\/option>/);
  assert.match(src('src/client/main.ts'), /sel\.onchange = \(\) => \{ setWeatherPref\(sel\.value as Weather \| 'auto'\); applyBackground\(\); \};/);
  assert.match(bg, /const key = `\$\{id\}-\$\{time\}-\$\{wx\}\$\{menu \? '-m' : ''\}`;/);
  // the picture no longer zooms in and out
  assert.doesNotMatch(src('public/style.css'), /animation: artDrift/);
});

// ── the replay's timeline ────────────────────────────────────────────────────────────────────────────────────────
const P = (id: string, hp: number, extra: Partial<PlayerView> = {}) => ({ id, name: id.toUpperCase(), hp, maxHp: 200, combo: 0, avatar: 'wizard', staff: 'void', ...extra }) as unknown as PlayerView;
function tape(): TapeEntry[] {
  const m = (x: object) => x as ServerMessage;
  return [
    [100, null, m({ type: 'battle_start', mode: 'reading', players: [P('ann', 200), P('bob', 200)], boss: null, durationMs: 300000, countdownMs: 3000 })],
    [3200, 'ann', m({ type: 'challenge', id: 1, kanji: '水', answer: 'reading', timeLimitMs: 10000 })],
    [3200, 'bob', m({ type: 'challenge', id: 1, kanji: '火', answer: 'reading', timeLimitMs: 10000 })],
    [5000, 'ann', m({ type: 'answer_result', challengeId: 1, correct: true, timedOut: false, skipped: false, kanji: '水', reading: 'みず', meaning: 'water', damage: 20, combo: 1, responseMs: 1800, nextInMs: 1000 })],
    [5000, null, m({ type: 'battle_update', players: [P('ann', 200), P('bob', 180)], boss: null, event: { kind: 'hit', playerId: 'ann', targetId: 'bob', kanji: '水', damage: 20, combo: 1 } })],
    [6000, null, m({ type: 'paused', on: true })],
    [66000, null, m({ type: 'paused', on: false })], // a minute's pause: cut out
    [66000, null, m({ type: 'battle_start', mode: 'reading', players: [P('ann', 200), P('bob', 180)], boss: null, durationMs: 294000, countdownMs: 0, resume: true })],
    [67000, null, m({ type: 'battle_update', players: [P('ann', 200), P('bob', 180)], boss: null, event: { kind: 'miss', playerId: 'bob', kanji: '火' } })],
    [68000, 'ann', m({ type: 'challenge', id: 2, kanji: '木', answer: 'reading', timeLimitMs: 10000 })],
    [70000, null, m({ type: 'battle_update', players: [P('ann', 170), P('bob', 180)], boss: null, event: { kind: 'hit', playerId: 'bob', targetId: 'ann', kanji: '火', damage: 30, combo: 1, crit: true } })],
    [71000, null, m({ type: 'game_over', mode: 'reading', winnerId: 'ann', teamWon: null, reason: 'time', players: [P('ann', 170), P('bob', 180)], boss: null, stats: {} })],
  ];
}

test('0.9.9.9.9.1 a replay clip: the pause cut out, only the side\'s own words, both sides\' hits and misses marked', () => {
  const c = clipOf(tape(), 'reading', 'ann');
  assert.equal(c.start, 100);
  assert.equal(c.end, 71000 - 60000 + 1900, 'the minute\'s pause is cut out; it ends 1.9 s after the last blow (0.9.9.9.9.5: on the fall - no results screen)');
  assert.ok(!c.cues.some((q) => q.m.type === 'challenge' && q.m.kanji === '火'), 'Bob\'s word isn\'t on Ann\'s side');
  assert.ok(!c.cues.some((q) => q.m.type === 'paused'), 'the game\'s pause isn\'t played (the replay\'s own play / pause is)');
  assert.deepEqual(c.marks.map((k) => [k.mine, k.hit, k.crit ?? false]), [[true, true, false], [false, false, false], [false, true, true]], 'Ann\'s hit; Bob\'s miss; Bob\'s critical');
  // Bob's side: the marks the other way round
  assert.deepEqual(clipOf(tape(), 'reading', 'bob').marks.map((k) => k.mine), [false, true, true]);
});

test('0.9.9.9.9.1 a replay jumps to a moment: everyone as they were then, the clocks as they were, the word still up with its time left', () => {
  const c = clipOf(tape(), 'reading', 'ann');
  // in the 3-2-1: everyone at full HP, 2 s of it left, the battle's 5 minutes all there
  const a = stateAt(c, 1100)!;
  assert.equal(a.start.countdownMs, 2000);
  assert.equal(a.start.durationMs, 300000);
  assert.deepEqual(a.players.map((p) => p.hp), [200, 200], 'with their HP (a replay began without it)');
  assert.equal(a.players[0].staff, 'void', 'and their staff (it began with the default one)');
  assert.equal(a.challenge, null);
  // 1 s into Ann's first word (3.2 s): its 10 s, 9 left
  const b = stateAt(c, 4200)!;
  assert.equal(b.start.countdownMs, 0);
  assert.equal(b.start.durationMs, 300000 - (4200 - 100 - 3000));
  assert.equal((b.challenge as unknown as { leftMs: number }).leftMs, 9000);
  assert.equal(b.answer, null);
  // after the pause (vt 6000 = 66000 on the tape), Bob has 180
  const d = stateAt(c, 9500)!;
  assert.deepEqual(d.players.map((p) => p.hp), [200, 180]);
  assert.equal(d.start.durationMs, 294000 - (9500 - 6000), 'the clock from where the pause left it');
  // the end: the game over, no word up
  const e = stateAt(c, c.end)!;
  assert.ok(e.over);
  assert.equal(e.challenge, null);
});

test('0.9.9.9.9.1 the replay player: a timeline to drag, play / pause, speeds, the clocks follow it; it waits in the background', () => {
  const w = src('src/client/watch.ts');
  assert.match(w, /setClockSource\(\(\) => pos\); \/\/ \(the battle's clocks follow the replay\)/);
  assert.match(w, /const RATES = \[1, 2, 0\.5\];/);
  assert.match(w, /document\.addEventListener\('visibilitychange', \(\) => \{ if \(document\.hidden && kind === 'replay' && playing\) setPlaying\(false\); \}\);/);
  assert.match(w, /dragging = mark\?\.dataset\.vt \? Math\.max\(replay\.clip\.start, Number\(mark\.dataset\.vt\) - 1200\) : at\(e\.clientX\);/, 'a mark tapped: just before it');
  assert.match(src('src/client/ui.ts'), /const clockNow = \(\) => \(clockSrc \? clockSrc\(\) : \(pauseAt \?\? performance\.now\(\)\) - pausedFor\);/);
  assert.match(src('src/client/ui.ts'), /countdown\('battle', countdownMs \+ battleMs, \(left\) => \(\$\('battleClock'\)\.textContent = clockText\(Math\.min\(battleMs, left\)\)\)\);/);
  const main = src('src/client/main.ts');
  // from the results: leave the room first, then play (the server's "left" cleared you out of the replay)
  assert.match(main, /afterLeft = done;\n\s+socket\.send\(\{ type: 'leave' \}\);/);
  assert.match(main, /if \(afterLeft\) \{ const go = afterLeft; afterLeft = null; backToMenu\(\); go\(\); break; \}/);
  // back from the background: no "room closed" while watching; the menu stops a replay
  assert.match(main, /if \(watching\(\)\) stopWatching\(\); \/\/ \(0\.9\.9\.9\.9\.1: a replay doesn't play on behind the menu\)/);
  // a jump is rebuilt quietly
  assert.match(main, /if \(quiet\) break; \/\/ \(0\.9\.9\.9\.9\.1: a replay rebuilding a moment: the answer shows, without its sounds\)/);
  const html = src('public/index.html');
  for (const id of ['watchPlay', 'watchClock', 'watchTrack', 'watchSpeed', 'watchLegend']) assert.ok(html.includes(`id="${id}"`), id);
  assert.ok(!html.includes('id="watchAgain"'), 'Play at the end starts it again');
});

test('0.9.9.9.9.1 phones: the Unstoppable sun is centred on the combo counter', () => {
  const css = src('public/style.css');
  assert.match(css, /transform-origin: top left; scale: \.5; align-items: center; \}/);
  assert.match(css, /\.combo-hud\.tier-5 \.ch-rays \{ width: 210px; height: 210px; margin: -105px 0 0 -105px; \}/);
});
