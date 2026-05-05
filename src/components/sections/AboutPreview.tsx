import Image from 'next/image'
import Link from 'next/link'
import { Church, HeartHandshake, Radio } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-ivory-50 py-24">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg,#C8114C 0,#C8114C 1px,transparent 0,transparent 50%)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <Reveal dir="left">
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-[2rem] bg-onyx-100 shadow-[0_32px_80px_rgba(0,0,0,0.18)] img-zoom lg:max-w-lg">
                <Image
                  src="/about1.webp"
                  alt="Savior's Heartbeat Ministries outreach in India"
                  fill
                  sizes="(min-width: 1024px) 384px, 90vw"
                  className="inner object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-black/8 to-transparent" />
              </div>

              <div className="absolute -bottom-7 right-3 rounded-2xl border border-[#B51657]/18 bg-white p-5 shadow-[0_16px_48px_rgba(181,22,87,0.12)] lg:-right-4">
                <div className="grid min-w-[160px] grid-cols-2 gap-4">
                  {[
                    { n: '12', l: 'Churches' },
                    { n: '43', l: 'Children' },
                    { n: '50+', l: 'Years' },
                    { n: '6+', l: 'Crusades' },
                  ].map((s) => (
                    <div key={s.l} className="text-center">
                      <div className="font-[Playfair_Display] text-xl font-semibold text-[#B51657]">
                        {s.n}
                      </div>
                      <div className="font-body text-[10px] tracking-wide text-onyx-500">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -left-4 top-12 h-28 w-1 rounded-full bg-gradient-to-b from-[#B51657] to-transparent" />
            </div>
          </Reveal>

          <Reveal dir="right">
            <div>
              <SectionLabel text="About the Ministry" />

              <h2 className="mb-5 max-w-3xl font-[Playfair_Display] text-4xl font-semibold leading-[1.05] text-onyx-900 md:text-5xl lg:text-[58px]">
                A Ministry with a
                <span className="block font-[Cormorant_Garamond] text-[1.04em] font-semibold italic text-[#B51657]">
                  Heart for Souls
                </span>
              </h2>

              <div className="mb-6 h-px w-16 bg-[#B51657]/45" />

              <p className="mb-3 max-w-2xl font-body text-[17px] leading-relaxed text-onyx-700">
                Savior&apos;s Heartbeat Ministries exists to share the hope of Christ with people across India
                through evangelism, church planting, discipleship, and compassionate care.
              </p>
              <p className="mb-6 max-w-2xl font-body text-[15px] leading-relaxed text-onyx-500">
                Founded in Vijayawada, Andhra Pradesh in 1976, the ministry continues to serve villages and
                families through local churches, children&apos;s care, widows&apos; support, gospel media, and the
                SPANDANA magazine.
              </p>

              <div className="mb-7 rounded-[1.5rem] border border-[#B51657]/22 bg-white/80 p-4 shadow-[0_18px_50px_rgba(181,22,87,0.08)]">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { icon: Church, title: 'Churches', text: 'Building local faith communities' },
                    { icon: HeartHandshake, title: 'Care', text: 'Serving children, widows, and families' },
                    { icon: Radio, title: 'Media', text: 'Carrying the Gospel through SPANDANA' },
                  ].map((item) => {
                    const Icon = item.icon

                    return (
                      <div key={item.title} className="rounded-2xl border border-[#B51657]/16 bg-[#FFF8FB] p-4">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#B51657] text-white shadow-[0_10px_24px_rgba(181,22,87,0.22)]">
                          <Icon className="h-5 w-5" strokeWidth={1.9} />
                        </div>
                        <h3 className="font-[Playfair_Display] text-lg font-semibold text-onyx-900">{item.title}</h3>
                        <p className="mt-1 font-body text-xs leading-relaxed text-onyx-500">{item.text}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about/about-deva"
                  className="btn-luxury inline-flex min-h-14 items-center justify-center rounded-full px-7 font-body text-sm font-semibold text-white shadow-luxury"
                >
                  About Deva
                </Link>
                <Link
                  href="/about/board-of-directors"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#B51657]/45 px-7 font-body text-sm font-semibold text-[#B51657] transition-all duration-300 hover:border-[#B51657]/75 hover:bg-[#B51657]/5"
                >
                  Board of Directors
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
