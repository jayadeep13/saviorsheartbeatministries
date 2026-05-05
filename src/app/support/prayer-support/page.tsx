import { Church, Clock3, HeartHandshake, Radio, ShieldCheck, Sparkles, UsersRound } from 'lucide-react'
import PrayerRequestForm from '@/components/sections/PrayerRequestForm'
import Reveal from '@/components/ui/Reveal'
import PageHero from '@/components/ui/PageHero'

export const metadata = { title: "Prayer Support | Savior's Heartbeat Ministries" }

const prayerWays = [
  {
    title: 'Protection in the Field',
    text: 'Pray for pastors, missionaries, families, and ministry teams serving in villages and outreach gatherings.',
    icon: <ShieldCheck className="h-6 w-6" strokeWidth={1.8} />,
  },
  {
    title: 'Open Hearts',
    text: 'Ask God to prepare hearts to receive the Gospel through crusades, worship services, television, and SPANDANA magazine.',
    icon: <Sparkles className="h-6 w-6" strokeWidth={1.8} />,
  },
  {
    title: 'Churches and Leaders',
    text: 'Cover new church plants, building projects, pastors conferences, and local leaders with wisdom and unity.',
    icon: <Church className="h-6 w-6" strokeWidth={1.8} />,
  },
  {
    title: 'Children and Widows',
    text: 'Lift up the children, widows, and vulnerable families receiving care, dignity, education, and spiritual encouragement.',
    icon: <UsersRound className="h-6 w-6" strokeWidth={1.8} />,
  },
]

const prayerRhythm = [
  { title: 'Daily Intercession', time: 'Every Day', text: 'Pray for protection, provision, and spiritual strength over every ministry effort.' },
  { title: 'Friday Fasting Prayer', time: 'Every Friday - 07:30 PM', text: 'Remember the Friday fasting prayer and all families who send prayer needs.' },
  { title: 'All Night Prayer', time: 'Last Friday - 09:00 PM onwards', text: 'Stand with the monthly all night prayer as the ministry seeks God together.' },
]

const prayerFocus = [
  'Fresh strength for pastors and village leaders',
  'Provision for children, widows, and families in care',
  'Open doors for Gospel outreach and media ministry',
  'Unity, wisdom, and protection for every ministry team',
]

export default function PrayerSupportPage() {
  return (
    <div>
      <PageHero
        eyebrow="Support Our Mission"
        title="Prayer Support"
        subtitle="Stand with us in intercession for the Gospel, families, pastors, children, widows, and every open door."
      />

      <section className="relative overflow-hidden bg-[#FDF8F2] py-20 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage: 'linear-gradient(135deg,rgba(181,22,87,0.08) 1px,transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <Reveal dir="left" className="h-full">
              <div className="flex h-full flex-col justify-between border-l-[6px] border-[#B51657] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:p-10">
                <div>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center bg-[#B51657] text-white shadow-[0_16px_34px_rgba(181,22,87,0.22)]">
                    <HeartHandshake className="h-8 w-8" strokeWidth={1.8} />
                  </div>
                  <p className="mb-4 font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#B51657]">Prayer Covering</p>
                  <h2 className="font-[Playfair_Display] text-4xl font-bold leading-[1.03] text-[#1E1E22] md:text-5xl xl:text-6xl">
                    The work moves <span className="block italic text-[#B51657]">through prayer</span>
                  </h2>
                  <p className="mt-6 font-body text-base leading-8 text-[#5F575E] md:text-lg">
                    Prayer is the faithful foundation beneath every mission, conference, outreach, broadcast, church project, and act of compassionate care. When you pray with us, you stand beside the ministry in the most important work of all.
                  </p>

                  <div className="mt-8 border-y border-[#B51657]/12 py-6">
                    <p className="mb-4 font-accent text-[10px] font-bold uppercase tracking-[0.3em] text-[#B51657]">Pray With Us For</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {prayerFocus.map(item => (
                        <div key={item} className="flex gap-3 bg-[#FDF8F2] p-4">
                          <span className="mt-2 h-2 w-2 shrink-0 bg-[#B51657]" />
                          <p className="font-body text-sm font-medium leading-6 text-[#4F484E]">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-[#B51657]/15 pt-6">
                  <p className="font-[Playfair_Display] text-xl italic leading-relaxed text-[#2A2529]">
                    "Continue earnestly in prayer, being vigilant in it with thanksgiving." - Colossians 4:2
                  </p>
                </div>
              </div>

            </Reveal>

            <Reveal dir="right" className="h-full">
              <PrayerRequestForm className="h-full" />
            </Reveal>
          </div>

          <Reveal className="mt-12">
            <div className="grid gap-5 md:grid-cols-3">
              {prayerRhythm.map(item => (
                <article
                  key={item.title}
                  className="group flex h-full min-h-[210px] gap-5 border border-[#E8DDE2] bg-[#FFFDF9] p-6 shadow-[0_14px_42px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1 md:p-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#B51657]/10 text-[#B51657] transition-colors duration-300 group-hover:bg-[#B51657] group-hover:text-white">
                    <Clock3 className="h-5 w-5" strokeWidth={1.9} />
                  </div>
                  <div>
                    <p className="mb-2 font-accent text-[10px] font-bold uppercase tracking-[0.25em] text-[#B51657]">{item.time}</p>
                    <h3 className="font-[Playfair_Display] text-2xl font-bold leading-tight text-[#1E1E22] md:text-3xl">{item.title}</h3>
                    <p className="mt-3 font-body text-sm leading-7 text-[#625B61]">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#FDF8F2] py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#B51657]">How to Pray</p>
            <h2 className="font-[Playfair_Display] text-4xl font-bold leading-[1.03] text-[#1E1E22] md:text-5xl lg:text-6xl">
              Cover every <span className="italic text-[#B51657]">open door</span>
            </h2>
            <p className="mt-5 font-body text-base leading-7 text-[#625B61]">
              These prayer points help partners around the world pray with clarity and unity for Savior's Heartbeat Ministries.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {prayerWays.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <article className="h-full border-t-[5px] border-[#B51657] bg-white p-7 shadow-[0_12px_38px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center bg-white text-[#B51657] shadow-[0_10px_28px_rgba(181,22,87,0.12)]">
                    {item.icon}
                  </div>
                  <h3 className="font-[Playfair_Display] text-2xl font-bold leading-tight text-[#1E1E22]">{item.title}</h3>
                  <p className="mt-4 font-body text-sm leading-7 text-[#625B61]">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8DDE2] bg-[#FDF8F2] py-20 text-[#1E1E22]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.75fr_1fr] md:items-center">
          <Reveal dir="left">
            <p className="mb-4 font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#B51657]">Stand With Us</p>
            <h2 className="font-[Playfair_Display] text-4xl font-bold leading-[1.03] md:text-5xl">
              A faithful prayer partner strengthens the mission.
            </h2>
          </Reveal>
          <Reveal dir="right">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-[#E8DDE2] bg-white p-6 shadow-[0_12px_36px_rgba(0,0,0,0.06)]">
                <Radio className="mb-4 h-6 w-6 text-[#B51657]" strokeWidth={1.8} />
                <h3 className="font-[Playfair_Display] text-2xl font-bold">Broadcast Ministry</h3>
                <p className="mt-3 font-body text-sm leading-7 text-[#625B61]">Pray that every broadcast carries hope into homes and reaches people at the right moment.</p>
              </div>
              <div className="border border-[#E8DDE2] bg-white p-6 shadow-[0_12px_36px_rgba(0,0,0,0.06)]">
                <HeartHandshake className="mb-4 h-6 w-6 text-[#B51657]" strokeWidth={1.8} />
                <h3 className="font-[Playfair_Display] text-2xl font-bold">Prayer Requests</h3>
                <p className="mt-3 font-body text-sm leading-7 text-[#625B61]">Pray for every family, believer, and seeker who shares a need with the ministry.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
