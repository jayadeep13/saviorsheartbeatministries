'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Camera } from 'lucide-react'
import Reveal from '../ui/Reveal'

type GalleryItem = {
  id: string
  title: string
  src?: string
  galleryGroup?: string
}

const fallbackItems: GalleryItem[] = [
  { id: 'children', title: 'Children Ministry', src: '/children.webp', galleryGroup: 'children' },
  { id: 'odisha', title: 'Odisha Outreach', src: '/od1.webp', galleryGroup: 'odisha-state-outreach' },
  { id: 'widows', title: 'Widows Care', src: '/WID1.webp', galleryGroup: 'widows' },
  { id: 'preaching', title: 'Gospel Outreach', src: '/pre.webp', galleryGroup: 'others' },
  { id: 'pastors', title: "Pastors' Conference", src: '/past.webp', galleryGroup: 'with-pastors' },
  { id: 'church', title: 'Church Ministry', src: '/church.webp', galleryGroup: 'others' },
  { id: 'food', title: 'Food Ministry', src: '/food.webp', galleryGroup: 'children' },
  { id: 'field', title: 'Field Outreach', src: '/out (1).webp', galleryGroup: 'others' },
  { id: 'media', title: 'Media Ministry', src: '/GAL1.webp', galleryGroup: 'others' },
]

const groupOrder = ['children', 'odisha-state-outreach', 'widows', 'with-pastors', 'others']

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
      const match = uploadedItems.find(
        (item) => item.galleryGroup === group && !picked.some((pickedItem) => pickedItem.id === item.id),
      )
      if (match) picked.push(match)
    })

    uploadedItems.forEach((item) => {
      if (picked.length < 9 && !picked.some((pickedItem) => pickedItem.id === item.id)) picked.push(item)
    })

    return picked.length ? picked.slice(0, 9) : fallbackItems
  }, [galleryItems])

  return (
    <section className="relative overflow-hidden bg-[#FCFBF7] py-20 md:py-24">
      <div className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle_at_2px_2px,rgba(181,22,87,0.12)_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="absolute left-[-10%] top-16 h-80 w-80 rounded-full bg-[#B51657]/8 blur-[100px]" />
      <div className="absolute bottom-0 right-[-10%] h-96 w-96 rounded-full bg-[#C9A96E]/12 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#E8DDE2] bg-white px-5 py-2 shadow-[0_8px_28px_rgba(0,0,0,0.04)]">
              <Camera className="h-4 w-4 text-[#B51657]" />
              <span className="font-accent text-[10px] font-bold uppercase tracking-[0.32em] text-[#B51657]">
                Our Gallery
              </span>
            </div>
            <h2 className="font-heading text-4xl font-semibold leading-tight text-[#1E1E22] md:text-5xl">
              Ministry Moments
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-8 text-[#625B61] md:text-lg">
              A simple glimpse of outreach, care, and Gospel work from the field.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {items.map((item, index) => (
              <Link
                key={item.id}
                href="/media/photo-gallery"
                className="group mb-5 block break-inside-avoid overflow-hidden rounded-[1.45rem] border border-[#EFE4E9] bg-white p-2 shadow-[0_16px_46px_rgba(0,0,0,0.075)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_62px_rgba(181,22,87,0.13)]"
              >
                <div
                  className={`relative overflow-hidden rounded-[1rem] bg-[#12070C] ${
                    index % 5 === 2 ? 'aspect-[4/5]' : index % 4 === 1 ? 'aspect-[16/10]' : 'aspect-[4/3]'
                  }`}
                >
                  {item.src && (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                </div>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-12 text-center">
            <Link
              href="/media/photo-gallery"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#B51657]/35 bg-white px-9 font-body text-sm font-bold text-[#B51657] shadow-[0_14px_34px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1 hover:border-[#B51657]/70 hover:bg-[#FDF2F7]"
            >
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
