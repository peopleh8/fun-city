'use client'

import { FC, useEffect, useState } from 'react'
import { Collapse } from 'react-collapse'
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'
import styles from '@/screens/Home/components/Ecosystem/Ecosystem.module.scss'

const EcosystemItem: FC = () => {
  const [isOpen, setOpen] = useState(true)
  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' })

  const classes = classNames(styles.item, {
    [styles.active]: isOpen,
  })

  const toggleOpenHandler = () => {
    if (!isMobile) return

    setOpen((prev) => !prev)
  }

  useEffect(() => {
    setOpen(!isMobile)
  }, [isMobile])

  return (
    <div className={classes}>
      <div
        className={styles.inner}
        onClick={toggleOpenHandler}
      >
        <div className={styles.counter}>01</div>
        <div className={styles.title}>Al and Web3 Power</div>
      </div>
      <Collapse isOpened={isOpen}>
        <div className={styles.card}>
          <div className={styles.cardCounter}>[ 02 ]</div>
          <p className={styles.cardDesc}>Al, blockchain, and Web3 technologies empower our community and unlock new potential.</p>
        </div>
      </Collapse>
    </div>
  )
}

export default EcosystemItem
