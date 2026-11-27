// 0.9.9.9.9.6 (round 7): the phone — the Android app is this page in a WebView, so its Back button and a notification's
// link are played here the way the app passes them on (window.kwBackNative, ?inbox=…), on a phone-sized screen.
import { expect, test } from '@playwright/test';
import { closeDialogs, openPage, signedIn, watchErrors } from './helpers';

const back = (page: import('@playwright/test').Page) => page.evaluate(() => (window as unknown as { kwBackNative: () => boolean }).kwBackNative());

test.beforeEach(({}, info) => { test.skip(info.project.name !== 'phone', 'phone only'); });

test('Back in a chat: to the list of chats, then the menu — never out of the app', async ({ page }) => {
  const errors = watchErrors(page);
  await signedIn(page);
  // a message notification tapped: the app opens the page at ?inbox=<who> — the team's chat here
  await page.goto('/?inbox=support');
  await expect(page.locator('#inbox')).toHaveClass(/thread-open/);
  await closeDialogs(page, 1500);
  expect(await page.evaluate(() => location.search)).toBe(''); // (the link is used once and cleared)
  expect(await back(page)).toBe(true);
  await expect(page.locator('#inbox')).not.toHaveClass(/thread-open/);
  await expect(page.locator('#inbox')).toBeVisible();
  expect(await back(page)).toBe(true);
  await expect(page.locator('#menu')).toBeVisible();
  expect(await back(page)).toBe(false); // (at the menu: the app goes to the background)
  expect(errors).toEqual([]);
});

test('Back from Match history goes to the menu', async ({ page }) => {
  await signedIn(page);
  await openPage(page, 'historyBtn', 'history');
  expect(await back(page)).toBe(true);
  await expect(page.locator('#menu')).toBeVisible();
});

test('the main pages fit the phone: nothing wider than the screen', async ({ page }) => {
  const errors = watchErrors(page);
  await signedIn(page);
  for (const [btn, screen] of [['studyBtn', 'study'], ['grammarBtn', 'grammar'], ['quizzesBtn', 'quizzes'], ['kanaBtn', 'kana'], ['historyBtn', 'history'], ['gamesBtn', 'games']] as const) {
    await openPage(page, btn, screen);
    const over = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    expect(over, `${screen} is ${over}px wider than the screen`).toBeLessThanOrEqual(1);
    await back(page);
    await expect(page.locator('#menu')).toBeVisible();
  }
  expect(errors).toEqual([]);
});
