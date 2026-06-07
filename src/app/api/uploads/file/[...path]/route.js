import fs from 'fs/promises'
import path from 'path'
import { NextResponse } from 'next/server'
import { ensureUploadsRoot, uploadsArePublicStatic } from '@/utils/uploadsStorage'

const MIME = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.bmp': 'image/bmp',
}

function mimeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  return MIME[ext] || 'application/octet-stream'
}

export async function GET(_req, { params }) {
  const segments = params.path || []
  if (!segments.length) {
    return new NextResponse('Not Found', { status: 404 })
  }

  if (uploadsArePublicStatic()) {
    return new NextResponse('Not Found', { status: 404 })
  }

  const root = path.resolve(await ensureUploadsRoot())
  const decoded = segments.map((s) => decodeURIComponent(s))
  const filePath = path.resolve(root, ...decoded)
  const rel = path.relative(root, filePath)
  if (rel.startsWith('..') || path.isAbsolute(rel)) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  try {
    const buf = await fs.readFile(filePath)
    return new NextResponse(buf, {
      headers: {
        'Content-Type': mimeFor(filePath),
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (e) {
    if (e && e.code === 'ENOENT') {
      return new NextResponse('Not Found', { status: 404 })
    }
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
