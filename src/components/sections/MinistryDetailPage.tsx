import Link from 'next/link'
import type { ReactNode } from 'react'
import Reveal from '@/components/ui/Reveal'
import PageHero from '@/components/ui/PageHero'
import ContactCTA from '@/components/sections/ContactCTA'

type MinistryPoint = {
  title: string
  text: string
}

type MinistryStat = {
  value: string
  label: string
}

interface MinistryDetailPageProps {
  title: string
  subtitle: string
  lead: string
  points: MinistryPoint[]
  stats?: MinistryStat[]
  closingTitle: string
  closingText: string
  heroImage?: string
  children?: ReactNode
}

export default function MinistryDetailPage({
  title,
  subtitle,
  lead,
  points,
  stats = [],
  closingTitle,
  closingText,
  heroImage,
  children,
}: MinistryDetailPageProps) {

  return (
    <div>
      <PageHero eyebrow="Ministry" title={title} subtitle={subtitle} />

      <section className="py-24 bg-ivory-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
            <Reveal dir="left">
              <div className="lg:sticky lg:top-28">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="h-px w-10 bg-crimson-500/50" />
                  <span className="font-accent text-crimson-500 text-[10px] tracking-[0.35em] uppercase">
                    Ministry Focus
                  </span>
                  <span className="h-px w-10 bg-crimson-500/50" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-light text-onyx-900 leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                  {closingTitle}
                </h2>
                <p className="text-onyx-600 font-body text-base leading-relaxed mb-8">
                  {lead}
                </p>

                {stats.length > 0 && (
                  <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat) => (
                      <div key={stat.label} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.05)] text-center">
                        <div className="font-display text-xl text-crimson-500 font-semibold">{stat.value}</div>
                        <div className="text-onyx-500 text-[11px] font-body mt-1 leading-tight">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((point, index) => (
                <Reveal key={point.title} delay={index * 70}>
                  <div className="h-full bg-white rounded-2xl p-7 border border-crimson-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] card-lift">
                    <div className="w-12 h-12 rounded-full bg-crimson-50 text-crimson-600 flex items-center justify-center font-display text-xl mb-5">
                      {index + 1}
                    </div>
                    <h3 className="font-heading text-onyx-900 text-xl font-semibold mb-3">{point.title}</h3>
                    <p className="text-onyx-500 text-sm leading-relaxed font-body">{point.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="rounded-3xl overflow-hidden bg-black text-white shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
              <div className="p-10 md:p-14 text-center">
                <p className="font-accent text-crimson-300 text-[10px] tracking-[0.4em] uppercase mb-5">
                  Savior&apos;s Heartbeat Ministries
                </p>
                <h3 className="font-display text-3xl md:text-4xl font-light leading-tight mb-5">{closingTitle}</h3>
                <p className="text-white/68 font-body text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
                  {closingText}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/support/financial-partnership" className="px-7 py-3.5 rounded-full bg-white text-crimson-700 font-body text-sm font-bold hover:bg-ivory-100 transition-colors">
                    Partner With This Ministry
                  </Link>
                  <Link href="/contact" className="px-7 py-3.5 rounded-full border border-white/25 text-white font-body text-sm font-semibold hover:bg-white/10 transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {children}

      <ContactCTA />
    </div>
  )
}
