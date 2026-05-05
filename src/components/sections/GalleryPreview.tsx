'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'

type GalleryItem = {
  id: string
  title: string
  src?: string
  galleryGroup?: string
}

const fallbackItems: GalleryItem[] = [
  { id: 'children', title: 'Children Ministry', src: '/children.webp', galleryGroup: 'children' },
  { id: 'family', title: 'Family Care', src: '/family.webp', galleryGroup: 'children' },
  { id: 'widows', title: 'Widows Care', src: '/WID1.webp', galleryGroup: 'widows' },
  { id: 'outreach', title: 'Gospel Outreach', src: '/up.webp', galleryGroup: 'others' },
]

const spanClasses = [
  'md:col-span-2 md:row-span-2',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-2',
  'md:col-span-1',
]

const groupOrder = ['children', 'with-pastors', 'odisha-state-outreach', 'widows', 'others']

export default function GalleryPreview() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])

  useEffect(() => {
    let alive = true

    fetch('/api/media?category=gallery', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        if (alive) setGalleryItems(Array.isArray(data.items) ? data.items : [])
      })
      .catch(() => {
        if (alive) setGalleryItems([])
      })

    return () => {
      alive = false
    }
  }, [])

  const items = useMemo(() => {
    const uploadedItems = galleryItems.filter((item) => item.src)
    const picked: GalleryItem[] = []

    groupOrder.forEach((group) => {
      const match = uploadedItems.find((item) => item.galleryGroup === group && !picked.some((pickedItem) => pickedItem.id === item.id))
      if (match) picked.push(match)
    })

    uploadedItems.forEach((item) => {
      if (picked.length < 6 && !picked.some((pickedItem) => pickedItem.id === item.id)) picked.push(item)
    })

    const uploaded = picked.slice(0, 6)
    return uploaded.length ? uploaded : fallbackItems
  }, [galleryItems])

  return (
    <section className="relative overflow-hidden bg-[#FCFAF7] pb-16 pt-28">
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px,rgba(139,26,74,0.12) 1px,transparent 0)', backgroundSize: '28px 28px' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <SectionLabel text="Media Gallery" />
            <h2 className="font-[Playfair_Display] text-5xl md:text-6xl lg:text-7xl font-bold text-onyx-900 leading-[0.98] mb-5">
              God&apos;s Work
              <span className="block font-[Playfair_Display] text-[0.92em] font-bold italic text-[#B51657]">
                in Pictures
              </span>
            </h2>
            <p className="text-onyx-600 max-w-2xl mx-auto font-body text-lg leading-relaxed">
              A glimpse of the ministry gallery: outreach, children, pastors, widows, and moments of grace from the field.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-4 md:h-[540px] mb-14">
            {items.map((item, index) => (
              <Link
                key={item.id}
                href="/media/photo-gallery"
                className={`${spanClasses[index] || ''} group relative min-h-[220px] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.12)]`}
              >
                {item.src && (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="text-center">
            <Link
              href="/media/photo-gallery"
              className="inline-flex items-center gap-2 rounded-full border border-[#B51657]/35 bg-white px-8 py-4 font-body text-sm font-semibold text-[#B51657] shadow-[0_14px_34px_rgba(0,0,0,0.08)] transition-all hover:border-[#B51657]/70 hover:bg-[#B51657]/5"
            >
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
