import { FC } from 'react'
import classNames from 'classnames'
import { useTypedSelector } from '@/hooks/use-typed-selector'
import { useTypedDispatch } from '@/hooks/use-typed-dispatch'
import { setMenuOpen } from '@/store/reducers/app.slice'
import styles from '@/components/Burger/Burger.module.scss'

const Burger: FC = () => {
  const dispatch = useTypedDispatch()
  const { isMenuOpen } = useTypedSelector((state) => state.app)

  const classes = classNames(styles.burger, {
    [styles.active]: isMenuOpen,
  })

  const toggleMenuOpenHandler = () => {
    dispatch(setMenuOpen(!isMenuOpen))
  }

  return (
    <button
      className={classes}
      onClick={toggleMenuOpenHandler}
    >
      <span />
      <span />
    </button>
  )
}

export default Burger
