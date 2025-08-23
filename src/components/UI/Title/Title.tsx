import type { FC } from 'react'
import classNames from 'classnames'
import { TitleProps } from '@/types/ui.types'
import styles from '@/components/UI/Title/Title.module.scss'

const Title: FC<TitleProps> = ({ children, content, size = 'lg', theme = 'dark', externalClassNames }) => {
  const classes = classNames(styles.title, styles[size], styles[theme], externalClassNames)

  return !content ? (
    <div className={classes}>{children}</div>
  ) : (
    <div
      className={classes}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default Title
