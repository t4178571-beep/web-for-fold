import React, { useState } from 'react'
import { Mail, MessageCircle, Send, MapPin, Globe, ShieldCheck } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

  const email = '11iamyasin@gmail.com'
  const whatsapp = '+917990471946'

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to WhatsApp with message data
    const message = `*Foldercop Support Request*\n\n*Name*: ${formData.name}\n*Email*: ${formData.email}\n*Subject*: ${formData.subject}\n\n*Message*: ${formData.message}`
    const whatsappUrl = `https://wa.me/${whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="pt-32 pb-24 overflow-hidden">
      <section className="container mx-auto px-6 mb-24">
        <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom duration-1000">
           <h1 className="hero-title mb-8 tracking-tighter leading-none">Connect with Us.</h1>
           <p className="text-matte-slate-600 dark:text-matte-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
             Have a question, feedback, or need technical assistance? Fill out the form or reach out directly via WhatsApp or Email.
           </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl">
        {/* Contact Info Card */}
        <div className="space-y-8">
           <div className="matte-card bg-matte-slate-50 dark:bg-matte-slate-900 border border-matte-slate-100 dark:border-matte-slate-800 p-12 lg:p-16 flex flex-col gap-10">
              
              {/* EMAIL */}
              <div className="flex items-start gap-6 group">
                 <div className="w-16 h-16 bg-white dark:bg-black rounded-3xl flex items-center justify-center text-matte-cyan-600 dark:text-matte-cyan-400 shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Mail size={28} />
                 </div>
                 <div>
                    <h3 className="font-outfit text-2xl font-bold text-matte-slate-900 dark:text-white mb-2">Email Support</h3>
                    <p className="text-matte-slate-500 font-bold mb-4">{email}</p>
                    <a href={`mailto:${email}`} className="text-matte-cyan-600 dark:text-matte-cyan-400 font-bold hover:underline">Send Message</a>
                 </div>
              </div>

              <div className="h-px bg-matte-slate-100 dark:bg-matte-slate-800 w-full"></div>

              {/* WHATSAPP */}
              <div className="flex items-start gap-6 group">
                 <div className="w-16 h-16 bg-white dark:bg-black rounded-3xl flex items-center justify-center text-emerald-500 dark:text-emerald-400 shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <MessageCircle size={28} />
                 </div>
                 <div>
                    <h3 className="font-outfit text-2xl font-bold text-matte-slate-900 dark:text-white mb-2">Direct WhatsApp</h3>
                    <p className="text-matte-slate-500 font-bold mb-4">Chat with our core team</p>
                    <a href={`https://wa.me/${whatsapp.replace('+', '')}`} className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline font-outfit uppercase tracking-tighter shadow-emerald-500/10">Start Chat Now</a>
                 </div>
              </div>

              <div className="h-px bg-matte-slate-100 dark:bg-matte-slate-800 w-full"></div>

              {/* REGION */}
              <div className="flex items-start gap-6 opacity-60">
                 <div className="w-16 h-16 border-2 border-dashed border-matte-slate-200 dark:border-matte-slate-800 rounded-3xl flex items-center justify-center text-matte-slate-400 shrink-0">
                    <Globe size={28} />
                 </div>
                 <div>
                    <h3 className="font-outfit text-2xl font-bold text-matte-slate-900 dark:text-white mb-2">Global Support</h3>
                    <p className="text-matte-slate-500 font-bold">24/7 priority support across all time zones.</p>
                 </div>
              </div>
           </div>

           <div className="bg-matte-cyan-500 text-white p-8 rounded-[40px] flex items-center gap-4 shadow-2xl shadow-cyan-500/20">
              <ShieldCheck size={32} />
              <p className="font-bold">Privacy Guaranteed: Your contact data is used ONLY for support purposes.</p>
           </div>
        </div>

        {/* Contact Form Card */}
        <div className="matte-card p-12 md:p-16 bg-white dark:bg-[#0c0c0c] relative group overflow-hidden border border-matte-slate-100 dark:border-matte-slate-900 shadow-[0px_100px_150px_-50px_rgba(0,0,0,0.1)]">
           <div className="absolute top-0 right-0 w-64 h-64 bg-matte-cyan-500/5 blur-[100px] -z-10 group-hover:scale-150 transition-transform duration-1000"></div>
           <h2 className="font-outfit text-4xl font-extrabold text-matte-slate-900 dark:text-white mb-10 tracking-tighter">Submit a Request.</h2>
           <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-matte-slate-400 ml-1">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Required" className="bg-matte-slate-50 dark:bg-matte-slate-900 border-none p-5 rounded-2xl text-matte-slate-900 dark:text-white focus:ring-2 ring-matte-cyan-500/20 outline-none transition-all placeholder:text-matte-slate-400 font-medium" required />
                 </div>
                 <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-matte-slate-400 ml-1">Working Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@mail.com" className="bg-matte-slate-50 dark:bg-matte-slate-900 border-none p-5 rounded-2xl text-matte-slate-900 dark:text-white focus:ring-2 ring-matte-cyan-500/20 outline-none transition-all placeholder:text-matte-slate-400 font-medium" required />
                 </div>
              </div>
              <div className="flex flex-col gap-3">
                 <label className="text-xs font-bold uppercase tracking-widest text-matte-slate-400 ml-1">Subject</label>
                 <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Issue or Feedback" className="bg-matte-slate-50 dark:bg-matte-slate-900 border-none p-5 rounded-2xl text-matte-slate-900 dark:text-white focus:ring-2 ring-matte-cyan-500/20 outline-none transition-all placeholder:text-matte-slate-400 font-medium" required />
              </div>
              <div className="flex flex-col gap-3">
                 <label className="text-xs font-bold uppercase tracking-widest text-matte-slate-400 ml-1">Detailed Message</label>
                 <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" className="bg-matte-slate-50 dark:bg-matte-slate-900 border-none p-5 rounded-2xl text-matte-slate-900 dark:text-white focus:ring-2 ring-matte-cyan-500/20 outline-none transition-all placeholder:text-matte-slate-400 resize-none h-48 font-medium" required></textarea>
              </div>
              <button type="submit" className="matte-btn-primary py-6 text-xl flex justify-center items-center gap-2 mt-4 shadow-xl shadow-cyan-500/10 active:scale-95 transition-all group font-extrabold uppercase tracking-widest">
                SEND NOW <Send size={24} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
           </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
