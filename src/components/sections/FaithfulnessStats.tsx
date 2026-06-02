import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'

const stats = [
  { number: '1,500+', label: 'Village Crusades', sub: 'Gospel meetings across India' },
  { number: '1,300+', label: 'Pastors Conferences', sub: 'Leaders trained & strengthened' },
  { number: '67', label: 'Village Churches', sub: 'Built & supported across India' },
  { number: '500+', label: 'Communities', sub: 'Reached with the Gospel of Christ' },
  { number: '1999', label: 'Year Founded', sub: 'Over three decades of faithful service' },
]

export default function FaithfulnessStats() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/crusades (2).jpg"
          alt="Gospel crusade gathering"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-[#11162E]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#11162E]/60 via-[#11162E]/50 to-[#11162E]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(181,22,87,0.12)_0%,transparent_70%)]" />
      </div>

      {/* Decorative dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.025]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">

        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#B51657]" />
              <span className="font-accent text-[10px] font-bold uppercase tracking-[0.4em] text-[#B51657]">
                God&apos;s Faithfulness
              </span>
              <span className="h-px w-8 bg-[#B51657]" />
            </div>

            <h2 className="font-[Playfair_Display] text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.15] tracking-tight mb-6">
              Thanking the Lord for{' '}
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#B51657] via-[#E8527A] to-[#B51657]">
                His great faithfulness
              </span>
            </h2>

            <p className="font-accent text-[11px] font-bold uppercase tracking-[0.3em] text-white/60 mb-6">
              Over Three Decades of Proving His Compassion &amp; Power
            </p>

            <div className="w-12 h-px bg-[#B51657]/60 mx-auto mb-6" />

            <p className="font-body text-base md:text-lg leading-[1.85] text-white/70 max-w-2xl mx-auto">
              Tens of thousands were given the good news of Lord Jesus Christ — Native Missionaries are empowered and communities reached and families restored in His grace.
            </p>
          </div>
        </Reveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-5 border border-white/10 rounded-2xl overflow-hidden bg-white/10">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100}>
              <div className="group relative flex flex-col items-center text-center px-6 py-10 bg-white/[0.04] hover:bg-[#B51657]/10 transition-colors duration-500 border-r border-white/10 last:border-r-0">
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-[#B51657]/5 to-transparent pointer-events-none" />

                <p className="font-[Playfair_Display] text-4xl md:text-5xl font-bold text-[#B51657] leading-none mb-3 transition-colors duration-300 group-hover:text-white">
                  {stat.number}
                </p>
                <p className="font-accent text-[10px] font-bold uppercase tracking-[0.25em] text-white mb-2">
                  {stat.label}
                </p>
                <p className="font-body text-[12px] text-white/45 leading-relaxed">
                  {stat.sub}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
