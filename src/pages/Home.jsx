import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, Search, Download } from 'lucide-react'
import VideoPlayer from '../components/VideoPlayer'

const Home = () => {
  const whatsapp = '+917990471946'

  return (
    <div className="pt-20 sm:pt-32 pb-24 overflow-hidden">

      {/* ───────────── HERO SECTION ───────────── */}
      <section className="container mx-auto px-4 sm:px-6 text-center relative">
        {/* Glow blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[600px] h-[200px] sm:h-[600px] bg-matte-cyan-500/10 blur-[80px] -z-10 rounded-full" />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-matte-slate-50 dark:bg-matte-slate-900 border border-matte-slate-200 dark:border-matte-slate-800 py-1.5 px-3 sm:px-4 rounded-full text-matte-slate-600 dark:text-matte-slate-400 font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-5 sm:mb-10 shadow-sm animate-in fade-in slide-in-from-bottom duration-700">
          <Zap size={12} className="text-matte-cyan-500 fill-matte-cyan-500" /> Latest version 1.0.0 available
        </div>

        {/* Headline */}
        <h1 className="hero-title mb-3 sm:mb-6 font-extrabold tracking-tighter uppercase underline decoration-matte-cyan-500/30 text-3xl sm:text-6xl md:text-7xl leading-tight">
          Never Search.<br className="sm:hidden" /> Just Find.
        </h1>

        {/* Description */}
        <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-200 px-2">
          Foldercop replaces the slow Windows search with a modern, high-intensity engine.
          From deep project files to system settings, everything is indexed for instant retrieval.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-20 animate-in fade-in slide-in-from-bottom duration-1000 delay-300 px-4">
          <a
            href="https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.0.0/FolderCop_Setup.exe"
            className="matte-btn-primary flex items-center justify-center gap-2 shadow-xl shadow-matte-cyan-500/20 group text-sm sm:text-lg px-6 sm:px-10 py-3 sm:py-4 w-full sm:w-auto"
          >
            Get Foldercop Free <Download size={16} className="transition-transform group-hover:translate-y-1" />
          </a>
          <Link
            to="/about"
            className="matte-btn-secondary flex items-center justify-center gap-2 group text-sm sm:text-lg px-6 sm:px-10 py-3 sm:py-4 w-full sm:w-auto"
          >
            Explore Features <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ── VIDEO SECTION ── */}
        <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-500 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto px-0 sm:px-2">
            <VideoPlayer src="/foldercop.mp4" />
            <VideoPlayer src="/Lets.webm" />
          </div>
        </div>
      </section>

      {/* ───────────── FEATURE GRID ───────────── */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
        {[
          {
            icon: <Zap size={22} />,
            title: 'Incredible Speed',
            desc: 'Indexes millions of files in seconds using Windows USN Journal technology. Searching becomes instant.',
          },
          {
            icon: <Shield size={22} />,
            title: 'Fully Offline',
            desc: 'Privacy is our priority. Foldercop works 100% offline. Your data never leaves your local machine.',
          },
          {
            icon: <Search size={22} />,
            title: 'Categorization',
            desc: 'Switch between Images, PDFs, Documents, and more with a single click. Stay organized automatically.',
          },
        ].map((f, i) => (
          <div
            key={i}
            className="matte-card hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group p-5 sm:p-8"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-matte-cyan-500/10 rounded-2xl flex items-center justify-center text-matte-cyan-600 dark:text-matte-cyan-400 mb-4 sm:mb-6 group-hover:bg-matte-cyan-500 group-hover:text-white transition-colors duration-300">
              {f.icon}
            </div>
            <h3 className="font-outfit text-lg sm:text-xl font-bold text-matte-slate-900 dark:text-white mb-2 sm:mb-3 tracking-tight">
              {f.title}
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 leading-relaxed text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* ───────────── CREATORS SECTION ───────────── */}
      <section className="mx-4 sm:mx-6 px-4 sm:px-8 py-12 sm:py-24 bg-matte-slate-50/50 dark:bg-matte-slate-900/20 rounded-[1.5rem] sm:rounded-[3rem] border border-matte-slate-100 dark:border-matte-slate-800">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-outfit text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 sm:mb-4 tracking-tight">
            Meet the Visionaries.
          </h2>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm sm:text-lg">
            The minds behind the world's fastest file explorer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 max-w-4xl mx-auto">
          {/* Yasin Vahora */}
          <div className="matte-card group relative p-5 sm:p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-matte-cyan-500/5 blur-3xl -z-10 group-hover:bg-matte-cyan-500/10 transition-colors" />
            <div className="mb-5 sm:mb-6 relative">
              <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform overflow-hidden border-2 border-matte-cyan-500/20">
                <img
                  src="https://github.com/yasinvahora56.png"
                  alt="Yasin Vahora"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-matte-cyan-500 text-white p-2 rounded-xl shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <Zap size={14} />
              </div>
            </div>
            <h3 className="font-outfit text-lg sm:text-2xl font-bold text-matte-slate-900 dark:text-white mb-1">
              Yasin Vahora
            </h3>
            <p className="text-matte-cyan-500 font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4">
              Lead Developer & Architect
            </p>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 leading-relaxed italic text-sm">
              "Built for speed, refined for humans. FolderCop is the realization of years of research into
              high-performance file systems."
            </p>
          </div>

          {/* Rahil Vahora */}
          <div className="matte-card group relative p-5 sm:p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/5 blur-3xl -z-10 group-hover:bg-indigo-500/10 transition-colors" />
            <div className="mb-5 sm:mb-6 relative">
              <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-3xl -rotate-3 group-hover:-rotate-6 transition-transform overflow-hidden border-2 border-indigo-500/20">
                <img
                  src="https://github.com/rahil1202.png"
                  alt="Rahil Vahora"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-indigo-500 text-white p-2 rounded-xl shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <Search size={14} />
              </div>
            </div>
            <h3 className="font-outfit text-lg sm:text-2xl font-bold text-matte-slate-900 dark:text-white mb-1">
              Rahil Vahora
            </h3>
            <p className="text-indigo-500 font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4">
              UX Engineer & Full Stack
            </p>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 leading-relaxed italic text-sm">
              "Designing the full-stack rollercoaster. My focus is on making the immense power of our indexing
              engine feel effortless to use."
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── TRUST CTA ───────────── */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-24">
        <div className="matte-card bg-matte-slate-900 dark:bg-matte-slate-900/40 text-white p-6 sm:p-12 md:p-20 text-center relative overflow-hidden group rounded-2xl sm:rounded-3xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-matte-cyan-500/10 blur-[100px] -z-10 group-hover:scale-150 transition-transform duration-1000" />
          <h2 className="font-outfit text-xl sm:text-3xl md:text-5xl font-extrabold mb-4 sm:mb-8 tracking-tight leading-tight">
            Stop searching. Start finding.
          </h2>
          <p className="text-matte-slate-400 text-sm sm:text-lg md:text-xl max-w-xl mx-auto mb-6 sm:mb-12 px-2">
            Foldercop is free, private, and built for professionals. Join the future of Windows file management
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
            <a
              href="https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.0.0/FolderCop_Setup.exe"
              className="matte-btn-primary md:px-12 md:py-4 shadow-2xl shadow-cyan-500/20 active:scale-95 text-sm sm:text-lg w-full sm:w-auto"
            >
              Download Now
            </a>
            <a
              href={`https://wa.me/${whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="matte-btn-secondary bg-white/10 dark:bg-white/5 border-white/20 text-white hover:bg-white/20 active:scale-95 text-sm sm:text-lg w-full sm:w-auto"
            >
              Contact Sales Support
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
