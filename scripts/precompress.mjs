// 0.9.9.9.7.2: the game's text files compressed once, at build time (Brotli and gzip), into dist/precompressed. The
// server used to compress each one on its first request after a deploy — at the highest setting, on its only thread:
// about 13 s in all (much longer on a small server) during which every battle stood still. The server now sends
// these as they are, and compresses only what isn't here (quickly, off its main thread).
// The manifest has each file's size and sha256: a file changed since the build is never sent from here.
import { brotliCompress, constants as zc, gzip } from 'node:zlib';
import { createHash } from 'node:crypto';
import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// (the folders can be changed for the tests)
const PUBLIC = process.env.KW_PUBLIC_DIR ?? path.join(root, 'public');
const OUT = process.env.KW_PRECOMPRESSED_DIR ?? path.join(root, 'dist', 'precompressed');
/** the types the server compresses (src/server/index.ts: text, JSON, JavaScript, SVG, the 3D models) */
const COMPRESSIBLE =/\.(html|js|css|svg|json|webmanifest|glb|txt)$/;
const br = promisify(brotliCompress), gz = promisify(gzip);

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p); else yield p;
  }
}

const t0 = Date.now();
await rm(OUT, { recursive: true, force: true });
const files = [];
for await (const f of walk(PUBLIC)) if (COMPRESSIBLE.test(f)) files.push(f);
const manifest = {};
let saved = 0;
// (zlib's async calls run on the thread pool: several files at once)
await Promise.all(files.map(async (f) => {
  const data = await readFile(f);
  if (data.length <= 1024) return;
  const rel = path.relative(PUBLIC, f).split(path.sep).join('/');
  const [b, g] = await Promise.all([
    br(data, { params: { [zc.BROTLI_PARAM_QUALITY]: data.length > 2e6 ? 9 : 11, [zc.BROTLI_PARAM_SIZE_HINT]: data.length } }),
    gz(data, { level: 9 }),
  ]);
  const dest = path.join(OUT, rel);
  await mkdir(path.dirname(dest), { recursive: true });
  await Promise.all([writeFile(`${dest}.br`, b), writeFile(`${dest}.gz`, g)]);
  manifest[rel] = { size: data.length, sha256: createHash('sha256').update(data).digest('hex') };
  saved += data.length - b.length;
}));
await writeFile(path.join(OUT, 'manifest.json'), JSON.stringify(manifest));
console.log(`precompressed ${Object.keys(manifest).length} files (${(saved / 1e6).toFixed(1)} MB smaller with Brotli) in ${((Date.now() - t0) / 1000).toFixed(1)} s`);
