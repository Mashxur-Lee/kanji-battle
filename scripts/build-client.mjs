// Client bundles (0.9.9.4: a script instead of the esbuild CLI, for the offline engine). The app bundle
// includes the server's study code (StudyService, DailyService, the API router) so the app can keep
// studying without internet; Node-only imports are swapped for browser stand-ins, and server/vocab.ts for
// a version that loads public/vocab.json. Also writes vocab.json and the service worker's file list.
import { build, transform } from 'esbuild';
import { copyFileSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const r = (...p) => path.join(root, ...p);

const browserServer = {
  name: 'browser-server',
  setup(b) {
    b.onResolve({ filter: /^node:(crypto|fs|path)$/ }, () => ({ path: r('src/client/offline/node-shim.ts') }));
    // the word list: fetched by the app instead of read from disk
    b.onResolve({ filter: /\/vocab$/ }, (a) => (path.resolve(a.resolveDir, a.path) === r('src/server/vocab') ? { path: r('src/client/offline/vocab.ts') } : undefined));
  },
};

// 0.9.9.9.6.4: this build's id — in the app (__KW_BUILD__) and in public/build.txt for the server, which tells every
// connected app; one that was built earlier updates itself instead of running the old version for days
const BUILD_ID = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
writeFileSync(r('public/build.txt'), BUILD_ID);
await build({
  entryPoints: [r('src/client/main.ts')], bundle: true, outfile: r('public/app.js'), target: 'es2020',
  // 0.9.9.9: minified (it was the only bundle that wasn't — 1.3 MB)
  minify: true,
  plugins: [browserServer], define: { 'process.env.RENDER': 'undefined', 'process.env.ADMIN_PASSWORD': 'undefined', __KW_BUILD__: JSON.stringify(BUILD_ID) }, logLevel: 'warning',
});
await build({ entryPoints: [r('src/client/arena3d.ts')], bundle: true, minify: true, outfile: r('public/arena3d.js'), target: 'es2020', logLevel: 'warning' });
copyFileSync(r('data/vocab.json'), r('public/vocab.json'));
// 0.9.9.9.8: the page and the stylesheet as they are sent — without the notes written for whoever works on the code
// (every block's version and why), the stylesheet minified: dist/public. The server sends these when they are newer
// than the files in public/ (which stay the ones to edit). The stylesheet was half a megabyte of mostly notes.
mkdirSync(r('dist/public'), { recursive: true });
writeFileSync(r('dist/public/style.css'), (await transform(readFileSync(r('public/style.css'), 'utf8'), { loader: 'css', minify: true, legalComments: 'none', logLevel: 'warning' })).code);
writeFileSync(r('dist/public/index.html'), readFileSync(r('public/index.html'), 'utf8').replace(/[ \t]*<!--[\s\S]*?-->\n?/g, ''));
// example sentences (0.9.9.4.2): data/examples/*.tsv — id, sentence with the word in 【】, English, Russian
const examples = {};
for (const f of readdirSync(r('data/examples')).filter((x) => x.endsWith('.tsv')).sort()) {
  for (const line of readFileSync(r('data/examples', f), 'utf8').split('\n')) {
    const [id, ja, en, ru] = line.split('\t');
    if (id && ja && en) examples[id] = [ja, en, ru ?? ''];
  }
}
writeFileSync(r('public/examples.json'), JSON.stringify(examples));

// kanji help (0.9.9.4.4): KANJIDIC meanings/readings + KanjiVG parts (data/kanji/base.json), friendly names for the parts
// (radicals.tsv, components.tsv) and a hand-written Russian meaning + memory story per kanji (data/kanji/notes/*.tsv)
{
  const base = JSON.parse(readFileSync(r('data/kanji/base.json'), 'utf8'));
  const tsv = (f) => readFileSync(f, 'utf8').split('\n').filter((l) => l.trim()).map((l) => l.split('\t'));
  const names = {};
  for (const [c, m] of Object.entries(base.partMeanings)) names[c] = [m.toLowerCase(), ''];
  const notes = {};
  for (const f of readdirSync(r('data/kanji/notes')).filter((x) => x.endsWith('.tsv')).sort()) {
    for (const [c, ru, en, sr] of tsv(r('data/kanji/notes', f))) notes[c] = { ru, en, sr };
  }
  for (const [c, d] of Object.entries(base.kanji)) names[c] = [(d.m[0] ?? '').toLowerCase(), (notes[c]?.ru ?? '').split(/[,;]/)[0].trim()];
  for (const f of ['components.tsv', 'radicals.tsv']) for (const [c, en, ru] of tsv(r('data/kanji', f))) names[c] = [en, ru];
  const kanji = {};
  for (const [c, d] of Object.entries(base.kanji)) {
    const n = notes[c] ?? {};
    const parts = d.p.map((e) => [e.startsWith('CDP') ? '' : e, ...(names[e] ?? ['', ''])]).filter((x) => x[1]);
    // [8] which part each stroke belongs to (index into d.p, -1 none) — colours the parts in the picture
    const idx = d.p.map((e) => parts.findIndex((x) => x[0] === e || (e.startsWith('CDP') && x[0] === '')));
    kanji[c] = [d.m.filter((m) => !/radical/i.test(m)).join(', '), n.ru ?? '', d.on.join('、'), d.kun.join('、'), parts, n.en ?? '', n.sr ?? '', d.s ? d.s.map((i) => (i < 0 ? -1 : idx[i])) : null];
  }
  writeFileSync(r('public/kanji.json'), JSON.stringify(kanji));
}

// the service worker caches these for offline use; its version changes whenever any of them does.
// 0.9.9.9.6.5: two caches — the game's code (new with every build, ~1 MB) and the word lists (their own version:
// downloaded again only when the words change). Before, every build made every player download all of it again,
// the 8 MB dictionary too; the dictionary isn't in here at all now (it comes when you open it, and is kept on the
// device then — dictui.ts).
const SHELL = ['/', '/index.html', '/privacy.html', '/terms.html', '/legal.css', '/app.js', '/arena3d.js', '/style.css', '/favicon.svg', '/favicon.ico', '/icons/favicon-32.png', '/icons/favicon-64.png', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png', '/icons/maskable-512.png', '/icons/apple-touch-icon.png',
  // 0.9.9.9.9.3: the game's fonts (Latin, Cyrillic and the logo's kana and kanji) — offline too
  ...readdirSync(r('public/fonts')).filter((f) => f.endsWith('.woff2')).map((f) => `/fonts/${f}`),
  // 0.9.9.9.9.4: the arenas' surface detail (High)
  '/textures/kw-detail.webp', '/textures/kw-detail2.webp'];
const DATA = ['/vocab.json', '/examples.json', '/kanji.json', '/meanings-ru.json'];
const hashOf = (files) => { const h = createHash('sha256'); for (const f of files) if (f !== '/') { try { h.update(readFileSync(r('public', f))); } catch { /* not built yet */ } } return h.digest('hex').slice(0, 12); };
const sw = readFileSync(r('src/client/sw.js'), 'utf8')
  .replace('__SHELL__', JSON.stringify(SHELL))
  .replace('__DATA__', JSON.stringify(DATA))
  .replace('__DATA_V__', hashOf(DATA))
  .replace('__BUILD__', hashOf(SHELL));
writeFileSync(r('public/sw.js'), sw);
