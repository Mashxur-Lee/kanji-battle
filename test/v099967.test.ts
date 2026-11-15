import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync, existsSync } from 'node:fs';
import { VERSION } from '../src/shared/version';

const css = readFileSync('public/style.css', 'utf8');
const src = (f: string) => readFileSync(f, 'utf8');

test('0.9.9.9.6.7 version is bumped everywhere', () => {
  assert.equal(VERSION, '0.9.9.9.6.7');
  assert.equal(JSON.parse(src('package.json')).version, VERSION);
  assert.match(src('README.md').split('\n')[0], /v0\.9\.9\.9\.6\.7/);
  assert.match(src('src/client/whatsnew.ts'), /v: '0\.9\.9\.9\.6\.7'/);
});

test('0.9.9.9.6.7 the 2D arena sizes its wizards from the window (not a small fixed clamp)', () => {
  const rules = css.slice(css.indexOf('/* 0.9.9.9.6.7: the 2D arena'));
  assert.match(rules, /body:not\(\.has-3d\) #battle \.wizard \.sprite \{ width: max\(110px, min\(calc\(21 \* var\(--vh\)\)/);
  assert.match(rules, /#arena\[data-party="4"\] \.wizard \.sprite/, 'parties of four stay in step');
  assert.match(rules, /@media \(max-width: 640px\)/, 'phones too');
});

test('0.9.9.9.6.7 tutorial questions: two answers on one line, Skip under them', () => {
  assert.match(src('src/client/tutorial.ts'), /actions\.classList\.add\('tut-choice'\)/);
  assert.match(css, /\.tut-actions\.tut-choice \{ display: grid; grid-template-columns: 1fr 1fr; \}/);
  assert.match(css, /\.tut-choice > :not\(\.big\) \{ order: 1; grid-column: 1 \/ -1;/);
});

test('0.9.9.9.6.7 the computer menu never scrolls; a too-tall menu is reported', () => {
  assert.match(css, /html:has\(> body\[data-screen="menu"\]\), body\[data-screen="menu"\] \{ overflow: hidden; \}/);
  assert.match(src('src/client/support.ts'), /export function reportLayout\(/);
  assert.match(src('src/client/main.ts'), /reportLayout\('Menu taller than the window after Messages'/);
});

test('0.9.9.9.6.7 a handoff for the next assistant and the screenshot helper are in the repo', () => {
  assert.ok(existsSync('CLAUDE.md'));
  assert.match(src('CLAUDE.md'), /Never commit a keystore/);
  assert.ok(existsSync('scripts/ci-shots.sh'));
});

test('0.9.9.9.6.7 the README shows the trailer and a card per feature, and every picture it names exists', () => {
  const readme = src('README.md');
  assert.match(readme, /docs\/promo\/trailer\.webp/);
  assert.match(readme, /docs\/promo\/trailer\.mp4/);
  const pics = [...readme.matchAll(/docs\/promo\/([\w.-]+)/g)].map((m) => m[1]);
  assert.ok(pics.length >= 16, 'banner, trailer and the feature cards');
  for (const p of pics) assert.ok(existsSync(`docs/promo/${p}`), p);
  assert.doesNotMatch(readme, /admin123|ADMIN_PASSWORD=/, 'no credentials on the page');
});
