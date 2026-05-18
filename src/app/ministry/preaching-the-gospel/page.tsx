import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpenText, Flame, HeartHandshake, Sparkles } from 'lucide-react'
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
    <div className="bg-[#FAF8F5] antialiased overflow-hidden">
      {/* Page Hero */}
      <PageHero
        eyebrow="Our Ministries"
        title="Preaching the Gospel"
        subtitle="Sharing Christ's hope through village outreach, prayer, Scripture, and faithful Gospel witness."
        imageSrc="/pre.webp"
        imageClassName="bg-[position:center_28%] sm:bg-[position:center_34%] lg:bg-[position:center_40%]"
      />

      {/* Main Philosophy Section - Editorial Layout */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B51657]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            
            <div className="lg:col-span-6 lg:pr-6">
              <Reveal dir="left">
                <div className="inline-flex items-center gap-3 mb-6 bg-white border border-neutral-200/60 py-1.5 px-4 rounded-full shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B51657] animate-pulse" />
                  <span className="font-accent text-[10px] font-bold uppercase tracking-[0.3em] text-[#B51657]">
                    Gospel Ministry
                  </span>
                </div>

                <h2 className="font-[Playfair_Display] text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.15] text-[#11162E] tracking-tight">
                  Carrying the <br />
                  <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#B51657] via-[#D6226E] to-[#B51657]">Good News</span>
                </h2>

                <div className="mt-8 space-y-6 font-body text-[16px] md:text-[17px] leading-[1.8] text-[#30375F]/80 font-normal">
                  <p>
                    The heartbeat of this ministry is the message of Jesus Christ. Through preaching, prayer, and personal ministry, we carry eternal hope to people who need the light of the Gospel.
                  </p>
                  
                  <div className="relative pt-6 mt-8 border-t border-neutral-200/60">
                    <span className="absolute -top-3 left-6 font-serif text-5xl text-[#B51657]/10 select-none">“</span>
                    <blockquote className="pl-6">
                      <p className="font-[Playfair_Display] text-xl md:text-2xl italic text-[#11162E] leading-relaxed">
                        "Go into all the world and preach the gospel to every creature."
                      </p>
                      <cite className="mt-3 block font-accent text-[11px] font-bold uppercase tracking-[0.2em] text-[#B51657] not-italic">
                        — Mark 16:15
                      </cite>
                    </blockquote>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 relative">
              <Reveal dir="right">
                <div className="relative group">
                  <div className="absolute -inset-4 rounded-3xl border border-[#B51657]/10 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 pointer-events-none" />
                  
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(17,22,46,0.08)] transition-transform duration-700 group-hover:scale-[1.01]">
                    <Image
                      src="/pre.webp"
                      alt="Preaching the Gospel outreach"
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      style={{ objectPosition: 'center 34%' }}
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11162E]/80 via-[#11162E]/20 to-transparent opacity-90" />
                    
                    <div className="absolute bottom-10 left-10 right-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <p className="font-accent text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">Field Outreach</p>
                      </div>
                      <h3 className="font-[Playfair_Display] text-2xl md:text-3xl font-light text-white leading-tight">
                        Hope shared one <br />village at a time.
                      </h3>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Declarations Section */}
      <section className="bg-gradient-to-b from-[#F3ECE2]/50 to-[#FAF8F5] py-24 md:py-32 border-y border-[#E8D8C8]/40 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#B51657_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.02]" />
        
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <Reveal className="text-center mb-20">
            <p className="mb-4 font-accent text-[11px] font-bold uppercase tracking-[0.4em] text-[#B51657]">The Proclamation</p>
            <h2 className="font-[Playfair_Display] text-4xl md:text-5xl lg:text-6xl font-medium text-[#11162E]">
              The message we <span className="italic text-[#B51657] font-light">carry forward</span>
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {gospelLines.map((line, index) => (
              <Reveal key={line.title} delay={index * 150}>
                <div className="group h-full relative overflow-hidden rounded-2xl bg-white border border-[#E8D8C8]/50 p-8 pt-16 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(181,22,87,0.06)] hover:-translate-y-1.5 flex flex-col justify-between">
                  <span className="absolute top-6 right-8 font-[Playfair_Display] text-5xl font-extralight text-neutral-100 transition-colors duration-500 group-hover:text-[#B51657]/10 select-none">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-[Playfair_Display] text-2xl font-semibold text-[#11162E] mb-4 transition-colors duration-300 group-hover:text-[#B51657]">
                      {line.title}
                    </h3>
                    <p className="font-body text-[15px] leading-relaxed text-[#30375F]/70 group-hover:text-[#30375F] transition-colors duration-300">
                      {line.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Outreach Section */}
      <section className="py-24 md:py-32 relative">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-20 lg:grid-cols-12 lg:items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <Reveal dir="left">
                <p className="mb-4 font-accent text-[11px] font-bold uppercase tracking-[0.3em] text-[#B51657]">Outreach Continuity</p>
                <h2 className="mb-8 font-[Playfair_Display] text-4xl md:text-5xl font-medium leading-[1.15] text-[#11162E] tracking-tight">
                  Preaching is the start, <br />
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#B51657] to-[#D6226E] font-light">care continues after.</span>
                </h2>
                
                <div className="grid grid-cols-2 gap-4 mt-12">
                  <div className="rounded-2xl bg-[#B51657] p-6 text-white shadow-xl shadow-[#B51657]/10 transition-transform duration-500 hover:scale-[1.02]">
                    <Flame className="mb-4 h-6 w-6 text-amber-300" />
                    <p className="font-accent text-[9px] font-bold uppercase tracking-widest opacity-60">Purpose</p>
                    <p className="mt-2 font-[Playfair_Display] text-lg font-medium">To make Jesus known.</p>
                  </div>
                  <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 transition-all duration-500 hover:border-[#B51657]/30 hover:shadow-md">
                    <BookOpenText className="mb-4 h-6 w-6 text-[#B51657]" />
                    <p className="font-accent text-[9px] font-bold uppercase tracking-widest text-[#B51657]/60">Approach</p>
                    <p className="mt-2 font-[Playfair_Display] text-lg font-medium text-[#11162E]">Prayer & Word.</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal dir="right">
                <div className="relative pl-6 md:pl-10 before:absolute before:inset-y-2 before:left-[11px] before:w-px before:bg-gradient-to-b before:from-[#B51657] before:via-[#E8D8C8] before:to-transparent">
                  {outreachSteps.map((item, index) => (
                    <div key={item} className="group relative pb-10 last:pb-0">
                      <span className="absolute left-[-29px] md:left-[-33px] top-1 flex h-[23px] w-[23px] items-center justify-center rounded-full bg-[#FAF8F5] border-2 border-[#E8D8C8] group-hover:border-[#B51657] transition-colors duration-300 z-10">
                        <span className="h-2 w-2 rounded-full bg-[#E8D8C8] group-hover:bg-[#B51657] transition-colors duration-300" />
                      </span>
                      
                      <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-neutral-200/60">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-[Playfair_Display] text-[13px] font-bold text-[#B51657]/60 tracking-wider">STEP 0{index + 1}</span>
                        </div>
                        <p className="font-body text-[16px] leading-relaxed text-[#30375F]/80">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* NEW CTA SECTION - Premium Light Dynamic Blend */}
      {/* This beautifully breaks up the layout before transitioning into your dark footer */}
    {/* NEW CTA SECTION - Premium Light Dynamic Blend with Enhanced Button Structure */}
<section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] to-[#F1EAE0]">
  {/* Subtle geometric structural mesh */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#b5165705_1px,transparent_1px),linear-gradient(to_bottom,#b5165705_1px,transparent_1px)] bg-[size:40px_40px]" />
  
  {/* High-fidelity light flares */}
  <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#B51657]/10 blur-[100px] rounded-full pointer-events-none" />
  <div className="absolute bottom-0 right-[5%] w-[300px] h-[300px] bg-amber-500/5 blur-[80px] rounded-full pointer-events-none" />

  <div className="mx-auto max-w-5xl px-6 relative z-10">
    <Reveal>
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#E8D8C8] bg-white/70 backdrop-blur-xl p-10 md:p-20 text-center shadow-[0_30px_70px_rgba(181,22,87,0.04)]">
        
        {/* Floating Badge Minimal Icon */}
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#B51657]/5 border border-[#B51657]/10 mb-8">
          <HeartHandshake className="h-5 w-5 text-[#B51657]" />
        </div>
        
        {/* High-Impact Typographic Heading */}
        <h3 className="mx-auto max-w-3xl font-[Playfair_Display] text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.25] tracking-tight text-neutral-900 text-balance">
          Every outreach begins so that people may{' '}
          <span className="relative inline-block px-2">
            <span className="absolute inset-x-0 bottom-2 h-[6px] bg-[#B51657]/10 -skew-x-6" />
            <span className="italic font-light text-[#B51657]">encounter Jesus.</span>
          </span>
        </h3>
        
        {/* Fixed High-End Primary Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#11162E] to-[#1F264E] px-12 py-5 font-body text-xs md:text-[13px] font-bold uppercase tracking-[0.25em] text-white shadow-[0_20px_45px_rgba(17,22,46,0.18)] transition-all duration-500 hover:shadow-[0_25px_50px_rgba(181,22,87,0.35)] hover:from-[#B51657] hover:to-[#D6226E] hover:-translate-y-1 overflow-hidden min-w-[260px]"
          >
            {/* Smooth glowing radial layer inside button on hover */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#B51657] to-[#d61e68] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out -z-10" />
            
            <span className="relative z-10 pl-1">Contact Ministry</span> 
            <ArrowRight className="h-4 w-4 relative z-10 transition-transform duration-300 transform group-hover:translate-x-2" />
          </Link>
        </div>

      </div>
    </Reveal>
  </div>
</section>
    </div>
  )
}