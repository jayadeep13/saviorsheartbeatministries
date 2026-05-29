'use client'

import Image from 'next/image'
import Reveal from '../ui/Reveal'

type Img = { src: string; pos: string; alt: string }

const items = [
  {
    number: '01',
    label: 'Gospel Outreach',
    title: 'Preaching the Good News of Lord Jesus Christ',
    desc: 'Proclaiming the life-changing message of Jesus Christ through crusades, village outreach, and faithful Gospel witness — reaching tens of thousands across cities and villages of India.',
    verse: '"Go into all the world and preach the gospel to every creature."',
    ref: 'Mark 16:15',
    images: [
      { src: '/prea.png', pos: 'center 20%', alt: 'Gospel crusade gathering' },
      { src: '/prcg.png',           pos: 'center 20%', alt: 'Large crusade crowd' },
    ] as Img[],
  },
  {
    number: '02',
    label: 'Pastoral Training',
    title: 'Training, Legal Aid & Support for Rural Pastors',
    desc: 'Equipping rural pastors with training conferences, legal aid, and ongoing care — strengthening local churches across remote and underserved regions of India.',
    verse: '"Commit these to faithful men who will be able to teach others also."',
    ref: '2 Timothy 2:2',
    images: [
      { src: '/pas3.jpg', pos: 'center 22%', alt: 'Pastors conference' },
    ] as Img[],
  },
  {
    number: '03',
    label: "Children's Care",
    title: "Shaping Young Orphaned & Underprivileged Futures for God's Glory",
    desc: "Providing orphaned and poor children with education, daily care, spiritual nurture, and a loving community — giving every child a future shaped by God's grace.",
    verse: '"Whoever receives one such child in My name receives Me."',
    ref: 'Matthew 18:5',
    images: [
      { src: '/children.webp', pos: 'center 25%', alt: 'Children ministry' },
      { src: '/chii.png',    pos: 'center 30%', alt: 'Child care program' },
    ] as Img[],
  },
  {
    number: '04',
    label: 'Widows Ministry',
    title: 'Supporting Widowed Mothers & Empowering Them as Prayer Warriors',
    desc: 'Honoring widowed mothers with dignity, provision, and community — raising them as faithful prayer warriors for the Kingdom, like little mother Teresas serving in His grace.',
    verse: '"Pure religion is to care for orphans and widows in their distress."',
    ref: 'James 1:27',
    images: [
      { src: '/WID1.webp', pos: 'center 28%', alt: 'Widows care ministry' },
      { src: '/wod.webp',  pos: 'center 30%', alt: 'Widow supported' },
      { src: '/wod1.webp', pos: 'center 25%', alt: 'Widows gathering' },
    ] as Img[],
  },
  {
    number: '05',
    label: 'Homeless Feeding',
    title: 'Serving the Least of These — Feeding the Homeless with Love & Nutrition',
    desc: 'Serving the homeless with nutritious food and the love of Christ — because every person bears the image of God. What we do to the least of these, we do unto Him.',
    verse: '"As you did it to the least of these My brethren, you did it to Me."',
    ref: 'Matthew 25:40',
    images: [
      { src: '/food.webp',  pos: 'center 40%', alt: 'Food distribution ministry' },
      { src: '/ser.jpg',  pos: 'center 35%', alt: 'People receiving food' },
    ] as Img[],
  },
  {
    number: '06',
    label: 'Disaster Relief',
    title: 'Emergency Relief & Compassion to Disaster Survivors',
    desc: 'Delivering emergency relief, comfort, and the hope of Christ to disaster survivors — meeting urgent needs in His name and bringing restoration into the most broken places.',
    verse: '"Share your bread with the hungry and shelter the homeless poor."',
    ref: 'Isaiah 58:7',
    images: [
      { src: '/out (1).webp', pos: 'center 30%', alt: 'Disaster relief outreach' },
      { src: '/saaa.jpg',     pos: 'center 28%', alt: 'Field relief ministry' },
      { src: '/man.jpg',     pos: 'center 32%', alt: 'Community relief work' },
    ] as Img[],
  },
]

/* ── 3D tilt helpers ── */
function tiltOn(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const x = ((e.clientX - r.left) / r.width  - 0.5) * 18
  const y = ((e.clientY - r.top)  / r.height - 0.5) * -12
  el.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) scale3d(1.03,1.03,1.03)`
  el.style.boxShadow = `0 30px 70px rgba(181,22,87,0.18), 0 8px 24px rgba(17,22,46,0.10)`
}
function tiltOff(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)'
  e.currentTarget.style.boxShadow = ''
}

function ImgCard({ img, sizes }: { img: Img; sizes: string }) {
  return (
    <div
      onMouseMove={tiltOn}
      onMouseLeave={tiltOff}
      className="group relative overflow-hidden rounded-3xl shadow-[0_16px_48px_rgba(17,22,46,0.10)] cursor-pointer"
      style={{ transition: 'transform 0.20s ease, box-shadow 0.30s ease', transformStyle: 'preserve-3d' }}
    >
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={img.src} alt={img.alt} fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
          style={{ objectPosition: img.pos }}
          sizes={sizes}
        />
        {/* Light warm overlay — NOT dark */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3D1020]/50 via-transparent to-transparent" />
        {/* Pink shimmer on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(181,22,87,0.22) 0%, transparent 65%)' }} />
        {/* Glowing border on hover */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#B51657]/30 transition-colors duration-400" />
      </div>
    </div>
  )
}

function ImageGrid({ images }: { images: Img[] }) {
  if (images.length === 1) {
    return (
      <div
        onMouseMove={tiltOn}
        onMouseLeave={tiltOff}
        className="group relative overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(17,22,46,0.12)] cursor-pointer"
        style={{ transition: 'transform 0.20s ease, box-shadow 0.30s ease', transformStyle: 'preserve-3d' }}
      >
        <div className="relative w-full aspect-[16/9]">
          <Image src={images[0].src} alt={images[0].alt} fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            style={{ objectPosition: images[0].pos }}
            sizes="(min-width:1024px) 960px, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D1020]/45 via-transparent to-transparent" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(181,22,87,0.20) 0%, transparent 60%)' }} />
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#B51657]/25 transition-colors duration-400" />
        </div>
      </div>
    )
  }
  if (images.length === 2) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {images.map((img, i) => <ImgCard key={i} img={img} sizes="(min-width:640px) 50vw, 100vw" />)}
      </div>
    )
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {images.map((img, i) => <ImgCard key={i} img={img} sizes="(min-width:640px) 33vw, 100vw" />)}
    </div>
  )
}

export default function HeartbeatFocus() {
  return (
    <>
      <style>{`
        @keyframes orbDriftA {
          0%,100%{ transform:translate(0,0) scale(1); }
          40%    { transform:translate(40px,-30px) scale(1.08); }
          70%    { transform:translate(-20px,20px) scale(0.96); }
        }
        @keyframes orbDriftB {
          0%,100%{ transform:translate(0,0) scale(1); }
          35%    { transform:translate(-35px,25px) scale(1.06); }
          70%    { transform:translate(25px,-15px) scale(0.97); }
        }
        @keyframes floatNum {
          0%,100%{ transform:translateY(0px) rotate(-3deg); }
          50%    { transform:translateY(-10px) rotate(-3deg); }
        }
        @keyframes shimmerLine {
          0%   { background-position:-200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes versePulse {
          0%,100%{ box-shadow:0 8px 32px rgba(181,22,87,0.08); }
          50%    { box-shadow:0 16px 48px rgba(181,22,87,0.16); }
        }
        @keyframes particleUp {
          0%  { transform:translateY(0) scale(1);   opacity:0.8; }
          100%{ transform:translateY(-80px) scale(0); opacity:0; }
        }
        .orb-a  { animation:orbDriftA 14s ease-in-out infinite; }
        .orb-b  { animation:orbDriftB 18s ease-in-out infinite; }
        .float-num { animation:floatNum 5s ease-in-out infinite; }
        .verse-card{ animation:versePulse 4s ease-in-out infinite; }
        .shimmer-div{
          background:linear-gradient(90deg,transparent,#B51657,#E8527A,#B51657,transparent);
          background-size:200% auto;
          animation:shimmerLine 3s linear infinite;
        }
        .ptcl{ animation:particleUp 4s ease-out infinite; position:absolute; border-radius:50%; }
        .ptcl:nth-child(1){ left:5%;  bottom:0; width:5px; height:5px; animation-delay:0s;   }
        .ptcl:nth-child(2){ left:20%; bottom:0; width:3px; height:3px; animation-delay:0.8s; }
        .ptcl:nth-child(3){ left:50%; bottom:0; width:6px; height:6px; animation-delay:1.6s; }
        .ptcl:nth-child(4){ left:75%; bottom:0; width:4px; height:4px; animation-delay:2.4s; }
        .ptcl:nth-child(5){ left:90%; bottom:0; width:3px; height:3px; animation-delay:3.2s; }
      `}</style>

      <section className="relative overflow-hidden bg-[#FAF8F5]">

        {/* ── SECTION HEADER ── */}
        <div className="relative overflow-hidden">
          {/* Drifting orbs behind header */}
          <div className="orb-a absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(181,22,87,0.09) 0%, transparent 70%)' }} />
          <div className="orb-b absolute -top-10 -right-20 w-[360px] h-[360px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(181,22,87,0.06) 0%, transparent 70%)' }} />

          <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full border border-[#B51657]/25 bg-white shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B51657] animate-pulse" />
                <span className="font-accent text-[10px] font-bold uppercase tracking-[0.45em] text-[#B51657]">
                  Savior&apos;s Heartbeat · Ministry Focus
                </span>
              </div>
              <h2 className="font-[Playfair_Display] text-4xl md:text-5xl lg:text-[52px] font-semibold leading-[1.15] text-[#11162E] tracking-tight mb-3">
                What is the{' '}
                <span className="italic font-medium text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg,#B51657 0%,#D6226E 60%,#B51657 100%)' }}>
                  Heartbeat
                </span>{' '}
                of the Savior?
              </h2>
              <p className="font-body text-base md:text-lg text-[#30375F]/60 mb-5">
                What we do — six areas of ministry, one mission.
              </p>
              {/* Animated shimmer divider */}
              <div className="shimmer-div h-px w-24 mx-auto rounded-full" />
            </Reveal>
          </div>
        </div>

        {/* ── MINISTRY ITEMS ── */}
        {items.map((item, index) => (
          <div key={item.number} className="relative overflow-hidden">

            {/* Section background — alternating warm tones */}
            <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-white' : 'bg-[#FDF6F9]'}`} />

            {/* Drifting background orbs per section */}
            <div className={`${index % 2 === 0 ? 'orb-a' : 'orb-b'} absolute pointer-events-none`}
              style={{
                width: 350, height: 350, borderRadius: '50%',
                top: '-10%', right: index % 2 === 0 ? '-5%' : 'auto', left: index % 2 === 1 ? '-5%' : 'auto',
                background: 'radial-gradient(circle, rgba(181,22,87,0.06) 0%, transparent 70%)',
              }} />

            {/* Top shimmer divider */}
            <div className="absolute top-0 inset-x-0 h-px shimmer-div opacity-30" />

            {/* Floating particles */}
            <div className="absolute bottom-0 inset-x-0 h-20 pointer-events-none overflow-hidden">
              {[1,2,3,4,5].map(i => (
                <span key={i} className="ptcl"
                  style={{ background: i%2===0 ? 'rgba(181,22,87,0.25)' : 'rgba(181,22,87,0.15)' }} />
              ))}
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-20">
              <Reveal>

                {/* ── HEADING ROW ── */}
                <div className="flex items-start gap-5 mb-10">
                  {/* Floating large number */}
                  <span
                    className="float-num shrink-0 font-[Playfair_Display] text-[72px] md:text-[90px] font-extralight leading-none select-none"
                    style={{ color: 'rgba(181,22,87,0.12)' }}>
                    {item.number}
                  </span>
                  <div className="pt-3">
                    {/* Label pill */}
                    <div className="inline-flex items-center gap-2 mb-3 rounded-full px-4 py-1.5"
                      style={{ background: 'linear-gradient(135deg,#B51657,#D6226E)', boxShadow: '0 8px 24px rgba(181,22,87,0.25)' }}>
                      <span className="h-1 w-1 rounded-full bg-white/70" />
                      <span className="font-accent text-[9px] font-bold uppercase tracking-[0.3em] text-white">
                        {item.label}
                      </span>
                    </div>
                    {/* Title */}
                    <h3 className="font-[Playfair_Display] text-2xl md:text-3xl lg:text-[34px] font-semibold leading-[1.2] text-[#11162E]">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* ── IMAGES ── */}
                <div className="mb-10">
                  <ImageGrid images={item.images} />
                </div>

                {/* ── DESCRIPTION + VERSE ── */}
                <div className="grid md:grid-cols-[1fr_300px] gap-8 items-start">

                  {/* Description */}
                  <div>
                    <div className="shimmer-div h-px w-10 mb-5 rounded-full" />
                    <p className="font-body text-[16px] md:text-[17px] leading-[1.9] text-[#30375F]/75">
                      {item.desc}
                    </p>
                  </div>

                  {/* Verse card */}
                  <div className="verse-card rounded-2xl border border-[#F0D4E0] px-6 py-5"
                    style={{ background: 'linear-gradient(135deg, #FFF5F8 0%, #FEF0F5 100%)' }}>
                    <span className="font-serif text-5xl leading-none text-[#B51657]/20 select-none block mb-2">
                      &ldquo;
                    </span>
                    <p className="font-[Playfair_Display] text-[15px] italic text-[#11162E]/70 leading-relaxed mb-3">
                      {item.verse}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="h-px flex-1 bg-gradient-to-r from-[#B51657]/30 to-transparent" />
                      <cite className="font-accent text-[10px] font-bold uppercase tracking-[0.25em] text-[#B51657] not-italic shrink-0">
                        {item.ref}
                      </cite>
                    </div>
                  </div>

                </div>
              </Reveal>
            </div>
          </div>
        ))}

      </section>
    </>
  )
}
