import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, GraduationCap, Heart, HeartPulse, Home, ShieldCheck, ArrowRight, Sparkles, HeartHandshake } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import PageHero from '@/components/ui/PageHero'
import ContactCTA from '@/components/sections/ContactCTA'

type ChildrenCareContentProps = {
  eyebrow?: string
  title?: string
  subtitle?: string
}

const childCareHighlights = [
  {
    title: 'A loving home',
    text: 'Children are cared for with daily attention, prayer, safety, and steady encouragement.',
    icon: Home,
  },
  {
    title: 'Child education',
    text: 'Schooling, basic needs, and health support are provided so every child can grow with dignity.',
    icon: GraduationCap,
  },
  {
    title: 'Faith for the future',
    text: "They are raised in the grace and love of Christ, learning God's Word from their earliest years.",
    icon: BookOpen,
  },
]

const childCareStats = [
  { n: '100+', l: 'Children in our care', icon: Heart, tone: 'bg-[#B51657]/5 text-[#B51657] border-[#B51657]/10' },
  { n: '100%', l: 'Education provided', icon: GraduationCap, tone: 'bg-amber-50 text-amber-700 border-amber-100' },
  { n: '100%', l: 'Healthcare covered', icon: HeartPulse, tone: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
  { n: '24/7', l: 'Love & spiritual care', icon: ShieldCheck, tone: 'bg-blue-50 text-blue-700 border-blue-100' },
]

export default function ChildrenCareContent({
  eyebrow = 'Charity',
  title = 'Helping Hands for Children',
  subtitle = 'Caring for 100+ orphaned and poor children in the grace and love of Christ',
}: ChildrenCareContentProps = {}) {
  return (
    <div className="bg-[#FAF8F5] antialiased overflow-hidden">
      {/* SECTION 1: Page Hero Section */}
      <PageHero
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        imageSrc="/children.webp"
        imageClassName="bg-[position:50%_center] md:bg-[position:50%_22%] lg:bg-[position:50%_18%]"
      />
      
      {/* SECTION 2: Impact Analytics & Narrative Overview */}
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-[#FAF8F5] to-[#F5F0E6]/30 border-b border-neutral-200/50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B51657]/5 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Metrics Dashboard Grid */}
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
              {childCareStats.map((s) => {
                const Icon = s.icon

                return (
                  <div 
                    key={s.l} 
                    className="bg-white rounded-2xl p-7 shadow-[0_15px_40px_rgba(17,22,46,0.03)] border border-neutral-200/60 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(17,22,46,0.06)] hover:-translate-y-1"
                  >
                    <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl border ${s.tone}`}>
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div className="font-[Playfair_Display] text-4xl text-[#11162E] font-bold tracking-tight">{s.n}</div>
                    <p className="text-[#30375F]/70 text-xs font-semibold font-body uppercase tracking-wider mt-3 leading-snug">{s.l}</p>
                  </div>
                )
              })}
            </div>
          </Reveal>

          {/* Core Descriptive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:items-center">
            
            {/* Left Visual Frame Canvas */}
            <div className="lg:col-span-5 relative">
              <Reveal dir="left">
                <div className="relative aspect-video sm:aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(17,22,46,0.08)] group">
                  <Image
                    src="/pe.png"
                    alt="Children supported through Savior's Heartbeat Ministries"
                    fill
                    sizes="(min-width: 1024px) 450px, 100vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11162E]/80 via-[#11162E]/20 to-transparent" />
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B51657]" />
                    <span className="font-accent text-[9px] font-bold uppercase tracking-widest text-[#B51657]">Sanctuary Note</span>
                  </div>
                  <div className="absolute bottom-7 left-7 right-7 text-white">
                    <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">Children Care</div>
                    <p className="font-[Playfair_Display] text-2xl italic font-light leading-snug">Every child deserves love, hope, and a permanent future.</p>
                  </div>
                </div>
              </Reveal>
            </div>
            
            {/* Right Strategic Text Layout */}
            <div className="lg:col-span-7 lg:pl-4">
              <Reveal dir="right">
                <div className="inline-flex items-center gap-3 mb-6 bg-white border border-neutral-200/60 py-1.5 px-4 rounded-full shadow-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#B51657]/10 text-[#B51657]">
                    <Sparkles className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span className="font-accent text-[10px] font-bold uppercase tracking-[0.3em] text-[#B51657]">
                    Children's Ministry
                  </span>
                </div>

                <h2 className="font-[Playfair_Display] text-4xl sm:text-5xl font-medium leading-[1.15] text-[#11162E] tracking-tight mb-6">
                  Every Child Deserves <br />
                  <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#B51657] via-[#D6226E] to-[#B51657]">Love & Vital Hope.</span>
                </h2>

                <div className="space-y-5 text-[#30375F]/80 font-body text-[15px] leading-relaxed">
                  <p>Presently we are taking care of 100+ orphaned and poor children. We help them grow in the grace of our Lord Jesus Christ and we take care of them in all their housing, education and health issues.</p>
                  <p>Each child under our care is educated, healthy, loved, and growing in an unshakeable faith that will carry them securely through life.</p>
                  <p>These precious children receive not just physical provision, but a durable spiritual foundation, learning God's Word from their earliest years, surrounded by love, and raised to become tomorrow's leaders.</p>
                </div>

                {/* Premium Testimonial Break-out Pane */}
                <div className="mt-8 p-6 bg-white rounded-2xl border-l-4 border-[#B51657] shadow-sm">
                  <p className="font-[Playfair_Display] text-[#11162E] italic text-[17px] font-normal leading-relaxed">
                    "We help them grow in the grace of our Lord Jesus Christ... in all their housing, education and health."
                  </p>
                </div>

                {/* PREMIUM ACTION CTA - Deep Matte Black Styling */}
                <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">
                  <Link
                    href="/support/financial-partnership"
                    className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-[#090A1A] px-11 py-5 font-body text-xs font-bold uppercase tracking-[0.25em] text-white shadow-[0_20px_45px_rgba(9,10,26,0.18)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(181,22,87,0.25)] hover:bg-[#B51657] hover:-translate-y-1 overflow-hidden w-full sm:w-auto min-w-[270px]"
                  >
                    <span className="relative z-10 pl-1">Partner With Us</span> 
                    <ArrowRight className="h-4 w-4 relative z-10 transition-transform duration-300 transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Deep Strategic Execution & Feature Matrices */}
      <section className="bg-gradient-to-b from-[#111219] to-[#090A0F] py-24 md:py-32 relative text-white">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:items-center">
            
            {/* Left Side Composite Image Block */}
            <div className="lg:col-span-6">
              <Reveal dir="left">
                <div className="relative grid gap-5 sm:grid-cols-2 sm:items-center">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.3)] border border-white/5">
                    <Image
                      src="/ch.webp" 
                      alt="Children ministry care grid primary layout"
                      fill
                      sizes="(min-width: 1024px) 25vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 z-30 text-white">
                      <div className="font-[Playfair_Display] text-4xl font-bold tracking-tight text-[#FF4E88]">100+</div>
                      <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mt-0.5">Lives Guarded</p>
                    </div>
                  </div>
                  
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.25)] border border-white/5 hidden sm:block">
                    <Image
                      src="/chiii.png"
                      alt="Children receiving supportive family care structure"
                      fill
                      sizes="(min-width: 1024px) 25vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
            
            {/* Right Side Operational Focus Column */}
            <div className="lg:col-span-6 lg:pl-4">
              <Reveal dir="right">
                <div className="inline-flex items-center gap-2 mb-5 bg-white/[0.03] border border-white/10 py-1 px-3 rounded-full">
                  <p className="font-accent text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-300">Our Core Promise</p>
                </div>
                
                <h2 className="font-[Playfair_Display] text-4xl sm:text-5xl font-medium text-white tracking-tight mb-6">
                  A Place Where Children <br />
                  Grow up securely in <span className="italic font-light text-[#FF4E88]">Grace.</span>
                </h2>
                
                <p className="text-neutral-400 font-body text-[15px] leading-relaxed mb-10 font-light">
                  Presently we are taking care of 100+ orphaned and poor children, helping them grow in the grace of our Lord Jesus Christ while providing full accountability for their housing, education, and health needs.
                </p>
                
                {/* Feature Processing List */}
                <div className="space-y-6">
                  {childCareHighlights.map((item) => {
                    const Icon = item.icon

                    return (
                      <div key={item.title} className="grid grid-cols-[48px_1fr] gap-5 items-start border-t border-white/[0.08] pt-6 group">
                        <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 text-[#FF4E88] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#B51657] group-hover:text-white group-hover:border-transparent">
                          <Icon className="h-5 w-5" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="font-[Playfair_Display] text-xl text-white font-medium mb-1.5 transition-colors duration-300 group-hover:text-[#FF4E88]">
                            {item.title}
                          </h3>
                          <p className="text-neutral-400 font-body text-sm leading-relaxed font-light">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
      
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