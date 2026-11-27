// 0.9.9.9.9.7 (round 2): Song lyrics — sing along and type the words (in romaji). The owner: "try with completely free
// music, as safe as possible". So: only songs in the public domain in Japan and in the US (their writers died long ago,
// and they were published before 1929), sung and played by the game itself — the melody from its notes, the voice from
// VOICEVOX (scripts/songs.mts makes public/songs/<id>.mp3). No recording or arrangement of anyone else's is used.
// The notes were checked against the scores in the songs' Wikipedia articles (a melody this old is free; the note data
// here is our own copy of it). The lyrics are the original ones — 春の小川 is sung today with words revised in 1942
// that are still protected: the 1912 original is used.
//
// A melody is written as LilyPond's relative notes (parseMelody): a note's octave is the one closest to the note
// before (' up, , down), a number is its length (4 a quarter, 8 an eighth, a dot half as long again), r a rest,
// ( … ) a slur (one syllable over several notes). Each line's `kana` gives one syllable for each sung note; ー holds the
// vowel before, and a two-mora syllable (こん, ぼう) is split over its note.

export interface SongLine { jp: string; kana: string; romaji: string; en: string; ru: string }
export interface Song {
  id: string;
  title: { jp: string; reading: string; romaji: string; en: string; ru: string };
  /** who wrote it and when — and why it is free to use */
  credit: string;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  /** quarter notes a minute; the time signature's beats per bar */
  tempo: number; beats: number;
  /** LilyPond: \relative <start> { melody } (and a transposition in semitones, if the source sits in another octave) */
  relative: string; melody: string; transpose?: number;
  lines: SongLine[];
}

export const SONGS: Song[] = [
  {
    id: 'haru-no-ogawa',
    title: { jp: '春の小川', reading: 'はるのおがわ', romaji: 'Haru no Ogawa', en: 'The Brook in Spring', ru: 'Весенний ручеёк' },
    credit: 'Lyrics Takano Tatsuyuki (d. 1947), music Okano Teiichi (d. 1941), 1912 - public domain; the original 1912 words',
    level: 'N4', tempo: 104, beats: 4, relative: "c'",
    melody: `e( g) a g | e g c c | a a g e | c d e r |
             e( g) a g | e g c c | a a g e | d e c r |
             d( e) d g | a a g a | c c b a | g g e r |
             e( g) a g | e g c c | a a g e | d e c r`,
    lines: [
      { jp: '{春|はる}の{小川|おがわ}は さらさら{流|なが}る', kana: 'は る の お が わ は さ ら さ ら な が る', romaji: 'haru no ogawa wa sarasara nagaru', en: 'The brook in spring flows on, babbling', ru: 'Весенний ручеёк журчит и бежит' },
      { jp: '{岸|きし}のすみれや れんげの{花|はな}に', kana: 'き し の す み れ や れ ん げ の は な に', romaji: 'kishi no sumire ya renge no hana ni', en: 'To the violets on its banks and the clover flowers', ru: 'Фиалкам на берегу и цветам клевера' },
      { jp: '{匂|にお}いめでたく {色|いろ}うつくしく', kana: 'に お い め で た く い ろ う つ く し く', romaji: 'nioi medetaku iro utsukushiku', en: 'So sweet in scent, so lovely in colour', ru: 'Так душисты и так красивы' },
      { jp: '{咲|さ}けよ{咲|さ}けよと ささやく{如|ごと}く', kana: 'さ け よ さ け よ と さ さ や く ご と く', romaji: 'sake yo sake yo to sasayaku gotoku', en: 'As if whispering: bloom, oh bloom', ru: 'Будто шепчет: «Цветите, цветите»' },
    ],
  },
  {
    id: 'natsu-wa-kinu',
    title: { jp: '夏は来ぬ', reading: 'なつはきぬ', romaji: 'Natsu wa Kinu', en: 'Summer Has Come', ru: 'Лето пришло' },
    credit: 'Lyrics Sasaki Nobutsuna (d. 1963), music Koyama Sakunosuke (d. 1927), 1896 - public domain',
    level: 'N2', tempo: 92, beats: 4,
    // (the source's first note sits an octave below the rest of its line — it starts from G5 here, and the whole song
    // is sung an octave lower)
    relative: "c'''", transpose: -12,
    melody: `g4 e8 f g4. g8 | a c g d' c a g r |
             a4 c8 a g4. g8 | a d, d g e c d r |
             c4 e g4. g8 | a g a c g4 r8 g | c4. e8 d4 d | c2. r4`,
    lines: [
      { jp: '{卯|う}の{花|はな}の {匂|にお}う{垣根|かきね}に', kana: 'う の は な の に お う か き ね に', romaji: 'unohana no niou kakine ni', en: 'By the hedge where the deutzia blossoms are fragrant', ru: 'У изгороди, где благоухают цветы унохана' },
      { jp: '{時鳥|ほととぎす} {早|はや}も{来|き}{鳴|な}きて', kana: 'ほ と と ぎ す は や も き な き て', romaji: 'hototogisu hayamo kinakite', en: 'The little cuckoo has come already, singing', ru: 'Кукушка уже прилетела и поёт' },
      { jp: '{忍音|しのびね}もらす {夏|なつ}は{来|き}ぬ', kana: 'し の び ね も ー ら ー す な つ ー は き ぬ', romaji: 'shinobine morasu natsu wa kinu', en: 'Letting out its first soft song - summer has come', ru: 'Робко подаёт голос — лето пришло' },
    ],
  },
  {
    id: 'chatsumi',
    title: { jp: '茶摘', reading: 'ちゃつみ', romaji: 'Chatsumi', en: 'Tea Picking', ru: 'Сбор чая' },
    credit: 'A Ministry of Education school song, 1912 (no named author) - public domain',
    level: 'N3', tempo: 104, beats: 4, relative: "c'",
    melody: `r4 d g a | b4. b8 b4 b | d4. d8 d4 b | a g a r4 |
             r4 b4 b d | b4. b8 b4 a | b4. b8 a4 g | e e d r4 |
             r4 d g a | b4. b8 b4 b | d4. d8 d4 b | a g a r4 |
             r4 d4 d b | a4. a8 g4 e | d g a4. b8 | g2. r4`,
    lines: [
      { jp: '{夏|なつ}も{近|ちか}づく {八十八夜|はちじゅうはちや}', kana: 'な つ も ち か づ く は ち じゅ う は ち や', romaji: 'natsu mo chikazuku hachijuu hachiya', en: 'Summer draws near - the eighty-eighth night of spring', ru: 'Близится лето — восемьдесят восьмая ночь весны' },
      { jp: '{野|の}にも{山|やま}にも {若葉|わかば}が{茂|しげ}る', kana: 'の に も や ま に も わ か ば が し げ る', romaji: 'no ni mo yama ni mo wakaba ga shigeru', en: 'In the fields and on the hills, young leaves grow thick', ru: 'И в полях, и в горах густеет молодая листва' },
      { jp: 'あれに{見|み}えるは {茶摘|ちゃつみ}じゃないか', kana: 'あ れ に み え る は ちゃ つ み じゃ な い か', romaji: 'are ni mieru wa chatsumi ja nai ka', en: 'Isn\'t that the tea picking we can see over there?', ru: 'Не сбор ли чая виднеется там?' },
      { jp: 'あかねだすきに {菅|すげ}の{笠|かさ}', kana: 'あ か ね だ す き に す げ の か さ', romaji: 'akane dasuki ni suge no kasa', en: 'Red sleeve-cords and hats of sedge', ru: 'Красные шнуры для рукавов и шляпы из осоки' },
    ],
  },
  {
    id: 'akatonbo',
    title: { jp: '赤とんぼ', reading: 'あかとんぼ', romaji: 'Akatonbo', en: 'Red Dragonfly', ru: 'Красная стрекоза' },
    credit: 'Lyrics Miki Rofū (d. 1964), music Yamada Kōsaku (d. 1965), 1921 / 1927 - public domain in Japan (since 2015-16) and the US (published before 1929)',
    level: 'N3', tempo: 66, beats: 3, relative: "c'",
    melody: `c8 f8 f4. g8 | a8 c8 f8 d8 c4 | d8 f,8 f4 g4 | a2 r4 |
             a8 d8 c4. d8 | f8 d8 c8 d8 c8 a8 | c8 a8 f8 a8 g8 f8 | f2 r4`,
    lines: [
      { jp: '{夕焼|ゆうや}け{小焼|こや}けの {赤|あか}とんぼ', kana: 'ゆ う や け こ や け ー の あ か と ん ぼ', romaji: 'yuuyake koyake no akatonbo', en: 'The red dragonfly in the glow of sunset', ru: 'Красная стрекоза в закатном зареве' },
      { jp: '{負|お}われて{見|み}たのは いつの{日|ひ}か', kana: 'お わ れ て み た の ー は ー い つ の ー ひ ー か', romaji: 'owarete mita no wa itsu no hi ka', en: 'When was the day I saw it, carried on someone\'s back?', ru: 'Когда это было — я видел её, сидя у кого-то на спине?' },
    ],
  },
  {
    id: 'yuki',
    title: { jp: '雪', reading: 'ゆき', romaji: 'Yuki', en: 'Snow', ru: 'Снег' },
    credit: 'A Ministry of Education school song, 1911 (no named author) - public domain',
    level: 'N4', tempo: 92, beats: 2, relative: "c''",
    melody: `c8. d16 c8. d16 | c4 a8 r | a8. bes16 a8. bes16 | a4 f8 r |
             a4 f8 g | a4 f8 g | a8. bes16 c8 c | g8. a16 g8 r |
             c8. d16 c8. d16 | c8 c a a | a8. bes16 a8. bes16 | a8 a f r |
             d'4 c8 a | c c a f | a a g8. g16 | f4 r`,
    lines: [
      { jp: '{雪|ゆき}やこんこ {霰|あられ}やこんこ', kana: 'ゆ ー き や こん こ あ ら れ や こん こ', romaji: 'yuki ya konko arare ya konko', en: 'Snow, come down! Hail, come down!', ru: 'Снег, падай! Град, падай!' },
      { jp: '{降|ふ}っては{降|ふ}っては ずんずん{積|つ}もる', kana: 'ふっ て は ふっ て は ず ん ず ん つ も る', romaji: 'futte wa futte wa zunzun tsumoru', en: 'It falls and falls and piles up higher and higher', ru: 'Падает и падает, всё выше сугробы' },
      { jp: '{山|やま}も{野原|のはら}も {綿帽子|わたぼうし}かぶり', kana: 'や ー ま も の は ら も わ た ぼう し か ぶ り', romaji: 'yama mo nohara mo watabooshi kaburi', en: 'Hills and fields wear caps of cotton', ru: 'Горы и поля надели ватные шапки' },
      { jp: '{枯木|かれき}{残|のこ}らず {花|はな}が{咲|さ}く', kana: 'か れ き の こ ら ず は な が さ く', romaji: 'kareki nokorazu hana ga saku', en: 'And every bare tree blooms with flowers', ru: 'И на каждом сухом дереве распускаются цветы' },
    ],
  },
];

export interface Note { midi: number | null; beats: number; slur: boolean }
const STEP: Record<string, number> = { c: 0, d: 2, e: 4, f: 5, g: 7, a: 9, b: 11 };
const LETTERS = 'cdefgab';
const marksOf = (m: string) => (m.match(/'/g)?.length ?? 0) - (m.match(/,/g)?.length ?? 0);
const accOf = (name: string) => (name.endsWith('is') ? 1 : name.endsWith('es') || name.endsWith('s') && name.length === 2 ? -1 : 0);
/**
 * LilyPond's relative mode: a note goes to the octave that puts its letter closest to the letter before (at most a
 * fourth away — c to g is down a fourth, not up a fifth), then each ' or , moves it an octave. (c = C3, c' = C4 = 60.)
 * A length carries over until a new one is written.
 */
export function parseMelody(relative: string, melody: string, transpose = 0): Note[] {
  const start = relative.match(/^([a-g])(?:is|es)?([',]*)$/)!;
  let prev = (3 + marksOf(start[2])) * 7 + LETTERS.indexOf(start[1]); // the previous note, in letter steps from C0
  let beats = 1;
  let inSlur = false, slurStarted = false;
  const out: Note[] = [];
  const re = /([a-g](?:is|es|s)?|r)([',]*)(\d+)?(\.?)|(\()|(\))/g;
  for (let m: RegExpExecArray | null; (m = re.exec(melody));) {
    if (m[5]) { inSlur = true; slurStarted = false; continue; }
    if (m[6]) { inSlur = false; continue; }
    if (m[3]) beats = (4 / Number(m[3])) * (m[4] ? 1.5 : 1);
    if (m[1] === 'r') { out.push({ midi: null, beats, slur: false }); continue; }
    const li = LETTERS.indexOf(m[1][0]);
    let d = (li - (prev % 7) + 7) % 7;
    if (d > 3) d -= 7;
    const diatonic = prev + d + 7 * marksOf(m[2]);
    prev = diatonic;
    const octave = Math.floor(diatonic / 7);
    const midi = 12 * (octave + 1) + STEP[m[1][0]] + accOf(m[1]);
    out.push({ midi: midi + transpose, beats, slur: inSlur && slurStarted });
    if (inSlur) slurStarted = true;
  }
  return out;
}
/** LilyPond puts "(" after the slur's first note (e( g)): the notes after it, up to ")", hold that syllable */
export function melodyNotes(song: Song): Note[] {
  // rewrite "x( y z)" as "(x y z)" so the parser sees the slur open before its first note
  const m = song.melody.replace(/([a-g](?:is|es)?[',]*\d*\.?)\(/g, '($1');
  return parseMelody(song.relative, m, song.transpose ?? 0);
}

export interface TimedNote extends Note { at: number; dur: number; syllable: string | null }
export interface TimedLine extends SongLine { start: number; end: number; notes: TimedNote[] }
/** the song in time: each line's notes with their syllables, when it starts and ends (seconds, from a 1 s lead-in) */
export function songTimeline(song: Song, lead = 1): TimedLine[] {
  const notes = melodyNotes(song);
  const spb = 60 / song.tempo; // seconds a quarter note
  let t = lead;
  let i = 0;
  const lines: TimedLine[] = [];
  for (const line of song.lines) {
    const syl = line.kana.split(/\s+/);
    const timed: TimedNote[] = [];
    let k = 0;
    // rests before the line's first sung note belong to the gap before it
    while (i < notes.length && notes[i].midi === null) { t += notes[i].beats * spb; i++; }
    const start = t;
    while (i < notes.length && k < syl.length) {
      const n = notes[i];
      const dur = n.beats * spb;
      if (n.midi === null) timed.push({ ...n, at: t, dur, syllable: null });
      else if (n.slur) timed.push({ ...n, at: t, dur, syllable: null });
      else timed.push({ ...n, at: t, dur, syllable: syl[k++] });
      t += dur; i++;
    }
    // the slur notes that hold the line's last syllable
    while (i < notes.length && notes[i].slur) { const n = notes[i]; timed.push({ ...n, at: t, dur: n.beats * spb, syllable: null }); t += n.beats * spb; i++; }
    lines.push({ ...line, start, end: t, notes: timed });
  }
  return lines;
}
/** the song's length in seconds (with the lead-in and the last rests) */
export function songLength(song: Song, lead = 1): number {
  return lead + melodyNotes(song).reduce((s, n) => s + n.beats * (60 / song.tempo), 0) + 1.5;
}
/** the words to type in a line (the romaji, split at spaces) */
export const lineWords = (l: SongLine) => l.romaji.split(/\s+/).filter(Boolean);
export const songById = (id: string) => SONGS.find((s) => s.id === id) ?? null;

/**
 * romaji typed in any common way counts: shi / si, tsu / tu, chi / ti, fu / hu, ji / zi, long vowels written or not
 * (yuuyake / yuyake, booshi / boushi), and the particle は as wa or ha
 */
export function canon(s: string): string {
  return s.toLowerCase().replace(/[^a-z]/g, '')
    .replace(/sh/g, 'sy').replace(/ch/g, 'ty').replace(/ts/g, 't').replace(/j/g, 'zy').replace(/f/g, 'h')
    .replace(/si/g, 'syi').replace(/ti/g, 'tyi').replace(/zi/g, 'zyi').replace(/yy/g, 'y')
    .replace(/ou/g, 'oo').replace(/([aiueo])\1/g, '$1');
}
export const sameWord = (typed: string, word: string) => canon(typed) === canon(word) || (word === 'wa' && canon(typed) === 'ha');
/** is what's typed so far the start of the word (any spelling)? */
export const startsWord = (typed: string, word: string) => canon(word).startsWith(canon(typed)) || (word === 'wa' && 'ha'.startsWith(typed.toLowerCase()));

