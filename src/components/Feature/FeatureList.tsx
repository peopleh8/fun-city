import { FC } from 'react'
import classNames from 'classnames'
import { FeatureListProps } from '@/types/common.types'
import styles from '@/components/Feature/Feature.module.scss'

const FeatureList: FC<FeatureListProps> = ({ direction = 'vertical', children }) => {
  const classes = classNames(styles.list, styles[direction])

  return <div className={classes}>{children}</div>
}

export default FeatureList
