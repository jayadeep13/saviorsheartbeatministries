import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock3, ExternalLink, MessageCircleHeart, PlayCircle, RadioTower, Satellite, Tv } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import PageHero from '@/components/ui/PageHero'

export const metadata = { title: "TV Ministries | Savior's Heartbeat Ministries" }

const broadcastDetails = [
  { label: 'Broadcast Time', value: '5:30 AM - 6:00 AM', note: 'Every morning' },
  { label: 'Channel', value: 'Subhavaartha TV', note: 'Telugu Gospel broadcast' },
  { label: 'Mission', value: 'Hope in every home', note: 'Prayer, Word, and encouragement' },
]

const broadcastWork = [
  {
    title: 'Preaching the Word',
    text: 'Clear Gospel teaching reaches families who may never attend an outreach meeting, carrying the message of Christ into homes each morning.',
    icon: <Tv className="h-6 w-6" strokeWidth={1.8} />,
  },
  {
    title: 'Prayer and Encouragement',
    text: 'Viewers are strengthened through prayer, Scripture, testimony, and pastoral care that speaks to daily burdens and spiritual needs.',
    icon: <MessageCircleHeart className="h-6 w-6" strokeWidth={1.8} />,
  },
  {
    title: 'Media With Purpose',
    text: 'Television extends the ministry beyond village boundaries, helping Gospel truth reach Telugu-speaking families across many places.',
    icon: <Satellite className="h-6 w-6" strokeWidth={1.8} />,
  },
]

const broadcastNotes = [
  'Daily airtime for Gospel teaching and prayer.',
  'Recording, editing, travel, and careful production.',
  'Follow-up prayer and Gospel materials for viewers.',
  'Messages prepared with clarity, excellence, and pastoral care.',
]

export default function TvMinistriesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Support Our Mission"
        title="TV Ministries"
        subtitle="SPANDANA TV carries the Gospel, prayer, and hope into homes every morning."
        imageSrc="/slide4.webp"
        imageClassName="bg-[position:center_32%] sm:bg-[position:center_38%] lg:bg-[position:center_44%]"
      />

      <section className="relative overflow-hidden bg-[#FDF8F2] py-20 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: 'linear-gradient(135deg,rgba(181,22,87,0.08) 1px,transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <Reveal dir="left">
              <div className="flex h-full flex-col justify-between bg-[#080405] p-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.2)] md:p-10">
                <div>
                  <div className="mb-8 inline-flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center bg-[#B51657] text-white shadow-[0_16px_34px_rgba(181,22,87,0.3)]">
                      <RadioTower className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#E9A5BB]">Daily Broadcast</p>
                      <p className="mt-1 font-body text-sm font-semibold text-white/55">Subhavaartha Channel</p>
                    </div>
                  </div>

                  <h2 className="font-[Playfair_Display] text-4xl font-bold leading-[1.02] md:text-6xl">
                    SPANDANA TV
                    <span className="block italic text-[#B51657]">live every day.</span>
                  </h2>
                  <p className="mt-6 max-w-2xl font-body text-base leading-8 text-white/72 md:text-lg">
                    Through television ministry, the Word reaches families and seekers in their homes each morning. Every broadcast carries Scripture, prayer, encouragement, and the hope of Jesus Christ beyond physical walls.
                  </p>
                </div>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://www.subhavaarthatv.com/watch-live.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#B51657] px-8 py-4 font-body text-sm font-bold text-white shadow-[0_16px_34px_rgba(181,22,87,0.28)] transition-colors hover:bg-[#9E134D]"
                  >
                    Watch Live <ExternalLink className="h-4 w-4" strokeWidth={2} />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white px-8 py-4 font-body text-sm font-bold text-[#1E1E22] transition-colors hover:bg-[#F7EDF1]"
                  >
                    Contact Ministry <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal dir="right" className="h-full">
              <div className="grid h-full gap-4">
                <div className="relative min-h-[360px] overflow-hidden bg-[#12070C] shadow-[0_20px_58px_rgba(0,0,0,0.16)]">
                  <Image
                    src="/GAL1.webp"
                    alt="SPANDANA TV ministry broadcast"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 34%' }}
                    sizes="(min-width: 1024px) 520px, 100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute left-6 top-6 inline-flex items-center gap-2 bg-white px-4 py-2 font-body text-xs font-black uppercase tracking-[0.22em] text-[#B51657]">
                    <span className="h-2 w-2 rounded-full bg-[#B51657]" />
                    On Air
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-white/70">Broadcast Time</p>
                    <h3 className="mt-3 font-[Playfair_Display] text-4xl font-bold leading-none text-white md:text-5xl">
                      5:30 AM - 6:00 AM
                    </h3>
                    <p className="mt-3 font-body text-sm font-semibold text-white/75">Every morning on Subhavaartha TV</p>
                  </div>
                </div>

                <div className="grid gap-3">
                  {broadcastDetails.map(detail => (
                    <div
                      key={detail.label}
                      className="grid gap-3 border border-[#E8DDE2] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.055)] sm:grid-cols-[0.75fr_1.2fr_1fr] sm:items-center"
                    >
                      <p className="font-accent text-[9px] font-bold uppercase tracking-[0.28em] text-[#B51657]">{detail.label}</p>
                      <p className="break-words font-[Playfair_Display] text-2xl font-bold leading-tight text-[#1E1E22] md:text-3xl">{detail.value}</p>
                      <p className="font-body text-sm font-semibold leading-6 text-[#726870] sm:text-right">{detail.note}</p>
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
            <p className="mb-4 font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#E9A5BB]">Media Outreach</p>
            <h2 className="font-[Playfair_Display] text-4xl font-bold leading-[1.03] md:text-6xl">
              The Gospel moves <span className="italic text-[#B51657]">through every screen</span>
            </h2>
            <p className="mt-5 font-body text-base leading-8 text-white/65">
              TV ministry helps the message continue even when people are far from a church, a conference, or an outreach meeting.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {broadcastWork.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="h-full border border-white/10 bg-white/[0.04] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-colors hover:border-[#B51657]/60">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center bg-[#B51657] p-3 text-white">
                    {item.icon}
                  </div>
                  <h3 className="font-[Playfair_Display] text-3xl font-bold leading-tight text-white">{item.title}</h3>
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
              <div className="relative min-h-[360px] bg-[#12070C] lg:min-h-[640px]">
                <Image
                  src="/pre.webp"
                  alt="Gospel message through media ministry"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 34%' }}
                  sizes="(min-width: 1024px) 560px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <PlayCircle className="mb-4 h-12 w-12 text-white" strokeWidth={1.5} />
                  <h3 className="font-[Playfair_Display] text-4xl font-bold leading-tight text-white md:text-5xl">
                    One message can reach many homes at once.
                  </h3>
                </div>
              </div>

              <div className="border-l-[6px] border-[#B51657] bg-white p-7 md:p-10 lg:flex lg:flex-col lg:justify-center">
                <div className="mb-7 flex h-16 w-16 items-center justify-center bg-[#B51657] text-white shadow-[0_16px_34px_rgba(181,22,87,0.22)]">
                  <RadioTower className="h-8 w-8" strokeWidth={1.8} />
                </div>
                <p className="mb-4 font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#B51657]">Behind The Broadcast</p>
                <h2 className="font-[Playfair_Display] text-4xl font-bold leading-[1.03] text-[#1E1E22] md:text-6xl">
                  Every message is <span className="italic text-[#B51657]">prepared with prayer.</span>
                </h2>
                <p className="mt-6 font-body text-base leading-8 text-[#625B61] md:text-lg">
                  Each program is prepared, recorded, and shared with care so families can receive Scripture, encouragement, and prayer in their own homes.
                </p>

                <div className="mt-8 grid gap-3">
                  {broadcastNotes.map((note, index) => (
                    <div key={note} className="flex gap-4 border border-[#E8DDE2] bg-[#FDF8F2] p-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#B51657] font-[Playfair_Display] text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <p className="font-body text-sm font-semibold leading-6 text-[#4F484E]">{note}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://www.subhavaarthatv.com/watch-live.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#B51657] px-8 py-4 font-body text-sm font-bold text-white shadow-[0_16px_34px_rgba(181,22,87,0.22)] transition-colors hover:bg-[#9E134D]"
                  >
                    Watch Live <ExternalLink className="h-4 w-4" strokeWidth={2} />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-[#B51657]/25 bg-white px-8 py-4 font-body text-sm font-bold text-[#B51657] transition-colors hover:border-[#B51657]"
                  >
                    Contact Ministry <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[#E8DDE2] bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="grid gap-6 border border-[#E8DDE2] bg-[#FDF8F2] p-7 shadow-[0_14px_44px_rgba(0,0,0,0.06)] md:grid-cols-[auto_1fr_auto] md:items-center md:p-8">
              <div className="flex h-14 w-14 items-center justify-center bg-[#B51657] text-white">
                <Clock3 className="h-7 w-7" strokeWidth={1.8} />
              </div>
              <div>
                <p className="font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#B51657]">Tune In Daily</p>
                <h3 className="mt-2 font-[Playfair_Display] text-3xl font-bold leading-tight text-[#1E1E22] md:text-4xl">
                  Watch SPANDANA TV every morning from 5:30 AM to 6:00 AM.
                </h3>
              </div>
              <a
                href="https://www.subhavaarthatv.com/watch-live.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1E1E22] px-7 py-4 font-body text-sm font-bold text-white transition-colors hover:bg-[#B51657]"
              >
                Watch Live <ExternalLink className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
