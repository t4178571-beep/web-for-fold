import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, MessageCircle, Heart, Code2, Zap, FileSearch, KeyRound, Infinity } from 'lucide-react'

const team = [
  {
    name: 'Yasin Vahora',
    role: 'Co-Founder & Lead Developer',
    bio: 'Yasin built the core C++ engine behind Foldercop — the high-performance file indexer that makes instant search possible. He handles backend architecture, Windows system integration, and overall product direction.',
    email: '11iamyasin@gmail.com',
    whatsapp: '+917990471946',
    avatar: 'YV',
    color: 'bg-matte-cyan-600',
  },
  {
    name: 'Rahil Vahora',
    role: 'Co-Founder & UI/UX Developer',
    bio: 'Rahil designed and built the Foldercop interface — crafting a clean, fast, and intuitive experience on top of the powerful engine. He focuses on frontend development, design systems, and user experience.',
    email: '11iamyasin@gmail.com',
    whatsapp: '+917990471946',
    avatar: 'RV',
    color: 'bg-slate-700',
  },
]

const AboutUs = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-20">

      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 mb-16 sm:mb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-matte-slate-100 dark:bg-matte-slate-800/80 border border-matte-slate-200 dark:border-matte-slate-700 py-1 px-3.5 rounded-md text-matte-slate-700 dark:text-matte-slate-300 font-medium text-xs mb-6">
          <Heart size={14} className="text-matte-cyan-600 dark:text-matte-cyan-400" />
          <span>About Foldercop</span>
        </div>
        <h1 className="hero-title mb-4 max-w-4xl mx-auto">
          Built by Engineers. For Everyone.
        </h1>
        <p className="text-matte-slate-600 dark:text-matte-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Foldercop was born from practical daily friction: Windows file search was slow, fragile, and inaccurate. We built an in-memory solution that solves it once and for all.
        </p>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 sm:px-6 max-w-4xl mb-16 sm:mb-24">
        <div className="matte-card p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-matte-cyan-500/10 rounded-lg flex items-center justify-center text-matte-cyan-600 dark:text-matte-cyan-400">
              <Code2 size={20} />
            </div>
            <h2 className="font-outfit text-2xl font-bold text-matte-slate-900 dark:text-white">
              Our Story
            </h2>
          </div>
          <div className="space-y-4 text-matte-slate-600 dark:text-matte-slate-400 text-sm sm:text-base leading-relaxed">
            <p>
              We are Yasin and Rahil — two developers from Gujarat, India. Foldercop started with a very real problem we kept seeing around us.
            </p>
            <p>
              A Chartered Accountant we knew was losing hours every single week trying to locate specific client files across deep directory hierarchies. Windows Search was sluggish and frequently failed to locate existing files. For busy knowledge workers handling tens of thousands of documents, this wasted valuable time.
            </p>
            <p>
              We built Foldercop as a dedicated, reliable, and instantaneous file search tool. Yasin wrote the core engine in native <strong className="text-matte-slate-900 dark:text-white font-semibold">C++</strong> using the Windows USN Journal to index entire drives in seconds. Rahil designed the streamlined interface to remain keyboard-focused and lightweight.
            </p>
            <p>
              We believe in transparent, straightforward software: high performance, completely offline, zero surveillance, and no subscription traps.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <span className="bg-matte-slate-100 dark:bg-matte-slate-800 text-matte-slate-700 dark:text-matte-slate-300 border border-matte-slate-200 dark:border-matte-slate-700 px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5">
              <Zap size={13} className="text-matte-cyan-600 dark:text-matte-cyan-400" /> C++ Native Engine
            </span>
            <span className="bg-matte-slate-100 dark:bg-matte-slate-800 text-matte-slate-700 dark:text-matte-slate-300 border border-matte-slate-200 dark:border-matte-slate-700 px-3 py-1 rounded-md text-xs font-semibold">
              100% Offline
            </span>
            <span className="bg-matte-slate-100 dark:bg-matte-slate-800 text-matte-slate-700 dark:text-matte-slate-300 border border-matte-slate-200 dark:border-matte-slate-700 px-3 py-1 rounded-md text-xs font-semibold">
              Transparent Model
            </span>
          </div>
        </div>
      </section>

      {/* Licensing / Philosophy Section */}
      <section className="container mx-auto px-4 sm:px-6 max-w-4xl mb-16 sm:mb-24">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-matte-slate-900 dark:text-white mb-2">
            Straightforward Principles
          </h2>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Our commitment to quality, simplicity, and software respect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <div className="matte-card p-6 flex flex-col hover:border-matte-slate-300 dark:hover:border-matte-slate-700 transition-colors">
            <div className="w-10 h-10 bg-matte-cyan-500/10 rounded-lg flex items-center justify-center text-matte-cyan-600 dark:text-matte-cyan-400 mb-4">
              <KeyRound size={20} />
            </div>
            <h3 className="font-outfit text-base font-bold text-matte-slate-900 dark:text-white mb-1.5">
              Simple Access
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-xs sm:text-sm leading-relaxed">
              No complicated licenses or forced telemetry logins. Download and run without friction.
            </p>
          </div>

          <div className="matte-card p-6 flex flex-col hover:border-matte-slate-300 dark:hover:border-matte-slate-700 transition-colors">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
              <Infinity size={20} />
            </div>
            <h3 className="font-outfit text-base font-bold text-matte-slate-900 dark:text-white mb-1.5">
              Reliable Performance
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-xs sm:text-sm leading-relaxed">
              Built to operate quietly and cleanly on your machine without consuming excess RAM or CPU.
            </p>
          </div>

          <div className="matte-card p-6 flex flex-col hover:border-matte-slate-300 dark:hover:border-matte-slate-700 transition-colors">
            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-300 mb-4">
              <FileSearch size={20} />
            </div>
            <h3 className="font-outfit text-base font-bold text-matte-slate-900 dark:text-white mb-1.5">
              Zero Dark Patterns
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-xs sm:text-sm leading-relaxed">
              No hidden bundled software, no periodic adware popups, and no cloud uploads.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 sm:px-6 max-w-4xl mb-16 sm:mb-24">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-matte-slate-900 dark:text-white mb-2">
            Meet the Founders
          </h2>
          <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm sm:text-base">
            Two developers focused on high-performance desktop tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="matte-card p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 ${member.color} rounded-lg flex items-center justify-center text-white font-outfit font-bold text-base mb-4`}>
                  {member.avatar}
                </div>

                <h3 className="font-outfit text-lg font-bold text-matte-slate-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-matte-cyan-600 dark:text-matte-cyan-400 font-semibold text-xs uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Contact */}
              <div className="flex gap-2.5 pt-4 border-t border-matte-slate-100 dark:border-matte-slate-800">
                <a
                  href={`mailto:${member.email}`}
                  className="p-2 rounded-md bg-matte-slate-50 dark:bg-matte-slate-800 text-matte-slate-600 dark:text-matte-slate-400 border border-matte-slate-200 dark:border-matte-slate-700 hover:text-matte-cyan-600 transition-colors"
                  title="Send Email"
                >
                  <Mail size={15} />
                </a>
                <a
                  href={`https://wa.me/${member.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-matte-slate-50 dark:bg-matte-slate-800 text-emerald-600 dark:text-emerald-400 border border-matte-slate-200 dark:border-matte-slate-700 hover:border-emerald-500/40 transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
        <div className="matte-card bg-matte-slate-900 text-white p-8 sm:p-12 border border-matte-slate-800">
          <h2 className="font-outfit text-2xl sm:text-3xl font-bold mb-3">
            Support the Continued Development
          </h2>
          <p className="text-matte-slate-300 text-sm sm:text-base mb-6 max-w-md mx-auto leading-relaxed">
            Foldercop is free to download and use. If you find value in our work, voluntary contributions help keep the project sustained.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/donate"
              className="matte-btn-primary px-6 py-2.5 text-sm font-medium flex items-center justify-center gap-2"
            >
              <Heart size={15} /> Make a Donation
            </Link>
            <Link
              to="/contact"
              className="matte-btn-secondary bg-matte-slate-800 text-white border-matte-slate-700 hover:bg-matte-slate-700 px-6 py-2.5 text-sm font-medium"
            >
              Contact Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutUs
