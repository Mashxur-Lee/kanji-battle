package com.kanjiwizards.app;

import android.Manifest;
import android.content.ContentUris;
import android.content.Context;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.net.Uri;
import android.os.Build;
import android.provider.MediaStore;
import android.util.Base64;
import android.util.Size;
import android.webkit.WebView;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * 0.9.9.9.6.4: Messages → photos, like Telegram — your newest photos in a grid inside the game (the page draws it);
 * the one you pick is made smaller here and handed over as a JPEG. Only with your permission (Android asks once;
 * from Android 14 you may share just some photos). Nothing leaves the phone except the photos you send.
 */
final class Photos {
    private Photos() {}
    private static final ExecutorService WORK = Executors.newFixedThreadPool(2);

    static String access(Context c) {
        if (Build.VERSION.SDK_INT >= 33) {
            if (c.checkSelfPermission(Manifest.permission.READ_MEDIA_IMAGES) == PackageManager.PERMISSION_GRANTED) return "full";
            if (Build.VERSION.SDK_INT >= 34 && c.checkSelfPermission(Manifest.permission.READ_MEDIA_VISUAL_USER_SELECTED) == PackageManager.PERMISSION_GRANTED) return "partial";
            return "none";
        }
        return c.checkSelfPermission(Manifest.permission.READ_EXTERNAL_STORAGE) == PackageManager.PERMISSION_GRANTED ? "full" : "none";
    }

    static String recent(Context c, int limit) {
        JSONArray out = new JSONArray();
        if ("none".equals(access(c))) return out.toString();
        String[] cols = { MediaStore.Images.Media._ID, MediaStore.Images.Media.WIDTH, MediaStore.Images.Media.HEIGHT, MediaStore.Images.Media.DATE_ADDED };
        try (Cursor q = c.getContentResolver().query(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, cols, null, null, MediaStore.Images.Media.DATE_ADDED + " DESC")) {
            if (q == null) return out.toString();
            while (q.moveToNext() && out.length() < limit) {
                JSONObject o = new JSONObject();
                o.put("id", String.valueOf(q.getLong(0)));
                o.put("w", q.getInt(1));
                o.put("h", q.getInt(2));
                o.put("at", q.getLong(3) * 1000L);
                out.put(o);
            }
        } catch (Exception e) {
            // no photos to show
        }
        return out.toString();
    }

    private static Uri uri(String id) { return ContentUris.withAppendedId(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, Long.parseLong(id)); }

    static void thumbs(Context c, WebView web, String idsJson, int size) {
        WORK.execute(() -> {
            try {
                JSONArray ids = new JSONArray(idsJson);
                for (int i = 0; i < ids.length(); i++) {
                    String id = ids.getString(i);
                    if (!id.matches("\\d{1,19}")) continue;
                    Bitmap b = null;
                    try {
                        if (Build.VERSION.SDK_INT >= 29) b = c.getContentResolver().loadThumbnail(uri(id), new Size(size, size), null);
                        else b = decode(c, uri(id), size);
                    } catch (Exception e) { /* this one has no picture */ }
                    if (b == null) continue;
                    String data = jpeg(b, 72);
                    b.recycle();
                    send(web, "window.__kwPhotos && window.__kwPhotos.thumb('" + id + "','" + data + "')");
                }
            } catch (Exception e) { /* nothing more */ }
        });
    }

    static void full(Context c, WebView web, String id, int maxSide, String req) {
        final String r = req == null ? "" : req.replaceAll("[^A-Za-z0-9_-]", "");
        WORK.execute(() -> {
            String data = "";
            try {
                if (id.matches("\\d{1,19}")) {
                    Bitmap b = decode(c, uri(id), maxSide);
                    if (b != null) {
                        b = rotate(c, uri(id), b);
                        data = jpeg(b, 84);
                        b.recycle();
                    }
                }
            } catch (Exception e) { data = ""; }
            send(web, "window.__kwPhotos && window.__kwPhotos.full('" + r + "','" + data + "')");
        });
    }

    /** the picture, read at about the size asked for (not the camera's full 12 MP) */
    private static Bitmap decode(Context c, Uri u, int maxSide) throws Exception {
        BitmapFactory.Options o = new BitmapFactory.Options();
        o.inJustDecodeBounds = true;
        try (InputStream in = c.getContentResolver().openInputStream(u)) { BitmapFactory.decodeStream(in, null, o); }
        int side = Math.max(o.outWidth, o.outHeight), sample = 1;
        while (side / (sample * 2) >= maxSide) sample *= 2;
        BitmapFactory.Options o2 = new BitmapFactory.Options();
        o2.inSampleSize = sample;
        Bitmap b;
        try (InputStream in = c.getContentResolver().openInputStream(u)) { b = BitmapFactory.decodeStream(in, null, o2); }
        if (b == null) return null;
        int big = Math.max(b.getWidth(), b.getHeight());
        if (big > maxSide) {
            float k = maxSide / (float) big;
            Bitmap s = Bitmap.createScaledBitmap(b, Math.round(b.getWidth() * k), Math.round(b.getHeight() * k), true);
            if (s != b) b.recycle();
            b = s;
        }
        return b;
    }

    /** photos taken with the phone turned: upright */
    private static Bitmap rotate(Context c, Uri u, Bitmap b) {
        int deg = 0;
        try (Cursor q = c.getContentResolver().query(u, new String[] { MediaStore.Images.Media.ORIENTATION }, null, null, null)) {
            if (q != null && q.moveToFirst()) deg = q.getInt(0);
        } catch (Exception e) { deg = 0; }
        if (deg == 0) return b;
        Matrix m = new Matrix();
        m.postRotate(deg);
        Bitmap r = Bitmap.createBitmap(b, 0, 0, b.getWidth(), b.getHeight(), m, true);
        if (r != b) b.recycle();
        return r;
    }

    private static String jpeg(Bitmap b, int quality) {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        b.compress(Bitmap.CompressFormat.JPEG, quality, out);
        return "data:image/jpeg;base64," + Base64.encodeToString(out.toByteArray(), Base64.NO_WRAP);
    }

    private static void send(WebView web, String js) { web.post(() -> web.evaluateJavascript(js, null)); }
}
