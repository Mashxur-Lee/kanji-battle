// 0.9.9.9.9.3: the navigation, the calmer pages, the game's own fonts, the player card's icon row, less text, and
// what search engines and AI assistants are told about the game.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { VERSION } from '../src/shared/version';

const src = (f: string) => readFileSync(f, 'utf8').replace(/\r\n/g, '\n');

test('0.9.9.9.9.3 version, patch notes, Russian for the navigation', () => {
  assert.ok(VERSION >= '0.9.9.9.9.3');
  assert.match(src('src/client/whatsnew.ts'), /v: '0\.9\.9\.9\.9\.3'/);
  const ru = src('src/client/i18n.ts');
  for (const k of ["'Home':", "'Battles':", "'Daily':", "'History':"]) assert.ok(ru.includes(k), k);
});

test('0.9.9.9.9.3 the navigation: on the pages you browse, not the menu, games or lessons; every listener of a screen change is called', () => {
  const nav = src('src/client/nav.ts');
  assert.match(nav, /export const NAV_SCREENS = new Set\(\['queue', 'private', 'modes', 'kana', 'progress', 'daily', 'friends', 'history', 'dict', 'study', 'inbox', 'quizzes', 'customize', 'admin'\]\);/);
  for (const s of ['menu', 'battle', 'deck', 'prep', 'review', 'quiz', 'passage', 'kanaplay', 'results', 'lobby', 'auth']) assert.ok(!new RegExp(`'${s}'`).test(nav.slice(nav.indexOf('NAV_SCREENS'), nav.indexOf('NAV_SCREENS') + 300)), `${s}: no nav`);
  assert.match(nav, /leaveCurrent\(\);\n\s+if \(it\.btn\) document\.getElementById\(it\.btn\)\?\.click\(\);/, 'a tab leaves the page as its own back button does');
  const ui = src('src/client/ui.ts');
  assert.match(ui, /export const onScreen = \(fn: \(s: Screen\) => void\) => \{ screenListeners\.push\(fn\); \};/);
  assert.match(ui, /for \(const fn of screenListeners\) fn\(screen\);/);
  const css = src('public/style.css');
  assert.match(css, /body\.has-nav \.screen:not\(#menu\) \{ padding-left: calc\(60px \+ 212px \+ 28px\); \}/);
  assert.match(css, /@media \(max-width: 760px\) \{\n\s+\.app-nav \{ left: 0; right: 0; top: auto; bottom: 0;/, 'phones: a tab bar along the bottom');
  assert.match(css, /body\.has-nav \.screen:not\(#menu\) \{ border-top-width: 0 !important; \}/, 'pages start at the top');
});

test('0.9.9.9.9.3 the game\'s own fonts: in /fonts with their licences, offline too, served as fonts', () => {
  const css = src('public/style.css');
  assert.match(css, /@font-face \{ font-family: "KW Display";/);
  assert.match(css, /@font-face \{ font-family: "KW Rounded";/);
  assert.match(css, /--ui: "KW Rounded", system-ui/);
  assert.match(css, /h1, h2, \.mc-title, \.result-title[^{]*\{ font-family: var\(--brand\)/);
  const fonts = readdirSync('public/fonts');
  for (const m of css.matchAll(/url\(\/fonts\/([^)]+)\)/g)) assert.ok(fonts.includes(m[1]), m[1]);
  assert.ok(existsSync('public/fonts/OFL-DelaGothicOne.txt') && existsSync('public/fonts/OFL-MPLUSRounded1c.txt'), 'the licences');
  assert.match(src('CREDITS.md'), /\*\*Dela Gothic One\*\*[\s\S]*SIL Open Font License 1\.1/);
  assert.match(src('scripts/build-client.mjs'), /readdirSync\(r\('public\/fonts'\)\)\.filter\(\(f\) => f\.endsWith\('\.woff2'\)\)/);
  assert.match(src('src/server/index.ts'), /'\.woff2': 'font\/woff2'/);
});

test('0.9.9.9.9.3 the player card: one row of icon buttons, their words as tooltips', () => {
  const ui = src('src/client/ui.ts');
  assert.match(ui, /const b = h\('button', `\$\{cls\} pp-icon`\) as HTMLButtonElement;/);
  assert.match(ui, /b\.title = tr\(text\); b\.setAttribute\('aria-label', tr\(text\)\);/);
  assert.match(ui, /if \(a\.safety\) grid\.append\(\.\.\.a\.safety\.children\);/, 'Block and Report in the same row');
  assert.match(src('public/style.css'), /\.pp-icons > \.pp-icon \{ width: 38px !important; height: 38px; \}/);
});

test('0.9.9.9.9.3 less text: each page\'s opening paragraph folds behind the (i)', () => {
  const tips = src('src/client/tips.ts');
  for (const s of ['#queue > p.sub', '#history > p.sub', '#study > p.sub']) assert.ok(tips.includes(`'${s}'`), s);
});

test('0.9.9.9.9.3 search engines and AI assistants: a description, structured data, robots.txt, a sitemap, llms.txt', () => {
  const html = src('public/index.html');
  assert.match(html, /<meta name="description" content="Kanji Wizards is a free multiplayer game for learning Japanese/);
  assert.match(html, /<script type="application\/ld\+json">\{"@context":"https:\/\/schema\.org","@type":"VideoGame","name":"Kanji Wizards"/);
  assert.match(html, /<meta property="og:title"/);
  assert.match(src('public/robots.txt'), /User-agent: \*\nAllow: \/\nDisallow: \/api\//);
  assert.match(src('public/sitemap.xml'), /<loc>https:\/\/kanji-battle-ev0o\.onrender\.com\/<\/loc>/);
  assert.match(src('public/llms.txt'), /^# Kanji Wizards\n/);
  // the structured data is valid JSON
  const ld = /<script type="application\/ld\+json">(.+?)<\/script>/.exec(html)![1];
  assert.equal(JSON.parse(ld).name, 'Kanji Wizards');
});
