// 0.9.9.9.9.6 (round 7): signing up and in, the way a person does it — and the ways it can go wrong.
import { expect, test } from '@playwright/test';
import { PASSWORD, signedIn, uniqueName, watchErrors } from './helpers';

test('a new player signs up with the form, skips the tutorial and is still signed in after a reload', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/');
  await page.locator('#tabRegister').click();
  const name = uniqueName();
  await page.locator('#authUser').fill(name);
  await page.locator('#authPass').fill(PASSWORD);
  await page.locator('#authEmail').fill(`${name}@example.com`);
  const consent = page.locator('#authConsent');
  if (await consent.isVisible()) await consent.check();
  await page.locator('#authSubmit').click();
  // the tutorial starts for a new player (with "Confirm your email" over it: Later); it can be skipped
  await expect(page.locator('#tutorial')).toBeVisible();
  await page.getByRole('button', { name: 'Later' }).click();
  await page.getByRole('button', { name: 'Skip tutorial' }).click();
  await expect(page.locator('#menu')).toBeVisible();
  await page.reload();
  await expect(page.locator('#menu')).toBeVisible();
  await expect(page.locator('#auth')).toBeHidden();
  expect(errors).toEqual([]);
});

test('a wrong password is refused with a message; the right one signs in', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/');
  const name = uniqueName();
  const made = await page.evaluate(async ([u, p]) => (await fetch('/api/register', { method: 'POST', body: JSON.stringify({ username: u, password: p, email: `${u}@example.com` }) })).status, [name, PASSWORD]);
  expect(made).toBe(200);
  await page.locator('#tabLogin').click();
  await page.locator('#authUser').fill(name);
  await page.locator('#authPass').fill('not-the-password');
  await page.locator('#authSubmit').click();
  await expect(page.locator('#authError')).not.toBeEmpty();
  await expect(page.locator('#menu')).toBeHidden();
  await page.locator('#authPass').fill(PASSWORD);
  await page.locator('#authSubmit').click();
  await expect(page.locator('#auth')).toBeHidden();
  expect(errors).toEqual([]);
});

test('signing up with bad details is refused and makes no account', async ({ page }) => {
  await page.goto('/');
  const bad = await page.evaluate(async () => {
    const post = async (b: unknown) => (await fetch('/api/register', { method: 'POST', body: JSON.stringify(b) })).status;
    return {
      empty: await post({}),
      shortPassword: await post({ username: 'e2eshortpw', password: '1', email: 'e2eshortpw@example.com' }),
      badEmail: await post({ username: 'e2ebademail', password: 'tea-kettle-42', email: 'not-an-email' }),
      badName: await post({ username: 'a b<script>', password: 'tea-kettle-42', email: 'x1@example.com' }),
      login: (await fetch('/api/login', { method: 'POST', body: JSON.stringify({ username: 'e2eshortpw', password: '1' }) })).status,
    };
  });
  for (const [k, status] of Object.entries(bad)) expect(status, k).toBeGreaterThanOrEqual(400);
  // the form itself: nothing typed, Submit — still on the sign-in page
  await page.locator('#tabRegister').click();
  await page.locator('#authSubmit').click();
  await expect(page.locator('#auth')).toBeVisible();
});

test('pressing Sign up twice quickly makes one account and no errors', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/');
  await page.locator('#tabRegister').click();
  const name = uniqueName();
  await page.locator('#authUser').fill(name);
  await page.locator('#authPass').fill(PASSWORD);
  await page.locator('#authEmail').fill(`${name}@example.com`);
  const consent = page.locator('#authConsent');
  if (await consent.isVisible()) await consent.check();
  await page.locator('#authSubmit').dblclick();
  await expect(page.locator('#tutorial')).toBeVisible();
  // the same name again: taken
  const again = await page.evaluate(async ([u, p]) => (await fetch('/api/register', { method: 'POST', body: JSON.stringify({ username: u, password: p, email: `${u}2@example.com` }) })).status, [name, PASSWORD]);
  expect(again).toBeGreaterThanOrEqual(400);
  expect(errors).toEqual([]);
});

test('without signing in: the game shows the sign-in page and the API refuses', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#auth')).toBeVisible();
  const status = await page.evaluate(async () => ({
    me: (await fetch('/api/me')).status,
    study: (await fetch('/api/study')).status,
    admin: (await fetch('/api/admin/users')).status,
  }));
  for (const [k, s] of Object.entries(status)) expect(s, k).toBeGreaterThanOrEqual(401);
});

test('a broken saved sign-in (a token that means nothing) leads back to the sign-in page, not a crash', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/');
  await page.evaluate(() => localStorage.setItem('kb:token', 'not-a-real-token'));
  await page.reload();
  await expect(page.locator('#auth')).toBeVisible();
  expect(errors).toEqual([]);
});

test('a player who is not an admin cannot use the team\'s tools', async ({ page }) => {
  const { token } = await signedIn(page);
  const s = await page.evaluate(async (t) => ({
    users: (await fetch('/api/admin/users', { headers: { Authorization: `Bearer ${t}` } })).status,
    broadcast: (await fetch('/api/messages/broadcast', { method: 'POST', headers: { Authorization: `Bearer ${t}` }, body: JSON.stringify({ text: 'hi' }) })).status,
  }), token);
  expect(s.users).toBeGreaterThanOrEqual(401);
  expect(s.broadcast).toBeGreaterThanOrEqual(400);
});
