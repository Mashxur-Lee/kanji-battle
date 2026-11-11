package com.kanjiwizards.app;

import android.Manifest;
import android.annotation.SuppressLint;
import android.app.NotificationManager;
import android.content.pm.PackageManager;
import android.os.Build;
import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.view.View;
import android.view.WindowInsets;
import android.widget.FrameLayout;
import android.window.OnBackInvokedDispatcher;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.util.Locale;

/**
 * Kanji Wizards for Android (0.9.9.4): the game's website in a full-screen WebView. It is always the newest
 * version, and the website's service worker keeps a copy, so the app opens without internet too (after
 * signing in once): Study spells, the quiz, reading passages, the daily challenge, Customize, Progress and
 * match history work offline and sync later. Adds what a WebView lacks: picking a profile picture, spoken
 * words (Android's text-to-speech) and a friendly page when there's no connection on the first start.
 */
public class MainActivity extends Activity {
    private static final int PICK_FILE = 1;
    private static final int ASK_NOTIFY = 2;
    private static final String SERVER = BuildConfig.SERVER;

    private WebView web;
    private ValueCallback<Uri[]> filePick;
    private TextToSpeech tts;
    private boolean ttsReady;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        web = new WebView(this);
        web.setBackgroundColor(0xFF0B0920);
        // 0.9.9.9.1: targets Android 16 (Play Protect blocks apps built for a much older Android as "unsafe").
        // From Android 15 the window is drawn edge to edge, under the status and navigation bars, and the
        // keyboard no longer resizes it — the page is padded by the bars and the keyboard instead.
        FrameLayout root = new FrameLayout(this);
        root.setBackgroundColor(0xFF0B0920);
        root.addView(web, new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        setContentView(root);
        if (Build.VERSION.SDK_INT >= 35) {
            root.setOnApplyWindowInsetsListener((v, insets) -> {
                android.graphics.Insets b = insets.getInsets(WindowInsets.Type.systemBars() | WindowInsets.Type.displayCutout() | WindowInsets.Type.ime());
                v.setPadding(b.left, b.top, b.right, b.bottom);
                return WindowInsets.CONSUMED;
            });
        }
        // Android 16 no longer calls onBackPressed (predictive back): the same handling through the new callback
        if (Build.VERSION.SDK_INT >= 33) {
            getOnBackInvokedDispatcher().registerOnBackInvokedCallback(OnBackInvokedDispatcher.PRIORITY_DEFAULT, this::goBack);
        }

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false); // menu music after the first tap
        s.setCacheMode(WebSettings.LOAD_DEFAULT);
        s.setAllowFileAccess(false);
        s.setSupportZoom(false);
        s.setUserAgentString(s.getUserAgentString() + " KanjiWizardsAndroid/" + BuildConfig.VERSION_NAME);

        tts = new TextToSpeech(this, status -> {
            if (status == TextToSpeech.SUCCESS) { ttsInit = true; checkVoice(); }
        });
        web.addJavascriptInterface(new Bridge(), "KWAndroid");
        Reminders.schedule(this); // 0.9.9.7: moves alarms set by an older version to the new kind

        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest req) {
                Uri u = req.getUrl();
                if (isGame(u) || "file".equals(u.getScheme())) return false;
                openOutside(u); // other links: the browser
                return true;
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest req, WebResourceError err) {
                // no internet and nothing saved yet (the first start): a page with "Try again"
                if (req.isForMainFrame()) view.loadUrl("file:///android_asset/offline.html");
            }
        });
        web.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> cb, FileChooserParams params) {
                if (filePick != null) filePick.onReceiveValue(null);
                filePick = cb;
                try {
                    startActivityForResult(params.createIntent(), PICK_FILE);
                } catch (ActivityNotFoundException e) {
                    filePick = null;
                    return false;
                }
                return true;
            }
        });

        Uri link = linkOf(getIntent());
        web.loadUrl(link != null && isGame(link) ? link.toString() : SERVER);
    }

    /**
     * The page to open: a game link (Join on an invite) — or, 0.9.9.9.5.5, an invite notification tapped: Android
     * showed it by itself (the app was closed) and hands its data over as extras; tapping it joins the room too.
     */
    static Uri linkOf(Intent intent) {
        if (intent == null) return null;
        Uri link = intent.getData();
        if (link != null) return link;
        android.os.Bundle x = intent.getExtras();
        if (x == null || !"invite".equals(x.getString("kind"))) return null;
        String code = x.getString("code");
        if (code == null || !code.matches("[A-Za-z0-9]{4}")) return null;
        intent.removeExtra("kind"); // (once: coming back to the app later doesn't join again)
        return Uri.parse(SERVER + "/?join=" + Uri.encode(code));
    }

    private static boolean isGame(Uri u) {
        Uri home = Uri.parse(SERVER);
        return home.getHost() != null && home.getHost().equals(u.getHost());
    }

    private void openOutside(Uri u) {
        try {
            startActivity(new Intent(Intent.ACTION_VIEW, u));
        } catch (ActivityNotFoundException ignored) {
            // nothing can open it
        }
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        Uri link = linkOf(intent);
        if (link != null && isGame(link)) web.loadUrl(link.toString()); // an invite link while the app is open
    }

    @Override
    protected void onActivityResult(int request, int result, Intent data) {
        if (request == PICK_FILE && filePick != null) {
            filePick.onReceiveValue(WebChromeClient.FileChooserParams.parseResult(result, data));
            filePick = null;
            return;
        }
        super.onActivityResult(request, result, data);
    }

    @Override
    @SuppressWarnings("deprecation")
    public void onBackPressed() {
        // the game keeps a history entry while a dialog or a screen other than the menu is open (0.9.9.4.2):
        // back closes it or goes back; at the menu the app goes to the background
        goBack();
    }

    private void goBack() {
        if (web.canGoBack()) web.goBack();
        else moveTaskToBack(true);
    }

    /** 0.9.9.9.5.1: the app is on screen (a friend's invite then shows in the game, not as a notification) */
    static volatile boolean visible = false;
    private final android.os.Handler freeze = new android.os.Handler(android.os.Looper.getMainLooper());

    private volatile boolean ttsInit;
    /** is there a Japanese voice? (asked again when you come back to the app — maybe from installing one) */
    private void checkVoice() {
        if (!ttsInit || tts == null) return;
        try {
            int r = tts.setLanguage(Locale.JAPANESE);
            ttsReady = r != TextToSpeech.LANG_MISSING_DATA && r != TextToSpeech.LANG_NOT_SUPPORTED;
        } catch (Exception e) { ttsReady = false; }
    }

    @Override
    protected void onResume() {
        super.onResume();
        visible = true;
        checkVoice(); // 0.9.9.9.5.5: back from installing the Japanese voice
        freeze.removeCallbacksAndMessages(null);
        web.resumeTimers();
        web.onResume();
    }

    /**
     * 0.9.9.9.2: nothing runs while the app is in the background. The page has already told the server you're away
     * and closed its connection (the server keeps your game as it was — a snapshot); here its timers and scripts are
     * frozen too. Back in the app, everything carries on and the page reconnects from that point.
     */
    @Override
    protected void onPause() {
        visible = false;
        // 0.9.9.9.5.1: the page says it's away and closes its connection first, then it is frozen — so the server
        // sends friends' invites as notifications (a connection left open, frozen, swallowed them)
        web.evaluateJavascript("window.__kwPause && window.__kwPause()", null);
        freeze.postDelayed(() -> {
            if (visible) return;
            web.onPause();
            web.pauseTimers();
        }, 350);
        super.onPause();
    }

    @Override
    protected void onDestroy() {
        if (tts != null) tts.shutdown();
        web.destroy();
        super.onDestroy();
    }

    @Override
    public void onWindowFocusChanged(boolean focus) {
        super.onWindowFocusChanged(focus);
        if (focus) {
            web.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
        }
    }

    /** window.KWAndroid in the page. */
    private class Bridge {
        /** Speak a Japanese word (WebViews have no speechSynthesis). rate/pitch: 1 = normal. */
        @JavascriptInterface
        public boolean speak(String text, float rate, float pitch) {
            if (!ttsReady || text == null) return false;
            tts.setSpeechRate(rate);
            tts.setPitch(pitch);
            tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "kw");
            return true;
        }

        // (0.9.9.9.3: no more downloading and installing APKs from inside the app — Play Protect counts an app that
        // can install other apps as harmful. 0.9.9.9.5.3 tried it again, carefully: Play Protect blocked it again.
        // "Update the app" lets the phone's browser download the new version.)

        /** 0.9.9.9.5.5: Settings → "Download the Japanese voice": Android's own screen for the voice data (or the Google speech app in the store) */
        @JavascriptInterface
        public void installVoice() {
            runOnUiThread(() -> {
                try {
                    startActivity(new Intent(TextToSpeech.Engine.ACTION_INSTALL_TTS_DATA).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK));
                } catch (ActivityNotFoundException e) {
                    try { startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("market://details?id=com.google.android.tts")).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)); }
                    catch (ActivityNotFoundException e2) { openOutside(Uri.parse("https://play.google.com/store/apps/details?id=com.google.android.tts")); }
                }
            });
        }

        @JavascriptInterface
        public boolean canSpeak() {
            return ttsReady;
        }

        @JavascriptInterface
        public String version() {
            return BuildConfig.VERSION_NAME;
        }

        /** 0.9.9.6: reminders on/off (the bell in the top bar); asks for permission on Android 13+. */
        @JavascriptInterface
        public void setReminders(boolean on, String token, String lang) {
            if (on && Build.VERSION.SDK_INT >= 33 && checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
                runOnUiThread(() -> requestPermissions(new String[] { Manifest.permission.POST_NOTIFICATIONS }, ASK_NOTIFY));
            }
            Reminders.configure(MainActivity.this, on, token, lang);
        }

        /** 0.9.9.7: Settings → "Send a test": a reminder right now, and a real check in the background */
        @JavascriptInterface
        public void testReminder() {
            if (Build.VERSION.SDK_INT >= 33 && checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
                runOnUiThread(() -> requestPermissions(new String[] { Manifest.permission.POST_NOTIFICATIONS }, ASK_NOTIFY));
                return;
            }
            Reminders.test(MainActivity.this);
        }

        /** when the last background check ran, and how it went */
        @JavascriptInterface
        public String reminderLast() {
            return Reminders.last(MainActivity.this);
        }

        @JavascriptInterface
        public boolean remindersOn() {
            return Reminders.isOn(MainActivity.this);
        }

        /**
         * 0.9.9.9.5: the phone's push token for the server ("" while there is none yet / no Firebase in this build).
         * The first time, Android 13+ asks whether the app may show notifications (friends' invites).
         */
        @JavascriptInterface
        public String pushToken() {
            if (!PushService.available()) return "";
            SharedPreferences p = getSharedPreferences(PushService.PREFS, MODE_PRIVATE);
            if (Build.VERSION.SDK_INT >= 33 && !p.getBoolean("asked", false)
                    && checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
                p.edit().putBoolean("asked", true).apply();
                runOnUiThread(() -> requestPermissions(new String[] { Manifest.permission.POST_NOTIFICATIONS }, ASK_NOTIFY));
            }
            return PushService.token(MainActivity.this);
        }

        /** 0.9.9.9.5.2: why there is no push token ("" = none known) */
        @JavascriptInterface
        public String pushError() {
            return PushService.error(MainActivity.this);
        }

        /** 0.9.9.9.5.2: asks again whether the app may show notifications (Settings → Test) */
        @JavascriptInterface
        public void askNotifications() {
            if (Build.VERSION.SDK_INT >= 33 && checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
                runOnUiThread(() -> requestPermissions(new String[] { Manifest.permission.POST_NOTIFICATIONS }, ASK_NOTIFY));
            }
        }

        /** the sign-in token (for Decline on a notification) and the language of the notifications; "" = signed out */
        @JavascriptInterface
        public void setPushAuth(String auth, String lang) {
            PushService.setAuth(MainActivity.this, auth, lang);
        }

        /** false when Android blocks this app's notifications (the bell then says how to allow them) */
        @JavascriptInterface
        public boolean notificationsAllowed() {
            if (Build.VERSION.SDK_INT >= 33 && checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) return false;
            NotificationManager nm = (NotificationManager) getSystemService(NOTIFICATION_SERVICE);
            return nm == null || nm.areNotificationsEnabled();
        }
    }
}
