import React from 'react'

type Props = {
  href: string
  icon: React.ReactNode
  title: string
}

const FileCard = ({ href, title, icon }: Props) => {
  return (
    <a
      className='border border-white/10 rounded-xl px-6 py-4 max-w-40 w-40 bg-background/50 backdrop-blur-sm items-center justify-center hover:border-primary/25 hover:bg-primary/5 transition-all duration-300'
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='flex flex-col items-center gap-2'>
        {icon}
        <p className='text-lg '>{title}</p>
      </div>
    </a>
  )
}

export default FileCard
