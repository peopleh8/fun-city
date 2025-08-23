import { FC } from 'react'
import classNames from 'classnames'
import { FooterItemProps } from '@/types/common.types'
import styles from '@/components/Footer/Footer.module.scss'

const FooterItem: FC<FooterItemProps> = ({ title, darken, children }) => {
  const classes = classNames(styles.item, {
    [styles.darken]: darken,
  })

  return (
    <div className={classes}>
      <div className={styles.itemTitle}>{title}</div>
      <div className={styles.itemInner}>{children}</div>
    </div>
  )
}

export default FooterItem
