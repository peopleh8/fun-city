import { FC } from 'react'
import FooterTop from '@/components/Footer/FooterTop'
import FooterBot from '@/components/Footer/FooterBot'
import styles from '@/components/Footer/Footer.module.scss'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <FooterTop />
      <FooterBot />
    </footer>
  )
}

export default Footer
