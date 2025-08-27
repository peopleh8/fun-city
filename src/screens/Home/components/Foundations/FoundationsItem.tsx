import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import Icon from '@/components/UI/Icon/Icon'
import styles from '@/screens/Home/components/Foundations/Foundations.module.scss'
import { ReactComponent as ArrowIcon } from '@/assets/icons/curved-arrow.svg'

interface FoundationsItemProps {
  title: string
  description: string
  photo: StaticImageData | string
  href: string
}

const FoundationsItem: FC<FoundationsItemProps> = ({ title, description, photo, href }) => {
  return (
    <Link
      className={styles.item}
      href={href}
    >
      <Image
        src={photo}
        alt={title}
        width={930}
        height={843}
      />
      <div className={styles.content}>
        <div className={styles.title}>
          <Icon externalClassNames={styles.titleIcon}>
            <ArrowIcon />
          </Icon>
          <div className={styles.titleText}>{title}</div>
        </div>
        <p className={styles.desc}>{description}</p>
      </div>
    </Link>
  )
}

export default FoundationsItem
