'use client'

import { FormEvent, useEffect, useState } from 'react'

type MediaCategory = 'gallery' | 'books'
type GalleryGroup = 'odisha-state-outreach' | 'children' | 'with-pastors' | 'widows' | 'others'

type MediaItem = {
  id: string
  category: MediaCategory
  galleryGroup?: GalleryGroup
  title: string
  src?: string
  createdAt: string
}

const tabs: { id: MediaCategory; label: string; help: string }[] = [
  { id: 'gallery', label: 'Gallery Images', help: 'Upload images and choose where they should appear in the gallery filters.' },
  { id: 'books', label: 'Books & Magazines', help: 'Upload weekly or monthly magazine/book cover images.' },
]

const galleryGroups: { id: GalleryGroup; label: string }[] = [
  { id: 'odisha-state-outreach', label: 'Odisha State Outreach' },
  { id: 'children', label: 'Children' },
  { id: 'with-pastors', label: 'With Pastors' },
  { id: 'widows', label: 'Widows' },
  { id: 'others', label: 'Others' },
]

export default function AdminPannelPage() {
  const [category, setCategory] = useState<MediaCategory>('gallery')
  const [galleryGroup, setGalleryGroup] = useState<GalleryGroup>('odisha-state-outreach')
  const [title, setTitle] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [items, setItems] = useState<MediaItem[]>([])
  const [status, setStatus] = useState('')
  const [busy, setBusy] = useState(false)

  async function loadItems() {
    const res = await fetch('/api/media', { cache: 'no-store' })
    const data = await res.json()
    setItems(data.items || [])
  }

  useEffect(() => {
    loadItems()
  }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusy(true)
    setStatus('Uploading...')

    const formData = new FormData()
    formData.set('category', category)
    formData.set('title', category === 'gallery' ? '' : title)
    if (category === 'gallery') formData.set('galleryGroup', galleryGroup)

    if (file) {
      formData.set('file', file)
    }

    const res = await fetch('/api/media', { method: 'POST', body: formData })
    const data = await res.json()

    try {
      if (!res.ok) {
        setStatus(data.error || 'Upload failed.')
        return
      }

      setStatus('Uploaded successfully. It will now show first on the public page.')
      setTitle('')
      setFile(null)
      event.currentTarget.reset()
      await loadItems()
    } finally {
      setBusy(false)
    }
  }

  async function removeItem(id: string) {
    setStatus('Removing item...')
    await fetch(`/api/media?id=${id}`, { method: 'DELETE' })
    await loadItems()
    setStatus('Item removed.')
  }

  const activeTab = tabs.find((tab) => tab.id === category)
  const currentItems = items.filter((item) => item.category === category)

  return (
    <main className="min-h-screen bg-ivory-50 px-4 py-10 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="font-accent text-[#B51657] text-[11px] tracking-[0.35em] uppercase font-bold mb-3">Admin Panel</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-onyx-950">Media Uploads</h1>
          <p className="mt-3 max-w-2xl text-onyx-600">
            Upload gallery images and magazine covers here. Latest uploads always appear first on the public pages.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setCategory(tab.id)
                setTitle('')
                setFile(null)
                setStatus('')
              }}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                category === tab.id ? 'bg-[#B51657] text-white' : 'bg-white text-onyx-700 hover:text-[#B51657]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-black/5">
            <h2 className="font-heading text-2xl font-bold text-onyx-950 mb-2">{activeTab?.label}</h2>
            <p className="text-onyx-500 text-sm mb-6">{activeTab?.help}</p>

            {category === 'gallery' && (
              <>
                <label className="block text-sm font-semibold text-onyx-800 mb-2">Image Group</label>
                <select
                  value={galleryGroup}
                  onChange={(event) => setGalleryGroup(event.target.value as GalleryGroup)}
                  required
                  className="mb-5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-[#B51657]"
                >
                  {galleryGroups.map((group) => (
                    <option key={group.id} value={group.id}>{group.label}</option>
                  ))}
                </select>
              </>
            )}

            {category !== 'gallery' && (
              <>
                <label className="block text-sm font-semibold text-onyx-800 mb-2">Title</label>
                <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  required
                  className="mb-5 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#B51657]"
                  placeholder="April 2026 SPANDANA"
                />
              </>
            )}

            <label className="block text-sm font-semibold text-onyx-800 mb-2">Image File</label>
            <input
              type="file"
              accept="image/*"
              required
              onChange={(event) => setFile(event.target.files?.[0] || null)}
              className="mb-5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm"
            />

            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-xl bg-[#B51657] px-6 py-4 font-bold text-white shadow-[0_12px_30px_rgba(181,22,87,0.22)] transition-colors hover:bg-[#981149] disabled:opacity-60"
            >
              {busy ? 'Saving...' : 'Upload'}
            </button>

            {status && <p className="mt-4 text-sm font-medium text-onyx-600">{status}</p>}
          </form>

          <section className="rounded-3xl bg-white p-6 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-black/5">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="font-heading text-2xl font-bold text-onyx-950">Latest Items</h2>
              <span className="rounded-full bg-[#B51657]/10 px-3 py-1 text-xs font-bold text-[#B51657]">{currentItems.length} total</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-h-[620px] overflow-auto pr-1">
              {currentItems.map((item) => (
                <div key={item.id} className="rounded-2xl border border-gray-100 p-3">
                  <div className="mb-3 aspect-video overflow-hidden rounded-xl bg-onyx-100">
                    <img src={item.src} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                  <h3 className="font-body text-sm font-bold text-onyx-900">{item.title}</h3>
                  {item.category === 'gallery' && item.galleryGroup && (
                    <p className="mt-1 text-xs font-semibold text-[#B51657]">
                      {galleryGroups.find((group) => group.id === item.galleryGroup)?.label}
                    </p>
                  )}
                  <p className="text-xs text-onyx-400 mt-1">{new Date(item.createdAt).toLocaleString()}</p>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="mt-3 text-xs font-bold text-[#B51657] hover:text-[#981149]"
                  >
                    Remove
                  </button>
                </div>
              ))}

              {!currentItems.length && (
                <div className="sm:col-span-2 rounded-2xl border border-dashed border-[#B51657]/25 p-8 text-center text-onyx-500">
                  Nothing uploaded in this tab yet.
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
