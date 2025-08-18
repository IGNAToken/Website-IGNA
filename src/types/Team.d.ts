import type { Media } from './Media'

export type Team = {
  id: number
  documentId: string
  name: string
  position: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  avatar: Media
  order: number
}
