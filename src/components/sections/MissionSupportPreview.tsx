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
    href: '/support',
  },
]

export default function MissionSupportPreview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F4F7F1] via-[#FFF8FB] to-[#F3EEF8] py-20 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E6D7DE] to-transparent" />
      <div className="absolute left-[-14%] top-10 h-80 w-80 rounded-full bg-[#88A76A]/16 blur-[95px]" />
      <div className="absolute right-[-12%] bottom-8 h-96 w-96 rounded-full bg-[#B51657]/12 blur-[110px]" />
      <div className="absolute inset-0 opacity-[0.26] [background-image:radial-gradient(#B51657_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:gap-16">
          <Reveal dir="left">
            <div className="relative mx-auto max-w-[620px] lg:mx-0">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-3 shadow-[0_26px_80px_rgba(48,35,41,0.16)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.55rem] bg-[#12070C] md:aspect-[5/4]">
                  <Image
                    src="/mt.webp"
                    alt="Children and ministry team praying over mission support"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 600px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/6 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/25 bg-white/90 p-4 shadow-[0_14px_34px_rgba(0,0,0,0.18)] backdrop-blur">
                    <p className="mb-1 font-accent text-[10px] font-bold uppercase tracking-[0.28em] text-[#B51657]">
                      Mission Support
                    </p>
                    <p className="font-body text-sm font-semibold leading-6 text-[#1E1E22] md:text-base">
                      Prayer, presence, and giving become practical care in the field.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-3 -top-6 hidden w-52 rounded-[1.45rem] border border-white/80 bg-white p-3 shadow-[0_18px_48px_rgba(0,0,0,0.14)] md:block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem]">
                  <Image
                    src="/children.webp"
                    alt="Children helped through Savior's Heartbeat"
                    fill
                    className="object-cover object-center"
                    sizes="210px"
                  />
                </div>
                <p className="mt-3 font-body text-sm font-bold text-[#1E1E22]">Children, families, and villages</p>
              </div>

              <div className="absolute -bottom-8 left-8 right-8 rounded-[1.4rem] border border-[#E8DDE2] bg-white p-5 shadow-[0_20px_48px_rgba(181,22,87,0.13)] md:left-10 md:right-auto md:w-72">
                <p className="mb-3 font-accent text-[10px] font-bold uppercase tracking-[0.28em] text-[#B51657]">
                  Three Ways
                </p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {['Pray', 'Go', 'Give'].map((label) => (
                    <div key={label} className="rounded-2xl bg-[#FDF2F7] px-2 py-3">
                      <p className="font-heading text-lg font-semibold text-[#B51657]">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal dir="right">
            <div className="pt-10 lg:pt-0">
              <SectionLabel text="Support the Mission" />
              <h2 className="mb-5 font-heading text-4xl font-semibold leading-tight text-[#1E1E22] md:text-5xl lg:text-6xl">
                Stand with the work God is doing in India.
              </h2>
              <p className="mb-8 max-w-2xl font-body text-base leading-8 text-[#5F5960] md:text-lg">
                Support is simple and meaningful: pray with us, come serve with us, or partner financially so the Gospel
                and compassion can keep reaching families, pastors, villages, and children in need.
              </p>

              <div className="grid gap-4">
                {supportItems.map((item) => {
                  const Icon = item.icon

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group grid gap-4 rounded-[1.35rem] border border-white/80 bg-white/84 p-5 shadow-[0_14px_38px_rgba(52,43,48,0.075)] backdrop-blur transition-all hover:-translate-y-1 hover:border-[#B51657]/35 hover:bg-white hover:shadow-[0_18px_46px_rgba(181,22,87,0.12)] sm:grid-cols-[56px_1fr_auto] sm:items-center"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FDF2F7] text-[#B51657] transition-colors group-hover:bg-[#B51657] group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-heading text-2xl font-semibold text-[#1E1E22]">{item.title}</h3>
                        <p className="font-body text-sm leading-7 text-[#625B61] md:text-base">{item.text}</p>
                      </div>
                      <ArrowRight className="hidden h-5 w-5 text-[#B51657] transition-transform group-hover:translate-x-1 sm:block" />
                    </Link>
                  )
                })}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/support"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#B51657] px-8 font-body text-sm font-bold text-white shadow-[0_16px_34px_rgba(181,22,87,0.22)] transition-all hover:-translate-y-1 hover:bg-[#8B0A35]"
                >
                  View Support Options
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#E6D7DE] bg-white px-8 font-body text-sm font-bold text-[#1E1E22] transition-all hover:-translate-y-1 hover:text-[#B51657]"
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
