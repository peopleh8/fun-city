'use client'

import { FC, useCallback, useEffect, useRef } from 'react'
import gsap from 'gsap'
import Logo from '@/components/Logo/Logo'
import Icon from '@/components/UI/Icon/Icon'
import Button from '@/components/UI/Button/Button'
import Burger from '@/components/Burger/Burger'
import { useTypedSelector } from '@/hooks/use-typed-selector'
import { useTypedDispatch } from '@/hooks/use-typed-dispatch'
import { setSubscribeModalOpen } from '@/store/reducers/app.slice'
import styles from '@/components/Header/Header.module.scss'
import { ReactComponent as DecIcon } from '@/assets/icons/header-dec.svg'
import { ReactComponent as ArrowIcon } from '@/assets/icons/arrow-right.svg'

const Header: FC = () => {
  const dispatch = useTypedDispatch()
  const { isMenuOpen } = useTypedSelector((state) => state.app)

  const headerRef = useRef<HTMLDivElement>(null)
  let lastScrollY = 0

  const openSubscribeModalHandler = useCallback(() => {
    dispatch(setSubscribeModalOpen(true))
  }, [dispatch])

  const handleScroll = () => {
    const currentScrollY = window.scrollY

    if (!headerRef.current) {
      return
    }

    headerRef.current.classList.toggle(styles.hidden, currentScrollY > lastScrollY && currentScrollY > 100)
    headerRef.current.classList.toggle(styles.overlayed, currentScrollY > 200)
    lastScrollY = currentScrollY
  }

  useEffect(() => {
    gsap.to(`.${styles.header}`, 0.6, { opacity: 1, delay: 0.3 })

    if (isMenuOpen) {
      return
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMenuOpen])

  return (
    <header
      ref={headerRef}
      className={styles.header}
    >
      <Icon externalClassNames={styles.icon}>
        <DecIcon />
      </Icon>
      <Logo position='header' />
      <Button
        text='Discover More'
        endIcon={<ArrowIcon />}
        onClick={openSubscribeModalHandler}
        externalClassNames={styles.btn}
      />
      <Burger />
    </header>
  )
}

export default Header
