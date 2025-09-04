import BlogPostDisplay from '@/components/features/blog/BlogPostDisplay'
import ErrorBlockWithLink from '@/components/shared/ErrorBlockWithLink'
import Loader from '@/components/shared/Loader'
import useBlogs from '@/hooks/useBlog'
import useBlogPost from '@/hooks/useBlogPost'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/igna-tokenomics')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data, isLoading, error } = useBlogPost('igna-tokenomics')
  const { data: latestNews } = useBlogs({}, 3)

  if (isLoading)
    return (
      <div className='flex justify-center items-center h-screen'>
        <Loader />
      </div>
    )
  if (error) return <div>Error: {error.message}</div>
  // TODO: 404 page
  if (!data?.data.length)
    return <ErrorBlockWithLink link='/' linkText='Back to home' status={404} error={error || 'Page not found'} />

  const post = data.data[0]
  const latestNewsData = latestNews?.pages.flatMap((page) => page.data) || []

  console.log('post', post)
  return (
    <BlogPostDisplay
      post={post}
      latestNews={latestNewsData}
      showBackButton={true}
      backButtonText='Back to home'
      backButtonLink='/'
    />
  )
}
