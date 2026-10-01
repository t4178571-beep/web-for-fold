import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, MessageCircle, Heart } from 'lucide-react'

const Footer = () => {
    const email = '11iamyasin@gmail.com'
    const whatsapp = '+917990471946'

  return (
    <footer className="bg-matte-slate-50 dark:bg-brand-black border-t border-matte-slate-200 dark:border-matte-slate-800 pt-12 sm:pt-16 pb-10 sm:pb-12">
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <img
              src="/logo.png"
              alt="Foldercop logo"
              width="28"
              height="28"
              className="w-7 h-7 object-contain"
            />
            <span className="font-outfit text-xl font-bold tracking-tight text-matte-slate-900 dark:text-white">
              Foldercop
            </span>
          </Link>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 mb-5 max-w-sm text-sm leading-relaxed">
            High-performance local file indexing and management software. Built for speed, privacy, and precision.
          </p>
          <div className="flex gap-3">
            <a 
              href={`mailto:${email}`} 
              className="p-2 rounded-lg bg-white dark:bg-matte-slate-900 text-matte-slate-600 dark:text-matte-slate-400 shadow-sm border border-matte-slate-200 dark:border-matte-slate-800 hover:text-matte-cyan-600 dark:hover:text-matte-cyan-400 hover:border-matte-slate-300 dark:hover:border-matte-slate-700 transition-colors"
              title="Email Us"
            >
              <Mail size={16} />
            </a>
            <a 
              href={`https://wa.me/${whatsapp.replace('+', '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-matte-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm border border-matte-slate-200 dark:border-matte-slate-800 hover:border-emerald-500/40 transition-colors"
              title="WhatsApp Us"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-outfit font-semibold text-matte-slate-900 dark:text-white mb-4 text-xs uppercase tracking-wider">
            Navigation
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li><Link to="/water-tracker" className="text-matte-cyan-600 dark:text-matte-cyan-400 hover:text-matte-cyan-700 dark:hover:text-matte-cyan-300 transition-colors text-sm font-medium">HydroFlow (Water Tracker)</Link></li>
            <li><Link to="/about" className="text-matte-slate-600 dark:text-matte-slate-400 hover:text-matte-slate-900 dark:hover:text-white transition-colors text-sm">How it works</Link></li>
            <li><Link to="/downloads" className="text-matte-slate-600 dark:text-matte-slate-400 hover:text-matte-slate-900 dark:hover:text-white transition-colors text-sm">Download Stable</Link></li>
            <li><Link to="/donate" className="text-matte-slate-600 dark:text-matte-slate-400 hover:text-matte-slate-900 dark:hover:text-white transition-colors text-sm">Support Development</Link></li>
            <li><Link to="/contact" className="text-matte-slate-600 dark:text-matte-slate-400 hover:text-matte-slate-900 dark:hover:text-white transition-colors text-sm">Get Help</Link></li>
            <li><Link to="/about-us" className="text-matte-slate-600 dark:text-matte-slate-400 hover:text-matte-slate-900 dark:hover:text-white transition-colors text-sm">About Us</Link></li>
            <li><Link to="/privacy-policy" className="text-matte-slate-600 dark:text-matte-slate-400 hover:text-matte-slate-900 dark:hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="sm:col-span-2 md:col-span-1">
          <div className="matte-card p-5 flex flex-col gap-3">
            <h4 className="font-outfit font-semibold text-matte-slate-900 dark:text-white text-sm">Support the Project</h4>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-xs leading-relaxed">
              Foldercop is developed independently. Your contributions help support continued development and maintenance.
            </p>
            <Link to="/donate" className="matte-btn-primary py-2 px-4 text-xs">
              <Heart size={14} className="inline-block mr-1.5" /> Donate via UPI
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 mt-10 pt-6 border-t border-matte-slate-200 dark:border-matte-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-matte-slate-500 dark:text-matte-slate-500 text-xs text-center sm:text-left">
          &copy; 2026 Foldercop. All rights reserved.
        </p>
        <p className="text-matte-slate-500 dark:text-matte-slate-500 text-xs flex items-center">
          Built by <span className="text-matte-slate-800 dark:text-matte-slate-200 ml-1 font-semibold">Yasin & Rahil</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer