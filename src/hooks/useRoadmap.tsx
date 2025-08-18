import { api } from '@/api/axios'
import type { Roadmap } from '@/types/Roadmap'
import { useQuery } from '@tanstack/react-query'

const useRoadmap = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['roadmap'],
    queryFn: () => api.getAll<Roadmap>('/api/roadmap-groups?populate=*'),
  })

  return { data, isLoading, error, refetch }
}

export default useRoadmap
