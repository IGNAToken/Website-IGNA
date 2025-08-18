type Props = {
  children: React.ReactNode
}

const Badge = ({ children }: Props) => {
  return (
    <div className='bg-background border border-primary/30 text-primary-foreground px-10 py-1 rounded-3xl w-fit min-w-[150px] text-center'>
      {children}
    </div>
  )
}

export default Badge
