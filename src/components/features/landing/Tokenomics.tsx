import SectionTitle from '@/components/shared/SectionTitle'
import Badge from '@/components/shared/Badge'
import { IGNA_TOKEN_MINT } from '@/config'
import { shortenAddress } from '@/lib/stringHelpers'
import RadialChart from '@/components/shared/RadialChart'
import { useState } from 'react'

const tokenomics = [
  {
    title: 'Reserve',
    amount: 7,
    description:
      'Reserved for future development, partnerships, and strategic initiatives to ensure long-term project sustainability.',
  },
  {
    title: 'Marketing',
    amount: 7,
    description:
      'Allocated for marketing campaigns, community building, and promotional activities to increase project visibility.',
  },
  {
    title: 'Private Sale',
    amount: 23,
    description:
      'Tokens sold to private investors and early supporters at preferential rates during the initial funding round.',
  },
  {
    title: 'Pre-Sale',
    amount: 3,
    description: 'Limited tokens available for public pre-sale participants before the main launch.',
  },
  {
    title: 'Liquidity',
    amount: 30,
    description: 'Reserved for DEX liquidity pools to ensure stable trading and price discovery for the token.',
  },
  {
    title: 'Management',
    amount: 30,
    description: 'Allocated to the core team and advisors, with vesting schedules to align long-term interests.',
  },
]

const Tokenomics = () => {
  const [selectedItem, setSelectedItem] = useState<(typeof tokenomics)[0] | null>(null)

  const handleItemClick = (_index: number, label: string) => {
    const item = tokenomics.find((item) => item.title === label)
    if (item) {
      setSelectedItem(item)
    }
  }

  return (
    <section className='flex flex-col items-center gap-12 px-4 mt-32 bg-cover bg-center max-w-full'>
      <Badge>Tokenomics</Badge>
      <SectionTitle title='All about the distribution' subtitle='' />

      <div className='flex flex-col items-center gap-8 w-full max-w-6xl'>
        <RadialChart
          series={tokenomics.map((item) => item.amount)}
          labels={tokenomics.map((item) => item.title)}
          onItemClick={handleItemClick}
        />

        {/* Description Panel */}
        <div className='lg:w-[400px] lg:max-w-4/5 w-full'>
          <div className=' bg-black/10 backdrop-blur-sm border border-primary/10 rounded-lg p-6 h-fit'>
            {selectedItem ? (
              <>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-4 h-4 rounded-full bg-gradient-to-r from-primary to-[#00FFFD]'></div>
                  <h3 className='text-xl font-bold text-white'>{selectedItem.title}</h3>
                  <span className='text-primary font-bold text-lg'>{selectedItem.amount}%</span>
                </div>
                <p className='text-gray-300 leading-relaxed'>{selectedItem.description}</p>
              </>
            ) : (
              <>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-4 h-4 rounded-full bg-gradient-to-r from-primary to-[#00FFFD]'></div>
                  <h3 className='text-xl font-bold text-white'>Select a segment</h3>
                </div>
                <p className='text-gray-300 leading-relaxed'>
                  Click on any segment of the chart to see detailed information about that allocation.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className='flex gap-2 bg-gradient-to-r from-primary to-[#00FFFD] px-4 py-3 rounded-lg w-fit items-center'>
        <span className='text-black font-bold uppercase'>CA:</span>
        <span className='text-black font-bold'>{shortenAddress(IGNA_TOKEN_MINT)}</span>
        <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#000000'>
          <path d='M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z' />
        </svg>
      </div>
    </section>
  )
}

export default Tokenomics
