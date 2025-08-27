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
            start: '110% bottom',
          },
        },
      )
    })
  }, [])

  return (
    <div className={styles.list}>
      <EcosystemItem
        index={0}
        title='Pearl'
        description='The ethical operating system and collective superintelligence that hard-codes love, fairness, and safety into AI and robots, creating reliably trustworthy machine behavior at scale.'
      />
      <EcosystemItem
        index={1}
        title='MICI'
        description='A worldwide institute uniting academia, industry, and policymakers to research, fund, and guide technologies so they consistently advance human flourishing rather than exploitation.'
      />
      <EcosystemItem
        index={2}
        title='Protocols'
        description='A yearly summit that prototypes, tests, and publishes open protocols—ethical, technical, and cultural—that align AI, economics, and governance with human well-being.'
      />
      <EcosystemItem
        index={3}
        title='Magic Campus'
        description='A practice-based, city-embedded education model where AI mentors and real projects cultivate six innate human intelligences across a lifetime of learning and creation.'
      />
      <EcosystemItem
        index={4}
        title='Izumo Village'
        description='A real-world micro-city in Baja that pilots Fun City values—architecture, ecology, art, and robotics—so coherent culture and governance function in everyday life.'
      />
      <EcosystemItem
        index={5}
        title='LoveCoin'
        description='A transparent, on-chain currency that rewards beauty, contribution, and emotional coherence, turning trust and care into measurable economic value across the community.'
      />
    </div>
  )
}

export default EcosystemList
