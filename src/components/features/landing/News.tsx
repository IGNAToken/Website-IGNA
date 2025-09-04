import Badge from '@/components/shared/Badge'
import SectionTitle from '@/components/shared/SectionTitle'
import NewsCard from '@/components/shared/NewsCard'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import useBlogs from '@/hooks/useBlog'
import withLoading from '@/components/shared/withLoading'
import type { Blog } from '@/types/Blog'

const News = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-12 px-4 mt-32'>
      <Badge>News</Badge>
      <SectionTitle title="Don't miss the most recent updates" subtitle='' />
      <NewsContentWithLoader />
      <Button className='bg-transparent text-white border border-secondary hover:bg-secondary/20' size='lg'>
        <Link to='/blog' className='text-secondary'>
          View all news
        </Link>
      </Button>
    </section>
  )
}

function NewsContent({ data }: { data: Blog[] }) {
  return (
    <div className='flex flex-wrap justify-center gap-4 container mx-auto'>
      {data.map((news) => (
        <NewsCard
          key={news.id}
          title={news.title}
          description={news.abstract}
          imgURL={news.cover?.url || 'https://placehold.co/600x400'}
          date={news.date || news.publishedAt || ''}
          slug={news.url_slug}
        />
      ))}
    </div>
  )
}

function NewsContentWithLoader() {
  const { isLoading, error, data } = useBlogs({}, 3)
  const WrappedNewsContent = withLoading(NewsContent)
  return (
    <WrappedNewsContent isLoading={isLoading} error={error} data={data?.pages.flatMap((page) => page.data) ?? []} />
  )
}

export default News
