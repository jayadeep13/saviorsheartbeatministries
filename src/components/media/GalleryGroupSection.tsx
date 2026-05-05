'use client'

import { useEffect, useState } from 'react'

type GalleryGroup = 'odisha-state-outreach' | 'children' | 'with-pastors' | 'widows' | 'others'

type MediaItem = {
  id: string
  category: 'gallery' | 'books'
  galleryGroup?: GalleryGroup
  title: string
  src?: string
  createdAt: string
}

type GalleryGroupSectionProps = {
  group: GalleryGroup
  eyebrow: string
  title: string
  subtitle: string
  showImageTitles?: boolean
}

export default function GalleryGroupSection({
  group,
  eyebrow,
  title,
  subtitle,
  showImageTitles = true,
}: GalleryGroupSectionProps) {
  const [items, setItems] = useState<MediaItem[]>([])
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState<MediaItem | null>(null)

  useEffect(() => {
    let alive = true

    fetch('/api/media?category=gallery', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        if (!alive) return
        const groupItems = (data.items || []).filter((item: MediaItem) => item.galleryGroup === group && item.src)
        setItems(groupItems)
      })
      .finally(() => {
        if (alive) setLoading(false)
      })

    return () => {
      alive = false
    }
  }, [group])

  return (
    <section className="bg-[#FBF7F1] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-[#B51657]">
            {eyebrow}
          </p>
          <h2 className="font-[Playfair_Display] text-4xl font-semibold leading-tight text-onyx-950 md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-onyx-600 md:text-lg">
            {subtitle}
          </p>
        </div>

        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-72 animate-pulse bg-white shadow-[0_18px_44px_rgba(0,0,0,0.06)]" />
            ))}
          </div>
        ) : items.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveImage(item)}
                className={`group block overflow-hidden bg-black text-left shadow-[0_18px_44px_rgba(0,0,0,0.12)] ${
                  index === 0 && items.length > 2 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {showImageTitles && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p className="font-accent text-[9px] font-bold uppercase tracking-[0.28em] text-white/65">
                          Odisha Outreach
                        </p>
                        <h3 className="mt-2 line-clamp-2 font-heading text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                    </>
                  )}
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-[#B51657]/25 bg-white p-10 text-center">
            <p className="font-heading text-2xl font-semibold text-onyx-950">No Odisha Outreach images uploaded yet</p>
            <p className="mt-2 text-onyx-500">Add images in the gallery under Odisha State Outreach and they will appear here.</p>
          </div>
        )}
      </div>

      {activeImage?.src && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true">
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute right-4 top-4 bg-white px-5 py-3 font-bold text-onyx-900 shadow-xl transition-colors hover:bg-[#B51657] hover:text-white md:right-8 md:top-8"
          >
            Close
          </button>
          <img src={activeImage.src} alt={activeImage.title} className="max-h-[88vh] max-w-full object-contain shadow-2xl" />
        </div>
      )}
    </section>
  )
}
