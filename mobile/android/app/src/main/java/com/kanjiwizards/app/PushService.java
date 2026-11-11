package com.kanjiwizards.app;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Build;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

import java.util.Map;

/**
 * 0.9.9.9.5: push from the game's server (Firebase Cloud Messaging). In the background the app closes its connection,
 * so a friend's invite comes this way: a notification with Join (opens the app straight into their room) and Decline
 * (tells the server without opening the app — the friend can't invite again for 5 minutes). Tapping the
 * notification itself opens the app, where the invite card is waiting.
 */
public class PushService extends FirebaseMessagingService {
    static final String PREFS = "kw-push";
    private static final String CHANNEL = "invites";

    /** Firebase is set up in this build (google-services.json was there when it was built) */
    static boolean available() { return BuildConfig.PUSH; }

    /** The phone's token, or "" while Firebase hasn't given one yet (asks for it then). */
    static String token(Context ctx) {
        if (!available()) return "";
        String t = ctx.getSharedPreferences(PREFS, Context.MODE_PRIVATE).getString("token", "");
        if (t == null || t.isEmpty()) {
            try {
                FirebaseMessaging.getInstance().getToken()
                    .addOnSuccessListener(tok -> save(ctx, tok))
                    // 0.9.9.9.5.2: why there is no token (Settings → Test shows it)
                    .addOnFailureListener(e -> ctx.getSharedPreferences(PREFS, Context.MODE_PRIVATE).edit().putString("error", String.valueOf(e.getMessage())).apply());
            } catch (Exception e) {
                // Firebase couldn't start (no configuration)
                ctx.getSharedPreferences(PREFS, Context.MODE_PRIVATE).edit().putString("error", "Firebase: " + e.getMessage()).apply();
            }
            return "";
        }
        return t;
    }

    private static void save(Context ctx, String tok) {
        if (tok != null) ctx.getSharedPreferences(PREFS, Context.MODE_PRIVATE).edit().putString("token", tok).remove("error").apply();
    }

    /** why Firebase gave no token ("" = no problem known) */
    static String error(Context ctx) {
        if (!available()) return "This build of the app has no push (Firebase) set up";
        String e = ctx.getSharedPreferences(PREFS, Context.MODE_PRIVATE).getString("error", "");
        return e == null ? "" : e;
    }

    /** The sign-in token and language from the page ("" = signed out: Decline then does nothing). */
    static void setAuth(Context ctx, String auth, String lang) {
        ctx.getSharedPreferences(PREFS, Context.MODE_PRIVATE).edit()
            .putString("auth", auth == null ? "" : auth).putString("lang", lang == null ? "en" : lang).apply();
    }

    @Override
    public void onNewToken(String tok) {
        save(this, tok);
        // (the page hands the new token to the server the next time it connects)
    }

    @Override
    public void onMessageReceived(RemoteMessage msg) {
        Map<String, String> d = msg.getData();
        // 0.9.9.9.5.2: Settings → "Test": shown even with the game on screen
        if ("test".equals(d.get("kind"))) {
            boolean ru = "ru".equals(getSharedPreferences(PREFS, Context.MODE_PRIVATE).getString("lang", "en"));
            showTest(this, ru);
            return;
        }
        if (!"invite".equals(d.get("kind"))) return;
        // the game is on screen: the invite card shows there (no notification on top of it)
        if (MainActivity.visible) return;
        SharedPreferences p = getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        String auth = p.getString("auth", "");
        if (auth == null || auth.isEmpty()) return; // signed out on this phone
        boolean ru = "ru".equals(p.getString("lang", "en"));
        String from = d.containsKey("fromName") ? d.get("fromName") : "?"; // ("from" is Google's own key)
        String mode = d.containsKey("mode") ? d.get("mode") : "";
        String code = d.containsKey("code") ? d.get("code") : "";
        String fromId = d.containsKey("fromId") ? d.get("fromId") : "";
        showInvite(this, from, mode, code, fromId, ru);
    }

    static void channel(NotificationManager nm, boolean ru) {
        if (Build.VERSION.SDK_INT >= 26 && nm.getNotificationChannel(CHANNEL) == null) {
            NotificationChannel ch = new NotificationChannel(CHANNEL, ru ? "Приглашения друзей" : "Friend invites", NotificationManager.IMPORTANCE_HIGH);
            ch.enableVibration(true);
            ch.setVibrationPattern(new long[] { 0, 90, 70, 90 });
            nm.createNotificationChannel(ch);
        }
    }

    static void showTest(Context ctx, boolean ru) {
        NotificationManager nm = (NotificationManager) ctx.getSystemService(Context.NOTIFICATION_SERVICE);
        if (nm == null) return;
        channel(nm, ru);
        Intent open = new Intent(ctx, MainActivity.class).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        PendingIntent pi = PendingIntent.getActivity(ctx, 4999, open, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        Notification.Builder b = Build.VERSION.SDK_INT >= 26 ? new Notification.Builder(ctx, CHANNEL) : new Notification.Builder(ctx);
        b.setSmallIcon(R.drawable.ic_notify).setContentTitle(ru ? "✓ Уведомления работают" : "✓ Invite notifications work")
            .setContentText(ru ? "Так придёт приглашение друга, даже когда игра закрыта." : "This is how a friend's invite reaches you, even with the game closed.")
            .setContentIntent(pi).setAutoCancel(true);
        if (Build.VERSION.SDK_INT >= 26) b.setTimeoutAfter(60_000);
        try { nm.notify(4999, b.build()); } catch (SecurityException ignored) { /* notifications not allowed */ }
    }

    static int idFor(String fromId) { return 5000 + (fromId == null ? 0 : (fromId.hashCode() & 0xfff)); }

    static void showInvite(Context ctx, String from, String mode, String code, String fromId, boolean ru) {
        NotificationManager nm = (NotificationManager) ctx.getSystemService(Context.NOTIFICATION_SERVICE);
        if (nm == null) return;
        channel(nm, ru);
        int id = idFor(fromId);
        // tap: the app opens and the invite card is there; Join: straight into the room
        Intent open = new Intent(ctx, MainActivity.class).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        Intent join = new Intent(Intent.ACTION_VIEW, Uri.parse(BuildConfig.SERVER + "/?join=" + Uri.encode(code)), ctx, MainActivity.class)
            .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        Intent decline = new Intent(ctx, InviteActions.class).setAction(InviteActions.DECLINE)
            .putExtra("fromId", fromId).putExtra("id", id);
        int flags = PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE;
        PendingIntent piOpen = PendingIntent.getActivity(ctx, id, open, flags);
        PendingIntent piJoin = PendingIntent.getActivity(ctx, id + 1, join, flags);
        PendingIntent piDecline = PendingIntent.getBroadcast(ctx, id + 2, decline, flags);
        String title = ru ? from + " приглашает вас" : from + " invites you";
        String text = ru ? "Комната " + mode + " · " + code + " — присоединяйтесь!" : "Join their " + mode + " room · " + code;
        Notification.Builder b = Build.VERSION.SDK_INT >= 26 ? new Notification.Builder(ctx, CHANNEL) : new Notification.Builder(ctx);
        b.setSmallIcon(R.drawable.ic_notify).setContentTitle("⚔ " + title).setContentText(text)
            .setContentIntent(piOpen).setAutoCancel(true)
            .setCategory(Notification.CATEGORY_SOCIAL)
            .addAction(new Notification.Action.Builder(null, ru ? "Присоединиться" : "Join", piJoin).build())
            .addAction(new Notification.Action.Builder(null, ru ? "Отклонить" : "Decline", piDecline).build());
        if (Build.VERSION.SDK_INT >= 26) b.setTimeoutAfter(120_000); // the invite waits two minutes on the server too
        else b.setPriority(Notification.PRIORITY_HIGH).setVibrate(new long[] { 0, 90, 70, 90 });
        try {
            nm.notify(id, b.build());
        } catch (SecurityException ignored) {
            // notifications not allowed
        }
    }
}
