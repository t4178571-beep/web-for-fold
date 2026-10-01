import { Link } from 'react-router-dom'
import { ArrowRight, Activity, ShieldPlus, Stethoscope, Download } from 'lucide-react'

const MedicalSoftware = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-20">
      {/* ───────────── HERO SECTION ───────────── */}
      <section className="container mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-matte-slate-100 dark:bg-matte-slate-800/80 border border-matte-slate-200 dark:border-matte-slate-700 py-1 px-3.5 rounded-md text-matte-slate-700 dark:text-matte-slate-300 font-medium text-xs mb-6">
          <Activity size={14} className="text-emerald-600 dark:text-emerald-400" />
          <span>MediShop Pro 1.3.0 in Active Development</span>
        </div>

        <h1 className="hero-title mb-4 sm:mb-6 max-w-4xl mx-auto">
          Next-Gen Medical Billing & Management.
        </h1>

        <p className="text-matte-slate-600 dark:text-matte-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          MediShop Pro is built to streamline pharmacy inventory and medical billing workflows.
          Fast, accurate, and completely secure for all clinical and retail needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16">
          <a
            href="https://github.com/yasinvahora56/foldercop-releses/releases/download/v1.1.0/FolderCop_Setup.exe" 
            className="matte-btn-primary bg-emerald-600 hover:bg-emerald-700 gap-2 text-sm sm:text-base px-6 py-3 w-full sm:w-auto text-white"
          >
            Download Old Version <Download size={16} />
          </a>
          <Link
            to="/contact"
            className="matte-btn-secondary gap-2 text-sm sm:text-base px-6 py-3 w-full sm:w-auto"
          >
            Get Early Access <ArrowRight size={16} />
          </Link>
        </div>

        {/* ── VIDEO SECTION ── */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-matte-slate-50 dark:bg-matte-slate-900 rounded-xl aspect-video flex items-center justify-center border border-matte-slate-200 dark:border-matte-slate-800">
            <div className="text-center p-6">
              <Activity size={36} className="mx-auto text-emerald-600 dark:text-emerald-400 mb-3 opacity-60" />
              <p className="text-matte-slate-600 dark:text-matte-slate-400 font-medium text-sm">Product Demo Video Coming Soon</p>
              <p className="text-matte-slate-400 dark:text-matte-slate-500 text-xs mt-1">Our updated workflow walkthrough is being finalized.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── FEATURE GRID ───────────── */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {[
          {
            icon: <Activity size={20} />,
            title: 'Inventory Tracking',
            desc: 'Real-time stock alerts for low inventory and expiring medicines. Prevent stockouts and reduce inventory waste.',
          },
          {
            icon: <ShieldPlus size={20} />,
            title: 'Compliance & Security',
            desc: 'Medical-grade data protection to ensure patient billing records remain confidential, encrypted, and compliant.',
          },
          {
            icon: <Stethoscope size={20} />,
            title: 'Prescription Management',
            desc: 'Easily log, verify, and fulfill prescriptions, reducing dispensing errors and saving counter checkout time.',
          },
        ].map((f, i) => (
          <div
            key={i}
            className="matte-card p-6 sm:p-7 flex flex-col hover:border-matte-slate-300 dark:hover:border-matte-slate-700 transition-colors"
          >
            <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
              {f.icon}
            </div>
            <h3 className="font-outfit text-lg font-bold text-matte-slate-900 dark:text-white mb-2">
              {f.title}
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default MedicalSoftware
