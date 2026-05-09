import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, Search, Download } from 'lucide-react'
import SearchAnimation from '../components/SearchAnimation'

const Home = () => {
    const whatsapp = '+917990471946'

  return (
    <div className="pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-6 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-matte-cyan-500/10 blur-[100px] -z-10 rounded-full"></div>
        <div className="inline-flex items-center gap-2 bg-matte-slate-50 dark:bg-matte-slate-900 border border-matte-slate-200 dark:border-matte-slate-800 py-1.5 px-4 rounded-full text-matte-slate-600 dark:text-matte-slate-400 font-bold text-xs uppercase tracking-widest mb-10 shadow-sm animate-in fade-in slide-in-from-bottom duration-700">
          <Zap size={14} className="text-matte-cyan-500 fill-matte-cyan-500" /> Latest version 1.0.0 available
        </div>
        <h1 className="hero-title mb-6 font-extrabold tracking-tighter uppercase underline decoration-matte-cyan-500/30">Never Search. Just Find.</h1>
        <p className="text-matte-slate-600 dark:text-matte-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
          Foldercop replaces the slow Windows search with a modern, high-intensity engine. 
          From deep project files to system settings, everything is indexed for instant retrieval.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
          <a href="/FolderCop_Setup.exe" download="FolderCop_Setup.exe" className="matte-btn-primary flex items-center gap-2 shadow-xl shadow-matte-cyan-500/20 group text-lg px-10">
            Get Foldercop Free <Download size={20} className="transition-transform group-hover:translate-y-1" />
          </a>
          <Link to="/about" className="matte-btn-secondary flex items-center gap-2 group text-lg px-10">
            Explore Features <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Animated Search UI */}
        <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-500 px-2">
            <SearchAnimation />
        </div>
      </section>

      {/* Feature Grid */}
      <section className="container mx-auto px-6 py-40 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Zap size={24} />, title: 'Incredible Speed', desc: 'Indexes millions of files in seconds using Windows USN Journal technology. Searching becomes instant.' },
          { icon: <Shield size={24} />, title: 'Fully Offline', desc: 'Privacy is our priority. Foldercop works 100% offline. Your data never leaves your local machine.' },
          { icon: <Search size={24} />, title: 'Categorization', desc: 'Switch between Images, PDFs, Documents, and more with a single click. Stay organized automatically.' }
        ].map((f, i) => (
          <div key={i} className="matte-card hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-matte-cyan-500/10 rounded-2xl flex items-center justify-center text-matte-cyan-600 dark:text-matte-cyan-400 mb-6 group-hover:bg-matte-cyan-500 group-hover:text-white transition-colors duration-300">
              {f.icon}
            </div>
            <h3 className="font-outfit text-xl font-bold text-matte-slate-900 dark:text-white mb-3 tracking-tight">
              {f.title}
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 leading-relaxed text-sm">
              {f.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Creators Section */}
      <section className="container mx-auto px-6 py-24 bg-matte-slate-50/50 dark:bg-matte-slate-900/20 rounded-[3rem] border border-matte-slate-100 dark:border-matte-slate-800">
        <div className="text-center mb-16">
          <h2 className="font-outfit text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Meet the Visionaries.</h2>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 text-lg">The minds behind the world's fastest file explorer.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Yasin Vahora */}
          <div className="matte-card group relative p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500">
             <div className="absolute top-0 right-0 w-32 h-32 bg-matte-cyan-500/5 blur-3xl -z-10 group-hover:bg-matte-cyan-500/10 transition-colors"></div>
             <div className="mb-6 relative">
                <div className="w-32 h-32 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform overflow-hidden relative border-2 border-matte-cyan-500/20">
                   <img src="https://github.com/yasinvahora56.png" alt="Yasin Vahora" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-500" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-matte-cyan-500 text-white p-2 rounded-xl shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                   <Zap size={16} />
                </div>
             </div>
             <h3 className="font-outfit text-2xl font-bold text-matte-slate-900 dark:text-white mb-1">Yasin Vahora</h3>
             <p className="text-matte-cyan-500 font-bold text-sm uppercase tracking-widest mb-4">Lead Developer & Architect</p>
             <p className="text-matte-slate-600 dark:text-matte-slate-400 leading-relaxed italic">
               "Built for speed, refined for humans. FolderCop is the realization of years of research into high-performance file systems."
             </p>
          </div>

          {/* Rahil Vahora */}
          <div className="matte-card group relative p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500">
             <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/5 blur-3xl -z-10 group-hover:bg-indigo-500/10 transition-colors"></div>
             <div className="mb-6 relative">
                <div className="w-32 h-32 rounded-3xl -rotate-3 group-hover:-rotate-6 transition-transform overflow-hidden relative border-2 border-indigo-500/20">
                   <img src="https://github.com/rahil1202.png" alt="Rahil Vahora" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-500" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-indigo-500 text-white p-2 rounded-xl shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                   <Search size={16} />
                </div>
             </div>
             <h3 className="font-outfit text-2xl font-bold text-matte-slate-900 dark:text-white mb-1">Rahil Vahora</h3>
             <p className="text-indigo-500 font-bold text-sm uppercase tracking-widest mb-4">UX Engineer & Full Stack</p>
             <p className="text-matte-slate-600 dark:text-matte-slate-400 leading-relaxed italic">
               "Designing the full-stack rollercoaster. My focus is on making the immense power of our indexing engine feel effortless to use."
             </p>
          </div>
        </div>
      </section>

      {/* Trust CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="matte-card bg-matte-slate-900 dark:bg-matte-slate-900/40 text-white p-12 md:p-20 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-matte-cyan-500/10 blur-[100px] -z-10 group-hover:scale-150 transition-transform duration-1000"></div>
          <h2 className="font-outfit text-3xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight">
            Stop searching. Start finding.
          </h2>
          <p className="text-matte-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-12">
            Foldercop is free, private, and built for professionals. Join the future of Windows file management today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/FolderCop_Setup.exe" download="FolderCop_Setup.exe" className="matte-btn-primary md:px-12 md:py-4 shadow-2xl shadow-cyan-500/20 active:scale-95 text-lg">
              Download Now
            </a>
            <a href={`https://wa.me/${whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="matte-btn-secondary bg-white/10 dark:bg-white/5 border-white/20 text-white hover:bg-white/20 active:scale-95 text-lg">
              Contact Sales Support
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
