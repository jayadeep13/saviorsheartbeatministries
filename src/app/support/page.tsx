import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, HeartHandshake, Plane, Sparkles } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

export const metadata = { title: "Support | Savior's Heartbeat Ministries" }

const heroImages = ['/pras.webp','/mt.webp']

const supportSections = [
  {
    title: 'Prayer Support',
    eyebrow: 'Intercession',
    icon: HeartHandshake,
    // Changed to 1 image as requested
    images: ['/bhu.png'], 
    points: [
      ['The Power of Prayer', 'Stand with us in spiritual warfare and intercession.'],
      ['Daily Devotion', 'Pray for protection, wisdom, and open hearts in the field.'],
      ['A Faithful Foundation', 'Join our prayer team to cover every mission in grace.'],
    ],
    cta: { label: 'Send Prayer Request', href: '/ministry/prayer-request' },
  },
  {
    title: 'Take a Mission Trip to India',
    eyebrow: 'Go & Serve',
    icon: Plane,
    images: ['/mt.webp', '/out (1).webp'],
    points: [
      ['Preach the Gospel', 'Share the message of Christ in unreached areas.'],
      ['Teach the Leaders', 'Pour your wisdom into local pastors and shepherds.'],
      ['Humanitarian Impact', 'Deliver food, clothing, and vital medical supplies.'],
    ],
  },
  {
    title: 'Financial Partnership',
    eyebrow: 'Give as Led',
    icon: Sparkles,
    images: ['/chiii.png', '/children.webp'],
    points: [
      ['Crusade Sponsorship', '$5,000 reaches gatherings of 2,000-3,000 people.'],
      ['Pastors’ Conferences', '$3,000 covers accommodation, food, and travel for 200 pastors & leaders.'],
      ['Child Sponsorship', '$50/month provides a future for a child in need. $30/month helps care for a poor and elderly widow.'],
      ['Give as Led', 'Follow the Lord’s promptings to invest in His Kingdom.'],
    ],
  },
]

function SupportImages({ images, title }: { images: string[]; title: string }) {
  if (images.length === 1) {
    return (
      <div className="support-feature-image relative aspect-[16/11] w-full overflow-hidden rounded-3xl bg-[#12070c] shadow-[0_28px_80px_rgba(0,0,0,0.18)] md:aspect-[16/10] lg:aspect-[4/3]">
        <Image src={images[0]} alt={`${title} ministry image`} fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    )
  }

  return (
    <div className="grid w-full grid-cols-2 gap-5 md:gap-6">
      {images.map((image) => (
        <div
          key={image}
          className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#12070c] shadow-[0_24px_70px_rgba(0,0,0,0.16)]"
        >
          <Image src={image} alt={`${title} ministry image`} fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      ))}
    </div>
  )
}

export default function SupportPage() {
  return (
    <main className="overflow-hidden bg-[#FCFBF7] text-[#1E1E22]">
      {/* Hero Section */}
      <section className="relative flex min-h-[380px] items-center overflow-hidden bg-[#12070c] md:min-h-[440px]">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className="absolute inset-0 opacity-0 animate-[supportHeroCarousel_30s_linear_infinite]"
            style={{ animationDelay: `${index * 6}s` }}
          >
            <Image src={image} alt="" fill priority={index === 0} className="object-cover object-[center_35%]" sizes="100vw" />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/74" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,22,87,0.16),rgba(0,0,0,0.2)_56%,rgba(0,0,0,0.72)_100%)]" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 pb-12 pt-24 text-center text-white">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-white/55" />
            <span className="font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-white/80">
              Support Our Mission
            </span>
            <span className="h-px w-10 bg-white/55" />
          </div>
          <h1 className="mb-4 font-heading text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Support Our Mission
          </h1>
          <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-white/78">
            Stand with us through prayer, mission trips, and faithful financial partnership.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative px-6 py-20 md:py-28">
        <div className="absolute left-[-12%] top-20 h-80 w-80 rounded-full bg-[#B51657]/5 blur-[90px]" />
        <div className="absolute bottom-20 right-[-12%] h-96 w-96 rounded-full bg-[#B51657]/5 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="space-y-24 md:space-y-36">
            {supportSections.map((section, index) => {
              const Icon = section.icon
              const reversed = index % 2 === 1

              return (
                <Reveal key={section.title} dir="up">
                  <article className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 xl:grid-cols-[1.16fr_0.84fr]">
                    {/* Image Column */}
                    <div className={reversed ? 'lg:order-2' : ''}>
                      <SupportImages images={section.images} title={section.title} />
                    </div>

                    {/* Text Details Column */}
                    <div className={reversed ? 'lg:order-1' : ''}>
                      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#B51657] text-white shadow-[0_12px_24px_rgba(181,22,87,0.18)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mb-2 font-accent text-[10px] font-bold uppercase tracking-[0.32em] text-[#B51657]">
                        {section.eyebrow}
                      </p>
                      <h2 className="mb-8 font-heading text-3xl font-semibold leading-tight text-[#1E1E22] md:text-4xl">
                        {index + 1}. {section.title}
                      </h2>
                      
                      {/* Cleaner Text List Format without rigid boxes */}
                      <div className="space-y-6 border-l-2 border-gray-100 pl-5">
                        {section.points.map(([heading, text]) => (
                          <div key={heading} className="group">
                            <h3 className="mb-1 font-body text-base font-bold text-[#1E1E22] transition-colors group-hover:text-[#B51657]">
                              {heading}
                            </h3>
                            <p className="font-body text-sm leading-relaxed text-[#625B61]">
                              {text}
                            </p>
                          </div>
                        ))}
                      </div>

                      {section.cta && (
                        <Link
                          href={section.cta.href}
                          target={section.cta.href.startsWith('http') ? '_blank' : undefined}
                          rel={section.cta.href.startsWith('http') ? 'noreferrer' : undefined}
                          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#B51657] px-7 py-3.5 font-body text-sm font-bold text-white shadow-[0_16px_34px_rgba(181,22,87,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#8B0A35]"
                        >
                          {section.cta.label}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
