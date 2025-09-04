import { Button } from '../ui/button'
import { useNavigate } from '@tanstack/react-router'

type Props = {
  link: string
  linkText: string
  status: number
  error: string | Error
}

const ErrorBlockWithLink = ({ link = '/', linkText, status, error }: Props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate({ to: link })
    window.scrollTo(0, 0)
    console.log('clicked')
  }
  return (
    <div className='min-h-[calc(100vh-200px)] flex items-center justify-center'>
      <p className='text-6xl font-bold pr-10'>{status}</p>
      <div className='flex flex-col gap-4 border-l-4 pl-10 border-white p-2'>
        <p className='text-2xl'>{typeof error === 'string' ? error : error?.message}</p>
        {link && <Button onClick={handleClick}>{linkText}</Button>}
      </div>
    </div>
  )
}

export default ErrorBlockWithLink
