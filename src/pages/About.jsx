import React from 'react'
import { Link } from 'react-router-dom'
import { Rocket, ShieldCheck, Eye, Keyboard, LayoutGrid, Download, Globe, Archive, Zap, Search } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-24 overflow-hidden">
      <section className="container mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
        <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom duration-1000">
          <h1 className="hero-title mb-4 sm:mb-6 font-extrabold tracking-tighter text-4xl sm:text-6xl md:text-7xl">Ultimate Speed. Ultimate Control.</h1>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-2">
            Foldercop was engineered for power users who demand instantaneous file search without compromise. 
            Native Windows performance, built entirely in C++.
          </p>
        </div>
      </section>

      {/* Feature Breakdown Sections */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-24 sm:space-y-40">
        
        {/* 1. Offline & Speed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-24 items-center">
          <div className="matte-card p-8 sm:p-12 bg-white dark:bg-black relative overflow-hidden group border border-matte-slate-100 dark:border-matte-slate-900 shadow-2xl">
            <div className="absolute top-0 left-0 w-32 h-32 bg-matte-cyan-500/10 blur-[60px] -z-10 group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-matte-cyan-500/10 rounded-2xl flex items-center justify-center text-matte-cyan-600 dark:text-matte-cyan-400 mb-6 sm:mb-8">
              <ShieldCheck size={28} />
            </div>
            <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-matte-slate-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
              Privacy First.<br />100% Offline.
            </h2>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-base sm:text-lg leading-relaxed">
              Privacy is not a feature; it is our foundation. Foldercop works entirely offline. 
              Your computer's data remains on your machine. We do not track and we do not store your search history.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
              <div className="bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Zero Tracking</div>
              <div className="bg-matte-cyan-500/10 text-matte-cyan-600 border border-matte-cyan-500/20 px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Fast Index</div>
            </div>
          </div>
          <div>
            <h3 className="text-matte-cyan-500 font-bold uppercase tracking-widest text-sm mb-4">Core Performance</h3>
            <h2 className="font-outfit text-3xl sm:text-4xl md:text-6xl font-extrabold text-matte-slate-900 dark:text-white mb-6 sm:mb-8 tracking-tighter leading-none">
              In-Memory Speed.
            </h2>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-base sm:text-lg leading-relaxed mb-8">
               Utilizing the Windows USN Journal, Foldercop builds a high-performance in-memory index of your drives. 
               This results in instant search results, regardless of how deep your files are buried. 
               Zero lag. Zero waiting.
            </p>
            <div className="flex items-center gap-4 text-matte-slate-900 dark:text-white font-bold">
               <Zap size={20} className="text-matte-cyan-500" /> C++ Powered Engine
            </div>
          </div>
        </div>

        {/* 2. Global Shortcut */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-24 items-center">
           <div className="order-last md:order-first">
             <h3 className="text-matte-cyan-500 font-bold uppercase tracking-widest text-sm mb-4">Accessibility</h3>
             <h2 className="font-outfit text-3xl sm:text-4xl md:text-6xl font-extrabold text-matte-slate-900 dark:text-white mb-6 sm:mb-8 tracking-tighter leading-none">
              One Key Away.
            </h2>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
              No matter what app you are using, Foldercop is always ready. 
              The Win + F2 global shortcut summons the search bar instantly. 
              Hide it just as quickly when you find what you need.
            </p>
            <div className="flex gap-4">
              <div className="bg-matte-slate-100 dark:bg-matte-slate-900 border border-matte-slate-200 dark:border-matte-slate-800 p-3 sm:p-4 rounded-2xl flex items-center justify-center font-bold text-xl sm:text-2xl shadow-sm min-w-[60px] sm:min-w-[80px]">Win</div>
              <div className="flex items-center text-matte-slate-400 text-xl">+</div>
              <div className="bg-matte-cyan-500 border border-matte-cyan-600 p-3 sm:p-4 rounded-2xl flex items-center justify-center font-bold text-xl sm:text-2xl shadow-xl text-white min-w-[60px] sm:min-w-[80px]">F2</div>
            </div>
          </div>
          <div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-matte-cyan-500/10 rounded-2xl flex items-center justify-center text-matte-cyan-600 dark:text-matte-cyan-400 mb-6 sm:mb-8">
              <Keyboard size={28} />
            </div>
            <div className="matte-card bg-[#fcfcfc] dark:bg-matte-slate-950/60 p-8 sm:p-12 border-matte-slate-100 dark:border-matte-slate-900 rounded-[32px] sm:rounded-[40px] shadow-2xl">
               <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-matte-slate-900 dark:text-white mb-4 sm:mb-6">Workflow Accelerated</h3>
               <p className="text-matte-slate-600 dark:text-matte-slate-400 text-base sm:text-lg leading-relaxed">
                 Modern professionals handle hundreds of documents daily. 
                 By removing the friction of finding files, Foldercop saves you hours of cumulative time every week.
               </p>
            </div>
          </div>
        </div>

        {/* 3. Categories & Preview */}
        <div className="matte-card p-8 sm:p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center border-matte-slate-100 dark:border-matte-slate-900 shadow-2xl">
           <div className="w-14 h-14 sm:w-20 sm:h-20 bg-matte-cyan-500/10 rounded-3xl flex items-center justify-center text-matte-cyan-600 dark:text-matte-cyan-400 mb-8 sm:mb-10 mx-auto">
              <LayoutGrid size={32} />
           </div>
           <h2 className="font-outfit text-3xl sm:text-5xl md:text-7xl font-extrabold text-matte-slate-900 dark:text-white mb-8 sm:mb-10 tracking-tighter leading-none max-w-4xl">
             Smart Categorization.
           </h2>
           <p className="text-matte-slate-600 dark:text-matte-slate-400 text-base sm:text-xl max-w-3xl mb-10 sm:mb-16 mx-auto leading-relaxed font-medium">
             Folders, Documents, PDFs, Images, Apps, and Settings. 
             Everything is divided into clear categories so you can filter results in an instant.
           </p>
           
           <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-6 w-full max-w-6xl mx-auto mb-12 sm:mb-20 opacity-80">
             {['Documents', 'PDFs', 'Images', 'Videos', 'Apps', 'Recycle Bin'].map((cat, i) => (
               <div key={i} className="bg-matte-slate-50 dark:bg-white/5 border border-matte-slate-100 dark:border-matte-slate-800 p-3 sm:p-6 rounded-2xl shadow-sm hover:border-matte-cyan-500/50 hover:bg-white dark:hover:bg-white/10 transition-all duration-300">
                  <div className="w-3 h-3 rounded-full bg-matte-cyan-500 mx-auto mb-3 sm:mb-4 blur-[4px]"></div>
                  <span className="text-[9px] sm:text-sm font-bold text-matte-slate-600 dark:text-white uppercase tracking-widest">{cat}</span>
               </div>
             ))}
           </div>

           {/* Preview Feature Details */}
           <div className="bg-matte-slate-900 dark:bg-matte-slate-950 p-8 sm:p-12 md:p-20 rounded-[32px] sm:rounded-[48px] text-left w-full border border-white/10 shadow-[0px_50px_100px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-matte-cyan-500/10 blur-[100px]"></div>
             <div className="flex items-start gap-6 sm:gap-12 flex-col lg:flex-row">
                <div className="bg-white/10 p-4 sm:p-6 rounded-[24px] sm:rounded-[32px] text-white shadow-2xl backdrop-blur-3xl border border-white/20 shrink-0">
                  <Eye size={36} className="text-matte-cyan-400" />
                </div>
                <div>
                   <h3 className="font-outfit text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight">Instant Side Preview</h3>
                   <p className="text-matte-slate-400 text-base sm:text-lg md:text-xl leading-relaxed font-medium opacity-80">
                     A world-class preview engine built directly into your search results. 
                     Check Images, PDFs, Excel sheets, PPTs, Word docs, Audio clips, and Videos instantly 
                     on the right panel without ever opening an external application.
                   </p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <h2 className="font-outfit text-3xl sm:text-4xl md:text-6xl font-extrabold text-matte-slate-900 dark:text-white mb-8 sm:mb-10 tracking-tighter">
          Experience Foldercop Today.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
          <Link to="/downloads" className="matte-btn-primary px-10 sm:px-16 py-4 sm:py-5 text-lg sm:text-xl shadow-2xl shadow-cyan-500/20 active:scale-95 group uppercase tracking-widest w-full sm:w-auto">
             Download Free <Download size={20} className="inline ml-2 group-hover:translate-y-1 transition-transform" />
          </Link>
          <Link to="/contact" className="matte-btn-secondary px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl bg-transparent border-matte-slate-200 dark:border-matte-slate-800 hover:border-matte-cyan-500/50 active:scale-95 w-full sm:w-auto">
             Contact Sales
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutPage