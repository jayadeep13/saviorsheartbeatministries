import Reveal from '@/components/ui/Reveal'
import PageHero from '@/components/ui/PageHero'
import ContactCTA from '@/components/sections/ContactCTA'
export const metadata = { title: "SPANDANA Magazine | Savior's Heartbeat Ministries" }

export default function MagazinePage() {
  return (
    <div>
      <PageHero eyebrow="Ministry" title="SPANDANA Magazine" subtitle="The Heartbeat in Print — blessing Telugu readers around the globe since 1976" />
      <section className="py-24 bg-ivory-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <Reveal dir="left">
              <div className="aspect-[3/4] max-w-xs mx-auto rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.2)]"
                style={{background:'linear-gradient(145deg,#8B0A35 0%,#C8114C 50%,#7B1535 100%)'}}>
                <div className="w-full h-full flex flex-col items-center justify-center p-10 relative">
                  <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:'radial-gradient(circle at 2px 2px,white 1px,transparent 0)',backgroundSize:'14px 14px'}} />
                  <div className="relative text-center">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="h-px w-8 bg-white/40" />
                      <span className="text-white/50 text-[8px] font-accent tracking-[0.4em] uppercase">Monthly Edition</span>
                      <span className="h-px w-8 bg-white/40" />
                    </div>
                    <h3 className="font-display text-white text-5xl font-light mb-1" style={{letterSpacing:'-0.02em'}}>స్పందన</h3>
                    <h4 className="font-accent text-white/80 text-2xl tracking-wider mb-4">SPANDANA</h4>
                    <div className="w-12 h-px bg-white/30 mx-auto mb-4" />
                    <p className="text-white/50 text-xs font-body tracking-widest uppercase mb-2">The Heartbeat</p>
                    <p className="text-white/40 text-[10px] font-body">Christian Magazine · Est. 1976</p>
                    <p className="text-white/40 text-[10px] font-body">Vijayawada, Andhra Pradesh</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal dir="right">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-crimson-500/50" />
                <span className="font-accent text-crimson-500 text-[10px] tracking-[0.35em] uppercase">Est. 1976</span>
                <span className="h-px w-10 bg-crimson-500/50" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-onyx-900 leading-tight mb-6" style={{letterSpacing:'-0.02em'}}>
                A Voice for <span className="italic crimson-text">Telugu Believers</span><br />Worldwide
              </h2>
              <div className="space-y-4 text-onyx-600 font-body text-sm leading-relaxed">
                <p>SPANDANA — meaning "Heartbeat" in Telugu — is one of the most widely-read Christian magazines for Telugu-speaking people around the globe. Founded in 1976, it has faithfully delivered spiritual nourishment for over five decades.</p>
                <p>The magazine features inspiring sermons, powerful testimonies, deep Bible studies, prayer points, and ministry news that encourage and strengthen believers — from Andhra Pradesh to the Telugu diaspora spread across every continent.</p>
                <p>Thousands of letters pour in each year from readers who have been transformed, healed, and brought to saving faith through this printed ministry. Each issue is a living testimony to God's word going forth and not returning void.</p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[{n:'50+',l:'Years Published'},{n:'1000s',l:'Global Readers'},{n:'1976',l:'Year Founded'}].map(s => (
                  <div key={s.l} className="text-center p-4 bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-100">
                    <div className="font-display text-xl text-crimson-500 font-semibold">{s.n}</div>
                    <div className="text-onyx-500 text-[11px] font-body mt-1 leading-tight">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="bg-white rounded-3xl p-10 shadow-[0_4px_32px_rgba(0,0,0,0.07)] border border-gray-100">
              <h3 className="font-heading text-onyx-900 text-2xl font-semibold mb-6 text-center">What You Will Find in SPANDANA</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {icon:'📜',label:'Inspiring Sermons'},
                  {icon:'🙏',label:'Powerful Testimonies'},
                  {icon:'📖',label:'Bible Studies'},
                  {icon:'🌟',label:'Prayer Points'},
                  {icon:'📰',label:'Ministry News'},
                  {icon:'👨‍👩‍👧',label:'Family Devotionals'},
                  {icon:'✝️',label:'Doctrinal Teaching'},
                  {icon:'🌍',label:'Global Missions'},
                ].map(f => (
                  <div key={f.label} className="text-center p-4 rounded-2xl bg-ivory-50 hover:bg-crimson-50 transition-colors group cursor-default">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                    <p className="text-onyx-600 text-xs font-body font-medium">{f.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <ContactCTA />
    </div>
  )
}
