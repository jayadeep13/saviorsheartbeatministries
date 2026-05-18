import Link from 'next/link'
import { ArrowRight, Heart } from 'lucide-react'
import Reveal from '../ui/Reveal'

export default function ContactCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#FAF8F5]">
      {/* Universal Grid Layout Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="relative max-w-5xl mx-auto px-6 z-10">
        <Reveal>
          {/* Light Component Canvas Container with Premium Deep Corner Radial Pink Glows */}
          <div className="relative bg-white/90 backdrop-blur-md rounded-[32px] border border-neutral-200/50 p-10 md:p-20 shadow-[0_30px_70px_rgba(17,22,46,0.03)] overflow-hidden">
            
            {/* Exactly positioned pink overlay accents matching your custom design layout */}
            <div className="absolute bottom-[-15%] left-[-10%] w-[260px] h-[260px] bg-[#B51657] opacity-[0.14] blur-[55px] rounded-full pointer-events-none" />
            <div className="absolute top-[-15%] right-[-10%] w-[260px] h-[260px] bg-[#B51657] opacity-[0.12] blur-[55px] rounded-full pointer-events-none" />

            <div className="relative z-10 text-center flex flex-col items-center">
              
              {/* Universal Heart-Handshake Center Icon */}
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#B51657]/5 border border-[#B51657]/15 text-[#B51657] shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.82 2.96 0l1.92-1.92" />
                  <path d="m14 9 2.04 2.04a2.17 2.17 0 0 1 0 3.08v0a2.17 2.17 0 0 1-3.08 0l-1.92-1.92" />
                </svg>
              </div>

              {/* Your Requested Cinematic Headings */}
              <h2 className="font-[Playfair_Display] text-4xl sm:text-5xl md:text-6xl font-medium text-[#11162E] tracking-tight max-w-3xl leading-[1.15] mb-6">
                We’d Love to <br />
                <span className="italic font-light text-[#B51657]">Hear From You</span>
              </h2>

              {/* Your Requested Focused Subtext */}
              <p className="text-[#30375F]/80 text-sm md:text-base font-body leading-relaxed max-w-2xl mb-12 font-medium">
                Whether you need prayer, want to support the ministry, or simply want to connect—our doors and hearts are open to you.
              </p>

              {/* Dual Premium Buttons Layout with Premium Matte Black & White Border Alternatives */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
                {/* Send Prayer Request - Solid Black Premium Button */}
                <Link
                  href="/ministry/prayer-request"
                  className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-[#090A1A] px-11 py-5 font-body text-xs font-bold uppercase tracking-[0.25em] text-white shadow-[0_20px_45px_rgba(9,10,26,0.18)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(181,22,87,0.25)] hover:bg-[#B51657] hover:-translate-y-1 overflow-hidden w-full sm:w-auto min-w-[280px]"
                >
                  <span className="relative z-10 pl-1">Send Prayer Request</span>
                  <ArrowRight className="h-4 w-4 relative z-10 transition-transform duration-300 transform group-hover:translate-x-1.5" />
                </Link>

                {/* Contact Us / Ministry - Crisp White Pill Button */}
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white border border-neutral-200/90 px-11 py-5 font-body text-xs font-bold uppercase tracking-[0.25em] text-[#090A1A] shadow-sm transition-all duration-300 hover:border-neutral-400 hover:bg-[#FAF8F5] hover:-translate-y-1 w-full sm:w-auto min-w-[240px]"
                >
                  <span>Contact Ministry</span>
                </Link>
              </div>

            </div>
          </div>
        </Reveal>
      </div>

      {/* Decorative Bottom Break Line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
    </section>
  )
}