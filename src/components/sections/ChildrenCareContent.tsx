import Reveal from '@/components/ui/Reveal'
import PageHero from '@/components/ui/PageHero'
import ContactCTA from '@/components/sections/ContactCTA'
import Image from 'next/image'
import { BookOpen, GraduationCap, Heart, HeartPulse, Home, ShieldCheck } from 'lucide-react'

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
  { n: '100+', l: 'Children in our care', icon: Heart, tone: 'bg-crimson-50 text-crimson-600' },
  { n: '100%', l: 'Education provided', icon: GraduationCap, tone: 'bg-[#F7DFA3]/35 text-[#8B5D13]' },
  { n: '100%', l: 'Healthcare covered', icon: HeartPulse, tone: 'bg-emerald-50 text-emerald-700' },
  { n: '24/7', l: 'Love & spiritual care', icon: ShieldCheck, tone: 'bg-sky-50 text-sky-700' },
]

export default function ChildrenCareContent({
  eyebrow = 'Charity',
  title = 'Helping Hands for Children',
  subtitle = 'Caring for 100+ orphaned and poor children in the grace and love of Christ',
}: ChildrenCareContentProps = {}) {
  return (
    <div>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        imageSrc="/children.webp"
        imageClassName="bg-[position:50%_center] md:bg-[position:50%_22%] lg:bg-[position:50%_18%]"
      />
      
      <section className="py-24 bg-ivory-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              {childCareStats.map((s) => {
                const Icon = s.icon

                return (
                  <div key={s.l} className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-gray-100 card-lift">
                    <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${s.tone}`}>
                      <Icon className="h-6 w-6" strokeWidth={1.9} />
                    </div>
                    <div className="font-display text-3xl text-onyx-900 font-bold leading-none">{s.n}</div>
                    <p className="text-onyx-600 text-sm font-body mt-3 leading-snug">{s.l}</p>
                  </div>
                )
              })}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal dir="left">
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-ivory-100 shadow-[0_24px_64px_rgba(0,0,0,0.16)] sm:aspect-[1.28/1] lg:aspect-square">
                <Image
                  src="/pe.png"
                  alt="Children supported through Savior's Heartbeat Ministries"
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                <div className="absolute bottom-7 left-7 right-7 text-white">
                  <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-white/75">Children Care</div>
                  <p className="font-display text-2xl italic font-semibold leading-tight md:text-3xl">Every child deserves love, hope, and a future.</p>
                </div>
              </div>
            </Reveal>
            
            <Reveal dir="right">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-crimson-500/50" />
                <span className="font-accent text-crimson-500 text-[10px] tracking-[0.35em] uppercase">Children's Ministry</span>
                <span className="h-px w-10 bg-crimson-500/50" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-onyx-900 leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                Every Child Deserves <span className="italic crimson-text font-bold">Love & Hope</span>
              </h2>
              <div className="space-y-4 text-onyx-600 font-body text-sm leading-relaxed">
                <p>Presently we are taking care of 100+ orphaned and poor children. We help them grow in the grace of our Lord Jesus Christ and we take care of them in all their housing, education and health issues.</p>
                <p>Each child under our care is educated, healthy, loved, and growing in an unshakeable faith that will carry them through life.</p>
                <p>These precious children receive not just physical provision, but a spiritual foundation, learning God's Word from their earliest years, surrounded by love, and raised to become tomorrow's leaders.</p>
              </div>
              <div className="mt-8 p-6 bg-white rounded-2xl border border-crimson-100 shadow-card-glow">
                <p className="font-display text-onyx-700 italic text-lg font-light leading-relaxed">"We help them grow in the grace of our Lord Jesus Christ... in all their housing, education and health."</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 items-center">
            <Reveal dir="left">
              <div className="relative grid gap-5 sm:grid-cols-2 sm:items-center">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_24px_70px_rgba(0,0,0,0.15)]">
                  <Image
                    src="/ch.webp" 
                    alt="Children ministry care"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/65 to-transparent" />
                  <div className="absolute bottom-6 left-6 z-30 text-white">
                    <div className="font-display text-4xl font-bold">100+</div>
                    <p className="text-[10px] uppercase tracking-widest text-white/80">Lives Impacted</p>
                  </div>
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
                  <Image
                    src="/chiii.png"
                    alt="Children receiving family care"
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </Reveal>
            
            <Reveal dir="right">
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-crimson-500/50" />
                <span className="font-accent text-crimson-500 text-[10px] tracking-[0.35em] uppercase">Our Promise</span>
                <span className="h-px w-10 bg-crimson-500/50" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-onyx-900 leading-tight mb-7" style={{ letterSpacing: '-0.02em' }}>
                A Place Where Children Grow in <span className="italic crimson-text font-bold">Grace</span>
              </h2>
              <p className="text-onyx-600 font-body text-base leading-relaxed mb-8">
                Presently we are taking care of 100+ orphaned and poor children, helping them grow in the grace of our Lord Jesus Christ while providing for their housing, education, and health needs.
              </p>
              <div className="space-y-4">
                {childCareHighlights.map((item) => {
                  const Icon = item.icon

                  return (
                    <div key={item.title} className="grid grid-cols-[48px_1fr] gap-4 items-start border-t border-crimson-100 pt-5">
                      <div className="w-12 h-12 rounded-full bg-ivory-100 text-crimson-600 flex items-center justify-center">
                        <Icon className="h-5 w-5" strokeWidth={1.9} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl text-onyx-900 font-medium mb-1">{item.title}</h3>
                        <p className="text-onyx-600 font-body text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </div>
  )
}
