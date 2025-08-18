import type { Media } from './Media'

export interface Reason {
  id: number
  documentId: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  media: Media
}
