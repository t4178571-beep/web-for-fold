import React, { useState, useEffect } from 'react'
import { Heart, CreditCard, Copy, Check, Calendar, RefreshCw, ExternalLink, Send, Globe, ShieldCheck, Zap } from 'lucide-react'

// ─── CONFIG ─────────────────────────────────────────────────────────────────
// Publish-to-web TSV URL (for Hall of Fame display)
const TSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTPLaB2p1GDx-24A32c1TqQBIZcbK3tUnf_IR5o9sWEgVoi2zHcMMZWM-5UfXwYM6Rolao6Mcu8kyRO/pub?gid=763121780&single=true&output=tsv'

// Google Form submission endpoint (no-cors, fire-and-forget)
const FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLScSn1Uk0cHjr_Wh9y8m9TUjmM-_6ZrisHvPiRjzX8L4USjp8A/formResponse'

// ⚠️  IMPORTANT: Replace these entry IDs with real ones from your Google Form.
// How to find them:
//   1. Open your Google Form in a browser
//   2. Right-click on a question's input field → "Inspect"
//   3. Look for  name="entry.XXXXXXXXXX"  in the HTML
//   4. Paste those values below ↓
const ENTRY_NAME   = 'entry.1675211738'  // Donor Name
const ENTRY_CITY   = 'entry.855489272'   // City
const ENTRY_AMOUNT = 'entry.959160609'   // Donation Amount
// ────────────────────────────────────────────────────────────────────────────

// ─── CITY LIST ───────────────────────────────────────────────────────────────
const CITIES = [
  // ── Gujarat ──
  { label: 'Ahmedabad, Gujarat, India',   value: 'Ahmedabad, Gujarat, India' },
  { label: 'Anand, Gujarat, India',       value: 'Anand, Gujarat, India' },
  { label: 'Gandhinagar, Gujarat, India', value: 'Gandhinagar, Gujarat, India' },
  { label: 'Rajkot, Gujarat, India',      value: 'Rajkot, Gujarat, India' },
  { label: 'Surat, Gujarat, India',       value: 'Surat, Gujarat, India' },
  { label: 'Vadodara, Gujarat, India',    value: 'Vadodara, Gujarat, India' },
  // ── Maharashtra ──
  { label: 'Mumbai, Maharashtra, India',  value: 'Mumbai, Maharashtra, India' },
  { label: 'Pune, Maharashtra, India',    value: 'Pune, Maharashtra, India' },
  { label: 'Nagpur, Maharashtra, India',  value: 'Nagpur, Maharashtra, India' },
  // ── Delhi / NCR ──
  { label: 'New Delhi, Delhi, India',     value: 'New Delhi, Delhi, India' },
  { label: 'Noida, Uttar Pradesh, India', value: 'Noida, Uttar Pradesh, India' },
  { label: 'Gurgaon, Haryana, India',     value: 'Gurgaon, Haryana, India' },
  // ── South India ──
  { label: 'Bengaluru, Karnataka, India', value: 'Bengaluru, Karnataka, India' },
  { label: 'Hyderabad, Telangana, India', value: 'Hyderabad, Telangana, India' },
  { label: 'Chennai, Tamil Nadu, India',  value: 'Chennai, Tamil Nadu, India' },
  { label: 'Kochi, Kerala, India',        value: 'Kochi, Kerala, India' },
  // ── East India ──
  { label: 'Kolkata, West Bengal, India', value: 'Kolkata, West Bengal, India' },
  // ── North India ──
  { label: 'Chandigarh, Punjab, India',   value: 'Chandigarh, Punjab, India' },
  { label: 'Indore, Madhya Pradesh, India', value: 'Indore, Madhya Pradesh, India' },
  { label: 'Jaipur, Rajasthan, India',    value: 'Jaipur, Rajasthan, India' },
  { label: 'Lucknow, Uttar Pradesh, India', value: 'Lucknow, Uttar Pradesh, India' },
  { label: 'Patna, Bihar, India',         value: 'Patna, Bihar, India' },
  // ── International ──
  { label: 'Dubai, UAE',                  value: 'Dubai, UAE' },
  { label: 'London, England, UK',         value: 'London, England, UK' },
  { label: 'New York, NY, USA',           value: 'New York, NY, USA' },
  { label: 'San Francisco, CA, USA',      value: 'San Francisco, CA, USA' },
  { label: 'Singapore',                   value: 'Singapore' },
  { label: 'Sydney, Australia',           value: 'Sydney, Australia' },
  { label: 'Toronto, Canada',             value: 'Toronto, Canada' },
  { label: 'Other',                       value: 'Other' },
]
// ────────────────────────────────────────────────────────────────────────────

const Donate = () => {
  const [copied, setCopied]           = useState(false)
  const [supporters, setSupporters]   = useState([])
  const [loading, setLoading]         = useState(true)
  const [lastUpdated, setLastUpdated] = useState(null)
  const [error, setError]             = useState(false)

  // Inline donor form state
  const [formData, setFormData]       = useState({ name: '', amount: '', city: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formLoading, setFormLoading] = useState(false)

  const upiId   = '11iamyasin-1@okicici'
  const upiLink = `upi://pay?pa=${upiId}&pn=Yasin%20Vahora&tn=FolderCop%20Donation&cu=INR`
  const qrUrl   = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiLink)}`

  // ── Fetch Hall of Fame from TSV ──────────────────────────────────────────
  const fetchSupporters = async () => {
    setLoading(true)
    setError(false)
    try {
      const res  = await fetch(TSV_URL)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const text = await res.text()

      const lines = text.trim().split('\n')
      if (lines.length <= 1) { setSupporters([]); setLoading(false); return }

      const rows = lines
        .slice(1)                       // skip header row
        .map(line => {
          const cols      = line.split('\t')
          // Sheet columns: [0]Timestamp [1]Untitled [2]Donor Name [3]City [4]Amount [5]Time [6]Message
          const rawAmount = (cols[4] ?? '').trim().replace(/[₹,\s]/g, '')
          const num       = parseFloat(rawAmount)
          return {
            date:    (cols[0] ?? '').trim() || '—',
            name:    (cols[2] ?? '').trim() || 'Anonymous',
            city:    (cols[3] ?? '').trim() || 'India',
            amount:  isNaN(num) ? (rawAmount || '—') : num,
            message: (cols[6] ?? '').trim(),
          }
        })
        .filter(r => r.name && r.name !== 'Anonymous')
        .reverse()                      // newest first

      setSupporters(rows)
      setLastUpdated(new Date().toLocaleTimeString())
    } catch (e) {
      console.error('Hall of Fame fetch error:', e)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSupporters()
    const id = setInterval(fetchSupporters, 120_000)
    return () => clearInterval(id)
  }, [])

  // ── UPI copy ─────────────────────────────────────────────────────────────
  const handleCopy = () => {
    navigator.clipboard.writeText(upiId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // ── Inline form submit → Google Form (no-cors) ───────────────────────────
  const handleFormChange = e =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleFormSubmit = async e => {
    e.preventDefault()
    setFormLoading(true)
    try {
      const body = new FormData()
      body.append(ENTRY_NAME,   formData.name.trim())
      body.append(ENTRY_CITY,   formData.city)
      body.append(ENTRY_AMOUNT, formData.amount.trim())
      // Google Form auto-adds the Timestamp column — no need to send it manually.

      await fetch(FORM_ACTION, { method: 'POST', mode: 'no-cors', body })
      // no-cors gives an opaque response — if fetch doesn't throw, assume success.
    } catch {
      // Network error or same-site block — data may still have reached Google.
    } finally {
      setFormSubmitted(true)
      setFormLoading(false)
    }
  }

  // ── Totals ───────────────────────────────────────────────────────────────
  const totalINR = supporters
    .filter(s => typeof s.amount === 'number')
    .reduce((sum, s) => sum + s.amount, 0)

  const displayAmount = amount =>
    typeof amount === 'number'
      ? `₹${amount.toLocaleString('en-IN')}`
      : String(amount)

  return (
    <div className="pt-32 pb-24 overflow-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="container mx-auto px-6 text-center mb-20 animate-in fade-in slide-in-from-bottom duration-1000">
        <div className="inline-flex items-center gap-2 bg-pink-500/10 py-1.5 px-4 rounded-full text-pink-600 dark:text-pink-400 font-bold text-xs uppercase tracking-widest mb-10 shadow-sm border border-pink-500/20">
          <Heart size={14} className="fill-pink-500" /> Support the Vision
        </div>
        <h1 className="hero-title mb-8 tracking-tight">Support Our Core Team.</h1>
        <p className="text-matte-slate-600 dark:text-matte-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Foldercop is free and open source, built by two developers in their spare time.
          Even a small contribution keeps the project alive and improving.
        </p>
      </section>

      {/* ── Inline Donor Registration Form ───────────────────────────────── */}
      <section className="container mx-auto px-6 max-w-2xl mb-16">
        <div className="matte-card bg-white dark:bg-[#0c0c0c] border border-matte-slate-100 dark:border-matte-slate-800 p-10 relative overflow-hidden shadow-xl">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/5 blur-[80px] pointer-events-none" />

          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-500 shrink-0">
              <Heart size={20} />
            </div>
            <h2 className="font-outfit text-2xl font-extrabold text-matte-slate-900 dark:text-white tracking-tight">
              Add Yourself to Hall of Fame
            </h2>
          </div>

          {/* "Please fill this form" notice */}
          <p className="text-matte-slate-500 dark:text-matte-slate-400 text-sm mb-8 ml-1">
            Please fill this form before donating so we can recognize you publicly.{' '}
            <span className="italic opacity-70">(Optional — you can skip if you prefer to stay anonymous.)</span>
          </p>

          {formSubmitted ? (
            /* ── Success State ── */
            <div className="flex flex-col items-center text-center gap-4 py-8">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
                <Check size={32} strokeWidth={3} />
              </div>
              <h3 className="font-outfit text-xl font-bold text-matte-slate-900 dark:text-white">
                You're registered! 🎉
              </h3>
              <p className="text-matte-slate-500 dark:text-matte-slate-400 text-sm max-w-xs">
                Your name will appear in the Hall of Fame after you complete your donation below.
              </p>
              <button
                onClick={() => { setFormSubmitted(false); setFormData({ name: '', amount: '', city: '' }) }}
                className="text-xs text-matte-slate-400 hover:text-matte-cyan-500 transition-colors underline"
              >
                Submit another entry
              </button>
            </div>
          ) : (
            /* ── Form Fields ── */
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-matte-slate-400">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="e.g. Rahil Vahora"
                  required
                  className="bg-matte-slate-50 dark:bg-matte-slate-900 border border-matte-slate-100 dark:border-matte-slate-800 p-4 rounded-2xl text-matte-slate-900 dark:text-white focus:ring-2 ring-matte-cyan-500/30 outline-none transition-all placeholder:text-matte-slate-300 dark:placeholder:text-matte-slate-600 font-medium"
                />
              </div>

              {/* Amount + City (side by side) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Amount */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-matte-slate-400">
                    Amount Donated (₹) *
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleFormChange}
                    placeholder="e.g. 199"
                    min="1"
                    required
                    className="bg-matte-slate-50 dark:bg-matte-slate-900 border border-matte-slate-100 dark:border-matte-slate-800 p-4 rounded-2xl text-matte-slate-900 dark:text-white focus:ring-2 ring-matte-cyan-500/30 outline-none transition-all placeholder:text-matte-slate-300 dark:placeholder:text-matte-slate-600 font-medium"
                  />
                </div>

                {/* City Dropdown */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-matte-slate-400">
                    Your City *
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleFormChange}
                    required
                    className="bg-matte-slate-50 dark:bg-matte-slate-900 border border-matte-slate-100 dark:border-matte-slate-800 p-4 rounded-2xl text-matte-slate-900 dark:text-white focus:ring-2 ring-matte-cyan-500/30 outline-none transition-all font-medium appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select city…</option>
                    {CITIES.map(c => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Auto time note */}
              <p className="text-xs text-matte-slate-400 flex items-center gap-1.5 -mt-2">
                <Calendar size={12} />
                Submission time is recorded automatically.
              </p>

              <button
                type="submit"
                disabled={formLoading}
                className="matte-btn-primary py-4 flex justify-center items-center gap-2 text-sm font-bold uppercase tracking-widest shadow-lg shadow-cyan-500/10 active:scale-95 disabled:opacity-60"
              >
                {formLoading
                  ? <><RefreshCw size={16} className="animate-spin" /> Submitting…</>
                  : <><Send size={16} /> Register My Donation</>
                }
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── Donation Method Cards ─────────────────────────────────────────── */}
      <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mb-24">

        {/* ── UPI Card ── */}
        <div className="matte-card hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative group flex flex-col items-center text-center p-8 border-2 border-matte-cyan-500/20 shadow-lg shadow-cyan-500/5 bg-white dark:bg-matte-slate-900/60 col-span-1 md:col-span-1">
          <div className="absolute inset-0 bg-gradient-to-br from-matte-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
          <div className="w-14 h-14 bg-matte-cyan-500/10 rounded-2xl flex items-center justify-center text-matte-cyan-600 dark:text-matte-cyan-400 mb-4 mx-auto">
            <CreditCard size={24} />
          </div>
          <h3 className="font-outfit text-lg font-extrabold text-matte-slate-900 dark:text-white mb-1">
            UPI (India)
          </h3>
          <p className="text-matte-slate-500 dark:text-matte-slate-400 text-xs mb-4">
            GPay · PhonePe · Paytm · any UPI app
          </p>

          {/* QR */}
          <div className="bg-white p-2.5 rounded-2xl mb-4 shadow-inner border border-matte-slate-100">
            <img src={qrUrl} alt="UPI QR Code" className="w-[120px] h-[120px]" />
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 text-sm font-bold text-matte-slate-500 hover:text-matte-cyan-500 py-2.5 w-full rounded-xl border border-dashed border-matte-slate-200 dark:border-matte-slate-700 transition-colors mb-3"
          >
            {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
            {copied ? 'Copied!' : upiId}
          </button>
          <a
            href={upiLink}
            className="matte-btn-primary w-full text-sm uppercase tracking-wider font-bold text-center py-3"
          >
            Open UPI App
          </a>
        </div>

        {/* ── Ko-fi Card (PayPal & Card) ── */}
        <div className="matte-card hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative group flex flex-col items-center text-center p-8">
          <div className="absolute top-0 left-0 w-24 h-24 bg-orange-500/5 blur-[40px] -z-10 group-hover:scale-150 transition-transform duration-1000" />
          <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-4 mx-auto text-2xl">
            ☕
          </div>
          <h3 className="font-outfit text-lg font-extrabold text-matte-slate-900 dark:text-white mb-1">
            Ko-fi
          </h3>
          <p className="text-matte-slate-500 dark:text-matte-slate-400 text-xs mb-2 flex-grow">
            One-time or recurring support. No account needed.
          </p>

          {/* PayPal & Card badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 mt-2">
            <span className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-bold">
              PayPal
            </span>
            <span className="bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 px-3 py-1 rounded-full text-xs font-bold">
              Credit Card
            </span>
            <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-bold">
              Debit Card
            </span>
          </div>

          <a
            href="https://ko-fi.com/foldercop"
            target="_blank"
            rel="noopener noreferrer"
            className="matte-btn-primary w-full text-sm uppercase tracking-wider font-bold text-center flex items-center justify-center gap-2 py-3"
          >
            Donate via Ko-fi <ExternalLink size={13} />
          </a>
          <p className="text-matte-slate-400 text-xs mt-3">
            Best for international donors 🌍
          </p>
        </div>

        {/* ── PayPal Direct Card ── */}
        <div className="matte-card hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative group flex flex-col items-center text-center p-8">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-[40px] -z-10 group-hover:scale-150 transition-transform duration-1000" />
          <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 mx-auto">
            <Globe size={24} />
          </div>
          <h3 className="font-outfit text-lg font-extrabold text-matte-slate-900 dark:text-white mb-1">
            PayPal / Card
          </h3>
          <p className="text-matte-slate-500 dark:text-matte-slate-400 text-xs mb-6 flex-grow">
            Direct PayPal transfer. Works worldwide with any card.
          </p>

          <a
            href="https://paypal.me/yasinvahora"
            target="_blank"
            rel="noopener noreferrer"
            className="matte-btn-secondary w-full text-sm uppercase tracking-wider font-bold text-center flex items-center justify-center gap-2 py-3 border-blue-200 dark:border-blue-900 hover:border-blue-400 text-blue-600 dark:text-blue-400"
          >
            Open PayPal <ExternalLink size={13} />
          </a>
          <p className="text-matte-slate-400 text-xs mt-3">
            paypal.me/yasinvahora
          </p>

          {/* Replace note */}
          {/* ⚠️ Update the PayPal.me link above with your actual PayPal.me username */}
        </div>

      </section>

      {/* ── Security Strip ───────────────────────────────────────────────── */}
      <section className="container mx-auto px-6 max-w-5xl mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: <ShieldCheck size={16} />, text: 'Your data is used only for support purposes.' },
            { icon: <Zap size={16} />, text: 'No subscription — donate once, anytime.' },
            { icon: <Heart size={16} />, text: 'Every rupee goes directly to the developers.' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-matte-slate-50 dark:bg-matte-slate-900/40 border border-matte-slate-100 dark:border-matte-slate-800 rounded-2xl px-5 py-4">
              <span className="text-matte-cyan-500 shrink-0">{item.icon}</span>
              <p className="text-xs font-bold text-matte-slate-600 dark:text-matte-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Hall of Fame ─────────────────────────────────────────────────── */}
      <section className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-outfit text-3xl md:text-4xl font-extrabold tracking-tight mb-1">
              Hall of Fame
            </h2>
            <p className="text-matte-slate-500 dark:text-matte-slate-400 text-sm font-medium">
              People who powered FolderCop's development.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            {!loading && !error && totalINR > 0 && (
              <div className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-2xl px-4 py-2 text-sm font-bold font-outfit">
                Total: ₹{totalINR.toLocaleString('en-IN')}
              </div>
            )}
            <button
              onClick={fetchSupporters}
              disabled={loading}
              className="flex items-center gap-1.5 text-xs text-matte-slate-400 hover:text-matte-cyan-500 transition-colors font-bold uppercase tracking-wider"
            >
              <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
              Refresh
            </button>
          </div>
        </div>

        <div className="matte-card p-0 overflow-hidden border border-matte-slate-100 dark:border-matte-slate-800 shadow-xl">

          {/* ── Table ── */}
          {!loading && !error && supporters.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-matte-slate-50 dark:bg-matte-slate-800/50">
                    <th className="px-6 py-4 text-xs uppercase tracking-widest font-black text-matte-slate-400">#</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-widest font-black text-matte-slate-400">Supporter</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-widest font-black text-matte-slate-400 hidden sm:table-cell">Location</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-widest font-black text-matte-slate-400 hidden md:table-cell">Date</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-widest font-black text-matte-slate-400 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {supporters.map((s, i) => (
                    <tr
                      key={i}
                      className="group border-t border-matte-slate-50 dark:border-matte-slate-800/60 hover:bg-matte-cyan-500/[0.03] transition-colors"
                    >
                      <td className="px-6 py-4 text-xs text-matte-slate-400 font-mono">{i + 1}</td>
                      <td className="px-6 py-4">
                        <div>
                          <span className="font-outfit font-bold text-matte-slate-900 dark:text-white group-hover:text-matte-cyan-500 transition-colors">
                            {s.name}
                          </span>
                          {s.message && (
                            <p className="text-xs text-matte-slate-400 mt-0.5 italic truncate max-w-[180px]">
                              "{s.message}"
                            </p>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 hidden sm:table-cell text-sm text-matte-slate-500 dark:text-matte-slate-400 font-medium">
                        {s.city}
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        <div className="flex items-center gap-1.5 text-xs text-matte-slate-400">
                          <Calendar size={12} className="text-matte-cyan-500/50" />
                          {s.date}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-flex items-center px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg font-outfit font-black text-sm">
                          {displayAmount(s.amount)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="flex items-center justify-center gap-3 py-16 text-matte-slate-400">
              <RefreshCw size={16} className="animate-spin" />
              <span className="text-sm font-medium">Loading supporters…</span>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="text-center py-16 px-6">
              <p className="text-matte-slate-400 text-sm mb-4">
                Could not load supporter data. Check your internet connection.
              </p>
              <button onClick={fetchSupporters} className="matte-btn-secondary text-sm">
                Try Again
              </button>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && supporters.length === 0 && (
            <div className="text-center py-16 px-6">
              <p className="text-matte-slate-400 text-sm">
                No donations yet — be the first! 🌟
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-6 px-1">
          <p className="text-xs text-matte-slate-400 uppercase tracking-[0.15em] font-bold">
            Live from Google Sheets · auto-refreshes every 2 min
          </p>
          {lastUpdated && (
            <p className="text-xs text-matte-slate-400">Last updated: {lastUpdated}</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default Donate