package com.kanjiwizards.app;

import android.app.AlarmManager;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

/**
 * Reminders (0.9.9.6): turned on with the bell in the game's top bar. Twice a day (about 12:30 and 19:00) the app
 * asks the server how today is going and reminds you of what's left: the Daily challenge, 50+ spells to review
 * in All spells, and the daily streak tasks. Each kind at most once a day; nothing when it's all done.
 */
public class Reminders extends BroadcastReceiver {
    static final String PREFS = "kw-reminders";
    private static final String CHANNEL = "reminders";
    private static final int[][] TIMES = { { 12, 30 }, { 19, 0 } };

    /** On or off (from the page), with the sign-in token the status check uses. */
    static void configure(Context ctx, boolean on, String token, String lang) {
        SharedPreferences p = ctx.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        p.edit().putBoolean("on", on).putString("token", on ? token : "").putString("lang", lang == null ? "en" : lang).apply();
        schedule(ctx);
    }

    static boolean isOn(Context ctx) {
        return ctx.getSharedPreferences(PREFS, Context.MODE_PRIVATE).getBoolean("on", false);
    }

    /** (Re)sets the two daily alarms — or cancels them when reminders are off. */
    static void schedule(Context ctx) {
        AlarmManager am = (AlarmManager) ctx.getSystemService(Context.ALARM_SERVICE);
        if (am == null) return;
        boolean on = isOn(ctx);
        for (int i = 0; i < TIMES.length; i++) {
            Intent it = new Intent(ctx, Reminders.class).putExtra("slot", i);
            PendingIntent pi = PendingIntent.getBroadcast(ctx, 100 + i, it, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
            am.cancel(pi);
            if (!on) continue;
            Calendar c = Calendar.getInstance();
            c.set(Calendar.HOUR_OF_DAY, TIMES[i][0]);
            c.set(Calendar.MINUTE, TIMES[i][1]);
            c.set(Calendar.SECOND, 0);
            if (c.getTimeInMillis() <= System.currentTimeMillis()) c.add(Calendar.DAY_OF_YEAR, 1);
            am.setInexactRepeating(AlarmManager.RTC_WAKEUP, c.getTimeInMillis(), AlarmManager.INTERVAL_DAY, pi);
        }
    }

    @Override
    public void onReceive(Context ctx, Intent intent) {
        String action = intent.getAction();
        if (Intent.ACTION_BOOT_COMPLETED.equals(action) || Intent.ACTION_MY_PACKAGE_REPLACED.equals(action)) {
            schedule(ctx);
            return;
        }
        if (!isOn(ctx)) return;
        final int slot = intent.getIntExtra("slot", 0);
        final PendingResult done = goAsync();
        final Context app = ctx.getApplicationContext();
        new Thread(() -> {
            try {
                check(app, slot);
            } catch (Exception ignored) {
                // no connection, or the server is asleep: no reminder this time
            } finally {
                done.finish();
            }
        }).start();
    }

    private static void check(Context ctx, int slot) throws Exception {
        SharedPreferences p = ctx.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        String token = p.getString("token", "");
        if (token == null || token.isEmpty()) return;
        boolean ru = "ru".equals(p.getString("lang", "en"));
        String today = new SimpleDateFormat("yyyy-MM-dd", Locale.US).format(new Date());
        HttpURLConnection con = (HttpURLConnection) new URL(BuildConfig.SERVER + "/api/notify/status?today=" + today).openConnection();
        con.setConnectTimeout(20000);
        con.setReadTimeout(70000); // a sleeping server takes about a minute to wake up
        con.setRequestProperty("Authorization", "Bearer " + token);
        if (con.getResponseCode() != 200) return;
        StringBuilder sb = new StringBuilder();
        try (BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"))) {
            String line;
            while ((line = in.readLine()) != null) sb.append(line);
        }
        JSONObject s = new JSONObject(sb.toString());
        int tasksLeft = s.optInt("tasksLeft", 0), tasksTotal = s.optInt("tasksTotal", 4), due = s.optInt("allDue", 0);
        boolean challengeDone = s.optBoolean("challengeDone", true);
        if (slot == 0) {
            if (!challengeDone && once(p, "challenge", today)) post(ctx, 1,
                ru ? "⚔ Ежедневный вызов ждёт" : "⚔ Today's Daily challenge is waiting",
                ru ? "Десять слов, одинаковых для всех, — насколько вы быстры?" : "Ten words, the same for everyone — how fast are you?");
            if (due >= 50 && once(p, "reviews", today)) post(ctx, 2,
                ru ? "📚 " + due + " заклинаний ждут повторения" : "📚 " + due + " spells are waiting for review",
                ru ? "В колоде «Все заклинания» " + due + " карточек к повторению." : "Your All spells deck has " + due + " cards to review.");
        } else if (tasksLeft > 0 && once(p, "tasks", today)) {
            post(ctx, 3, ru ? "🔥 Сохраните серию" : "🔥 Keep your streak",
                ru ? "Осталось заданий на сегодня: " + tasksLeft + " из " + tasksTotal + "." : tasksLeft + " of " + tasksTotal + " daily tasks left today.");
        }
    }

    /** true the first time a kind comes up today */
    private static boolean once(SharedPreferences p, String kind, String today) {
        if (today.equals(p.getString("shown-" + kind, ""))) return false;
        p.edit().putString("shown-" + kind, today).apply();
        return true;
    }

    private static void post(Context ctx, int id, String title, String text) {
        NotificationManager nm = (NotificationManager) ctx.getSystemService(Context.NOTIFICATION_SERVICE);
        if (nm == null) return;
        if (Build.VERSION.SDK_INT >= 26 && nm.getNotificationChannel(CHANNEL) == null) {
            nm.createNotificationChannel(new NotificationChannel(CHANNEL, "Reminders", NotificationManager.IMPORTANCE_DEFAULT));
        }
        Intent open = new Intent(ctx, MainActivity.class).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        PendingIntent pi = PendingIntent.getActivity(ctx, id, open, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        Notification.Builder b = Build.VERSION.SDK_INT >= 26 ? new Notification.Builder(ctx, CHANNEL) : new Notification.Builder(ctx);
        b.setSmallIcon(R.drawable.ic_notify).setContentTitle(title).setContentText(text).setContentIntent(pi).setAutoCancel(true);
        try {
            nm.notify(id, b.build());
        } catch (SecurityException ignored) {
            // notifications not allowed
        }
    }
}
