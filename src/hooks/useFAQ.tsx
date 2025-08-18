import { api } from '@/api/axios'
import type { FAQ } from '@/types/FAQ'
import { useQuery } from '@tanstack/react-query'

const useFAQ = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['faq'],
    queryFn: () => api.getAll<FAQ>('/api/faqs'),
  })
  return { data, isLoading, error, refetch }
}

export default useFAQ
