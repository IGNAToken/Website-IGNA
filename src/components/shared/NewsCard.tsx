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

const NewsCard = ({ title, description, imgURL, date, variant = 'primary', slug }: Props) => {
  return (
    <div
      className={`flex flex-col border rounded-lg  w-full max-w-xs ${
        variant === 'secondary' ? 'bg-secondary/5 border-secondary/10' : 'bg-primary/5 border-primary/10'
      }`}
    >
      <img src={imgURL} alt={title} className='w-full h-[200px] object-cover rounded-t-lg' />
      <div className='flex flex-col gap-2 p-4'>
        <div className={`text-sm ${variant === 'secondary' ? 'text-secondary' : 'text-primary'}`}>
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <div className='text-2xl font-bold'>{title}</div>
        <div className='text-sm'>{truncate(description, 100)}</div>
        <div className='flex justify-end'>
          <Button
            className={`bg-secondary text-white ${variant === 'secondary' ? 'bg-secondary hover:bg-secondary/80' : 'bg-primary hover:bg-primary/80 text-background'}`}
            size='sm'
          >
            <Link to='/blog/$slug' params={{ slug }}>
              Read more
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
