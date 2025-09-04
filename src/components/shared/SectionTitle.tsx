type Props = {
  title: string
  subtitle: string
  className?: string
}

const SectionTitle = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <h2 className='text-3xl font-bold text-center '>{title}</h2>
      <p className='text-lg font-light text-center text-white/75 max-w-xl'>{subtitle}</p>
    </div>
  )
}

export default SectionTitle
