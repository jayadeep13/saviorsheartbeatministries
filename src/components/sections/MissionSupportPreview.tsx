import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, HandHeart, Plane, Sparkles } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'

const supportItems = [
  {
    icon: HandHeart,
    title: 'Prayer Support',
    text: 'Cover the ministry, pastors, children, widows, and open doors through faithful intercession.',
    href: '/ministry/prayer-request',
  },
  {
    icon: Plane,
    title: 'Mission Trips',
    text: 'Visit India to preach, teach, encourage pastors, and serve families through compassionate outreach.',
    href: '/support',
  },
  {
    icon: Sparkles,
    title: 'Financial Partnership',
    text: 'Help sponsor crusades, pastors conferences, children, widows, and urgent field needs.',
    href: '/support/financial-partnership',
  },
]

export default function MissionSupportPreview() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] py-20 md:py-28">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(#B51657_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.025]" />
      <div className="absolute left-0 top-0 w-[500px] h-[500px] rounded-full bg-[#B51657]/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-[#B51657]/4 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ── LEFT: Image Block ── */}
          <Reveal dir="left">
            <div className="relative mx-auto max-w-[540px] lg:mx-0 pb-10">

              {/* Main image card */}
              <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(17,22,46,0.14)] border border-white">
                <div className="relative aspect-[4/3] md:aspect-[4/3.5]">
                  <Image
                    src="/crusades (2).jpg"
                    alt="Ministry outreach and Gospel mission in India"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 25%' }}
                    sizes="(min-width:1024px) 540px, 90vw"
                    priority
                  />
                  {/* Gradient overlay — strong at bottom for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F1E]/92 via-[#0D0F1E]/35 to-transparent" />

                  {/* Bottom caption inside image */}
                  <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-16">
                    {/* Label pill */}
                    <div className="inline-flex items-center gap-2 mb-3 bg-[#B51657] px-3 py-1.5 rounded-full">
                      <span className="h-1 w-1 rounded-full bg-white/70" />
                      <span className="font-accent text-[9px] font-bold uppercase tracking-[0.3em] text-white">
                        Mission Support
                      </span>
                    </div>
                    {/* Bold title */}
                    <h3 className="font-[Playfair_Display] text-2xl md:text-3xl font-semibold text-white leading-tight mb-2">
                      Stand with us in <br />prayer, presence &amp; giving.
                    </h3>
                    {/* Description */}
                    <p className="font-body text-sm leading-relaxed text-white/75">
                      Your support becomes practical care reaching families, villages, and children across India.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating top-right mini card */}
              <div className="absolute -top-5 -right-2 w-48 rounded-2xl border border-[#E8D8C8]/60 bg-white p-3 shadow-[0_16px_40px_rgba(17,22,46,0.12)] hidden md:block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="/children.webp"
                    alt="Children ministry"
                    fill
                    className="object-cover object-top"
                    sizes="192px"
                  />
                </div>
                <p className="mt-2.5 font-body text-[13px] font-semibold text-[#11162E] leading-snug">
                  Children, families, and villages
                </p>
              </div>

              {/* Floating bottom card — Pray Go Give */}
              <div className="absolute -bottom-2 left-4 right-4 rounded-2xl border border-[#E8D8C8]/60 bg-white px-5 py-4 shadow-[0_16px_40px_rgba(181,22,87,0.10)] md:left-6 md:right-auto md:w-64">
                <p className="font-accent text-[9px] font-bold uppercase tracking-[0.3em] text-[#B51657] mb-3">
                  Three Ways to Give
                </p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {['Pray', 'Go', 'Give'].map((label) => (
                    <div key={label} className="rounded-xl bg-[#FDF2F7] border border-[#B51657]/10 px-2 py-2.5">
                      <p className="font-[Playfair_Display] text-base font-semibold text-[#B51657]">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </Reveal>

          {/* ── RIGHT: Text Block ── */}
          <Reveal dir="right">
            <div>
              <SectionLabel text="Support the Mission" />

              <h2 className="mt-4 mb-5 font-[Playfair_Display] text-4xl font-semibold leading-[1.1] text-[#11162E] md:text-5xl">
                Stand with the work <br />
                <span className="italic font-light text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg,#B51657,#D6226E)' }}>
                  God is doing in India.
                </span>
              </h2>

              <p className="mb-8 font-body text-base leading-[1.85] text-[#30375F]/70 md:text-[17px]">
                Support is simple and meaningful — pray with us, come serve with us, or partner financially so the Gospel and compassion can keep reaching families, pastors, villages, and children in need.
              </p>

              {/* Support option cards */}
              <div className="grid gap-3 mb-8">
                {supportItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group flex items-center gap-4 rounded-2xl border border-[#E8D8C8]/60 bg-white p-5 shadow-[0_6px_24px_rgba(17,22,46,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B51657]/30 hover:shadow-[0_12px_36px_rgba(181,22,87,0.10)]"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FDF2F7] text-[#B51657] transition-colors group-hover:bg-[#B51657] group-hover:text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-[Playfair_Display] text-lg font-semibold text-[#11162E] mb-0.5 group-hover:text-[#B51657] transition-colors">
                          {item.title}
                        </h3>
                        <p className="font-body text-sm leading-relaxed text-[#30375F]/65">
                          {item.text}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-[#B51657]/50 shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-[#B51657]" />
                    </Link>
                  )
                })}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/support"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#B51657] px-8 font-body text-sm font-bold text-white shadow-[0_16px_34px_rgba(181,22,87,0.22)] transition-all hover:-translate-y-1 hover:bg-[#9A0E46]"
                >
                  View Support Options
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#B51657]/30 bg-white px-8 font-body text-sm font-bold text-[#B51657] transition-all hover:-translate-y-1 hover:border-[#B51657]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
