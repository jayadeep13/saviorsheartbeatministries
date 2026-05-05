import { NextResponse } from 'next/server'
import { addImageMedia, deleteMedia, readMedia, type GalleryGroup, type MediaCategory } from '@/lib/media-store'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const categories = new Set(['gallery', 'books'])
const galleryGroups = new Set(['odisha-state-outreach', 'children', 'with-pastors', 'widows', 'others'])

function parseCategory(value: FormDataEntryValue | string | null): MediaCategory | undefined {
  if (typeof value !== 'string' || !categories.has(value)) return undefined
  return value as MediaCategory
}

function parseGalleryGroup(value: FormDataEntryValue | string | null): GalleryGroup | undefined {
  if (typeof value !== 'string' || !galleryGroups.has(value)) return undefined
  return value as GalleryGroup
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = parseCategory(searchParams.get('category'))
  const items = await readMedia(category)
  return NextResponse.json({ items })
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const category = parseCategory(formData.get('category'))
    const galleryGroup = parseGalleryGroup(formData.get('galleryGroup'))
    const title = String(formData.get('title') || '').trim()

    if (!category) {
      return NextResponse.json({ error: 'Please choose Gallery or Books.' }, { status: 400 })
    }

    if (!title && category !== 'gallery') {
      return NextResponse.json({ error: 'Please enter a title.' }, { status: 400 })
    }

    if (category === 'gallery' && !galleryGroup) {
      return NextResponse.json({ error: 'Please choose an image group.' }, { status: 400 })
    }

    const file = formData.get('file')
    if (!(file instanceof File) || file.size === 0) {
      return NextResponse.json({ error: 'Please upload an image file.' }, { status: 400 })
    }

    const imageTitle = title || file.name.replace(/\.[^.]+$/, '')
    const item = await addImageMedia(category, imageTitle, file, galleryGroup)
    return NextResponse.json({ item })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Upload failed.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'Missing media id.' }, { status: 400 })
  await deleteMedia(id)
  return NextResponse.json({ ok: true })
}
