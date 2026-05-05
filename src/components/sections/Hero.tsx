import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const heroSlides = [
  {
    image: '/pre.webp',
    title: 'Preaching the Gospel',
    accent: 'Hope for Every Soul',
    text: "Sharing Christ's message of salvation through crusades, outreach, and faithful witness across India.",
    primary: { label: 'Explore Ministries', href: '/ministry/preaching-the-gospel' },
    secondary: { label: 'Send Prayer Request', href: '/ministry/prayer-request' },
  },
  {
    image: '/children.webp',
    title: 'Children Blessed',
    accent: 'With Love & Care',
    text: 'Providing food, education, shelter, healthcare, and spiritual care for children who need family and hope.',
    primary: { label: 'Children Ministry', href: '/ministry/orphans-poor-children' },
    secondary: { label: 'Support Children', href: '/support/financial-partnership' },
  },
  {
    image: '/WID1.webp',
    title: 'Widows Care',
    accent: 'Dignity & Comfort',
    text: 'Serving widows with practical support, prayer, compassion, and the assurance that they are seen and loved.',
    primary: { label: 'Widows Ministry', href: '/ministry/widows' },
    secondary: { label: 'Partner With Us', href: '/support/financial-partnership' },
  },
  {
    image: '/church.webp',
    title: 'Church Construction',
    accent: 'Building Places of Worship',
    text: 'Helping pastors and communities establish strong local churches where villages can gather, worship, and grow.',
    primary: { label: 'Church Projects', href: '/ministry/helping-pastors-building-churches' },
    secondary: { label: 'Give Support', href: '/support/financial-partnership' },
  },
  {
    image: '/slide4.webp',
    title: 'SPANDANA TV',
    accent: 'Live Every Day',
    text: 'Broadcasting the Gospel through media ministry and Telugu Christian teaching that reaches homes every day.',
    primary: { label: 'TV Ministries', href: '/support/tv-ministries' },
    secondary: { label: 'SPANDANA Magazine', href: '/ministry/magazine' },
  },
]

export default function Hero() {
  return (
    <section className="relative flex min-h-[660px] items-center overflow-hidden bg-[#12070c] sm:min-h-[700px] lg:min-h-[760px]">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.title}
            className="hero-carousel-slide absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              animationDelay: `${index * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,4,6,0.94)_0%,rgba(18,7,12,0.78)_48%,rgba(18,7,12,0.42)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#12070c] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl translate-y-3 px-5 pb-10 pt-24 sm:translate-y-4 sm:px-6 sm:pb-12 lg:translate-y-0 lg:px-8 lg:pt-28">
        <div className="relative min-h-[330px] max-w-4xl sm:min-h-[360px]">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className="hero-carousel-content absolute inset-0"
              style={{ animationDelay: `${index * 5}s` }}
            >
              <h1 className="mb-6 font-heading text-4xl font-semibold leading-[1.04] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {slide.title}
                <span className="mt-1 block font-display text-[0.9em] font-medium italic text-[#B51657] sm:mt-2">
                  {slide.accent}
                </span>
              </h1>

              <p className="mb-8 max-w-2xl font-body text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
                {slide.text}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href={slide.primary.href}
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#B51657] px-7 font-body text-sm font-bold text-white shadow-[0_16px_38px_rgba(181,22,87,0.32)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#981149] sm:px-8"
                >
                  {slide.primary.label}
                </Link>
                <Link
                  href={slide.secondary.href}
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 font-body text-sm font-bold text-[#1C1C1E] shadow-[0_16px_38px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:text-[#B51657] sm:px-8"
                >
                  {slide.secondary.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-9 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-5 rounded-full border border-white/18 bg-black/18 px-5 py-2.5 shadow-[0_12px_38px_rgba(0,0,0,0.22)] backdrop-blur-xl lg:flex">
        <button
          type="button"
          aria-label="Previous hero slide"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/92 text-[#0F172A] shadow-[0_8px_20px_rgba(0,0,0,0.16)] transition-transform hover:scale-105"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={2.4} />
        </button>

        <div className="flex items-center gap-2.5">
          {heroSlides.map((slide, index) => (
            <span
              key={slide.title}
              className="hero-carousel-dot h-2 w-2 rounded-full bg-white/70"
              style={{ animationDelay: `${index * 5}s` }}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next hero slide"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/92 text-[#0F172A] shadow-[0_8px_20px_rgba(0,0,0,0.16)] transition-transform hover:scale-105"
        >
          <ChevronRight className="h-4 w-4" strokeWidth={2.4} />
        </button>
      </div>
    </section>
  )
}
