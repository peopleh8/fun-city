import { FC } from 'react'
import Image from 'next/image'
import HeroContent from '@/screens/Home/components/Hero/HeroContent'
import styles from '@/screens/Home/components/Hero/Hero.module.scss'
import bg from '@/assets/images/hero-bg.png'

const Hero: FC = () => {
  return (
    <div className={styles.hero}>
      <Image
        src={bg}
        alt='Hero Background'
        fill
      />
      <HeroContent />
    </div>
  )
}

export default Hero
