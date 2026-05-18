'use client'

import { type FormEvent, useState } from 'react'
import Reveal from '@/components/ui/Reveal'

const contactCards = [
  { icon: 'phone', title: 'Mobile Call', line1: '304 620 1974', line2: 'Available 24/7 for Prayer', href: 'tel:3046201974' },
  { icon: 'whatsapp', title: 'WhatsApp Chat', line1: '+91 7399577999', line2: 'having whatsapp on your phone you can reach Pastor Deva with local call', href: 'https://wa.me/917399577999' },
  { icon: 'mail', title: 'Email Support', line1: 'saviorsheartbeat777@aol.com', line2: 'Deep, we could not get infosaviorsheartbeat@gmail.com if you can try please try for me', href: 'mailto:saviorsheartbeat777@aol.com' },
]

function Icon({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  const common = {
    className,
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  if (name === 'phone') {
    return (
      <svg {...common}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.89.66 2.78a2 2 0 0 1-.45 2.11L8.09 9.84a16 16 0 0 0 6.07 6.07l1.23-1.23a2 2 0 0 1 2.11-.45c.89.31 1.82.53 2.78.66A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }
  if (name === 'whatsapp') {
    return (
      <svg {...common} viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.428 2.016 13.982 1.01 11.4 1.01c-5.436 0-9.863 4.374-9.867 9.803-.001 1.73.457 3.419 1.323 4.908l-.994 3.633 3.785-.981zm11.534-6.852c-.307-.154-1.815-.895-2.097-.997-.281-.103-.486-.154-.69.154-.204.307-.792.997-.971 1.203-.178.205-.357.228-.664.075-1.272-.639-2.122-1.119-2.969-2.571-.223-.383.223-.356.639-1.189.076-.154.038-.288-.019-.397-.057-.109-.485-1.17-.664-1.599-.174-.419-.347-.362-.486-.369-.126-.006-.271-.007-.417-.007-.145 0-.383.054-.583.271-.2.218-.765.748-.765 1.822 0 1.074.779 2.112.888 2.261.11.15 1.531 2.338 3.708 3.28 1.152.499 1.638.535 2.227.447.59-.089 1.815-.743 2.071-1.429.256-.686.256-1.274.179-1.399-.076-.124-.281-.202-.588-.357z"/>
      </svg>
    )
  }
  if (name === 'mail') {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    )
  }
  if (name === 'send') {
    return (
      <svg {...common}>
        <path d="m22 2-7 20-4-9-9-4 20-7z" />
        <path d="M22 2 11 13" />
      </svg>
    )
  }
  return null
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    setError('')

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      setError('Contact form service is not configured yet. Please add the Web3Forms access key.')
      setSubmitting(false)
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: subject || `Message from ${name}`,
          from_name: name,
          name: name,
          email: email,
          phone: phone || 'Not provided',
          message: message,
          form_type: 'Contact Us',
          to_email: 'infosaviorsheartbeat@gmail.com',
        }),
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send message.')
      }

      setSubmitted(true)
      setName('')
      setEmail('')
      setPhone('')
      setSubject('')
      setMessage('')
    } catch (sendError) {
      setError(sendError instanceof Error ? sendError.message : 'Unable to send message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="w-full bg-[#FCFBF7] min-h-screen selection:bg-[#9E0A44] selection:text-white">
      {/* Dynamic Immersive Hero Banner Section */}
      <div className="relative flex min-h-[440px] items-center justify-center overflow-hidden bg-[#020617]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85 scale-100" 
          style={{ backgroundImage: 'url(/up.webp)' }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center flex flex-col items-center justify-center">
          <span className="text-[11px] font-semibold text-white uppercase tracking-[0.3em] opacity-80 mb-3 block">
            — Support Our Mission —
          </span>
          
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-wide mb-6">
            Contact Us
          </h1>

          <p className="mx-auto max-w-2xl font-body text-base md:text-lg text-white/90 font-light leading-relaxed">
            Stand with us in intercession for the Gospel, families, pastors, children, widows, and every open door.
          </p>
        </div>
      </div>

      {/* Main Structural Hub Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Context Info Sidebar */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
            <Reveal dir="up">
              <div className="rounded-3xl border border-zinc-200/60 bg-white p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
                <h3 className="font-heading text-xl font-semibold text-zinc-900 mb-2">Direct Contact</h3>
                <p className="font-body text-sm text-zinc-500 mb-6">Reach our team directly across platforms for immediate support.</p>
                
                <div className="space-y-3">
                  {contactCards.map((card) => (
                    <a
                      key={card.title}
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="flex items-center gap-4 rounded-2xl border border-zinc-100 bg-[#FCFBF7]/70 p-4 transition-all duration-300 hover:bg-white hover:border-[#9E0A44]/30 hover:shadow-md hover:shadow-[#9E0A44]/5 group"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#9E0A44]/10 bg-[#9E0A44]/5 text-[#9E0A44] transition-colors duration-300 group-hover:bg-[#9E0A44] group-hover:text-white">
                        <Icon name={card.icon} className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-heading text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-0.5">{card.title}</div>
                        <div className="font-body text-sm font-semibold text-zinc-800 group-hover:text-[#9E0A44] transition-colors break-words">
                          {card.line1}
                        </div>
                        <div className="font-body text-xs text-zinc-400 mt-0.5">{card.line2}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interaction Form Container */}
          <div className="lg:col-span-7">
            <Reveal dir="up">
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-3xl border border-zinc-100 bg-white p-12 text-center shadow-[0_4px_25px_rgba(0,0,0,0.02)] min-h-[480px]">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="mb-2 font-heading text-2xl font-bold text-zinc-900">Submitted Successfully!</h3>
                  <p className="mb-8 max-w-sm font-body text-sm text-zinc-500 leading-relaxed">
                    Thank you for reaching out. We will respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="rounded-xl bg-zinc-900 px-6 py-3 font-body text-sm font-semibold text-white transition-all hover:bg-zinc-800 shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="overflow-hidden rounded-3xl border border-zinc-200/60 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
                  <div className="h-1.5 bg-[#9E0A44]" />
                  <div className="p-8 sm:p-10">
                    <h2 className="mb-1 font-heading text-2xl font-bold text-zinc-900">Send a Secure Message</h2>
                    <p className="mb-8 font-body text-sm text-zinc-500">Fill out your information below and our office will get back to you cleanly.</p>
                    
                    <form onSubmit={onSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {/* Name Input */}
                        <div>
                          <label className="mb-1.5 block font-accent text-[10px] uppercase tracking-wider font-semibold text-zinc-400">Name *</label>
                          <input
                            required
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            className="w-full rounded-xl border border-zinc-200 bg-[#FCFBF7]/50 px-4 py-3 font-body text-sm text-zinc-900 placeholder-zinc-400 transition-all focus:border-[#9E0A44] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#9E0A44]/5"
                            placeholder="Your full name"
                          />
                        </div>
                        
                        {/* Phone Input */}
                        <div>
                          <label className="mb-1.5 block font-accent text-[10px] uppercase tracking-wider font-semibold text-zinc-400">Phone</label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            className="w-full rounded-xl border border-zinc-200 bg-[#FCFBF7]/50 px-4 py-3 font-body text-sm text-zinc-900 placeholder-zinc-400 transition-all focus:border-[#9E0A44] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#9E0A44]/5"
                            placeholder="+91 ..."
                          />
                        </div>
                      </div>

                      {/* Email Input */}
                      <div>
                        <label className="mb-1.5 block font-accent text-[10px] uppercase tracking-wider font-semibold text-zinc-400">Email Address *</label>
                        <input
                          required
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          className="w-full rounded-xl border border-zinc-200 bg-[#FCFBF7]/50 px-4 py-3 font-body text-sm text-zinc-900 placeholder-zinc-400 transition-all focus:border-[#9E0A44] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#9E0A44]/5"
                          placeholder="you@example.com"
                        />
                      </div>

                      {/* Subject Input */}
                      <div>
                        <label className="mb-1.5 block font-accent text-[10px] uppercase tracking-wider font-semibold text-zinc-400">Subject</label>
                        <input
                          type="text"
                          value={subject}
                          onChange={(event) => setSubject(event.target.value)}
                          className="w-full rounded-xl border border-zinc-200 bg-[#FCFBF7]/50 px-4 py-3 font-body text-sm text-zinc-900 placeholder-zinc-400 transition-all focus:border-[#9E0A44] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#9E0A44]/5"
                          placeholder="How can we assist you?"
                        />
                      </div>

                      {/* Message Input */}
                      <div>
                        <label className="mb-1.5 block font-accent text-[10px] uppercase tracking-wider font-semibold text-zinc-400">Message Context *</label>
                        <textarea
                          required
                          value={message}
                          onChange={(event) => setMessage(event.target.value)}
                          rows={4}
                          className="w-full resize-none rounded-xl border border-zinc-200 bg-[#FCFBF7]/50 px-4 py-3.5 font-body text-sm text-zinc-900 placeholder-zinc-400 transition-all focus:border-[#9E0A44] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#9E0A44]/5"
                          placeholder="Write your message details here..."
                        />
                      </div>

                      {/* Action Element Submission */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#9E0A44] py-3.5 px-6 font-body text-sm font-semibold tracking-wide text-white transition-all hover:bg-[#800836] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none"
                        >
                          {submitting ? (
                            <span className="flex items-center gap-2">
                              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Processing...
                            </span>
                          ) : (
                            <>
                              <Icon name="send" className="h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                      
                      {error && (
                        <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-100 font-body text-xs font-medium text-red-700">
                          {error}
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              )}
            </Reveal>
          </div>

        </div>
      </div>
    </div>
  )
}