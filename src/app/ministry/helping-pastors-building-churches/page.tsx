import Image from 'next/image'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'

export const metadata = {
  title: "Helping Pastors & Building Churches | Savior's Heartbeat Ministries",
}

const points = [
  { title: 'The Foundation', text: 'Constructing places of worship where believers can gather, pray, grow, and be strengthened in faith.' },
  { title: 'Support the Sent', text: 'Providing encouragement and practical resources for local pastors serving faithfully in villages.' },
  { title: 'Building the Body', text: 'Establishing strong pillars of faith that become spiritual homes for families and communities.' },
  { title: 'Partnering for Growth', text: 'Helping local churches thrive, expand, and continue reaching people with the love of Christ.' },
]

export default function HelpingPastorsBuildingChurchesPage() {
  return (
    <div className="bg-[#FBF7F1] antialiased">
      <PageHero
        eyebrow="Our Ministries"
        title="Helping Pastors & Building Churches"
        subtitle="Providing resources for local ministers and building homes for spiritual growth."
        imageSrc="/churc.webp"
      />

      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal dir="up">
            <div className="mx-auto mb-16 max-w-4xl text-center">
              <p className="mb-4 flex items-center justify-center gap-2 font-accent text-[11px] font-bold uppercase tracking-[0.2em] text-[#B51657]">
                <span className="h-px w-4 bg-[#B51657]"></span> Village Transformation
              </p>

              <h2 className="font-[Playfair_Display] text-4xl font-medium leading-[1.15] text-[#11162E] md:text-6xl lg:text-[64px]">
                We don&apos;t only build walls. <br />
                <span className="italic text-[#B51657]">We build places of hope.</span>
              </h2>

              <p className="mx-auto mt-8 max-w-2xl font-body text-[16px] leading-[1.7] text-[#30375F]/80">
                Local pastors serve with faith, prayer, and sacrifice. This ministry
                stands beside them by providing support, encouragement, and church
                spaces where believers can worship, grow, and serve their villages.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-12">
            <Reveal dir="left" className="lg:col-span-7">
              <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/church.webp"
                  alt="Helping Pastors and Building Churches"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11162E]/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <p className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-[#22C55E]">
                    Spiritual Homes
                  </p>
                  <h3 className="mt-4 max-w-md font-[Playfair_Display] text-3xl leading-tight text-white md:text-4xl">
                    A church becomes a light of Christ in its village.
                  </h3>
                </div>
              </div>
            </Reveal>

            <Reveal dir="right" className="lg:col-span-5">
              <div className="flex flex-col gap-6 h-full">
                <div className="rounded-2xl bg-[#B51657] p-10 text-white shadow-lg shadow-[#B51657]/10">
                  <p className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                    Churches Built
                  </p>
                  <h3 className="mt-6 font-[Playfair_Display] text-7xl font-semibold leading-none">
                    12
                  </h3>
                  <p className="mt-6 font-body text-[15px] leading-relaxed text-white/80">
                    Each building becomes a place for worship, discipleship,
                    prayer, and community transformation.
                  </p>
                </div>

                <div className="flex-1 rounded-2xl border border-[#E8D8C8]/60 bg-white p-10">
                  <p className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-[#22C55E]">
                    Pastors Helped
                  </p>
                  <h3 className="mt-6 font-[Playfair_Display] text-3xl font-medium leading-tight text-[#11162E]">
                    Supporting those who faithfully serve the remote regions.
                  </h3>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Grid Points Section */}
      <section className="bg-[#f5f0e8]/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {points.map((point, index) => (
              <Reveal key={point.title} delay={index * 100}>
                <div className="group h-full rounded-2xl border border-[#E8D8C8]/40 bg-white p-8 transition-all hover:shadow-xl hover:shadow-[#11162E]/5">
                  <span className="mb-6 block font-[Playfair_Display] text-5xl font-light text-[#B51657]/20 group-hover:text-[#B51657]/40 transition-colors">
                    0{index + 1}
                  </span>
                  <h3 className="font-[Playfair_Display] text-2xl font-semibold text-[#11162E]">
                    {point.title}
                  </h3>
                  <p className="mt-4 font-body text-[14px] leading-relaxed text-[#30375F]/70">
                    {point.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-[#000000] py-24 text-white overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <Reveal dir="left" className="lg:col-span-5">
              <p className="mb-4 font-accent text-[11px] font-bold uppercase tracking-[0.2em] text-[#22C55E]">
                More Than a Building
              </p>
              <h2 className="font-[Playfair_Display] text-5xl font-medium leading-tight md:text-7xl">
                A home for <br />
                <span className="italic text-[#B51657]">worship.</span>
              </h2>
            </Reveal>

            <Reveal dir="right" className="lg:col-span-7">
              <div className="relative">
                <span className="absolute -top-10 -left-6 font-serif text-[120px] text-white/5 leading-none">“</span>
                <p className="relative font-[Playfair_Display] text-2xl md:text-4xl italic leading-relaxed text-white/90">
                  A church in a village becomes a witness of Christ, a shelter
                  for prayer, and a foundation for transformed lives.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final Purpose Section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal dir="left">
              <div className="lg:pr-10">
                <p className="mb-4 font-accent text-[11px] font-bold uppercase tracking-[0.2em] text-[#B51657]">
                  Our Purpose
                </p>
                <h2 className="font-[Playfair_Display] text-4xl font-medium leading-tight text-[#11162E] md:text-5xl lg:text-[56px]">
                  Helping local churches <br />
                  <span className="italic text-[#B51657]">thrive and expand.</span>
                </h2>
                <p className="mt-8 font-body text-[16px] leading-relaxed text-[#30375F]/80">
                  When pastors are supported and churches are strengthened,
                  families are discipled, children are taught, and villages experience the compassion of Christ.
                </p>
              </div>
            </Reveal>

            <Reveal dir="right">
              <div className="space-y-4">
                {[
                  'Places of worship are established.',
                  'Local pastors receive encouragement.',
                  'Families gather for prayer and discipleship.',
                  'Villages witness the love of Jesus.',
                ].map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-5 rounded-xl border border-[#E8D8C8]/60 bg-white p-5 transition-colors hover:border-[#B51657]/30"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
                    <p className="font-body text-[15px] font-medium text-[#11162E]">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}