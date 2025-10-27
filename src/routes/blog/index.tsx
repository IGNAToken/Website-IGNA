import { createFileRoute } from '@tanstack/react-router'
import BlogPostContainer from '@/components/features/blog/BlogPostContainer'
import ArticleContainer from '@/components/features/blog/ArticleContainer'

export const Route = createFileRoute('/blog/')({
  component: Blog,
})

function Blog() {
  return (
    <div className='container mx-auto px-4 py-8 max-w-7xl'>
      <div className='mb-12'>
        <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
          Blog
        </h1>
        <p className='text-lg text-white/70 max-w-2xl'>
          Stay updated with the latest news and insights from our team.
        </p>
      </div>

      <section className='mb-16'>
        <h2 className='text-2xl font-semibold mb-8 text-white'>Latest News</h2>
        <BlogPostContainer />
      </section>

      <section className='mb-16'>
        <h2 className='text-2xl font-semibold mb-8 text-white'>
          Latest Articles
        </h2>
        <ArticleContainer />
      </section>
    </div>
  )
}
