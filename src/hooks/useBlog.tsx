import { api } from '@/api/axios'
import type { Blog } from '@/types/Blog'
import { useInfiniteQuery } from '@tanstack/react-query'

const PAGE_SIZE = 3

type BlogApiResponse = {
  data: Blog[]
  meta: {
    pagination: {
      page: number
      pageCount: number
      pageSize: number
      total: number
    }
  }
}

type BlogFilter = Record<string, unknown>

const fetchBlogs = async ({
  pageParam = 1,
  filters = {},
  pageSize = PAGE_SIZE,
}: {
  pageParam?: number
  filters?: BlogFilter
  pageSize?: number
}): Promise<BlogApiResponse> => {
  return api.get<BlogApiResponse>('/api/blogs', {
    params: {
      populate: '*',
      'pagination[pageSize]': pageSize,
      'pagination[page]': pageParam,
      filters,
    },
  })
}

const useBlogs = (filters: BlogFilter = {}, pageSize: number = 10) => {
  return useInfiniteQuery({
    queryKey: ['blogs', filters],
    queryFn: ({ pageParam = 1 }) => fetchBlogs({ pageParam, filters, pageSize }),
    getNextPageParam: (lastPage) => {
      const { page, pageCount } = lastPage.meta.pagination
      if (page < pageCount) return page + 1
      return undefined
    },
    initialPageParam: 1,
  })
}

export default useBlogs
