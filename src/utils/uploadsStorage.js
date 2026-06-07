import fs from 'fs/promises'
import path from 'path'

/**
 * Root directory for uploaded files.
 * - Default: `<cwd>/public/uploads` (works locally; on Liara mount a persistent disk here — path relative to project root, e.g. `public/uploads`)
 * - Custom: set UPLOAD_ROOT to an absolute path or path relative to cwd (e.g. `storage/uploads`) when the disk is mounted elsewhere
 */
export function getUploadsRoot() {
  const raw = process.env.UPLOAD_ROOT?.trim()
  if (raw) {
    return path.isAbsolute(raw) ? raw : path.join(process.cwd(), raw)
  }
  return path.join(process.cwd(), 'public/uploads')
}

/** Files are served by Next static file server from /uploads/* */
export function uploadsArePublicStatic() {
  const root = path.resolve(getUploadsRoot())
  const pub = path.resolve(process.cwd(), 'public/uploads')
  return root === pub
}

export async function ensureUploadsRoot() {
  const root = getUploadsRoot()
  await fs.mkdir(root, { recursive: true })
  return root
}

/** URL pathname segment(s) for one uploaded file (leading slash, no origin) */
export function getUploadUrlPath(fileName) {
  const encoded = encodeURIComponent(fileName)
  if (uploadsArePublicStatic()) {
    return `/uploads/${encoded}`
  }
  return `/api/uploads/file/${encoded}`
}
