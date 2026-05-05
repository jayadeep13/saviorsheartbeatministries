'use client'

import Link from 'next/link'
import { BookOpen, Church, HandHeart, HeartHandshake, MapPin, Newspaper, Users } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'

const ministries = [
  {
    icon: BookOpen,
    title: 'Preaching the Gospel',
    desc: "Light in the Darkness: sharing Christ's hope with every soul.",
    href: '/ministry/preaching-the-gospel',
  },
  {
    icon: Users,
    title: "Conducting Pastors' Conferences",
    desc: 'Equipping leaders and strengthening the hands of those who serve.',
    href: '/ministry/pastors-conferences',
  },
  {
    icon: Church,
    title: 'Helping Pastors & Building Churches',
    desc: 'Supporting local ministers and establishing pillars of faith in villages.',
    href: '/ministry/helping-pastors-building-churches',
  },
  {
    icon: HandHeart,
    title: 'Orphans & Poor Children',
    desc: 'Giving children food, education, family, and a future filled with hope.',
    href: '/ministry/orphans-poor-children',
  },
  {
    icon: HeartHandshake,
    title: 'Widows',
    desc: 'Providing honor, dignity, comfort, and practical care for widows.',
    href: '/ministry/widows',
  },
  {
    icon: MapPin,
    title: 'Odisha Outreach',
    desc: 'Reaching the unreached and bringing light to remote villages.',
    href: '/ministry/odisha-outreach',
  },
  {
    icon: Newspaper,
    title: 'SPANDANA Magazine',
    desc: 'Telugu Christian publication blessing readers around the world since 1976.',
    href: '/ministry/magazine',
  },
]

export default function MinistryHighlights() {
  return (
    <section className="relative overflow-hidden bg-black py-28 text-white">

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.14) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <Reveal>
          <div className="text-center mb-20">
            <SectionLabel text="Our Ministries" light />

            <h2 className="mb-6 font-display text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.08] tracking-[-0.03em] text-white">
              
              <span className="block opacity-0 translate-y-6 animate-fadeUp">
                A Ministry with a
              </span>

              <span className="block mt-3 font-semibold italic text-[#B51657] opacity-0 translate-y-6 animate-fadeUp delay-200">
                Heart for Souls
              </span>

            </h2>

            <p className="text-white/60 max-w-3xl mx-auto font-body text-lg leading-relaxed opacity-0 translate-y-5 animate-fadeUp delay-300">
              From remote villages to hearts around the world, every ministry carries the same pulse:
              <span className="text-white/85"> the Savior&apos;s Heartbeat.</span>
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon

            return (
              <Reveal key={ministry.title} delay={index * 55}>
                <Link href={ministry.href} className="group block h-full">

                  <div className="relative h-full cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#C9A96E]/60 group-hover:bg-[#111111] group-hover:shadow-[0_28px_80px_rgba(181,22,87,0.18)]">

                    {/* Glow */}
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(181,22,87,0.16),transparent_42%),radial-gradient(circle_at_top_right,rgba(201,169,110,0.16),transparent_34%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Top line */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/70 to-transparent" />

                    <div className="relative z-10 p-7 min-h-[270px] flex flex-col">

                      {/* Icon + Number */}
                      <div className="mb-7 flex items-center justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-[#B51657] border border-white/15 flex items-center justify-center text-white shadow-[0_14px_34px_rgba(181,22,87,0.30)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <Icon className="w-6 h-6" strokeWidth={1.9} />
                        </div>

                        <span className="text-[12px] font-body tracking-[0.28em] text-white/25 group-hover:text-[#F0D89A]/70 transition-colors">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-white text-2xl font-semibold leading-tight mb-4 transition-colors group-hover:text-[#F0D89A]">
                        {ministry.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/65 text-[15px] leading-7 group-hover:text-white/85 transition-colors font-body">
                        {ministry.desc}
                      </p>

                      {/* CTA */}
                      <div className="mt-auto pt-8 flex items-center gap-2 text-[#C9A96E] group-hover:text-[#F0D89A] transition-colors">
                        <span className="text-sm font-body font-semibold tracking-wide">Learn more</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>

                    </div>
                  </div>

                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>

    </section>
  )
}