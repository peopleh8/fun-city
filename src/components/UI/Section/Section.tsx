'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Subtitle from '@/components/UI/Subtitle/Subtitle'
import Title from '@/components/UI/Title/Title'
import { SectionProps } from '@/types/ui.types'
import styles from '@/components/UI/Section/Section.module.scss'
import classNames from 'classnames'

gsap.registerPlugin(ScrollTrigger)

const Section: FC<SectionProps> = ({ children, id, title, subtitle, size = 'lg', inlineType = 'type-1', externalClassNames }) => {
  const classes = classNames(styles.section, styles[inlineType], externalClassNames)

  useEffect(() => {
    const subtitles = gsap.utils.toArray<HTMLElement>('.section-subtitle')
    const titles = gsap.utils.toArray<HTMLElement>('.section-title')

    subtitles.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: el,
            start: 'bottom bottom',
          },
        },
      )
    })

    titles.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: el,
            start: 'bottom bottom',
          },
        },
      )
    })
  }, [])

  return (
    <section
      {...(id ? { id } : {})}
      className={classes}
    >
      {(title || subtitle) && (
        <div className={styles.header}>
          {subtitle && (
            <Subtitle
              content={`<strong>${subtitle}</strong>`}
              externalClassNames={`${styles.subtitle} section-subtitle`}
            />
          )}
          {title && (
            <Title
              content={title}
              size={size}
              externalClassNames='section-title'
            />
          )}
        </div>
      )}
      <div className={styles.body}>{children}</div>
    </section>
  )
}

export default Section
