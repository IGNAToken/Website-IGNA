declare global {
  interface Window {
    Jupiter: {
      init: (config: {
        displayMode: 'integrated'
        integratedTargetId: string
        containerStyles: {
          height: string
        }
        formProps?: {
          swapMode?: 'ExactInOrOut' | 'ExactIn' | 'ExactOut'
          initialAmount?: string
          initialInputMint?: string
          initialOutputMint?: string
          fixedAmount?: boolean
          fixedMint?: string
          referralAccount?: string
          referralFee?: number
        }
      }) => void
      syncProps?: () => void
    }
  }
}

export {}
