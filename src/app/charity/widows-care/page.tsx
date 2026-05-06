import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import PageHero from '@/components/ui/PageHero'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata = { title: "Widows Care | Savior's Heartbeat Ministries" }

type WidowsCareContentProps = {
  eyebrow?: string
  title?: string
  subtitle?: string
}

const plight = [
  'Extreme poverty',
  'Social isolation',
  'Lack of access to healthcare',
  'Emotional distress',
]

const support = [
  'Provide food, shelter, and medical care',
  'Offer emotional support and companionship',
  'Empower them through education and skills training',
  'Restore their dignity and purpose',
]

const reflection = [
  'Imagine a life of loneliness and struggle',
  'Envision a community caring for its most vulnerable',
  'Consider how your support can bring hope',
]

const ways = [
  { title: 'Donate', detail: 'Rs. 500/month (~ $7 USD) supports 1 widow' },
  { title: 'Volunteer', detail: 'Share your time, skills, and love' },
  { title: 'Spread Awareness', detail: 'Share this page and use #SupportWidows' },
]

function WidowsCareContent({
  eyebrow = 'Charity',
  title = 'Widows Care',
  subtitle = 'Supporting forgotten widows by restoring dignity and reviving hope',
}: WidowsCareContentProps = {}) {
  return (
    <div>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
      />

      <section className="py-24 bg-ivory-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal dir="left">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-crimson-500/50" />
                <span className="font-accent text-crimson-500 text-[10px] tracking-[0.35em] uppercase">Widows Care</span>
                <span className="h-px w-10 bg-crimson-500/50" />
              </div>
 <h2
  className="font-display text-5xl md:text-6xl font-semibold leading-tight mb-8"
  style={{ letterSpacing: "-0.03em" }}
>
  <span className="block text-[#B51657]">
    Restoring Dignity,
  </span>
  <span className="block italic font-light text-gray-700 mt-2">
    Reviving Hope
  </span>
</h2>
              <div className="space-y-4 text-onyx-600 font-body text-sm leading-relaxed">
                <p>It is often said that a woman is dependent as a girl on her father, as a wife on her husband, and as a mother on her son. But many elderly and poor widows have no one beside them.</p>
                <p>The Widows Care Ministry comes alongside these precious women with regular support, loving visits, daily meals, medical assistance, emotional care, and a community where they are seen and valued.</p>
                <p>Your support helps us continue and expand this vital work, so every widow in our care knows she is not forgotten by God or by us.</p>
              </div>
              <div className="mt-8 p-6 bg-white rounded-2xl border-l-4 border-crimson-500/50 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
                <p className="font-display text-onyx-700 italic text-base font-light">"Religion that is pure and undefiled before God, the Father, is this: to visit orphans and widows in their affliction." - James 1:27</p>
              </div>
            </Reveal>

            <Reveal dir="right">
              <div className="space-y-4">
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-onyx-900 shadow-[0_24px_64px_rgba(0,0,0,0.2)]">
                  <Image
                    src="/WID1.webp"
                    alt="Widows Care ministry support"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 520px, 100vw"
                    priority
                  />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-10 pt-16">
  <p className="font-display text-white text-3xl md:text-4xl italic font-light leading-tight drop-shadow-md">
    Dignity for <span className="font-normal">every precious woman.</span>
  </p>
</div>
                </div>
            <div className="grid grid-cols-3 gap-4">
  {[
    { label: 'Food', emoji: '🍲' },
    { label: 'Shelter', emoji: '🏠' },
    { label: 'Healthcare', emoji: '💊' },
    { label: 'Companionship', emoji: '🤝' },
    { label: 'Skills Training', emoji: '🧵' },
    { label: 'Spiritual Care', emoji: '🙏' }
  ].map(item => (
    <div key={item.label} className="text-center p-3 bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] border border-gray-100">
      <div className="text-lg mb-1">{item.emoji}</div>
      <div className="text-onyx-500 text-[10px] font-body uppercase tracking-[0.12em]">{item.label}</div>
    </div>
  ))}
</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {[
    { title: "The Plight", head: "Millions of elderly widows face", items: plight },
    { title: "A Call to Compassion", head: "Let us come together to", items: support },
    { title: "Reflect with Us", head: "Take a moment to", items: reflection },
  ].map((card, idx) => (
    <Reveal key={idx} delay={idx * 0.1}>
      <div className="h-full rounded-[2.5rem] bg-white p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col transition-transform hover:-translate-y-2 duration-500">
        <p className="font-accent text-crimson-500 text-[10px] tracking-[0.4em] uppercase mb-6 font-semibold">
          {card.title}
        </p>
        <h3 className="font-display text-3xl font-medium text-onyx-950 leading-tight mb-8">
          {card.head}
        </h3>
        <ul className="space-y-5 mt-auto">
          {card.items.map((item) => (
            <li key={item} className="flex items-start gap-3 group">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-crimson-400 shrink-0 group-hover:scale-125 transition-transform" />
              <span className="text-[15px] text-onyx-700 font-body leading-snug font-medium">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  ))}
</div>

    <Reveal>
  <div className="mt-16 p-10 md:p-16 rounded-[3rem] bg-black text-white shadow-[0_30px_90px_rgba(0,0,0,0.3)] relative overflow-hidden group">
    {/* Subtle Crimson Glow Effect */}
    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#B51657] opacity-10 blur-[100px] rounded-full" />
    
    <div className="relative z-10">
      <p className="font-accent text-[#B51657] text-[11px] tracking-[0.5em] uppercase mb-8 font-bold">
        Pray with Us
      </p>
      <p className="font-display text-3xl md:text-5xl font-light italic leading-[1.3] text-white">
        "Lord, please provide for their needs, comfort their hearts, and give them <span className="text-[#B51657] not-italic font-medium">hope for a brighter future.</span>"
      </p>
    </div>
  </div>
</Reveal>
        </div>
      </section>

 <section className="py-32 bg-ivory-50/50">
  <div className="max-w-6xl mx-auto px-6">
    <Reveal>
      <div className="text-center max-w-3xl mx-auto mb-20">
        <p className="font-accent text-[#B51657] text-[11px] tracking-[0.5em] uppercase mb-6 font-bold">Ways to Support</p>
        <h2 className="font-display text-5xl md:text-6xl font-semibold text-onyx-950 leading-tight mb-6">Every Action <span className="italic font-light text-[#B51657]">Counts</span></h2>
        <p className="text-onyx-600 font-body text-[16px] leading-relaxed font-medium">Together, let us transform lives through practical care, faithful prayer, and a compassionate community.</p>
      </div>
    </Reveal>

    {/* Main Action Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {ways.map((way, index) => (
        <Reveal key={way.title} delay={index * 0.1}>
          <div className="group h-full bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100/50 transition-all duration-500 hover:shadow-[0_30px_70px_rgba(181,22,87,0.1)] hover:-translate-y-2">
            <div className="text-[#B51657]/10 font-display text-8xl font-bold absolute top-4 right-8 transition-colors group-hover:text-[#B51657]/20 select-none">
              {index + 1}
            </div>
            <h3 className="relative z-10 font-display text-3xl font-medium text-onyx-950 mb-4">{way.title}</h3>
            <p className="relative z-10 font-body text-[15px] leading-relaxed text-onyx-600 font-medium">{way.detail}</p>
          </div>
        </Reveal>
      ))}
    </div>

    {/* Bottom Resource Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Reveal dir="left">
        <div className="h-full bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
          <p className="font-accent text-[#B51657] text-[10px] tracking-[0.4em] uppercase mb-6 font-bold">Additional Resources</p>
          <ul className="space-y-4">
            {['UN Women\'s Report on Widowhood', 'HelpAge India\'s Widow Support Programs', 'Local NGOs working for widow empowerment'].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm font-body text-onyx-700 font-medium group cursor-pointer">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B51657] group-hover:scale-150 transition-transform" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal dir="right">
        <div className="h-full bg-[#B51657] rounded-[2.5rem] p-10 text-white shadow-[0_20px_50px_rgba(181,22,87,0.2)]">
          <p className="font-accent text-white/60 text-[10px] tracking-[0.4em] uppercase mb-6 font-bold">Stay Updated</p>
          <p className="font-body text-base leading-relaxed mb-8 font-light">Subscribe to our newsletter for updates, stories, and ways to get involved.</p>
          <p className="font-display text-2xl font-light italic leading-relaxed">
            "We welcome supporters of <span className="font-medium not-italic">all faiths and backgrounds</span> to join us in this mission."
          </p>
        </div>
      </Reveal>
    </div>
  </div>
</section>

      <ContactCTA />
    </div>
  )
}

export default function WidowsPage() {
  return <WidowsCareContent />
}
