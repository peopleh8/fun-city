'use client'

import React, { FC } from 'react'
import { ChildProps } from '@/types/common.types'
import styles from '@/layouts/Main/MainLayout.module.scss'

const MainLayout: FC<ChildProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>Header</div>
      <main className={styles.main}>{children}</main>
      <div>Footer</div>
    </div>
  )
}

export default MainLayout
