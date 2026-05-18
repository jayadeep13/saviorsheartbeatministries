import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/ui/PageHero';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata = { title: "About Deva | Savior's Heartbeat Ministries" };

export default function AboutDevaPage() {
  return (
    <div className="bg-white antialiased selection:bg-[#B51657]/10 selection:text-[#B51657]">
      {/* 1. HERO SECTION */}
      <PageHero 
        eyebrow="About Us" 
        title="About Deva" 
        subtitle="The story behind Savior's Heartbeat Ministries" 
      />

      {/* 2. LEADERSHIP & INTRO SECTION */}
      <section className="py-24 lg:py-32 bg-stone-50/60 border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* STICKY PROFILE CARD */}
            <Reveal dir="left" className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-stone-100 shadow-[0_32px_64px_-16px_rgba(181,22,87,0.08)] group relative border border-stone-200/60">
                  <Image
                    src="/about1.webp"
                    alt="Bishop Deva | Savior's Heartbeat Ministries"
                    fill
                    className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 350px, 100vw"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent p-8 pt-24">
                    <p className="font-display text-stone-100 text-lg italic font-light leading-tight drop-shadow-sm">
                      "Thank you for visiting <br/> this work of the Lord."
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-stone-100 text-center flex flex-col items-center">
                  <div className="inline-flex items-center gap-2.5 mb-4">
                    <span className="h-1 w-1 rounded-full bg-[#22C55E]" />
                    <h3 className="font-accent text-stone-500 text-[10px] font-bold uppercase tracking-[0.3em]">Leadership</h3>
                    <span className="h-1 w-1 rounded-full bg-[#22C55E]" />
                  </div>
                  <h4 className="font-display text-3xl font-semibold text-stone-900 leading-tight mb-2 tracking-tight">
                    Devasahayam <span className="italic font-light text-[#B51657]">Dandala</span>
                  </h4>  
                  <p className="font-body text-[#22C55E] text-[11px] font-bold uppercase tracking-[0.2em] opacity-90">
                    Founder & President
                  </p>
                  <div className="w-12 h-px bg-stone-100 mt-6" />
                </div>
              </div>
            </Reveal>

            {/* MAIN INTRODUCTION CONTENT */}
            <Reveal dir="right" className="lg:col-span-8 lg:pl-4">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#B51657]/30" />
                <span className="font-accent text-[#B51657] text-[10px] tracking-[0.35em] uppercase font-semibold">Leadership</span>
                <span className="h-px w-8 bg-[#B51657]/30" />
              </div>
              <h2 className="mb-8 font-[Playfair_Display] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-stone-900 tracking-tight">
                The Heart Behind <span className="block lg:inline italic text-[#B51657]">the Heartbeat</span>
              </h2>
              <div className="space-y-6 text-stone-600 font-body text-[16px] md:text-[17px] leading-relaxed font-light">
                <p>Savior's Heartbeat Ministries was founded with a deep passion for reaching the people of India with the Gospel of Jesus Christ. The ministry is led by a dedicated servant of God who has committed their life to preaching, teaching, and preparing people for the coming of the Lord.</p>
                <p>Based in Vijayawada, Andhra Pradesh, the ministry has grown from humble beginnings to become a significant Christian outreach covering multiple villages, television broadcasts, print media, and charitable work across India.</p>
                <p>The name "Spandana" — meaning "Heartbeat" — beautifully captures the essence of this ministry: a constant, living pulse of the Holy Spirit reaching out to touch hearts and transform lives across the Telugu-speaking world and beyond.</p>
                
                <blockquote className="border-l-2 border-[#B51657] pl-6 py-4 my-8 bg-white rounded-r-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] border border-stone-100/80 border-l-0">
                  <p className="italic font-display text-stone-800 text-lg font-light leading-relaxed">"Thank you for taking time to visit this wonderful work of the Lord in the land of India. We are sure that you will be blessed as you browse these pages and we do pray that God Holy Spirit may touch you and speak to your heart to fulfill the Savior's Heartbeat."</p>
                </blockquote>

                <p>Since its founding in 1976, the ministry has constructed churches in 12 villages, cared for 100+ orphaned children, supported countless widows, conducted evangelism crusades reaching hundreds of thousands, and published the SPANDANA magazine which blesses Telugu readers around the globe.</p>
                <p>The ministry invites all who are moved by the Spirit to partner in prayer, financial support, or active service — so that together, we can continue to fulfill the Savior's Heartbeat for India.</p>
              </div>

              {/* STATS GRID */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[{n:'40+',l:'Years of Ministry'},{n:'60+',l:'Churches Built'},{n:'700+',l:'Children Cared For'}].map(s => (
                  <div key={s.l} className="text-center p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-stone-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(181,22,87,0.04)]">
                    <div className="font-display text-3xl text-[#B51657] font-semibold">{s.n}</div>
                    <div className="text-stone-400 text-[10px] uppercase font-bold tracking-widest mt-1.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. THE MIRACLE TESTIMONY */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-stone-50/40 overflow-hidden border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <Reveal dir="left" className="lg:col-span-7 space-y-8">
              <div>
                <p className="text-[#B51657] uppercase tracking-[0.3em] font-bold text-[10px] mb-3">Deep Heritage</p>
                <h2 className="font-[Playfair_Display] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-stone-900 tracking-tight">
                  The Miraculous <span className="block italic text-[#B51657] font-light">Story</span>
                </h2>
                <p className="text-stone-400 font-display text-lg mt-3">Behind the Name</p>
              </div>
              
              <div className="space-y-6 text-stone-600 font-body text-[16px] md:text-[17px] leading-relaxed font-light">
                <p>Compassion Minister Devasahayam's name holds a profound testimony to God's goodness. At just two years old, Deva battled a life-threatening poisonous fever. His parents, having already lost their firstborn to an unknown disease, were desperate.</p>
                <p>Desperate for a miracle, Deva's parents tried every affordable medical treatment, but his condition only worsened. In anguish, they cried out to their traditional gods and goddesses, pleading for relief, yet receiving none, just as hope seemed lost.</p>
              </div>

              <div className="bg-[#B51657]/[0.02] border-l-2 border-[#B51657] p-8 md:p-10 rounded-r-2xl border border-stone-100 border-l-0 shadow-[0_4px_20px_rgba(181,22,87,0.01)]">
                <p className="italic font-display text-xl md:text-2xl text-stone-800 leading-relaxed font-light">
                  "In their darkest hour, a man of God visited, sharing the Gospel and assuring them that if they accepted Jesus and turned to God, their son would recover."
                </p>
              </div>

              <div className="pt-8 border-t border-stone-200/60">
                <h4 className="text-[#B51657] font-display text-xl font-medium mb-3">What is in a Name?</h4>
                <p className="text-stone-600 font-light leading-relaxed">
                  In gratitude, his parents named him <span className="text-stone-900 font-medium underline decoration-[#B51657] underline-offset-8">Devasahayam</span>, meaning <span className="italic text-[#B51657] font-medium">"God is my helper"</span> in Telugu language. This name serves as a constant reminder of God's divine intervention and love.
                </p>
              </div>
            </Reveal>

            <Reveal dir="right" className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-stone-200/80 p-3 bg-white shadow-[0_24px_48px_-12px_rgba(0,0,0,0.05)]">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-stone-50">
                  <Image src="/parents.webp" fill className="object-cover" alt="Parents Abraham and Saramma" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <h4 className="text-2xl font-display text-stone-900 font-medium">Abraham & Saramma</h4>
                <p className="text-[#B51657] uppercase text-[10px] tracking-[0.25em] font-bold mt-2">Deva's Parents</p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 4. MENTORSHIP & VISION SECTION */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <Reveal dir="left" className="lg:col-span-5 relative h-[500px] lg:h-[580px] overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.06)] group rounded-[2.5rem] border border-stone-100">
              <Image src="/rr.webp" fill className="object-cover object-top transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="Rev RRK Murthy" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-stone-200">Spiritual Guidance</p>
                <h3 className="font-display text-2xl md:text-3xl leading-snug text-white font-medium">Rev. RRK Murthy & <br/>Dr. Deva Dandala</h3>
              </div>
            </Reveal>

            <Reveal dir="right" className="lg:col-span-7 space-y-8 lg:pl-4">
              <div className="space-y-4">
                <h2 className="font-[Playfair_Display] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-stone-900 tracking-tight">
                  Proclaiming the <span className="block italic text-[#B51657] font-light">Good News</span>
                </h2>
                <p className="text-stone-600 text-[16px] md:text-[17px] leading-relaxed font-light pt-2">
                  Minister Deva serves as Editor and Publisher of <span className="font-semibold text-[#B51657] tracking-wide">Spandana</span>, a renowned Telugu spiritual monthly magazine, founded in 1976 by his spiritual mentor, renowned Radio Speaker Late Acharya RRK Murthy. SPANDANA inspires thousands of Telugu-speaking families every month, globally.
                </p>
              </div>

              <div className="bg-stone-50/80 p-8 md:p-10 rounded-[2rem] border border-stone-100 shadow-sm">
                <h3 className="text-xl font-display font-semibold mb-4 text-stone-900 border-b border-stone-200/60 pb-3">Personal Life and Calling</h3>
                <div className="space-y-4 text-stone-600 font-light leading-relaxed">
                  <p>At age 21, Deva received a profound vision from the Lord, revealing countless precious souls slipping into eternal darkness, unaware of the Savior who had sacrificed His life and shed precious blood on Calvary's cross.</p>
                  <p className="text-[#B51657] font-display italic text-lg bg-white p-5 rounded-xl border border-stone-200/40 shadow-[0_2px_12px_rgba(0,0,0,0.01)]">
                    This divine revelation, known as the "Vision of Golden Apples," stirred Deva's heart and soul.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 5. FAITH & FAMILY BENTO SECTION */}
      <section className="py-24 lg:py-32 bg-stone-50/60 border-t border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal dir="up" className="text-center mb-16">
            <h2 className="font-[Playfair_Display] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900">
              A Legacy of <span className="italic text-[#B51657] font-light">Faith</span>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
            {/* JOURNEY CARD */}
            <Reveal dir="left" className="lg:col-span-7 border-t-2 border-[#E7C56D] bg-white p-8 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.02)] border border-stone-100 rounded-2xl flex flex-col justify-center">
              <p className="mb-3 font-accent text-[9px] font-bold uppercase tracking-[0.3em] text-[#B51657]">Spiritual Formation</p>
              <h3 className="mb-4 font-[Playfair_Display] text-3xl font-bold tracking-tight text-stone-900">Faith Journey & Mentoring</h3>
              <p className="text-stone-600 text-[15px] md:text-[16px] leading-relaxed font-light">
                Under the guidance of renowned evangelist Acharya RRK Murthy, often referred to as the “Billy Graham of Andhra Pradesh,” Deva received invaluable training and mentorship. Deva’s father, Bro. D Abraham, a devoted man of God, prayed fervently for his family’s salvation. His tears and faithfulness blessed Deva with a personal encounter with Jesus Christ.
              </p>
            </Reveal>

            {/* LINEAGE CARD */}
            <Reveal dir="right" className="lg:col-span-5 border-t-2 border-[#B51657] bg-white p-8 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.02)] border border-stone-100 rounded-2xl flex flex-col justify-center">
              <p className="mb-3 font-accent text-[9px] font-bold uppercase tracking-[0.3em] text-[#B51657]">Family Heritage</p>
              <h3 className="mb-4 font-[Playfair_Display] text-3xl font-bold tracking-tight text-stone-900">Godly Lineage</h3>
              <p className="text-stone-600 text-[15px] md:text-[16px] leading-relaxed font-light">
                Deva comes from a godly lineage, with parents now in eternity. He and his seven siblings, including three in full-time ministry, share a deep faith in Lord Jesus Christ. Deva dedicates his life to evangelism, directing resources to ministry.
              </p>
            </Reveal>
          </div>
        </div>

        {/* LARGE FAMILY IMAGE BANNER */}
        <div className="max-w-6xl mx-auto px-6 mt-16 md:mt-20">
          <Reveal dir="up" className="overflow-hidden bg-white shadow-[0_32px_70px_rgba(0,0,0,0.06)] rounded-[2.5rem] border border-stone-100">
            <div className="overflow-hidden bg-stone-50 relative aspect-[3/2] max-h-[600px] w-full">
              <Image
                src="/family1.webp"
                fill
                className="object-cover object-center"
                alt="The Dandala Family"
                sizes="(min-width: 1200px) 1152px, 100vw"
              />
            </div>
            <div className="bg-white border-t border-stone-100">
              <div className="grid gap-4 px-8 py-10 md:grid-cols-[0.3fr_1fr] md:items-start md:p-12 lg:p-14">
                <p className="font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#B51657] pt-1">Family & Calling</p>
                <div className="border-l border-stone-200 pl-6 md:pl-10">
                  <h3 className="font-[Playfair_Display] text-3xl md:text-4xl font-bold tracking-tight text-stone-900">
                    Deva, Krupa <span className="italic text-[#B51657] font-light">& Children</span>
                  </h3>
                  <p className="mt-4 font-body text-[15px] md:text-[17px] leading-relaxed text-stone-600 font-light">
                    He and his wife, Krupa, live in India, proudly supporting their children: their son studying in the UK and Dr. Angel, serving the underprivileged with her medical skills. A family rooted in faith, service, and dedication to the Kingdom of God.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. FINAL FOOTER QUOTE */}
      <section className="py-24 lg:py-32 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-10">
             <div className="h-px w-16 bg-stone-200" />
             <div className="w-1.5 h-1.5 rounded-full bg-[#B51657]/60" />
             <div className="h-px w-16 bg-stone-200" />
          </div>
          <h3 className="text-2xl md:text-3xl font-display text-stone-900 mb-6 font-medium tracking-tight">
            Deva's parents <span className="text-[#B51657] italic font-light">Abraham & Saramma</span>
          </h3>
          <p className="text-lg md:text-2xl text-stone-500 italic leading-relaxed font-display font-light max-w-3xl mx-auto">
            "Their faith, tears, and trust in God became part of the testimony that shaped Deva’s life and calling. Their prayers and faithfulness blessed Deva with a personal encounter with Jesus Christ."
          </p>
        </div>
      </section>


    </div>
  );
}