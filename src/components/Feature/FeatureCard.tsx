import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import Button from '@/components/UI/Button/Button'
import styles from '@/components/Feature/Feature.module.scss'
import { ReactComponent as ArrowIcon } from '@/assets/icons/arrow-right.svg'

interface FeatureCardProps {
  title: string
  description: string
  tags?: { name: string; href: string }[]
  photo: StaticImageData | string
  link?: { name: string; href: string }
}

const FeatureCard: FC<FeatureCardProps> = ({ title, description, tags, photo, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.inner}>
          {tags && tags.length > 0 && (
            <div className={styles.tags}>
              {tags.map((tag) => (
                <Link
                  key={`${tag.href}+${tag.name}`}
                  href={tag.href}
                  className={styles.tag}
                >
                  {tag.name}
                </Link>
              ))}
            </div>
          )}
          <div className={styles.title}>{title}</div>
          <div className={styles.desc}>{description}</div>
        </div>
        {link && (
          <Button
            text={link.name}
            endIcon={<ArrowIcon />}
            theme='dark'
            component='link'
            variant='outlined'
            href={link.href}
            externalClassNames={styles.btn}
          />
        )}
      </div>
      <div className={styles.photo}>
        <Image
          src={photo}
          alt={title}
          width={844}
          height={538}
        />
      </div>
    </div>
  )
}

export default FeatureCard
