import React from 'react'
import { Download, Monitor, HardDrive, ShieldCheck, Zap, FileCode, Activity, Droplets, Smartphone } from 'lucide-react'

const Downloads = () => {
  const version = "1.1.0"
  const releaseDate = "June 2026"

  const downloadLinks = {
    x64: {
      setup: "https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.1.0/FolderCop_Setup.exe",
      portable: "https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.1.0/FolderCop_Setup.exe",
      sig: "https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.1.0/FolderCop_Setup.exe"
    },
    x86: {
      setup: "https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.1.0/FolderCop_Setup.exe",
      portable: "https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.1.0/FolderCop_Setup.exe",
      sig: "https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.1.0/FolderCop_Setup.exe"
    }
  }

  const medishopLink = "https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.1.0/FolderCop_Setup.exe"

  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <section className="container mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16">
        <h1 className="hero-title mb-4 max-w-4xl mx-auto">Download Center</h1>
        <p className="text-matte-slate-600 dark:text-matte-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Official release binaries for Foldercop Search and MediShop Pro. Free, signed, and clean.
        </p>
      </section>

      {/* Foldercop Downloads */}
      <section className="container mx-auto px-4 sm:px-6 mb-6 max-w-6xl">
        <h2 className="font-outfit text-2xl font-bold mb-6 flex items-center gap-2.5 text-matte-slate-900 dark:text-white">
          <Monitor className="text-matte-cyan-600 dark:text-matte-cyan-400" size={22} /> Foldercop Search
        </h2>
      </section>

      {/* Main Download Grid */}
      <section className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mb-16">
        {/* X64 SECTION */}
        <div className="matte-card p-6 sm:p-8 flex flex-col justify-between hover:border-matte-slate-300 dark:hover:border-matte-slate-700 transition-colors">
          <div>
            <div className="flex justify-between items-center mb-5">
              <div className="w-10 h-10 bg-matte-cyan-500/10 rounded-lg flex items-center justify-center text-matte-cyan-600 dark:text-matte-cyan-400">
                <Monitor size={20} />
              </div>
              <span className="bg-matte-cyan-50 dark:bg-matte-cyan-950/80 text-matte-cyan-700 dark:text-matte-cyan-300 border border-matte-cyan-200 dark:border-matte-cyan-800 px-2.5 py-0.5 rounded-md text-xs font-semibold">
                Recommended
              </span>
            </div>
            <h3 className="font-outfit text-xl sm:text-2xl font-bold text-matte-slate-900 dark:text-white mb-1.5">
              Windows 64-bit
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm mb-6">Standard architecture for Windows 10/11 64-bit computers.</p>
          </div>
          
          <div className="space-y-3">
            <a href={downloadLinks.x64.setup} className="matte-btn-primary w-full gap-2 py-3 text-sm sm:text-base">
              Download Setup (.exe) <Download size={16} />
            </a>
            <a href={downloadLinks.x64.portable} className="matte-btn-secondary w-full gap-2 py-3 text-sm sm:text-base">
              Download Portable (.zip) <HardDrive size={16} />
            </a>
            <div className="flex justify-center pt-1">
              <a href={downloadLinks.x64.sig} className="text-xs text-matte-slate-500 hover:text-matte-slate-900 dark:hover:text-white flex items-center gap-1.5 transition-colors font-medium">
                <FileCode size={13} /> Verify PGP Signature (.sig)
              </a>
            </div>
          </div>
        </div>

        {/* X86 SECTION */}
        <div className="matte-card p-6 sm:p-8 flex flex-col justify-between hover:border-matte-slate-300 dark:hover:border-matte-slate-700 transition-colors">
          <div>
            <div className="flex justify-between items-center mb-5">
              <div className="w-10 h-10 bg-matte-slate-100 dark:bg-matte-slate-800 rounded-lg flex items-center justify-center text-matte-slate-600 dark:text-matte-slate-400">
                <Monitor size={20} />
              </div>
              <span className="bg-matte-slate-100 dark:bg-matte-slate-800 text-matte-slate-600 dark:text-matte-slate-400 border border-matte-slate-200 dark:border-matte-slate-700 px-2.5 py-0.5 rounded-md text-xs font-semibold">
                Legacy Systems
              </span>
            </div>
            <h3 className="font-outfit text-xl sm:text-2xl font-bold text-matte-slate-900 dark:text-white mb-1.5">
              Windows 32-bit
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm mb-6">Compatible with older legacy 32-bit hardware systems.</p>
          </div>
          
          <div className="space-y-3">
            <a href={downloadLinks.x86.setup} className="matte-btn-secondary w-full gap-2 py-3 text-sm sm:text-base">
              Download Setup (.exe) <Download size={16} />
            </a>
            <a href={downloadLinks.x86.portable} className="matte-btn-secondary w-full gap-2 py-3 text-sm sm:text-base">
              Download Portable (.zip) <HardDrive size={16} />
            </a>
            <div className="flex justify-center pt-1">
              <a href={downloadLinks.x86.sig} className="text-xs text-matte-slate-500 hover:text-matte-slate-900 dark:hover:text-white flex items-center gap-1.5 transition-colors font-medium">
                <FileCode size={13} /> Verify PGP Signature (.sig)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MediShop Pro Downloads */}
      <section className="container mx-auto px-4 sm:px-6 mb-16 max-w-6xl">
        <h2 className="font-outfit text-2xl font-bold mb-6 flex items-center gap-2.5 text-matte-slate-900 dark:text-white">
          <Activity className="text-emerald-600 dark:text-emerald-400" size={22} /> MediShop Pro
        </h2>
        <div className="matte-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-matte-slate-300 dark:hover:border-matte-slate-700 transition-colors">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-outfit text-xl font-bold text-matte-slate-900 dark:text-white">
                Windows Standalone Installer
              </h3>
              <span className="bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 rounded-md text-xs font-semibold">
                Build 1.2
              </span>
            </div>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm max-w-xl">
              Download the current production release of MediShop Pro for medical billing and pharmacy inventory.
            </p>
          </div>
          <div className="shrink-0">
            <a href={medishopLink} className="matte-btn-primary bg-emerald-600 hover:bg-emerald-700 gap-2 py-3 px-6 text-sm sm:text-base w-full sm:w-auto">
              Download Installer (.exe) <Download size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* HydroFlow Water Tracker Downloads */}
      <section className="container mx-auto px-4 sm:px-6 mb-16 max-w-6xl">
        <h2 className="font-outfit text-2xl font-bold mb-6 flex items-center gap-2.5 text-matte-slate-900 dark:text-white">
          <img src="/hydroflow-logo.png" alt="HydroFlow" className="w-6 h-6 rounded-md object-cover inline-block" /> HydroFlow (Water Tracker &amp; Reminder)
        </h2>
        <div className="matte-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-matte-slate-300 dark:hover:border-matte-slate-700 transition-colors border-matte-cyan-500/30">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h3 className="font-outfit text-xl font-bold text-matte-slate-900 dark:text-white">
                Android Standalone Package (.apk)
              </h3>
              <span className="bg-matte-cyan-50 dark:bg-matte-cyan-950/80 text-matte-cyan-700 dark:text-matte-cyan-300 border border-matte-cyan-200 dark:border-matte-cyan-800 px-2.5 py-0.5 rounded-md text-xs font-semibold">
                v1.0.0
              </span>
              <span className="bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 rounded-md text-xs font-semibold">
                100% Free
              </span>
            </div>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm max-w-xl">
              Smart hydration target tracker with customizable alarm reminder periods. 100% free with zero data misuse. Compatible with Android devices.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <a href="https://github.com/vahorayasin117-droid/hydroflow/releases/download/1.0.0/application-e73f3d9f-85bb-449e-86a2-6fedea93ecd1.apk" download className="matte-btn-primary bg-cyan-600 hover:bg-cyan-700 gap-2 py-3 px-6 text-sm sm:text-base w-full sm:w-auto">
              Download APK (.apk) <Download size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: <ShieldCheck className="text-emerald-600 dark:text-emerald-400" size={22} />, title: "Code Signed", desc: "Binaries are digitally signed to guarantee code integrity and safety on Windows." },
            { icon: <Zap className="text-amber-500" size={22} />, title: "Clean Distribution", desc: "No adware, trackers, or hidden analytics. 100% focused on local performance." },
            { icon: <FileCode className="text-matte-cyan-600 dark:text-matte-cyan-400" size={22} />, title: "Inspectable Architecture", desc: "Verifiable releases with transparent changelogs and signature validations." }
          ].map((s, i) => (
            <div key={i} className="matte-card p-6 text-left">
              <div className="w-10 h-10 bg-matte-slate-100 dark:bg-matte-slate-800 rounded-lg flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <h4 className="font-outfit font-bold text-matte-slate-900 dark:text-white mb-1.5 text-base">{s.title}</h4>
              <p className="text-sm text-matte-slate-600 dark:text-matte-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Previous Releases */}
      <section className="container mx-auto px-4 sm:px-6 pb-16 max-w-4xl">
        <h3 className="font-outfit text-xl font-bold text-matte-slate-900 dark:text-white mb-2 text-center">
          Previous Releases
        </h3>
        <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm mb-6 text-center max-w-lg mx-auto">
          Need an archive build? Access verified previous releases below.
        </p>
        <div className="matte-card p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 bg-matte-slate-100 dark:bg-matte-slate-800 rounded-lg flex items-center justify-center text-matte-slate-600 dark:text-matte-slate-400 shrink-0">
              <Download size={18} />
            </div>
            <div>
              <h4 className="font-outfit font-semibold text-matte-slate-900 dark:text-white text-sm sm:text-base">FolderCop v1.0.0</h4>
              <p className="text-xs text-matte-slate-500">Released: April 2026 • Windows 64-bit / 32-bit</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a 
              href="https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.0.0/FolderCop_Setup.exe" 
              className="matte-btn-secondary py-1.5 px-3.5 text-xs"
            >
              Setup (x64)
            </a>
            <a 
              href="https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.0.0/FolderCop_Setup.exe" 
              className="matte-btn-secondary py-1.5 px-3.5 text-xs"
            >
              Setup (x86)
            </a>
          </div>
        </div>
      </section>

      {/* Version Info Summary */}
      <section className="container mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex flex-wrap justify-center items-center gap-6 sm:gap-10 py-3 px-6 rounded-lg bg-matte-slate-50 dark:bg-matte-slate-900/60 border border-matte-slate-200 dark:border-matte-slate-800 text-xs text-matte-slate-600 dark:text-matte-slate-400 font-medium">
          <span>Current Release: <strong className="text-matte-slate-900 dark:text-white">v{version}</strong></span>
          <span className="w-1 h-1 rounded-full bg-matte-slate-300 dark:bg-matte-slate-700 hidden sm:inline-block"></span>
          <span>Date: <strong className="text-matte-slate-900 dark:text-white">{releaseDate}</strong></span>
          <span className="w-1 h-1 rounded-full bg-matte-slate-300 dark:bg-matte-slate-700 hidden sm:inline-block"></span>
          <span>Compatibility: <strong className="text-matte-slate-900 dark:text-white">Windows 10 / 11</strong></span>
        </div>
      </section>
    </div>
  )
}

export default Downloads