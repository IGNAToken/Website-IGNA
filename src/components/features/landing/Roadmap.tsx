import Badge from '@/components/shared/Badge'
import SectionTitle from '@/components/shared/SectionTitle'
import CustomRoadmap from '@/components/shared/CustomRoadmap'
import useRoadmap from '@/hooks/useRoadmap'
import withLoading from '@/components/shared/withLoading'
import type { Roadmap } from '@/types/Roadmap'

const RoadmapSection = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-12 px-4 mt-32'>
      <Badge>Roadmap</Badge>
      <SectionTitle title='Our plans and achievements' subtitle='' />
      <div className='container mx-auto'>
        <RoadmapContentWithLoading />
      </div>
    </section>
  )
}

function RoadmapContent({ roadmap }: { roadmap: Roadmap[] }) {
  return <CustomRoadmap data={roadmap} />
}

function RoadmapContentWithLoading() {
  const { isLoading, error, refetch, data } = useRoadmap()
  const WrappedRoadmapContent = withLoading(RoadmapContent)
  return <WrappedRoadmapContent isLoading={isLoading} error={error} refetch={refetch} roadmap={data || []} />
}

export default RoadmapSection
