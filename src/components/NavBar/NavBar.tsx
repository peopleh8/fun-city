import { FC, MouseEvent } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { useTypedDispatch } from '@/hooks/use-typed-dispatch'
import { setSubscribeModalOpen } from '@/store/reducers/app.slice'
import { NavBarProps } from '@/types/common.types'
import styles from '@/components/NavBar/NavBar.module.scss'

const NavBar: FC<NavBarProps> = ({ list, position }) => {
  const dispatck = useTypedDispatch()
  const classes = classNames(styles.nav, styles[position])

  const openSubscribeModalHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    dispatck(setSubscribeModalOpen(true))
  }

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
              onClick={openSubscribeModalHandler}
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
