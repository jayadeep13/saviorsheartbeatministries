'use client'

import { useEffect, useMemo, useState } from 'react'

type MediaCategory = 'gallery' | 'books'
type GalleryFilter = 'all' | 'odisha-state-outreach' | 'children' | 'with-pastors' | 'widows' | 'others'

type MediaItem = {
  id: string
  category: MediaCategory
  galleryGroup?: Exclude<GalleryFilter, 'all'>
  title: string
  src?: string
  createdAt: string
}

const PAGE_SIZE = 20
const galleryFilters: { id: GalleryFilter; label: string; icon: string }[] = [
  { id: 'all', label: 'All', icon: '*' },
  { id: 'odisha-state-outreach', label: 'Odisha State Outreach', icon: 'O' },
  { id: 'children', label: 'Children', icon: 'C' },
  { id: 'with-pastors', label: 'With Pastors', icon: 'P' },
  { id: 'widows', label: 'Widows', icon: 'W' },
  { id: 'others', label: 'Others', icon: '+' },
]

function Pagination({ page, totalPages, onPage }: { page: number; totalPages: number; onPage: (page: number) => void }) {
  if (totalPages <= 1) return null
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-onyx-600 font-body text-lg">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onPage(page - 1)}
        className="px-3 py-2 disabled:opacity-30 hover:text-[#B51657] transition-colors"
      >
        Back
      </button>
      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          type="button"
          onClick={() => onPage(pageNumber)}
          className={`h-10 min-w-10 rounded-full px-3 font-semibold transition-colors ${
            page === pageNumber ? 'bg-[#B51657] text-white' : 'bg-white text-onyx-600 hover:text-[#B51657]'
          }`}
        >
          {pageNumber}
        </button>
      ))}
      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onPage(page + 1)}
        className="px-3 py-2 disabled:opacity-30 hover:text-[#B51657] transition-colors"
      >
        Next
      </button>
    </div>
  )
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="rounded-3xl border border-dashed border-[#B51657]/25 bg-white p-12 text-center">
      <p className="font-heading text-2xl text-onyx-900 mb-2">No {label} uploaded yet</p>
      <p className="text-onyx-500">Add new content from the admin panel and it will appear here automatically.</p>
    </div>
  )
}

function Lightbox({ item, onClose }: { item: MediaItem | null; onClose: () => void }) {
  if (!item?.src) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 p-4 md:p-8 flex items-center justify-center" role="dialog" aria-modal="true">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 md:right-8 md:top-8 rounded-full bg-white px-5 py-3 font-bold text-onyx-900 shadow-xl hover:bg-[#B51657] hover:text-white transition-colors"
      >
        Close
      </button>
      <img src={item.src} alt={item.title} className="max-h-[88vh] max-w-full rounded-xl object-contain shadow-2xl" />
    </div>
  )
}

export default function MediaShowcase({ category }: { category: MediaCategory }) {
  const [items, setItems] = useState<MediaItem[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('all')
  const [activeImage, setActiveImage] = useState<MediaItem | null>(null)

  useEffect(() => {
    let alive = true
    fetch(`/api/media?category=${category}`, { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        if (alive) setItems(data.items || [])
      })
      .finally(() => {
        if (alive) setLoading(false)
      })

    return () => {
      alive = false
    }
  }, [category])

  const filteredItems = useMemo(
    () => category === 'gallery' && activeFilter !== 'all'
      ? items.filter((item) => item.galleryGroup === activeFilter)
      : items,
    [activeFilter, category, items]
  )
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / PAGE_SIZE))
  const visibleItems = useMemo(() => filteredItems.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE), [filteredItems, page])

  if (loading) {
    return <div className="h-56 rounded-3xl bg-white/70 animate-pulse" />
  }

  if (!items.length) {
    return <EmptyState label={category === 'books' ? 'magazines' : category} />
  }

  if (category === 'books') {
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {visibleItems.map((book) => (
            <div key={book.id} className="group">
              <button
                type="button"
                onClick={() => setActiveImage(book)}
                className="block w-full overflow-hidden rounded-xl bg-white shadow-[0_12px_34px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:-translate-y-1"
              >
                <img src={book.src} alt={book.title} className="w-full object-cover" />
              </button>
              <h3 className="mt-4 text-center font-heading text-xl font-semibold text-onyx-900 group-hover:text-[#B51657] transition-colors">{book.title}</h3>
            </div>
          ))}
        </div>
        <Lightbox item={activeImage} onClose={() => setActiveImage(null)} />
        <Pagination page={page} totalPages={totalPages} onPage={setPage} />
      </>
    )
  }

  return (
    <>
      <div className="mb-20 flex flex-wrap gap-3 border-b border-[#E8D8B9]/70 pb-16">
        {galleryFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => {
              setActiveFilter(filter.id)
              setPage(1)
            }}
            className={`inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-bold shadow-sm transition-all ${
              activeFilter === filter.id
                ? 'border-[#090B2D] bg-[#090B2D] text-white'
                : 'border-[#E8C98F] bg-white text-onyx-500 hover:border-[#B51657] hover:text-[#B51657]'
            }`}
          >
            <span className={activeFilter === filter.id ? 'text-[#22C55E]' : 'text-[#8E91AA]'}>{filter.icon}</span>
            {filter.label}
          </button>
        ))}
      </div>
      {!filteredItems.length ? (
        <EmptyState label={galleryFilters.find((filter) => filter.id === activeFilter)?.label || 'gallery images'} />
      ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {visibleItems.map((photo) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setActiveImage(photo)}
            className="group overflow-hidden rounded-xl bg-white shadow-[0_12px_34px_rgba(0,0,0,0.08)]"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={photo.src} alt={photo.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </button>
        ))}
      </div>
      )}
      <Lightbox item={activeImage} onClose={() => setActiveImage(null)} />
      <Pagination page={page} totalPages={totalPages} onPage={setPage} />
    </>
  )
}
