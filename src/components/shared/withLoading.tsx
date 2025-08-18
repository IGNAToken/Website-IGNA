import React from 'react'
import Loader from './Loader'
import { Button } from '../ui/button'

type WithLoadingProps = {
  isLoading: boolean
  error?: Error | string | null
  fetchNextPage?: () => void
  hasNextPage?: boolean
  isFetchingNextPage?: boolean
  refetch?: () => void
}

function withLoading<P extends object>(WrappedComponent: React.ComponentType<P>) {
  return function ComponentWithLoading(props: P & WithLoadingProps) {
    const { isLoading, error, refetch, ...rest } = props as WithLoadingProps

    if (isLoading) {
      return (
        <div className='flex justify-center items-center h-full'>
          <Loader />
        </div>
      )
    }

    if (error) {
      return (
        <div className='flex justify-center flex-col gap-4 items-center h-full'>
          <p>Error: {typeof error === 'string' ? error : error?.message}</p>
          {refetch && <Button onClick={refetch}>Retry</Button>}
        </div>
      )
    }

    // @ts-ignore
    return <WrappedComponent {...(rest as P)} />
  }
}

export default withLoading
