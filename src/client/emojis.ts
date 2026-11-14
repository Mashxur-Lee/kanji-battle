// 0.9.9.9.6.4: emoji — many more than before, in categories (like Telegram's panel), the ones you use most first.
// One picker for Messages, the reactions and a room's chat.
import { tr } from './i18n';

const CATS: Array<{ id: string; name: string; list: string }> = [
  { id: 'smileys', name: 'Smileys', list: '😀 😃 😄 😁 😆 😅 🤣 😂 🙂 🙃 🫠 😉 😊 😇 🥰 😍 🤩 😘 😗 ☺️ 😚 😙 🥲 😋 😛 😜 🤪 😝 🤑 🤗 🤭 🫢 🫣 🤫 🤔 🫡 🤐 🤨 😐 😑 😶 🫥 😏 😒 🙄 😬 😮‍💨 🤥 😌 😔 😪 🤤 😴 😷 🤒 🤕 🤢 🤮 🤧 🥵 🥶 🥴 😵 😵‍💫 🤯 🤠 🥳 🥸 😎 🤓 🧐 😕 🫤 😟 🙁 ☹️ 😮 😯 😲 😳 🥺 🥹 😦 😧 😨 😰 😥 😢 😭 😱 😖 😣 😞 😓 😩 😫 🥱 😤 😡 😠 🤬 😈 👿 💀 ☠️ 💩 🤡 👹 👺 👻 👽 👾 🤖 😺 😸 😹 😻 😼 😽 🙀 😿 😾' },
  { id: 'people', name: 'People', list: '👋 🤚 🖐️ ✋ 🖖 🫱 🫲 👌 🤌 🤏 ✌️ 🤞 🫰 🤟 🤘 🤙 👈 👉 👆 🖕 👇 ☝️ 🫵 👍 👎 ✊ 👊 🤛 🤜 👏 🙌 🫶 👐 🤲 🤝 🙏 ✍️ 💅 🤳 💪 🦾 🧠 🫀 👀 👁️ 👅 👄 🫦 👶 🧒 👦 👧 🧑 👱 👨 🧔 👩 🧓 👴 👵 🙍 🙎 🙅 🙆 💁 🙋 🧏 🙇 🤦 🤷 🧑‍🎓 🧑‍🏫 🧑‍💻 🧑‍🎨 🧑‍🚀 🥷 🧙 🧚 🧛 🧜 🧝 🧞 🧟 💆 💇 🚶 🏃 💃 🕺 🧘 🛀 🛌 👭 👫 👬 💏 💑 👪' },
  { id: 'nature', name: 'Animals & nature', list: '🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐻‍❄️ 🐨 🐯 🦁 🐮 🐷 🐸 🐵 🙈 🙉 🙊 🐔 🐧 🐦 🐤 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🪱 🐛 🦋 🐌 🐞 🐜 🪲 🕷️ 🦂 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦞 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🐘 🦛 🦏 🐪 🦒 🦘 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🦙 🐐 🦌 🐕 🐩 🐈 🐓 🦃 🦚 🦜 🦢 🦩 🕊️ 🐇 🦝 🦨 🦡 🦫 🦦 🦥 🐁 🐀 🐿️ 🦔 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🪵 🌱 🌿 ☘️ 🍀 🎍 🎋 🍃 🍂 🍁 🍄 🐚 🪨 🌾 💐 🌷 🌹 🥀 🌺 🌸 🌼 🌻 🌞 🌝 🌛 🌜 🌚 🌕 🌙 🌎 🪐 💫 ⭐ 🌟 ✨ ⚡ ☄️ 💥 🔥 🌪️ 🌈 ☀️ 🌤️ ⛅ 🌥️ ☁️ 🌧️ ⛈️ 🌩️ 🌨️ ❄️ ☃️ ⛄ 🌬️ 💨 💧 💦 ☔ 🌊 🌫️' },
  { id: 'food', name: 'Food & drink', list: '🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🫐 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🍆 🥑 🥦 🥬 🥒 🌶️ 🫑 🌽 🥕 🫒 🧄 🧅 🥔 🍠 🥐 🥯 🍞 🥖 🥨 🧀 🥚 🍳 🧈 🥞 🧇 🥓 🥩 🍗 🍖 🌭 🍔 🍟 🍕 🫓 🥪 🥙 🧆 🌮 🌯 🫔 🥗 🥘 🫕 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🦪 🍤 🍙 🍚 🍘 🍥 🥠 🥮 🍢 🍡 🍧 🍨 🍦 🥧 🧁 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🌰 🥜 🍯 🥛 🍼 🫖 ☕ 🍵 🧃 🥤 🧋 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🧉 🍾 🧊 🥄 🍴 🍽️ 🥢' },
  { id: 'activity', name: 'Activities', list: '⚽ 🏀 🏈 ⚾ 🥎 🎾 🏐 🏉 🥏 🎱 🪀 🏓 🏸 🏒 🏑 🥍 🏏 🪃 🥅 ⛳ 🪁 🏹 🎣 🤿 🥊 🥋 🎽 🛹 🛼 🛷 ⛸️ 🥌 🎿 ⛷️ 🏂 🪂 🏋️ 🤼 🤸 ⛹️ 🤺 🤾 🏌️ 🏇 🧘 🏄 🏊 🤽 🚣 🧗 🚵 🚴 🏆 🥇 🥈 🥉 🏅 🎖️ 🏵️ 🎗️ 🎫 🎟️ 🎪 🤹 🎭 🩰 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🪘 🎷 🎺 🪗 🎸 🪕 🎻 🎲 ♟️ 🎯 🎳 🎮 🎰 🧩 🎉 🎊 🎈 🎁 🎀 🪄 🎏 🎐 🎑 🧧 🏮 🎎' },
  { id: 'travel', name: 'Travel & places', list: '🚗 🚕 🚙 🚌 🚎 🏎️ 🚓 🚑 🚒 🚐 🛻 🚚 🚛 🚜 🛵 🏍️ 🛺 🚲 🛴 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 ✈️ 🛫 🛬 🛩️ 💺 🛰️ 🚀 🛸 🚁 🛶 ⛵ 🚤 🛥️ 🛳️ ⛴️ 🚢 ⚓ 🗼 🏯 🏰 🗻 🌋 🗾 🏔️ ⛰️ 🏕️ 🏖️ 🏜️ 🏝️ 🏞️ 🏟️ 🏛️ 🏗️ 🏘️ 🏚️ 🏠 🏡 🏢 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 ⛪ 🕌 🛕 🕍 ⛩️ 🕋 ⛲ ⛺ 🌁 🌃 🏙️ 🌄 🌅 🌆 🌇 🌉 🎠 🎡 🎢 🗽 🗿 🎌' },
  { id: 'objects', name: 'Objects', list: '⌚ 📱 💻 ⌨️ 🖥️ 🖨️ 🖱️ 💽 💾 💿 📷 📸 📹 🎥 📞 ☎️ 📺 📻 🎙️ ⏰ ⏳ ⌛ 📡 🔋 🔌 💡 🔦 🕯️ 🧯 💸 💵 💰 💳 💎 ⚖️ 🧰 🔧 🔨 ⚒️ 🛠️ ⛏️ 🔩 ⚙️ 🧲 💣 🧨 🪓 🔪 🗡️ ⚔️ 🛡️ 🔮 📿 🧿 💈 🔭 🔬 💊 💉 🩹 🧬 🦠 🧪 🌡️ 🧹 🧺 🧻 🚽 🛁 🔑 🗝️ 🚪 🪑 🛋️ 🛏️ 🧸 🖼️ 🛍️ 🛒 🎁 ✉️ 📩 📨 📧 💌 📦 🏷️ 📪 📬 📮 📜 📃 📄 📑 📊 📈 📉 🗒️ 📆 📅 🗓️ 📇 🗃️ 📋 📁 📂 🗂️ 📰 📓 📔 📒 📕 📗 📘 📙 📚 📖 🔖 🔗 📎 🖇️ 📐 📏 📌 📍 ✂️ 🖊️ 🖋️ ✒️ 🖌️ 🖍️ 📝 ✏️ 🔍 🔎 🔏 🔐 🔒 🔓' },
  { id: 'symbols', name: 'Symbols', list: '❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 💔 ❤️‍🔥 ❤️‍🩹 ❣️ 💕 💞 💓 💗 💖 💘 💝 💟 ☮️ ☯️ 🔯 ☸️ ✡️ 🕉️ ☦️ ⛎ ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ 🆔 ⚛️ 🉑 ☢️ ☣️ 📴 📳 🈶 🈚 🈸 🈺 🈷️ ✴️ 🆚 💮 🉐 ㊙️ ㊗️ 🈴 🈵 🈹 🈲 🅰️ 🅱️ 🆎 🆑 🅾️ 🆘 ❌ ⭕ 🛑 ⛔ 📛 🚫 💯 💢 ♨️ 🚷 🚯 🚳 🚱 🔞 📵 🚭 ❗ ❕ ❓ ❔ ‼️ ⁉️ 🔅 🔆 〽️ ⚠️ 🚸 🔱 ⚜️ 🔰 ♻️ ✅ 🈯 💹 ❇️ ✳️ ❎ 🌐 💠 Ⓜ️ 🌀 💤 🏧 🚾 ♿ 🅿️ 🛗 🈳 🈂️ 🛂 🛃 🛄 🛅 🎦 📶 🈁 🔣 ℹ️ 🔤 🔡 🔠 🆖 🆗 🆙 🆒 🆕 🆓 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 #️⃣ *️⃣ ▶️ ⏸️ ⏯️ ⏹️ ⏺️ ⏭️ ⏮️ ⏩ ⏪ 🔀 🔁 🔂 ◀️ 🔼 🔽 ➡️ ⬅️ ⬆️ ⬇️ ↗️ ↘️ ↙️ ↖️ ↕️ ↔️ ↪️ ↩️ 🔄 🎵 🎶 ➕ ➖ ➗ ✖️ ♾️ 💲 💱 ™️ ©️ ®️ 〰️ ➰ ➿ 🔚 🔙 🔛 🔝 🔜 ✔️ ☑️ 🔘 🔴 🟠 🟡 🟢 🔵 🟣 ⚫ ⚪ 🟤 🔺 🔻 🔸 🔹 🔶 🔷 🔳 🔲 ▪️ ▫️ ◾ ◽ ◼️ ◻️ 🟥 🟧 🟨 🟩 🟦 🟪 ⬛ ⬜ 🟫 🔈 🔇 🔉 🔊 🔔 🔕 📣 📢 💬 💭 🗯️ ♠️ ♣️ ♥️ ♦️ 🃏 🎴 🀄' },
];
const SPLIT = (list: string) => list.split(' ').filter(Boolean);
export const EMOJI_CATS = CATS.map((c) => ({ id: c.id, name: c.name, emojis: SPLIT(c.list) }));
/** the quick reactions under a message (Telegram's row) */
export const QUICK_REACTIONS = ['👍', '❤️', '😂', '🔥', '😮', '😢', '🙏', '🎉'];

const RECENT_KEY = 'kb:emoji-recent';
export function recentEmoji(): string[] {
  try { const r = JSON.parse(localStorage.getItem(RECENT_KEY) ?? '[]'); return Array.isArray(r) ? r.filter((x) => typeof x === 'string').slice(0, 32) : []; } catch { return []; }
}
export function useEmoji(e: string) {
  try { localStorage.setItem(RECENT_KEY, JSON.stringify([e, ...recentEmoji().filter((x) => x !== e)].slice(0, 32))); } catch { /* full */ }
}

function h(tag: string, cls = '', text?: string): HTMLElement {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

/**
 * The panel: tabs on top (recent, then the categories), a scrolling grid. `onPick` gets each emoji tapped (the panel
 * stays open, like Telegram's — the caller closes it).
 */
export function emojiPanel(onPick: (e: string) => void): HTMLElement {
  const box = h('div', 'emo-panel');
  const tabs = h('div', 'emo-tabs');
  tabs.setAttribute('role', 'tablist');
  const grid = h('div', 'emo-grid');
  const sections: Array<{ id: string; el: HTMLElement }> = [];
  const all = [{ id: 'recent', name: 'Recent', emojis: recentEmoji() }, ...EMOJI_CATS].filter((c) => c.emojis.length);
  const icon: Record<string, string> = { recent: '🕘', smileys: '😀', people: '👋', nature: '🌸', food: '🍜', activity: '🎮', travel: '⛩️', objects: '📚', symbols: '❤️' };
  for (const c of all) {
    const t = h('button', 'emo-tab', icon[c.id] ?? c.emojis[0]) as HTMLButtonElement;
    t.type = 'button'; t.title = tr(c.name); t.setAttribute('aria-label', tr(c.name)); t.dataset.cat = c.id;
    t.onclick = (e) => { e.stopPropagation(); const s = sections.find((x) => x.id === c.id); if (s) grid.scrollTo({ top: s.el.offsetTop - grid.offsetTop - 2, behavior: 'smooth' }); };
    tabs.append(t);
    const sec = h('div', 'emo-sec');
    sec.append(h('div', 'emo-sec-h', tr(c.name)));
    const cells = h('div', 'emo-cells');
    for (const e of c.emojis) {
      const b = h('button', 'emo', e) as HTMLButtonElement;
      b.type = 'button';
      b.onclick = (ev) => { ev.stopPropagation(); useEmoji(e); onPick(e); };
      cells.append(b);
    }
    sec.append(cells);
    grid.append(sec);
    sections.push({ id: c.id, el: sec });
  }
  // the tab of what's in view lights up
  const mark = () => {
    const y = grid.scrollTop + 8;
    let on = sections[0]?.id;
    for (const s of sections) if (s.el.offsetTop - grid.offsetTop <= y) on = s.id;
    for (const t of tabs.children) (t as HTMLElement).classList.toggle('on', (t as HTMLElement).dataset.cat === on);
  };
  grid.addEventListener('scroll', mark, { passive: true });
  requestAnimationFrame(mark);
  box.append(tabs, grid);
  return box;
}

/** put an emoji into a text box where the caret is */
export function insertAtCaret(i: HTMLInputElement | HTMLTextAreaElement, text: string) {
  const a = i.selectionStart ?? i.value.length, z = i.selectionEnd ?? a;
  const max = i.maxLength > 0 ? i.maxLength : Infinity;
  if (i.value.length - (z - a) + text.length > max) return;
  i.value = i.value.slice(0, a) + text + i.value.slice(z);
  i.selectionStart = i.selectionEnd = a + text.length;
  i.dispatchEvent(new Event('input', { bubbles: true }));
}
