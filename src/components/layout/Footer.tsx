import Link from 'next/link'
import Image from 'next/image'

const links = {
  ministry: [
    { l: 'Preaching the Gospel', h: '/ministry/preaching-the-gospel' },
    { l: "Pastors' Conferences", h: '/ministry/pastors-conferences' },
    { l: 'Helping Pastors & Churches', h: '/ministry/helping-pastors-building-churches' },
    { l: 'Orphans & Poor Children', h: '/ministry/orphans-poor-children' },
    { l: 'Widows', h: '/ministry/widows' },
    { l: 'Odisha Outreach', h: '/ministry/odisha-outreach' },
    { l: 'SPANDANA Magazine', h: '/ministry/magazine' },
  ],
  charity: [
    { l: 'Prayer Support', h: '/support/prayer-support' },
    { l: 'Mission Trip to India', h: '/support/mission-trip-to-india' },
    { l: 'Financial Partnership', h: '/support/financial-partnership' },
    { l: 'TV Ministries', h: '/support/tv-ministries' },
    { l: 'About Deva', h: '/about/about-deva' },
    { l: 'Board of Directors', h: '/about/board-of-directors' },
  ],
  media: [
    { l: 'Photo Gallery', h: '/media/photo-gallery' },
    { l: 'Books', h: '/media/books' },
    { l: 'Contact Us', h: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-black relative overflow-hidden">
      {/* top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mt-px" />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-wine/5 blur-3xl pointer-events-none" />

      {/* Service times marquee */}
   {/* Service times marquee */}
<div className="border-y border-white/5 py-3 overflow-hidden bg-[#B51657]">
  <div className="marquee-track text-white/90 text-xs font-sans gap-10 font-medium">
    {[...Array(2)].map((_, i) => (
      <span key={i} className="flex items-center gap-10 pr-10">
        <span className="flex items-center gap-2">
          <span className="text-white/40">✦</span> Sunday Worship: 10:30 AM &amp; 07:30 PM
        </span>
        <span className="flex items-center gap-2">
          <span className="text-white/40">✦</span> Fasting Prayer: Every Friday 07:30 PM
        </span>
        <span className="flex items-center gap-2">
          <span className="text-white/40">✦</span> Youth Meeting: Sunday 02:00 PM
        </span>
        <span className="flex items-center gap-2">
          <span className="text-white/40">✦</span> Sunday School: Every Sunday during Worship Service
        </span>
        <span className="flex items-center gap-2">
          <span className="text-white/40">✦</span> All Night Prayers: Last Friday 09:00 PM onwards
        </span>
        <span className="flex items-center gap-2">
          <span className="text-white/40">✦</span> Location: Vijayawada, Andhra Pradesh
        </span>
      </span>
    ))}
  </div>
</div>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-glow overflow-hidden">
                <Image
                  src="/svhb.webp"
                  alt="Savior's Heartbeat Ministries logo"
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="font-display text-[#B51657] text-lg font-semibold leading-tight">Savior&apos;s Heartbeat</div>
                <div className="text-[#ffff] text-xs font-sans tracking-[0.25em] uppercase">Ministries · Est. 1999</div>
              </div>
            </div>

            <p className="text-white/50 text-sm font-sans leading-relaxed mb-6 max-w-sm">
              Preaching and Preparing People for HIS Coming. Serving communities across India with the transforming love of Jesus Christ since 1999.
            </p>

            <blockquote className="border-l-2 border-gold/40 pl-4 mb-6">
              <p className="text-white/60 text-sm font-display italic leading-relaxed">
                &ldquo;May the spirit of the Lord, speak to your heart to fulfil the Savior&apos;s Heartbeat.&rdquo;
              </p>
            </blockquote>

            <div className="space-y-2.5 text-sm">
              <a href="tel:304 620 1974" className="flex items-center gap-3 text-white/50 hover:text-[#22C55E] transition-colors group">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/30 transition-colors text-sm">📞</span>
                304 620 1974
              </a>
              <a href="tel:+917399577999" className="flex items-center gap-3 text-white/50 hover:text-[#22C55E] transition-colors group">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/30 transition-colors text-sm">☎</span>
                +91 7399577999
              </a>
              <a href="mailto:saviorsheartbeatin@gmail.com" className="flex items-center gap-3 text-white/50 hover:text-[#22C55E] transition-colors group">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/30 transition-colors text-sm">✉</span>
                saviorsheartbeatin@gmail.com
              </a>
              <div className="flex items-center gap-3 text-white/50">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm">📍</span>
                Vijayawada, Andhra Pradesh, India
              </div>
            </div>
          </div>

          {/* Links */}
          {[
            { title: 'Ministry', items: links.ministry },
            { title: 'Support & Media', items: [...links.charity, ...links.media] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-sans font-semibold text-sm mb-5 uppercase tracking-[0.12em]">{col.title}</h4>
           <ul className="space-y-3">
  {col.items.map((l) => (
    <li key={l.h}>
      <Link href={l.h} className="flex items-center gap-2 text-white/45 hover:text-[#22C55E] text-sm font-sans transition-all duration-200 group">
        <span className="w-1 h-1 rounded-full bg-[#22C55E]/40 group-hover:bg-[#22C55E] group-hover:w-3 transition-all duration-300" />
        {l.l}
      </Link>
    </li>
  ))}
</ul>
            </div>
          ))}

          {/* CTA panel */}
          <div className="space-y-4">
            <h4 className="text-white font-sans font-semibold text-sm mb-5 uppercase tracking-[0.12em]">Get Involved</h4>
            <Link href="/ministry/prayer-request"
              className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-wine/20 border border-primary/30 hover:border-primary/60 transition-all duration-300 group hover:shadow-glow">
              <span className="text-xl">🙏</span>
              <div>
                <div className="text-white text-sm font-semibold group-hover:text-gold transition-colors">Prayer Request</div>
                <div className="text-white/40 text-xs">Send us your needs</div>
              </div>
            </Link>
            <Link href="/support/financial-partnership"
              className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 hover:border-gold/50 transition-all duration-300 group">
              <span className="text-xl">💝</span>
              <div>
                <div className="text-white text-sm font-semibold group-hover:text-gold transition-colors">Support Ministry</div>
                <div className="text-white/40 text-xs">Partner with us</div>
              </div>
            </Link>
            <Link href="/contact"
              className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 transition-all duration-300 group">
              <span className="text-xl">📬</span>
              <div>
                <div className="text-white text-sm font-semibold group-hover:text-white transition-colors">Contact Us</div>
                <div className="text-white/40 text-xs">We&apos;d love to hear from you</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

  <div className="border-t border-white/5 bg-black">
  <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
    {/* Copyright Text */}
    <p className="text-white/70 md:text-white/30 text-[10px] font-sans uppercase tracking-wider order-3 md:order-1">
      © 2026 Savior&apos;s Heartbeat Ministries. All rights reserved.
    </p>

    {/* Developer Credit with Logo and Link */}
    <div className="flex items-center gap-3 order-1 md:order-2 group">
      <span className="text-white/70 md:text-white/20 text-[10px] font-sans uppercase tracking-[0.15em]">Designed & Developed by</span>
      <a 
        href="https://www.pandjtechnologies.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 transition-all duration-300 hover:opacity-80"
      >
        <div className="w-6 h-6 rounded-md overflow-hidden bg-white/10 p-1 flex items-center justify-center border border-white/5 group-hover:border-[#22C55E]/50">
          <Image 
            src="/pjlogo.webp" // Ensure you have your logo at this path
            alt="P & J Technologies"
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
        <span className="text-white text-[11px] font-sans font-bold tracking-tighter transition-colors group-hover:text-[#22C55E]">
          P & J <span className="text-[#ffff]">TECHNOLOGIES</span>
        </span>
      </a>
    </div>
    
    {/* Location */}
    <p className="text-white/70 md:text-white/20 text-[10px] font-sans uppercase tracking-wider order-2 md:order-3">
      Vijayawada, Andhra Pradesh, India
    </p>
  </div>
</div>
    </footer>
  )
}
