'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Pastor Deva', href: '/about/about-deva' },
  { label: 'Board of Directors', href: '/about/board-of-directors' },
  {
    label: 'Ministry', href: '#',
    sub: [
      { label: 'Preaching the Gospel', href: '/ministry/preaching-the-gospel', desc: "Sharing Christ's hope with every soul" },
      { label: "Conducting Pastors' Conferences", href: '/ministry/pastors-conferences', desc: 'Training shepherds for effective ministry' },
      { label: 'Helping Pastors & Building Churches', href: '/ministry/helping-pastors-building-churches', desc: 'Helping local churches thrive and expand' },
      { label: 'Orphans & Poor Children', href: '/ministry/orphans-poor-children', desc: 'Food, education, family and hope' },
      { label: 'Widows', href: '/ministry/widows', desc: 'Honor, dignity, comfort and care' },
      { label: 'Odisha Outreach', href: '/ministry/odisha-outreach', desc: 'Reaching unreached villages and districts' },
      { label: 'SPANDANA Magazine', href: '/ministry/magazine', desc: 'Telugu Christian publication since 1976' },
    ]
  },
  {
    label: 'Support', href: '#',
    sub: [
      { label: 'Prayer Support', href: '/support/prayer-support', desc: 'Stand with us in intercession' },
      { label: 'Mission Trip to India', href: '/support/mission-trip-to-india', desc: 'Preach, teach and serve in the field' },
      { label: 'Financial Partnership', href: '/support/financial-partnership', desc: 'Sponsor crusades, pastors and care' },
      { label: 'TV Ministries', href: '/support/tv-ministries', desc: 'Broadcasting hope every morning' },
    ]
  },
  {
    label: 'Media', href: '#',
    sub: [
      { label: 'Photo Gallery', href: '/media/photo-gallery', desc: 'Glimpses of God\'s work' },
      { label: 'Books', href: '/media/books', desc: 'Spiritual literature' },
    ]
  },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <header className={`absolute top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/8 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-5'
      }`}>
        {/* Top ribbon */}
        {false && (
          <div className="hidden lg:flex justify-end items-center px-8 -mt-5 mb-2 py-1.5 bg-primary/80 backdrop-blur-sm text-white/80 text-xs gap-6">
            <a href="tel:304 620 1974" className="hover:text-gold transition-colors flex items-center gap-1.5">
              <span>📞</span> 304 620 1974
            </a>
            <a href="mailto:saviorsheartbeatin@gmail.com" className="hover:text-gold transition-colors flex items-center gap-1.5">
              <span>✉</span> saviorsheartbeatin@gmail.com
            </a>
            <span className="flex items-center gap-1.5">
              <span>📍</span> Vijayawada, Andhra Pradesh
            </span>
          </div>
        )}

        <div className="mx-auto flex w-full max-w-[118rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-7 xl:px-10 2xl:px-12">
          {/* Logo */}
          <Link href="/" className="group flex min-w-0 shrink-0 items-center gap-3">
            <div className="relative h-12 w-12 xl:h-14 xl:w-14">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-glow transition-all duration-500 animate-pulse-glow group-hover:shadow-glow-lg xl:h-14 xl:w-14">
                <Image
                  src="/svhb.webp"
                  alt="Savior's Heartbeat Ministries logo"
                  width={58}
                  height={58}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-gold/30 to-primary/30 blur-sm -z-10 group-hover:blur-md transition-all duration-500" />
            </div>
            <div className="block min-w-0">
              <div className="font-display text-[#B51657] font-semibold text-[17px] leading-none tracking-wide sm:text-[18px] lg:text-[15px] xl:text-base">
                Savior&apos;s Heartbeat
              </div>
              <div className="mt-1 text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-gold sm:text-[11px] sm:tracking-[0.24em] lg:text-[9px] xl:text-[10px] xl:tracking-[0.25em]">
                Ministries
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex xl:gap-2 2xl:gap-3">
            {nav.map((item) => (
              <div
                key={item.label}
                className="relative shrink-0"
                onMouseEnter={() => item.sub && setDesktopOpen(item.label)}
                onMouseLeave={() => item.sub && setDesktopOpen(null)}
                onFocus={() => item.sub && setDesktopOpen(item.label)}
              >
                <Link
                  href={item.href}
                  className="group flex items-center gap-1 whitespace-nowrap rounded-lg px-2 py-2 text-sm font-sans font-semibold tracking-wide text-white/85 transition-all duration-200 hover:bg-white/8 hover:text-[#22C55E] xl:px-3 xl:text-[15px] 2xl:px-4 2xl:text-base"
                >
                  {item.label}
                  {item.sub && (
                    <svg className="w-3 h-3 mt-0.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
                    </svg>
                  )}
                </Link>

                {item.sub && (
                  <div
                    className={`drop-menu absolute top-full left-1/2 w-80 -translate-x-1/2 pt-2 ${
                      desktopOpen === item.label ? 'drop-menu-open' : ''
                    }`}
                  >
                    <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.5)] overflow-hidden">
                      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#22C55E] to-transparent" />
                      <div className="p-2">
                        {item.sub.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setDesktopOpen(null)}
                            className="flex flex-col px-4 py-3 rounded-xl hover:bg-white/8 transition-all duration-150 group"
                          >
                            <span className="text-white/90 text-sm font-sans font-medium group-hover:text-[#22C55E] transition-colors">{child.label}</span>
                            <span className="text-white/40 text-xs mt-0.5 font-sans group-hover:text-white/60 transition-colors">{child.desc}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex shrink-0 items-center gap-3 lg:pl-2 xl:pl-4">
            <Link
              href="/ministry/prayer-request"
              className="btn-shine hidden items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-primary to-wine px-4 py-2.5 text-[12px] font-sans font-semibold text-white shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg lg:flex xl:px-5 xl:text-sm 2xl:px-6"
            >
              <span>🙏</span> Prayer Request
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-xl p-2.5 text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label="Menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? 'opacity-0 -translate-x-2' : ''}`} />
                <span className={`h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 bottom-0 w-full bg-black backdrop-blur-xl border-l border-white/10 shadow-2xl overflow-y-auto">
            {/* Mobile header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white overflow-hidden flex-shrink-0">
                  <Image
                    src="/svhb.webp"
                    alt="Savior's Heartbeat Ministries logo"
                    width={46}
                    height={46}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-display text-[#B51657] text-xl font-semibold leading-none">Savior&apos;s Heartbeat</div>
                  <div className="text-gold text-xs font-sans font-medium tracking-[0.25em] uppercase mt-1">Ministries</div>
                </div>
              </div>
              <button onClick={() => setMobileOpen(false)} className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white rounded-lg hover:bg-white/10">✕</button>
            </div>
            <nav className="p-4 space-y-1">
              {nav.map((item) => (
                <div key={item.label}>
                  {item.sub ? (
                    <div>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 text-white/85 text-sm font-sans font-medium rounded-xl hover:bg-white/8 hover:text-[#22C55E] transition-colors"
                      >
                        {item.label}
                        <svg className={`w-4 h-4 transition-transform duration-300 ${mobileExpanded === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
                        </svg>
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="ml-4 mt-1 space-y-0.5 border-l border-primary/30 pl-4">
                          {item.sub.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2.5 text-sm text-white/65 hover:text-[#22C55E] font-sans rounded-lg hover:bg-white/8 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-white/85 text-sm font-sans font-medium rounded-xl hover:bg-white/8 hover:text-[#22C55E] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <Link href="/ministry/prayer-request" onClick={() => setMobileOpen(false)}
                  className="block text-center py-3.5 bg-gradient-to-r from-primary to-wine text-white font-semibold rounded-2xl text-sm shadow-glow">
                  🙏 Send Prayer Request
                </Link>
                <Link href="/support/financial-partnership" onClick={() => setMobileOpen(false)}
                  className="block text-center py-3.5 border border-gold/40 text-gold font-semibold rounded-2xl text-sm hover:bg-gold/10">
                  💝 Support the Ministry
                </Link>
              </div>
              <div className="hidden">
                <p>📞 304 620 1974</p>
                <p>✉ saviorsheartbeatin@gmail.com</p>
                <p>📍 Vijayawada, India</p>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
