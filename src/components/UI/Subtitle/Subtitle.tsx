import { FC } from 'react'
import classNames from 'classnames'
import { SubtitleProps } from '@/types/ui.types'
import styles from '@/components/UI/Subtitle/Subtitle.module.scss'

const Subtitle: FC<SubtitleProps> = ({ children, content, size = 'default', theme = 'dark', externalClassNames }) => {
  const classes = classNames(styles.subtitle, styles[size], styles[theme], externalClassNames)

  return !content ? (
    <div className={classes}>{children}</div>
  ) : (
    <div
      className={classes}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default Subtitle
