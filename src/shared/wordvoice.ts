// 0.9.9.9.9.7 (round 4): the battle words said in the voice of the character you play as. The clips live on their own
// site (they are too many for the game's download): one folder per character, a clip per spoken word, named as the chess
// lines are (lineHash of the kana). scripts/wordvoices.mts makes them; src/client/wordvoice.ts plays them.
import { lineHash } from './chesslines';

/** where the clips are served (GitHub Pages of the kanji-wizards-voices repository) */
export const WORD_VOICE_BASE = 'https://mashxur-lee.github.io/kanji-wizards-voices/';
/** the site's origin (the page's Content-Security-Policy lets audio and its fetch come from it) */
export const WORD_VOICE_ORIGIN = 'https://mashxur-lee.github.io';

/** what is said for a word: its kana reading — or, at the kana levels (a romaji answer), the kana itself */
export const spokenWord = (kanji: string, reading: string) => (/[a-z]/i.test(reading) ? kanji : reading);
/** a character's clip of what is said */
export const wordClipUrl = (character: string, said: string) => `${WORD_VOICE_BASE}words/${character}/${lineHash(said)}.mp3`;
