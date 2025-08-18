import { api } from "@/api/axios"
import type { Team } from "@/types/Team"
import { useQuery } from "@tanstack/react-query"

const useTeam = () => {
  
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['team'],
    queryFn: () => api.getAll<Team>('/api/teams?populate=*'),
  })
  return { data, isLoading, error, refetch }
}

export default useTeam