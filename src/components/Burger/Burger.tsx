import { FC } from 'react'
import styles from '@/components/Burger/Burger.module.scss'

const Burger: FC = () => {
  return (
    <button className={styles.burger}>
      <span />
      <span />
    </button>
  )
}

export default Burger
