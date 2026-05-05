import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const publicDir = path.join(process.cwd(), 'public')
const inputExtensions = new Set(['.jpg', '.jpeg', '.png'])

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      files.push(...await walk(fullPath))
      continue
    }

    if (entry.isFile() && inputExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath)
    }
  }

  return files
}

function webpPathFor(filePath) {
  const parsed = path.parse(filePath)
  return path.join(parsed.dir, `${parsed.name}.webp`)
}

const files = await walk(publicDir)
let originalBytes = 0
let webpBytes = 0

for (const file of files) {
  const output = webpPathFor(file)
  const before = await stat(file)

  await sharp(file)
    .rotate()
    .webp({ quality: 78, effort: 6 })
    .toFile(output)

  const after = await stat(output)
  originalBytes += before.size
  webpBytes += after.size

  const relativeInput = path.relative(publicDir, file)
  const relativeOutput = path.relative(publicDir, output)
  const saved = before.size ? Math.round((1 - after.size / before.size) * 100) : 0
  console.log(`${relativeInput} -> ${relativeOutput} (${saved}% smaller)`)
}

console.log('')
console.log(`Converted ${files.length} image(s).`)
console.log(`Original: ${(originalBytes / 1024 / 1024).toFixed(2)} MB`)
console.log(`WebP: ${(webpBytes / 1024 / 1024).toFixed(2)} MB`)
console.log(`Saved: ${Math.round((1 - webpBytes / originalBytes) * 100)}%`)
