export type Roadmap = {
  id: number
  documentId: string
  title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  roadmap_items: RoadmapItem[]
}

export type RoadmapItem = {
  id: number
  documentId: string
  title: string
  done: boolean
  createdAt: string
  updatedAt: string
  publishedAt: string
}
