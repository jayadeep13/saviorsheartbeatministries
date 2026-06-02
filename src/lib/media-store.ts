import { put, del, list } from '@vercel/blob'
import { promises as fs } from 'fs'
import path from 'path'
import crypto from 'crypto'
import sharp from 'sharp'

export type MediaCategory = 'gallery' | 'books'
export type GalleryGroup = 'crusades' | 'church-building' | 'children' | 'widows' | 'homeless-outreach' | 'others'

export type MediaItem = {
  id: string
  category: MediaCategory
  galleryGroup?: GalleryGroup
  title: string
  src?: string
  createdAt: string
}

// Detect whether we are running on a serverless platform (Vercel, etc.)
// where the local filesystem is read-only.
function isReadonlyFilesystem() {
  return process.env.VERCEL === '1' || process.env.BLOB_READ_WRITE_TOKEN !== undefined
}

// ── Local filesystem helpers (development) ───────────────────────────────────

const uploadDir = path.join(process.cwd(), 'public', 'uploads')
const manifestPath = path.join(uploadDir, 'media.json')

async function ensureLocalStore() {
  await fs.mkdir(uploadDir, { recursive: true })
  try {
    await fs.access(manifestPath)
  } catch {
    await fs.writeFile(manifestPath, '[]', 'utf8')
  }
}

async function readLocalMedia(): Promise<MediaItem[]> {
  await ensureLocalStore()
  const raw = await fs.readFile(manifestPath, 'utf8')
  return JSON.parse(raw || '[]') as MediaItem[]
}

async function writeLocalMedia(items: MediaItem[]) {
  await ensureLocalStore()
  await fs.writeFile(manifestPath, JSON.stringify(items, null, 2), 'utf8')
}

// ── Vercel Blob helpers (production) ─────────────────────────────────────────

const MANIFEST_PREFIX = 'saviors-heartbeat-manifest/'
const MANIFEST_PATH = `${MANIFEST_PREFIX}media-manifest.json`

async function readBlobMedia(): Promise<MediaItem[]> {
  try {
    const { blobs } = await list({ prefix: MANIFEST_PREFIX })
    if (!blobs[0]) return []
    const res = await fetch(blobs[0].url, { cache: 'no-store' })
    if (!res.ok) return []
    return await res.json()
  } catch {
    return []
  }
}

async function writeBlobMedia(items: MediaItem[]) {
  // Delete any existing manifest blob before writing the new one.
  const { blobs } = await list({ prefix: MANIFEST_PREFIX })
  if (blobs.length > 0) {
    await del(blobs.map((b) => b.url))
  }
  await put(MANIFEST_PATH, JSON.stringify(items, null, 2), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
  })
}

// ── Public API ────────────────────────────────────────────────────────────────

function cleanName(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'media'
}

export async function readMedia(category?: MediaCategory) {
  const items = isReadonlyFilesystem()
    ? await readBlobMedia()
    : await readLocalMedia()

  return items
    .filter((item) => !category || item.category === category)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export async function addImageMedia(
  category: MediaCategory,
  title: string,
  file: File,
  galleryGroup?: GalleryGroup,
) {
  const bytes = Buffer.from(await file.arrayBuffer())
  const id = crypto.randomUUID()
  const baseName = `${Date.now()}-${cleanName(title)}-${id.slice(0, 8)}.webp`

  const webpBuffer = await sharp(bytes).rotate().webp({ quality: 86 }).toBuffer()

  let src: string

  if (isReadonlyFilesystem()) {
    const blob = await put(`saviors-heartbeat-uploads/${baseName}`, webpBuffer, {
      access: 'public',
      contentType: 'image/webp',
      addRandomSuffix: false,
    })
    src = blob.url
  } else {
    await ensureLocalStore()
    await fs.writeFile(path.join(uploadDir, baseName), webpBuffer)
    src = `/uploads/${baseName}`
  }

  const item: MediaItem = {
    id,
    category,
    ...(category === 'gallery' && galleryGroup ? { galleryGroup } : {}),
    title,
    src,
    createdAt: new Date().toISOString(),
  }

  const items = await readMedia()

  if (isReadonlyFilesystem()) {
    await writeBlobMedia([item, ...items])
  } else {
    await writeLocalMedia([item, ...items])
  }

  return item
}

export async function deleteMedia(id: string) {
  const items = await readMedia()
  const item = items.find((entry) => entry.id === id)
  const nextItems = items.filter((entry) => entry.id !== id)

  if (item?.src) {
    if (isReadonlyFilesystem()) {
      // Vercel Blob: delete by URL
      await del(item.src).catch(() => undefined)
    } else if (item.src.startsWith('/uploads/')) {
      // Local: delete the file
      const filePath = path.join(process.cwd(), 'public', item.src)
      await fs.unlink(filePath).catch(() => undefined)
    }
  }

  if (isReadonlyFilesystem()) {
    await writeBlobMedia(nextItems)
  } else {
    await writeLocalMedia(nextItems)
  }

  return item
}
