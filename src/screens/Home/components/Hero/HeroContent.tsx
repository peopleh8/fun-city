import { FC } from 'react'
import HeroNav from '@/screens/Home/components/Hero/HeroNav'
import Title from '@/components/UI/Title/Title'
import Subtitle from '@/components/UI/Subtitle/Subtitle'
import Button from '@/components/UI/Button/Button'
import styles from '@/screens/Home/components/Hero/Hero.module.scss'
import { ReactComponent as ArrowIcon } from '@/assets/icons/arrow-right.svg'

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
        <Button
          text='Discover More'
          endIcon={<ArrowIcon />}
          onClick={() => {}}
          externalClassNames={styles.btn}
        />
      </div>
    </div>
  )
}

export default HeroContent
