import { api } from '@/api/axios'
import type { StrategyType } from '@/types/Strategy'
import { useQuery } from '@tanstack/react-query'

const useStrategy = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['strategy'],
    queryFn: () => api.getAll<StrategyType>('/api/strategies?populate=*'),
  })
  return { data, isLoading, error, refetch }
}

export default useStrategy
