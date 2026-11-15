import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { VERSION } from '../src/shared/version';

const css = readFileSync('public/style.css', 'utf8');
const src = (f: string) => readFileSync(f, 'utf8');

test('0.9.9.9.6.8 version and patch notes', () => {
  assert.equal(VERSION, '0.9.9.9.6.8');
  assert.match(src('src/client/whatsnew.ts'), /v: '0\.9\.9\.9\.6\.8'/);
});

test('0.9.9.9.6.8 a hovered achievement (and its description) is above a pinned neighbour\'s star', () => {
  const pin = css.match(/\.ach-pin \{[^}]*z-index: (\d+)/);
  assert.ok(pin, 'the pin has a z-index');
  const hover = css.match(/\.ach:hover, \.ach:focus-visible, \.ach:focus-within \{ z-index: (\d+); \}/);
  assert.ok(hover, 'the hovered badge is lifted');
  assert.ok(Number(hover![1]) > Number(pin![1]));
});

test('0.9.9.9.6.8 filming the trailer: no camera shake, no automatic drop to Lite (kb:filming)', () => {
  const a3 = src('src/client/arena3d.ts');
  assert.match(a3, /localStorage\.getItem\('kb:filming'\) === '1'/);
  assert.match(a3, /const kick = \(amount: number\) => \{ if \(!filming\)/);
  assert.match(a3, /if \(lowRes \|\| document\.hidden \|\| filming\) return;/);
  assert.match(src('src/client/ui.ts'), /if \(!reduced && !filming\(\)\) retrigger\(arena, 'shake', 350\)/);
});

test('0.9.9.9.6.8 the trailer has sound and the README loop stays light enough for GitHub', () => {
  assert.ok(existsSync('docs/promo/trailer.mp4'));
  assert.ok(statSync('docs/promo/trailer.webp').size < 9_000_000);
});
