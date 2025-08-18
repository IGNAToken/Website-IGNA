import Badge from '@/components/shared/Badge'
import Card from '@/components/shared/Card'
import SectionTitle from '@/components/shared/SectionTitle'
import { BrushCleaning } from 'lucide-react'

const Technology = () => {
  return (
    <section className='flex flex-col items-center gap-12 px-4 mt-32'>
      <Badge>Technology</Badge>
      <SectionTitle
        title='What is pyrolysis?'
        subtitle='Turn waste into valuable energy and resources with clean, efficient pyrolysis technology.'
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <Card
          title='Sustainable Waste Conversion'
          description='Pyrolysis converts plastic waste that is difficult to recycle with conventional methods into valuable raw materials with minimal harmful emissions, preventing plastic waste from ending up in dumpsites.'
          icon={
            <>
              <BrushCleaning className='size-8 ' />
            </>
          }
        />
        <Card
          title='Energy and Resource Recovery'
          description='Through thermal decomposition, pyrolysis recovers energy-rich products like pyrolysis oil, syngas, and char, ideal for use in power generation, agriculture, chemical and paint industry.'
          icon={
            <>
              <BrushCleaning className='size-8 ' />
            </>
          }
        />
        <Card
          title='Low-Emission, Circular Solution'
          description='Operating without oxygen, pyrolysis drastically reduces CO₂ emissions and plays a key role in supporting circular economy by turning huge amount of plastic waste into reusable resources.'
          icon={
            <>
              <BrushCleaning className='size-8 ' />
            </>
          }
        />
      </div>
    </section>
  )
}

export default Technology
