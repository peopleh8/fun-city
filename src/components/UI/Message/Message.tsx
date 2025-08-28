import { FC } from 'react'
import classNames from 'classnames'
import { MessageProps } from '@/types/ui.types'
import styles from '@/components/UI/Message/Message.module.scss'

const Message: FC<MessageProps> = ({ title, description, theme = 'dark', externalClassNames }) => {
  const classes = classNames(styles.message, styles[theme], externalClassNames)

  return (
    <div className={classes}>
      <div className={styles.title}>{title}</div>
      {description && <p className={styles.desc}>{description}</p>}
    </div>
  )
}

export default Message
