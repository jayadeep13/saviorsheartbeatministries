import Reveal from '@/components/ui/Reveal'
import PageHero from '@/components/ui/PageHero'
import ContactCTA from '@/components/sections/ContactCTA'
export const metadata = { title: "Divine Encounter | Savior's Heartbeat Ministries" }

const initiatives = [
  { icon:'⛪', title:'Church Constructions', desc:'SHB Ministries have constructed church buildings in 12 different villages of Andhra Pradesh. These are sacred spaces where entire communities encounter the living God. Many more villages are still waiting — and with your support, we will reach them.', color:'border-crimson-500/30' },
  { icon:'🎺', title:'Evangelism Crusades', desc:'Every year nearly six different gospel festivals are conducted by SHB. Hundreds of thousands gather — and when they hear about Jesus, they eagerly receive Him as their Savior and Lord. The harvest is plentiful, the laborers are many.', color:'border-burgundy-500/30' },
  { icon:'📺', title:'Television Ministry', desc:'A weekly television program and a special kids program are telecast regularly. Thousands of viewers respond with letters, prayer requests, and requests for spiritual literature. The screen becomes a pulpit that reaches every home.', color:'border-onyx-500/30' },
  { icon:'🙏', title:'Regular Worship Services', desc:'Sunday Worship Service: Morning Service at 10:30 AM and Evening Service at 07:30 PM. Fasting Prayer is every Friday at 07:30 PM, Youth Meeting is Sunday afternoon at 02:00 PM, Sunday School is every Sunday during Worship Service, and All Night Prayers are held on the last Friday of every month from 09:00 PM onwards.', color:'border-sage-500/30' },
]

export default function DivinePage() {
  return (
    <div>
      <PageHero eyebrow="Ministry" title="Divine Encounter" subtitle="Where heaven meets earth — crusades, worship, and the living presence of God" />
      <section className="py-24 bg-ivory-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-crimson-500/50" />
                <span className="font-accent text-crimson-500 text-[10px] tracking-[0.35em] uppercase">Ministry</span>
                <span className="h-px w-10 bg-crimson-500/50" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-onyx-900 mb-4" style={{letterSpacing:'-0.02em'}}>
                Encountering <span className="italic crimson-text">the Living God</span>
              </h2>
              <p className="text-onyx-500 max-w-xl mx-auto font-body">The Divine Encounter ministry creates spaces where people genuinely meet God — through crusades, worship, television, and community.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className={`card-lift bg-white rounded-3xl p-8 border ${item.color} shadow-[0_4px_24px_rgba(0,0,0,0.06)] h-full`}>
                  <div className="text-4xl mb-5">{item.icon}</div>
                  <h3 className="font-heading text-onyx-900 text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-onyx-500 text-sm leading-relaxed font-body">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </div>
  )
}
