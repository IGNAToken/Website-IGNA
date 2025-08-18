import { api } from '@/api/axios'
import type { Reason } from '@/types/Reason'

import { useQuery } from '@tanstack/react-query'

const useCarousel = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['carousel'],
    queryFn: () => api.getAll<Reason>('/api/reasons?populate=*'),
  })
  return { data, isLoading, error, refetch }
}

export default useCarousel
