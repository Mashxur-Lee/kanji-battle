import assert from 'node:assert/strict';
import { test } from 'node:test';
import { averageBaseDamage, hpAgainst } from '../src/server/Balance';

test('HP scales with how hard the opponent hits', () => {
  const n1n2 = hpAgainst(['N2', 'N1']);
  const n5 = hpAgainst(['N5']);
  const kanaN5 = hpAgainst(['KANA', 'N5']);
  assert.ok(n1n2 >= 850 && n1n2 <= 1200, `N1+N2 opponent → ~1000 HP (got ${n1n2})`);
  assert.ok(n5 >= 160 && n5 <= 260, `N5 opponent → ~200 HP (got ${n5})`);
  assert.ok(kanaN5 < n5, 'adding hiragana lowers it further');
  assert.ok(hpAgainst(['KANA']) >= 100, 'never absurdly low');
  // about the same number of hits at every level (a beginner never runs out of time)
  for (const lv of ['KANA', 'N5', 'N3'] as const) {
    const hits = hpAgainst([lv]) / (averageBaseDamage([lv]) * 1.3);
    assert.ok(hits >= 12 && hits <= 24, `${lv}: ${hits.toFixed(1)} hits`);
  }
});
