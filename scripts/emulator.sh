#!/usr/bin/env bash
# 0.9.9.9.9.7: the Android app on an emulator, for checking what only the real app does (its Back button, the WebView,
# notifications' links). The SDK, a Java 17 and the virtual phone (Android 16, Pixel 7) live in $ANDROID_TEST
# (default D:/AndroidTest; set up once by hand, see below) — nothing in this repo.
#
#   scripts/emulator.sh start            start the phone (no window) and wait until it has booted
#   scripts/emulator.sh install [apk]    install an APK (default: the newest release from GitHub)
#   scripts/emulator.sh open             open the game
#   scripts/emulator.sh shot name        a screenshot → $ANDROID_TEST/shots/name.png
#   scripts/emulator.sh tap x y | back   touch the screen (real pixels, 1080 × 2400) / press Back
#   scripts/emulator.sh top              which app is on screen (the game, or the launcher if Back left it)
#   scripts/emulator.sh stop
#
# One-time setup (what was done on the owner's PC): a portable Temurin JDK 17 in $ANDROID_TEST/jdk; Android's
# command-line tools in $ANDROID_TEST/sdk/cmdline-tools/latest; then `android sdk install platform-tools emulator
# system-images/android-36/google_apis/x86_64` and `avdmanager create avd -n kw36 -d pixel_7` (ANDROID_AVD_HOME =
# $ANDROID_TEST/avd). Needs Windows' hypervisor (Hyper-V / Windows Hypervisor Platform), already on there.
set -e
T="${ANDROID_TEST:-/d/AndroidTest}"
export ANDROID_HOME="$T/sdk" ANDROID_SDK_ROOT="$T/sdk" ANDROID_AVD_HOME="$T/avd" JAVA_HOME="$T/jdk"
ADB="$T/sdk/platform-tools/adb.exe"
case "$1" in
  start)
    ("$T/sdk/emulator/emulator.exe" -avd kw36 -no-window -no-audio -no-snapshot -gpu swiftshader_indirect -no-boot-anim > "$T/emu.log" 2>&1 &)
    "$ADB" wait-for-device
    until [ "$("$ADB" shell getprop sys.boot_completed 2>/dev/null | tr -d '\r')" = "1" ]; do sleep 3; done
    echo booted;;
  install)
    apk="$2"
    if [ -z "$apk" ]; then apk="$T/kw.apk"; gh release download -R Mashxur-Lee/kanji-battle -p KanjiWizards.apk -O "$apk" --clobber; fi
    "$ADB" install -r "$apk";;
  open) "$ADB" shell am start -n com.kanjiwizards.app/.MainActivity;;
  shot) mkdir -p "$T/shots"; "$ADB" exec-out screencap -p > "$T/shots/$2.png"; echo "$T/shots/$2.png";;
  tap) "$ADB" shell input tap "$2" "$3";;
  back) "$ADB" shell input keyevent 4;;
  top) "$ADB" shell dumpsys activity activities | grep -m1 "topResumedActivity" | sed 's/.*{//; s/ t[0-9].*//';;
  stop) "$ADB" emu kill;;
  *) sed -n '2,20p' "$0";;
esac
