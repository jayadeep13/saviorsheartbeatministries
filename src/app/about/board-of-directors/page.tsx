import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import PageHero from '@/components/ui/PageHero'
import ContactCTA from '@/components/sections/ContactCTA'
import { Heart, Globe, Shield, Quote, Star, Users, CheckCircle2 } from 'lucide-react'

export const metadata = { title: "Board of Directors | Savior's Heartbeat Ministries" }

export default function BoardPage() {
  return (
    <main className="bg-[#FCFAF7] overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <PageHero
        eyebrow="About Us"
        title="Board of Directors"
        subtitle="Meet our compassionate ministers and partners from the USA"
      />

      {/* --- SECTION 1: THE PORTRAIT SPOTLIGHT --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal dir="left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#D81B60]/5 rounded-[3rem] blur-2xl group-hover:bg-[#D81B60]/10 transition-colors" />
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl bg-slate-100">
                  <Image
                    src="/BOD.webp" 
                    alt="Brother Jerry & Sister Debi Ayers"
                    fill
                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#D81B60] text-white p-8 rounded-full shadow-2xl hidden md:block">
                    <Star className="w-6 h-6 mb-2 animate-pulse text-[#FFD700]" />
                    <p className="text-[10px] font-black uppercase tracking-widest leading-tight">Faithful<br/>Stewards</p>
                </div>
              </div>
            </Reveal>

            <Reveal dir="right">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D81B60]" />
                  <span className="text-[#D81B60] text-[10px] font-black uppercase tracking-[0.4em]">USA Liaison Office</span>
                </div>
                <h2 className="text-5xl lg:text-7xl font-serif text-slate-900 leading-[0.9] italic">
                  Brother Jerry <br /> & Sister <span className="text-[#D81B60] not-italic font-bold">Debi Ayers</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light italic border-l-4 border-[#D81B60] pl-6">
                  &quot;Compassionate ministers who welcomed Deva and helped establish Savior&apos;s Heartbeat USA with a registered IRS account for transparency.&quot;
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-3 px-5 py-3 bg-slate-50 rounded-2xl border border-slate-100">
                        <Shield className="text-[#D81B60]" size={18} />
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">IRS Registered</p>
                    </div>
                    <div className="flex items-center gap-3 px-5 py-3 bg-slate-50 rounded-2xl border border-slate-100">
                        <Globe className="text-[#D81B60]" size={18} />
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Global Transparency</p>
                    </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE FULL STORY TIMELINE --- */}
      <section className="py-24 bg-[#0F0505] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
            <Users size={600} className="text-white -translate-y-20 translate-x-20" />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-3xl lg:text-5xl font-serif italic mb-6">A Journey of Faith & Partnership</h3>
            <div className="h-1 w-24 bg-[#D81B60] mx-auto" />
          </div>

          <div className="space-y-16">
            {/* Paragraph 1 & 2 */}
            <Reveal dir="up">
              <div className="grid md:grid-cols-[100px_1fr] gap-8 items-start pb-12 border-b border-white/5">
                <div className="text-[#D81B60] font-black text-2xl tracking-tighter opacity-50">1997</div>
                <div className="space-y-6">
                  <p className="text-lg text-white/80 leading-relaxed">
                    In 1997, our founder, Deva, met Brother Jerry Ayers and his wife, Mrs. Debi Ayers, for the first time in the USA. This compassionate, godly couple warmly welcomed Deva, a stranger and compassionate minister from India, into their home.
                  </p>
                  <div className="bg-[#D81B60]/10 border border-[#D81B60]/20 p-6 rounded-2xl italic text-white/70">
                    As the Word says in Hebrews 13:1-2, we are called to keep loving one another as brothers and sisters and to show hospitality to strangers, for by doing so some have welcomed angels without knowing it.
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Paragraph 3 */}
            <Reveal dir="up">
              <div className="grid md:grid-cols-[100px_1fr] gap-8 items-start pb-12 border-b border-white/5">
                <div className="text-[#FFD700] font-black text-2xl tracking-tighter opacity-50">Vision</div>
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-widest text-[#D81B60] mb-4">Establishing Transparency</h4>
                  <p className="text-lg text-white/80 leading-relaxed">
                    During his stay, Deva shared his vision for Savior&apos;s Heartbeat Ministries and requested the Ayers&apos; help in setting up a US-based bank account to oversee incoming offerings. They marveled at this preacher from India who had no shelter of his own, yet was asking for help to establish a transparent ministry account.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Paragraph 4 & 5 */}
            <Reveal dir="up">
              <div className="grid md:grid-cols-[100px_1fr] gap-8 items-start pb-12 border-b border-white/5">
                <div className="text-[#D81B60] font-black text-2xl tracking-tighter opacity-50">1999</div>
                <div className="space-y-6">
                  <p className="text-lg text-white/80 leading-relaxed">
                    While staying in their home for a couple of weeks, Deva invited Brother Jerry many times to visit India and minister to the people. In 1999, Brother Jerry and Keith Carr answered God&apos;s call and traveled to India, where they witnessed thousands gathering to hear the Good News and saw the spiritual hunger of the people.
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed font-medium italic">
                    During that visit, they blessed hundreds of widows and children, bringing joy and gratitude. They also personally witnessed Deva&apos;s compassionate ministry in India.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Paragraph 6 */}
            <Reveal dir="up">
              <div className="grid md:grid-cols-[100px_1fr] gap-8 items-start">
                <div className="text-[#FFD700] font-black text-2xl tracking-tighter opacity-50">USA</div>
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-widest text-[#D81B60] mb-4">IRS Registered Account</h4>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Upon returning to the US, Brother Jerry and Sister Debi established Savior&apos;s Heartbeat USA, a registered IRS account, ensuring transparency through annual audits. They faithfully forwarded offerings to India as instructed by Deva. Mrs. Debi Ayers, secretary to Savior&apos;s Heartbeat in the USA, sends tax-deductible receipts to donors at the end of every year.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE HEARTFELT GRATITUDE --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="bg-[#FDF2F7] p-12 lg:p-20 rounded-[4rem] border border-[#D81B60]/10 relative shadow-inner overflow-hidden">
               <Quote className="absolute top-8 left-8 text-[#D81B60]/10" size={120} />
               <div className="relative z-10">
                 <p className="text-2xl lg:text-3xl font-serif italic text-slate-800 leading-relaxed mb-12">
                   &quot;The Savior&apos;s Heartbeat team in India extends their deepest gratitude to the Ayers for their selfless, God-inspired support. Their generosity has enabled us to provide crucial aid to the poor and needy, addressing both physical and spiritual necessities.&quot;
                 </p>
                 <div className="flex flex-col items-center">
                    <div className="h-16 w-px bg-[#D81B60] mb-6" />
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D81B60]">Heritage of Faith</p>
                 </div>
               </div>
            </div>
          </Reveal>
        </div>
      </section>

    
    </main>
  )
}
