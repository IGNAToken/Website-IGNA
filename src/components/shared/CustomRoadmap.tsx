import { cn } from '@/lib/utils'
import type { Roadmap, RoadmapItem } from '@/types/Roadmap'
import { CheckIcon } from 'lucide-react'
import React from 'react'

type Props = {
  data: Roadmap[]
}

const CustomRoadmap = ({ data }: Props) => {
  return (
    <div className='flex flex-col gap-4'>
      {data.map((milestone, index) => (
        <MilestoneSection key={milestone.title} index={index}>
          <Timeline completed={milestone.roadmap_items.every((item) => item.done)} />
          <Milestone title={milestone.title} items={milestone.roadmap_items} index={index} />
        </MilestoneSection>
      ))}
    </div>
  )
}

const MilestoneSection = ({ children, index }: { children: React.ReactNode; index: number }) => {
  // TODO: add custom hook solution for this
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  const isEven = index % 2 === 0
  return (
    <div className='grid md:grid-cols-[1fr_100px_1fr] grid-cols-[40px_1fr] gap-2 md:gap-0'>
      {isEven && <div className='hidden md:block' />}
      {isMobile ? children : !isEven ? React.Children.toArray(children).reverse() : children}
      {/* {children} */}
      {!isEven && <div className='hidden md:block' />}
    </div>
  )
}

const Timeline = ({ completed = true }: { completed?: boolean }) => {
  return (
    <div className='flex flex-col items-center '>
      <div
        className={cn(
          'md:min-w-12 md:min-h-12 min-w-8 min-h-8 rounded-full border bg-transparent',
          completed ? 'border-primary/50 bg-primary/5' : 'border-white/30 bg-white/5'
        )}
      >
        <div className='flex items-center justify-center h-full'>
          {completed ? <CheckIcon className='md:size-6 size-4 text-primary' /> : <div className='md:size-6 size-4' />}
        </div>
      </div>
      <div className='flex h-full md:w-6 w-4 mt-4'>
        <div
          className={cn(
            'w-full h-full rounded-t-sm bg-gradient-to-t from-transparent to-white/30',
            completed && 'bg-gradient-to-t from-transparent to-primary/30'
          )}
        />
      </div>
    </div>
  )
}

const Milestone = ({ title, items, index }: { title: string; items: RoadmapItem[]; index: number }) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 border border-secondary/30 rounded-tl-4xl rounded-br-4xl rounded-bl-xl rounded-tr-xl py-6 px-8 max-w-lg bg-gradient-to-tl from-secondary/15 to-transparent flex-1  ',
        index % 2 === 1 && 'ml-auto'
      )}
    >
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-2'>
          <div className='text-white text-2xl font-bold'>{title}</div>
          {items.map((item) => (
            <div key={item.title} className='flex items-center gap-4'>
              <div className={cn('min-w-3 min-h-3 rounded-full bg-white/50', item.done && 'bg-primary')} />
              <div className='text-white/75 text-md'>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomRoadmap
