import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/ui/PageHero';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata = { title: "About Deva | Savior's Heartbeat Ministries" };

export default function AboutDevaPage() {
  return (
    <div className="bg-white antialiased">
      {/* 1. HERO SECTION */}
      <PageHero 
        eyebrow="About Us" 
        title="About Deva" 
        subtitle="The story behind Savior's Heartbeat Ministries" 
      />

      {/* 2. LEADERSHIP & INTRO SECTION */}
      <section className="py-24 bg-ivory-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            
            {/* STICKY PROFILE CARD */}
            <Reveal dir="left" className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-black shadow-[0_24px_64px_rgba(181,22,87,0.12)] group relative border border-white/5">
                  <Image
                    src="/about1.webp"
                    alt="Bishop Deva | Savior's Heartbeat Ministries"
                    fill
                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                    sizes="(min-width: 1024px) 350px, 100vw"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 pt-20">
                    <p className="font-display text-white text-lg italic font-light leading-tight drop-shadow-md">
                      "Thank you for visiting <br/> this work of the Lord."
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-100 text-center flex flex-col items-center">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="h-1 w-1 rounded-full bg-[#22C55E]" />
                    <h3 className="font-accent text-onyx-900 text-[10px] font-bold uppercase tracking-[0.3em]">Leadership</h3>
                    <span className="h-1 w-1 rounded-full bg-[#22C55E]" />
                  </div>
                  <h4 className="font-display text-3xl md:text-4xl font-semibold text-onyx-950 leading-tight mb-2 tracking-tight">
                    Devasahayam <span className="italic font-light text-[#B51657]">Dandala</span>
                  </h4>  
                  <p className="font-body text-[#22C55E] text-[11px] font-bold uppercase tracking-[0.2em] opacity-80">
                    Founder & President
                  </p>
                  <div className="w-12 h-px bg-gray-100 mt-6" />
                </div>
              </div>
            </Reveal>

            {/* MAIN INTRODUCTION CONTENT */}
            <Reveal dir="right" className="lg:col-span-2">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-crimson-500/50" />
                <span className="font-accent text-crimson-500 text-[10px] tracking-[0.35em] uppercase">Leadership</span>
                <span className="h-px w-10 bg-crimson-500/50" />
              </div>
              <h2 className="mb-8 font-[Playfair_Display] text-5xl font-bold leading-[1.03] text-onyx-950 md:text-6xl lg:text-7xl">
                <span className="block">The Heart Behind</span>
                <span className="block italic text-[#B51657]">the Heartbeat</span>
              </h2>
              <div className="space-y-5 text-onyx-600 font-body text-base leading-relaxed">
                <p>Savior's Heartbeat Ministries was founded with a deep passion for reaching the people of India with the Gospel of Jesus Christ. The ministry is led by a dedicated servant of God who has committed their life to preaching, teaching, and preparing people for the coming of the Lord.</p>
                <p>Based in Vijayawada, Andhra Pradesh, the ministry has grown from humble beginnings to become a significant Christian outreach covering multiple villages, television broadcasts, print media, and charitable work across India.</p>
                <p>The name "Spandana" — meaning "Heartbeat" — beautifully captures the essence of this ministry: a constant, living pulse of the Holy Spirit reaching out to touch hearts and transform lives across the Telugu-speaking world and beyond.</p>
                
                <blockquote className="border-l-[3px] border-crimson-500 pl-6 py-3 my-6 bg-crimson-50/50 rounded-r-2xl">
                  <p className="italic font-display text-onyx-700 text-lg font-light">"Thank you for taking time to visit this wonderful work of the Lord in the land of India. We are sure that you will be blessed as you browse these pages and we do pray that God Holy Spirit may touch you and speak to your heart to fulfill the Savior's Heartbeat."</p>
                </blockquote>

                <p>Since its founding in 1976, the ministry has constructed churches in 12 villages, cared for 100+ orphaned children, supported countless widows, conducted evangelism crusades reaching hundreds of thousands, and published the SPANDANA magazine which blesses Telugu readers around the globe.</p>
                <p>The ministry invites all who are moved by the Spirit to partner in prayer, financial support, or active service — so that together, we can continue to fulfill the Savior's Heartbeat for India.</p>
              </div>

              {/* STATS GRID */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[{n:'40+',l:'Years of Ministry'},{n:'60+',l:'Churches Built'},{n:'700+',l:'Children Cared For'}].map(s => (
                  <div key={s.l} className="text-center p-4 bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-100">
                    <div className="font-display text-2xl text-crimson-500 font-semibold">{s.n}</div>
                    <div className="text-onyx-500 text-[10px] uppercase font-bold tracking-wider mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. THE MIRACLE TESTIMONY (PURE BLACK) */}
      <section className="py-24 bg-black text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal dir="left">
              <div className="space-y-8">
                <div>
                  <p className="text-crimson-500 uppercase tracking-[0.4em] font-bold text-[10px] mb-4">Deep Heritage</p>
                  <h2 className="font-[Playfair_Display] text-5xl font-bold leading-[1.03] text-white md:text-6xl lg:text-7xl">
                    The Miraculous
                    <span className="block italic text-[#B51657]">Story</span>
                  </h2>
                  <p className="text-crimson-500 font-display text-xl mt-4">Behind the Name</p>
                </div>
                <div className="space-y-6 text-slate-300 font-light leading-relaxed text-lg">
                  <p>Compassion Minister Devasahayam's name holds a profound testimony to God's goodness. At just two years old, Deva battled a life-threatening poisonous fever. His parents, having already lost their firstborn to an unknown disease, were desperate.</p>
                  <p>Desperate for a miracle, Deva's parents tried every affordable medical treatment, but his condition only worsened. In anguish, they cried out to their traditional gods and goddesses, pleading for relief, yet receiving none, just as hope seemed lost.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md border-l-4 border-crimson-500 p-10 rounded-2xl">
                  <p className="italic font-display text-2xl text-white leading-relaxed">
                    "In their darkest hour, a man of God visited, sharing the Gospel and assuring them that if they accepted Jesus and turned to God, their son would recover."
                  </p>
                </div>
                <div className="pt-8 border-t border-white/10">
                  <h4 className="text-crimson-500 font-display text-2xl mb-4">What is in a Name?</h4>
                  <p className="text-slate-300 leading-relaxed">
                    In gratitude, his parents named him <span className="text-white font-bold underline decoration-crimson-500 underline-offset-8">Devasahayam</span>, meaning <span className="italic text-crimson-500">"God is my helper"</span> in Telugu language. This name serves as a constant reminder of God's divine intervention and love.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal dir="right" className="flex flex-col items-center">
              <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 p-4 bg-white/5 shadow-2xl">
                <div className="relative w-full h-full rounded-[3rem] overflow-hidden">
                  <Image src="/parents.webp" fill className="object-cover" alt="Parents Abraham and Saramma" />
                </div>
              </div>
              <div className="mt-10 text-center">
                <h4 className="text-3xl font-display text-white">Abraham & Saramma</h4>
                <p className="text-crimson-500 uppercase text-xs tracking-[0.3em] font-black mt-3">Deva's Parents</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. MENTORSHIP & VISION SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <Reveal dir="left" className="relative -mx-6 h-[560px] overflow-hidden shadow-2xl group md:mx-0 md:h-[600px] md:rounded-[3.5rem]">
              <Image src="/rr.webp" fill className="object-cover object-top transition-transform duration-[2s] group-hover:scale-105" alt="Rev RRK Murthy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:bottom-12 md:left-12 md:right-auto md:p-0">
                <p className="mb-3 text-[10px] font-black uppercase tracking-widest text-white md:mb-4">Spiritual Guidance</p>
                <h3 className="font-display text-3xl leading-tight text-white md:text-4xl">Rev. RRK Murthy & <br/>Dr. Deva Dandala</h3>
              </div>
            </Reveal>

            <Reveal dir="right" className="space-y-10">
              <div className="space-y-6">
                <h2 className="font-[Playfair_Display] text-5xl font-bold leading-[1.03] text-onyx-950 md:text-6xl lg:text-7xl">
                  Proclaiming the
                  <span className="block italic text-[#B51657]">Good News</span>
                </h2>
                <p className="text-onyx-600 text-lg leading-relaxed font-light">
                  Minister Deva serves as Editor and Publisher of <span className="font-bold text-crimson-600 uppercase tracking-wider">Spandana</span>, a renowned Telugu spiritual monthly magazine, founded in 1976 by his spiritual mentor, renowned Radio Speaker Late Acharya RRK Murthy. SPANDANA inspires thousands of Telugu-speaking families every month, globally.
                </p>
              </div>

              <div className="bg-ivory-50 p-10 rounded-[2.5rem] border border-ivory-100 shadow-sm">
                <h3 className="text-2xl font-display mb-6 text-onyx-900 border-b border-crimson-100 pb-4">Personal Life and Calling</h3>
                <div className="space-y-4 text-onyx-600 leading-relaxed font-light">
                  <p>At age 21, Deva received a profound vision from the Lord, revealing countless precious souls slipping into eternal darkness, unaware of the Savior who had sacrificed His life and shed precious blood on Calvary's cross.</p>
                  <p className="text-crimson-600 font-display italic text-lg bg-crimson-50/50 p-4 rounded-xl">
                    This divine revelation, known as the "Vision of Golden Apples," stirred Deva's heart and soul.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. FAITH & FAMILY BENTO SECTION */}
      <section className="py-24 bg-ivory-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal dir="up" className="text-center mb-20">
            <h2 className="font-[Playfair_Display] text-5xl font-bold leading-[1.03] text-onyx-950 md:text-6xl lg:text-7xl">
              A Legacy of <span className="italic text-[#B51657]">Faith</span>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* JOURNEY CARD */}
            <Reveal dir="left" className="lg:col-span-7 border-l-[6px] border-[#E7C56D] bg-[#B51657] p-8 shadow-[0_24px_70px_rgba(181,22,87,0.22)] md:p-12">
              <p className="mb-4 font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-white/70">Spiritual Formation</p>
              <h3 className="mb-7 font-[Playfair_Display] text-4xl font-bold leading-tight text-white md:text-5xl">Faith Journey & Mentoring</h3>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                Under the guidance of renowned evangelist Acharya RRK Murthy, often referred to as the “Billy Graham of Andhra Pradesh,” Deva received invaluable training and mentorship. Deva’s father, Bro. D Abraham, a devoted man of God, prayed fervently for his family’s salvation. His tears and faithfulness blessed Deva with a personal encounter with Jesus Christ.
              </p>
            </Reveal>

            {/* LINEAGE CARD */}
            <Reveal dir="right" className="flex flex-col justify-center border-l-[6px] border-[#B51657] bg-white p-8 shadow-[0_24px_70px_rgba(0,0,0,0.14)] md:p-12 lg:col-span-5">
              <p className="mb-4 font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#B51657]">Family Heritage</p>
              <h3 className="mb-7 font-[Playfair_Display] text-4xl font-bold leading-tight text-black md:text-5xl">Godly Lineage</h3>
              <p className="text-lg text-black/80 leading-relaxed font-light">
                Deva comes from a godly lineage, with parents now in eternity. He and his seven siblings, including three in full-time ministry, share a deep faith in Lord Jesus Christ. Deva dedicates his life to evangelism, directing resources to ministry.
              </p>
            </Reveal>

          </div>
        </div>

        {/* LARGE FAMILY IMAGE BANNER */}
        <Reveal dir="up" className="mt-12 overflow-hidden bg-white shadow-[0_28px_80px_rgba(0,0,0,0.12)]">
          <div className="overflow-hidden bg-black">
            <Image
              src="/family1.webp"
              width={1537}
              height={1023}
              className="h-auto w-full object-contain"
              alt="The Dandala Family"
              sizes="100vw"
            />
          </div>
          <div className="border-y border-[#B51657]/10 bg-white/85 backdrop-blur-xl">
            <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 md:grid-cols-[0.35fr_1fr] md:items-start md:py-12 lg:py-14">
              <p className="font-accent text-[10px] font-bold uppercase tracking-[0.4em] text-[#B51657]">Family & Calling</p>
              <div className="border-l-4 border-[#B51657] pl-5 md:pl-8">
                <h3 className="font-[Playfair_Display] text-4xl font-bold leading-[1.02] text-onyx-950 md:text-5xl lg:text-6xl">
                  Deva, Krupa <span className="italic text-[#B51657]">& Children</span>
                </h3>
                <p className="mt-5 max-w-4xl font-body text-[15px] font-medium leading-7 text-onyx-700 md:text-xl md:leading-relaxed">
                  He and his wife, Krupa, live in India, proudly supporting their children: their son studying in the UK and Dr. Angel, serving the underprivileged with her medical skills. A family rooted in faith, service, and dedication to the Kingdom of God.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 6. FINAL FOOTER QUOTE (BEFORE CTA) */}
      <section className="py-24 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-6 mb-12">
             <div className="h-px w-24 bg-gray-200" />
             <div className="w-3 h-3 rounded-full bg-crimson-600 shadow-[0_0_15px_rgba(181,22,87,0.5)]" />
             <div className="h-px w-24 bg-gray-200" />
          </div>
          <h3 className="text-3xl lg:text-5xl font-display text-onyx-900 mb-8 leading-tight">Deva's parents <span className="text-[#B51657] font-semibold">Abraham & Saramma</span></h3>
          <p className="text-xl lg:text-3xl text-onyx-500 italic leading-relaxed font-display font-light">
            "Their faith, tears, and trust in God became part of the testimony that shaped Deva’s life and calling. Their prayers and faithfulness blessed Deva with a personal encounter with Jesus Christ."
          </p>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <ContactCTA />
    </div>
  );
}
