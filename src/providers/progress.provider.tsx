'use client'

import { FC } from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { ChildProps } from '@/types/common.types'

const PropgressProvider: FC<ChildProps> = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height='3px'
        color='#fff'
        options={{ showSpinner: false }}
      />
    </>
  )
}

export default PropgressProvider
