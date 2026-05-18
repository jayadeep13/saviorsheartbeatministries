import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpenCheck, HeartHandshake, MapPinned, Mountain, Sprout, UsersRound, Sparkles, Compass, ShieldCheck } from 'lucide-react'
import ContactCTA from '@/components/sections/ContactCTA'
import GalleryGroupSection from '@/components/media/GalleryGroupSection'
import Reveal from '@/components/ui/Reveal'
import PageHero from '@/components/ui/PageHero'

export const metadata = { title: "Odisha Outreach | Savior's Heartbeat Ministries" }

const focusAreas = [
  {
    title: 'The Tribal Harvest',
    text: 'Bringing light to remote villages and marginalized tribal communities through direct field visits, preaching, and practical compassion.',
    icon: <Mountain className="h-6 w-6" strokeWidth={1.5} />,
  },
  {
    title: 'Heart for Odisha',
    text: 'A dedicated mission for total transformation through prayer, leadership, mercy, and faithful Gospel witness.',
    icon: <HeartHandshake className="h-6 w-6" strokeWidth={1.5} />,
  },
]

export default function OdishaOutreachPage() {
  return (
    <div className="bg-[#FAF8F5] antialiased overflow-hidden">
      {/* Page Hero - Kept Exactly As It Is */}
      <PageHero
        eyebrow="Ministry"
        title="Odisha Outreach"
        subtitle="Reaching unreached districts, tribal communities, and remote villages with the hope of Christ."
        imageSrc="/od1.webp"
        imageClassName="bg-[position:center_42%]"
      />

      {/* SECTION 1: Strategic Vision & Core Mission */}
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-[#FAF8F5] to-[#F5F0E6]/30 border-b border-neutral-200/50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B51657]/5 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 lg:pr-6">
              <Reveal dir="left">
                <div className="inline-flex items-center gap-3 mb-6 bg-white border border-neutral-200/60 py-1.5 px-4 rounded-full shadow-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#B51657]/10 text-[#B51657]">
                    <Sprout className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span className="font-accent text-[10px] font-bold uppercase tracking-[0.3em] text-[#B51657]">
                    State Outreach • 05
                  </span>
                </div>

                <h2 className="font-[Playfair_Display] text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.15] text-[#11162E] tracking-tight">
                  Odisha Outreach <br />
                  <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#B51657] via-[#D6226E] to-[#B51657]">for total transformation.</span>
                </h2>

                <div className="mt-8 space-y-6">
                  <div className="border-l-2 border-[#B51657] pl-5">
                    <h4 className="font-[Playfair_Display] text-xl font-semibold text-[#11162E] mb-2 flex items-center gap-2">
                      <MapPinned className="h-4 w-4 text-[#B51657]" /> Odisha for Christ
                    </h4>
                    <p className="font-body text-[15px] leading-relaxed text-[#30375F]/80">
                      Reaching the unreached in every district with the hope of Christ through prayerful initiative, pastoral follow-up, and steady local care.
                    </p>
                  </div>

                  <div className="border-l-2 border-neutral-300 pl-5">
                    <h4 className="font-[Playfair_Display] text-xl font-semibold text-[#11162E] mb-2 flex items-center gap-2">
                      <Compass className="h-4 w-4 text-[#B51657]" /> Mission Odisha
                    </h4>
                    <p className="font-body text-[15px] leading-relaxed text-[#30375F]/80">
                      Transforming lives across the region through faithful Gospel witness and practical, compassionate care.
                    </p>
                  </div>
                </div>

                {/* PREMIUM ACTION BUTTONS - High-Contrast Thick Capsule Styling */}
                <div className="mt-12 flex flex-col sm:flex-row items-center gap-5">
                  <Link
                    href="/support/financial-partnership"
                    className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-[#090A1A] px-11 py-5 font-body text-xs md:text-[13px] font-bold uppercase tracking-[0.25em] text-white shadow-[0_20px_45px_rgba(9,10,26,0.2)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(181,22,87,0.3)] hover:bg-[#B51657] hover:-translate-y-1 overflow-hidden w-full sm:w-auto min-w-[270px]"
                  >
                    <span className="relative z-10 pl-1">Partner With Us</span> 
                    <ArrowRight className="h-4 w-4 relative z-10 transition-transform duration-300 transform group-hover:translate-x-2" />
                  </Link>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-white border border-neutral-200/85 px-11 py-5 font-body text-xs md:text-[13px] font-bold uppercase tracking-[0.25em] text-[#090A1A] shadow-sm transition-all duration-300 hover:border-neutral-400 hover:bg-[#FAF8F5] hover:-translate-y-1 w-full sm:w-auto min-w-[240px]"
                  >
                    <span>Contact Ministry</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Side Visual Component: IMAGE 1 */}
            <div className="lg:col-span-5 relative">
              <Reveal dir="right">
                <div className="relative aspect-video sm:aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(17,22,46,0.06)] group">
                  <Image
                    src="/od_field_primary.webp" 
                    alt="Odisha primary state outreach field care"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(min-width: 1024px) 450px, 100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11162E]/80 via-[#11162E]/20 to-transparent" />
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B51657]" />
                    <span className="font-accent text-[9px] font-bold uppercase tracking-widest text-[#B51657]">Field Note 01</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-accent text-[9px] font-bold uppercase tracking-[0.25em] text-white/70">State Mission</p>
                    <h3 className="mt-1 font-[Playfair_Display] text-xl font-light text-white leading-snug">
                      Reaching toward the absolute edge of remote districts.
                    </h3>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Focused Initiatives Matrix (IMAGE 2 Included) */}
      <section className="bg-gradient-to-b from-[#111219] to-[#090A0F] py-24 md:py-32 relative text-white">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-16">
            <div className="lg:col-span-7">
              <Reveal dir="left">
                <div className="inline-flex items-center gap-2 mb-4 bg-white/[0.03] border border-white/10 py-1 px-3 rounded-full">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <p className="font-accent text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-300">Outreach Spheres</p>
                </div>
                <h2 className="font-[Playfair_Display] text-4xl sm:text-5xl font-medium text-white tracking-tight">
                  Bringing light to <span className="italic font-light text-[#FF4E88]">marginalized sectors</span>
                </h2>
              </Reveal>
            </div>
            
            {/* Visual Frame Block: IMAGE 2 */}
            <div className="lg:col-span-5 h-24 relative overflow-hidden rounded-xl border border-white/10 group">
              <Image 
                src="/od_tribal_banner.webp" 
                alt="Tribal harvest village entry outreach"
                fill
                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
              <span className="absolute left-6 top-1/2 -translate-y-1/2 font-accent text-xs font-bold tracking-widest text-white/90 uppercase">
                Active Field Ministry Presence
              </span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {focusAreas.map((item, index) => (
              <Reveal key={item.title} delay={index * 120}>
                <article className="group h-full relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 pt-14 transition-all duration-500 hover:border-[#B51657]/40 flex flex-col justify-between">
                  <span className="absolute top-6 right-6 font-[Playfair_Display] text-4xl font-extralight text-neutral-800/40 select-none group-hover:text-[#B51657]/20 transition-colors duration-500">
                    0{index + 1}
                  </span>
                  <div>
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#B51657] to-[#D6226E] text-white">
                      {item.icon}
                    </div>
                    <h3 className="font-[Playfair_Display] text-2xl font-medium text-white group-hover:text-[#FF4E88] transition-colors duration-300 mb-3">
                      {item.title}
                    </h3>
                    <p className="font-body text-[14px] leading-relaxed text-neutral-400 font-light">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Sustainable Training & Care Panels (IMAGE 3 Included) */}
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-[#F9F7F3] to-[#FAF8F5]">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="grid overflow-hidden rounded-3xl border border-neutral-200/70 bg-white shadow-[0_30px_80px_rgba(17,22,46,0.04)] lg:grid-cols-12 lg:items-stretch">
              
              {/* Left Canvas: IMAGE 3 */}
              <div className="relative min-h-[400px] lg:col-span-5 bg-[#12070C] overflow-hidden group">
                <Image
                  src="/od_pastor_training.webp" 
                  alt="Pastoral training and leadership classes"
                  fill
                  className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11162E]/90 via-[#11162E]/30 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 mb-5">
                    <UsersRound className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-[Playfair_Display] text-3xl font-light text-white leading-tight tracking-tight">
                    Equipping local shepherding structures.
                  </h3>
                </div>
              </div>

              {/* Right Side Content Matter Panels */}
              <div className="lg:col-span-7 bg-white p-8 md:p-14 flex flex-col justify-center">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#B51657]/5 border border-[#B51657]/10 text-[#B51657]">
                  <BookOpenCheck className="h-5 w-5" strokeWidth={1.8} />
                </div>
                
                <p className="mb-3 font-accent text-[10px] font-bold uppercase tracking-[0.3em] text-[#B51657]">Long-Term Foundations</p>
                <h2 className="font-[Playfair_Display] text-3xl sm:text-4xl font-medium leading-tight text-[#11162E] tracking-tight">
                  Sustainable focus and <span className="italic text-[#B51657] font-light">practical care tracks.</span>
                </h2>

                <div className="mt-10 space-y-6">
                  {/* Matter Block: Pastoral Training */}
                  <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-neutral-200/50">
                    <h4 className="font-[Playfair_Display] text-xl font-semibold text-[#11162E] mb-2">Pastoral Training</h4>
                    <p className="font-body text-[14px] leading-relaxed text-neutral-600 font-normal">
                      Equipping local leaders through structural mobile Bible training networks and intensive BTCP-based teaching methodologies for permanent, generational spiritual growth.
                    </p>
                  </div>

                  {/* Matter Block: Field Care */}
                  <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-neutral-200/50">
                    <h4 className="font-[Playfair_Display] text-xl font-semibold text-[#11162E] mb-2">Field Care</h4>
                    <p className="font-body text-[14px] leading-relaxed text-neutral-600 font-normal">
                      Serving remote village families with uncompromising dignity, personal compassion, structured prayer support networks, and a regular, consistent missionary field presence.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 4: High-Impact Image Break Block: IMAGE 4 */}
      <section className="py-12 bg-white border-y border-neutral-200/60">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl group shadow-inner">
            <Image 
              src="/od_field_landscape.webp" 
              alt="Odisha panoramic wide field action display" 
              fill 
              className="object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#11162E]/30 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="font-accent text-[9px] font-bold uppercase tracking-[0.3em] text-[#FF8EA7] mb-1">Outreach Continuity</p>
                <p className="font-[Playfair_Display] text-2xl md:text-3xl text-white font-light tracking-tight">Walking patiently with families down every village trail.</p>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white font-accent text-[10px] tracking-widest uppercase font-bold">
                <ShieldCheck className="h-3.5 w-3.5 text-amber-400" /> Accountable Field Infrastructure
              </div>
            </div>
          </div>
        </div>
      </section>

      <GalleryGroupSection
        group="odisha-state-outreach"
        eyebrow="Odisha Outreach Gallery"
        title="Odisha Outreach Moments"
        subtitle="Photos from Odisha outreach will appear here from the Odisha State Outreach gallery."
        showImageTitles={false}
      />

   
    </div>
  )
}
