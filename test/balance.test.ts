import assert from 'node:assert/strict';
import { test } from 'node:test';
import { hpAgainst } from '../src/server/Balance';

test('HP scales with how hard the opponent hits', () => {
  const n1n2 = hpAgainst(['N2', 'N1']);
  const n5 = hpAgainst(['N5']);
  const kanaN5 = hpAgainst(['KANA', 'N5']);
  assert.ok(n1n2 >= 850 && n1n2 <= 1100, `N1+N2 opponent → ~1000 HP (got ${n1n2})`);
  assert.ok(n5 >= 250 && n5 <= 350, `N5 opponent → ~300 HP (got ${n5})`);
  assert.ok(kanaN5 < n5, 'adding hiragana lowers it further');
  assert.ok(hpAgainst(['KANA']) >= 150, 'never absurdly low');
});
