import { FAQContent } from '@/components/features/landing/FAQ'
import ContentSanitizer from '@/components/shared/ContentSanitizer'
import PostPreview from '@/components/shared/PostPreview'
import SectionTitle from '@/components/shared/SectionTitle'
import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import type { FAQ } from '@/types/FAQ'
import type { BlogFAQ } from '@/types/Blog'
import type { Blog } from '@/types/Blog'

interface BlogPostDisplayProps {
  post: Blog
  latestNews?: Blog[]
  showBackButton?: boolean
  backButtonText?: string
  backButtonLink?: string
}

export default function BlogPostDisplay({
  post,
  latestNews,
  showBackButton = true,
  backButtonText = 'Back to blog',
  backButtonLink = '/blog',
}: BlogPostDisplayProps) {
  // Convert BlogFAQ to FAQ format
  const convertedFaqs: FAQ[] =
    post.blog_faqs?.map((blogFaq: BlogFAQ) => ({
      id: blogFaq.id,
      question: blogFaq.question,
      answer: blogFaq.content || '',
      createdAt: blogFaq.createdAt,
      updatedAt: blogFaq.updatedAt,
      publishedAt: blogFaq.publishedAt,
      documentId: blogFaq.documentId,
    })) || []

  return (
    <div className='container mx-auto flex gap-4 flex-col md:flex-row px-2'>
      <div className='flex-col flex-1 mb-10'>
        {showBackButton && (
          <Link to={backButtonLink} className='flex items-center gap-2 text-sm text-white/75 mt-4'>
            <ArrowLeft className='size-4' />
            {backButtonText}
          </Link>
        )}
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
        {convertedFaqs.length > 0 && (
          <>
            <SectionTitle title='Quick FAQ' subtitle='' className='mt-10' />
            <div className='flex justify-center mt-10'>
              <FAQContent faqs={convertedFaqs} />
            </div>
          </>
        )}
      </div>
      {latestNews && latestNews.length > 0 && (
        <aside className='md:max-w-[300px] w-full md:mt-20 my-10'>
          <h2 className='text-sm uppercase mb-4'>Latest News</h2>
          <div className='flex flex-col gap-4'>
            {latestNews.map((news) => (
              <PostPreview key={news.id} imgURL={news.cover?.url} title={news.title} slug={news.url_slug} />
            ))}
          </div>
        </aside>
      )}
    </div>
  )
}
