import { FC } from 'react'
import Logo from '@/components/Logo/Logo'
import Icon from '@/components/UI/Icon/Icon'
import Button from '../UI/Button/Button'
import styles from '@/components/Header/Header.module.scss'
import { ReactComponent as DecIcon } from '@/assets/icons/header-dec.svg'
import { ReactComponent as ArrowIcon } from '@/assets/icons/arrow-right.svg'

const Header: FC = () => {
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
      />
    </header>
  )
}

export default Header
