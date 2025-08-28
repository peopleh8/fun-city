'use client'

import { FC, useCallback } from 'react'
import classNames from 'classnames'
import Form from '@/components/UI/Form/Form'
import Input from '@/components/UI/Input/Input'
import Button from '@/components/UI/Button/Button'
import Message from '@/components/UI/Message/Message'
import { useTypedSelector } from '@/hooks/use-typed-selector'
import { useTypedDispatch } from '@/hooks/use-typed-dispatch'
import { subscribe } from '@/store/actions/subscribe.action'
import { FormValues } from '@/types/ui.types'
import styles from '@/components/Modals/Subscribe/Subscribe.module.scss'

const Subscribe: FC = () => {
  const dispatch = useTypedDispatch()
  const { isSubscribing, isSubscribingSuccess } = useTypedSelector((state) => state.app)

  const handleSubmit = useCallback(
    (data: FormValues) => {
      dispatch(subscribe(data.email as string))
    },
    [dispatch],
  )

  return (
    <div className={styles.subscribe}>
      <div className={classNames(styles.wrapper, { [styles.sent]: isSubscribingSuccess })}>
        <Message
          title='Thank you for subscribing!'
          description='You have successfully subscribed to our newsletter.'
          externalClassNames={styles.message}
        />
        <div className={styles.inner}>
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
            <p className={styles.text}>No spam-occasional release notes only.</p>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
