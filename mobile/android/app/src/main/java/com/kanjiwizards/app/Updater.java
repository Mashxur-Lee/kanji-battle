package com.kanjiwizards.app;

import android.app.Activity;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageInstaller;
import android.content.pm.PackageManager;
import android.content.pm.Signature;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.MessageDigest;
import java.util.Arrays;

/**
 * 0.9.9.9.5.3: "Update the app" inside the app again, with a percentage on the button — no trip to the browser.
 *
 * It was taken out in 0.9.9.9.3, when Play Protect blocked the app as harmful; the reason then was the public signing
 * key. To stay far from looking like a "dropper" it is careful:
 * - it only ever downloads the game's own APK, from the game's own server (a fixed address — the page can't name one);
 * - it installs it only if it is this same app (same package) signed with this app's own private key, and newer;
 * - it installs through Android's PackageInstaller as an update of itself: on Android 12+ that needs no extra tap
 *   (an app may update itself); older phones show Android's own "Update" confirmation.
 * The first time, Android asks to allow installs from Kanji Wizards (a switch in Settings) — once.
 */
final class Updater {
    static final String ACTION_RESULT = "com.kanjiwizards.app.UPDATE_RESULT";
    /** "idle", "downloading:<0–100>", "installing", "permission", "failed:<why>" — the page shows it on the button */
    private static volatile String state = "idle";

    private Updater() {}

    static String state() { return state; }

    static synchronized void start(Activity a) {
        if (state.startsWith("downloading") || state.equals("installing")) return;
        // Android's "install unknown apps" switch for this app, once
        if (Build.VERSION.SDK_INT >= 26 && !a.getPackageManager().canRequestPackageInstalls()) {
            state = "permission";
            try {
                a.startActivity(new Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES, Uri.parse("package:" + a.getPackageName())));
            } catch (Exception ignored) { /* no such screen */ }
            return;
        }
        state = "downloading:0";
        final Context app = a.getApplicationContext();
        new Thread(() -> {
            File apk = new File(app.getCacheDir(), "update.apk");
            try {
                download(BuildConfig.SERVER + "/download/KanjiWizards.apk", apk);
                String why = check(app, apk);
                if (why != null) { state = "failed:" + why; apk.delete(); return; }
                state = "installing";
                install(app, apk);
            } catch (Exception e) {
                state = "failed:" + (e.getMessage() == null ? "download" : e.getMessage());
                apk.delete();
            }
        }, "kw-update").start();
    }

    private static void download(String url, File to) throws Exception {
        HttpURLConnection c = null;
        for (int hop = 0; hop < 5; hop++) { // (the server may send it on to GitHub, and GitHub to its file store)
            c = (HttpURLConnection) new URL(url).openConnection();
            c.setInstanceFollowRedirects(false);
            c.setConnectTimeout(20000);
            c.setReadTimeout(30000);
            int code = c.getResponseCode();
            if (code >= 300 && code < 400) {
                String next = c.getHeaderField("Location");
                c.disconnect();
                if (next == null || !next.startsWith("https://")) throw new Exception("bad redirect");
                url = next;
                continue;
            }
            if (code != 200) throw new Exception("HTTP " + code);
            break;
        }
        long all = c.getContentLengthLong();
        try (InputStream in = c.getInputStream(); OutputStream out = new FileOutputStream(to)) {
            byte[] buf = new byte[64 * 1024];
            long got = 0;
            int n;
            while ((n = in.read(buf)) > 0) {
                out.write(buf, 0, n);
                got += n;
                state = "downloading:" + (all > 0 ? (int) Math.min(99, got * 100 / all) : 0);
            }
        } finally {
            c.disconnect();
        }
    }

    /** null when the file is this app, signed with this app's key, and newer — otherwise why not */
    @SuppressWarnings("deprecation")
    private static String check(Context c, File apk) throws Exception {
        PackageManager pm = c.getPackageManager();
        int flags = Build.VERSION.SDK_INT >= 28 ? PackageManager.GET_SIGNING_CERTIFICATES : PackageManager.GET_SIGNATURES;
        PackageInfo got = pm.getPackageArchiveInfo(apk.getPath(), flags);
        PackageInfo mine = pm.getPackageInfo(c.getPackageName(), flags);
        if (got == null) return "not an app";
        if (!c.getPackageName().equals(got.packageName)) return "not Kanji Wizards";
        if (!Arrays.equals(signer(got), signer(mine))) return "a different signature";
        long gv = Build.VERSION.SDK_INT >= 28 ? got.getLongVersionCode() : got.versionCode;
        long mv = Build.VERSION.SDK_INT >= 28 ? mine.getLongVersionCode() : mine.versionCode;
        if (gv <= mv) return "already up to date";
        return null;
    }

    @SuppressWarnings("deprecation")
    private static byte[] signer(PackageInfo p) throws Exception {
        Signature[] s = Build.VERSION.SDK_INT >= 28 && p.signingInfo != null ? p.signingInfo.getApkContentsSigners() : p.signatures;
        if (s == null || s.length == 0) return new byte[0];
        return MessageDigest.getInstance("SHA-256").digest(s[0].toByteArray());
    }

    private static void install(Context c, File apk) throws Exception {
        PackageInstaller pi = c.getPackageManager().getPackageInstaller();
        PackageInstaller.SessionParams p = new PackageInstaller.SessionParams(PackageInstaller.SessionParams.MODE_FULL_INSTALL);
        p.setAppPackageName(c.getPackageName());
        if (Build.VERSION.SDK_INT >= 31) p.setRequireUserAction(PackageInstaller.SessionParams.USER_ACTION_NOT_REQUIRED);
        int id = pi.createSession(p);
        try (PackageInstaller.Session s = pi.openSession(id)) {
            try (InputStream in = new FileInputStream(apk); OutputStream out = s.openWrite("KanjiWizards.apk", 0, apk.length())) {
                byte[] buf = new byte[64 * 1024];
                int n;
                while ((n = in.read(buf)) > 0) out.write(buf, 0, n);
                s.fsync(out);
            }
            Intent done = new Intent(c, Result.class).setAction(ACTION_RESULT);
            int flags = PendingIntent.FLAG_UPDATE_CURRENT | (Build.VERSION.SDK_INT >= 31 ? PendingIntent.FLAG_MUTABLE : 0);
            s.commit(PendingIntent.getBroadcast(c, 7001, done, flags).getIntentSender());
        }
    }

    /** the new version is in (Reminders gets MY_PACKAGE_REPLACED): a notification that opens it */
    static void updated(Context c) {
        android.app.NotificationManager nm = (android.app.NotificationManager) c.getSystemService(Context.NOTIFICATION_SERVICE);
        if (nm == null) return;
        if (Build.VERSION.SDK_INT >= 26 && nm.getNotificationChannel("updates") == null) {
            nm.createNotificationChannel(new android.app.NotificationChannel("updates", "Updates", android.app.NotificationManager.IMPORTANCE_HIGH));
        }
        Intent open = new Intent(c, MainActivity.class).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        PendingIntent pi = PendingIntent.getActivity(c, 7002, open, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        android.app.Notification.Builder b = Build.VERSION.SDK_INT >= 26 ? new android.app.Notification.Builder(c, "updates") : new android.app.Notification.Builder(c);
        b.setSmallIcon(R.drawable.ic_notify).setContentTitle("Kanji Wizards " + BuildConfig.VERSION_NAME)
            .setContentText("Updated ✓ — tap to play").setContentIntent(pi).setAutoCancel(true);
        if (Build.VERSION.SDK_INT >= 26) b.setTimeoutAfter(10 * 60_000);
        try { nm.notify(7002, b.build()); } catch (SecurityException ignored) { /* notifications not allowed */ }
    }

    /** Android's answer: needs a tap (older phones), done, or failed */
    public static class Result extends BroadcastReceiver {
        @Override
        public void onReceive(Context c, Intent i) {
            int st = i.getIntExtra(PackageInstaller.EXTRA_STATUS, PackageInstaller.STATUS_FAILURE);
            if (st == PackageInstaller.STATUS_PENDING_USER_ACTION) {
                Intent confirm = i.getParcelableExtra(Intent.EXTRA_INTENT);
                if (confirm != null) {
                    confirm.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    try { c.startActivity(confirm); } catch (Exception e) { state = "failed:installer"; }
                }
            } else if (st == PackageInstaller.STATUS_SUCCESS) {
                state = "idle"; // (the app restarts as the new version)
            } else {
                String msg = i.getStringExtra(PackageInstaller.EXTRA_STATUS_MESSAGE);
                state = "failed:" + (msg == null ? "install" : msg);
            }
            new File(c.getCacheDir(), "update.apk").delete();
        }
    }
}
