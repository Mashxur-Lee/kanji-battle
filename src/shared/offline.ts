// 0.9.9.9.7.1: the calls the app answers by itself while offline and sends to the server later (with X-KW-At, the
// moment they were really made) — one list for both sides: the app decides what works offline from it, and the
// server honours X-KW-At only for these (before, any call could set the server's clock up to a week back).
// The Daily challenge isn't here any more: it is a race against everyone, so it is played online, on the server's
// clock (played offline, the app knew the words and set the times itself).
export const OFFLINE_ROUTES: ReadonlyArray<readonly [string, RegExp]> = [
  ['GET', /^\/api\/(me|study|study\/queue|study\/deck|study\/search|study\/quiz|progress|matches|matches\/[\w-]+)$/],
  // 0.9.9.7.2: ★ stars and the Onomatopoeia number work offline too (saved, then sent when you're back online)
  ['PUT', /^\/api\/(me\/(flame|staff|background|border|badges|kana|tutorial)|study\/levels|study\/daily-levels|study\/daily-new|study\/star|study\/ono-daily|kana)$/], // (0.9.9.9.5: + the Kana section)
  ['POST', /^\/api\/study\/(review|undo|deck\/remove|deck\/add|custom|task)$/],
];
const pathOf = (url: string) => url.split('?')[0];
export const handles = (method: string, url: string) => OFFLINE_ROUTES.some(([m, re]) => m === method && re.test(pathOf(url)));
/** the Daily challenge's moves — never replayed (an older app may still have some waiting from offline) */
export const DAILY_PLAY = /^\/api\/daily\/(start|answer|finish)$/;
