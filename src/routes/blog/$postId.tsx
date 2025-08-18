import ContentSanitizer from '@/components/shared/ContentSanitizer'
import Loader from '@/components/shared/Loader'
import PostPreview from '@/components/shared/PostPreview'
import useBlogs from '@/hooks/useBlog'
import useBlogPost from '@/hooks/useBlogPost'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/blog/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = Route.useParams()
  const { data, isLoading, error } = useBlogPost(postId)
  const { data: latestNews } = useBlogs({}, 3)
  if (isLoading)
    return (
      <div className='flex justify-center items-center h-screen'>
        <Loader />
      </div>
    )
  if (error) return <div>Error: {error.message}</div>
  // TODO: 404 page
  if (!data) return <div>No data</div>
  const post = data.data
  return (
    <div className='container mx-auto flex gap-4 flex-col md:flex-row px-2'>
      <div className='flex-col flex-1'>
        <Link to='/blog' className='flex items-center gap-2 text-sm text-white/75 mt-4'>
          <ArrowLeft className='size-4' />
          Back to blog
        </Link>
        <h2 className='text-2xl font-bold my-4'>{post.title}</h2>
        <img src={post.cover?.url} alt={post.title} className='w-full max-h-[300px] object-cover rounded-lg' />
        <p className='text-md text-white/75 my-4'>
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <div className='my-2 border-b border-primary' />
        <p className='text-sm font-medium text-white'>{post.abstract}</p>
        <div className='my-2 border-b border-primary' />
        <ContentSanitizer content={post.content} />
      </div>
      <aside className='md:max-w-[300px] w-full md:mt-20 my-10'>
        <h2 className='text-sm  uppercase mb-4'>Latest News</h2>
        <div className='flex flex-col gap-4'>
          {latestNews?.pages
            .flatMap((page) => page.data)
            .map((news) => (
              <PostPreview key={news.id} imgURL={news.cover?.url} title={news.title} postId={news.documentId} />
            ))}
        </div>
      </aside>
    </div>
  )
}
