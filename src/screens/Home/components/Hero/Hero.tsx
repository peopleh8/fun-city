'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import HeroContent from '@/screens/Home/components/Hero/HeroContent'
import styles from '@/screens/Home/components/Hero/Hero.module.scss'

const Hero: FC = () => {
  useEffect(() => {
    gsap.set(`.${styles.inner} > *`, { transition: 'none' })
    gsap.to(`.${styles.inner} > *`, 0.6, {
      opacity: 1,
      y: 0,
      delay: 2.5,
      stagger: 0.1,
      onComplete: () => {
        gsap.set(`.${styles.inner} > *`, { transition: '' })
      },
    })
  }, [])

  return (
    <section className={styles.hero}>
      <video
        src='/hero.mp4'
        autoPlay
        loop
        muted
        preload='auto'
      />
      <HeroContent />
    </section>
  )
}

export default Hero
