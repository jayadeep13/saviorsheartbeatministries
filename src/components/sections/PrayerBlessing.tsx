'use client'

import Image from 'next/image'
import Reveal from '../ui/Reveal'

export default function PrayerBlessing() {
  return (
    <>
      <style>{`
        @keyframes shimmerText {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 40px rgba(181,22,87,0.15), 0 0 80px rgba(247,223,163,0.06); }
          50%       { box-shadow: 0 0 70px rgba(181,22,87,0.30), 0 0 140px rgba(247,223,163,0.14); }
        }
        @keyframes floatVerse {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes particleRise {
          0%   { transform: translateY(0px);   opacity: 0.9; }
          100% { transform: translateY(-70px); opacity: 0; }
        }
        /* Corner ray pulse */
        @keyframes rayFade {
          0%, 100% { opacity: 0.18; transform: scaleX(1); }
          50%       { opacity: 0.55; transform: scaleX(1.06); }
        }
        @keyframes cornerGlow {
          0%, 100% { opacity: 0.30; }
          50%       { opacity: 0.70; }
        }
        /* Section side glow sweep */
        @keyframes sideSweep {
          0%, 100% { opacity: 0.25; transform: scaleY(1); }
          50%       { opacity: 0.55; transform: scaleY(1.04); }
        }
        .shimmer-gold {
          background: linear-gradient(90deg, #F7DFA3 0%, #fff 40%, #F7DFA3 60%, #C9A96E 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerText 5s linear infinite;
        }
        .img-glow    { animation: glowPulse   4s ease-in-out infinite; }
        .float-verse { animation: floatVerse  5s ease-in-out infinite; }
        .particle    { animation: particleRise 2.8s ease-out infinite; position: absolute; bottom: 0; border-radius: 50%; }
        .particle:nth-child(1) { animation-delay: 0s;   left: 10%; width:5px; height:5px; }
        .particle:nth-child(2) { animation-delay: 0.6s; left: 26%; width:4px; height:4px; }
        .particle:nth-child(3) { animation-delay: 1.2s; left: 46%; width:6px; height:6px; }
        .particle:nth-child(4) { animation-delay: 1.8s; left: 66%; width:4px; height:4px; }
        .particle:nth-child(5) { animation-delay: 2.4s; left: 83%; width:5px; height:5px; }

        /* Corner ray lines */
        .c-ray { position: absolute; border-radius: 2px; animation: rayFade 3s ease-in-out infinite; transform-origin: 0% 50%; }
        .c-glow { animation: cornerGlow 3s ease-in-out infinite; }
        .side-glow { animation: sideSweep 4s ease-in-out infinite; }

        /* stagger delays */
        .c-ray:nth-child(1)  { animation-delay: 0s; }
        .c-ray:nth-child(2)  { animation-delay: 0.4s; }
        .c-ray:nth-child(3)  { animation-delay: 0.8s; }
        .c-ray:nth-child(4)  { animation-delay: 1.2s; }
        .c-ray:nth-child(5)  { animation-delay: 1.6s; }
      `}</style>

      <section className="relative overflow-hidden bg-[#05060F] py-10 md:py-14">

        {/* Starfield */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0D1030_0%,#05060F_60%)]" />
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px,transparent 1px)', backgroundSize: '50px 50px' }} />

        {/* ── REALISTIC CORNER RAYS ── */}

        {/* Top-left — pink burst */}
        <div className="absolute top-0 left-0 pointer-events-none overflow-hidden" style={{ width: 320, height: 320 }}>
          {/* Conic glow */}
          <div className="c-glow absolute top-0 left-0 w-48 h-48"
            style={{ background: 'conic-gradient(from 0deg at 0% 0%, rgba(181,22,87,0.40) 0deg, transparent 90deg)', borderRadius:'0 0 100% 0' }} />
          {/* 8 rays fanning from corner */}
          {[5,18,32,46,60,74,85,94].map((deg, i) => (
            <div key={i} className="c-ray absolute top-0 left-0"
              style={{
                width: 260 - i * 22,
                height: i < 3 ? 3 : i < 6 ? 2 : 1,
                background: `linear-gradient(to right, rgba(181,22,87,${0.85 - i*0.09}), rgba(181,22,87,0.1), transparent)`,
                transform: `rotate(${deg}deg)`,
                animationDelay: `${i * 0.28}s`,
                boxShadow: i < 4 ? '0 0 6px rgba(181,22,87,0.4)' : 'none',
              }} />
          ))}
        </div>

        {/* Top-right — gold burst */}
        <div className="absolute top-0 right-0 pointer-events-none overflow-hidden" style={{ width: 320, height: 320 }}>
          <div className="c-glow absolute top-0 right-0 w-48 h-48"
            style={{ background: 'conic-gradient(from 270deg at 100% 0%, rgba(247,223,163,0.35) 0deg, transparent 90deg)', borderRadius:'0 0 0 100%' }} />
          {[175,162,148,134,120,106,95,86].map((deg, i) => (
            <div key={i} className="c-ray absolute top-0 right-0"
              style={{
                width: 260 - i * 22,
                height: i < 3 ? 3 : i < 6 ? 2 : 1,
                background: `linear-gradient(to left, rgba(247,223,163,${0.80 - i*0.08}), rgba(247,223,163,0.1), transparent)`,
                transform: `rotate(${deg}deg)`,
                transformOrigin: '100% 50%',
                animationDelay: `${i * 0.28}s`,
                boxShadow: i < 4 ? '0 0 6px rgba(247,223,163,0.35)' : 'none',
              }} />
          ))}
        </div>

        {/* Bottom-left — pink burst */}
        <div className="absolute bottom-0 left-0 pointer-events-none overflow-hidden" style={{ width: 280, height: 280 }}>
          <div className="c-glow absolute bottom-0 left-0 w-40 h-40"
            style={{ background: 'conic-gradient(from 90deg at 0% 100%, rgba(181,22,87,0.30) 0deg, transparent 90deg)', borderRadius:'0 100% 0 0' }} />
          {[-5,-18,-32,-46,-60,-72,-83].map((deg, i) => (
            <div key={i} className="c-ray absolute bottom-0 left-0"
              style={{
                width: 220 - i * 20,
                height: i < 3 ? 2.5 : i < 5 ? 1.5 : 1,
                background: `linear-gradient(to right, rgba(181,22,87,${0.75 - i*0.09}), transparent)`,
                transform: `rotate(${deg}deg)`,
                transformOrigin: '0% 50%',
                animationDelay: `${i * 0.28 + 0.8}s`,
                boxShadow: i < 3 ? '0 0 5px rgba(181,22,87,0.35)' : 'none',
              }} />
          ))}
        </div>

        {/* Bottom-right — gold burst */}
        <div className="absolute bottom-0 right-0 pointer-events-none overflow-hidden" style={{ width: 280, height: 280 }}>
          <div className="c-glow absolute bottom-0 right-0 w-40 h-40"
            style={{ background: 'conic-gradient(from 180deg at 100% 100%, rgba(247,223,163,0.28) 0deg, transparent 90deg)', borderRadius:'100% 0 0 0' }} />
          {[185,198,212,226,240,252,263].map((deg, i) => (
            <div key={i} className="c-ray absolute bottom-0 right-0"
              style={{
                width: 220 - i * 20,
                height: i < 3 ? 2.5 : i < 5 ? 1.5 : 1,
                background: `linear-gradient(to left, rgba(247,223,163,${0.70 - i*0.08}), transparent)`,
                transform: `rotate(${deg}deg)`,
                transformOrigin: '100% 50%',
                animationDelay: `${i * 0.28 + 0.8}s`,
                boxShadow: i < 3 ? '0 0 5px rgba(247,223,163,0.30)' : 'none',
              }} />
          ))}
        </div>

        {/* Side edge glows — thicker & brighter */}
        <div className="side-glow absolute left-0 top-1/5 bottom-1/5 w-[3px] pointer-events-none"
          style={{ background: 'linear-gradient(to bottom,transparent,rgba(181,22,87,0.70),transparent)', boxShadow:'0 0 12px rgba(181,22,87,0.40)' }} />
        <div className="side-glow absolute right-0 top-1/5 bottom-1/5 w-[3px] pointer-events-none"
          style={{ background: 'linear-gradient(to bottom,transparent,rgba(247,223,163,0.55),transparent)', boxShadow:'0 0 12px rgba(247,223,163,0.30)', animationDelay:'2s' }} />

        <div className="relative z-10 mx-auto max-w-5xl px-6">

          {/* Eyebrow */}
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#B51657]/60" />
              <span className="font-accent text-[10px] font-bold uppercase tracking-[0.45em] text-[#B51657]">
                A Pastoral Blessing
              </span>
              <span className="h-px w-10 bg-[#B51657]/60" />
            </div>
          </Reveal>

          {/* IMAGE — wide */}
          <Reveal>
            <div className="relative w-full img-glow rounded-2xl overflow-hidden mb-3"
              style={{ border: '1px solid rgba(247,223,163,0.18)' }}>

              {/* IMAGE CORNER RAYS (inside image frame) */}

              {/* Image top-left */}
              <div className="absolute top-0 left-0 z-10 pointer-events-none" style={{ width: 160, height: 160 }}>
                <div className="c-glow absolute top-0 left-0 w-20 h-20 rounded-full"
                  style={{ background: 'radial-gradient(circle at 0% 0%, rgba(247,223,163,0.28) 0%, transparent 70%)' }} />
                {[0,22,44,66].map((deg, i) => (
                  <div key={i} className="c-ray absolute top-0 left-0 h-[1px]"
                    style={{
                      width: 120 - i * 20,
                      background: `linear-gradient(to right, rgba(247,223,163,${0.65 - i*0.12}), transparent)`,
                      transform: `rotate(${deg}deg)`,
                      animationDelay: `${i * 0.3}s`,
                    }} />
                ))}
              </div>

              {/* Image top-right */}
              <div className="absolute top-0 right-0 z-10 pointer-events-none" style={{ width: 160, height: 160 }}>
                <div className="c-glow absolute top-0 right-0 w-20 h-20 rounded-full"
                  style={{ background: 'radial-gradient(circle at 100% 0%, rgba(247,223,163,0.22) 0%, transparent 70%)' }} />
                {[180,158,136,114].map((deg, i) => (
                  <div key={i} className="c-ray absolute top-0 right-0 h-[1px]"
                    style={{
                      width: 120 - i * 20,
                      background: `linear-gradient(to left, rgba(247,223,163,${0.55 - i*0.10}), transparent)`,
                      transform: `rotate(${deg}deg)`,
                      transformOrigin: '100% 50%',
                      animationDelay: `${i * 0.3 + 0.6}s`,
                    }} />
                ))}
              </div>

              {/* Image */}
              <div className="relative w-full" style={{ paddingBottom: '52%' }}>
                <Image
                  src="/prayertime.png"
                  alt="Pastor praying with raised hands"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 18%' }}
                  sizes="(min-width:1024px) 960px, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060F]/85 via-[#05060F]/15 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#05060F]/35 via-transparent to-[#05060F]/35" />
              </div>

              {/* Particles */}
              <div className="absolute bottom-0 inset-x-0 pointer-events-none" style={{ height: 70 }}>
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="particle"
                    style={{ background: i % 2 === 0 ? 'rgba(247,223,163,0.55)' : 'rgba(181,22,87,0.45)' }} />
                ))}
              </div>
            </div>
          </Reveal>

          {/* VERSE */}
          <Reveal>
            <div className="float-verse text-center max-w-3xl mx-auto pt-4">

              <div className="font-serif text-8xl leading-none text-[#F7DFA3]/20 select-none mb-[-20px]">
                &ldquo;
              </div>

              <blockquote className="px-4">
                <p className="font-[Playfair_Display] text-xl sm:text-2xl md:text-3xl font-light leading-[1.75] text-white mb-6">
                  The Lord bless you and keep you;{' '}
                  <span className="shimmer-gold font-semibold">
                    the Lord make His face shine on you and be gracious to you;
                  </span>{' '}
                  the Lord turn His face toward you and give you{' '}
                  <em className="font-semibold text-[#F7DFA3]">peace.</em>
                </p>

                <cite className="not-italic flex items-center justify-center gap-4 mb-6">
                  <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#B51657]/60" />
                
                  <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#B51657]/60" />
                </cite>
              </blockquote>

              <p className="font-body text-[13px] leading-[1.85] text-white/60 max-w-lg mx-auto mb-7">
                This is our prayer over every soul who encounters this ministry — that the face of God would shine upon you, and His peace would rest upon your home.
              </p>

              <div className="flex items-center justify-center gap-2.5">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#B51657]/40" />
                {[1,2,3].map(i => (
                  <span key={i} className="block rounded-full"
                    style={{ width: i===2?8:5, height: i===2?8:5,
                      background: i===2 ? '#B51657' : 'rgba(247,223,163,0.30)' }} />
                ))}
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#B51657]/40" />
              </div>

              <p className="mt-4 font-accent text-[9px] uppercase tracking-[0.4em] text-white/40">
                Savior&apos;s Heartbeat Ministries
              </p>
            </div>
          </Reveal>

        </div>
      </section>
    </>
  )
}
