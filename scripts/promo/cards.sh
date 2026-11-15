#!/bin/bash
# cards.sh SHOTS OUTDIR
S=$1; O=$2; mkdir -p $O; cd "$(dirname "$0")"
c() { python3 card.py "$O/$1.webp" "$S/still-$2.png" "$3" "$4" "$5" ${6:+"$S/still-$6.png"}; }
c duel battle2d 戦 "Duel in real time" "Read the kanji, type its reading, and your wizard casts it" phone-battle
c arena3d battle3d 炎 "A living 3D arena" "Your staff in your hand, spells in the air, combos and crits"
c writing writing 書 "Write it by hand" "Handwriting recognition checks every stroke you draw"
c boss boss 竜 "Boss Elimination" "Up to four wizards, friends or AI, against the Black Dragon"
c deck deck 札 "Deck Duel" "Draft a hand, play your cards, cast their kanji"
c rapid rapid 速 "Rapid" "Short words, quick answers, big combos"
c study study 学 "Study that sticks" "Spaced-repetition flashcards from N5 to N1, with stroke order" phone-study
c kana kana 仮 "Kana from zero" "Hiragana and katakana charts, practice and combinations"
c daily daily 日 "Daily challenge leagues" "Ten words a day; pass your league to move up a level"
c progress progress 進 "See your progress" "What you know, the reviews ahead, achievements and seasons"
c customize customize 杖 "Make it yours" "Characters, staffs, flames, poses, frames and arenas"
c friends messages 友 "Play with friends" "Messages, groups, invites, reactions and @mentions" phone-messages
c dict dict 辞 "A full dictionary" "Japanese, English and Russian, open from any screen"
c menu menu 門 "One menu for everything" "Online, private rooms, daily, study, quizzes and kana" phone-menu
ls -la $O | awk '{s+=$5} END {print s/1024 " KB total"}'
