// 0.9.9.9.9.6 (round 7): what the end-to-end tests share — a fresh test player, signed in, the game at its menu.
import { expect, type Page } from '@playwright/test';

let n = 0;
/** a name nobody has: e2e + time + a counter (the test server's data file is thrown away after the run) */
export const uniqueName = () => `e2e${Date.now().toString(36).slice(-5)}${(n++).toString(36)}`;
export const PASSWORD = 'tea-kettle-42';

/** every error the page throws, collected; a test ends by checking there were none */
export function watchErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  return errors;
}

/** a new account made through the API (fast), the tutorial marked done, signed in on the page, at the menu */
export async function signedIn(page: Page, opts: { tutorial?: boolean; tours?: boolean } = {}) {
  await page.goto('/');
  const name = uniqueName();
  const r = await page.evaluate(async ([u, p]) => (await (await fetch('/api/register', { method: 'POST', body: JSON.stringify({ username: u, password: p, email: `${u}@example.com` }) })).json()) as { token: string }, [name, PASSWORD]);
  expect(r.token, 'registered').toBeTruthy();
  await page.evaluate(async ([t, tutorial, tours]) => {
    if (!tutorial) await fetch('/api/me/tutorial', { method: 'PUT', headers: { Authorization: `Bearer ${t}` } });
    localStorage.setItem('kb:token', t as string);
    localStorage.setItem('kb:seenVersion', 'x'); // (no What's new window)
    localStorage.setItem('kb:tasksNoticeOff', '1');
    localStorage.setItem('kb:3d', 'off'); // (the 2D arena: quicker, and the same everywhere)
    if (!tours) localStorage.setItem('kw:pageTours', JSON.stringify(['games', 'private', 'study', 'customize', 'quizzes', 'kana', 'daily', 'progress', 'history', 'grammar', 'inbox', 'dict']));
  }, [r.token, !!opts.tutorial, !!opts.tours] as const);
  await page.reload();
  if (!opts.tutorial) await expect(page.locator('#menu')).toBeVisible();
  await closeDialogs(page, 1500); // (the email window comes a moment after the menu)
  return { name, token: r.token };
}

/**
 * any window that opened by itself is closed — the daily tasks, and "Add / confirm your email" (an email typed at sign-up
 * stays pending until its code is entered, so the game asks for it once a session; the tests can't read the mail)
 */
export async function closeDialogs(page: Page, waitMs = 0) {
  if (waitMs) await page.waitForTimeout(waitMs);
  await page.evaluate(() => { for (const d of document.querySelectorAll('dialog[open]')) (d as HTMLDialogElement).close(); });
}

/** a menu page by its button (on a phone some are in More — the button is pressed straight from the page) */
export async function openPage(page: Page, button: string, screen: string) {
  await closeDialogs(page);
  await page.evaluate((id) => (document.getElementById(id) as HTMLElement).click(), button);
  await expect(page.locator(`#${screen}`)).toBeVisible();
}

/** the API with this player's token */
export async function api<T = unknown>(page: Page, token: string, method: string, url: string, body?: unknown): Promise<{ status: number; json: T }> {
  return page.evaluate(async ([t, m, u, b]) => {
    const r = await fetch(u as string, { method: m as string, headers: { Authorization: `Bearer ${t}` }, body: b === undefined ? undefined : JSON.stringify(b) });
    return { status: r.status, json: await r.json().catch(() => null) };
  }, [token, method, url, body] as const) as Promise<{ status: number; json: T }>;
}
