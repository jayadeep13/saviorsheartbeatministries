import { promises as fs } from 'fs'
import path from 'path'
import crypto from 'crypto'
import sharp from 'sharp'

export type MediaCategory = 'gallery' | 'books'
export type GalleryGroup = 'odisha-state-outreach' | 'children' | 'with-pastors' | 'widows' | 'others'

export type MediaItem = {
  id: string
  category: MediaCategory
  galleryGroup?: GalleryGroup
  title: string
  src?: string
  createdAt: string
}

const uploadDir = path.join(process.cwd(), 'public', 'uploads')
const manifestPath = path.join(uploadDir, 'media.json')

async function ensureStore() {
  await fs.mkdir(uploadDir, { recursive: true })
  try {
    await fs.access(manifestPath)
  } catch {
    await fs.writeFile(manifestPath, '[]', 'utf8')
  }
}

export async function readMedia(category?: MediaCategory) {
  await ensureStore()
  const raw = await fs.readFile(manifestPath, 'utf8')
  const items = JSON.parse(raw || '[]') as MediaItem[]
  return items
    .filter((item) => !category || item.category === category)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

async function writeMedia(items: MediaItem[]) {
  await ensureStore()
  await fs.writeFile(manifestPath, JSON.stringify(items, null, 2), 'utf8')
}

function cleanName(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'media'
}

export async function addImageMedia(category: MediaCategory, title: string, file: File, galleryGroup?: GalleryGroup) {
  await ensureStore()
  const bytes = Buffer.from(await file.arrayBuffer())
  const id = crypto.randomUUID()
  const baseName = `${Date.now()}-${cleanName(title)}-${id.slice(0, 8)}.webp`
  const filePath = path.join(uploadDir, baseName)

  await sharp(bytes)
    .rotate()
    .webp({ quality: 86 })
    .toFile(filePath)

  const item: MediaItem = {
    id,
    category,
    ...(category === 'gallery' && galleryGroup ? { galleryGroup } : {}),
    title,
    src: `/uploads/${baseName}`,
    createdAt: new Date().toISOString(),
  }

  const items = await readMedia()
  await writeMedia([item, ...items])
  return item
}

export async function deleteMedia(id: string) {
  const items = await readMedia()
  const item = items.find((entry) => entry.id === id)
  const nextItems = items.filter((entry) => entry.id !== id)

  if (item?.src?.startsWith('/uploads/')) {
    const filePath = path.join(process.cwd(), 'public', item.src)
    await fs.unlink(filePath).catch(() => undefined)
  }

  await writeMedia(nextItems)
  return item
}
