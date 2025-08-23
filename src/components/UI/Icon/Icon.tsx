import type { FC } from 'react'
import classNames from 'classnames'
import type { IconProps } from '../../../types/ui.types'
import styles from './Icon.module.scss'

const Icon: FC<IconProps> = ({ children, onClick, externalClassNames }) => {
  const classes = classNames(styles.icon, externalClassNames)

  return (
    <div
      className={classes}
      {...(onClick && { onClick })}
    >
      {children}
    </div>
  )
}

export default Icon
