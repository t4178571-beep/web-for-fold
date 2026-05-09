import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, MessageCircle, Heart, Folder } from 'lucide-react'

const Footer = () => {
    const email = '11iamyasin@gmail.com'
    const whatsapp = '+917990471946'

  return (
    <footer className="bg-matte-slate-50 dark:bg-black border-t border-matte-slate-100 dark:border-matte-slate-900 pt-16 pb-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="bg-matte-cyan-500 p-1 rounded-lg text-white">
              <Folder size={18} />
            </div>
            <span className="font-outfit text-xl font-bold tracking-tight text-matte-slate-900 dark:text-white">
              Foldercop
            </span>
          </Link>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 mb-6 max-w-sm">
            Experience the future of local file management. Index millions of files in seconds.
          </p>
          <div className="flex gap-4">
            <a 
              href={`mailto:${email}`} 
              className="p-2 rounded-lg bg-white dark:bg-matte-slate-900 text-matte-slate-500 dark:text-matte-slate-400 shadow-sm border border-matte-slate-100 dark:border-matte-slate-800 transition-transform hover:scale-110"
              title="Email Us"
            >
              <Mail size={18} />
            </a>
            <a 
              href={`https://wa.me/${whatsapp.replace('+', '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-matte-slate-900 text-emerald-500 dark:text-emerald-400 shadow-sm border border-matte-slate-100 dark:border-matte-slate-800 transition-transform hover:scale-110"
              title="WhatsApp Us"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-outfit font-bold text-matte-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            <li><Link to="/about" className="text-matte-slate-600 dark:text-matte-slate-400 hover:text-matte-cyan-500 transition-colors">How it works</Link></li>
            <li><Link to="/downloads" className="text-matte-slate-600 dark:text-matte-slate-400 hover:text-matte-cyan-500 transition-colors">Download Stable</Link></li>
            <li><Link to="/donate" className="text-matte-slate-600 dark:text-matte-slate-400 hover:text-matte-cyan-500 transition-colors">Support Development</Link></li>
            <li><Link to="/contact" className="text-matte-slate-600 dark:text-matte-slate-400 hover:text-matte-cyan-500 transition-colors">Get Help</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <div className="matte-card bg-white dark:bg-matte-slate-900/40 p-6 flex flex-col gap-4">
            <h4 className="font-outfit font-bold text-matte-slate-900 dark:text-white">Built for Efficiency</h4>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm">
              Foldercop is available and free for everyone. Supporting the project helps keep it alive.
            </p>
            <Link to="/donate" className="matte-btn-primary py-2 text-center text-sm shadow-md">
              <Heart size={14} className="inline-block mr-2" /> Buy me a Coffee
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-matte-slate-100 dark:border-matte-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-matte-slate-500 dark:text-matte-slate-500 text-sm font-medium">
          &copy; 2026 Foldercop. All rights reserved.
        </p>
        <p className="text-matte-slate-500 dark:text-matte-slate-500 text-sm font-medium flex items-center">
          Built by <span className="text-matte-slate-900 dark:text-white ml-1.5 font-bold tracking-tight">Yasin & Rahil</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
