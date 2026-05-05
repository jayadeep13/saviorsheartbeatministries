interface Props { eyebrow?: string; title: string; subtitle?: string; imageSrc?: string; imageClassName?: string }

const DEFAULT_HERO_IMAGE = '/up.webp'

const PAGE_HERO_IMAGES: Record<string, string> = {
  'About Deva': '/SLIDE.webp',
  'Board of Directors': '/BOD1.webp',
  'Helping Hands for Children': DEFAULT_HERO_IMAGE,
  'Support Us': DEFAULT_HERO_IMAGE,
  'Support Our Mission': DEFAULT_HERO_IMAGE,
  'Prayer Support': '/pras.webp',
  'Take a Mission Trip to India': '/mt.webp',
  'Financial Partnership': '/mt.webp',
  'TV Ministries': DEFAULT_HERO_IMAGE,
  'Widows Care': '/wod.webp',
  'Books & Publications': '/GAL1.webp',
  'Photo Gallery': '/family.webp',
  'Divine Encounter': DEFAULT_HERO_IMAGE,
  'SPANDANA Magazine': DEFAULT_HERO_IMAGE,
  'Native Missionaries': DEFAULT_HERO_IMAGE,
  'Prayer Request': '/pray.webp',
  'Spiritual & Community Hubs': DEFAULT_HERO_IMAGE,
  'Preaching the Gospel': '/pre.webp',
  "Conducting Pastors' Conferences": '/past.webp',
  'Helping Pastors & Building Churches': '/chu (1).webp',
  'Orphans & Poor Children': '/children.webp',
  'Widows': '/wod.webp',
  'Odisha Outreach': '/wod1.webp',
}

export default function PageHero({ eyebrow, title, subtitle, imageSrc, imageClassName }: Props) {
  const heroImageSrc = imageSrc ?? PAGE_HERO_IMAGES[title] ?? DEFAULT_HERO_IMAGE
  const heroImageClassName = imageClassName ?? 'bg-[position:35%_center] md:bg-center'

  return (
    <div className="relative flex min-h-[360px] items-center overflow-hidden bg-[#12070c] sm:min-h-[390px] lg:min-h-[430px]">
      <div
        className={`absolute inset-0 bg-cover ${heroImageClassName}`}
        style={{ backgroundImage: `url(${heroImageSrc})` }}
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 mx-auto max-w-4xl px-5 pb-12 pt-28 text-center sm:px-6 sm:pb-14 lg:pt-24">
        {eyebrow && (
          <div className="mb-4 inline-flex items-center gap-3 sm:mb-5">
            <span className="h-px w-8 bg-[#E9A5BB]/70 sm:w-10" />
            <span className="font-accent text-[9px] uppercase tracking-[0.3em] text-white sm:text-[10px] sm:tracking-[0.35em]">{eyebrow}</span>
            <span className="h-px w-8 bg-[#E9A5BB]/70 sm:w-10" />
          </div>
        )}
        <h1 className="mb-3 font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mx-auto max-w-2xl font-body text-sm leading-relaxed text-white/75 sm:text-base md:text-lg">{subtitle}</p>}
      </div>
    </div>
  )
}
