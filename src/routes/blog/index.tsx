import { createFileRoute } from '@tanstack/react-router'
import BlogPostContainer from '@/components/features/blog/BlogPostContainer'
import ArticleContainer from '@/components/features/blog/ArticleContainer'

export const Route = createFileRoute('/blog/')({
  component: Blog,
})

function Blog() {
  return (
    <div className='container mx-auto px-2'>
      <h2 className='text-2xl font-bold my-4'>Latest News</h2>
      <BlogPostContainer />
      <h2 className='text-2xl font-bold my-4'>Latest Articles</h2>
      <ArticleContainer />
    </div>
  )
}
