package com.kanjiwizards.app;

import android.app.job.JobInfo;
import android.app.job.JobParameters;
import android.app.job.JobScheduler;
import android.app.job.JobService;
import android.content.ComponentName;
import android.content.Context;
import android.os.PersistableBundle;

/**
 * 0.9.9.7: the reminder check as a job — it waits for an internet connection and may take minutes (waking the
 * server), which a broadcast receiver may not.
 */
public class ReminderJob extends JobService {
    static void start(Context ctx, int slot) {
        JobScheduler js = (JobScheduler) ctx.getSystemService(Context.JOB_SCHEDULER_SERVICE);
        if (js == null) { new Thread(() -> Reminders.run(ctx.getApplicationContext(), slot)).start(); return; }
        PersistableBundle extras = new PersistableBundle();
        extras.putInt("slot", slot);
        JobInfo job = new JobInfo.Builder(300 + slot, new ComponentName(ctx, ReminderJob.class))
            .setRequiredNetworkType(JobInfo.NETWORK_TYPE_ANY)
            .setOverrideDeadline(60 * 60_000) // run within the hour even if the network never says it's ready
            .setExtras(extras)
            .build();
        js.schedule(job);
    }

    @Override
    public boolean onStartJob(JobParameters params) {
        final int slot = params.getExtras().getInt("slot", 0);
        new Thread(() -> {
            try {
                Reminders.run(getApplicationContext(), slot);
            } finally {
                jobFinished(params, false);
            }
        }).start();
        return true;
    }

    @Override
    public boolean onStopJob(JobParameters params) {
        return true; // stopped early (no network any more): try again
    }
}
