import { api } from '@/api/axios'
import type { Blog } from '@/types/Blog'
import { useQuery } from '@tanstack/react-query'

type BlogPostApiResponse = {
  data: Blog
  meta: {
    pagination: {
      page: number
      pageCount: number
      pageSize: number
      total: number
    }
  }
}

const useBlogPost = (postId: string) => {
  const { data, isLoading, error } = useQuery<BlogPostApiResponse>({
    queryKey: ['blogPost', postId],
    queryFn: () =>
      api.get<BlogPostApiResponse>(`/api/blogs/${postId}`, {
        params: {
          populate: '*',
        },
      }),
  })
  return { data, isLoading, error }
}

export default useBlogPost
