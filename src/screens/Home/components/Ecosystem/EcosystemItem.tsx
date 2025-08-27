'use client'

import { FC, useEffect, useState } from 'react'
import { Collapse } from 'react-collapse'
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'
import styles from '@/screens/Home/components/Ecosystem/Ecosystem.module.scss'

interface EcosystemItemProps {
  index: number
  title: string
  description: string
}

const EcosystemItem: FC<EcosystemItemProps> = ({ index, title, description }) => {
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
        <div className={styles.counter}>{index < 10 ? `0${index + 1}` : index + 1}</div>
        <div className={styles.title}>{title}</div>
      </div>
      <Collapse isOpened={isOpen}>
        <div className={styles.card}>
          <div className={styles.cardCounter}>{`[ ${index < 10 ? `0${index + 1}` : index + 1} ]`}</div>
          <p className={styles.cardDesc}>{description}</p>
        </div>
      </Collapse>
    </div>
  )
}

export default EcosystemItem
