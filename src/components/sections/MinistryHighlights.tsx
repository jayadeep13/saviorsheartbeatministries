'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Church, HandHeart, HeartHandshake, MapPin, Newspaper, Radio, Users } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'

const ministries = [
  {
    icon: BookOpen,
    title: 'Preaching the Gospel',
    desc: "Sharing Christ's hope through crusades, village outreach, and evangelism.",
    href: '/ministry/preaching-the-gospel',
    image: '/pre.webp',
  },
  {
    icon: Users,
    title: "Pastors' Conferences",
    desc: 'Training and encouraging shepherds who serve local churches.',
    href: '/ministry/pastors-conferences',
    image: '/past.webp',
  },
  {
    icon: Church,
    title: 'Church Building',
    desc: 'Helping pastors and villages establish places of worship.',
    href: '/ministry/helping-pastors-building-churches',
    image: '/church.webp',
  },
  {
    icon: HandHeart,
    title: 'Children Care',
    desc: 'Food, education, prayer, and family care for children in need.',
    href: '/ministry/orphans-poor-children',
    image: '/children.webp',
  },
  {
    icon: HeartHandshake,
    title: 'Widows Care',
    desc: 'Honoring widows with dignity, prayer, and practical support.',
    href: '/ministry/widows',
    image: '/WID1.webp',
  },
  {
    icon: MapPin,
    title: 'Odisha Outreach',
    desc: 'Reaching unreached villages and tribal communities with Christ.',
    href: '/ministry/odisha-outreach',
    image: '/od1.webp',
  },
  {
    icon: Radio,
    title: 'TV Ministries',
    desc: 'Broadcasting Gospel hope through Telugu Christian media.',
    href: '/ministry/tv-ministries',
    image: '/GAL1.webp',
  },
  {
    icon: Newspaper,
    title: 'SPANDANA Magazine',
    desc: 'A Telugu Christian publication blessing readers since 1976.',
    href: '/ministry/magazine',
    image: '/passs.webp',
  },
]

export default function MinistryHighlights() {
  return (
    <section className="relative overflow-hidden bg-[#080405] py-20 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(181,22,87,0.24),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(201,169,110,0.14),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:54px_54px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
            <SectionLabel text="Our Ministries" light />
            <h2 className="mb-5 font-heading text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Clear paths of ministry,
              <span className="block font-display italic text-[#E9A5BB]">one heartbeat for souls.</span>
            </h2>
            <p className="mx-auto max-w-2xl font-body text-base leading-8 text-white/66 md:text-lg">
              Explore the main areas where Savior&apos;s Heartbeat serves through the Gospel, care, training, media, and field outreach.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon

            return (
              <Reveal key={ministry.title} delay={index * 50}>
                <Link href={ministry.href} className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] shadow-[0_20px_60px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A96E]/55 hover:bg-white/[0.08]">
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <Image
                        src={ministry.image}
                        alt={ministry.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/12 to-transparent" />
                      <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#B51657] text-white shadow-[0_12px_28px_rgba(181,22,87,0.28)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="absolute bottom-4 right-4 font-accent text-[10px] font-bold tracking-[0.28em] text-white/60">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="mb-3 font-heading text-2xl font-semibold leading-tight text-white group-hover:text-[#F0D89A]">
                        {ministry.title}
                      </h3>
                      <p className="font-body text-sm leading-7 text-white/62 group-hover:text-white/78">
                        {ministry.desc}
                      </p>
                      <div className="mt-auto flex items-center gap-2 pt-6 font-body text-sm font-bold text-[#C9A96E]">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
