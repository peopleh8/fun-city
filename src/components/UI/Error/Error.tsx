import { FC } from 'react'
import classNames from 'classnames'
import { ErrorProps } from '@/types/ui.types'
import styles from '@/components/UI/Error/Error.module.scss'

const Error: FC<ErrorProps> = ({ text, externalClassNames }) => {
  const classes = classNames(styles.error, externalClassNames)

  return <div className={classes}>{text}</div>
}

export default Error
