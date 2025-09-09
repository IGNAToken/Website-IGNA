import Badge from '@/components/shared/Badge'
import ContentSanitizer from '@/components/shared/ContentSanitizer'
import SectionTitle from '@/components/shared/SectionTitle'
import withLoading from '@/components/shared/withLoading'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import useStrategy from '@/hooks/useStrategy'
import type { StrategyType } from '@/types/Strategy'

const Strategy = () => {
  return (
    <section id='strategy' className='flex flex-col items-center gap-12 px-4 mt-32'>
      <Badge>Strategy</Badge>
      <SectionTitle title='Unveiling the Strategy of the IGNA Project' subtitle='' />
      <StrategyContentWithLoading />
    </section>
  )
}

const StrategyContent = ({ strategy }: { strategy: StrategyType[] }) => {
  return (
    <div className='flex flex-col gap-4 max-w-xl w-full'>
      {strategy.map((item) => (
        <Accordion key={item.id} type='single' collapsible>
          <AccordionItem className='border border-primary/10 rounded-lg px-8 py-2 bg-primary/2' value={item.question}>
            <AccordionTrigger className='font-bold text-lg'>{item.question}</AccordionTrigger>
            <AccordionContent>
              <ContentSanitizer content={item.content} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  )
}

const StrategyContentWithLoading = () => {
  const { isLoading, error, refetch, data } = useStrategy()
  const WrappedStrategyContent = withLoading(StrategyContent)
  return <WrappedStrategyContent isLoading={isLoading} error={error} refetch={refetch} strategy={data || []} />
}

export default Strategy
