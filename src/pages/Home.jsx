import { Link } from 'react-router-dom'
import { ArrowRight, Search, Activity, Package, Droplets } from 'lucide-react'

const Home = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-20">
      {/* ───────────── HERO SECTION ───────────── */}
      <section className="container mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-matte-slate-100 dark:bg-matte-slate-800/80 border border-matte-slate-200 dark:border-matte-slate-700 py-1 px-3.5 rounded-md text-matte-slate-700 dark:text-matte-slate-300 font-medium text-xs mb-6">
          <Package size={14} className="text-matte-cyan-600 dark:text-matte-cyan-400" />
          <span>Foldercop Software Suite</span>
        </div>

        <h1 className="hero-title mb-4 sm:mb-6 max-w-4xl mx-auto">
          Tools That Drive Productivity.
        </h1>

        <p className="text-matte-slate-600 dark:text-matte-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-12 sm:mb-16 leading-relaxed">
          High-performance desktop &amp; mobile utilities engineered for speed, privacy, and seamless daily workflow.
        </p>

        {/* ───────────── PRODUCT GRID ───────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto text-left">
          
          {/* Foldercop Search Card */}
          <div className="matte-card p-6 sm:p-7 flex flex-col h-full hover:border-matte-slate-300 dark:hover:border-matte-slate-700 transition-colors">
            <div className="w-11 h-11 bg-matte-cyan-500/10 rounded-lg flex items-center justify-center text-matte-cyan-600 dark:text-matte-cyan-400 mb-5">
              <Search size={22} />
            </div>
            <h2 className="font-outfit text-xl font-bold text-matte-slate-900 dark:text-white mb-2">
              Foldercop Search
            </h2>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              Instant local file search engine for Windows. Indexes millions of files within seconds using direct filesystem journal access. 100% offline.
            </p>
            <div>
              <Link to="/foldercop-search" className="matte-btn-primary gap-2 w-full text-sm">
                Explore Foldercop <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Medical Software Card */}
          <div className="matte-card p-6 sm:p-7 flex flex-col h-full hover:border-matte-slate-300 dark:hover:border-matte-slate-700 transition-colors">
            <div className="w-11 h-11 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-5">
              <Activity size={22} />
            </div>
            <h2 className="font-outfit text-xl font-bold text-matte-slate-900 dark:text-white mb-2">
              MediShop Pro
            </h2>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              Medical billing and pharmacy inventory management software. Designed for precision, compliance, and streamlined counter operations.
            </p>
            <div>
              <Link to="/medical-software" className="matte-btn-primary bg-emerald-600 hover:bg-emerald-700 gap-2 w-full text-sm">
                Explore MediShop Pro <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* HydroFlow Water Tracker Card */}
          <div className="matte-card p-6 sm:p-7 flex flex-col h-full border-matte-cyan-500/30 hover:border-matte-cyan-500 transition-colors relative overflow-hidden">
            <div className="w-11 h-11 rounded-lg overflow-hidden mb-5 shadow-sm border border-cyan-500/20">
              <img src="/hydroflow-logo.png" alt="HydroFlow" className="w-full h-full object-cover" />
            </div>
            <h2 className="font-outfit text-xl font-bold text-matte-slate-900 dark:text-white mb-2 flex items-center gap-2">
              HydroFlow <span className="text-[10px] uppercase font-bold tracking-wider bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 px-2 py-0.5 rounded-full">Free App</span>
            </h2>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              Smart daily water intake tracker with customizable alarm period alerts. 100% free, zero data misuse, and offline safe.
            </p>
            <div>
              <Link to="/water-tracker" className="matte-btn-primary bg-cyan-600 hover:bg-cyan-700 gap-2 w-full text-sm">
                Explore HydroFlow <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Home
