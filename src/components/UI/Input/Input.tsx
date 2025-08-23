import type { FC, ElementType } from 'react'
import { useRef } from 'react'
import classNames from 'classnames'
import CustomIcon from '@/components/UI/Icon/Icon'
import Error from '@/components/UI/Error/Error'
import Loader from '@/components/UI/Loader/Loader'
import type { InputProps } from '@/types/ui.types'
import styles from '@/components/UI/Input/Input.module.scss'

const Input: FC<InputProps> = ({
  ref,
  component = 'input',
  theme = 'dark',
  required = false,
  minLength,
  maxLength,
  id,
  type,
  label,
  Icon,
  name,
  loading,
  register,
  errors,
  setError,
  setValue,
  externalClassNames,
  ...props
}) => {
  const inputRef = useRef<HTMLDivElement>(null)

  const wrapperClasses = classNames(styles.field, externalClassNames, styles[theme], {
    [styles.errored]: errors?.[name],
    [styles.withIcon]: Icon,
    [styles.loading]: loading,
  })
  const inputClasses = classNames(styles.inp)
  const Component: ElementType = component as ElementType

  const validationRules = {
    ...(required && { required: 'Field is required' }),
    ...(type === 'email' && {
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: 'Invalid field',
      },
    }),
    ...(type === 'tel' && {
      pattern: {
        value: /^\+?[0-9]+$/,
        message: 'Invalid field',
      },
    }),
    ...(minLength && {
      minLength: {
        value: minLength,
        message: `Min length is ${minLength} characters`,
      },
    }),
    ...(maxLength && {
      maxLength: {
        value: maxLength,
        message: `Max length is ${maxLength} characters`,
      },
    }),
  }

  return (
    <div
      ref={inputRef}
      className={wrapperClasses}
    >
      {label && (
        <label
          className={styles.label}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className={styles.inner}>
        {Icon && <CustomIcon externalClassNames={styles.icon}>{Icon}</CustomIcon>}
        {typeof loading === 'boolean' && (
          <Loader
            position='absolute'
            size='xs'
            externalClassNames={styles.loader}
          />
        )}
        <Component
          {...props}
          {...(register && name ? register(name, validationRules) : {})}
          {...(!register ? { ref } : {})}
          id={id}
          type={type}
          className={inputClasses}
        />
        {errors?.[name] && (
          <Error
            text={errors[name].message as string}
            externalClassNames={styles.error}
          />
        )}
      </div>
    </div>
  )
}

Input.displayName = 'Input'

export default Input
