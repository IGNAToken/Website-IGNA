import { truncate } from '@/lib/stringHelpers'
import { Button } from '../ui/button'
import { Link } from '@tanstack/react-router'

type Props = {
  title: string
  description: string
  imgURL: string
  date: string
  variant?: 'primary' | 'secondary'
  slug: string
}

const NewsCard = ({
  title,
  description,
  imgURL,
  date,
  variant = 'primary',
  slug,
}: Props) => {
  return (
    <Link
      className={`group flex flex-col border rounded-xl w-full max-w-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
        variant === 'secondary'
          ? 'bg-secondary/5 border-secondary/20 hover:border-secondary/40'
          : 'bg-primary/5 border-primary/20 hover:border-primary/40'
      }`}
      to='/blog/$slug'
      params={{ slug }}
    >
      <div className='relative overflow-hidden rounded-t-xl'>
        <img
          src={imgURL}
          alt={title}
          className='w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      </div>

      <div className='flex flex-col gap-3 p-6'>
        <div
          className={`text-sm font-medium ${variant === 'secondary' ? 'text-secondary' : 'text-primary'}`}
        >
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>

        <h3 className='text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 line-clamp-2'>
          {title}
        </h3>

        <p className='text-sm text-white/70 line-clamp-3 leading-relaxed'>
          {truncate(description, 120)}
        </p>

        <div className='flex justify-end mt-2'>
          <div
            className={`inline-flex items-center text-sm font-medium transition-colors duration-300 ${
              variant === 'secondary'
                ? 'text-secondary group-hover:text-secondary/80'
                : 'text-primary group-hover:text-primary/80'
            }`}
          >
            Read more
            <svg
              className='ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NewsCard
