import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/UI/Button/Button'
import styles from '@/components/Feature/Feature.module.scss'
import { ReactComponent as ArrowIcon } from '@/assets/icons/arrow-right.svg'
import photo from '@/assets/images/feature-1.png'

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
        <Button
          text='Explore Vision'
          endIcon={<ArrowIcon />}
          theme='dark'
          variant='outlined'
          onClick={() => {}}
          externalClassNames={styles.btn}
        />
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
