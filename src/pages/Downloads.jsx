import React from 'react'
import { Download, Monitor, HardDrive, ShieldCheck, Zap, FileCode } from 'lucide-react'

const Downloads = () => {
    const version = "1.0.0"
    const releaseDate = "April 2026"

    const downloadLinks = {
        x64: {
            setup: "https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.0.0/FolderCop_Setup.exe",
            portable: "https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.0.0/FolderCop_Setup.exe",
            sig: "https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.0.0/FolderCop_Setup.exe"
        },
        x86: {
            setup: "https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.0.0/FolderCop_Setup.exe",
            portable: "https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.0.0/FolderCop_Setup.exe",
            sig: "https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.0.0/FolderCop_Setup.exe"
        }
    }

  return (
    <div className="pt-32 pb-24 overflow-hidden">
      <section className="container mx-auto px-6 text-center mb-20 animate-in fade-in slide-in-from-bottom duration-1000">
        <h1 className="hero-title mb-6">Get Foldercop.</h1>
        <p className="text-matte-slate-600 dark:text-matte-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          The ultimate engine for Windows. Fast, offline, and free forever.
        </p>
      </section>

      {/* Main Download Grid */}
      <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
        {/* X64 SECTION */}
        <div className="matte-card p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden border-2 border-matte-cyan-500/10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-matte-cyan-500/5 blur-[80px] -z-10 group-hover:scale-150 transition-transform duration-1000"></div>
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 bg-matte-cyan-500/10 rounded-2xl flex items-center justify-center text-matte-cyan-600 dark:text-matte-cyan-400">
              <Monitor size={28} />
            </div>
            <div className="bg-matte-cyan-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-cyan-500/20">
              Recommended
            </div>
          </div>
          <h2 className="font-outfit text-3xl font-extrabold text-matte-slate-900 dark:text-white mb-2">
            Windows 64-bit
          </h2>
          <p className="text-matte-slate-500 dark:text-matte-slate-400 mb-8 font-medium">Standard architecture for modern PCs.</p>
          
          <div className="space-y-4">
             <a href={downloadLinks.x64.setup} className="matte-btn-primary w-full flex justify-center items-center gap-3 py-4 text-lg shadow-xl shadow-cyan-500/10 group">
                Download Setup (x64) <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
             </a>
             <a href={downloadLinks.x64.portable} className="matte-btn-secondary w-full flex justify-center items-center gap-3 py-4 text-lg border-matte-slate-200 dark:border-matte-slate-800 bg-transparent hover:bg-matte-slate-50 dark:hover:bg-matte-slate-900 group">
                Download Portable (Zip) <HardDrive size={20} className="group-hover:translate-y-0.5 transition-transform" />
             </a>
             <div className="flex justify-center">
                <a href={downloadLinks.x64.sig} className="text-xs text-matte-slate-400 hover:text-matte-cyan-500 flex items-center gap-1.5 transition-colors font-bold uppercase tracking-tighter">
                   <FileCode size={14} /> Verify Signature (.sig)
                </a>
             </div>
          </div>
        </div>

        {/* X86 SECTION */}
        <div className="matte-card p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden border-2 border-matte-slate-100 dark:border-matte-slate-800">
          <div className="absolute top-0 right-0 w-48 h-48 bg-matte-slate-500/5 blur-[80px] -z-10 group-hover:scale-150 transition-transform duration-1000"></div>
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 bg-matte-slate-100 dark:bg-matte-slate-800 rounded-2xl flex items-center justify-center text-matte-slate-500">
              <Monitor size={28} />
            </div>
            <div className="bg-matte-slate-100 dark:bg-matte-slate-800 px-4 py-1 rounded-full text-xs font-bold text-matte-slate-500 border border-matte-slate-200 dark:border-matte-slate-700">
              Legacy Systems
            </div>
          </div>
          <h2 className="font-outfit text-3xl font-extrabold text-matte-slate-900 dark:text-white mb-2">
            Windows 32-bit
          </h2>
          <p className="text-matte-slate-500 dark:text-matte-slate-400 mb-8 font-medium">For older hardware and x86 architectures.</p>
          
          <div className="space-y-4">
             <a href={downloadLinks.x86.setup} className="matte-btn-secondary w-full flex justify-center items-center gap-3 py-4 text-lg border-matte-slate-200 dark:border-matte-slate-800 bg-transparent hover:bg-matte-slate-50 dark:hover:bg-matte-slate-900 group">
                Download Setup (x86) <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
             </a>
             <a href={downloadLinks.x86.portable} className="matte-btn-secondary w-full flex justify-center items-center gap-3 py-4 text-lg border-matte-slate-200 dark:border-matte-slate-800 bg-transparent hover:bg-matte-slate-50 dark:hover:bg-matte-slate-900 group">
                Download Portable (Zip) <HardDrive size={20} className="group-hover:translate-y-0.5 transition-transform" />
             </a>
             <div className="flex justify-center">
                <a href={downloadLinks.x86.sig} className="text-xs text-matte-slate-400 hover:text-matte-cyan-500 flex items-center gap-1.5 transition-colors font-bold uppercase tracking-tighter">
                   <FileCode size={14} /> Verify Signature (.sig)
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="container mx-auto px-6 py-32 max-w-5xl">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
               { icon: <ShieldCheck className="text-emerald-500" />, title: "Code Signed", desc: "Our binaries are signed to ensure authenticity and prevent tampering." },
               { icon: <Zap className="text-amber-500" />, title: "Clean Build", desc: "100% free of ads, malware, or tracking. Simple and direct software." },
               { icon: <FileCode className="text-matte-cyan-500" />, title: "Open Source", desc: "Build it yourself or inspect our core logic on GitHub anytime." }
            ].map((s, i) => (
               <div key={i} className="text-center p-6">
                  <div className="w-12 h-12 bg-white dark:bg-matte-slate-900 shadow-md rounded-xl flex items-center justify-center mx-auto mb-6">
                     {s.icon}
                  </div>
                  <h4 className="font-outfit font-bold text-matte-slate-900 dark:text-white mb-2">{s.title}</h4>
                  <p className="text-sm text-matte-slate-500 dark:text-matte-slate-400 leading-relaxed">{s.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* Version History / Footer Section */}
      <section className="container mx-auto px-6 pb-24 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 opacity-60">
           <div>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-matte-slate-500 mb-2">Current Stable</p>
              <h4 className="text-matte-slate-900 dark:text-white font-outfit text-2xl font-bold">v{version}</h4>
           </div>
           <div>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-matte-slate-500 mb-2">Released On</p>
              <h4 className="text-matte-slate-900 dark:text-white font-outfit text-2xl font-bold">{releaseDate}</h4>
           </div>
           <div>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-matte-slate-500 mb-2">Platform</p>
              <h4 className="text-matte-slate-900 dark:text-white font-outfit text-2xl font-bold">Windows 10/11</h4>
           </div>
        </div>
      </section>
    </div>
  )
}

export default Downloads
