import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync, readdirSync } from 'node:fs';
import { taskPassed } from '../src/shared/progress';
import { SCREEN_ACTIVITY } from '../src/server/Session';
import { VOCAB, VOCAB_BY_ID } from '../src/server/vocab';

test('daily challenge thresholds: quiz 7/10, passage 4/8', () => {
  assert.equal(taskPassed('quiz', 7, 10), true);
  assert.equal(taskPassed('quiz', 6, 10), false);
  assert.equal(taskPassed('passage', 4, 8), true);
  assert.equal(taskPassed('passage', 3, 8), false);
});

test('study screens show a studying activity', () => {
  assert.equal(SCREEN_ACTIVITY.review, 'Studying spells');
  assert.equal(SCREEN_ACTIVITY.quiz, 'Taking a JLPT quiz');
  assert.equal(SCREEN_ACTIVITY.passage, 'Reading a passage');
});

test('every kanji-level word has an example sentence with furigana', () => {
  const dir = 'data/examples';
  const have = new Set<string>();
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.tsv'))) {
    for (const line of readFileSync(`${dir}/${f}`, 'utf8').split('\n')) {
      if (!line.trim()) continue;
      const [id, ja, en, ru] = line.split('\t');
      assert.ok(VOCAB_BY_ID.has(id), `unknown id ${id} in ${f}`);
      assert.match(ja, /【[^】]+】/, `${id}: target not marked`);
      assert.ok(en && ru, `${id}: missing translation`);
      const bare = ja.replace(/\[[^\]|]+\|[^\]]+\]/g, '');
      assert.doesNotMatch(bare, /[一-鿿々]/, `${id}: kanji without furigana`);
      have.add(id);
    }
  }
  const missing = VOCAB.filter((v) => /^N[1-5]$/.test(v.level) && !have.has(v.id));
  assert.equal(missing.length, 0, `missing examples: ${missing.slice(0, 5).map((v) => v.id).join(', ')}`);
});

test('Study spells uses the JLPT list; games keep the stroke-count levels', async () => {
  const { studyLevelOf } = await import('../src/shared/protocol');
  const tabi = VOCAB.find((v) => v.kanji === '旅')!;
  assert.equal(studyLevelOf(tabi), tabi.jlpt ?? tabi.level);
  for (const v of VOCAB) if (v.jlpt) assert.equal(studyLevelOf(v), v.jlpt);
  console.log('旅', tabi.level, '→ study', studyLevelOf(tabi));
});
