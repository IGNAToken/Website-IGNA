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
  url_slug: string
  cover: Media
  blog_faqs: BlogFAQ[]
}

export type BlogFAQ = {
  content: null
  createdAt: string
  documentId: string
  id: number
  publishedAt: string
  question: string
  updatedAt: string
  rank: number
}
