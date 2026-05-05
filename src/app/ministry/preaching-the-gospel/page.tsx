import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpenText, Flame, HeartHandshake } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'

export const metadata = {
  title: "Preaching the Gospel | Savior's Heartbeat Ministries",
}

const gospelLines = [
  { title: 'Light in the Darkness', text: "Sharing Christ's hope with every soul." },
  { title: 'The Good News', text: 'Proclaiming salvation to all nations.' },
  { title: 'Truth Unleashed', text: 'Reaching the lost with the Living Word.' },
  { title: 'Eternal Hope', text: 'Bringing the message of Jesus to the world.' },
]

const outreachSteps = [
  'Village gatherings where the message of Jesus is preached with clarity.',
  'Prayer for families, seekers, and believers who need hope and strength.',
  'Scripture teaching that helps people understand salvation and discipleship.',
  'Connection with local pastors so the care continues after the meeting.',
]

export default function PreachingTheGospelPage() {
  return (
    <div className="bg-[#FBF7F1] antialiased">
      <PageHero
        eyebrow="Our Ministries"
        title="Preaching the Gospel"
        subtitle="Sharing Christ's hope through village outreach, prayer, Scripture, and faithful Gospel witness."
        imageSrc="/pre.webp"
        imageClassName="bg-[position:center_28%] sm:bg-[position:center_34%] lg:bg-[position:center_40%]"
      />

      {/* Main Philosophy Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal dir="left">
              <div className="lg:pr-8">
                <p className="mb-4 flex items-center gap-2 font-accent text-[11px] font-bold uppercase tracking-[0.2em] text-[#B51657]">
                  <span className="h-px w-4 bg-[#B51657]"></span> Gospel Ministry
                </p>

                <h2 className="font-[Playfair_Display] text-4xl font-medium leading-[1.15] text-[#11162E] md:text-5xl lg:text-[56px]">
                  Carrying the <br />
                  <span className="italic text-[#B51657]">Good News</span>
                </h2>

                <div className="mt-8 space-y-6 font-body text-[16px] leading-[1.7] text-[#30375F]/80">
                  <p>
                    The heartbeat of this ministry is the message of Jesus Christ. Through preaching, prayer, and personal ministry, we carry eternal hope to people who need the light of the Gospel.
                  </p>
                  <blockquote className="border-l-2 border-[#B51657]/30 pl-6 py-1">
                    <p className="font-[Playfair_Display] text-xl italic text-[#11162E]">
                      "Go into all the world and preach the gospel to every creature."
                    </p>
                    <cite className="mt-2 block font-accent text-[10px] font-bold uppercase tracking-widest text-[#B51657] not-italic">
                      - Mark 16:15
                    </cite>
                  </blockquote>
                </div>
              </div>
            </Reveal>

            <Reveal dir="right">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/pre.webp"
                  alt="Preaching the Gospel outreach"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 34%' }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11162E]/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                   <p className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">Field Outreach</p>
                   <h3 className="mt-2 font-[Playfair_Display] text-2xl text-white">Hope shared one village at a time.</h3>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Declarations (List) Section */}
      <section className="bg-[#f5f0e8]/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="text-center mb-16">
            <p className="mb-4 font-accent text-[11px] font-bold uppercase tracking-[0.2em] text-[#B51657]">The Proclamation</p>
            <h2 className="font-[Playfair_Display] text-4xl font-medium leading-tight text-[#11162E] md:text-5xl">
              The message we <span className="italic text-[#B51657]">carry forward</span>
            </h2>
          </Reveal>

          <div className="divide-y divide-[#E8D8C8]">
            {gospelLines.map((line, index) => (
              <Reveal key={line.title} delay={index * 100}>
                <div className="group grid gap-4 py-10 md:grid-cols-[80px_1fr_1.2fr] md:items-center">
                  <span className="font-[Playfair_Display] text-4xl font-light text-[#B51657]/30">0{index + 1}</span>
                  <h3 className="font-[Playfair_Display] text-2xl font-semibold text-[#11162E]">{line.title}</h3>
                  <p className="font-body text-base italic text-[#30375F]/70">{line.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Outreach Section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <Reveal dir="left">
              <div className="grid gap-6">
                <div className="relative aspect-video overflow-hidden rounded-2xl">
                  <Image src="/GAL1.webp" alt="Gospel gathering" fill className="object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-[#B51657] p-8 text-white">
                    <Flame className="mb-4 h-6 w-6 opacity-80" />
                    <p className="font-accent text-[9px] font-bold uppercase tracking-widest opacity-60">Purpose</p>
                    <p className="mt-2 font-[Playfair_Display] text-xl font-medium">To make Jesus known.</p>
                  </div>
                  <div className="rounded-2xl border border-[#E8D8C8] bg-white p-8">
                    <BookOpenText className="mb-4 h-6 w-6 text-[#B51657]" />
                    <p className="font-accent text-[9px] font-bold uppercase tracking-widest text-[#B51657]/60">Approach</p>
                    <p className="mt-2 font-[Playfair_Display] text-xl font-medium text-[#11162E]">Prayer & Word.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal dir="right">
              <div>
                <p className="mb-4 font-accent text-[11px] font-bold uppercase tracking-[0.2em] text-[#B51657]">Outreach Continuity</p>
                <h2 className="mb-8 font-[Playfair_Display] text-4xl font-medium leading-[1.2] text-[#11162E] md:text-5xl">
                  Preaching is the start, <br />
                  <span className="italic">care continues after.</span>
                </h2>
                <div className="space-y-0">
                  {outreachSteps.map((item, index) => (
                    <div key={item} className="group flex items-start gap-6 border-t border-[#E1D3C6]/60 py-6">
                      <span className="font-[Playfair_Display] text-2xl font-light text-[#B51657]/40">0{index + 1}</span>
                      <p className="font-body text-[15px] leading-relaxed text-[#30375F]/80">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
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
                Every outreach begins so that people may <span className="italic text-[#B51657]/90">encounter Jesus.</span>
              </h3>
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
