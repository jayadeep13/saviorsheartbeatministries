import Link from 'next/link'
import Reveal from '../ui/Reveal'

export default function ContactCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#FDFCFB]">
      {/* Premium Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#B51657] opacity-[0.08] blur-[100px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#B51657] opacity-[0.05] blur-[80px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="text-center flex flex-col items-center">
            {/* Elegant Tagline */}
            <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
              <span className="h-[1px] w-6 md:w-10 bg-[#B51657]/40" />
              <span className="font-accent text-[#B51657] text-[9px] md:text-[11px] tracking-[0.4em] md:tracking-[0.6em] uppercase font-bold">
                Connect With Us
              </span>
              <span className="h-[1px] w-6 md:w-10 bg-[#B51657]/40" />
            </div>

            {/* Cinematic Heading */}
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold text-onyx-950 leading-[1.1] mb-6 md:mb-8 tracking-tight">
              We’d Love to <br className="hidden sm:block" />
              <span className="italic font-light text-[#B51657] drop-shadow-sm">Hear From You</span>
            </h2>

            {/* Focused Subtext */}
            <p className="text-onyx-600 text-sm md:text-lg font-body leading-relaxed max-w-xl md:max-w-2xl mb-10 md:mb-12 font-medium opacity-80">
              Whether you need prayer, want to support the ministry, or simply want to connect—our doors and hearts are open to you.
            </p>

            {/* High-Fidelity Buttons - Reduced bottom margin for tighter fit */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto mb-4 md:mb-6">
              <Link href="/ministry/prayer-request"
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-[#B51657] text-white font-body font-bold rounded-2xl md:rounded-full text-xs md:text-sm hover:bg-black transition-all duration-500 shadow-[0_15px_35px_rgba(181,22,87,0.25)] hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 group">
                <span className="group-hover:rotate-12 transition-transform">🙏</span> Send Prayer Request
              </Link>
              
              <Link href="/support/financial-partnership"
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white/40 backdrop-blur-md text-onyx-900 font-body font-semibold rounded-2xl md:rounded-full text-xs md:text-sm border border-gray-200 hover:border-[#B51657] hover:text-[#B51657] transition-all duration-500 shadow-sm hover:shadow-md flex items-center justify-center gap-3">
                <span>💝</span> Support Us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Decorative Finish - Clean transition to footer */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  )
}
