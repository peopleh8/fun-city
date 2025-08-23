import { FC } from 'react'
import styles from '@/components/Feature/Feature.module.scss'
import photo from '@/assets/images/feature-1.png'
import Image from 'next/image'
import Link from 'next/link'

const FeatureCard: FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.tags}>
            <Link
              href='#'
              className={styles.tag}
            >
              Empowerment
            </Link>
            <Link
              href='#'
              className={styles.tag}
            >
              Renaissance
            </Link>
            <Link
              href='#'
              className={styles.tag}
            >
              Collective Intelligence
            </Link>
          </div>
          <div className={styles.title}>A Coherent World of Happiness</div>
          <div className={styles.desc}>We believe that love unlocks our highest potential — in relationships, creativity, and growth. Every action starts with compassion.</div>
        </div>
        <div>Btn</div>
      </div>
      <div className={styles.photo}>
        <Image
          src={photo}
          alt='Feature 1'
          width={844}
          height={538}
        />
      </div>
    </div>
  )
}

export default FeatureCard
