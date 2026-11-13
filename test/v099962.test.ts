import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { test } from 'node:test';
import { MemoryStore } from '../src/server/db/Store';
import { StudyService } from '../src/server/study/StudyService';
import { AuthService } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { MessageService } from '../src/server/study/MessageService';
import { BORDERS, CHARACTER_DEFS, borderOf, isBorder } from '../src/shared/progress';
import { FLAME_WEEKS, flameOf, flameWeek, weekStart } from '../src/shared/flames';

const root = join(__dirname, '..');

test('0.9.9.9.6.2 borders: only the Beta one and the leagues\' are left; an old one shows as none', async () => {
  assert.deepEqual(BORDERS.map((b) => b.id), ['none', 'beta', 'lg-kana', 'lg-n5', 'lg-n4', 'lg-n3', 'lg-n2', 'lg-n1']);
  for (const old of ['apprentice', 'adept', 'master', 'archmage']) {
    assert.equal(isBorder(old), false, old);
    assert.equal(borderOf(old), 'none', old);
  }
  assert.equal(borderOf('lg-n1'), 'lg-n1');
  assert.equal(borderOf(undefined), 'none');
  // someone who still has an old border saved: everyone (and they) see none — and it can't be put back on
  const store = new MemoryStore();
  const study = new StudyService(store);
  const auth = new AuthService(store, new TokenSigner('t'));
  const { user } = await auth.register('oldframe', 'secret12');
  await store.update(user.id, { border: 'archmage' });
  const u = (await store.findById(user.id))!;
  assert.equal((await study.profile(u)).border, 'none');
  const pub = (await study.publicProfile(user.id))!;
  assert.equal(pub.border, 'none');
  assert.equal(pub.look?.border, 'none');
  await assert.rejects(study.setBorder(u, 'archmage'), /Unknown border/);
});

test('0.9.9.9.6.2 the league frames N5–N1 are the player\'s animated pictures, all there and not too big', () => {
  for (const l of ['n5', 'n4', 'n3', 'n2', 'n1']) {
    const f = join(root, 'public/frames', `lg-${l}.webp`);
    assert.ok(existsSync(f), f);
    const b = readFileSync(f);
    assert.equal(b.subarray(0, 4).toString(), 'RIFF');
    assert.equal(b.subarray(8, 12).toString(), 'WEBP');
    assert.ok(b.includes(Buffer.from('ANIM')), `${l}: animated`);
    assert.ok(statSync(f).size < 1.5 * 1024 * 1024, `${l}: under 1.5 MB`);
  }
  const css = readFileSync(join(root, 'public/style.css'), 'utf8');
  for (const l of ['n5', 'n4', 'n3', 'n2', 'n1']) assert.ok(css.includes(`.bd-lg-${l}::before { background-image: url(/frames/lg-${l}.webp); }`), l);
});

test('0.9.9.9.6.2 the Knight is the N5 league\'s reward; N4 brings only its border', () => {
  assert.equal(CHARACTER_DEFS.find((c) => c.id === 'knight')?.league, 'N5');
  assert.equal(CHARACTER_DEFS.filter((c) => c.league === 'N4').length, 0);
  assert.ok(BORDERS.some((b) => b.league === 'N4'));
});

test('0.9.9.9.6.2 streak flames: a new one every 7 days, six shapes then the next colour, week 30 stays', () => {
  assert.equal(flameWeek(0), 0);
  assert.equal(flameOf(0).src, '/flames/lost-classic.webp');
  const at = (n: number) => { const f = flameOf(n); return `${f.week} ${f.colour} ${f.shape}`; };
  assert.equal(at(1), '1 orange classic');
  assert.equal(at(7), '1 orange classic');
  assert.equal(at(8), '2 orange sparks');
  assert.equal(at(42), '6 orange trident');
  assert.equal(at(43), '7 red classic');
  assert.equal(at(210), '30 purple trident');
  assert.equal(at(5000), '30 purple trident');
  assert.equal(flameOf(8).src, '/flames/week-02.webp');
  assert.equal(weekStart(2), 8);
  // every week's picture (and the grey one) is there
  const files = new Set(readdirSync(join(root, 'public/flames')));
  for (let w = 1; w <= FLAME_WEEKS; w++) assert.ok(files.has(`week-${String(w).padStart(2, '0')}.webp`), `week ${w}`);
  for (const s of ['classic', 'sparks', 'hitodama', 'arcane', 'blaze', 'trident']) assert.ok(files.has(`lost-${s}.webp`), s);
});

test('0.9.9.9.6.2 animations play whatever the system\'s "reduce motion" says (Windows animation effects off)', () => {
  const css = readFileSync(join(root, 'public/style.css'), 'utf8');
  assert.ok(!/@media[^{]*prefers-reduced-motion\s*:\s*reduce/.test(css), 'no reduce-motion rules in style.css');
  const walk = (d: string): string[] => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : p.endsWith('.ts') ? [p] : []; });
  for (const f of walk(join(root, 'src'))) assert.ok(!readFileSync(f, 'utf8').includes('prefers-reduced-motion: reduce'), f);
});

test('0.9.9.9.6.2 messenger: the list is the same with the lookups side by side', async () => {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('t'));
  const messages = new MessageService(store, { deliver: () => {}, online: () => false });
  const me = await auth.register('lister', 'secret12');
  const others = await Promise.all(['ana62', 'ben62', 'cid62'].map((n) => auth.register(n, 'secret12')));
  let t = 1000;
  for (const o of others) {
    await store.requestFriend(me.user.id, o.user.id); await store.acceptFriend(o.user.id, me.user.id);
    await store.addMessage({ fromId: o.user.id, toId: me.user.id, text: `hi from ${o.user.username}`, at: t += 1000, kind: null, by: null });
  }
  const u = (await store.findById(me.user.id))!;
  const r = await messages.list(u);
  assert.deepEqual(r.conversations.filter((c) => !c.support).map((c) => c.name), ['cid62', 'ben62', 'ana62'], 'newest first');
  assert.ok(r.conversations.every((c) => c.support || c.friend));
  assert.equal(r.unread, 3);
});

test('0.9.9.9.6.2 the paintings\' moving parts: every part and the painting under it are there', () => {
  const src = readFileSync(join(root, 'src/client/backgrounds.ts'), 'utf8');
  const table = src.slice(src.indexOf('const PARTS: Record<string, Part[]> = {'), src.indexOf('};', src.indexOf('const PARTS: Record<string, Part[]> = {')));
  const keys = [...table.matchAll(/'([a-z]+-(?:day|sunset|night))': \[(.*)\],/g)];
  assert.ok(keys.length >= 6, 'the World Tree and the castle at every time of day');
  for (const [, key, list] of keys) {
    assert.ok(existsSync(join(root, 'public/bg', `${key}-p.webp`)), `${key}: the painting with its parts painted out`);
    for (const [, file, kind, ...nums] of list.matchAll(/\['(\w+)', '(\w+)', ([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\]/g)) {
      assert.ok(existsSync(join(root, 'public/bg/parts', `${key}-${file}.webp`)), `${key}-${file}`);
      assert.ok(['isle', 'flag', 'banner'].includes(kind));
      const [x, y, w, h] = nums.map(Number);
      assert.ok(x >= 0 && y >= 0 && x + w <= 100.01 && y + h <= 100.01 && w > 0 && h > 0, `${key}-${file}: inside the picture`);
    }
  }
});
