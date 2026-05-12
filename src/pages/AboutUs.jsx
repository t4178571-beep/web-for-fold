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
    color: 'bg-matte-cyan-500',
  },
  {
    name: 'Rahil Vahora',
    role: 'Co-Founder & UI/UX Developer',
    bio: 'Rahil designed and built the Foldercop interface — crafting a clean, fast, and intuitive experience on top of the powerful engine. He focuses on frontend development, design systems, and user experience.',
    email: '11iamyasin@gmail.com',
    whatsapp: '+917990471946',
    avatar: 'RV',
    color: 'bg-violet-500',
  },
]

const AboutUs = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-24 overflow-hidden">

      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 mb-16 sm:mb-24 text-center animate-in fade-in slide-in-from-bottom duration-1000">
        <div className="inline-flex items-center gap-2 bg-matte-cyan-500/10 py-1.5 px-4 rounded-full text-matte-cyan-600 dark:text-matte-cyan-400 font-bold text-xs uppercase tracking-widest mb-8 border border-matte-cyan-500/20">
          <Heart size={14} className="fill-matte-cyan-500" /> About Us
        </div>
        <h1 className="hero-title mb-4 sm:mb-6 font-extrabold tracking-tighter text-4xl sm:text-6xl md:text-7xl">
          Built by Two Developers.<br />For Everyone.
        </h1>
        <p className="text-matte-slate-600 dark:text-matte-slate-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-2">
          Foldercop started as a personal frustration — Windows file search was too slow, too clunky, 
          and too dependent on the cloud. So we built something better.
        </p>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 sm:px-6 max-w-4xl mb-20 sm:mb-32">
        <div className="matte-card p-8 sm:p-14 bg-white dark:bg-matte-slate-900/40 border border-matte-slate-100 dark:border-matte-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-matte-cyan-500/5 blur-[100px] pointer-events-none" />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-matte-cyan-500/10 rounded-xl flex items-center justify-center text-matte-cyan-500">
              <Code2 size={20} />
            </div>
            <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-matte-slate-900 dark:text-white tracking-tight">
              Our Story
            </h2>
          </div>
          <div className="space-y-5 text-matte-slate-600 dark:text-matte-slate-400 text-base sm:text-lg leading-relaxed">
            <p>
              We are Yasin and Rahil — two developers from Gujarat, India. Foldercop started with a very real problem we kept seeing around us.
            </p>
            <p>
              A Chartered Accountant we knew was losing hours every single week just trying to locate client files. Sometimes the file was right there on the drive, but Windows Search either took forever to find it — or worse, <strong className="text-matte-slate-900 dark:text-white">couldn't find it at all</strong>. For professionals handling thousands of documents, this was not a minor annoyance. It was a daily productivity killer.
            </p>
            <p>
              That became the problem we wanted to solve. We built Foldercop as a <strong className="text-matte-slate-900 dark:text-white">fast, reliable, and accurate file search tool</strong> — one that actually finds every file on your system, instantly, without failing.
            </p>
            <p>
              Yasin wrote the core engine in <strong className="text-matte-slate-900 dark:text-white">C++</strong>, leveraging the Windows USN Journal to build an in-memory index of your entire drive in seconds. Rahil designed the interface to be clean and keyboard-friendly so you can find anything without breaking your workflow.
            </p>
            <p>
              Foldercop is <strong className="text-matte-slate-900 dark:text-white">not free</strong> — it is a paid, professional product. But we believe in fair pricing: you pay <strong className="text-matte-slate-900 dark:text-white">once</strong>, and that's it. No subscriptions, no hidden fees, no recurring charges. Lifetime access, always.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="bg-matte-cyan-500/10 text-matte-cyan-600 border border-matte-cyan-500/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Zap size={12} /> Built in C++
            </div>
            <div className="bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              100% Offline
            </div>
            <div className="bg-violet-500/10 text-violet-600 border border-violet-500/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              One-Time Payment
            </div>
          </div>
        </div>
      </section>

      {/* Licensing Section */}
      <section className="container mx-auto px-4 sm:px-6 max-w-4xl mb-20 sm:mb-32">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-matte-slate-900 dark:text-white tracking-tighter mb-4">
            Simple, Honest Pricing.
          </h2>
          <p className="text-matte-slate-500 dark:text-matte-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Pay once. Own it forever. No surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">

          <div className="matte-card p-6 sm:p-8 bg-white dark:bg-matte-slate-900/40 border border-matte-slate-100 dark:border-matte-slate-800 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-matte-cyan-500/10 rounded-xl flex items-center justify-center text-matte-cyan-500 mb-5">
              <KeyRound size={22} />
            </div>
            <h3 className="font-outfit text-lg font-extrabold text-matte-slate-900 dark:text-white mb-2 tracking-tight">
              One-Time Purchase
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm leading-relaxed">
              Buy your license key once. That is the only payment you will ever make for Foldercop.
            </p>
          </div>

          <div className="matte-card p-6 sm:p-8 bg-white dark:bg-matte-slate-900/40 border border-matte-slate-100 dark:border-matte-slate-800 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-5">
              <Infinity size={22} />
            </div>
            <h3 className="font-outfit text-lg font-extrabold text-matte-slate-900 dark:text-white mb-2 tracking-tight">
              Lifetime Access
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm leading-relaxed">
              Your license never expires. Use Foldercop on your machine for as long as you want.
            </p>
          </div>

          <div className="matte-card p-6 sm:p-8 bg-white dark:bg-matte-slate-900/40 border border-matte-slate-100 dark:border-matte-slate-800 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center text-violet-500 mb-5">
              <FileSearch size={22} />
            </div>
            <h3 className="font-outfit text-lg font-extrabold text-matte-slate-900 dark:text-white mb-2 tracking-tight">
              Zero Extra Fees
            </h3>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm leading-relaxed">
              No subscriptions. No renewal charges. No hidden costs. Ever.
            </p>
          </div>

        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl mb-20 sm:mb-32">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-matte-slate-900 dark:text-white tracking-tighter mb-4">
            Meet the Team
          </h2>
          <p className="text-matte-slate-500 dark:text-matte-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Two people. One mission. Make file search fast for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="matte-card p-8 sm:p-10 bg-white dark:bg-matte-slate-900/40 border border-matte-slate-100 dark:border-matte-slate-800 shadow-xl hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Avatar */}
              <div className={`w-16 h-16 ${member.color} rounded-2xl flex items-center justify-center text-white font-outfit font-black text-xl mb-6 shadow-lg`}>
                {member.avatar}
              </div>

              <h3 className="font-outfit text-xl sm:text-2xl font-extrabold text-matte-slate-900 dark:text-white mb-1 tracking-tight">
                {member.name}
              </h3>
              <p className="text-matte-cyan-500 font-bold text-xs uppercase tracking-widest mb-5">
                {member.role}
              </p>
              <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Contact */}
              <div className="flex gap-3">
                <a
                  href={`mailto:${member.email}`}
                  className="p-2.5 rounded-xl bg-matte-slate-50 dark:bg-matte-slate-800 text-matte-slate-500 dark:text-matte-slate-400 border border-matte-slate-100 dark:border-matte-slate-700 hover:text-matte-cyan-500 hover:border-matte-cyan-500/30 transition-all"
                  title="Send Email"
                >
                  <Mail size={16} />
                </a>
                <a
                  href={`https://wa.me/${member.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-matte-slate-50 dark:bg-matte-slate-800 text-emerald-500 border border-matte-slate-100 dark:border-matte-slate-700 hover:border-emerald-500/30 transition-all"
                  title="WhatsApp"
                >
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
        <div className="matte-card p-10 sm:p-16 bg-matte-slate-900 dark:bg-matte-slate-950 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-matte-cyan-500/10 blur-[100px] pointer-events-none" />
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tighter">
            Want to Support Us?
          </h2>
          <p className="text-matte-slate-400 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Foldercop is free for everyone. If it helps you, a small donation goes a long way 
            in keeping the project alive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="matte-btn-primary px-8 py-3.5 text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-2"
            >
              <Heart size={16} className="fill-white" /> Support the Project
            </Link>
            <Link
              to="/contact"
              className="matte-btn-secondary px-8 py-3.5 text-sm uppercase tracking-widest font-bold border-white/20 text-white hover:border-matte-cyan-500/50"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutUs
