'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import Logo from '@/components/Logo/Logo'
import Icon from '@/components/UI/Icon/Icon'
import Button from '@/components/UI/Button/Button'
import Burger from '@/components/Burger/Burger'
import styles from '@/components/Header/Header.module.scss'
import { ReactComponent as DecIcon } from '@/assets/icons/header-dec.svg'
import { ReactComponent as ArrowIcon } from '@/assets/icons/arrow-right.svg'

const Header: FC = () => {
  useEffect(() => {
    gsap.to(`.${styles.header}`, 0.6, { opacity: 1, delay: 0.3 })
  }, [])

  return (
    <header className={styles.header}>
      <Icon externalClassNames={styles.icon}>
        <DecIcon />
      </Icon>
      <Logo position='header' />
      <Button
        text='Discover More'
        endIcon={<ArrowIcon />}
        onClick={() => {}}
        externalClassNames={styles.btn}
      />
      <Burger />
    </header>
  )
}

export default Header
