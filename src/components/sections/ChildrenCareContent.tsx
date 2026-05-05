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
  },
  {
    title: 'Education and health',
    text: 'Schooling, basic needs, and health support are provided so every child can grow with dignity.',
  },
  {
    title: 'Faith for the future',
    text: "They are raised in the grace and love of Christ, learning God's Word from their earliest years.",
  },
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
              {[
                { n: '100+', l: 'Children in our care', icon: 'Child' },
                { n: '100%', l: 'Education provided', icon: 'Books' },
                { n: '100%', l: 'Healthcare covered', icon: 'Care' },
                { n: '24/7', l: 'Love & spiritual care', icon: 'Prayer' },
              ].map((s) => (
                <div key={s.l} className="bg-white rounded-2xl p-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-gray-100 card-lift">
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-crimson-500">{s.icon}</div>
                  <div className="font-display text-2xl text-crimson-500 font-semibold">{s.n}</div>
                  <p className="text-onyx-500 text-xs font-body mt-1 leading-snug">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal dir="left">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-crimson-800 to-burgundy-950 flex items-center justify-center shadow-[0_24px_64px_rgba(0,0,0,0.2)]">
                <div className="text-center p-12">
                  <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">Children Care</div>
                  <p className="font-display text-white/60 text-xl italic font-light">"Let the children come to me..."</p>
                  <p className="text-white/30 text-xs mt-3 font-body tracking-widest uppercase">Matthew 19:14</p>
                </div>
              </div>
            </Reveal>
            
            <Reveal dir="right">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-crimson-500/50" />
                <span className="font-accent text-crimson-500 text-[10px] tracking-[0.35em] uppercase">Children's Ministry</span>
                <span className="h-px w-10 bg-crimson-500/50" />
              </div>
              {/* Updated font weight to light with italic accent per reference */}
              <h2 className="font-display text-4xl md:text-5xl font-light text-onyx-900 leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                Every Child Deserves <span className="italic crimson-text font-light">Love & Hope</span>
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
              {/* Simplified to 2 visible images for a cleaner look */}
              <div className="relative min-h-[440px] flex items-center justify-center">
                <img
                  src="/ch.webp" 
                  alt="Children ministry care"
                  className="w-[85%] h-[380px] object-cover rounded-[28px] shadow-[0_24px_70px_rgba(0,0,0,0.15)] z-10"
                />
                <img
                  src="/family.webp"
                  alt="Children receiving family care"
                  className="absolute -right-4 -top-6 w-[50%] h-[240px] object-cover rounded-[24px] border-8 border-white shadow-[0_18px_45px_rgba(0,0,0,0.12)] z-20"
                />
                <div className="absolute -left-4 -bottom-4 bg-crimson-700 rounded-[20px] p-6 text-white shadow-xl z-30">
                  <div className="font-display text-4xl font-light">100+</div>
                  <p className="text-[10px] uppercase tracking-widest text-white/80">Lives Impacted</p>
                </div>
              </div>
            </Reveal>
            
            <Reveal dir="right">
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-crimson-500/50" />
                <span className="font-accent text-crimson-500 text-[10px] tracking-[0.35em] uppercase">Our Promise</span>
                <span className="h-px w-10 bg-crimson-500/50" />
              </div>
              {/* Updated font weight to light with italic accent per reference */}
              <h2 className="font-display text-4xl md:text-5xl font-light text-onyx-900 leading-tight mb-7" style={{ letterSpacing: '-0.02em' }}>
                A Place Where Children Grow in <span className="italic crimson-text font-light">Grace</span>
              </h2>
              <p className="text-onyx-600 font-body text-base leading-relaxed mb-8">
                Presently we are taking care of 100+ orphaned and poor children, helping them grow in the grace of our Lord Jesus Christ while providing for their housing, education, and health needs.
              </p>
              <div className="space-y-4">
                {childCareHighlights.map((item, index) => (
                  <div key={item.title} className="grid grid-cols-[48px_1fr] gap-4 items-start border-t border-crimson-100 pt-5">
                    <div className="w-12 h-12 rounded-full bg-ivory-100 text-crimson-600 flex items-center justify-center font-display text-xl">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-onyx-900 font-medium mb-1">{item.title}</h3>
                      <p className="text-onyx-600 font-body text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </div>
  )
}