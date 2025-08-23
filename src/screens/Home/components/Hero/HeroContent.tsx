import { FC } from 'react'
import HeroNav from '@/screens/Home/components/Hero/HeroNav'
import Title from '@/components/UI/Title/Title'
import Subtitle from '@/components/UI/Subtitle/Subtitle'
import styles from '@/screens/Home/components/Hero/Hero.module.scss'

const HeroContent: FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.inner}>
        <div className={styles.topography}>
          <Title
            size='xl'
            externalClassNames={styles.title}
          >
            <span>
              <em>The</em> Future
            </span>{' '}
            <span>
              Begins <em>Here</em>
            </span>
          </Title>
          <Subtitle
            externalClassNames={styles.subtitle}
            size='big'
          >
            Explore our <strong>library of knowledge,</strong> built to <strong>empower</strong> positive <strong>transformation</strong>
          </Subtitle>
        </div>
        <HeroNav />
      </div>
    </div>
  )
}

export default HeroContent
