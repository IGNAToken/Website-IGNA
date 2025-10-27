import NewsCard from '@/components/shared/NewsCard'
import withLoading from '@/components/shared/withLoading'
import { Button } from '@/components/ui/button'
import useBlogs from '@/hooks/useBlog'
import type { Blog } from '@/types/Blog'

const BlogPostContainer = ({
  data,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
}: {
  data: Blog[] | undefined
  hasNextPage: boolean
  fetchNextPage: () => void
  isFetchingNextPage: boolean
}) => {
  const posts = data ?? []
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
        {posts.map((post) => (
          <NewsCard
            key={post.id}
            title={post.title}
            description={post.abstract}
            imgURL={post.cover?.url || 'https://placehold.co/600x400'}
            date={post.date || post.publishedAt || ''}
            slug={post.url_slug}
          />
        ))}
      </div>
      <div className='flex justify-center mt-12'>
        {hasNextPage && (
          <Button
            variant='outline'
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className='px-8 py-3 border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300'
          >
            {isFetchingNextPage ? 'Loading...' : 'Load More'}
          </Button>
        )}
      </div>
    </>
  )
}
const BlogPostContainerWithLoader = () => {
  const {
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
  } = useBlogs({ article: false })
  const WrappedBlogPostContainer = withLoading(BlogPostContainer)
  return (
    <WrappedBlogPostContainer
      isLoading={isLoading}
      error={error}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      data={data?.pages.flatMap((page) => page.data) ?? []}
    />
  )
}

export default BlogPostContainerWithLoader
