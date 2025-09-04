import { api } from '@/api/axios'
import type { Blog } from '@/types/Blog'
import { useQuery } from '@tanstack/react-query'

type BlogPostApiResponse = {
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

const fetchBlogPost = async (urlSlug: string) => {
  return api.get<BlogPostApiResponse>('/api/blogs', {
    params: {
      populate: '*',
      'filters[url_slug][$eq]': urlSlug,
    },
  })
}

const useBlogPost = (urlSlug: string) => {
  const { data, isLoading, error } = useQuery<BlogPostApiResponse>({
    queryKey: ['blogPost', urlSlug],
    queryFn: () => fetchBlogPost(urlSlug),
  })
  return { data, isLoading, error }
}

export default useBlogPost
