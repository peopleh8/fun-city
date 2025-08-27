'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FoundationsItem from '@/screens/Home/components/Foundations/FoundationsItem'
import styles from '@/screens/Home/components/Foundations/Foundations.module.scss'
import photo1 from '@/assets/images/foundations-card-1.png'
import photo2 from '@/assets/images/foundations-card-2.png'

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
            start: '40% bottom',
          },
        },
      )
    })
  }, [])

  return (
    <div className={styles.list}>
      <FoundationsItem
        title='Philosophy'
        description='Harmony sits at our core—discover ancient and modern frameworks shaping Fun City; subscribe to get all Philosophy updates.'
        photo={photo1}
        href='#'
      />
      <FoundationsItem
        title='Glossary'
        description='Definitions of the terms, systems, and symbols we use—subscribe to get updates as we share our Glossary.'
        photo={photo2}
        href='#'
      />
    </div>
  )
}

export default FoundationsList
