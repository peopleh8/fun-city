import { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { NavBarProps } from '@/types/common.types'
import styles from '@/components/NavBar/NavBar.module.scss'

const NavBar: FC<NavBarProps> = ({ list, position }) => {
  const classes = classNames(styles.nav, styles[position])

  return (
    <nav className={classes}>
      <ul className={styles.list}>
        {list.map((item) => (
          <li
            key={item.id}
            className={styles.item}
          >
            <Link
              href={item.link}
              className={styles.link}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
