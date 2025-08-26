'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import classNames from 'classnames'
import { FeatureListProps } from '@/types/common.types'
import styles from '@/components/Feature/Feature.module.scss'

gsap.registerPlugin(ScrollTrigger)

const FeatureList: FC<FeatureListProps> = ({ direction = 'vertical', children }) => {
  const classes = classNames(styles.list, styles[direction])

  useEffect(() => {
    const items = gsap.utils.toArray<HTMLElement>(`.${styles.horizontal} .${styles.card}`)

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: item,
            start: '30% bottom',
          },
        },
      )
    })
  }, [direction])

  return <div className={classes}>{children}</div>
}

export default FeatureList
