'use client'
import { type FormEvent, useState } from 'react'
import Reveal from '@/components/ui/Reveal'

const mapUrl = 'https://www.google.com/maps/place/38%C2%B053%2715.0%22N+79%C2%B039%2750.3%22W/@38.887553,-79.6639601,20z/data=!4m4!3m3!8m2!3d38.8875055!4d-79.6639601?entry=ttu'
const mapEmbedUrl = 'https://www.google.com/maps?q=38.8875055,-79.6639601&z=18&output=embed'

const contactCards = [

  { icon: 'phone', title: 'Mobile', lines: ['304 620 1974'], href: 'tel:304 620 1974' },
  { icon: 'phone', title: '+91 7399577999', lines: ['Reach Pastor Deva on WhatsApp for local calls'], href: 'https://wa.me/917399577999' },
  { icon: 'mail', title: 'Email', lines: ['devashd@aol.com'], href: 'mailto:devashd@aol.com' },
  { icon: 'map', title: 'Directions', lines: ['Saviors Heartbeat Ministries', 'Open Google Maps'], href: mapUrl },
]

function Icon({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  const common = { className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

  if (name === 'phone') {
    return <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.89.66 2.78a2 2 0 0 1-.45 2.11L8.09 9.84a16 16 0 0 0 6.07 6.07l1.23-1.23a2 2 0 0 1 2.11-.45c.89.31 1.82.53 2.78.66A2 2 0 0 1 22 16.92z" /></svg>
  }
  if (name === 'mail') {
    return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
  }
  if (name === 'map') {
    return <svg {...common}><path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3z" /><path d="M9 3v15" /><path d="M15 6v15" /></svg>
  }
  if (name === 'send') {
    return <svg {...common}><path d="m22 2-7 20-4-9-9-4 20-7z" /><path d="M22 2 11 13" /></svg>
  }
  return <svg {...common}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    setResult('')

    const formData = new FormData(event.currentTarget)
    formData.append('access_key', '74a309d8-11c6-4271-a839-fc0a6c960100')
    formData.append('from_name', "Savior's Heartbeat Website")

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setSubmitted(true)
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setResult('Something went wrong. Please try again.')
      }
    } catch {
      setResult('Unable to send right now. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      {/* Hero */}
      <div className="relative min-h-[500px] bg-[#12070c] overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/up.webp)' }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#E9A5BB]/70" />
            <span className="font-accent text-[#ffff] text-[10px] tracking-[0.35em] uppercase">Get in Touch</span>
            <span className="h-px w-10 bg-[#E9A5BB]/70" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4">Contact Us</h1>
          <p className="text-white/75 text-lg font-body max-w-xl mx-auto">{"We'd love to hear from you - for prayer, partnership, or any enquiry."}</p>
        </div>
      </div>

      <section className="py-24 bg-ivory-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info Column */}
            <Reveal dir="left" className="lg:col-span-2 space-y-5">
              {contactCards.map(c => (
                <div key={c.title} className="bg-white rounded-2xl p-5 shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-100 flex items-start gap-4 card-lift">
                  <div className="w-12 h-12 rounded-xl bg-crimson-50 border border-crimson-100 flex items-center justify-center text-crimson-600 flex-shrink-0">
                    <Icon name={c.icon} />
                  </div>
                  <div>
                    <div className="font-heading text-onyx-800 text-sm font-semibold mb-1">{c.title}</div>
                    {c.lines.map(l => (
                      c.href ? (
                        <a key={l} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noreferrer' : undefined} className="block text-onyx-500 text-sm font-body hover:text-crimson-500 transition-colors break-all">{l}</a>
                      ) : (
                        <p key={l} className="text-onyx-500 text-sm font-body">{l}</p>
                      )
                    ))}
                  </div>
                </div>
              ))}

              <div className="rounded-2xl p-6 overflow-hidden relative" style={{ background: 'linear-gradient(135deg,#8B0A35,#B51657)' }}>
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px,white 1px,transparent 0)', backgroundSize: '16px 16px' }} />
                <div className="relative">
                  <h4 className="font-heading text-white text-sm font-semibold mb-4">Service Times</h4>
                  <div className="space-y-2.5 text-sm">
                    {[
                      ['Sunday Worship', '10:30 AM & 07:30 PM'],
                      ['Fasting Prayer', 'Every Friday 07:30 PM'],
                      ['Youth Meeting', 'Sunday 02:00 PM'],
                      ['Sunday School', 'Every Sunday during worship'],
                      ['All Night Prayers', 'Last Friday 09:00 PM onwards'],
                    ].map(([l, t]) => (
                      <div key={l} className="flex justify-between gap-3">
                        <span className="text-white/65 font-body">{l}</span>
                        <span className="text-white/90 font-body text-right">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form Column */}
            <Reveal dir="right" className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-12 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-crimson-500 to-burgundy-700 flex items-center justify-center mx-auto mb-6 shadow-luxury text-3xl text-white">OK</div>
                  <h3 className="font-heading text-3xl font-semibold text-onyx-900 mb-3">Message Sent!</h3>
                  <p className="text-onyx-500 text-sm font-body max-w-xs mb-8">Thank you for reaching out. We will respond to your message as soon as possible. God bless you.</p>
                  <button onClick={() => setSubmitted(false)}
                    className="px-8 py-3.5 bg-[#B51657] hover:bg-[#981149] text-white font-body font-semibold rounded-full text-sm shadow-[0_10px_28px_rgba(181,22,87,0.28)] transition-colors">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
                  <div className="h-1.5 bg-gradient-to-r from-crimson-500 via-burgundy-500 to-crimson-500" />
                  <div className="p-8 md:p-10">
                 <h2 
  className="font-heading text-2xl font-semibold mb-1"
  style={{ color: "#B51657" }}
>
  Send a Message
</h2>
                    <p className="text-onyx-500 text-sm font-body mb-8">Fill in the form and we will get back to you promptly.</p>
                    <form onSubmit={onSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[10px] font-accent text-onyx-600 tracking-[0.15em] uppercase mb-2">Name *</label>
                          <input required name="name" value={form.name} onChange={e => set('name', e.target.value)}
                            className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm font-body focus:outline-none focus:border-crimson-400 focus:ring-2 focus:ring-crimson-500/10 bg-ivory-50 transition-all"
                            placeholder="Your full name" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-accent text-onyx-600 tracking-[0.15em] uppercase mb-2">Phone</label>
                          <input name="phone" value={form.phone} onChange={e => set('phone', e.target.value)}
                            className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm font-body focus:outline-none focus:border-crimson-400 focus:ring-2 focus:ring-crimson-500/10 bg-ivory-50 transition-all"
                            placeholder="+91 ..." />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-accent text-onyx-600 tracking-[0.15em] uppercase mb-2">Email *</label>
                        <input required name="email" value={form.email} onChange={e => set('email', e.target.value)} type="email"
                          className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm font-body focus:outline-none focus:border-crimson-400 focus:ring-2 focus:ring-crimson-500/10 bg-ivory-50 transition-all"
                          placeholder="your@email.com" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-accent text-onyx-600 tracking-[0.15em] uppercase mb-2">Subject</label>
                        <input name="subject" value={form.subject} onChange={e => set('subject', e.target.value)}
                          className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm font-body focus:outline-none focus:border-crimson-400 focus:ring-2 focus:ring-crimson-500/10 bg-ivory-50 transition-all"
                          placeholder="How can we help?" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-accent text-onyx-600 tracking-[0.15em] uppercase mb-2">Message *</label>
                        <textarea required name="message" value={form.message} onChange={e => set('message', e.target.value)} rows={4}
                          className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm font-body focus:outline-none focus:border-crimson-400 focus:ring-2 focus:ring-crimson-500/10 bg-ivory-50 resize-none transition-all"
                          placeholder="Your message..." />
                      </div>
                      <button type="submit" disabled={submitting}
                        className="w-full py-4 bg-[#B51657] hover:bg-[#981149] text-white font-body font-semibold rounded-xl text-sm shadow-[0_10px_28px_rgba(181,22,87,0.28)] tracking-wide inline-flex items-center justify-center gap-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                        <Icon name="send" className="w-4 h-4" />
                        {submitting ? 'Sending...' : 'Send Message'}
                      </button>
                      {result && <p className="text-sm text-crimson-600 font-body text-center">{result}</p>}
                    </form>
                  </div>
                </div>
              )}
            </Reveal>
          </div>

          <Reveal className="mt-14">
            <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <p className="font-accent text-crimson-500 text-[10px] tracking-[0.25em] uppercase mb-2">Find Us</p>
                  <h2 className="font-heading text-3xl font-bold text-[#B51657]">Savior's Heartbeat Ministries</h2>

                </div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-luxury inline-flex justify-center px-6 py-3 text-white font-body font-semibold rounded-full text-sm shadow-luxury"
                >
                  Open in Google Maps
                </a>
              </div>
              <iframe
                title="Savior's Heartbeat Ministries location map"
                src={mapEmbedUrl}
                className="w-full h-[360px] md:h-[440px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
