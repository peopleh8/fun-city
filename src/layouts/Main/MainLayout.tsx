'use client'

import React, { FC, useCallback } from 'react'
import { ChildProps } from '@/types/common.types'
import PageLoader from '@/components/PageLoader/PageLoader'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Modal from '@/components/UI/Modal/Modal'
import Subscribe from '@/components/Modals/Subscribe/Subscribe'
import { useTypedSelector } from '@/hooks/use-typed-selector'
import { useTypedDispatch } from '@/hooks/use-typed-dispatch'
import { setSubscribeModalOpen } from '@/store/reducers/app.slice'
import styles from '@/layouts/Main/MainLayout.module.scss'

const MainLayout: FC<ChildProps> = ({ children }) => {
  const dispatch = useTypedDispatch()
  const { isSubscribeModalOpen } = useTypedSelector((state) => state.app)

  const closeSubscribeModalHandler = useCallback(() => {
    dispatch(setSubscribeModalOpen(false))
  }, [dispatch])

  return (
    <div className={styles.wrapper}>
      <PageLoader />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
      <Modal
        open={isSubscribeModalOpen}
        onClose={closeSubscribeModalHandler}
      >
        <Subscribe />
      </Modal>
    </div>
  )
}

export default MainLayout
