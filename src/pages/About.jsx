import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, Eye, Keyboard, LayoutGrid, Download, Zap } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <section className="container mx-auto px-4 sm:px-6 mb-16 sm:mb-20 text-center">
        <h1 className="hero-title mb-4 max-w-4xl mx-auto">Ultimate Speed. Ultimate Control.</h1>
        <p className="text-matte-slate-600 dark:text-matte-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Foldercop was engineered for power users who demand instantaneous file retrieval without compromise. 
          Native Windows performance, built entirely in C++.
        </p>
      </section>

      {/* Feature Breakdown Sections */}
      <section className="container mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24 max-w-5xl">
        
        {/* 1. Offline & Speed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="matte-card p-6 sm:p-8 flex flex-col justify-between">
            <div className="w-11 h-11 bg-matte-cyan-500/10 rounded-lg flex items-center justify-center text-matte-cyan-600 dark:text-matte-cyan-400 mb-5">
              <ShieldCheck size={24} />
            </div>
            <h2 className="font-outfit text-2xl font-bold text-matte-slate-900 dark:text-white mb-3">
              Privacy First. 100% Offline.
            </h2>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              Privacy is not a setting; it is our architecture. Foldercop executes completely offline. 
              Your computer's data remains on your local disk. We do not track, send, or store your queries anywhere.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 rounded-md text-xs font-semibold">
                Zero Telemetry
              </span>
              <span className="bg-matte-cyan-50 dark:bg-matte-cyan-950/80 text-matte-cyan-700 dark:text-matte-cyan-300 border border-matte-cyan-200 dark:border-matte-cyan-800 px-2.5 py-0.5 rounded-md text-xs font-semibold">
                Local Index Only
              </span>
            </div>
          </div>
          <div>
            <span className="text-matte-cyan-600 dark:text-matte-cyan-400 font-semibold uppercase tracking-wider text-xs block mb-2">Core Performance</span>
            <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-matte-slate-900 dark:text-white mb-4">
              In-Memory USN Journal Indexing
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              By reading the Windows NTFS Update Sequence Number (USN) Journal, Foldercop monitors every file operation with zero system overhead. 
              Search queries return across millions of records in milliseconds.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-matte-slate-800 dark:text-matte-200">
              <Zap size={16} className="text-matte-cyan-600 dark:text-matte-cyan-400" />
              <span>Optimized C++ Native Kernel Engine</span>
            </div>
          </div>
        </div>

        {/* 2. Global Shortcut */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <span className="text-matte-cyan-600 dark:text-matte-cyan-400 font-semibold uppercase tracking-wider text-xs block mb-2">Instant Access</span>
            <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-matte-slate-900 dark:text-white mb-4">
              One Key Combination Away
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              No matter what software you are currently working in, Foldercop is ready. 
              The global shortcut summons the clean search overlay immediately. Dismiss it just as easily when finished.
            </p>
            <div className="flex items-center gap-2.5">
              <kbd className="px-3 py-1.5 text-xs font-mono font-semibold bg-matte-slate-100 dark:bg-matte-slate-800 border border-matte-slate-300 dark:border-matte-slate-700 rounded-md text-matte-slate-800 dark:text-matte-slate-200 shadow-sm">
                Win
              </kbd>
              <span className="text-matte-slate-400 font-bold">+</span>
              <kbd className="px-3 py-1.5 text-xs font-mono font-semibold bg-matte-cyan-600 text-white border border-matte-cyan-700 rounded-md shadow-sm">
                F2
              </kbd>
            </div>
          </div>
          <div className="matte-card p-6 sm:p-8">
            <div className="w-10 h-10 bg-matte-cyan-500/10 rounded-lg flex items-center justify-center text-matte-cyan-600 dark:text-matte-cyan-400 mb-4">
              <Keyboard size={20} />
            </div>
            <h4 className="font-outfit text-xl font-bold text-matte-slate-900 dark:text-white mb-2">Keyboard-Centric UX</h4>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm leading-relaxed">
              Designed for power users who keep their hands on the keyboard. Navigate results with arrow keys, open containing folder with shortcuts, and preview documents on the fly.
            </p>
          </div>
        </div>

        {/* 3. Categories & Preview */}
        <div className="matte-card p-6 sm:p-10 text-center">
          <div className="w-11 h-11 bg-matte-cyan-500/10 rounded-lg flex items-center justify-center text-matte-cyan-600 dark:text-matte-cyan-400 mb-4 mx-auto">
            <LayoutGrid size={22} />
          </div>
          <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-matte-slate-900 dark:text-white mb-3">
            Smart Category Filtering
          </h3>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Folders, Documents, PDFs, Images, Audio, and Apps. Organize search scope instantly without complex syntax.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-10">
            {['Documents', 'PDFs', 'Images', 'Videos', 'Apps', 'Archives'].map((cat, i) => (
              <div key={i} className="p-3 bg-matte-slate-50 dark:bg-matte-slate-800/60 border border-matte-slate-200 dark:border-matte-slate-700 rounded-lg text-xs font-semibold text-matte-slate-700 dark:text-matte-slate-300">
                {cat}
              </div>
            ))}
          </div>

          {/* Preview Feature Details */}
          <div className="bg-matte-slate-900 text-white p-6 sm:p-8 rounded-xl text-left border border-matte-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-matte-cyan-400 shrink-0">
                <Eye size={20} />
              </div>
              <div>
                <h4 className="font-outfit text-lg sm:text-xl font-bold text-white mb-1.5">
                  Instant Side Preview
                </h4>
                <p className="text-matte-slate-300 text-sm leading-relaxed">
                  Embedded preview panel for Images, PDFs, spreadsheets, Word documents, text files, and media without launching separate heavy applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center max-w-3xl">
        <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-matte-slate-900 dark:text-white mb-3">
          Get Started with Foldercop
        </h2>
        <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm sm:text-base mb-8">
          Free to download, fully offline, and ready to index your system in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Link to="/downloads" className="matte-btn-primary px-8 py-3 text-sm sm:text-base gap-2 w-full sm:w-auto">
            Download Free <Download size={16} />
          </Link>
          <Link to="/contact" className="matte-btn-secondary px-6 py-3 text-sm sm:text-base w-full sm:w-auto">
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutPage