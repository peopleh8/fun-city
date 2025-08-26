'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FooterTop from '@/components/Footer/FooterTop'
import FooterBot from '@/components/Footer/FooterBot'
import styles from '@/components/Footer/Footer.module.scss'

gsap.registerPlugin(ScrollTrigger)

const Footer: FC = () => {
  useEffect(() => {
    const topTl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.top}`,
        start: '60% bottom',
      },
    })

    const botTl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.bot}`,
        start: '60% bottom',
      },
    })

    topTl.fromTo(`.${styles.top}`, { opacity: 0, y: 30 }, { opacity: 1, duration: 0.6, y: 0 })
    botTl.fromTo(`.${styles.bot}`, { opacity: 0 }, { opacity: 1, duration: 0.6 })
  }, [])

  return (
    <footer className={styles.footer}>
      <FooterTop />
      <FooterBot />
    </footer>
  )
}

export default Footer
