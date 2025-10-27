import { api } from '@/api/axios'
import type { Document } from '@/types/Document'
import { useQuery } from '@tanstack/react-query'

const useDocs = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['docs'],
    queryFn: () => api.getAll<Document>('/api/certificates?populate=*'),
  })
  return { data, isLoading, error, refetch }
}

export default useDocs
