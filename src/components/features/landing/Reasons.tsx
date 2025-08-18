import Badge from '@/components/shared/Badge'
import CarouselCard from '@/components/shared/CarouselCard'
import SectionTitle from '@/components/shared/SectionTitle'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import withLoading from '@/components/shared/withLoading'
import useCarousel from '@/hooks/useCarousel'
import type { Reason } from '@/types/Reason'

function Reasons() {
  return (
    <section className='flex flex-col items-center gap-12 px-4 mt-32'>
      <Badge>Reasons to buy</Badge>
      <SectionTitle title='The most important information about our ecosystem' subtitle='' />
      <ReasonsContentWithLoading />
    </section>
  )
}

function ReasonsContent({ reasons }: { reasons: Reason[] }) {
  return (
    <div className='w-full md:max-w-3xl max-w-full flex justify-center'>
      <Carousel className='w-full'>
        <CarouselContent className=' '>
          {reasons?.map((reason, index) => (
            <CarouselItem className='flex md:flex-row flex-col-reverse gap-4 items-center p-10' key={index}>
              <CarouselCard title={reason.title} description={reason.description} imgURL={reason.media.url} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

function ReasonsContentWithLoading() {
  const { isLoading, error, refetch, data } = useCarousel()
  const WrappedReasonsContent = withLoading(ReasonsContent)
  return <WrappedReasonsContent isLoading={isLoading} error={error} refetch={refetch} reasons={data || []} />
}

export default Reasons
