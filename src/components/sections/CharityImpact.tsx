import Image from 'next/image'
import Link from 'next/link'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import { HeartHandshake } from 'lucide-react'

export default function CharityImpact() {
  return (
    <section className="relative overflow-hidden bg-[#F7F1EA] py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,22,87,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(201,169,110,0.14),transparent_35%)]" />
      <div className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(135deg,rgba(181,22,87,0.05)_1px,transparent_1px)] bg-[length:32px_32px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <SectionLabel text="Charity & Impact" />

            <h2 className="mt-5 font-display text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-[#1B1B1D] md:text-6xl lg:text-7xl">
              Compassion in Action,
              <span className="mt-3 block font-semibold italic tracking-[-0.035em] text-[#B51657]">
                Hope for Every Home
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-8 text-[#1B1B1D]/70">
              Through faithful giving and hands-on care, we serve children, widows, families, and village communities with dignity.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3 items-stretch">
          <Reveal delay={80}>
            <div className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_20px_60px_rgba(27,27,29,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(181,22,87,0.14)]">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/children.webp"
                  alt="Children supported by Savior's Heartbeat Ministries"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <div className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold tracking-wide text-[#B51657] backdrop-blur">
                  Active Program
                </div>

                <div className="absolute left-6 bottom-6">
                  <div className="font-heading text-2xl font-semibold text-white">100+ Children</div>
                  <div className="mt-1 font-body text-sm text-white/75">Loved, cared for, and growing</div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="mb-3 font-heading text-2xl font-semibold leading-tight text-[#1B1B1D]">
                  Helping Hands for Children
                </h3>

                <p className="font-body text-[15px] leading-7 text-[#1B1B1D]/65">
                  We care for orphaned and poor children, providing housing, education, healthcare, and spiritual nurturing.
                </p>

                <div className="mt-auto pt-6">
                  <Link
                    href="/charity/helping-hands-for-children"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#B51657] transition-all hover:gap-3"
                  >
                    Learn More
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_20px_60px_rgba(27,27,29,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(181,22,87,0.14)]">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/WID1.webp"
                  alt="Widows care ministry outreach"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <div className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold tracking-wide text-[#B51657] backdrop-blur">
                  Ongoing
                </div>

                <div className="absolute left-6 bottom-6">
                  <div className="font-heading text-2xl font-semibold text-white">Widows Care</div>
                  <div className="mt-1 font-body text-sm text-white/75">Dignity, provision, and love</div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="mb-3 font-heading text-2xl font-semibold leading-tight text-[#1B1B1D]">
                  Widows Care Ministry
                </h3>

                <p className="font-body text-[15px] leading-7 text-[#1B1B1D]/65">
                  We support poor and elderly widows with care, provision, and community so they know they are not forgotten.
                </p>

                <div className="mt-auto pt-6">
                  <Link
                    href="/charity/widows-care"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#B51657] transition-all hover:gap-3"
                  >
                    Learn More
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#8B0A35] via-[#B51657] to-[#5A0624] p-7 shadow-[0_24px_70px_rgba(181,22,87,0.24)]">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[length:22px_22px]" />
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-6 flex items-center gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur">
                    <HeartHandshake className="h-8 w-8" strokeWidth={1.8} />
                  </div>

                  <h3 className="font-display text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-white">
                    Partner With
                    <span className="block italic text-[#F7DFA3]">This Ministry</span>
                  </h3>
                </div>

              <p className="mb-6 font-body text-[15px] leading-7 text-white">
  Your generous gift directly transforms lives across children, widows, village churches,
  missionaries, and communities.
</p>

                <div className="space-y-3.5">
                  {[
                    'Fund a village church building',
                    'Sponsor an orphaned child',
                    'Support a widow with monthly care',
                    'Equip a native missionary',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 font-body text-[15px] leading-6 text-white">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#F7DFA3]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    href="/support/financial-partnership"
                    className="block rounded-2xl bg-white px-6 py-4 text-center font-body text-sm font-bold text-[#B51657] shadow-[0_18px_40px_rgba(0,0,0,0.16)] transition-all hover:-translate-y-1 hover:bg-[#F7DFA3]"
                  >
                    Give to the Ministry
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
