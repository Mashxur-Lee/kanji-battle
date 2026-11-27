// 0.9.9.9.9.6 (round 7): learning, from start to finish — a grammar lesson passed and kept, study cards and their XP,
// a reload in the middle of a lesson, an answer pressed twice.
import { expect, test, type Page } from '@playwright/test';
import { GRAMMAR, plainJp } from '../src/shared/grammar';
import { api, openPage, signedIn, watchErrors } from './helpers';

/** the question on screen, found in the lesson's data — its right answer is the data's first choice */
async function rightAnswer(page: Page, lessonId: string) {
  const g = GRAMMAR.find((x) => x.id === lessonId)!;
  const shown = await page.locator('#grammarLesson .gr-q').first().evaluate((el) => { const c = el.cloneNode(true) as HTMLElement; c.querySelectorAll('rt').forEach((r) => r.remove()); return c.textContent ?? ''; });
  const q = g.questions.find((x) => plainJp(x.jp) === shown);
  expect(q, `question "${shown}" is in the lesson`).toBeTruthy();
  return q!.options[0];
}

test('a grammar lesson: read, answered right, passed — and still passed after a reload', async ({ page }) => {
  const errors = watchErrors(page);
  const { token } = await signedIn(page);
  await openPage(page, 'grammarBtn', 'grammar');
  const first = GRAMMAR.find((g) => g.level === 'N5')!;
  await page.locator('.gr-item').first().click();
  await expect(page.locator('#grammarLesson .gr-pattern')).toHaveText(first.pattern);
  await page.locator('.gr-ask').click();
  for (let i = 0; i < first.questions.length; i++) {
    const right = await rightAnswer(page, first.id);
    await page.locator('#grammarLesson .gr-opt', { hasText: right }).first().click();
    await expect(page.locator('#grammarLesson .gr-opt.right')).toHaveCount(1);
    await page.locator('#grammarLesson .gr-next').click();
  }
  await expect(page.locator('.gr-result.pass')).toBeVisible();
  // kept on the account: the server says so, and the list shows it after a reload
  await expect.poll(async () => (await api<{ passed: string[] }>(page, token, 'GET', '/api/grammar')).json?.passed ?? []).toContain(first.id);
  await page.reload();
  await openPage(page, 'grammarBtn', 'grammar');
  await expect(page.locator('.gr-item').first()).toHaveClass(/passed/);
  expect(errors).toEqual([]);
});

test('a reload in the middle of a lesson\'s questions: the game comes back, and the lesson is not counted as passed', async ({ page }) => {
  const errors = watchErrors(page);
  const { token } = await signedIn(page);
  await openPage(page, 'grammarBtn', 'grammar');
  await page.locator('.gr-item').first().click();
  await page.locator('.gr-ask').click();
  await page.locator('#grammarLesson .gr-opt').first().click();
  await page.reload();
  await expect(page.locator('#menu')).toBeVisible();
  const passed = (await api<{ passed: string[] }>(page, token, 'GET', '/api/grammar')).json?.passed ?? [];
  expect(passed).toEqual([]);
  expect(errors).toEqual([]);
});

test('study cards: new words a day set, a card answered, its XP counted once even if the answer is pressed twice', async ({ page }) => {
  const errors = watchErrors(page);
  const { token } = await signedIn(page);
  // five new N5 words a day (the API the Study page's − / + and Apply use)
  const set = await api(page, token, 'PUT', '/api/study/daily-levels', { levels: { N5: 5 } });
  expect(set.status).toBeLessThan(400);
  await page.reload();
  await openPage(page, 'studyBtn', 'study');
  await page.locator('#studyAll').click();
  await expect(page.locator('#review')).toBeVisible();
  await page.locator('#showAnswer').click();
  await expect(page.locator('#rateRow')).toBeVisible();
  await page.locator('#rateRow .rate.good').dblclick();
  // one answer: +5 XP (a card), not +10
  await expect.poll(async () => (await api<{ studyXpToday?: number }>(page, token, 'GET', '/api/study')).json?.studyXpToday ?? 0).toBe(5);
  expect(errors).toEqual([]);
});
