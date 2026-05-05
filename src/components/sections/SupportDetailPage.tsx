import type { ReactNode } from 'react'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import PageHero from '@/components/ui/PageHero'

type SupportPoint = {
  title: string
  text: ReactNode
}

interface SupportDetailPageProps {
  title: string
  subtitle: string
  intro: string
  icon: ReactNode
  points: SupportPoint[]
}

export default function SupportDetailPage({ title, subtitle, intro, icon, points }: SupportDetailPageProps) {
  return (
    <div>
      <PageHero eyebrow="Support Our Mission" title={title} subtitle={subtitle} />

      <section className="py-24 bg-ivory-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
            <Reveal dir="left">
              <div className="lg:sticky lg:top-28">
                <div className="inline-flex items-center gap-3 mb-5">
                  <span className="h-px w-10 bg-crimson-500/50" />
                  <span className="font-accent text-crimson-500 text-[10px] tracking-[0.35em] uppercase">Support Our Mission</span>
                  <span className="h-px w-10 bg-crimson-500/50" />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-crimson-50 text-crimson-600 flex items-center justify-center mb-6">
                  {icon}
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-light text-onyx-900 leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                  {title}
                </h2>
                <p className="text-onyx-600 font-body text-base leading-relaxed">{intro}</p>
              </div>
            </Reveal>

            <div className="space-y-6">
              {points.map((point, index) => (
                <Reveal key={point.title} delay={index * 70}>
                  <article className="bg-white rounded-2xl p-7 border border-crimson-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] card-lift">
                    <div className="flex items-start gap-5">
                      <div className="w-11 h-11 rounded-full bg-ivory-100 text-crimson-600 flex items-center justify-center font-display text-lg shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-heading text-onyx-900 text-xl font-semibold mb-2">{point.title}</h3>
                        <p className="text-onyx-600 text-sm leading-relaxed font-body">{point.text}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="mt-16 rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.1)]" style={{ background: 'linear-gradient(135deg,#8B0A35 0%,#C8114C 50%,#7B1535 100%)' }}>
              <div className="relative p-10 md:p-14 text-center">
                <h3 className="font-display text-3xl font-light text-white mb-3" style={{ letterSpacing: '-0.01em' }}>Ready to Partner?</h3>
                <p className="text-white/70 text-sm font-body mb-8 max-w-lg mx-auto">
                  Reach out to us and we will help you take the next step in supporting this mission.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:304 620 1974" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-crimson-600 font-body font-bold rounded-full text-sm hover:bg-ivory-100 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                    <Phone className="h-4 w-4" /> Call: 304 620 1974
                  </a>
                  <a href="mailto:saviorsheartbeatin@gmail.com" className="inline-flex items-center justify-center gap-2 btn-ghost px-8 py-4 text-white font-body font-semibold rounded-full text-sm border border-white/30">
                    <Mail className="h-4 w-4" /> Email Us
                  </a>
                  <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-white font-body font-semibold rounded-full text-sm border border-white/30 hover:bg-white/10 transition-colors">
                    Contact Page
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
