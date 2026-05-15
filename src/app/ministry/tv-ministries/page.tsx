import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Radio, Tv, Waves } from 'lucide-react'
import ContactCTA from '@/components/sections/ContactCTA'
import Reveal from '@/components/ui/Reveal'
import PageHero from '@/components/ui/PageHero'

export const metadata = { title: "TV Ministries | Savior's Heartbeat Ministries" }

const focusPoints = [
  {
    title: 'Broadcasting Hope',
    text: 'Reaching thousands daily from 7:00 PM - 7:30 PM on Subhavartha Channel.',
  },
  {
    title: 'Airwave Evangelism',
    text: 'Bringing the Word into homes across the nation through television ministry.',
  },
  {
    title: 'Impact Through Media',
    text: 'Using technology to touch lives, encourage believers, and share the Gospel with new families.',
  },
]

export default function TvMinistriesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Ministry"
        title="TV Ministries"
        subtitle="Broadcasting Gospel hope into homes through Telugu Christian teaching and media outreach."
        imageSrc="/GAL1.webp"
        imageClassName="bg-[position:center_36%]"
      />

      <section className="relative overflow-hidden bg-[#FDF8F2] py-20 md:py-24">
        <div className="absolute left-[-10%] top-16 h-80 w-80 rounded-full bg-[#B51657]/10 blur-[90px]" />
        <div className="absolute bottom-10 right-[-12%] h-96 w-96 rounded-full bg-[#C9A96E]/16 blur-[110px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal dir="left">
            <div>
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B51657] text-white shadow-[0_16px_34px_rgba(181,22,87,0.24)]">
                <Radio className="h-7 w-7" />
              </div>
              <p className="mb-3 font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#B51657]">
                Broadcast Hope
              </p>
              <h2 className="mb-6 font-heading text-4xl font-semibold leading-tight text-[#1E1E22] md:text-5xl">
                The Gospel reaching families through media.
              </h2>
              <p className="mb-8 font-body text-base leading-8 text-[#625B61] md:text-lg">
                Savior&apos;s Heartbeat uses TV ministry as a doorway for evangelism, encouragement, and biblical teaching.
                Through daily broadcasts, the Word enters homes where people can hear, believe, and be strengthened.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="https://www.subhavaarthatv.com/watch-live.php"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#B51657] px-7 font-body text-sm font-bold text-white shadow-[0_16px_34px_rgba(181,22,87,0.24)] transition-all hover:-translate-y-1 hover:bg-[#8B0A35]"
                >
                  Watch Subhavartha Live
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/support"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#E7D8DF] bg-white px-7 font-body text-sm font-bold text-[#1E1E22] transition-all hover:-translate-y-1 hover:text-[#B51657]"
                >
                  Support This Ministry
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal dir="right">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-[#B51657]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] bg-[#12070C] shadow-[0_28px_80px_rgba(0,0,0,0.2)]">
                <div className="relative aspect-[16/11]">
                  <Image
                    src="/GAL1.webp"
                    alt="TV ministry broadcast"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 560px, 100vw"
                    priority
                  />
                </div>
                <div className="grid gap-4 bg-white p-6 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#FDF2F7] p-5">
                    <Tv className="mb-3 h-7 w-7 text-[#B51657]" />
                    <p className="font-body text-sm font-bold text-[#1E1E22]">Subhavartha Channel</p>
                    <p className="mt-1 font-body text-xs leading-6 text-[#625B61]">Daily Gospel broadcast outreach</p>
                  </div>
                  <div className="rounded-2xl bg-[#FDF2F7] p-5">
                    <Waves className="mb-3 h-7 w-7 text-[#B51657]" />
                    <p className="font-body text-sm font-bold text-[#1E1E22]">Media Evangelism</p>
                    <p className="mt-1 font-body text-xs leading-6 text-[#625B61]">Teaching, hope, and prayer support</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#080405] py-20 text-white md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#E9A5BB]">
              Ministry Focus
            </p>
            <h2 className="font-heading text-4xl font-semibold leading-tight md:text-5xl">
              Every broadcast is an open door for the Gospel.
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {focusPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 80}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
                  <p className="mb-5 font-heading text-4xl font-semibold text-[#B51657]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mb-3 font-heading text-2xl font-semibold text-white">{point.title}</h3>
                  <p className="font-body text-sm leading-7 text-white/66">{point.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  )
}
