import Reveal from '@/components/ui/Reveal'
import PageHero from '@/components/ui/PageHero'
import ContactCTA from '@/components/sections/ContactCTA'
export const metadata = { title: "Spiritual & Community Hubs | Savior's Heartbeat Ministries" }

const hubs = [
  { icon:'⛪', title:'12 Village Churches', desc:'Church buildings constructed in 12 different villages across Andhra Pradesh — each one a beacon of light and a centre of community life, worship, and spiritual growth.', grad:'from-crimson-800 to-burgundy-900' },
  { icon:'📚', title:'Spiritual Literature', desc:'Distribution of Bibles, devotionals, books and SPANDANA magazines to villages, pastors, new believers and inquirers — feeding the soul with the living Word of God.', grad:'from-burgundy-800 to-onyx-900' },
  { icon:'🌐', title:'Community Events', desc:'Regular healing services, fellowship gatherings, youth events, and community celebrations that build strong, vibrant local bodies across rural and urban Andhra Pradesh.', grad:'from-sage-700 to-onyx-800' },
  { icon:'📡', title:'Media Outreach', desc:'Weekly television programs and the SPANDANA magazine extend the reach of these community hubs far beyond physical walls — into living rooms across India and the Telugu diaspora.', grad:'from-onyx-800 to-crimson-900' },
]

export default function HubsPage() {
  return (
    <div>
      <PageHero eyebrow="Ministry" title="Spiritual & Community Hubs" subtitle="Centres of transformation in villages and communities across Andhra Pradesh" />
      <section className="py-24 bg-ivory-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-crimson-500/50" />
                <span className="font-accent text-crimson-500 text-[10px] tracking-[0.35em] uppercase">Community</span>
                <span className="h-px w-10 bg-crimson-500/50" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-onyx-900 mb-4" style={{letterSpacing:'-0.02em'}}>
                Beacons of <span className="italic crimson-text">Light & Life</span>
              </h2>
              <p className="text-onyx-500 max-w-xl mx-auto font-body">Each hub is more than a building — it is a living community transformed by the Gospel of Jesus Christ.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hubs.map((h, i) => (
              <Reveal key={h.title} delay={i * 80}>
                <div className="card-lift rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] group h-full">
                  <div className={`h-36 bg-gradient-to-br ${h.grad} flex items-center justify-center`}>
                    <span className="text-5xl">{h.icon}</span>
                  </div>
                  <div className="bg-white p-7">
                    <h3 className="font-heading text-onyx-900 text-xl font-semibold mb-3">{h.title}</h3>
                    <p className="text-onyx-500 text-sm leading-relaxed font-body">{h.desc}</p>
                  </div>
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
