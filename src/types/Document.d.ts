export interface Document {
  id: number
  createdAt: string
  publishedAt: string
  updatedAt: string
  description: string
  documentId: string
  name: string
  file_extension: string
  file: {
    url: string
    mime: string
  }
}
