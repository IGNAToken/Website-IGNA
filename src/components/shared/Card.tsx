import React from 'react'

type Props = {
  title: string
  description: string
  icon: React.ReactNode
}

const Card = ({ title, description, icon }: Props) => {
  return (
    <div className='flex flex-col gap-4 border border-white/10 rounded-xl px-6 py-12 bg-background/50 backdrop-blur-sm items-center max-w-xs'>
      <div className='size-10 bg-primary/30 rounded-full flex items-center justify-center blur-xs relative z-0'></div>
      <div className='absolute'>{icon}</div>
      <h3 className='text-xl font-bold text-primary text-center'>{title}</h3>
      <p className='text-sm font-light text-center text-white/75'>{description}</p>
    </div>
  )
}

export default Card
