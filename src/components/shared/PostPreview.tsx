import { Link } from '@tanstack/react-router'

type Props = {
  imgURL: string
  title: string
  slug: string
}

const PostPreview = ({ imgURL, title, slug }: Props) => {
  return (
    <Link
      to='/blog/$slug'
      params={{ slug }}
      className='group flex gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-105'
    >
      <div className='w-20 h-20 overflow-hidden rounded-lg flex-shrink-0'>
        <img
          src={imgURL}
          alt={title}
          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
        />
      </div>
      <div className='flex flex-col justify-between gap-2 flex-1 min-w-0'>
        <h3 className='text-sm font-semibold text-white group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight'>
          {title}
        </h3>
        <span className='text-xs text-primary font-medium group-hover:text-primary/80 transition-colors duration-300'>
          Read more →
        </span>
      </div>
    </Link>
  )
}

export default PostPreview
