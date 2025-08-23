import { FC } from 'react'
import styles from '@/components/Footer/Footer.module.scss'
import Logo from '../Logo/Logo'

const FooterBot: FC = () => {
  return (
    <div className={styles.bot}>
      <div className={styles.botInner}>
        <div className={styles.text}>Future</div>
        <div className={styles.logo}>
          {'('}
          <Logo position='footer' />
          {')'}
        </div>
        <div className={styles.text}>Library</div>
      </div>
    </div>
  )
}

export default FooterBot
