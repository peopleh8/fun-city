'use client'

import React, { FC } from 'react'
import { ChildProps } from '@/types/common.types'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import styles from '@/layouts/Main/MainLayout.module.scss'

const MainLayout: FC<ChildProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
