import SectionTitle from '@/components/shared/SectionTitle'
import Badge from '@/components/shared/Badge'
import { IGNA_TOKEN_MINT } from '@/config'
import { shortenAddress } from '@/lib/stringHelpers'
import RadialChart from '@/components/shared/RadialChart'
import { useState } from 'react'

const Liquidity = () => {
  return (
    <div className='flex flex-col gap-4'>
      The Liquidity Pool is a fundamental element of our tokenomics, established to enhance the overall liquidity and
      trading efficiency of our token. This pool is allocated to 30% of the total token supply and serves several
      essential functions such as facilitating trading and supporting ecosystem growth. The Liquidity Pool contributes
      to greater market depth, which helps maintain stable prices and reduces volatility, making the token more
      attractive to investors. In addition, this allocation will be used to provide the necessary liquidity on both
      decentralized (DEX) and centralized (CEX) exchanges to ensure smooth trading operations.
      <div>
        <strong>Buyback and reinjection</strong>
      </div>
      <p>
        SlavkaSk n.o., the issuer of the IGNA token, receives regular donations, the majority of which will be allocated
        to liquidity. The project also maintains a quarterly token buyback program, further supporting market stability.
        In this program, 15% of oil revenue will be used to increase liquidity on exchanges—ensuring a sufficient volume
        of IGNA tokens for uninterrupted trading.
      </p>
      <p>
        5% of oil revenue will be used to buy back IGNA tokens. For the first five pyrolysis plants, all repurchased
        tokens will be burned.
      </p>
    </div>
  )
}

const Reserve = () => {
  return (
    <div className='flex flex-col gap-4'>
      <p>
        The Reserve Pool serves as a crucial component of our tokenomics, designed to ensure the long-term stability and
        sustainability of the token ecosystem. This pool is allocated to 7% of the total token supply and is
        strategically reserved for several key purposes like market stabilization, future development, partnerships and
        collaborations.
      </p>
    </div>
  )
}

const PreSale = () => {
  return (
    <div className='flex flex-col gap-4'>
      <p>
        The Pre-Sale allocation represents a segment of tokens available to a wider group of investors prior to the
        public sale. The Pre-Sale phase of IGNA is planned to be organized in a single round, featuring a discount. This
        strategy aims to attract early-stage investors by rewarding them with a substantial discount for their early
        commitment to the project. The funds collected during the Pre-Sale are planned to be used for purchasing the
        first pyrolysis machine for the IGNA project, constructing the plant facility, authorizing the machine, and
        covering operational costs.
      </p>
      <p>
        The Pre-Sale ended in December 2024, ahead of the EU’s MiCA regulation restricting unregulated token sales from
        December 31. Unsold tokens were transferred to the Liquidity Pool for potential future use in line with the
        project’s strategy.
      </p>
    </div>
  )
}

const Marketing = () => {
  return (
    <div className='flex flex-col gap-4'>
      <p>
        The marketing allocation of tokens is designed to enable the company to effectively publicize its brand and
        activities. This strategic distribution of tokens aims to maximize visibility and engagement with target
        audiences through various marketing initiatives. This allocation is utilized for promoting the IGNA ecosystem,
        enhancing its visibility across potential users, partners, and stakeholders. These resources are dedicated to
        optimize campaigns and advertisement performance aimed at raise awareness.
      </p>
    </div>
  )
}

const PrivateSale = () => {
  return (
    <div className='flex flex-col gap-4'>
      <span className='font-bold italic'>Angel Investor Packages</span>
      <span className='font-bold'>IGNA Tokens: 80,000,000</span>
      <p>
        Due to the restrictive impact of the MiCA regulation, only a limited number of IGNA tokens were sold during the
        Pre-Sale phase. As a result, the funds raised were insufficient to finance the purchase of the initial pyrolysis
        unit. The continuation of the project became dependent on a single angel investor, who acquired 80 million IGNA
        tokens, thereby enabling the procurement of the first machine and providing significant momentum to the IGNA
        initiative.
      </p>
      <div className='flex flex-col gap-2'>
        <span className='font-bold'>Lock-up period:</span>
        <span>3 years (until August 1, 2028)</span>
        <span className='font-bold'>Release schedule:</span>
        <span>12-month monthly vesting</span>
      </div>
      <div className='flex flex-col gap-2'>
        <span className='font-bold italic'>Supporter Token Packages</span>
        <span className='font-bold'>IGNA Tokens: 150,000,000</span>
        <div className='flex flex-col gap-2'>
          <p>
            The Supporter Token Packages are designed for serious stakeholders and early partners who wish to support
            IGNA’s long-term objectives through financial contributions – specifically, the purchase and commissioning
            of pyrolysis units. The sale of three packages will enable the purchase and operation of three pyrolysis
            machines.
          </p>
          <p>
            A total of 150 million IGNA tokens will be allocated under this program, divided into three equal parts (3 ×
            50 million tokens), under the following conditions:
          </p>
          <div className='my-4'>
            <div className=''>
              <span className='font-bold'>Minimum purchase:</span>
              <span> $5,000 worth of tokens per package</span>
            </div>
            <div className=''>
              <span className='font-bold'>Price:</span>
              <span> 1 IGNA token = $0.010 (50% lower than the listing price) </span>
            </div>
            <div className=''>
              <span className='font-bold'>Cliff period:</span>
              <span> 3 years </span>
            </div>
          </div>
          <p>
            If, on the final day of the cliff period, the IGNA token price does not reach $0.02, the investor has the
            right to opt out of keeping the token package. In such a case, the project will repurchase the package at
            $0.02/token.
          </p>
          <p>
            📩 Investor inquiries: <a href='mailto:ignatoken@gmail.com'>ignatoken@gmail.com</a>{' '}
          </p>
          <p>Last date of token sale: 31st December 2025</p>
        </div>
      </div>
    </div>
  )
}

const Management = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className=''>
            <span className='font-bold'>3%</span>
            <span> - after the opening of the</span>
            <span className='font-bold ml-2'>
              {index + 1}
              {index === 0 ? 'st' : index === 1 ? 'nd' : index === 2 ? 'rd' : 'th'} pyrolysis plant
            </span>
          </div>
        ))}
      </div>
      <p>
        Since the company, operating the project, is a non-profit organization, the founders of the company including
        the controller are not eligible to receive a salary for their work at the organization. Consequently, after the
        official opening of each plant, the founders can unlock 3% of their tokens and 3% of the controller's tokens to
        sell. Therefore, access to the total token supply will be available to the management after the construction of
        10 pyrolysis plants. With this, the IGNA team can ensure the long-term and successful operation of the project.
      </p>
      <p>
        The management's 30% token ownership is justified, as managing the construction of plants worldwide involves
        many complex burdens and challenges, including market analysis, site selection, obtaining permits, managing
        suppliers and raw materials, recruiting labor, building infrastructure, procuring and commissioning pyrolysis
        equipment, organizing and executing plant construction, and managing global production logistics and technology
        transfer. The management is also committed to organizing and running donation and educational programs, which
        require significant resources, expertise, and tireless effort.
      </p>
    </div>
  )
}
const tokenomics = [
  {
    title: 'Reserve',
    amount: 7,
    content: <Reserve />,
  },
  {
    title: 'Marketing',
    amount: 7,
    content: <Marketing />,
  },
  {
    title: 'Private Sale',
    amount: 23,
    content: <PrivateSale />,
  },
  {
    title: 'Pre-Sale',
    amount: 3,
    content: <PreSale />,
  },
  {
    title: 'Liquidity',
    amount: 30,
    content: <Liquidity />,
  },
  {
    title: 'Management',
    amount: 30,
    content: <Management />,
  },
]

const Tokenomics = () => {
  const [selectedItem, setSelectedItem] = useState<(typeof tokenomics)[0] | null>(null)
  const [copied, setCopied] = useState(false)

  const handleItemClick = (_index: number, label: string) => {
    const item = tokenomics.find((item) => item.title === label)
    if (item) {
      setSelectedItem(item)
    }
  }

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(IGNA_TOKEN_MINT)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy address:', err)
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
        <div className='lg:w-[700px] lg:max-w-4/5 w-full'>
          <div className=' bg-black/10 backdrop-blur-sm border border-primary/10 rounded-lg p-6 h-fit'>
            {selectedItem ? (
              <>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-4 h-4 rounded-full bg-gradient-to-r from-primary to-[#00FFFD]'></div>
                  <h3 className='text-xl font-bold text-white'>{selectedItem.title}</h3>
                  <span className='text-primary font-bold text-lg'>{selectedItem.amount}%</span>
                </div>
                <div className='text-lg font-bold text-white mb-4'>
                  IGNA Tokens: {(selectedItem.amount * 10000000).toLocaleString()}
                </div>
                {selectedItem.content}
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

      <div
        className='flex gap-2 bg-gradient-to-r from-primary to-[#00FFFD] px-4 py-3 rounded-lg w-fit items-center cursor-pointer hover:opacity-80 transition-opacity'
        onClick={handleCopyAddress}
        title='Click to copy contract address'
      >
        <span className='text-black font-bold uppercase'>CA:</span>
        <span className='text-black font-bold'>{shortenAddress(IGNA_TOKEN_MINT)}</span>
        {copied ? (
          <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#000000'>
            <path d='M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z' />
          </svg>
        ) : (
          <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#000000'>
            <path d='M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z' />
          </svg>
        )}
      </div>
    </section>
  )
}

export default Tokenomics
