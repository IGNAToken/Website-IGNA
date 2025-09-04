import Badge from '@/components/shared/Badge'
import ContentSanitizer from '@/components/shared/ContentSanitizer'
import SectionTitle from '@/components/shared/SectionTitle'
import withLoading from '@/components/shared/withLoading'
import { Accordion, AccordionItem } from '@/components/ui/accordion'
import { AccordionTrigger } from '@/components/ui/accordion'
import { AccordionContent } from '@/components/ui/accordion'
import useFAQ from '@/hooks/useFAQ'
import type { FAQ } from '@/types/FAQ'

const FAQSection = () => {
  return (
    <section className='flex flex-col items-center gap-12 px-4 mt-32'>
      <Badge>FAQ</Badge>
      <SectionTitle title='Frequently Asked Questions' subtitle='' />
      <FAQContentWithLoading />
    </section>
  )
}

export function FAQContent({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className='flex flex-col gap-4 max-w-xl w-full'>
      {faqs
        ?.sort((a, b) => a.id - b.id)
        .map((faq, index) => (
          <Accordion type='single' collapsible key={index}>
            <AccordionItem className='border border-primary/10 rounded-lg px-8 py-2 bg-primary/2' value={faq.question}>
              <AccordionTrigger className='font-bold text-lg'>{faq.question}</AccordionTrigger>
              <AccordionContent className='text-white/70'>
                <ContentSanitizer content={faq.answer} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
    </div>
  )
}

function FAQContentWithLoading() {
  const { isLoading, error, refetch, data } = useFAQ()
  const WrappedFAQContent = withLoading(FAQContent)
  return <WrappedFAQContent isLoading={isLoading} error={error} refetch={refetch} faqs={data || []} />
}

export default FAQSection
