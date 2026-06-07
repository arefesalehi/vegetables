import { getUploadUrlPath } from '@/utils/uploadsStorage'

/**
 * Absolute base URL for this app (uploads, redirects, etc.).
 * On Liara set NEXT_PUBLIC_APP_URL to https://your-subdomain.liara.run
 */
export function getPublicBaseUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_APP_URL || process.env.APP_URL
  if (fromEnv) return fromEnv.replace(/\/$/, '')
  return 'http://localhost:3000'
}

export function publicUploadUrl(fileName) {
  return `${getPublicBaseUrl()}${getUploadUrlPath(fileName)}`
}
