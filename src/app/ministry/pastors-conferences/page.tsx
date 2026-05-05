import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpenText, Flame, HeartHandshake, UsersRound } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'

export const metadata = {
  title: "Conducting Pastors' Conferences | Savior's Heartbeat Ministries",
}

const conferencePillars = [
  { title: 'Equipping Leaders', text: 'Training shepherds for effective ministry.' },
  { title: 'Leadership Renewal', text: 'Strengthening the hands of those who serve.' },
  { title: 'Sharpening Vision', text: 'Empowering pastors through biblical wisdom.' },
  { title: 'Stronger Together', text: 'Building a network of Kingdom leaders.' },
]

const roomFocus = [
  'Biblical sessions for pastors serving villages and local churches.',
  'Prayer moments for personal renewal, courage, and fresh strength.',
  'Fellowship that reminds leaders they are not carrying the work alone.',
  'Practical counsel for shepherding families, believers, and new disciples.',
]

export default function PastorsConferencesPage() {
  return (
    <div className="bg-[#FBF7F1] antialiased">
      <PageHero
        eyebrow="Our Ministries"
        title="Conducting Pastors' Conferences"
        subtitle="Training shepherds, renewing leaders, and strengthening those who serve."
        imageSrc="/ggg.webp"
        imageClassName="bg-[position:center_26%] sm:bg-[position:center_32%] lg:bg-[position:center_38%]"
      />

      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal dir="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/pastcopy.webp"
                  alt="Pastors conference leadership training"
                  fill
                  className="object-cover object-[center_30%]"
                  priority
                />
              </div>
            </Reveal>

            <Reveal dir="right">
              <div className="lg:pl-8">
                <p className="mb-4 flex items-center gap-2 font-accent text-[11px] font-bold uppercase tracking-[0.2em] text-[#B51657]">
                  <span className="h-px w-4 bg-[#B51657]"></span> Leadership Gathering
                </p>

                <h2 className="font-[Playfair_Display] text-4xl font-medium leading-[1.15] text-[#11162E] md:text-5xl lg:text-[52px]">
                  A conference table for <br />
                  <span className="italic text-[#B51657]">those who serve</span>
                </h2>

                <div className="mt-8 space-y-6 font-body text-[16px] leading-[1.7] text-[#30375F]/80">
                  <p>
                    Pastors carry the needs of villages, churches, and families. These gatherings create a focused place for teaching, prayer, and encouragement so leaders can return to the field with renewed strength.
                  </p>
                  <p>
                    A strengthened shepherd blesses the whole community. These gatherings create space for pastors to receive biblical teaching and practical counsel for the work God has placed in their hands.
                  </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-[#E8D8C8]/60 bg-white/50 p-4">
                    <UsersRound className="h-5 w-5 shrink-0 text-[#B51657]" />
                    <p className="text-[13px] font-semibold leading-relaxed text-[#11162E]">Community Impact</p>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-[#E8D8C8]/60 bg-white/50 p-4">
                    <HeartHandshake className="h-5 w-5 shrink-0 text-[#B51657]" />
                    <p className="text-[13px] font-semibold leading-relaxed text-[#11162E]">Spiritual Unity</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="bg-[#f5f0e8]/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <Reveal dir="left">
              <div className="sticky top-10">
                <p className="mb-4 font-accent text-[11px] font-bold uppercase tracking-[0.2em] text-[#B51657]">
                  The Process
                </p>
                <h2 className="font-[Playfair_Display] text-4xl font-medium leading-tight text-[#11162E] md:text-5xl">
                  Four sessions, <br />
                  <span className="italic text-[#B51657]">one purpose</span>
                </h2>
                <p className="mt-6 font-body text-base leading-relaxed text-[#30375F]/70">
                  The conference is shaped around the needs of pastors who serve every week: teaching, renewal, vision, and fellowship.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {conferencePillars.map((pillar, index) => (
                <Reveal key={pillar.title} delay={index * 100}>
                  <div className="group h-full rounded-2xl border border-[#E8D8C8]/40 bg-white p-8 transition-all hover:shadow-xl hover:shadow-[#11162E]/5">
                    <span className="mb-6 block font-accent text-[10px] font-bold tracking-widest text-[#B51657]/50">
                      0{index + 1}
                    </span>
                    <h3 className="font-[Playfair_Display] text-2xl font-semibold text-[#11162E]">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 font-body text-[15px] leading-relaxed text-[#30375F]/70">
                      {pillar.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Focus List Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal dir="left" className="order-2 lg:order-1">
              <div>
                <p className="mb-4 font-accent text-[11px] font-bold uppercase tracking-[0.2em] text-[#B51657]">
                  Inside The Room
                </p>
                <h2 className="mb-10 font-[Playfair_Display] text-4xl font-medium leading-[1.2] text-[#11162E] md:text-5xl">
                  Leaders receive the <br /> 
                  <span className="italic">fuel to keep serving.</span>
                </h2>
                <div className="space-y-0">
                  {roomFocus.map((item, index) => (
                    <div key={item} className="group flex items-start gap-6 border-t border-[#E1D3C6]/60 py-6">
                      <span className="font-[Playfair_Display] text-2xl font-light text-[#B51657]/40 group-hover:text-[#B51657] transition-colors">
                        0{index + 1}
                      </span>
                      <p className="font-body text-[15px] font-medium leading-relaxed text-[#30375F]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal dir="right" className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/passs.webp"
                  alt="Pastors gathered"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 pt-10">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="rounded-[2rem] bg-[#000000] p-10 md:p-16 text-center text-white">
              <HeartHandshake className="mx-auto mb-8 h-10 w-10 text-[#B51657]" />
              <h3 className="mx-auto max-w-3xl font-[Playfair_Display] text-3xl font-medium leading-tight md:text-5xl">
                When pastors are equipped, <br />
                <span className="italic text-[#B51657]/90">churches become healthier.</span>
              </h3>
              <p className="mx-auto mt-6 max-w-xl text-base text-white/60">
                Join us in strengthening the hands of those who serve the furthest villages.
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#B51657] px-10 py-4 font-body text-[13px] font-bold uppercase tracking-widest text-white transition-transform hover:scale-105"
              >
                Contact Ministry <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}