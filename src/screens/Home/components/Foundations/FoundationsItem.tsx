import { FC, MouseEvent } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import Icon from '@/components/UI/Icon/Icon'
import { useTypedDispatch } from '@/hooks/use-typed-dispatch'
import { setSubscribeModalOpen } from '@/store/reducers/app.slice'
import styles from '@/screens/Home/components/Foundations/Foundations.module.scss'
import { ReactComponent as ArrowIcon } from '@/assets/icons/curved-arrow.svg'

interface FoundationsItemProps {
  title: string
  description: string
  photo: StaticImageData | string
  href: string
}

const FoundationsItem: FC<FoundationsItemProps> = ({ title, description, photo, href }) => {
  const dispatck = useTypedDispatch()

  const openSubscribeModalHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    dispatck(setSubscribeModalOpen(true))
  }

  return (
    <Link
      className={styles.item}
      href={href}
      onClick={openSubscribeModalHandler}
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
