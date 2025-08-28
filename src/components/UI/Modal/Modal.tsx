import { FC } from 'react'
import classNames from 'classnames'
import { ModalProps } from '@/types/ui.types'
import styles from '@/components/UI/Modal/Modal.module.scss'

const Modal: FC<ModalProps> = ({ children, open, onClose }) => {
  const classes = classNames(styles.modal, {
    [styles.open]: open,
  })

  return (
    <div
      className={classes}
      onClick={onClose}
    >
      <div
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.times}
          onClick={onClose}
        >
          <span />
          <span />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
