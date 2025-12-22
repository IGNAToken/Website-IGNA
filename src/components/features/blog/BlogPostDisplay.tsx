import { FAQContent } from '@/components/features/landing/FAQ'
import ContentSanitizer from '@/components/shared/ContentSanitizer'
import PostPreview from '@/components/shared/PostPreview'
import SectionTitle from '@/components/shared/SectionTitle'
import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import type { FAQ } from '@/types/FAQ'
import type { BlogFAQ } from '@/types/Blog'
import type { Blog } from '@/types/Blog'
import useSocial from '@/hooks/useSocial'

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

  const { data: social } = useSocial()

  return (
    <div className='container mx-auto max-w-6xl px-4 py-8'>
      <div className='flex gap-8 flex-col lg:flex-row'>
        <article className='flex-1'>
          {showBackButton && (
            <Link
              to={backButtonLink}
              className='inline-flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors duration-300 mb-8'
            >
              <ArrowLeft className='size-4' />
              {backButtonText}
            </Link>
          )}

          <header className='mb-8'>
            <h1 className='text-4xl lg:text-4xl font-bold text-white mb-6 leading-tight'>
              {post.title}
            </h1>

            <div className='flex items-center gap-4 mb-6'>
              <time className='text-sm text-white/60'>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            <div className='relative overflow-hidden rounded-2xl mb-8'>
              <img
                src={post.cover?.url}
                alt={post.title}
                className='w-full h-[400px] lg:h-[500px] object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
            </div>
          </header>

          <div className='prose prose-lg prose-invert max-w-none'>
            <div className='bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl mb-8'>
              <summary className='text-lg font-medium text-white leading-relaxed list-none'>
                {post.abstract}
              </summary>
            </div>

            <div className='article-content'>
              <ContentSanitizer content={post.content} />
            </div>
          </div>

          {convertedFaqs.length > 0 && (
            <section className='mt-16'>
              <SectionTitle title='Quick FAQ' subtitle='' className='mb-8' />
              <div className='flex justify-center'>
                <FAQContent faqs={convertedFaqs} />
              </div>
            </section>
          )}
        </article>

        {latestNews && latestNews.length > 0 && (
          <aside className='lg:w-80 lg:flex-shrink-0'>
            <div className='mb-8'>
              <h3 className='text-xl font-semibold mb-6 text-white'>
                Follow us
              </h3>
              <div className='flex gap-2'>
                {social
                  ?.filter(
                    (social) => social.lang === null || social.lang === 'en'
                  )
                  .map((social) => (
                    <a
                      href={social.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:text-secondary transition-colors duration-300 bg-white/5 hover:bg-secondary/20 border border-secondary/20 p-2 rounded-md flex items-center gap-2'
                    >
                      <img
                        src={social.icon.url}
                        alt={social.platform}
                        width={40}
                        height={40}
                        className='hover:scale-110 transition-all duration-300 invert-100'
                      />
                    </a>
                  ))}
              </div>
            </div>
            <div className='sticky top-8'>
              <h3 className='text-xl font-semibold mb-6 text-white'>
                Latest News
              </h3>
              <div className='space-y-4'>
                {latestNews.map((news) => (
                  <PostPreview
                    key={news.id}
                    imgURL={news.cover?.url}
                    title={news.title}
                    slug={news.url_slug}
                  />
                ))}
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}
