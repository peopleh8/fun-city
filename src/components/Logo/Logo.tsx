import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import { LogoProps } from '@/types/common.types'
import styles from '@/components/Logo/Logo.module.scss'
import logo from '@/assets/images/logo.svg'

const Logo: FC<LogoProps> = ({ position }) => {
  const classes = classNames(styles.logo, styles[position])

  return (
    <div className={classes}>
      <Link
        href='/'
        className={styles.link}
      >
        <Image
          src={logo}
          alt='Logo'
          width={position === 'header' ? 107 : 268}
          height={position === 'header' ? 20 : 53}
        />
      </Link>
    </div>
  )
}

export default Logo
