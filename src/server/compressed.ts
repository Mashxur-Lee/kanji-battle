// 0.9.9.9.7.2: the compressed copies of the game's files. They are made at build time (scripts/precompress.mjs →
// dist/precompressed, with a manifest of each file's size and sha256) and sent as they are. Before, the server
// compressed each file on its first request after a deploy, at the highest setting, on its only thread: about 13 s in
// all, during which every battle stood still. A file that isn't in the build's set (or changed since) is compressed
// here — quickly, and on Node's thread pool, so the game keeps running meanwhile. Each is made once.
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';
import { brotliCompress, constants as zc, gzip } from 'node:zlib';

const br = promisify(brotliCompress), gz = promisify(gzip);
export type Encoding = 'br' | 'gzip';
interface Entry { size: number; sha256: string }

export class Compressed {
  private manifest?: Promise<Record<string, Entry>>;
  private ready = new Map<string, Buffer>();
  private making = new Map<string, Promise<Buffer>>();
  private sums = new Map<string, string>();
  /** how many files were compressed here (not taken from the build) — for the tests */
  madeHere = 0;
  constructor(private readonly dir = path.resolve(__dirname, '../../dist/precompressed')) {}

  /** `rel`: the file's path inside public/ ("app.js", "models/witch.glb"); `data`: its contents now */
  get(rel: string, data: Buffer, enc: Encoding): Promise<Buffer> {
    const key = `${enc}:${rel}:${data.length}`;
    const done = this.ready.get(key);
    if (done) return Promise.resolve(done);
    let p = this.making.get(key);
    if (!p) {
      p = this.make(rel, data, enc).then((out) => { this.ready.set(key, out); return out; }).finally(() => this.making.delete(key));
      this.making.set(key, p);
    }
    return p;
  }

  private async make(rel: string, data: Buffer, enc: Encoding): Promise<Buffer> {
    const m = (await this.loadManifest())[rel];
    if (m && m.size === data.length && this.sum(rel, data) === m.sha256) {
      try { return await readFile(path.join(this.dir, `${rel}.${enc === 'br' ? 'br' : 'gz'}`)); } catch { /* compressed here then */ }
    }
    this.madeHere++;
    return enc === 'br'
      ? br(data, { params: { [zc.BROTLI_PARAM_QUALITY]: 5, [zc.BROTLI_PARAM_SIZE_HINT]: data.length } })
      : gz(data, { level: 6 });
  }

  private sum(rel: string, data: Buffer) {
    const k = `${rel}:${data.length}`;
    let s = this.sums.get(k);
    if (!s) { s = createHash('sha256').update(data).digest('hex'); this.sums.set(k, s); }
    return s;
  }

  private loadManifest() {
    this.manifest ??= readFile(path.join(this.dir, 'manifest.json'), 'utf8').then((t) => JSON.parse(t) as Record<string, Entry>).catch(() => ({}));
    return this.manifest;
  }
}
