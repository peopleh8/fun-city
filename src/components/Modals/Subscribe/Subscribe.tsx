import { FC, useCallback } from 'react'
import Form from '@/components/UI/Form/Form'
import Input from '@/components/UI/Input/Input'
import Button from '@/components/UI/Button/Button'
import { FormValues } from '@/types/ui.types'
import styles from '@/components/Modals/Subscribe/Subscribe.module.scss'
import { useTypedSelector } from '@/hooks/use-typed-selector'

const Subscribe: FC = () => {
  const { isSubscribing } = useTypedSelector((state) => state.app)

  const handleSubmit = useCallback((data: FormValues) => {
    console.log(data)
  }, [])

  return (
    <div className={styles.subscribe}>
      <div className={styles.title}>Release Notes Signup</div>
      <p className={styles.desc}>We’re uploading the wide view of the platform step by step. Get updates as new pages publish.</p>
      <Form
        onSubmit={handleSubmit}
        externalClassNames={styles.form}
      >
        <Input
          id='subscription-email'
          name='email'
          type='email'
          placeholder='Your Email'
          theme='dark'
          required
          externalClassNames={styles.input}
        />
        <Button
          text='Subscribe'
          type='submit'
          theme='dark'
          size='small'
          onClick={() => {}}
          loading={isSubscribing}
          externalClassNames={styles.btn}
        />
        <p className={styles.message}>No spam-occasional release notes only.</p>
      </Form>
    </div>
  )
}

export default Subscribe
