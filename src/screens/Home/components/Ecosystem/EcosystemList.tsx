'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import EcosystemItem from '@/screens/Home/components/Ecosystem/EcosystemItem'
import styles from '@/screens/Home/components/Ecosystem/Ecosystem.module.scss'

gsap.registerPlugin(ScrollTrigger)

const EcosystemList: FC = () => {
  useEffect(() => {
    const items = gsap.utils.toArray<HTMLElement>(`.${styles.item}`)

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
            start: 'bottom bottom',
          },
        },
      )
    })
  }, [])

  return (
    <div className={styles.list}>
      <EcosystemItem />
      <EcosystemItem />
      <EcosystemItem />
    </div>
  )
}

export default EcosystemList
