import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpenText, HeartHandshake, Plane, UsersRound } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import PageHero from '@/components/ui/PageHero'

export const metadata = { title: "Take a Mission Trip to India | Savior's Heartbeat Ministries" }

const missionSections = [
  {
    kicker: 'Gospel Outreach',
    title: 'Preach the Gospel',
    accent: 'Share Christ in villages and unreached communities.',
    text: [
      'A mission trip gives you the opportunity to stand with local pastors and proclaim the hope of Jesus Christ in places where many families are still waiting to hear the Good News clearly.',
      'Teams may participate in village meetings, church services, open-air Gospel gatherings, personal prayer, testimony sharing, and encouragement visits. Every message is carried with humility, love, and partnership with local leaders who understand the people and culture.',
      'The goal is not only to speak, but to serve: to pray for people, listen to their stories, strengthen believers, and point every heart to the Savior.',
    ],
    verse: '"Go into all the world and preach the gospel to every creature."',
    reference: 'Mark 16:15',
    images: [
      { src: '/pre.webp', alt: 'Preaching the Gospel outreach' },
      { src: '/peop.webp', alt: 'Village ministry gathering' },
    ],
    icon: <BookOpenText className="h-6 w-6" strokeWidth={1.8} />,
  },
  {
    kicker: 'Leadership Training',
    title: 'Teach and Encourage Leaders',
    accent: 'Pour into pastors, shepherds, and Gospel workers.',
    text: [
      'Mission teams can help strengthen local pastors and ministry leaders through Bible teaching, leadership sessions, prayer, and encouragement. Many pastors serve faithfully with limited resources, and a visiting team can bring fresh strength to their calling.',
      'Teaching moments may include pastors conferences, discipleship training, worship gatherings, ministry workshops, and one-on-one prayer with leaders who carry heavy responsibility in their communities.',
      'When leaders are equipped, entire churches are strengthened. Your teaching, testimony, and presence can become a blessing that continues long after the trip is over.',
    ],
    verse: '"The things that you have heard from me... commit these to faithful men who will be able to teach others also."',
    reference: '2 Timothy 2:2',
    images: [
      { src: '/pastcopy.webp', alt: 'Pastors and leaders ministry' },
      { src: '/chu (2).webp', alt: 'Prayer and leadership encouragement' },
    ],
    icon: <UsersRound className="h-6 w-6" strokeWidth={1.8} />,
  },
  {
    kicker: 'Compassion Ministry',
    title: 'Serve Through Humanitarian Care',
    accent: 'Bring practical help with dignity and love.',
    text: [
      'Alongside preaching and teaching, mission trips can include compassionate care for children, widows, families, and villages in need. Practical service opens doors for trust, encouragement, and the love of Christ to be seen in action.',
      'Teams may help distribute food, clothing, school supplies, basic medical support, and relief items. They may also visit children, pray with widows, encourage families, and support local ministry projects that continue after the team returns home.',
      'Every gift and every visit should carry dignity. The heart of the trip is to serve people as precious souls loved by God, not as projects, but as families made in His image.',
    ],
    verse: '"Whatever you did for one of the least of these brothers and sisters of mine, you did for me."',
    reference: 'Matthew 25:40',
    images: [
      { src: '/out (2).webp', alt: 'Children ministry outreach' },
      { src: '/out (1).webp', alt: 'Widows care outreach' },
    ],
    icon: <HeartHandshake className="h-6 w-6" strokeWidth={1.8} />,
  },
]

export default function MissionTripToIndiaPage() {
  return (
    <div>
      <PageHero
        eyebrow="Support Our Mission"
        title="Take a Mission Trip to India"
        subtitle="Serve in the field through preaching, teaching, and compassionate care alongside local ministry leaders."
        imageSrc="/child.webp"
        imageClassName="bg-[position:center_20%] sm:bg-[position:center_24%] lg:bg-[position:center_28%]"
      />

      <section className="relative overflow-hidden bg-[#FDF8F2] py-20 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: 'linear-gradient(135deg,rgba(181,22,87,0.08) 1px,transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center bg-[#B51657] text-white shadow-[0_16px_34px_rgba(181,22,87,0.22)]">
              <Plane className="h-8 w-8" strokeWidth={1.8} />
            </div>
            <p className="mb-4 font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#B51657]">Mission Trip Vision</p>
            <h2 className="font-[Playfair_Display] text-4xl font-bold leading-[1.03] text-[#1E1E22] md:text-6xl">
              Come to serve, <span className="italic text-[#B51657]">encourage, and build</span>
            </h2>
            <p className="mt-6 font-body text-base leading-8 text-[#625B61] md:text-lg">
              A mission trip to India is a hands-on opportunity to stand with Savior's Heartbeat Ministries in Gospel outreach, pastoral encouragement, and compassionate care for families across the field.
            </p>
          </Reveal>

          <div className="space-y-14">
            {missionSections.map((section, index) => (
              <Reveal key={section.title} delay={index * 90}>
                <article className={`grid gap-8 border border-[#E8DDE2] bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.08)] lg:items-stretch lg:p-8 ${index === 1 ? 'lg:grid-cols-[0.95fr_1.05fr]' : 'lg:grid-cols-[1.05fr_0.95fr]'}`}>
                  <div className={`order-2 grid min-h-[430px] gap-4 sm:grid-cols-2 lg:min-h-full lg:grid-cols-1 ${index === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    {section.images.map((image, imageIndex) => (
                      <div key={image.src} className="relative min-h-[240px] overflow-hidden bg-[#12070C] shadow-[0_14px_42px_rgba(0,0,0,0.12)]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(min-width: 1024px) 500px, (min-width: 640px) 50vw, 100vw"
                          priority={index === 0 && imageIndex === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                      </div>
                    ))}
                  </div>

                  <div className={`order-1 flex h-full flex-col justify-between border-l-[6px] border-[#B51657] bg-[#FFFDF9] p-6 md:p-8 ${index === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <div className="mb-7 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center bg-[#B51657] text-white">
                          {section.icon}
                        </div>
                        <div>
                          <p className="font-accent text-[10px] font-bold uppercase tracking-[0.3em] text-[#B51657]">{section.kicker}</p>
                          <p className="mt-1 font-body text-sm font-semibold text-[#8A7D84]">0{index + 1}</p>
                        </div>
                      </div>
                      <h3 className="font-[Playfair_Display] text-4xl font-bold leading-[1.03] text-[#1E1E22] md:text-5xl">
                        {section.title}
                      </h3>
                      <p className="mt-4 font-[Playfair_Display] text-2xl italic leading-tight text-[#B51657] md:text-3xl">{section.accent}</p>
                      <div className="mt-7 space-y-5 font-body text-base leading-8 text-[#5F575E]">
                        {section.text.map(paragraph => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 border-t border-[#B51657]/15 pt-6">
                      <p className="font-[Playfair_Display] text-xl italic leading-relaxed text-[#1E1E22] md:text-2xl">
                        {section.verse}
                      </p>
                      <p className="mt-3 font-accent text-[10px] font-bold uppercase tracking-[0.3em] text-[#B51657]">{section.reference}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8DDE2] bg-[#FDF8F2] py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.75fr_1fr] md:items-center">
          <Reveal dir="left">
            <p className="mb-4 font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#B51657]">Plan With Us</p>
            <h2 className="font-[Playfair_Display] text-4xl font-bold leading-[1.03] text-[#1E1E22] md:text-5xl">
              A mission trip begins with prayer, planning, and partnership.
            </h2>
          </Reveal>
          <Reveal dir="right">
            <div className="border border-[#E8DDE2] bg-white p-7 shadow-[0_14px_44px_rgba(0,0,0,0.07)] md:p-8">
              <p className="font-body text-base leading-8 text-[#625B61]">
                If your church, family, or ministry group feels called to serve in India, connect with us. We can help discuss timing, ministry focus, local needs, travel preparation, and how your team can serve in a way that strengthens the ongoing work.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center justify-center gap-2 bg-[#B51657] px-8 py-4 font-body text-sm font-bold text-white shadow-[0_16px_34px_rgba(181,22,87,0.22)] transition-colors hover:bg-[#9E134D]"
              >
                Start a Conversation <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
