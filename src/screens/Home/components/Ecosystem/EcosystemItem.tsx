import { FC } from 'react'
import styles from '@/screens/Home/components/Ecosystem/Ecosystem.module.scss'

const EcosystemItem: FC = () => {
  return (
    <div className={styles.item}>
      <div className={styles.inner}>
        <div className={styles.counter}>01</div>
        <div className={styles.title}>Al and Web3 Power</div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardCounter}>[ 02 ]</div>
        <p className={styles.cardDesc}>Al, blockchain, and Web3 technologies empower our community and unlock new potential.</p>
      </div>
    </div>
  )
}

export default EcosystemItem
