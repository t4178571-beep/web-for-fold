import React from 'react'
import { ShieldCheck, Eye, Database, Bell, Mail } from 'lucide-react'

const PrivacyPolicy = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-24 overflow-hidden">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-20 text-center animate-in fade-in slide-in-from-bottom duration-1000">
        <div className="inline-flex items-center gap-2 bg-matte-cyan-500/10 py-1.5 px-4 rounded-full text-matte-cyan-600 dark:text-matte-cyan-400 font-bold text-xs uppercase tracking-widest mb-8 border border-matte-cyan-500/20">
          <ShieldCheck size={14} /> Privacy Policy
        </div>
        <h1 className="hero-title mb-4 sm:mb-6 font-extrabold tracking-tighter text-4xl sm:text-6xl md:text-7xl">
          Your Privacy Matters.
        </h1>
        <p className="text-matte-slate-600 dark:text-matte-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Last updated: May 2026
        </p>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 sm:px-6 max-w-3xl space-y-10">

        {/* Section 1 */}
        <div className="matte-card p-8 sm:p-10 bg-white dark:bg-matte-slate-900/40 border border-matte-slate-100 dark:border-matte-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-matte-cyan-500/10 rounded-xl flex items-center justify-center text-matte-cyan-500">
              <Eye size={20} />
            </div>
            <h2 className="font-outfit text-xl font-extrabold text-matte-slate-900 dark:text-white">
              What We Collect
            </h2>
          </div>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 leading-relaxed text-sm sm:text-base">
            Foldercop the application runs entirely on your local machine and collects <strong className="text-matte-slate-900 dark:text-white">no data whatsoever</strong> from your computer. 
            No file names, no search queries, no usage statistics — nothing leaves your device.
          </p>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 leading-relaxed text-sm sm:text-base mt-4">
            On this website, we may collect the following information only when you voluntarily provide it:
          </p>
          <ul className="mt-4 space-y-2 text-sm sm:text-base text-matte-slate-600 dark:text-matte-slate-400">
            <li className="flex items-start gap-2"><span className="text-matte-cyan-500 mt-1">•</span> Your name and city when you register a donation (for the Hall of Fame)</li>
            <li className="flex items-start gap-2"><span className="text-matte-cyan-500 mt-1">•</span> Your email address if you choose to provide it (kept private, never displayed)</li>
            <li className="flex items-start gap-2"><span className="text-matte-cyan-500 mt-1">•</span> Messages you send via the Contact page</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="matte-card p-8 sm:p-10 bg-white dark:bg-matte-slate-900/40 border border-matte-slate-100 dark:border-matte-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-matte-cyan-500/10 rounded-xl flex items-center justify-center text-matte-cyan-500">
              <Database size={20} />
            </div>
            <h2 className="font-outfit text-xl font-extrabold text-matte-slate-900 dark:text-white">
              How We Use Your Data
            </h2>
          </div>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 leading-relaxed text-sm sm:text-base">
            Your data is sacred to us. Any information you share will <strong className="text-matte-slate-900 dark:text-white">never be misused, sold, leaked, or shared</strong> with any third party under any circumstances.
          </p>
          <ul className="mt-4 space-y-2 text-sm sm:text-base text-matte-slate-600 dark:text-matte-slate-400">
            <li className="flex items-start gap-2"><span className="text-matte-cyan-500 mt-1">•</span> Donation details are displayed publicly on the Hall of Fame to recognize your support.</li>
            <li className="flex items-start gap-2"><span className="text-matte-cyan-500 mt-1">•</span> Contact messages are used only to respond to your inquiry.</li>
            <li className="flex items-start gap-2"><span className="text-matte-cyan-500 mt-1">•</span> Your email address is never shared with third parties and will never be sold.</li>
          </ul>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 leading-relaxed text-sm sm:text-base mt-4">
            We do not use any third-party analytics, advertising trackers, or cookies on this website.
          </p>

          {/* Email Contact Notice */}
          <div className="mt-6 p-5 bg-matte-cyan-500/5 border border-matte-cyan-500/20 rounded-2xl">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-matte-cyan-500/10 rounded-lg flex items-center justify-center text-matte-cyan-500 shrink-0 mt-0.5">
                <Mail size={16} />
              </div>
              <div>
                <h3 className="font-outfit font-bold text-matte-slate-900 dark:text-white text-sm sm:text-base mb-2">
                  Please Note: We May Email You
                </h3>
                <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm leading-relaxed">
                  If you provide your email address, we <strong className="text-matte-slate-900 dark:text-white">may occasionally reach out to you</strong> regarding:
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-matte-slate-600 dark:text-matte-slate-400">
                  <li className="flex items-start gap-2"><span className="text-matte-cyan-500 mt-1">•</span> New feature announcements and important Foldercop updates</li>
                  <li className="flex items-start gap-2"><span className="text-matte-cyan-500 mt-1">•</span> New products or tools we launch in the future</li>
                  <li className="flex items-start gap-2"><span className="text-matte-cyan-500 mt-1">•</span> Critical security or licensing information</li>
                </ul>
                <p className="text-matte-slate-500 dark:text-matte-slate-500 text-xs mt-3 italic">
                  You can opt out of these emails any time by simply replying with "unsubscribe".
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="matte-card p-8 sm:p-10 bg-white dark:bg-matte-slate-900/40 border border-matte-slate-100 dark:border-matte-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-matte-cyan-500/10 rounded-xl flex items-center justify-center text-matte-cyan-500">
              <ShieldCheck size={20} />
            </div>
            <h2 className="font-outfit text-xl font-extrabold text-matte-slate-900 dark:text-white">
              Data Storage & Security
            </h2>
          </div>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 leading-relaxed text-sm sm:text-base">
            Donation registrations are stored in a private Google Sheet accessible only to the Foldercop team. 
            We take reasonable precautions to protect this data, but no internet transmission is 100% secure.
          </p>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 leading-relaxed text-sm sm:text-base mt-4">
            The Foldercop desktop application stores its file index entirely on your local machine. 
            This data never leaves your computer under any circumstances.
          </p>
        </div>

        {/* Section 4 */}
        <div className="matte-card p-8 sm:p-10 bg-white dark:bg-matte-slate-900/40 border border-matte-slate-100 dark:border-matte-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-matte-cyan-500/10 rounded-xl flex items-center justify-center text-matte-cyan-500">
              <Bell size={20} />
            </div>
            <h2 className="font-outfit text-xl font-extrabold text-matte-slate-900 dark:text-white">
              Changes to This Policy
            </h2>
          </div>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 leading-relaxed text-sm sm:text-base">
            We may update this Privacy Policy from time to time. Any changes will be reflected on this page 
            with an updated date at the top. We encourage you to review this page periodically.
          </p>
        </div>

        {/* Section 5 — Contact */}
        <div className="matte-card p-8 sm:p-10 bg-white dark:bg-matte-slate-900/40 border border-matte-slate-100 dark:border-matte-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-matte-cyan-500/10 rounded-xl flex items-center justify-center text-matte-cyan-500">
              <Mail size={20} />
            </div>
            <h2 className="font-outfit text-xl font-extrabold text-matte-slate-900 dark:text-white">
              Contact Us
            </h2>
          </div>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 leading-relaxed text-sm sm:text-base">
            If you have any questions about this Privacy Policy or how your data is handled, 
            please reach out to us at{' '}
            <a
              href="mailto:11iamyasin@gmail.com"
              className="text-matte-cyan-500 hover:underline font-medium"
            >
              11iamyasin@gmail.com
            </a>
            .
          </p>
        </div>

      </section>
    </div>
  )
}

export default PrivacyPolicy
