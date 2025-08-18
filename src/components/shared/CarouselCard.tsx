type Props = {
  title: string
  description: string
  imgURL: string
}

const CarouselCard = ({ title, description, imgURL }: Props) => {
  return (
    <div className='flex md:flex-row flex-col-reverse gap-4 border-1 border-primary/10 rounded-lg bg-primary/5 w-full md:p-10 p-4'>
      <div className='flex flex-col gap-4 flex-1'>
        <div className='text-2xl font-bold mt-4 md:mt-0'>{title}</div>
        <div className='md:text-md text-sm'>{description}</div>
      </div>
      <div className='flex-1 relative my-auto'>
        <img
          src={imgURL}
          className='rounded-lg w-full  object-cover z-20 relative'
          alt={title}
          width={600}
          height={400}
        />
        <div className='border-2 border-primary absolute h-full top-2 left-2 w-full rounded-lg z-10'></div>
      </div>
    </div>
  )
}

export default CarouselCard
