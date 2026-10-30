package com.kanjiwizards.app;

import android.app.Activity;
import android.app.DownloadManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.database.Cursor;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;

import java.io.File;

/**
 * 0.9.9.6.1: "Update the app" — downloads the newest APK with Android's download manager and opens the
 * installer on it, so updating needs one tap (and Android's own "Install" / "Update" confirmation) instead of
 * a trip to the website. The first time, Android may ask to allow installs from Kanji Wizards.
 */
final class Updater {
    private static long id = -1;
    private static boolean registered;

    private Updater() {}

    /** Start downloading `url` (an APK); the installer opens when it finishes. */
    static synchronized void start(Activity a, String url) {
        DownloadManager dm = (DownloadManager) a.getSystemService(Context.DOWNLOAD_SERVICE);
        if (dm == null) return;
        if (id != -1 && "downloading".equals(state(a))) return; // already on its way
        File old = new File(a.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS), "KanjiWizards.apk");
        if (old.exists()) //noinspection ResultOfMethodCallIgnored
            old.delete(); // else the new one gets a "-1" name
        DownloadManager.Request r = new DownloadManager.Request(Uri.parse(url))
            .setTitle("Kanji Wizards")
            .setDescription("Downloading the update")
            .setMimeType("application/vnd.android.package-archive")
            .setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE)
            .setDestinationInExternalFilesDir(a, Environment.DIRECTORY_DOWNLOADS, "KanjiWizards.apk");
        if (!registered) {
            registered = true;
            BroadcastReceiver done = new BroadcastReceiver() {
                @Override
                public void onReceive(Context c, Intent i) {
                    long got = i.getLongExtra(DownloadManager.EXTRA_DOWNLOAD_ID, -1);
                    if (got == id && "done".equals(state(c))) install(c);
                }
            };
            IntentFilter f = new IntentFilter(DownloadManager.ACTION_DOWNLOAD_COMPLETE);
            Context app = a.getApplicationContext();
            if (Build.VERSION.SDK_INT >= 33) app.registerReceiver(done, f, Context.RECEIVER_EXPORTED);
            else app.registerReceiver(done, f);
        }
        id = dm.enqueue(r);
    }

    /** Open Android's installer on the downloaded APK. */
    static void install(Context c) {
        DownloadManager dm = (DownloadManager) c.getSystemService(Context.DOWNLOAD_SERVICE);
        Uri apk = dm == null || id == -1 ? null : dm.getUriForDownloadedFile(id);
        if (apk == null) return;
        Intent i = new Intent(Intent.ACTION_VIEW);
        i.setDataAndType(apk, "application/vnd.android.package-archive");
        i.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_ACTIVITY_NEW_TASK);
        try {
            c.startActivity(i);
        } catch (Exception ignored) {
            // no installer (shouldn't happen)
        }
    }

    /** "idle", "downloading:<0–100>", "done" or "failed" — the page shows it on the button. */
    static String state(Context c) {
        if (id == -1) return "idle";
        DownloadManager dm = (DownloadManager) c.getSystemService(Context.DOWNLOAD_SERVICE);
        if (dm == null) return "failed";
        try (Cursor q = dm.query(new DownloadManager.Query().setFilterById(id))) {
            if (q == null || !q.moveToFirst()) return "failed";
            int st = q.getInt(q.getColumnIndexOrThrow(DownloadManager.COLUMN_STATUS));
            if (st == DownloadManager.STATUS_SUCCESSFUL) return "done";
            if (st == DownloadManager.STATUS_FAILED) return "failed";
            long got = q.getLong(q.getColumnIndexOrThrow(DownloadManager.COLUMN_BYTES_DOWNLOADED_SO_FAR));
            long all = q.getLong(q.getColumnIndexOrThrow(DownloadManager.COLUMN_TOTAL_SIZE_BYTES));
            return "downloading:" + (all > 0 ? (int) (got * 100 / all) : 0);
        }
    }
}
