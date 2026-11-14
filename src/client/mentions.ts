/**
 * 0.9.9.9.6.3: @mentions in the lobby's chat and in Messages. "@admin" is drawn as a name you can tap: it opens
 * that player's profile card (with Add friend when you aren't friends yet — the card already knows). A line
 * that mentions you is marked for you.
 *
 * A mention is a login (3–32 letters, digits, _ . -) or the name a player shows in this lobby or your friends
 * list. Names we've seen carry the player's id; a login we haven't seen is looked up when tapped.
 */

/** "@name" not glued to a word before it (so an e-mail address is no mention); a trailing . or - is the sentence's */
const MENTION = /(^|[^\w@.-])@([A-Za-z0-9_](?:[A-Za-z0-9_.-]{0,30}[A-Za-z0-9_])?)/g;

const known = new Map<string, string>(); // lower-cased login or shown name → player id
let self: { id: string; names: string[] } = { id: '', names: [] };

/** who you are: your login and the name you show */
export function setMentionSelf(id: string, ...names: Array<string | null | undefined>) {
  self = { id, names: names.filter((n): n is string => !!n).map((n) => n.toLowerCase()) };
}
/** a player we've met (chat, lobby, friends): their name now leads straight to them */
export function knowPlayer(id: string, ...names: Array<string | null | undefined>) {
  if (!id) return;
  for (const n of names) if (n && !/\s/.test(n) && !/\(AI /.test(n)) known.set(n.toLowerCase(), id);
}

export function mentionsIn(text: string): string[] {
  return [...text.matchAll(MENTION)].map((m) => m[2]);
}
export const isMe = (name: string) => self.names.includes(name.toLowerCase()) || (!!self.id && known.get(name.toLowerCase()) === self.id);
export const mentionsMe = (text: string) => mentionsIn(text).some(isMe);

/**
 * The text as nodes: plain text stays text (never HTML), each mention becomes a tappable span. main.ts opens the
 * card for [data-profile] (an id we know) and for [data-mention] (a login it looks up first).
 */
export function withMentions(text: string): DocumentFragment {
  const frag = document.createDocumentFragment();
  let at = 0;
  for (const m of text.matchAll(MENTION)) {
    const start = m.index! + m[1].length;
    if (start > at) frag.append(text.slice(at, start));
    const name = m[2];
    const el = document.createElement('span');
    el.className = 'mention' + (isMe(name) ? ' me' : '');
    el.textContent = '@' + name;
    const id = known.get(name.toLowerCase());
    if (id) el.dataset.profile = id;
    else el.dataset.mention = name;
    el.dataset.name = name;
    el.setAttribute('role', 'button');
    el.tabIndex = 0;
    frag.append(el);
    at = start + 1 + name.length;
  }
  if (at < text.length) frag.append(text.slice(at));
  return frag;
}
