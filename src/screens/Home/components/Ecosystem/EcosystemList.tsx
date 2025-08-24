import { FC } from 'react'
import EcosystemItem from '@/screens/Home/components/Ecosystem/EcosystemItem'
import styles from '@/screens/Home/components/Ecosystem/Ecosystem.module.scss'

const EcosystemList: FC = () => {
  return (
    <div className={styles.list}>
      <EcosystemItem />
      <EcosystemItem />
      <EcosystemItem />
    </div>
  )
}

export default EcosystemList
