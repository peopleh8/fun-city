'use client'

import { FC, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import HeroContent from '@/screens/Home/components/Hero/HeroContent'
import styles from '@/screens/Home/components/Hero/Hero.module.scss'
import bg from '@/assets/images/hero-bg.png'

const Hero: FC = () => {
  useEffect(() => {
    gsap.set(`.${styles.inner} > *`, { transition: 'none' })
    gsap.to(`.${styles.inner} > *`, 0.6, {
      opacity: 1,
      y: 0,
      delay: 0.3,
      stagger: 0.1,
      onComplete: () => {
        gsap.set(`.${styles.inner} > *`, { transition: '' })
      },
    })
  }, [])

  return (
    <div className={styles.hero}>
      {/* <Image
        src={bg}
        alt='Hero Background'
        fill
        priority
        loading='eager'
      /> */}
      <video
        src='/hero.mp4'
        autoPlay
        loop
        muted
        preload='auto'
      />
      <HeroContent />
    </div>
  )
}

export default Hero
