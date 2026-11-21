// 0.9.9.9.9.4: the 3D arenas' surface detail on High (baked in Blender), the castle's bricks, tiles and planks.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { VERSION } from '../src/shared/version';

const src = (f: string) => readFileSync(f, 'utf8').replace(/\r\n/g, '\n');

test('0.9.9.9.9.4 version and patch notes', () => {
  assert.ok(VERSION >= '0.9.9.9.9.4');
  assert.match(src('src/client/whatsnew.ts'), /v: '0\.9\.9\.9\.9\.4'/);
});

test('0.9.9.9.9.4 surface detail: two small images, on High only, laid on by world position', () => {
  for (const f of ['public/textures/kw-detail.webp', 'public/textures/kw-detail2.webp']) {
    assert.ok(existsSync(f), f);
    assert.ok(statSync(f).size < 400_000, `${f} stays small`);
  }
  const kit = src('src/client/arenas/kit.ts');
  assert.match(kit, /if \(detailOn && surface !== 'none'\) \{ addDetail\(m, surface, emit\); return m; \}/);
  assert.match(src('src/client/arenas/index.ts'), /setArenaDetail\(!lite\);/, 'Low (lite) as before');
  assert.match(kit, /float kwH = texture2D\(kwDetail, kwP\.zy\)/, 'from three sides, no texture coordinates');
  assert.match(kit, /kwH = mix\(0\.5, kwH, kwReady\);/, 'nothing changes until the image has loaded');
  // the castle: bricks, tiles, planks
  assert.match(src('src/client/arenas/castle.ts'), /vcMat\(\{ surface: 'brick' \}\)[\s\S]*vcMat\(\{ surface: 'tiles' \}\)[\s\S]*surface: 'planks'/);
  // offline too, and cached
  assert.match(src('scripts/build-client.mjs'), /'\/textures\/kw-detail\.webp', '\/textures\/kw-detail2\.webp'/);
});
