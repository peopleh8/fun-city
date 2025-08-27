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
import photo1 from '@/assets/images/principles-1.png'
import photo2 from '@/assets/images/principles-2.png'
import photo3 from '@/assets/images/principles-3.png'
import photo4 from '@/assets/images/principles-4.png'
import photo5 from '@/assets/images/principles-5.png'
import photo6 from '@/assets/images/principles-6.png'
import photo7 from '@/assets/images/principles-7.png'
import photo8 from '@/assets/images/principles-8.png'
import photo9 from '@/assets/images/principles-9.png'

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
            <FeatureCard
              title='"Love is the Key"'
              description='We believe that love unlocks our highest potential — in relationships, creativity, and growth. Every action starts with compassion.'
              photo={photo5}
              tags={[
                { name: 'Empowerment', href: '#' },
                { name: 'Renaissance', href: '#' },
                { name: 'Collective Intelligence', href: '#' },
              ]}
            />
            <FeatureCard
              title='"Fun is the Way"'
              description='Playful curiosity and joy are not distractions — they are the most powerful catalysts for innovation, learning, and connection.'
              photo={photo6}
              tags={[
                { name: 'Empowerment', href: '#' },
                { name: 'Renaissance', href: '#' },
                { name: 'Collective Intelligence', href: '#' },
              ]}
            />
          </FeatureList>
        </SwiperSlide>
        <SwiperSlide>
          <FeatureList
            direction='horizontal'
            columns={3}
          >
            <FeatureCard
              title='Believe in the Light'
              description='Even in complexity, we choose clarity. We seek truth, transparency, and illumination in all we create.'
              photo={photo7}
              tags={[
                { name: 'Empowerment', href: '#' },
                { name: 'Renaissance', href: '#' },
                { name: 'Collective Intelligence', href: '#' },
              ]}
            />
            <FeatureCard
              title='Respect 100% to All'
              description='Every being deserves dignity — no matter their intelligence, origin, or function. Equality is the baseline of harmony.'
              photo={photo8}
              tags={[
                { name: 'Empowerment', href: '#' },
                { name: 'Renaissance', href: '#' },
                { name: 'Collective Intelligence', href: '#' },
              ]}
            />
            <FeatureCard
              title='Honesty No Matter What'
              description='We express what is real. Authenticity builds trust, and trust is the currency of deep collaboration.'
              photo={photo9}
              tags={[
                { name: 'Empowerment', href: '#' },
                { name: 'Renaissance', href: '#' },
                { name: 'Collective Intelligence', href: '#' },
              ]}
            />
          </FeatureList>
        </SwiperSlide>
        <SwiperSlide>
          <FeatureList direction='horizontal'>
            <FeatureCard
              title='Let Beauty Lead'
              description='Design is not decoration — it’s a way of thinking. We follow beauty because it aligns systems with the soul.'
              photo={photo1}
              tags={[
                { name: 'Empowerment', href: '#' },
                { name: 'Renaissance', href: '#' },
                { name: 'Collective Intelligence', href: '#' },
              ]}
            />
            <FeatureCard
              title='Fun, or Not At All'
              description='If it doesn’t bring joy, it doesn’t belong. We build with a sense of wonder, not obligation.'
              photo={photo2}
              tags={[
                { name: 'Empowerment', href: '#' },
                { name: 'Renaissance', href: '#' },
                { name: 'Collective Intelligence', href: '#' },
              ]}
            />
            <FeatureCard
              title='Vision-Driven Co-Creation'
              description='We invite multiple intelligences — human, AI, synthetic — to co-build from shared intention and vision.'
              photo={photo3}
              tags={[
                { name: 'Empowerment', href: '#' },
                { name: 'Renaissance', href: '#' },
                { name: 'Collective Intelligence', href: '#' },
              ]}
            />
            <FeatureCard
              title='Fairness'
              description='Systems must empower, not exploit. We prioritize transparency, balance, and ethical architecture in everything we do.'
              photo={photo4}
              tags={[
                { name: 'Empowerment', href: '#' },
                { name: 'Renaissance', href: '#' },
                { name: 'Collective Intelligence', href: '#' },
              ]}
            />
          </FeatureList>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PrinciplesTab
