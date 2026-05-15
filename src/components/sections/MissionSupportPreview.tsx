import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, HandHeart, Plane, Radio, Sparkles } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'

const supportItems = [
  {
    icon: HandHeart,
    title: 'Prayer Support',
    text: 'Stand with the ministry in intercession, protection, wisdom, and open doors for the Gospel.',
  },
  {
    icon: Plane,
    title: 'Mission Trips',
    text: 'Come to India to preach, teach local leaders, and serve through compassionate outreach.',
  },
  {
    icon: Sparkles,
    title: 'Financial Partnership',
    text: 'Help sponsor crusades, pastors conferences, children, widows, and urgent field needs.',
  },
  {
    icon: Radio,
    title: 'TV Ministries',
    text: 'Carry the Word into homes through daily Telugu Christian media and Gospel broadcasting.',
  },
]

export default function MissionSupportPreview() {
  return (
    <section className="relative overflow-hidden bg-[#12070C] py-24 text-white md:py-28">
      <div className="absolute inset-0 opacity-35">
        <Image
          src="/out (1).webp"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/72" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(181,22,87,0.32),transparent_32%),radial-gradient(circle_at_82%_65%,rgba(201,169,110,0.18),transparent_28%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal dir="left">
          <div>
            <SectionLabel text="Support the Mission" />
            <h2 className="mb-6 font-heading text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              Stand with the work God is doing in India.
            </h2>
            <p className="mb-8 max-w-xl font-body text-base leading-8 text-white/76 md:text-lg">
              Your prayers, presence, and partnership help carry the Gospel, compassion, and practical care to children,
              widows, pastors, villages, and unreached communities.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/support"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#B51657] px-8 font-body text-sm font-bold text-white shadow-[0_18px_42px_rgba(181,22,87,0.34)] transition-all hover:-translate-y-1 hover:bg-[#981149]"
              >
                Support Our Mission
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/ministry/prayer-request"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-8 font-body text-sm font-bold text-[#1C1C1E] transition-all hover:-translate-y-1 hover:text-[#B51657]"
              >
                Send Prayer Request
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal dir="right">
          <div className="grid gap-4 sm:grid-cols-2">
            {supportItems.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/12 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-md"
                >
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-white text-[#B51657]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-heading text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="font-body text-sm leading-7 text-white/70">{item.text}</p>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
