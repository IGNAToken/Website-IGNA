import { api } from '@/api/axios'
import type { Social } from '@/types/Social'
import { useQuery } from '@tanstack/react-query'

const useSocial = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['social'],
    queryFn: () => api.getAll<Social>('/api/socials?populate=*'),
  })
  return { data, isLoading, error, refetch }
}

export default useSocial