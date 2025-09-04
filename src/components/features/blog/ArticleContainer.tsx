import NewsCard from '@/components/shared/NewsCard'
import withLoading from '@/components/shared/withLoading'
import { Button } from '@/components/ui/button'
import useBlogs from '@/hooks/useBlog'
import type { Blog } from '@/types/Blog'

const ArticleContainer = ({
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
      <div className='flex flex-wrap gap-4 justify-center'>
        {posts.map((post) => (
          <NewsCard
            key={post.id}
            title={post.title}
            description={post.abstract}
            imgURL={post.cover?.url || 'https://placehold.co/600x400'}
            date={post.date || post.publishedAt || ''}
            slug={post.url_slug}
            variant='secondary'
          />
        ))}
      </div>
      <div className='flex justify-center mt-6'>
        {hasNextPage && (
          <Button
            variant='outline'
            className='border-secondary text-secondary hover:bg-secondary hover:text-white'
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Loading...' : 'Load More'}
          </Button>
        )}
      </div>
    </>
  )
}
const ArticleContainerWithLoader = () => {
  const { isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage, data } = useBlogs({ article: true })
  const WrappedArticleContainer = withLoading(ArticleContainer)
  return (
    <WrappedArticleContainer
      isLoading={isLoading}
      error={error}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      data={data?.pages.flatMap((page) => page.data) ?? []}
    />
  )
}

export default ArticleContainerWithLoader
