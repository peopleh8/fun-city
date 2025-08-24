import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/components/UI/Icon/Icon'
import styles from '@/screens/Home/components/Foundations/Foundations.module.scss'
import { ReactComponent as ArrowIcon } from '@/assets/icons/curved-arrow.svg'
import cardPhoto from '@/assets/images/foundations-card-1.png'

const FoundationsItem: FC = () => {
  return (
    <Link
      className={styles.item}
      href='#'
    >
      <Image
        src={cardPhoto}
        alt='Foundations Card 1'
        width={930}
        height={843}
      />
      <div className={styles.content}>
        <div className={styles.title}>
          <Icon externalClassNames={styles.titleIcon}>
            <ArrowIcon />
          </Icon>
          <div className={styles.titleText}>Products</div>
        </div>
        <p className={styles.desc}>Get clear definitions of the terms, systems, and symbols we use throughout the Library.</p>
      </div>
    </Link>
  )
}

export default FoundationsItem
