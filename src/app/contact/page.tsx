'use client'

import { type FormEvent, useState } from 'react'
import Reveal from '@/components/ui/Reveal'

const mapUrl =
  'https://www.google.com/maps/place/38%C2%B053%2715.0%22N+79%C2%B039%2750.3%22W/@38.887553,-79.6639601,20z/data=!4m4!3m3!8m2!3d38.8875055!4d-79.6639601?entry=ttu'
const mapEmbedUrl = 'https://www.google.com/maps?q=38.8875055,-79.6639601&z=18&output=embed'

const contactCards = [
  { icon: 'phone', title: 'Mobile', lines: ['304 620 1974'], href: 'tel:304 620 1974' },
  { icon: 'phone', title: '+91 7399577999', lines: ['Reach Pastor Deva on WhatsApp for local calls'], href: 'https://wa.me/917399577999' },
  { icon: 'mail', title: 'Email', lines: ['devashd@aol.com'], href: 'mailto:devashd@aol.com' },
  { icon: 'map', title: 'Directions', lines: ['Saviors Heartbeat Ministries', 'Open Google Maps'], href: mapUrl },
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
  if (name === 'mail') {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    )
  }
  if (name === 'map') {
    return (
      <svg {...common}>
        <path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3z" />
        <path d="M9 3v15" />
        <path d="M15 6v15" />
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
  return (
    <svg {...common}>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const set = (key: string, value: string) => setForm((current) => ({ ...current, [key]: value }))

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = encodeURIComponent(form.subject || `Message from ${form.name}`)
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || 'Not provided'}`,
        '',
        form.message,
      ].join('\n')
    )

    window.location.href = `mailto:devashd@aol.com?subject=${subject}&body=${body}`
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div>
      <div className="relative flex min-h-[500px] items-center overflow-hidden bg-[#12070c]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/up.webp)' }} />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 pb-16 pt-24 text-center">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[#E9A5BB]/70" />
            <span className="font-accent text-[10px] uppercase tracking-[0.35em] text-white">Get in Touch</span>
            <span className="h-px w-10 bg-[#E9A5BB]/70" />
          </div>
          <h1 className="mb-4 font-heading text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">Contact Us</h1>
          <p className="mx-auto max-w-xl font-body text-lg text-white/75">
            We&apos;d love to hear from you - for prayer, partnership, or any enquiry.
          </p>
        </div>
      </div>

      <section className="bg-ivory-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <Reveal dir="left" className="space-y-5 lg:col-span-2">
              {contactCards.map((card) => (
                <div
                  key={card.title}
                  className="card-lift flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-crimson-100 bg-crimson-50 text-crimson-600">
                    <Icon name={card.icon} />
                  </div>
                  <div>
                    <div className="mb-1 font-heading text-sm font-semibold text-onyx-800">{card.title}</div>
                    {card.lines.map((line) => (
                      <a
                        key={line}
                        href={card.href}
                        target={card.href.startsWith('http') ? '_blank' : undefined}
                        rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="block break-all font-body text-sm text-onyx-500 transition-colors hover:text-crimson-500"
                      >
                        {line}
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              <div className="relative overflow-hidden rounded-2xl p-6" style={{ background: 'linear-gradient(135deg,#8B0A35,#B51657)' }}>
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: 'radial-gradient(circle at 2px 2px,white 1px,transparent 0)', backgroundSize: '16px 16px' }}
                />
                <div className="relative">
                  <h4 className="mb-4 font-heading text-sm font-semibold text-white">Service Times</h4>
                  <div className="space-y-2.5 text-sm">
                    {[
                      ['Sunday Worship', '10:30 AM & 07:30 PM'],
                      ['Fasting Prayer', 'Every Friday 07:30 PM'],
                      ['Youth Meeting', 'Sunday 02:00 PM'],
                      ['Sunday School', 'Every Sunday during worship'],
                      ['All Night Prayers', 'Last Friday 09:00 PM onwards'],
                    ].map(([label, time]) => (
                      <div key={label} className="flex justify-between gap-3">
                        <span className="font-body text-white/65">{label}</span>
                        <span className="text-right font-body text-white/90">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal dir="right" className="lg:col-span-3">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-gray-100 bg-white p-12 text-center shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
                  <div className="shadow-luxury mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-crimson-500 to-burgundy-700 text-3xl text-white">
                    OK
                  </div>
                  <h3 className="mb-3 font-heading text-3xl font-semibold text-onyx-900">Message Ready!</h3>
                  <p className="mb-8 max-w-xs font-body text-sm text-onyx-500">
                    Your email app has opened with your message. Please send it from there.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="rounded-full bg-[#B51657] px-8 py-3.5 font-body text-sm font-semibold text-white shadow-[0_10px_28px_rgba(181,22,87,0.28)] transition-colors hover:bg-[#981149]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
                  <div className="h-1.5 bg-gradient-to-r from-crimson-500 via-burgundy-500 to-crimson-500" />
                  <div className="p-8 md:p-10">
                    <h2 className="mb-1 font-heading text-2xl font-semibold text-[#B51657]">Send a Message</h2>
                    <p className="mb-8 font-body text-sm text-onyx-500">Fill in the form and we will get back to you promptly.</p>
                    <form onSubmit={onSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block font-accent text-[10px] uppercase tracking-[0.15em] text-onyx-600">Name *</label>
                          <input
                            required
                            name="name"
                            value={form.name}
                            onChange={(event) => set('name', event.target.value)}
                            className="w-full rounded-xl border border-gray-200 bg-ivory-50 px-4 py-3.5 font-body text-sm transition-all focus:border-crimson-400 focus:outline-none focus:ring-2 focus:ring-crimson-500/10"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block font-accent text-[10px] uppercase tracking-[0.15em] text-onyx-600">Phone</label>
                          <input
                            name="phone"
                            value={form.phone}
                            onChange={(event) => set('phone', event.target.value)}
                            className="w-full rounded-xl border border-gray-200 bg-ivory-50 px-4 py-3.5 font-body text-sm transition-all focus:border-crimson-400 focus:outline-none focus:ring-2 focus:ring-crimson-500/10"
                            placeholder="+91 ..."
                          />
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block font-accent text-[10px] uppercase tracking-[0.15em] text-onyx-600">Email *</label>
                        <input
                          required
                          name="email"
                          value={form.email}
                          onChange={(event) => set('email', event.target.value)}
                          type="email"
                          className="w-full rounded-xl border border-gray-200 bg-ivory-50 px-4 py-3.5 font-body text-sm transition-all focus:border-crimson-400 focus:outline-none focus:ring-2 focus:ring-crimson-500/10"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block font-accent text-[10px] uppercase tracking-[0.15em] text-onyx-600">Subject</label>
                        <input
                          name="subject"
                          value={form.subject}
                          onChange={(event) => set('subject', event.target.value)}
                          className="w-full rounded-xl border border-gray-200 bg-ivory-50 px-4 py-3.5 font-body text-sm transition-all focus:border-crimson-400 focus:outline-none focus:ring-2 focus:ring-crimson-500/10"
                          placeholder="How can we help?"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block font-accent text-[10px] uppercase tracking-[0.15em] text-onyx-600">Message *</label>
                        <textarea
                          required
                          name="message"
                          value={form.message}
                          onChange={(event) => set('message', event.target.value)}
                          rows={4}
                          className="w-full resize-none rounded-xl border border-gray-200 bg-ivory-50 px-4 py-3.5 font-body text-sm transition-all focus:border-crimson-400 focus:outline-none focus:ring-2 focus:ring-crimson-500/10"
                          placeholder="Your message..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B51657] py-4 font-body text-sm font-semibold tracking-wide text-white shadow-[0_10px_28px_rgba(181,22,87,0.28)] transition-colors hover:bg-[#981149]"
                      >
                        <Icon name="send" className="h-4 w-4" />
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </Reveal>
          </div>

          <Reveal className="mt-14">
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
              <div className="flex flex-col gap-4 p-6 md:flex-row md:items-end md:justify-between md:p-8">
                <div>
                  <p className="mb-2 font-accent text-[10px] uppercase tracking-[0.25em] text-crimson-500">Find Us</p>
                  <h2 className="font-heading text-3xl font-bold text-[#B51657]">Savior&apos;s Heartbeat Ministries</h2>
                </div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-luxury inline-flex justify-center rounded-full px-6 py-3 font-body text-sm font-semibold text-white shadow-luxury"
                >
                  Open in Google Maps
                </a>
              </div>
              <iframe
                title="Savior's Heartbeat Ministries location map"
                src={mapEmbedUrl}
                className="h-[360px] w-full border-0 md:h-[440px]"
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
