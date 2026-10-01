import React, { useState, useEffect } from 'react'
import { Heart, CreditCard, Copy, Check, Calendar, RefreshCw, Send, ShieldCheck, Zap } from 'lucide-react'

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
const ENTRY_EMAIL  = 'entry.1063322697'  // Email Address
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
  const [formData, setFormData]       = useState({ name: '', amount: '', city: '', email: '' })
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
      if (formData.email.trim()) body.append(ENTRY_EMAIL, formData.email.trim())
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
    <div className="pt-24 sm:pt-32 pb-20">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 bg-matte-slate-100 dark:bg-matte-slate-800/80 border border-matte-slate-200 dark:border-matte-slate-700 py-1 px-3.5 rounded-md text-matte-slate-700 dark:text-matte-slate-300 font-medium text-xs mb-6">
          <Heart size={14} className="text-matte-cyan-600 dark:text-matte-cyan-400" />
          <span>Support Foldercop</span>
        </div>
        <h1 className="hero-title mb-4 max-w-4xl mx-auto">Support Independent Software</h1>
        <p className="text-matte-slate-600 dark:text-matte-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Foldercop is maintained independently. If it saves you time each day, a voluntary contribution helps support future development.
        </p>
      </section>

      {/* ── Inline Donor Registration Form ───────────────────────────────── */}
      <section className="container mx-auto px-4 sm:px-6 max-w-xl mb-12 sm:mb-16">
        <div className="matte-card p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-matte-cyan-500/10 rounded-lg flex items-center justify-center text-matte-cyan-600 dark:text-matte-cyan-400 shrink-0">
              <Heart size={18} />
            </div>
            <div>
              <h2 className="font-outfit text-xl font-bold text-matte-slate-900 dark:text-white">
                Register Your Support
              </h2>
              <p className="text-matte-slate-500 dark:text-matte-slate-400 text-xs">
                Optional: Include your details to be listed in the Hall of Fame table below.
              </p>
            </div>
          </div>

          {formSubmitted ? (
            /* ── Success State ── */
            <div className="flex flex-col items-center text-center gap-3 py-6 mt-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Check size={24} strokeWidth={2.5} />
              </div>
              <h3 className="font-outfit text-lg font-bold text-matte-slate-900 dark:text-white">
                Registration Received
              </h3>
              <p className="text-matte-slate-600 dark:text-matte-slate-400 text-sm max-w-xs">
                Your entry will appear in the Hall of Fame once your transfer is completed.
              </p>
              <button
                onClick={() => { setFormSubmitted(false); setFormData({ name: '', amount: '', city: '', email: '' }) }}
                className="text-xs text-matte-cyan-600 dark:text-matte-cyan-400 hover:underline font-medium mt-2"
              >
                Submit another entry
              </button>
            </div>
          ) : (
            /* ── Form Fields ── */
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 mt-6">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-matte-slate-700 dark:text-matte-slate-300">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="e.g. Rahil Vahora"
                  required
                  className="bg-white dark:bg-matte-slate-900 border border-matte-slate-300 dark:border-matte-slate-700 px-3.5 py-2.5 rounded-lg text-sm text-matte-slate-900 dark:text-white focus:border-matte-cyan-600 focus:ring-1 focus:ring-matte-cyan-600 outline-none transition-colors placeholder:text-matte-slate-400"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-matte-slate-700 dark:text-matte-slate-300">
                  Email Address <span className="font-normal text-matte-slate-400">(private — never shown publicly)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="e.g. rahil@example.com"
                  className="bg-white dark:bg-matte-slate-900 border border-matte-slate-300 dark:border-matte-slate-700 px-3.5 py-2.5 rounded-lg text-sm text-matte-slate-900 dark:text-white focus:border-matte-cyan-600 focus:ring-1 focus:ring-matte-cyan-600 outline-none transition-colors placeholder:text-matte-slate-400"
                />
              </div>

              {/* Amount + City (side by side) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Amount */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-matte-slate-700 dark:text-matte-slate-300">
                    Amount (₹) *
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleFormChange}
                    placeholder="e.g. 200"
                    min="1"
                    required
                    className="bg-white dark:bg-matte-slate-900 border border-matte-slate-300 dark:border-matte-slate-700 px-3.5 py-2.5 rounded-lg text-sm text-matte-slate-900 dark:text-white focus:border-matte-cyan-600 focus:ring-1 focus:ring-matte-cyan-600 outline-none transition-colors placeholder:text-matte-slate-400"
                  />
                </div>

                {/* City Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-matte-slate-700 dark:text-matte-slate-300">
                    Your City *
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleFormChange}
                    required
                    className="bg-white dark:bg-matte-slate-900 border border-matte-slate-300 dark:border-matte-slate-700 px-3.5 py-2.5 rounded-lg text-sm text-matte-slate-900 dark:text-white focus:border-matte-cyan-600 focus:ring-1 focus:ring-matte-cyan-600 outline-none transition-colors cursor-pointer"
                  >
                    <option value="" disabled>Select city…</option>
                    {CITIES.map(c => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={formLoading}
                className="matte-btn-primary py-2.5 text-sm font-medium flex items-center justify-center gap-2 mt-2 disabled:opacity-60"
              >
                {formLoading
                  ? <><RefreshCw size={14} className="animate-spin" /> Submitting…</>
                  : <><Send size={14} /> Register Contribution</>
                }
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── Donation Method Cards ─────────────────────────────────────────── */}
      <section className="container mx-auto px-4 sm:px-6 max-w-sm mb-16">
        {/* ── UPI Card ── */}
        <div className="matte-card p-6 flex flex-col items-center text-center">
          <div className="w-10 h-10 bg-matte-cyan-500/10 rounded-lg flex items-center justify-center text-matte-cyan-600 dark:text-matte-cyan-400 mb-3 mx-auto">
            <CreditCard size={20} />
          </div>
          <h3 className="font-outfit text-lg font-bold text-matte-slate-900 dark:text-white mb-0.5">
            Instant UPI Transfer
          </h3>
          <p className="text-matte-slate-500 dark:text-matte-slate-400 text-xs mb-4">
            Supports Google Pay, PhonePe, Paytm & any BHIM UPI app
          </p>

          {/* QR */}
          <div className="bg-white p-2 rounded-lg mb-4 border border-matte-slate-200 dark:border-matte-slate-700 shadow-sm">
            <img src={qrUrl} alt="UPI QR Code" className="w-[130px] h-[130px]" />
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 text-xs font-mono text-matte-slate-600 dark:text-matte-slate-400 hover:text-matte-cyan-600 py-2 w-full rounded-md border border-matte-slate-300 dark:border-matte-slate-700 bg-matte-slate-50 dark:bg-matte-slate-800 transition-colors mb-3"
          >
            {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
            {copied ? 'Copied to clipboard' : upiId}
          </button>
          <a
            href={upiLink}
            className="matte-btn-primary w-full text-xs font-semibold uppercase tracking-wider py-2.5 text-center"
          >
            Open in UPI App
          </a>
        </div>
      </section>

      {/* ── Security Strip ───────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 sm:px-6 max-w-4xl mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: <ShieldCheck size={16} />, text: 'Data submitted is used solely for Hall of Fame acknowledgment.' },
            { icon: <Zap size={16} />, text: 'One-time voluntary contribution. No subscription or recurring fees.' },
            { icon: <Heart size={16} />, text: '100% of contributions go directly to the two core developers.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-matte-slate-50 dark:bg-matte-slate-900/60 border border-matte-slate-200 dark:border-matte-slate-800 rounded-lg">
              <span className="text-matte-cyan-600 dark:text-matte-cyan-400 shrink-0 mt-0.5">{item.icon}</span>
              <p className="text-xs text-matte-slate-600 dark:text-matte-slate-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Hall of Fame ─────────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="font-outfit text-xl sm:text-2xl font-bold text-matte-slate-900 dark:text-white mb-1">
              Hall of Fame
            </h2>
            <p className="text-matte-slate-600 dark:text-matte-slate-400 text-xs sm:text-sm">
              Community supporters who have contributed to Foldercop.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {!loading && !error && totalINR > 0 && (
              <div className="bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded-md px-3 py-1.5 text-xs font-semibold">
                Total Raised: ₹{totalINR.toLocaleString('en-IN')}
              </div>
            )}
            <button
              onClick={fetchSupporters}
              disabled={loading}
              className="flex items-center gap-1 text-xs text-matte-slate-600 dark:text-matte-slate-400 hover:text-matte-cyan-600 dark:hover:text-matte-cyan-400 transition-colors font-medium"
            >
              <RefreshCw size={12} className={loading ? 'animate-spin' : ''} />
              Refresh
            </button>
          </div>
        </div>

        <div className="matte-card p-0 overflow-hidden border border-matte-slate-200 dark:border-matte-slate-800 rounded-lg">
          {/* ── Table ── */}
          {!loading && !error && supporters.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-matte-slate-50 dark:bg-matte-slate-800/80 border-b border-matte-slate-200 dark:border-matte-slate-800">
                    <th className="px-5 py-3 text-xs uppercase tracking-wider font-semibold text-matte-slate-500">#</th>
                    <th className="px-5 py-3 text-xs uppercase tracking-wider font-semibold text-matte-slate-500">Supporter</th>
                    <th className="px-5 py-3 text-xs uppercase tracking-wider font-semibold text-matte-slate-500 hidden sm:table-cell">Location</th>
                    <th className="px-5 py-3 text-xs uppercase tracking-wider font-semibold text-matte-slate-500 hidden md:table-cell">Date</th>
                    <th className="px-5 py-3 text-xs uppercase tracking-wider font-semibold text-matte-slate-500 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-matte-slate-100 dark:divide-matte-slate-800">
                  {supporters.map((s, i) => (
                    <tr
                      key={i}
                      className="hover:bg-matte-slate-50/50 dark:hover:bg-matte-slate-800/40 transition-colors"
                    >
                      <td className="px-5 py-3 text-xs text-matte-slate-400 font-mono">{i + 1}</td>
                      <td className="px-5 py-3 font-medium text-matte-slate-900 dark:text-white">
                        {s.name}
                        {s.message && (
                          <p className="text-xs text-matte-slate-500 dark:text-matte-slate-400 mt-0.5 italic truncate max-w-[180px]">
                            "{s.message}"
                          </p>
                        )}
                      </td>
                      <td className="px-5 py-3 hidden sm:table-cell text-sm text-matte-slate-600 dark:text-matte-slate-400">
                        {s.city}
                      </td>
                      <td className="px-5 py-3 hidden md:table-cell text-xs text-matte-slate-500 dark:text-matte-slate-400">
                        {s.date}
                      </td>
                      <td className="px-5 py-3 text-right">
                        <span className="inline-flex items-center px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded font-semibold text-xs">
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
            <div className="flex items-center justify-center gap-2 py-12 text-matte-slate-400">
              <RefreshCw size={14} className="animate-spin" />
              <span className="text-xs font-medium">Loading supporter records…</span>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="text-center py-12 px-4">
              <p className="text-matte-slate-500 text-xs mb-3">
                Could not retrieve records. Please check your internet connection.
              </p>
              <button onClick={fetchSupporters} className="matte-btn-secondary text-xs py-1 px-3">
                Retry
              </button>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && supporters.length === 0 && (
            <div className="text-center py-12 px-4">
              <p className="text-matte-slate-500 text-xs">
                No recorded entries yet.
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-3 px-1 gap-2 text-xs text-matte-slate-400">
          <span>Synced with verified Google Sheets record</span>
          {lastUpdated && <span>Last checked: {lastUpdated}</span>}
        </div>
      </section>
    </div>
  )
}

export default Donate