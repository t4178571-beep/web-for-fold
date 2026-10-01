import React, { useState, useEffect } from 'react'
import {
  Download,
  Droplets,
  Bell,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Smartphone,
  Sparkles,
  Calendar,
  Lock,
  HelpCircle,
  TrendingUp
} from 'lucide-react'

import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../config/supabase'

const WaterTracker = () => {
  const githubReleaseApkUrl = "https://github.com/vahorayasin117-droid/hydroflow/releases/download/1.0.0/application-e73f3d9f-85bb-449e-86a2-6fedea93ecd1.apk"

  // Initialize with cached count if available so reload never flashes 0
  const [downloadCount, setDownloadCount] = useState(() => {
    const cached = localStorage.getItem('hydroflow_supabase_downloads')
    return cached ? parseInt(cached, 10) : null
  })
  const [isDownloading, setIsDownloading] = useState(false)

  // Fetch actual download count from Supabase table
  const fetchSupabaseDownloads = async () => {
    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/app_downloads?select=id`,
        {
          method: 'GET',
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Prefer': 'count=exact'
          }
        }
      )

      if (response.ok) {
        const contentRange = response.headers.get('content-range')
        if (contentRange) {
          const totalStr = contentRange.split('/')[1]
          if (totalStr && totalStr !== '*') {
            const count = parseInt(totalStr, 10)
            if (!isNaN(count)) {
              setDownloadCount(count)
              localStorage.setItem('hydroflow_supabase_downloads', count.toString())
              return
            }
          }
        }

        // Fallback: in case Content-Range is not exposed by browser CORS
        const data = await response.json()
        if (Array.isArray(data)) {
          setDownloadCount(data.length)
          localStorage.setItem('hydroflow_supabase_downloads', data.length.toString())
        }
      }
    } catch (err) {
      console.error("Error fetching Supabase download count:", err)
    }
  }

  useEffect(() => {
    fetchSupabaseDownloads()
  }, [])

  // Handle Download Click: Log to Supabase + refresh exact count
  const handleDownload = async () => {
    setIsDownloading(true)
    setTimeout(() => setIsDownloading(false), 2000)

    // Optimistically update count immediately
    setDownloadCount(prev => {
      const next = (prev !== null ? prev + 1 : 1)
      localStorage.setItem('hydroflow_supabase_downloads', next.toString())
      return next
    })

    // Insert new download record in Supabase
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/app_downloads`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          app_name: 'hydroflow',
          version: '1.0.0',
          downloaded_at: new Date().toISOString(),
          user_agent: navigator.userAgent
        })
      })

      if (res.ok) {
        // Fetch the confirmed exact count from Supabase
        await fetchSupabaseDownloads()
      }
    } catch (err) {
      console.error("Failed to record download in Supabase:", err)
    }
  }

  return (
    <div className="pt-24 sm:pt-32 pb-20">

      {/* ───────────── HERO SECTION ───────────── */}
      <section className="container mx-auto px-4 sm:px-6 text-center max-w-5xl">

        {/* App Logo Display */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl p-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 shadow-xl shadow-cyan-500/20">
            <img
              src="/hydroflow-logo.png"
              alt="HydroFlow Logo"
              className="w-full h-full object-cover rounded-[22px]"
            />
          </div>
        </div>

        {/* Badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-matte-cyan-50 dark:bg-matte-cyan-950/70 border border-matte-cyan-200 dark:border-matte-cyan-800/80 py-1.5 px-4 rounded-full text-matte-cyan-700 dark:text-matte-cyan-300 font-medium text-xs sm:text-sm mb-6">

          {downloadCount !== null && (
            <>
              <span className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                <TrendingUp size={13} /> {downloadCount} Downloads
              </span>
            </>
          )}
        </div>

        {/* Main Headline */}
        <h1 className="hero-title mb-4 sm:mb-6 max-w-4xl mx-auto">
          Smart Water Tracker &amp; Timely Alarm Reminder.
        </h1>

        {/* Subtitle */}
        <p className="text-matte-slate-600 dark:text-matte-slate-400 text-base sm:text-lg max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Set your daily hydration goal, choose your preferred reminder interval, and get timely audio and notification alerts.
          Effortlessly track your daily water intake with <strong>zero data misuse</strong> and a clean, easy-to-use interface.
        </p>

        {/* Primary Download CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href={githubReleaseApkUrl}
            onClick={handleDownload}
            download
            className="matte-btn-primary gap-2.5 text-base px-10 py-4 w-full sm:w-auto shadow-xl hover:shadow-cyan-500/25 font-bold tracking-wide transition-transform hover:-translate-y-0.5"
            id="download-hydroflow-apk"
          >
            <Download size={20} className={isDownloading ? "animate-bounce" : ""} />
            Download APK Free (v1.0.0)
          </a>
        </div>

        {/* Quick Highlights Pills */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-matte-slate-600 dark:text-matte-slate-400 pb-10 border-b border-matte-slate-200 dark:border-matte-slate-800">
          <div className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 size={16} className="text-emerald-500" />
            <span>100% Free to Use</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck size={16} className="text-matte-cyan-500" />
            <span>No Data Sharing or Misuse</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Smartphone size={16} className="text-indigo-500" />
            <span>Android APK Available</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Bell size={16} className="text-amber-500" />
            <span>Custom Alarm Intervals</span>
          </div>
        </div>
      </section>


      {/* ───────────── KEY FEATURES GRID ───────────── */}
      <section className="container mx-auto px-4 sm:px-6 py-14 sm:py-20 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-outfit text-2xl sm:text-4xl font-bold text-matte-slate-900 dark:text-white mb-3">
            Key Features &amp; Capabilities
          </h2>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 text-base max-w-2xl mx-auto">
            Everything you need to maintain healthy daily hydration without annoying spam, battery drain, or privacy risks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Feature 1: Goal Selection */}
          <div className="matte-card p-6 sm:p-7 flex flex-col hover:border-matte-slate-300 dark:hover:border-matte-slate-700 transition-colors">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-5">
              <Droplets size={24} />
            </div>
            <h3 className="font-outfit text-lg font-bold text-matte-slate-900 dark:text-white mb-2">
              Custom Daily Goal Selection
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm leading-relaxed">
              Users can select and customize their daily water drinking target (such as 2,000 ml, 2,500 ml, or 3,500 ml) according to personal body needs and workout levels.
            </p>
          </div>

          {/* Feature 2: Alarm Period Selection */}
          <div className="matte-card p-6 sm:p-7 flex flex-col hover:border-matte-slate-300 dark:hover:border-matte-slate-700 transition-colors">
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-5">
              <Clock size={24} />
            </div>
            <h3 className="font-outfit text-lg font-bold text-matte-slate-900 dark:text-white mb-2">
              Custom Alarm Period Selection
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm leading-relaxed">
              Choose your alarm reminder period freely—every 30 minutes, 45 minutes, 1 hour, or 2 hours. The application will alert you consistently at your selected interval.
            </p>
          </div>

          {/* Feature 3: Smart Alerts */}
          <div className="matte-card p-6 sm:p-7 flex flex-col hover:border-matte-slate-300 dark:hover:border-matte-slate-700 transition-colors">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-5">
              <Bell size={24} />
            </div>
            <h3 className="font-outfit text-lg font-bold text-matte-slate-900 dark:text-white mb-2">
              Smart Alerts &amp; Drink Guidance
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm leading-relaxed">
              HydroFlow alerts you at your selected time intervals with sound alarms and notifications, guiding you on exactly how much water to drink to stay on pace.
            </p>
          </div>

          {/* Feature 4: Daily Track */}
          <div className="matte-card p-6 sm:p-7 flex flex-col hover:border-matte-slate-300 dark:hover:border-matte-slate-700 transition-colors">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-5">
              <Calendar size={24} />
            </div>
            <h3 className="font-outfit text-lg font-bold text-matte-slate-900 dark:text-white mb-2">
              Daily Intake Tracking &amp; History
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm leading-relaxed">
              Easily track how much water you drank each day. Monitor your daily progress percentage, consistency streaks, and review your historical hydration logs.
            </p>
          </div>

          {/* Feature 5: No Misuse of Data */}
          <div className="matte-card p-6 sm:p-7 flex flex-col hover:border-matte-slate-300 dark:hover:border-matte-slate-700 transition-colors">
            <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-600 dark:text-rose-400 mb-5">
              <Lock size={24} />
            </div>
            <h3 className="font-outfit text-lg font-bold text-matte-slate-900 dark:text-white mb-2">
              Zero Data Misuse (100% Private)
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm leading-relaxed">
              No misuse of your personal data. Your daily logs and reminder schedules remain private and securely stored on your device. No third-party data selling or tracking.
            </p>
          </div>

          {/* Feature 6: Free & Easy to Use */}
          <div className="matte-card p-6 sm:p-7 flex flex-col hover:border-matte-slate-300 dark:hover:border-matte-slate-700 transition-colors">
            <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400 mb-5">
              <Sparkles size={24} />
            </div>
            <h3 className="font-outfit text-lg font-bold text-matte-slate-900 dark:text-white mb-2">
              Free to Download &amp; Easy to Use
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm leading-relaxed">
              100% free to download with no hidden subscription fees. Designed with a clean, straightforward interface so anyone can start drinking healthier right away.
            </p>
          </div>

        </div>
      </section>


      {/* ───────────── HOW IT WORKS (3 SIMPLE STEPS) ───────────── */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-5xl">
        <div className="matte-card p-8 sm:p-12 border border-matte-slate-200 dark:border-matte-slate-800 bg-matte-slate-50/50 dark:bg-matte-slate-900/50">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-matte-cyan-600 dark:text-matte-cyan-400">
              Quick Setup
            </span>
            <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-matte-slate-900 dark:text-white mt-1">
              How It Works in 3 Simple Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-matte-cyan-600 text-white font-outfit text-xl font-bold flex items-center justify-center mb-4 shadow-md">
                1
              </div>
              <h3 className="font-outfit font-bold text-lg text-matte-slate-900 dark:text-white mb-2">
                Set Your Daily Goal
              </h3>
              <p className="text-sm text-matte-slate-600 dark:text-matte-slate-400 leading-relaxed">
                Choose your daily water intake target (e.g., 2,000 ml or 2,500 ml) according to your body needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white font-outfit text-xl font-bold flex items-center justify-center mb-4 shadow-md">
                2
              </div>
              <h3 className="font-outfit font-bold text-lg text-matte-slate-900 dark:text-white mb-2">
                Choose Alarm Period
              </h3>
              <p className="text-sm text-matte-slate-600 dark:text-matte-slate-400 leading-relaxed">
                Select your preferred reminder interval (e.g., every 30, 45, or 60 minutes). HydroFlow will alert you on schedule.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white font-outfit text-xl font-bold flex items-center justify-center mb-4 shadow-md">
                3
              </div>
              <h3 className="font-outfit font-bold text-lg text-matte-slate-900 dark:text-white mb-2">
                Get Alerted &amp; Track
              </h3>
              <p className="text-sm text-matte-slate-600 dark:text-matte-slate-400 leading-relaxed">
                Receive the alarm notification, drink your water, tap to log your intake, and watch your daily progress grow.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ───────────── DOWNLOAD & INSTALLATION GUIDE ───────────── */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-matte-slate-900 dark:text-white mb-2">
            Get HydroFlow Today
          </h2>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm max-w-xl mx-auto">
            Download the official Android package (.apk) directly to your device.
          </p>
        </div>

        {/* Download Box */}
        <div className="matte-card p-6 sm:p-10 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-matte-cyan-500/30">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg shrink-0 border border-matte-slate-200 dark:border-matte-slate-700">
              <img
                src="/hydroflow-logo.png"
                alt="HydroFlow Icon"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="font-outfit text-xl sm:text-2xl font-bold text-matte-slate-900 dark:text-white">
                  HydroFlow APK
                </h3>
                <span className="bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                  v1.0.0 Stable
                </span>
                <span className="bg-matte-cyan-50 dark:bg-matte-cyan-950/80 text-matte-cyan-700 dark:text-matte-cyan-300 border border-matte-cyan-200 dark:border-matte-cyan-800 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                  82.8 MB
                </span>
                {downloadCount !== null && (
                  <span className="bg-cyan-50 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 px-2.5 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1">
                    <TrendingUp size={12} /> {downloadCount} Downloads
                  </span>
                )}
              </div>
              <p className="text-matte-slate-600 dark:text-matte-slate-400 text-xs sm:text-sm mt-1 max-w-md">
                Compatible with Android 8.0+ • Standalone APK package • Verified clean
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={githubReleaseApkUrl}
              onClick={handleDownload}
              download
              className="matte-btn-primary gap-2 py-3.5 px-8 text-sm sm:text-base font-semibold w-full sm:w-auto text-center"
            >
              <Download size={18} className={isDownloading ? "animate-bounce" : ""} /> Download APK (.apk)
            </a>
          </div>
        </div>

        {/* Installation Instructions for Android Mobile */}
        <div className="max-w-2xl mx-auto">
          <div className="matte-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-matte-slate-100 dark:bg-matte-slate-800 flex items-center justify-center text-matte-cyan-600 dark:text-matte-cyan-400">
                <Smartphone size={22} />
              </div>
              <div>
                <h4 className="font-outfit font-bold text-base sm:text-lg text-matte-slate-900 dark:text-white">
                  How to Install on Android Devices
                </h4>
                <p className="text-xs text-matte-slate-500">Quick step-by-step setup guide</p>
              </div>
            </div>
            <ol className="text-xs sm:text-sm text-matte-slate-600 dark:text-matte-slate-400 space-y-3 list-decimal list-inside leading-relaxed">
              <li>
                Click the <strong>Download APK (.apk)</strong> button to download the latest release package.
              </li>
              <li>
                Once downloaded, tap the notification or locate the file in your phone's <strong>Downloads</strong> folder.
              </li>
              <li>
                If your device prompts a security notice, tap <em>Settings</em> and enable <em>"Allow from this source"</em>.
              </li>
              <li>
                Tap <strong>Install</strong>, grant Notification permission when prompted, and start tracking your water intake!
              </li>
            </ol>
          </div>
        </div>

      </section>


      {/* ───────────── FREQUENTLY ASKED QUESTIONS ───────────── */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-matte-slate-900 dark:text-white mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm">
            Answers to common questions regarding HydroFlow features and privacy.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Is HydroFlow really 100% free to use?",
              a: "Yes! HydroFlow is completely free to download and use. There are no paid subscriptions, locked premium tiers, or hidden in-app purchases."
            },
            {
              q: "Is my personal data safe from misuse?",
              a: "Absolutely. HydroFlow strictly adheres to a zero data misuse policy. Your hydration goals, daily logs, and alarm schedules remain stored securely on your device. We do not sell or track your personal information."
            },
            {
              q: "How does the app alert me to drink water?",
              a: "Based on the alarm period you choose (e.g., every 30 minutes, 45 minutes, or 1 hour), HydroFlow sends timely audio alarms and notifications reminding you how much water to drink to reach your daily goal."
            },
            {
              q: "Will alarms wake me up at night?",
              a: "No. You can easily configure Quiet Hours (bedtime and wake-up times) so that notifications and alarms remain muted while you sleep and resume automatically in the morning."
            }
          ].map((faq, idx) => (
            <div key={idx} className="matte-card p-5 sm:p-6">
              <h3 className="font-outfit font-semibold text-base text-matte-slate-900 dark:text-white mb-2 flex items-start gap-2.5">
                <HelpCircle size={18} className="text-matte-cyan-600 dark:text-matte-cyan-400 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-sm text-matte-slate-600 dark:text-matte-slate-400 pl-7 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default WaterTracker
