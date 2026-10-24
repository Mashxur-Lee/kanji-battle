// Client bundles (0.9.9.4: a script instead of the esbuild CLI, for the offline engine). The app bundle
// includes the server's study code (StudyService, DailyService, the API router) so the app can keep
// studying without internet; Node-only imports are swapped for browser stand-ins, and server/vocab.ts for
// a version that loads public/vocab.json. Also writes vocab.json and the service worker's file list.
import { build } from 'esbuild';
import { copyFileSync, readFileSync, writeFileSync } from 'node:fs';
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

await build({
  entryPoints: [r('src/client/main.ts')], bundle: true, outfile: r('public/app.js'), target: 'es2020',
  plugins: [browserServer], define: { 'process.env.RENDER': 'undefined', 'process.env.ADMIN_PASSWORD': 'undefined' }, logLevel: 'warning',
});
await build({ entryPoints: [r('src/client/arena3d.ts')], bundle: true, minify: true, outfile: r('public/arena3d.js'), target: 'es2020', logLevel: 'warning' });
copyFileSync(r('data/vocab.json'), r('public/vocab.json'));

// the service worker caches these for offline use; its version changes whenever any of them does
const SHELL = ['/', '/index.html', '/app.js', '/arena3d.js', '/style.css', '/favicon.svg', '/vocab.json', '/meanings-ru.json', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png', '/icons/maskable-512.png', '/icons/apple-touch-icon.png'];
const h = createHash('sha256');
for (const f of SHELL) if (f !== '/') { try { h.update(readFileSync(r('public', f))); } catch { /* not built yet */ } }
const sw = readFileSync(r('src/client/sw.js'), 'utf8')
  .replace('__SHELL__', JSON.stringify(SHELL))
  .replace('__BUILD__', h.digest('hex').slice(0, 12));
writeFileSync(r('public/sw.js'), sw);
