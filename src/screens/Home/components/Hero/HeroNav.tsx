import { FC } from 'react'
import Link from 'next/link'
import Icon from '@/components/UI/Icon/Icon'
import styles from '@/screens/Home/components/Hero/Hero.module.scss'
import { ReactComponent as NavIcon1 } from '@/assets/icons/hero-nav-1.svg'
import { ReactComponent as NavIcon2 } from '@/assets/icons/hero-nav-2.svg'
import { ReactComponent as NavIcon3 } from '@/assets/icons/hero-nav-3.svg'
import { ReactComponent as NavIcon4 } from '@/assets/icons/hero-nav-4.svg'

const HeroNav: FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <Link
          className={styles.navItem}
          href='#'
        >
          <Icon externalClassNames={styles.navIcon}>
            <NavIcon1 />
          </Icon>
          <span className={styles.navText}>Values</span>
        </Link>
        <Link
          className={styles.navItem}
          href='#'
        >
          <Icon externalClassNames={styles.navIcon}>
            <NavIcon2 />
          </Icon>
          <span className={styles.navText}>Ecosystem</span>
        </Link>
        <Link
          className={styles.navItem}
          href='#'
        >
          <Icon externalClassNames={styles.navIcon}>
            <NavIcon3 />
          </Icon>
          <span className={styles.navText}>Philosophy</span>
        </Link>
        <Link
          className={styles.navItem}
          href='#'
        >
          <Icon externalClassNames={styles.navIcon}>
            <NavIcon4 />
          </Icon>
          <span className={styles.navText}>Glossary</span>
        </Link>
      </div>
    </nav>
  )
}

export default HeroNav
