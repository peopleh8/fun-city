import { FC, MouseEvent } from 'react'
import Icon from '@/components/UI/Icon/Icon'
import { useTypedSelector } from '@/hooks/use-typed-selector'
import { useTypedDispatch } from '@/hooks/use-typed-dispatch'
import { setMenuOpen } from '@/store/reducers/app.slice'
import { anchorScroll } from '@/utils/anchor-scroll'
import { delay } from '@/utils/delay'
import styles from '@/screens/Home/components/Hero/Hero.module.scss'
import { ReactComponent as NavIcon1 } from '@/assets/icons/hero-nav-1.svg'
import { ReactComponent as NavIcon2 } from '@/assets/icons/hero-nav-2.svg'
import { ReactComponent as NavIcon3 } from '@/assets/icons/hero-nav-3.svg'
import { ReactComponent as NavIcon4 } from '@/assets/icons/hero-nav-4.svg'

const HeroNav: FC = () => {
  const dispatch = useTypedDispatch()
  const { isMenuOpen } = useTypedSelector((state) => state.app)

  const anchorHandle = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const target = e.currentTarget.getAttribute('href')

    if (!target) return

    if (!isMenuOpen) {
      anchorScroll(target)
    } else {
      dispatch(setMenuOpen(false))
      delay(200).then(() => anchorScroll(target))
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <a
          className={styles.navItem}
          href='#mission'
          onClick={anchorHandle}
        >
          <Icon externalClassNames={styles.navIcon}>
            <NavIcon1 />
          </Icon>
          <span className={styles.navText}>Mission</span>
        </a>
        <a
          className={styles.navItem}
          href='#principles'
          onClick={anchorHandle}
        >
          <Icon externalClassNames={styles.navIcon}>
            <NavIcon2 />
          </Icon>
          <span className={styles.navText}>Principles</span>
        </a>
        <a
          className={styles.navItem}
          href='#ecosystem'
          onClick={anchorHandle}
        >
          <Icon externalClassNames={styles.navIcon}>
            <NavIcon3 />
          </Icon>
          <span className={styles.navText}>Ecosystem</span>
        </a>
        <a
          className={styles.navItem}
          href='#glossary'
          onClick={anchorHandle}
        >
          <Icon externalClassNames={styles.navIcon}>
            <NavIcon4 />
          </Icon>
          <span className={styles.navText}>Glossary</span>
        </a>
      </div>
    </nav>
  )
}

export default HeroNav
