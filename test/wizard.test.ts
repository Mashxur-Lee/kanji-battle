import assert from 'node:assert/strict';
import { test } from 'node:test';
import { PALETTES, WIZARD_MAP, wizardSvg } from '../src/client/wizard';

test('wizard sprite map is a clean 16×20 grid with a colour for every symbol', () => {
  assert.equal(WIZARD_MAP.length, 20);
  for (const row of WIZARD_MAP) assert.equal(row.length, 16, row);
  for (const side of ['me', 'opp'] as const) {
    for (const ch of new Set(WIZARD_MAP.join(''))) if (ch !== '.') assert.ok(PALETTES[side][ch], `${side} palette has ${ch}`);
    assert.ok(!wizardSvg(side).includes('undefined'));
  }
});
