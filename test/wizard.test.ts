import assert from 'node:assert/strict';
import { test } from 'node:test';
import { avatarSvg, CHARACTER_MAPS, DRAGON_MAP, dragonSvg, PALETTES, WIZARD_MAP, wizardSvg } from '../src/client/wizard';

test('wizard sprite map is a clean 16×20 grid with a colour for every symbol', () => {
  assert.equal(WIZARD_MAP.length, 20);
  for (const row of WIZARD_MAP) assert.equal(row.length, 16, row);
  for (const side of ['me', 'opp'] as const) {
    for (const ch of new Set(WIZARD_MAP.join(''))) if (ch !== '.') assert.ok(PALETTES[side][ch], `${side} palette has ${ch}`);
    assert.ok(!wizardSvg(side).includes('undefined'));
  }
});

test('dragon sprite is a clean 40×30 grid with glowing eyes', () => {
  assert.equal(DRAGON_MAP.length, 30);
  for (const row of DRAGON_MAP) assert.equal(row.length, 40, row);
  const svg = dragonSvg();
  assert.ok(svg.includes('class="eye"') && !svg.includes('undefined'));
  assert.ok(wizardSvg('ally').includes('#3aa57c'));
});

test('every level character is a clean 16×20 sprite', () => {
  for (const [name, map] of Object.entries(CHARACTER_MAPS)) {
    assert.equal(map.length, 20, name);
    for (const row of map) assert.equal(row.length, 16, `${name}: ${row}`);
    const svg = avatarSvg(name as any, 'me');
    assert.ok(svg.startsWith('<svg') && !svg.includes('undefined'), name);
  }
});
