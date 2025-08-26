'use client'

import { FC, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { EffectFade } from 'swiper/modules'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import classNames from 'classnames'
import FeatureCard from '@/components/Feature/FeatureCard'
import FeatureList from '@/components/Feature/FeatureList'
import styles from '@/screens/Home/components/Principles/Principles.module.scss'

import 'swiper/css'
import 'swiper/css/effect-fade'

gsap.registerPlugin(ScrollTrigger)

const PrinciplesTab: FC = () => {
  const tabRef = useRef<SwiperRef>(null)
  const [activeTab, setActiveTab] = useState(0)

  const handleNavClick = (index: number) => {
    if (!tabRef.current) return

    tabRef.current?.swiper.slideTo(index)
    setActiveTab(index)
  }

  useEffect(() => {
    const navTl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.nav}`,
        start: '110% bottom',
      },
    })

    navTl.fromTo(`.${styles.navItem}`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 })
  }, [])

  return (
    <div className={styles.tab}>
      <ol className={styles.nav}>
        <li className={styles.navItem}>
          <button
            className={classNames(styles.navBtn, {
              [styles.active]: activeTab === 0,
            })}
            onClick={() => handleNavClick(0)}
          >
            Mantras
          </button>
        </li>
        <li className={styles.navItem}>
          <button
            className={classNames(styles.navBtn, {
              [styles.active]: activeTab === 1,
            })}
            onClick={() => handleNavClick(1)}
          >
            Principles
          </button>
        </li>
        <li className={styles.navItem}>
          <button
            className={classNames(styles.navBtn, {
              [styles.active]: activeTab === 2,
            })}
            onClick={() => handleNavClick(2)}
          >
            Values
          </button>
        </li>
      </ol>
      <Swiper
        className={styles.body}
        ref={tabRef}
        modules={[EffectFade]}
        slidesPerView={1}
        allowTouchMove={false}
        effect='fade'
        autoHeight={true}
        speed={300}
        fadeEffect={{ crossFade: true }}
      >
        <SwiperSlide>
          <FeatureList direction='horizontal'>
            <FeatureCard />
            <FeatureCard />
          </FeatureList>
        </SwiperSlide>
        <SwiperSlide>
          <FeatureList direction='horizontal'>
            <FeatureCard />
            <FeatureCard />
          </FeatureList>
        </SwiperSlide>
        <SwiperSlide>
          <FeatureList direction='horizontal'>
            <FeatureCard />
            <FeatureCard />
          </FeatureList>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PrinciplesTab
