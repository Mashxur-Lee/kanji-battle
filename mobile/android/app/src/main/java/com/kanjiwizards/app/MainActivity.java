package com.kanjiwizards.app;

import android.Manifest;
import android.annotation.SuppressLint;
import android.app.NotificationManager;
import android.content.pm.PackageManager;
import android.os.Build;
import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.view.View;
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
        setContentView(web);

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
            if (status == TextToSpeech.SUCCESS) {
                int r = tts.setLanguage(Locale.JAPANESE);
                ttsReady = r != TextToSpeech.LANG_MISSING_DATA && r != TextToSpeech.LANG_NOT_SUPPORTED;
            }
        });
        web.addJavascriptInterface(new Bridge(), "KWAndroid");

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

        Uri link = getIntent() != null ? getIntent().getData() : null;
        web.loadUrl(link != null && isGame(link) ? link.toString() : SERVER);
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
        Uri link = intent.getData();
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
        if (web.canGoBack()) web.goBack();
        else moveTaskToBack(true);
    }

    @Override
    protected void onResume() {
        super.onResume();
        web.onResume();
    }

    @Override
    protected void onPause() {
        web.onPause();
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

        /** 0.9.9.6.1: download the newest APK and open the installer (the "Update the app" button). */
        @JavascriptInterface
        public void updateApp(String url) {
            if (url == null || !url.startsWith("https://")) return;
            runOnUiThread(() -> Updater.start(MainActivity.this, url));
        }

        /** "idle", "downloading:<percent>", "done" or "failed" */
        @JavascriptInterface
        public String updateState() {
            return Updater.state(MainActivity.this);
        }

        /** the download finished but the installer was closed: open it again */
        @JavascriptInterface
        public void installUpdate() {
            runOnUiThread(() -> Updater.install(MainActivity.this));
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

        @JavascriptInterface
        public boolean remindersOn() {
            return Reminders.isOn(MainActivity.this);
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
