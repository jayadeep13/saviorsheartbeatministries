'use client'

import Image from 'next/image'
import Reveal from '../ui/Reveal'

const items = [
  {
    number: '01',
    label: 'Gospel Outreach',
    title: 'Preaching the Good News of Lord Jesus Christ',
    desc: 'Proclaiming the life-changing message of Jesus through crusades, village outreach, and faithful Gospel witness across India.',
    image: '/crusades (1).jpg',
    pos: 'center 20%',
    col: 'lg:col-span-2',
    height: 'h-[500px] lg:h-[560px]',
  },
  {
    number: '02',
    label: 'Pastoral Training',
    title: 'Training, Legal Aid & Support for Rural Pastors',
    desc: 'Equipping and strengthening rural pastors with training, legal aid, and ongoing care for their mission.',
    image: '/past.webp',
    pos: 'center 22%',
    col: 'lg:col-span-1',
    height: 'h-[500px] lg:h-[560px]',
  },
  {
    number: '03',
    label: "Children's Care",
    title: "Shaping Young Futures for God's Glory",
    desc: 'Providing orphaned and poor children with education, care, love, and a God-shaped future.',
    image: '/children.webp',
    pos: 'center 25%',
    col: 'lg:col-span-1',
    height: 'h-[440px] lg:h-[480px]',
  },
  {
    number: '04',
    label: 'Widows Ministry',
    title: 'Supporting Widowed Mothers as Prayer Warriors',
    desc: 'Honoring widows with dignity and empowering them as faithful little mother Teresas of the Kingdom.',
    image: '/WID1.webp',
    pos: 'center 28%',
    col: 'lg:col-span-1',
    height: 'h-[440px] lg:h-[480px]',
  },
  {
    number: '05',
    label: 'Homeless Feeding',
    title: 'Feeding the Homeless with Love & Nutrition',
    desc: 'Serving the least of these — because what we do unto them, we do unto Christ. Matthew 25:40.',
    image: '/food.webp',
    pos: 'center 40%',
    col: 'lg:col-span-1',
    height: 'h-[440px] lg:h-[480px]',
  },
  {
    number: '06',
    label: 'Disaster Relief',
    title: 'Emergency Relief & Compassion to Disaster Survivors',
    desc: 'Delivering urgent relief, restoration, and the hope of Christ into the most broken places — in His name.',
    image: '/out (1).webp',
    pos: 'center 30%',
    col: 'lg:col-span-3',
    height: 'h-[340px] lg:h-[380px]',
  },
]

function Card({ item, delay = 0 }: { item: typeof items[0]; delay?: number }) {
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 14
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -10
    el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) scale3d(1.025,1.025,1.025)`
  }
  function onLeave(e: React.MouseEvent<HTMLDivElement>) {
    e.currentTarget.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)'
  }

  return (
    <Reveal delay={delay}>
      <div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`group relative overflow-hidden rounded-2xl cursor-pointer ${item.height}`}
        style={{ transition: 'transform 0.18s ease, box-shadow 0.35s ease', transformStyle: 'preserve-3d' }}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-108"
          style={{ objectPosition: item.pos }}
          sizes="(min-width:1024px) 50vw, 100vw"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05060F]/96 via-[#05060F]/45 to-transparent" />

        {/* Hover pink radial glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 90%, rgba(181,22,87,0.30) 0%, transparent 60%)' }} />

        {/* Border */}
        <div className="absolute inset-0 rounded-2xl border border-white/8 group-hover:border-[#B51657]/50 transition-colors duration-500" />

        {/* Watermark number */}
        <div className="absolute top-5 right-6 font-[Playfair_Display] text-[80px] font-extralight leading-none text-white/06 select-none group-hover:text-white/12 transition-colors duration-500">
          {item.number}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-7 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
          <div className="inline-flex items-center gap-2 mb-3 bg-[#B51657] px-3 py-1 rounded-full">
            <span className="h-1 w-1 rounded-full bg-white/70" />
            <span className="font-accent text-[9px] font-bold uppercase tracking-[0.3em] text-white">
              {item.label}
            </span>
          </div>
          <h3 className="font-[Playfair_Display] text-xl md:text-2xl font-semibold text-white leading-tight mb-2">
            {item.title}
          </h3>
          <p className="font-body text-[13px] leading-relaxed text-white/60 max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-out">
            {item.desc}
          </p>
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-14 h-14 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-0 left-0 w-px h-10 bg-gradient-to-b from-[#B51657] to-transparent" />
          <div className="absolute top-0 left-0 h-px w-10 bg-gradient-to-r from-[#B51657] to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 w-14 h-14 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-px h-10 bg-gradient-to-t from-[#B51657] to-transparent" />
          <div className="absolute bottom-0 right-0 h-px w-10 bg-gradient-to-l from-[#B51657] to-transparent" />
        </div>
      </div>
    </Reveal>
  )
}

export default function HeartbeatFocus() {
  return (
    <>
      <style>{`
        @keyframes driftA {
          0%,100% { transform: translate(0px,0px) scale(1); }
          33%      { transform: translate(30px,-20px) scale(1.05); }
          66%      { transform: translate(-20px,15px) scale(0.97); }
        }
        @keyframes driftB {
          0%,100% { transform: translate(0px,0px) scale(1); }
          40%      { transform: translate(-25px,20px) scale(1.04); }
          70%      { transform: translate(20px,-15px) scale(0.98); }
        }
        @keyframes shimmerBg {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floatParticle {
          0%   { transform: translateY(0px) translateX(0px); opacity:0; }
          20%  { opacity: 0.7; }
          80%  { opacity: 0.3; }
          100% { transform: translateY(-120px) translateX(20px); opacity:0; }
        }
        .drift-a { animation: driftA 12s ease-in-out infinite; }
        .drift-b { animation: driftB 15s ease-in-out infinite; }
        .shimmer-bg {
          background: linear-gradient(270deg,#FAF8F5,#FDF0F5,#FAF8F5,#F5EFF8);
          background-size: 400% 400%;
          animation: shimmerBg 10s ease infinite;
        }
        .fp { animation: floatParticle 6s ease-out infinite; position:absolute; border-radius:50%; }
        .fp:nth-child(1){ animation-delay:0s;   left:10%; bottom:10%; width:6px; height:6px; }
        .fp:nth-child(2){ animation-delay:1.2s; left:25%; bottom:5%;  width:4px; height:4px; }
        .fp:nth-child(3){ animation-delay:2.4s; left:50%; bottom:8%;  width:7px; height:7px; }
        .fp:nth-child(4){ animation-delay:3.6s; left:70%; bottom:4%;  width:4px; height:4px; }
        .fp:nth-child(5){ animation-delay:4.8s; left:85%; bottom:9%;  width:5px; height:5px; }
        .group-hover\\:scale-108:hover { transform: scale(1.08); }
      `}</style>

      <section className="relative overflow-hidden py-20 md:py-28">

        {/* ── Animated shimmer background ── */}
        <div className="shimmer-bg absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(#B51657_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.025]" />

        {/* ── Large drifting glow orbs (behind everything) ── */}
        <div className="drift-a absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(181,22,87,0.09) 0%, transparent 65%)' }} />
        <div className="drift-b absolute bottom-[-15%] right-[-8%] w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(181,22,87,0.07) 0%, transparent 65%)' }} />

        {/* ── Floating particles ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[1,2,3,4,5].map(i => (
            <span key={i} className="fp"
              style={{ background: i%2===0 ? 'rgba(181,22,87,0.35)' : 'rgba(181,22,87,0.20)' }} />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* ── HEADER ── */}
          <Reveal>
            <div className="text-center mb-16 md:mb-20">

              <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full border border-[#B51657]/25 bg-white shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B51657] animate-pulse" />
                <span className="font-accent text-[10px] font-bold uppercase tracking-[0.45em] text-[#B51657]">
                  Savior&apos;s Heartbeat · Ministry Focus
                </span>
              </div>

              {/* Single-line professional heading */}
              <h2 className="font-[Playfair_Display] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold leading-[1.15] text-[#11162E] tracking-tight mb-3">
                What is the{' '}
                <span className="italic font-medium text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg,#B51657 0%,#D6226E 60%,#B51657 100%)' }}>
                  Heartbeat
                </span>{' '}
                of the Savior?
              </h2>

              <p className="font-body text-base md:text-lg text-[#30375F]/60 mb-2">
                What we do — six areas of ministry, one mission.
              </p>

              <div className="w-14 h-px mx-auto mt-4"
                style={{ background: 'linear-gradient(90deg,transparent,#B51657,transparent)' }} />
            </div>
          </Reveal>

          {/* ── BENTO GRID ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, i) => (
              <div key={item.number} className={item.col}>
                <Card item={item} delay={i * 80} />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
