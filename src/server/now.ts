// "Now" for the study services (0.9.9.4). Normally the real time; while the server replays study done
// offline (the app's outbox, sent with an `X-KW-At` header) it is the moment the player really did it —
// so cards, streaks and daily-challenge times come out as if they had been online. The HTTP layer sets
// the provider (AsyncLocalStorage, per request); the offline engine in the browser just uses Date.now.
let provider: () => number = () => Date.now();
export const now = () => provider();
export function setNowProvider(p: () => number) { provider = p; }
