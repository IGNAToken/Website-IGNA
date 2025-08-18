type Props = {
  title: string
  subtitle: string
}

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <h2 className='text-3xl font-bold text-center '>{title}</h2>
      <p className='text-lg font-light text-center text-white/75 max-w-xl'>{subtitle}</p>
    </div>
  )
}

export default SectionTitle
