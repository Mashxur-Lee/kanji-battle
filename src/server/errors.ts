// Server-side errors go to the console and (once the Inbox is wired up in index.ts) to the admin's Inbox.
let sink: ((message: string, details: string) => void) | null = null;
export function onServerError(fn: (message: string, details: string) => void) { sink = fn; }
export function reportServerError(where: string, e: unknown) {
  console.error(where, e);
  const err = e instanceof Error ? e : new Error(String(e));
  try { sink?.(`[server] ${where}: ${err.message}`, err.stack ?? ''); } catch { /* never throw from here */ }
}
