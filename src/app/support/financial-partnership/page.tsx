import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BadgeDollarSign, BookOpenText, Church, Gift, HeartHandshake, UsersRound } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import PageHero from '@/components/ui/PageHero'

export const metadata = { title: "Financial Partnership | Savior's Heartbeat Ministries" }

const givingOptions = [
  {
    title: 'Crusade Sponsorship',
    amount: '$5,000',
    label: 'One Gospel gathering',
    summary: 'Helps reach gatherings of 2,000-3,000 people through outreach meetings.',
    helps: ['Sound and local setup', 'Ministry materials', 'Follow-up with churches'],
    image: '/peop.webp',
    imagePosition: 'center 34%',
    icon: <BookOpenText className="h-5 w-5" strokeWidth={1.9} />,
  },
  {
    title: "Pastors' Conferences",
    amount: '$3,000',
    label: 'For 200 pastors',
    summary: 'Covers accommodation, food, travel, and training support for leaders.',
    helps: ['Meals and lodging', 'Travel support', 'Teaching materials'],
    image: '/pastcopy.webp',
    imagePosition: 'center 28%',
    icon: <UsersRound className="h-5 w-5" strokeWidth={1.9} />,
  },
  {
    title: 'Child Sponsorship',
    amount: '$50',
    label: 'Per month',
    summary: 'Provides steady care, education, health support, and spiritual nurture.',
    helps: ['Education support', 'Food and clothing', 'Prayer and care'],
    image: '/children.webp',
    imagePosition: 'center 30%',
    icon: <HeartHandshake className="h-5 w-5" strokeWidth={1.9} />,
  },
  {
    title: 'Widow Support',
    amount: '$30',
    label: 'Per month',
    summary: 'Supports a poor and elderly widow with practical care and dignity.',
    helps: ['Monthly provision', 'Comfort and prayer', 'Community care'],
    image: '/WID1.webp',
    imagePosition: 'center 32%',
    icon: <HeartHandshake className="h-5 w-5" strokeWidth={1.9} />,
  },
  {
    title: 'Give as Led',
    amount: 'Any Gift',
    label: 'As the Lord leads',
    summary: 'Supports urgent needs, church projects, media outreach, and field ministry.',
    helps: ['Church projects', 'SPANDANA and TV ministry', 'Urgent field needs'],
    image: '/church.webp',
    imagePosition: 'center 42%',
    icon: <Gift className="h-5 w-5" strokeWidth={1.9} />,
  },
]

const primaryGivingOptions = givingOptions.slice(0, -1)
const flexibleGivingOption = givingOptions[givingOptions.length - 1]

export default function FinancialPartnershipPage() {
  return (
    <div>
      <PageHero
        eyebrow="Support Our Mission"
        title="Financial Partnership"
        subtitle="Invest in Gospel outreach, pastors, children, widows, churches, media, and ongoing Kingdom work."
        imageSrc="/food.webp"
        imageClassName="bg-[position:center_44%] sm:bg-[position:center_48%] lg:bg-[position:center_52%]"
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
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
            <Reveal dir="left">
              <div className="border-l-[6px] border-[#B51657] bg-white p-8 shadow-[0_18px_56px_rgba(0,0,0,0.08)] md:p-10">
                <div className="mb-7 flex h-16 w-16 items-center justify-center bg-[#B51657] text-white shadow-[0_16px_34px_rgba(181,22,87,0.22)]">
                  <BadgeDollarSign className="h-8 w-8" strokeWidth={1.8} />
                </div>
                <p className="mb-4 font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#B51657]">Faithful Giving</p>
                <h2 className="font-[Playfair_Display] text-4xl font-bold leading-[1.03] text-[#1E1E22] md:text-6xl">
                  Give clearly. <span className="block italic text-[#B51657]">Serve directly.</span>
                </h2>
                <p className="mt-6 font-body text-base leading-8 text-[#625B61] md:text-lg">
                  Choose a ministry area or give as led. Every gift helps carry the Gospel, strengthen pastors, care for children and widows, and support ongoing work in India.
                </p>
                <div className="mt-8 border-t border-[#B51657]/15 pt-6">
                  <p className="font-[Playfair_Display] text-xl italic leading-relaxed text-[#1E1E22]">
                    "God loves a cheerful giver."
                  </p>
                  <p className="mt-2 font-accent text-[10px] font-bold uppercase tracking-[0.3em] text-[#B51657]">2 Corinthians 9:7</p>
                </div>
              </div>
            </Reveal>

            <Reveal dir="right" className="h-full">
              <div className="grid h-full gap-4 lg:grid-rows-[1fr_auto]">
                <div className="relative min-h-[320px] overflow-hidden border border-[#E8DDE2] bg-[#12070C] shadow-[0_18px_56px_rgba(0,0,0,0.12)]">
                  <Image
                    src="/food.webp"
                    alt="Financial partnership ministry outreach"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 38%' }}
                    sizes="(min-width: 1024px) 650px, 100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-white/75">Your Giving At Work</p>
                    <h3 className="mt-3 max-w-xl font-[Playfair_Display] text-4xl font-bold leading-[1.02] text-white md:text-5xl">
                      Gospel care reaches real families.
                    </h3>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="bg-[#B51657] p-6 text-white shadow-[0_18px_44px_rgba(181,22,87,0.22)]">
                    <p className="font-[Playfair_Display] text-4xl font-bold">$5,000</p>
                    <p className="mt-2 font-body text-sm font-semibold leading-6 text-white/85">Crusade outreach for 2,000-3,000 people</p>
                  </div>
                  <div className="bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.07)] ring-1 ring-[#E8DDE2]">
                    <p className="font-[Playfair_Display] text-4xl font-bold text-[#1E1E22]">$50</p>
                    <p className="mt-2 font-body text-sm font-semibold leading-6 text-[#625B61]">Monthly child sponsorship</p>
                  </div>
                  <div className="bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.07)] ring-1 ring-[#E8DDE2]">
                    <p className="font-[Playfair_Display] text-4xl font-bold text-[#1E1E22]">$30</p>
                    <p className="mt-2 font-body text-sm font-semibold leading-6 text-[#625B61]">Monthly widow support</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {primaryGivingOptions.map((option, index) => (
              <Reveal key={option.title} delay={index * 70}>
                <article className="group flex h-full flex-col overflow-hidden border border-[#E8DDE2] bg-white shadow-[0_14px_42px_rgba(0,0,0,0.07)] transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden bg-[#12070C]">
                    <Image
                      src={option.image}
                      alt={option.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: option.imagePosition }}
                      sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center bg-[#B51657] text-white">
                      {option.icon}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-5 border-b border-[#B51657]/15 pb-5">
                      <p className="font-[Playfair_Display] text-5xl font-bold leading-none text-[#B51657]">{option.amount}</p>
                      <p className="mt-2 font-accent text-[10px] font-bold uppercase tracking-[0.25em] text-[#8A7D84]">{option.label}</p>
                    </div>
                    <h3 className="font-[Playfair_Display] text-3xl font-bold leading-tight text-[#1E1E22]">{option.title}</h3>
                    <p className="mt-3 font-body text-sm leading-7 text-[#625B61]">{option.summary}</p>
                    <div className="mt-5 space-y-2">
                      {option.helps.map(help => (
                        <div key={help} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 bg-[#B51657]" />
                          <p className="font-body text-sm font-medium leading-6 text-[#4F484E]">{help}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={primaryGivingOptions.length * 70} className="mt-6">
            <article className="group overflow-hidden border border-[#E8DDE2] bg-white shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1 lg:grid lg:grid-cols-[0.42fr_0.58fr]">
              <div className="relative min-h-[280px] overflow-hidden bg-[#12070C] lg:min-h-[380px]">
                <Image
                  src={flexibleGivingOption.image}
                  alt={flexibleGivingOption.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: flexibleGivingOption.imagePosition }}
                  sizes="(min-width: 1024px) 470px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center bg-[#B51657] text-white">
                  {flexibleGivingOption.icon}
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 md:p-9 lg:p-10">
                <div className="mb-6 border-b border-[#B51657]/15 pb-6">
                  <p className="font-[Playfair_Display] text-5xl font-bold leading-none text-[#B51657] md:text-6xl">
                    {flexibleGivingOption.amount}
                  </p>
                  <p className="mt-2 font-accent text-[10px] font-bold uppercase tracking-[0.25em] text-[#8A7D84]">
                    {flexibleGivingOption.label}
                  </p>
                </div>
                <h3 className="font-[Playfair_Display] text-3xl font-bold leading-tight text-[#1E1E22] md:text-4xl">
                  {flexibleGivingOption.title}
                </h3>
                <p className="mt-4 max-w-2xl font-body text-base leading-8 text-[#625B61]">
                  {flexibleGivingOption.summary}
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {flexibleGivingOption.helps.map(help => (
                    <div key={help} className="border border-[#B51657]/15 bg-[#FDF8F2] p-4">
                      <span className="mb-3 block h-2 w-2 bg-[#B51657]" />
                      <p className="font-body text-sm font-semibold leading-6 text-[#4F484E]">{help}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[#E8DDE2] bg-[#FDF8F2] py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.8fr_1fr] md:items-center">
          <Reveal dir="left">
            <p className="mb-4 font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#B51657]">Partner With Us</p>
            <h2 className="font-[Playfair_Display] text-4xl font-bold leading-[1.03] text-[#1E1E22] md:text-5xl">
              Your gift becomes Gospel work in the field.
            </h2>
          </Reveal>
          <Reveal dir="right">
            <div className="border border-[#E8DDE2] bg-white p-7 shadow-[0_14px_44px_rgba(0,0,0,0.07)] md:p-8">
              <p className="font-body text-base leading-8 text-[#625B61]">
                Give toward a specific amount above, or contact us if you want your gift directed to the area of greatest current need.
              </p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/charity/support-us"
                  className="inline-flex items-center justify-center gap-2 bg-[#B51657] px-8 py-4 font-body text-sm font-bold text-white shadow-[0_16px_34px_rgba(181,22,87,0.22)] transition-colors hover:bg-[#9E134D]"
                >
                  Give to the Ministry <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-[#B51657]/25 bg-white px-8 py-4 font-body text-sm font-bold text-[#B51657] transition-colors hover:border-[#B51657]"
                >
                  Contact Us <Church className="h-4 w-4" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
