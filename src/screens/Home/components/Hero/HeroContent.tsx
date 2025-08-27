import { FC } from 'react'
import classNames from 'classnames'
import HeroNav from '@/screens/Home/components/Hero/HeroNav'
import Socials from '@/components/Socials/Socials'
import Title from '@/components/UI/Title/Title'
import Subtitle from '@/components/UI/Subtitle/Subtitle'
import Button from '@/components/UI/Button/Button'
import { useTypedSelector } from '@/hooks/use-typed-selector'
import styles from '@/screens/Home/components/Hero/Hero.module.scss'
import { ReactComponent as ArrowIcon } from '@/assets/icons/arrow-right.svg'
import instagram from '@/assets/icons/instagram.svg'

const HeroContent: FC = () => {
  const { isMenuOpen } = useTypedSelector((state) => state.app)

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
        <div className={classNames(styles.panel, { [styles.open]: isMenuOpen })}>
          <div className={styles.panelInner}>
            <div className={styles.panelItem}>
              <div className={styles.panelTitle}>menu</div>
              <HeroNav />
            </div>
            <div className={styles.panelItem}>
              <div className={styles.panelTitle}>Socials</div>
              <Socials
                position='menu'
                list={[{ id: 1, icon: instagram, link: 'https://www.instagram.com/longfengartcar/' }]}
              />
            </div>
          </div>
        </div>
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
