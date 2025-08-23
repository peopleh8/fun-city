import { FC } from 'react'
import Subtitle from '@/components/UI/Subtitle/Subtitle'
import Title from '@/components/UI/Title/Title'
import { SectionProps } from '@/types/ui.types'
import styles from '@/components/UI/Section/Section.module.scss'
import classNames from 'classnames'

const Section: FC<SectionProps> = ({ children, title, subtitle, size = 'lg', inlineType = 'type-1', externalClassNames }) => {
  const classes = classNames(styles.section, styles[inlineType], externalClassNames)

  return (
    <div className={classes}>
      {(title || subtitle) && (
        <div className={styles.header}>
          {subtitle && (
            <Subtitle
              content={`<strong>${subtitle}</strong>`}
              externalClassNames={styles.subtitle}
            />
          )}
          {title && (
            <Title
              content={title}
              size={size}
            />
          )}
        </div>
      )}
      <div className={styles.body}>{children}</div>
    </div>
  )
}

export default Section
