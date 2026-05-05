import Reveal from '@/components/ui/Reveal'
import PageHero from '@/components/ui/PageHero'
import ContactCTA from '@/components/sections/ContactCTA'
export const metadata = { title: "Native Missionaries | Savior's Heartbeat Ministries" }

export default function NativeMissionariesPage() {
  return (
    <div>
      <PageHero eyebrow="Ministry" title="Native Missionaries" subtitle="Empowering local leaders to transform their own communities for Christ" />
      <section className="py-24 bg-ivory-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal dir="left">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-burgundy-800 to-onyx-950 flex items-center justify-center shadow-[0_24px_64px_rgba(0,0,0,0.2)]">
                <div className="text-center p-12">
                  <div className="text-7xl mb-4">👨‍🏫</div>
                  <p className="font-display text-white/60 text-xl italic font-light">"Equipping the Saints for Works of Service"</p>
                  <p className="text-white/30 text-xs mt-3 font-body tracking-widest uppercase">Ephesians 4:12</p>
                </div>
              </div>
            </Reveal>
            <Reveal dir="right">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-crimson-500/50" />
                <span className="font-accent text-crimson-500 text-[10px] tracking-[0.35em] uppercase">Missions</span>
                <span className="h-px w-10 bg-crimson-500/50" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-onyx-900 leading-tight mb-6" style={{letterSpacing:'-0.02em'}}>
                Raising Up <span className="italic crimson-text">Local Champions</span>
              </h2>
              <div className="space-y-4 text-onyx-600 font-body text-sm leading-relaxed">
                <p>The Native Missionaries ministry focuses on training and empowering local believers to become effective servants of God in their own communities. These short-term seminars span from one week to sixty days, depending on resource persons and God's gracious provision.</p>
                <p>Countryside pastors and native missionaries serve in some of the most remote areas of Andhra Pradesh — reaching villages that would otherwise never hear the Gospel. SHB provides them with training, encouragement, spiritual literature, and financial support.</p>
                <p>By investing in local leaders who already speak the language, know the culture, and hold deep community relationships — the ministry achieves a multiplying effect. One trained missionary can reach entire villages over a lifetime of devoted service.</p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[{n:'1–60',l:'Days of Training'},{n:'100s',l:'Pastors Trained'},{n:'12+',l:'Villages Reached'}].map(s => (
                  <div key={s.l} className="text-center p-4 bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-100">
                    <div className="font-display text-xl text-crimson-500 font-semibold">{s.n}</div>
                    <div className="text-onyx-500 text-[11px] font-body mt-1 leading-tight">{s.l}</div>
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
