import { FC } from 'react'
import FoundationsItem from '@/screens/Home/components/Foundations/FoundationsItem'
import styles from '@/screens/Home/components/Foundations/Foundations.module.scss'

const FoundationsList: FC = () => {
  return (
    <div className={styles.list}>
      <FoundationsItem />
      <FoundationsItem />
    </div>
  )
}

export default FoundationsList
