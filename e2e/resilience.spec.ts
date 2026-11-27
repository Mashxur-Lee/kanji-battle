// 0.9.9.9.9.6 (round 7): when things go wrong — no internet, the server failing, the Back button in loops.
import { expect, test } from '@playwright/test';
import { openPage, signedIn, watchErrors } from './helpers';

test.describe(() => {
  test.use({ serviceWorkers: 'allow' }); // (the offline copy lives in the service worker, as on a real device)
  test('the internet goes and comes back: the game says so and keeps working', async ({ page, context }) => {
  const errors = watchErrors(page);
  await signedIn(page);
  // the copy for offline play is made in the background after signing in
  await page.evaluate(async () => { await navigator.serviceWorker.ready; });
  await page.waitForTimeout(8000); // (made from the server: it needs the internet, so it must be there before it goes)
  await context.setOffline(true);
  // (the game switches to its offline copy once that copy is ready — told again every few seconds until it is)
  await expect.poll(async () => { await page.evaluate(() => dispatchEvent(new Event('offline'))); return page.evaluate(() => document.body.classList.contains('offline')); }, { timeout: 45_000, intervals: [1000, 3000] }).toBe(true);
  // studying works offline
  await openPage(page, 'studyBtn', 'study');
  await context.setOffline(false);
  await page.evaluate(() => dispatchEvent(new Event('online')));
  await expect(page.locator('body')).not.toHaveClass(/offline/, { timeout: 30_000 });
  expect(errors).toEqual([]);
  });
});

test('the server fails (500) on Messages: an error or the saved chats are shown, the page keeps working', async ({ page }) => {
  const errors = watchErrors(page);
  await signedIn(page);
  await page.route('**/api/messages**', (r) => r.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({ error: 'Server trouble (a test)' }) }));
  await openPage(page, 'inboxBtn', 'inbox');
  // an error, or the chats kept from before (the list is saved on the device) — never an empty, broken page
  await expect(page.locator('#msgList')).toContainText(/trouble|error|wrong|try|team/i);
  // and back to the menu as usual
  await page.evaluate(() => (window as unknown as { kwBackNative: () => boolean }).kwBackNative());
  await expect(page.locator('#menu')).toBeVisible();
  expect(errors).toEqual([]);
});

test('the server fails on the ranked ladder: the queue still opens (no rank cards, no crash)', async ({ page }) => {
  const errors = watchErrors(page);
  await signedIn(page);
  await page.route('**/api/ladder**', (r) => r.fulfill({ status: 500, contentType: 'application/json', body: '{"error":"down"}' }));
  await openPage(page, 'gamesBtn', 'games');
  await page.locator('#games .gt-online').click();
  await expect(page.locator('#queue')).toBeVisible();
  await page.locator('#qSide [data-side="ranked"]').click();
  await expect(page.locator('#rankBox')).toBeHidden();
  await expect(page.locator('#qStart')).toBeVisible();
  expect(errors).toEqual([]);
});

test('Back never loops: menu → Match history → Back → the menu', async ({ page }) => {
  await signedIn(page);
  await openPage(page, 'historyBtn', 'history');
  await page.evaluate(() => (window as unknown as { kwBackNative: () => boolean }).kwBackNative());
  await expect(page.locator('#menu')).toBeVisible();
  // at the menu the page says "not mine" (the Android app then goes to the background)
  expect(await page.evaluate(() => (window as unknown as { kwBackNative: () => boolean }).kwBackNative())).toBe(false);
});

test('the queue shows level choices only for the modes that use them', async ({ page }) => {
  await signedIn(page);
  await openPage(page, 'gamesBtn', 'games');
  await page.locator('#games .gt-online').click();
  const setModes = (ms: string[]) => page.evaluate((want) => { for (const i of document.querySelectorAll<HTMLInputElement>('#qModes input')) if (i.checked !== want.includes(i.value) && !i.disabled) i.click(); }, ms);
  const levels = () => page.evaluate(() => { const row = document.querySelector<HTMLElement>('#queuePick .q-levels-row')!; return row.hidden ? [] : [...document.querySelectorAll<HTMLElement>('#qLevels label')].filter((l) => !l.hidden).map((l) => l.querySelector('input')!.value); });
  await setModes(['chess']);
  expect(await levels()).toEqual([]);
  await setModes(['clash']);
  expect(await levels()).toEqual(['N5', 'N4', 'N3', 'N2', 'N1']);
  await setModes(['rapid']);
  expect((await levels()).length).toBeGreaterThan(5);
});
