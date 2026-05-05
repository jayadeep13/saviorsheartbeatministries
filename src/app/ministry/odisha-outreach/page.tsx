import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpenCheck, HeartHandshake, MapPinned, Mountain, Sprout, UsersRound } from 'lucide-react'
import ContactCTA from '@/components/sections/ContactCTA'
import GalleryGroupSection from '@/components/media/GalleryGroupSection'
import Reveal from '@/components/ui/Reveal'
import PageHero from '@/components/ui/PageHero'

export const metadata = { title: "Odisha Outreach | Savior's Heartbeat Ministries" }

const focusAreas = [
  {
    title: 'Odisha for Christ',
    text: 'A prayerful initiative to reach unreached districts with the Gospel, pastoral follow-up, and steady local care.',
    icon: <MapPinned className="h-6 w-6" strokeWidth={1.8} />,
  },
  {
    title: 'The Tribal Harvest',
    text: 'Serving marginalized tribal communities and remote villages through field visits, preaching, and practical compassion.',
    icon: <Mountain className="h-6 w-6" strokeWidth={1.8} />,
  },
  {
    title: 'Pastoral Training',
    text: 'Equipping local leaders through mobile Bible training and BTCP-based teaching for long-term spiritual growth.',
    icon: <BookOpenCheck className="h-6 w-6" strokeWidth={1.8} />,
  },
  {
    title: 'Heart for Odisha',
    text: 'Carrying a dedicated burden for total transformation through prayer, leadership, mercy, and faithful Gospel witness.',
    icon: <HeartHandshake className="h-6 w-6" strokeWidth={1.8} />,
  },
]

const stats = [
  { label: 'District Vision', value: 'Every', note: 'Reaching toward the whole state' },
  { label: 'Pastors Trained', value: '1,048+', note: 'Leaders strengthened for ministry' },
  { label: 'Mission Focus', value: 'Total', note: 'Transformation through Christ' },
]

const fieldNotes = [
  'Village outreach among families who have limited access to regular ministry.',
  'Pastoral teaching that strengthens local churches and future leaders.',
  'Compassion work that meets people with dignity, prayer, and practical care.',
  'Consistent field presence across tribal and remote communities.',
]

export default function OdishaOutreachPage() {
  return (
    <div>
      <PageHero
        eyebrow="Ministry"
        title="Odisha Outreach"
        subtitle="Reaching unreached districts, tribal communities, and remote villages with the hope of Christ."
        imageSrc="/od1.webp"
        imageClassName="bg-[position:center_42%]"
      />

      <section className="relative overflow-hidden bg-[#FDF8F2] py-20 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(181,22,87,0.08) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
            <Reveal dir="left">
              <div className="flex h-full flex-col justify-between bg-[#080405] p-7 text-white shadow-[0_24px_70px_rgba(0,0,0,0.2)] md:p-10">
                <div>
                  <div className="mb-8 inline-flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center bg-[#B51657] text-white shadow-[0_16px_34px_rgba(181,22,87,0.3)]">
                      <Sprout className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#E9A5BB]">State Outreach</p>
                      <p className="mt-1 font-body text-sm font-semibold text-white/55">Odisha and tribal regions</p>
                    </div>
                  </div>

                  <h2 className="font-[Playfair_Display] text-4xl font-bold leading-[1.03] md:text-6xl">
                    A dedicated mission
                    <span className="block italic text-[#B51657]">for total transformation.</span>
                  </h2>
                  <p className="mt-6 max-w-2xl font-body text-base leading-8 text-white/72 md:text-lg">
                    Odisha Outreach carries a burden for people who have not yet heard the Gospel clearly. Beyond preaching, the ministry trains local leaders, serves tribal communities, and walks patiently with families in remote villages.
                  </p>
                </div>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/support/financial-partnership"
                    className="inline-flex items-center justify-center gap-2 bg-[#B51657] px-8 py-4 font-body text-sm font-bold text-white shadow-[0_16px_34px_rgba(181,22,87,0.28)] transition-colors hover:bg-[#9E134D]"
                  >
                    Partner With This Ministry <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white px-8 py-4 font-body text-sm font-bold text-[#1E1E22] transition-colors hover:bg-[#F7EDF1]"
                  >
                    Contact Ministry
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal dir="right" className="h-full">
              <div className="grid h-full gap-4">
                <div className="relative min-h-[360px] overflow-hidden bg-[#12070C] shadow-[0_20px_58px_rgba(0,0,0,0.16)] md:min-h-[430px]">
                  <Image
                    src="/wod1.webp"
                    alt="Odisha outreach compassion ministry"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 42%' }}
                    sizes="(min-width: 1024px) 520px, 100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="absolute left-6 top-6 inline-flex items-center gap-2 bg-white px-4 py-2 font-body text-xs font-black uppercase tracking-[0.22em] text-[#B51657]">
                    <span className="h-2 w-2 rounded-full bg-[#B51657]" />
                    Field Care
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-white/70">Ministry Burden</p>
                    <h3 className="mt-3 max-w-lg font-[Playfair_Display] text-4xl font-bold leading-tight text-white md:text-5xl">
                      Gospel witness with practical love.
                    </h3>
                  </div>
                </div>

                <div className="grid gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="grid gap-3 border border-[#E8DDE2] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.055)] sm:grid-cols-[0.75fr_0.65fr_1fr] sm:items-center"
                    >
                      <p className="font-accent text-[9px] font-bold uppercase tracking-[0.28em] text-[#B51657]">{stat.label}</p>
                      <p className="font-[Playfair_Display] text-3xl font-bold leading-none text-[#1E1E22]">{stat.value}</p>
                      <p className="font-body text-sm font-semibold leading-6 text-[#726870] sm:text-right">{stat.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#070304] py-20 text-white md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#E9A5BB]">Ministry Focus</p>
            <h2 className="font-[Playfair_Display] text-4xl font-bold leading-[1.04] md:text-6xl">
              Reaching Odisha with <span className="italic text-[#B51657]">Word, prayer, and care</span>
            </h2>
            <p className="mt-5 font-body text-base leading-8 text-white/65">
              Each part of the outreach is built around people: families in villages, tribal communities, and local leaders who will keep serving after the visit ends.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="h-full border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-colors hover:border-[#B51657]/60">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center bg-[#B51657] p-3 text-white">
                    {item.icon}
                  </div>
                  <p className="mb-3 font-[Playfair_Display] text-3xl font-bold leading-none text-[#B51657]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-[Playfair_Display] text-2xl font-bold leading-tight text-white">{item.title}</h3>
                  <p className="mt-4 font-body text-sm leading-7 text-white/65">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#FDF8F2] py-20 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(181,22,87,0.12) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <article className="grid overflow-hidden bg-white shadow-[0_20px_58px_rgba(0,0,0,0.12)] lg:grid-cols-[1fr_1fr]">
              <div className="relative min-h-[360px] bg-[#12070C] lg:min-h-[610px]">
                <Image
                  src="/od3.webp"
                  alt="Odisha outreach relief and village ministry"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center center' }}
                  sizes="(min-width: 1024px) 560px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <UsersRound className="mb-4 h-12 w-12 text-white" strokeWidth={1.5} />
                  <h3 className="max-w-xl font-[Playfair_Display] text-4xl font-bold leading-tight text-white md:text-5xl">
                    Strong local leaders help the Gospel remain.
                  </h3>
                </div>
              </div>

              <div className="border-l-[6px] border-[#B51657] bg-white p-7 md:p-10 lg:flex lg:flex-col lg:justify-center">
                <div className="mb-7 flex h-16 w-16 items-center justify-center bg-[#B51657] text-white shadow-[0_16px_34px_rgba(181,22,87,0.22)]">
                  <BookOpenCheck className="h-8 w-8" strokeWidth={1.8} />
                </div>
                <p className="mb-4 font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#B51657]">From Outreach To Growth</p>
                <h2 className="font-[Playfair_Display] text-4xl font-bold leading-[1.04] text-[#1E1E22] md:text-6xl">
                  Training leaders for <span className="italic text-[#B51657]">lasting fruit.</span>
                </h2>
                <p className="mt-6 font-body text-base leading-8 text-[#625B61] md:text-lg">
                  The goal is not only a meeting, but a growing witness. Through mobile theological education and pastoral training, local ministers are prepared to shepherd people with biblical clarity and compassion.
                </p>

                <div className="mt-8 grid gap-3">
                  {fieldNotes.map((note, index) => (
                    <div key={note} className="flex gap-4 border border-[#E8DDE2] bg-[#FDF8F2] p-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#B51657] font-[Playfair_Display] text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <p className="font-body text-sm font-semibold leading-6 text-[#4F484E]">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <GalleryGroupSection
        group="odisha-state-outreach"
        eyebrow="Odisha State Outreach"
        title="Gallery From The Field"
        subtitle="Photos uploaded in the Odisha State Outreach gallery are shown here automatically."
        showImageTitles={false}
      />

      <ContactCTA />
    </div>
  )
}
