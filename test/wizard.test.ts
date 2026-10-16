import { test } from 'node:test';
import assert from 'node:assert/strict';
import { characterSvg, dragonArt, staffSvg } from '../src/client/art2d';
import { STAFFS } from '../src/shared/progress';

// 0.9.9.3: the 2D art is vector paintings (art2d.ts) instead of pixel maps

const wellFormed = (svg: string) => {
  assert.match(svg, /^<svg viewBox="0 0 \d+ \d+"/);
  assert.ok(svg.endsWith('</svg>'));
  assert.ok(!/NaN|undefined/.test(svg), 'no broken numbers or colours');
  // every gradient / clip used is defined in the same picture
  for (const [, id] of svg.matchAll(/url\(#(\w+)\)/g)) assert.ok(svg.includes(`id="${id}"`), `missing #${id}`);
};

test('every character is a 160×200 painting holding a staff, with unique ids across pictures', () => {
  const all: string[] = [];
  for (const k of ['wizard', 'witch', 'knight', 'goblin', 'kid', 'human'] as const) for (const side of ['me', 'opp', 'ally'] as const) {
    const s = characterSvg(k, side, 'storm');
    assert.match(s, /^<svg viewBox="0 0 160 200"/);
    wellFormed(s);
    assert.match(s, /class="orb"/, `${k} holds a staff with a gem`);
    all.push(s);
  }
  const ids = all.flatMap((s) => [...s.matchAll(/id="(\w+)"/g)].map((m) => m[1]));
  assert.equal(new Set(ids).size, ids.length, 'gradient ids never clash when several characters are on the page');
});

test('the Black Dragon is a 400×300 painting with glowing eyes', () => {
  const s = dragonArt();
  assert.match(s, /^<svg viewBox="0 0 400 300"/);
  wellFormed(s);
  assert.match(s, /class="eye"/);
});

test('every staff (seasonal ones too) has its own painting with a gem', () => {
  for (const st of STAFFS) { const s = staffSvg(st.id); wellFormed(s); assert.match(s, /class="orb"/); }
  assert.notEqual(staffSvg('verdant'), staffSvg('blossom'), 'a seasonal staff is recoloured');
});
