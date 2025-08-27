import { FC, useCallback } from 'react'
import Input from '@/components/UI/Input/Input'
import Form from '@/components/UI/Form/Form'
import Button from '@/components/UI/Button/Button'
import FooterItem from '@/components/Footer/FooterItem'
import NavBar from '@/components/NavBar/NavBar'
import Socials from '@/components/Socials/Socials'
import { useTypedSelector } from '@/hooks/use-typed-selector'
import { FormValues } from '@/types/ui.types'
import styles from '@/components/Footer/Footer.module.scss'
import instagram from '@/assets/icons/instagram.svg'

const FooterTop: FC = () => {
  const { isSubscribing } = useTypedSelector((state) => state.app)

  const handleSubmit = useCallback((data: FormValues) => {
    console.log(data)
  }, [])

  return (
    <div className={styles.top}>
      <div className={styles.topInner}>
        <div className={styles.topSide}>
          <div className={styles.sideTitle}>Sign up for our newsletter</div>
          <Form
            onSubmit={handleSubmit}
            externalClassNames={styles.form}
          >
            <Input
              id='subscription-email'
              name='email'
              type='email'
              placeholder='Your Email'
              theme='light'
              required
              externalClassNames={styles.input}
            />
            <Button
              text='Subscribe'
              type='submit'
              theme='light'
              size='small'
              onClick={() => {}}
              loading={isSubscribing}
              externalClassNames={styles.btn}
            />
          </Form>
          <div className={styles.copy}>&copy; 2025 FUNCITY. All rights reserved.</div>
        </div>
        <div className={styles.topSide}>
          <FooterItem
            title='Navigation'
            darken
          >
            <NavBar
              position='footer'
              list={[
                { id: 1, title: 'About', link: '/' },
                { id: 2, title: 'Values ', link: '/' },
                { id: 3, title: 'Philosophy ', link: '/' },
                { id: 4, title: 'Glossary', link: '/' },
                { id: 5, title: 'Ecosystem', link: '/' },
              ]}
            />
          </FooterItem>
          <FooterItem
            title='Contact'
            darken
          >
            <NavBar
              position='footer'
              list={[
                { id: 6, title: 'Contact ', link: '/' },
                { id: 7, title: 'Privacy Policy ', link: '/' },
              ]}
            />
          </FooterItem>
          <FooterItem title='Socials'>
            <Socials
              position='footer'
              list={[{ id: 1, icon: instagram, link: 'https://www.instagram.com/longfengartcar/' }]}
            />
          </FooterItem>
        </div>
      </div>
    </div>
  )
}

export default FooterTop
