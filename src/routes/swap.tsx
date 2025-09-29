import IntegratedTerminal from '@/components/features/swap/IntegratedTerminal'
import { IGNA_TOKEN_MINT } from '@/config'
import { createFileRoute } from '@tanstack/react-router'
import bgPattern from '@/assets/main-bg-pattern.png'
import NewsCard from '@/components/shared/NewsCard'
import useBlogPost from '@/hooks/useBlogPost'

export const Route = createFileRoute('/swap')({
  component: Swap,
})

function Swap() {
  const { data: howToBuyData } = useBlogPost('how-to-buy-igna')
  const { data: warningsData } = useBlogPost('why-do-i-see-warnings-when-buying-igna')

  const howToBuyPost = howToBuyData?.data[0]
  const warningsPost = warningsData?.data[0]

  return (
    <div className='pt-10 p-2 flex flex-col items-center bg-repeat-space flex-grow relative'>
      <div
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: '300px',
          backgroundRepeat: 'space',
          opacity: 0.2,
          zIndex: 0,
          position: 'absolute',
          top: -100,
          left: -50,
          right: 0,
          bottom: 0,
        }}
      />
      <div className='flex flex-col items-center h-full z-10'>
        <h2 className='text-2xl font-bold'>Buy $IGNA with any token</h2>
        <IntegratedTerminal
          formProps={{
            initialInputMint: 'So11111111111111111111111111111111111111112',
            initialOutputMint: IGNA_TOKEN_MINT,
          }}
        />
      </div>
      <div className='flex flex-col items-center gap-6 mt-8 z-10'>
        <h3 className='text-xl font-semibold'>Helpful Resources</h3>
        <div className='flex flex-col md:flex-row gap-4 items-center'>
          {howToBuyPost && (
            <NewsCard
              title={howToBuyPost.title}
              description={howToBuyPost.abstract}
              imgURL={howToBuyPost.cover?.url || '/placeholder.jpg'}
              date={howToBuyPost.publishedAt}
              slug={howToBuyPost.url_slug}
              variant='secondary'
            />
          )}
          {warningsPost && (
            <NewsCard
              title={warningsPost.title}
              description={warningsPost.abstract}
              imgURL={warningsPost.cover?.url || '/placeholder.jpg'}
              date={warningsPost.publishedAt}
              slug={warningsPost.url_slug}
              variant='secondary'
            />
          )}
        </div>
      </div>
    </div>
  )
}
