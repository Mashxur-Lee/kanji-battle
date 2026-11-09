package com.kanjiwizards.app;

import android.app.NotificationManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;

import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

/** 0.9.9.9.5: "Decline" on an invite notification — tells the server (without opening the app) and clears it. */
public class InviteActions extends BroadcastReceiver {
    static final String DECLINE = "com.kanjiwizards.app.DECLINE_INVITE";

    @Override
    public void onReceive(Context ctx, Intent intent) {
        if (!DECLINE.equals(intent.getAction())) return;
        NotificationManager nm = (NotificationManager) ctx.getSystemService(Context.NOTIFICATION_SERVICE);
        if (nm != null) nm.cancel(intent.getIntExtra("id", 0));
        String fromId = intent.getStringExtra("fromId");
        SharedPreferences p = ctx.getSharedPreferences(PushService.PREFS, Context.MODE_PRIVATE);
        String auth = p.getString("auth", "");
        if (fromId == null || fromId.isEmpty() || auth == null || auth.isEmpty()) return;
        PendingResult done = goAsync();
        new Thread(() -> {
            try {
                HttpURLConnection con = (HttpURLConnection) new URL(BuildConfig.SERVER + "/api/invite/decline").openConnection();
                con.setConnectTimeout(15000);
                con.setReadTimeout(20000);
                con.setRequestMethod("POST");
                con.setDoOutput(true);
                con.setRequestProperty("Authorization", "Bearer " + auth);
                con.setRequestProperty("Content-Type", "application/json");
                byte[] body = ("{\"fromId\":\"" + fromId.replaceAll("[^\\w-]", "") + "\"}").getBytes(StandardCharsets.UTF_8);
                try (OutputStream out = con.getOutputStream()) { out.write(body); }
                con.getResponseCode();
                con.disconnect();
            } catch (Exception ignored) {
                // no internet: the invite simply runs out
            } finally {
                done.finish();
            }
        }).start();
    }
}
