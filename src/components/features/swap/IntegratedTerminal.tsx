import Loader from '@/components/shared/Loader'
import { useCallback, useEffect, useState, memo } from 'react'

type SwapMode = 'ExactInOrOut' | 'ExactIn' | 'ExactOut'

export interface FormProps {
  swapMode?: SwapMode
  initialAmount?: string
  initialInputMint?: string
  initialOutputMint?: string
  fixedAmount?: boolean
  fixedMint?: string
  referralAccount?: string
  referralFee?: number
}

const IntegratedTerminal = memo((props: { formProps: FormProps }) => {
  const { formProps } = props
  const [isLoaded, setIsLoaded] = useState(false)

  const launchTerminal = useCallback(async () => {
    window.Jupiter.init({
      displayMode: 'integrated',
      integratedTargetId: 'integrated-terminal',

      formProps,
    })
  }, [formProps])

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined = undefined
    if (!isLoaded || !window.Jupiter.init) {
      intervalId = setInterval(() => {
        setIsLoaded(Boolean(window.Jupiter.init))
      }, 500)
    }

    if (intervalId) {
      return () => clearInterval(intervalId)
    }
  }, [isLoaded])

  useEffect(() => {
    setTimeout(() => {
      if (isLoaded && Boolean(window.Jupiter.init)) {
        launchTerminal()
      }
    }, 200)
  }, [isLoaded, props, launchTerminal])

  // useEffect(() => {
  //   if (!window.Jupiter.syncProps) return
  //   window.Jupiter.syncProps()
  // }, [props])

  return (
    <div className=' w-[365px] rounded-2xl text-white flex flex-col items-center mb-4 overflow-hidden mt-9'>
      <div className='flex flex-col lg:flex-row h-full w-[365px] overflow-auto'>
        <div className='w-[365px] h-full rounded-xl overflow-hidden flex justify-center'>
          {/* Loading state */}
          {!isLoaded ? (
            <div className='h-full w-[365px] mt-4 lg:mt-0 lg:ml-4 flex flex-col gap-10 items-center justify-center rounded-xl py-10'>
              <Loader />
              <p className='text-white text-sm'>Loading...</p>
            </div>
          ) : null}

          <div
            id='integrated-terminal'
            className={`flex h-full w-[365px] overflow-auto justify-center bg-black rounded-xl ${!isLoaded ? 'hidden' : ''}`}
          />
        </div>
      </div>
    </div>
  )
})

IntegratedTerminal.displayName = 'IntegratedTerminal'

export default IntegratedTerminal
