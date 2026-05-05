import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Globe, HeartHandshake, ReceiptText, ShieldCheck } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'

const highlights = [
  {
    icon: HeartHandshake,
    title: '1997 Partnership',
    text: "Brother Jerry and Sister Debi Ayers welcomed Deva in the USA and stood with the vision for Savior's Heartbeat Ministries.",
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Stewardship',
    text: 'They helped establish Savior&apos;s Heartbeat USA with a registered IRS account and annual accountability.',
  },
  {
    icon: ReceiptText,
    title: 'Faithful Donor Care',
    text: 'Sister Debi serves donors by providing tax-deductible receipts and helping offerings reach India with care.',
  },
]

export default function BoardPreview() {
  return (
    <section className="relative overflow-hidden bg-[#FCFAF7] pb-28 pt-12">
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <SectionLabel text="Leadership" />
            <h2 className="font-[Playfair_Display] text-5xl font-bold leading-[0.98] text-[#0C1A27] md:text-6xl lg:text-7xl mb-5">
              Board of
              <span className="block italic text-[#B51657]">Directors</span>
            </h2>
            <p className="text-[#55545A] max-w-2xl mx-auto font-body text-base leading-relaxed">
              Meet Brother Jerry and Sister Debi Ayers, compassionate USA partners who helped establish transparent support for Savior&apos;s Heartbeat Ministries.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <Reveal dir="left">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-[#B51657]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-[0_24px_70px_rgba(0,0,0,0.16)]">
                <div className="relative aspect-[5/4]">
                  <Image
                    src="/BOD.webp"
                    alt="Brother Jerry and Sister Debi Ayers"
                    fill
                    className="object-cover object-[center_18%]"
                    sizes="(min-width: 1024px) 560px, 100vw"
                  />
                </div>
                <div className="bg-white p-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#FDF2F7] px-4 py-2 text-[#B51657] mb-4">
                    <Globe className="h-4 w-4" />
                    <span className="text-[10px] font-accent tracking-[0.22em] uppercase">USA Liaison Office</span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[#1C1C1E]">Brother Jerry & Sister Debi Ayers</h3>
                  <p className="mt-3 text-[#55545A] font-body text-sm leading-relaxed">
                    Faithful stewards who have supported the ministry with hospitality, prayer, accountability, and a heart for India.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal dir="right">
            <div>
              <div className="space-y-5">
                {highlights.map((item) => {
                  const Icon = item.icon

                  return (
                    <div key={item.title} className="grid grid-cols-[56px_1fr] gap-5 rounded-2xl border border-[#F0D7E2] bg-white p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                      <div className="h-14 w-14 rounded-2xl bg-[#FDF2F7] text-[#B51657] flex items-center justify-center">
                        <Icon className="h-7 w-7" strokeWidth={1.8} />
                      </div>
                      <div>
                        <h4 className="font-heading text-xl font-semibold text-[#1C1C1E] mb-2">{item.title}</h4>
                        <p className="text-[#55545A] font-body text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 rounded-2xl bg-black p-7 text-white">
                <p className="font-display text-xl md:text-2xl italic font-light leading-relaxed text-white/86">
                  &quot;Their generosity has enabled us to provide crucial aid to the poor and needy, addressing both physical and spiritual necessities.&quot;
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/about/board-of-directors"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B51657] text-white hover:bg-[#9E134C] font-body font-semibold rounded-full text-sm transition-all duration-300 shadow-[0_12px_30px_rgba(181,22,87,0.25)]"
                >
                  Meet the Full Board
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
