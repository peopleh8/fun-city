import { FC } from 'react'
import classNames from 'classnames'
import type { LoaderProps } from '@/types/ui.types'
import styles from './Loader.module.scss'

const Loader: FC<LoaderProps> = ({ size = 'md', position = 'absolute', externalClassNames }) => {
  const classes = classNames(styles.loader, styles[size], styles[position], externalClassNames)

  return <div className={classes}>Loader...</div>
}

export default Loader
