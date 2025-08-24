'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FoundationsItem from '@/screens/Home/components/Foundations/FoundationsItem'
import styles from '@/screens/Home/components/Foundations/Foundations.module.scss'

gsap.registerPlugin(ScrollTrigger)

const FoundationsList: FC = () => {
  useEffect(() => {
    const items = gsap.utils.toArray<HTMLElement>(`.${styles.item}`)

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: item,
            start: '30% bottom',
          },
        },
      )
    })
  }, [])

  return (
    <div className={styles.list}>
      <FoundationsItem />
      <FoundationsItem />
    </div>
  )
}

export default FoundationsList
