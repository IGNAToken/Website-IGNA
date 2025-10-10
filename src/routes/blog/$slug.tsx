import BlogPostDisplay from '@/components/features/blog/BlogPostDisplay'
import ErrorBlockWithLink from '@/components/shared/ErrorBlockWithLink'
import Loader from '@/components/shared/Loader'
import SEO from '@/components/shared/SEO'
import { SITE_URL, standaloneRouteMap } from '@/config'
import useBlogs from '@/hooks/useBlog'
import useBlogPost from '@/hooks/useBlogPost'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  const { slug } = Route.useParams()
  const { data, isLoading, error } = useBlogPost(slug)
  const { data: latestNews } = useBlogs({}, 3)

  if (isLoading)
    return (
      <div className='flex justify-center items-center h-screen'>
        <Loader />
      </div>
    )

  if (error) return <div>Error: {error.message}</div>
  // TODO: 404 page
  const post = data?.data?.[0]
  if (!post)
    return <ErrorBlockWithLink link='/blog' linkText='Back to blog' status={404} error={error || 'Page not found'} />

  const latestNewsData = latestNews?.pages.flatMap((page) => page.data) || []

  // Map slugs that have standalone routes to their canonical URLs
 

  const canonicalUrl = standaloneRouteMap[slug] || `${SITE_URL}/blog/${slug}`

  return (
    <>
      <SEO
        title={post.title}
        description={post.abstract}
        canonicalUrl={canonicalUrl}
        ogImage={post.cover?.url || `${SITE_URL}/og_image/igna-social.webp`}
      />
      <BlogPostDisplay
        post={post}
        latestNews={latestNewsData}
        showBackButton={true}
        backButtonText='Back to blog'
        backButtonLink='/blog'
      />
    </>
  )
}
