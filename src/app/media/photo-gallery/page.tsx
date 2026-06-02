import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import MediaShowcase from '@/components/media/MediaShowcase'

export const metadata = { title: "Photo Gallery | Savior's Heartbeat Ministries" }

const galleryHeroImages = [
  { src: '/family.webp', alt: 'Ministry family' },
  { src: '/crusades (1).jpg', alt: 'Crusade ministry' },
  { src: '/children.webp', alt: 'Children ministry' },
  { src: '/out (1).webp', alt: 'Outreach ministry' },
  { src: '/GAL1.webp', alt: 'Gallery moment' },
  { src: '/family1.webp', alt: 'Ministry moments' },
  { src: '/crusades (2).jpg', alt: 'Crusade gathering' },
  { src: '/out (2).webp', alt: 'Community outreach' },
  { src: '/past.webp', alt: 'Pastors conference' },
  { src: '/food.webp', alt: 'Feeding ministry' },
]

export default function GalleryPage() {
  return (
    <div>
      {/* Continuous Image Marquee Hero */}
      <section className="relative flex min-h-[430px] w-full items-center overflow-hidden bg-zinc-950 md:min-h-[460px]">
        <div className="absolute inset-0 flex w-max animate-[boardImageMarquee_48s_linear_infinite]">
          {[...galleryHeroImages, ...galleryHeroImages].map((img, index) => (
            <div
              key={`${img.src}-${index}`}
              className="relative h-full w-[280px] shrink-0 border-r border-black/30 sm:w-[360px] md:w-[430px] lg:w-[500px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center"
                priority={index < 3}
                sizes="(max-width: 640px) 280px, (max-width: 768px) 360px, (max-width: 1024px) 430px, 500px"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-black/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,22,87,0.18),rgba(0,0,0,0.28)_58%,rgba(0,0,0,0.68)_100%)]" />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-12 pt-24 text-center">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-white/55" />
            <span className="font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-white/80">
              Media
            </span>
            <span className="h-px w-10 bg-white/55" />
          </div>
          <h1 className="mb-4 font-heading text-4xl font-semibold leading-tight text-white drop-shadow md:text-5xl lg:text-6xl">
            Photo Gallery
          </h1>
          <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-white/85">
            Moments of ministry, worship, outreach, and God&apos;s faithfulness in India
          </p>
        </div>
      </section>
      <section className="py-24 bg-ivory-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-[#B51657]/50" />
                <span className="font-accent text-[#B51657] text-[10px] tracking-[0.35em] uppercase font-bold">Gallery</span>
                <span className="h-px w-10 bg-[#B51657]/50" />
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-semibold text-onyx-950 mb-4">
                Moments of <span className="italic text-[#B51657] font-light">Grace</span>
              </h2>
              <p className="text-onyx-600 max-w-2xl mx-auto font-body text-lg leading-relaxed">
                Each photograph tells a story of transformation, faith, and God's faithfulness in India.
              </p>
            </div>
          </Reveal>
          <MediaShowcase category="gallery" />
        </div>
      </section>
    </div>
  )
}
