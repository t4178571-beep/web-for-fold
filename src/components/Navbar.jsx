import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Foldercop Search', path: '/foldercop-search' },
    { name: 'MediShop Pro', path: '/medical-software' },
    { name: 'HydroFlow', path: '/water-tracker' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-200 border-b ${scrolled ? 'bg-white/95 dark:bg-brand-black/95 backdrop-blur-md border-matte-slate-200 dark:border-matte-slate-800 shadow-sm py-3.5' : 'bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm border-matte-slate-100 dark:border-matte-slate-900 py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="Foldercop logo"
            width="32"
            height="32"
            className="w-8 h-8 object-contain"
          />
          <span className="font-outfit text-xl font-bold tracking-tight text-matte-slate-900 dark:text-white">
            Foldercop
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-matte-slate-200 dark:border-matte-slate-800 bg-matte-slate-50 dark:bg-matte-slate-900 text-matte-slate-600 dark:text-matte-slate-400 hover:text-matte-slate-900 dark:hover:text-white transition-colors"
            title="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggleTheme} className="p-2 rounded-lg border border-matte-slate-200 dark:border-matte-slate-800 text-matte-slate-600 dark:text-matte-slate-400">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg border border-matte-slate-200 dark:border-matte-slate-800 text-matte-slate-900 dark:text-white">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-brand-black border-b border-matte-slate-200 dark:border-matte-slate-800 py-4 px-6 flex flex-col gap-3 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-1.5 transition-colors ${location.pathname === link.path ? 'text-matte-cyan-600 dark:text-matte-cyan-400 font-semibold' : 'text-matte-slate-600 dark:text-matte-slate-400 hover:text-matte-slate-900 dark:hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
