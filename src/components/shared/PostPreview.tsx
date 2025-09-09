import { Link } from '@tanstack/react-router'

type Props = {
  imgURL: string
  title: string
  slug: string
}

const PostPreview = ({ imgURL, title, slug }: Props) => {
  return (
    <div className='flex gap-4 p-2 bg-primary/5 rounded-lg'>
      <div className='w-[120px] h-[68px] overflow-hidden rounded-lg flex-shrink-0'>
        <img src={imgURL} alt={title} className='w-full h-full object-cover' />
      </div>
      <div className='flex flex-col justify-between gap-2 p-1'>
        <h2 className='text-md font-medium'>{title}</h2>
        <Link to='/blog/$slug' params={{ slug }} className='text-sm text-primary'>
          READ MORE
        </Link>
      </div>
    </div>
  )
}

export default PostPreview
