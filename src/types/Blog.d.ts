import type { Media } from './Media'

export type Blog = {
  id: number
  documentId: string
  title: string
  abstract: string
  content: string
  date: string | null
  createdAt: string
  updatedAt: string
  publishedAt: string
  cover: Media
}