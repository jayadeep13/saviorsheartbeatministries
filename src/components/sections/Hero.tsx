'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight, Radio, Sparkles } from 'lucide-react'

const heroSlides = [
  {
    image: '/pre.webp',
    position: 'center center',
    label: 'Gospel Crusades',
    title: 'Preaching the Gospel',
    accent: 'Hope for Every Soul',
    text: "Sharing Christ's message of salvation through crusades, outreach, and faithful witness across India.",
    capsuleTitle: 'Gospel crusades',
    capsuleText: 'Preaching Christ across India',
    primary: { label: 'Explore Ministries', href: '/ministry/preaching-the-gospel' },
    secondary: { label: 'Send Prayer Request', href: '/ministry/prayer-request' },
  },
  {
    image: '/children.webp',
    position: '50% 45%',
    label: 'Children Care',
    title: 'Children Blessed',
    accent: 'With Love & Care',
    text: 'Providing food, education, shelter, healthcare, and spiritual care for children who need family and hope.',
    capsuleTitle: 'Children care',
    capsuleText: 'Food, education, shelter, and hope',
    primary: { label: 'Children Ministry', href: '/ministry/orphans-poor-children' },
    secondary: { label: 'Support Children', href: '/support' },
  },
  {
    image: '/WID1.webp',
    position: '58% center',
    label: 'Compassion',
    title: 'Widows Care',
    accent: 'Dignity & Comfort',
    text: 'Serving widows with practical support, prayer, compassion, and the assurance that they are seen and loved.',
    capsuleTitle: 'Widows care',
    capsuleText: 'Dignity, comfort, and prayer',
    primary: { label: 'Widows Ministry', href: '/ministry/widows' },
    secondary: { label: 'Partner With Us', href: '/support' },
  },
  {
    image: '/church.webp',
    position: '52% center',
    label: 'Church Growth',
    title: 'Church Construction',
    accent: 'Building Places of Worship',
    text: 'Helping pastors and communities establish strong local churches where villages can gather, worship, and grow.',
    capsuleTitle: 'Church growth',
    capsuleText: 'Building places of worship',
    primary: { label: 'Church Projects', href: '/ministry/helping-pastors-building-churches' },
    secondary: { label: 'Give Support', href: '/support' },
  },
  {
    image: '/GAL1.webp',
    position: '54% center',
    label: 'Media Ministry',
    title: 'SPANDANA TV',
    accent: 'Broadcasting Hope',
    text: 'Broadcasting the Gospel through media ministry and Telugu Christian teaching that reaches homes every day.',
    capsuleTitle: 'Media ministry',
    capsuleText: 'Broadcasting hope every day',
    primary: { label: 'Support TV Ministry', href: '/support' },
    secondary: { label: 'SPANDANA Magazine', href: '/ministry/magazine' },
  },
]



export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSlide = heroSlides[activeIndex]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#050505] text-white lg:min-h-[820px]">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <Image
            key={`hero-bg-${slide.title}`}
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover object-center transition-all duration-1000 ease-out ${
              activeIndex === index ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
            }`}
            style={{ objectPosition: slide.position }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/42 lg:bg-black/68" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.76)_0%,rgba(0,0,0,0.52)_54%,rgba(0,0,0,0.26)_100%)] lg:bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.78)_42%,rgba(0,0,0,0.28)_72%,rgba(0,0,0,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(181,22,87,0.22),transparent_34%),radial-gradient(circle_at_78%_20%,rgba(201,169,110,0.16),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:54px_54px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-[5svh] pt-44 sm:px-6 sm:pt-44 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:pb-16 lg:pt-32">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex max-w-full items-center gap-3 rounded-full border border-white/18 bg-black/32 px-4 py-2 shadow-[0_14px_34px_rgba(0,0,0,0.22)] backdrop-blur-md lg:mb-6">
            <span className="h-2 w-2 rounded-full bg-[#B51657] shadow-[0_0_18px_rgba(181,22,87,0.8)]" />
            <span className="font-accent text-[9px] font-bold uppercase tracking-[0.22em] text-white/78 sm:text-[10px] sm:tracking-[0.32em]">
              Savior&apos;s Heartbeat Ministries
            </span>
          </div>

          <div className="relative min-h-[405px] sm:min-h-[500px] lg:min-h-[390px]">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.title}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  activeIndex === index
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none translate-y-5 opacity-0'
                }`}
              >
                <p className="mb-3 font-accent text-[9px] font-bold uppercase tracking-[0.34em] text-[#F3C2D2] sm:mb-4 sm:text-[10px]">
                  {slide.label}
                </p>
                <h1 className="mb-5 font-heading text-3xl font-semibold leading-[1.05] text-white drop-shadow-[0_8px_26px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl lg:mb-6 lg:text-7xl">
                  {slide.title}
                  <span className="mt-2 block font-display text-[0.78em] font-medium italic text-[#F2B8CA] sm:text-[0.82em]">
                    {slide.accent}
                  </span>
                </h1>

                <p className="mb-6 max-w-2xl font-body text-[15px] leading-7 text-white/88 sm:text-lg sm:leading-8 md:text-xl lg:mb-8">
                  {slide.text}
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Link
                    href={slide.primary.href}
                    className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#B51657] px-7 font-body text-sm font-bold text-white shadow-[0_18px_42px_rgba(181,22,87,0.34)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#981149] sm:min-h-14 sm:px-8"
                  >
                    {slide.primary.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={slide.secondary.href}
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 bg-white px-7 font-body text-sm font-bold text-[#1C1C1E] shadow-[0_16px_38px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:text-[#B51657] sm:min-h-14 sm:px-8"
                  >
                    {slide.secondary.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="relative hidden min-h-[560px] lg:block">
          <div className="absolute left-6 top-0 h-24 w-24 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-10 right-0 h-32 w-32 rounded-full bg-[#C9A96E]/20 blur-3xl" />

          <div className="absolute right-0 top-8 h-[520px] w-[82%] overflow-hidden rounded-[2rem] border border-white/18 bg-white/10 p-3 shadow-[0_34px_95px_rgba(0,0,0,0.42)] backdrop-blur">
            <div className="relative h-full overflow-hidden rounded-[1.45rem] bg-[#12070c]">
              <Image
                key={activeSlide.title}
                src={activeSlide.image}
                alt={activeSlide.title}
                fill
                priority
                sizes="(min-width: 1024px) 680px, 100vw"
                className="object-cover object-center transition-all duration-700 ease-out"
                style={{ objectPosition: activeSlide.position }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-black/10" />
            </div>
          </div>

   
          <div className="absolute bottom-0 left-20 flex min-w-[420px] items-center gap-4 rounded-full border border-white/12 bg-black/38 px-5 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#B51657]">
              <Radio className="h-5 w-5" />
            </span>
            <div className="min-h-[42px] flex-1">
              <p className="font-body text-sm font-bold text-white">{activeSlide.capsuleTitle}</p>
              <p className="font-body text-xs text-white/58">{activeSlide.capsuleText}</p>
            </div>
          </div>

          <Sparkles className="absolute right-8 top-0 h-7 w-7 text-[#E9A5BB]" />
        </div>
      </div>
    </section>
  )
}
