import BlogPostDisplay from '@/components/features/blog/BlogPostDisplay'
import ErrorBlockWithLink from '@/components/shared/ErrorBlockWithLink'
import Loader from '@/components/shared/Loader'
import SEO from '@/components/shared/SEO'
import { SITE_URL } from '@/config'
import useBlogs from '@/hooks/useBlog'
import useBlogPost from '@/hooks/useBlogPost'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/how-to-buy-igna')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data, isLoading, error } = useBlogPost('how-to-buy-igna')
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

  return (
    <>
      <SEO
        title={post.meta_title || post.title}
        description={post.meta_description || post.abstract}
        canonicalUrl={`${SITE_URL}/how-to-buy-igna`}
        ogImage={post.cover?.url || `${SITE_URL}/og_image/igna-social.webp`}
      />
      <BlogPostDisplay
        post={post}
        latestNews={latestNewsData}
        showBackButton={true}
        backButtonText='Back to home'
        backButtonLink='/'
      />
    </>
  )
}
