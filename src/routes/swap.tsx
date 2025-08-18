import IntegratedTerminal from '@/components/features/swap/IntegratedTerminal'
import { IGNA_TOKEN_MINT } from '@/config'
import { createFileRoute } from '@tanstack/react-router'
import bgPattern from '@/assets/main-bg-pattern.png'

export const Route = createFileRoute('/swap')({
  component: Swap,
})

function Swap() {
  return (
    <div className='pt-10 p-2 flex flex-col items-center bg-repeat-space flex-grow relative'>
      <div
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: '300px',
          backgroundRepeat: 'space',
          opacity: 0.2,
          zIndex: 0,
          position: 'absolute',
          top: -100,
          left: -50,
          right: 0,
          bottom: 0,
        }}
      />
      <div className='flex flex-col items-center h-full z-10'>
        <h2 className='text-2xl font-bold'>Buy $IGNA with any token</h2>
        <IntegratedTerminal
          formProps={{
            initialInputMint: 'So11111111111111111111111111111111111111112',
            initialOutputMint: IGNA_TOKEN_MINT,
          }}
        />
      </div>
    </div>
  )
}
