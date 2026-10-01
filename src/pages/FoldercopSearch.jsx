import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, Search, Download } from 'lucide-react'
import VideoPlayer from '../components/VideoPlayer'

const FoldercopSearch = () => {
  const whatsapp = '+917990471946'

  return (
    <div className="pt-24 sm:pt-32 pb-20">

      {/* ───────────── HERO SECTION ───────────── */}
      <section className="container mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-matte-slate-100 dark:bg-matte-slate-800/80 border border-matte-slate-200 dark:border-matte-slate-700 py-1 px-3.5 rounded-md text-matte-slate-700 dark:text-matte-slate-300 font-medium text-xs mb-6">
          <Zap size={14} className="text-matte-cyan-600 dark:text-matte-cyan-400" />
          <span>Version 1.1.0 Stable Available</span>
        </div>

        {/* Headline */}
        <h1 className="hero-title mb-4 sm:mb-6 max-w-4xl mx-auto">
          Never Search. Just Find.
        </h1>

        {/* Description */}
        <p className="text-matte-slate-600 dark:text-matte-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Foldercop replaces default Windows search with an in-memory indexing engine.
          From deeply nested project directories to system configurations, retrieve any file immediately.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16">
          <a
            href="https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.1.0/FolderCop_Setup.exe"
            className="matte-btn-primary gap-2 text-sm sm:text-base px-6 py-3 w-full sm:w-auto"
          >
            Get Foldercop Free <Download size={16} />
          </a>
          <Link
            to="/about"
            className="matte-btn-secondary gap-2 text-sm sm:text-base px-6 py-3 w-full sm:w-auto"
          >
            Explore Features <ArrowRight size={16} />
          </Link>
        </div>

        {/* ── VIDEO SECTION ── */}
        <div className="max-w-4xl mx-auto">
          <VideoPlayer src="/foldercop.mp4" muted={false} />
        </div>
      </section>

      {/* ───────────── FEATURE GRID ───────────── */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {[
          {
            icon: <Zap size={20} />,
            title: 'Incredible Speed',
            desc: 'Indexes millions of files in seconds using Windows USN Journal technology. Search results appear with zero lag.',
          },
          {
            icon: <Shield size={20} />,
            title: 'Fully Offline',
            desc: 'Privacy-focused architecture. Foldercop functions completely offline without any network traffic or analytics.',
          },
          {
            icon: <Search size={20} />,
            title: 'Categorization',
            desc: 'Filter results instantly across Images, PDFs, Documents, and Executables with single-click tabs.',
          },
        ].map((f, i) => (
          <div
            key={i}
            className="matte-card p-6 sm:p-7 flex flex-col hover:border-matte-slate-300 dark:hover:border-matte-slate-700 transition-colors"
          >
            <div className="w-10 h-10 bg-matte-cyan-500/10 rounded-lg flex items-center justify-center text-matte-cyan-600 dark:text-matte-cyan-400 mb-4">
              {f.icon}
            </div>
            <h3 className="font-outfit text-lg font-bold text-matte-slate-900 dark:text-white mb-2">
              {f.title}
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* ───────────── CREATORS SECTION ───────────── */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-outfit text-2xl sm:text-3xl font-bold mb-2 text-matte-slate-900 dark:text-white">
            Built by Engineers
          </h2>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm sm:text-base">
            The core team behind the Foldercop indexing engine and interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Yasin Vahora */}
          <div className="matte-card p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
            <div className="w-20 h-20 rounded-lg overflow-hidden border border-matte-slate-200 dark:border-matte-slate-700 shrink-0">
              <img
                src="https://github.com/yasinvahora56.png"
                alt="Yasin Vahora"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-outfit text-lg font-bold text-matte-slate-900 dark:text-white">
                Yasin Vahora
              </h3>
              <p className="text-matte-cyan-600 dark:text-matte-cyan-400 font-medium text-xs uppercase tracking-wider mb-2">
                Lead Developer & Architect
              </p>
              <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm leading-relaxed">
                Engineered the core C++ indexing engine, Windows filesystem integration, and performance optimizations.
              </p>
            </div>
          </div>

          {/* Rahil Vahora */}
          <div className="matte-card p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
            <div className="w-20 h-20 rounded-lg overflow-hidden border border-matte-slate-200 dark:border-matte-slate-700 shrink-0">
              <img
                src="https://github.com/rahil1202.png"
                alt="Rahil Vahora"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-outfit text-lg font-bold text-matte-slate-900 dark:text-white">
                Rahil Vahora
              </h3>
              <p className="text-matte-cyan-600 dark:text-matte-cyan-400 font-medium text-xs uppercase tracking-wider mb-2">
                UX Engineer & Full Stack
              </p>
              <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm leading-relaxed">
                Focused on human-computer interaction, application ergonomics, keyboard navigation, and frontend systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── TRUST CTA ───────────── */}
      <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 max-w-4xl">
        <div className="matte-card bg-matte-slate-900 text-white p-8 sm:p-12 text-center border border-matte-slate-800">
          <h2 className="font-outfit text-2xl sm:text-3xl font-bold mb-3">
            Stop searching. Start finding.
          </h2>
          <p className="text-matte-slate-300 text-sm sm:text-base max-w-lg mx-auto mb-8">
            Foldercop is free, private, and built for daily professional productivity. Install in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.1.0/FolderCop_Setup.exe"
              className="matte-btn-primary px-8 py-3 text-sm sm:text-base w-full sm:w-auto"
            >
              Download Foldercop (Windows)
            </a>
            <a
              href={`https://wa.me/${whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="matte-btn-secondary bg-matte-slate-800 text-white border-matte-slate-700 hover:bg-matte-slate-700 px-6 py-3 text-sm sm:text-base w-full sm:w-auto"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FoldercopSearch
