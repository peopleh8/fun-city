import { FC, ReactElement, ReactNode } from 'react'
import { Children, createElement, isValidElement, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'
import { delay } from '@/utils/delay'
import { FormProps, FormValues } from '@/types/ui.types'
import styles from '@/components/UI/Form/Form.module.scss'

const Form: FC<FormProps> = ({ children, onSubmit, onError, defaultValues, success, fetching = false, externalClassNames }) => {
  const wrapperClasses = classNames(styles.formWrapper, {
    [styles.hidden]: success,
  })
  const classes = classNames(styles.form, externalClassNames, {
    [styles.fetching]: fetching,
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    setValue,
    reset,
  } = useForm<FormValues>({
    mode: 'all',
    ...(defaultValues && { defaultValues }),
  })

  useEffect(() => {
    if (success) {
      delay(500).then(() => reset())
    }
  }, [success, reset])

  const processChildren = (children: ReactNode): ReactNode => {
    if (!children) return null

    return Children.map(children, (child) => {
      if (!isValidElement(child)) return child

      const element = child as ReactElement<{ name?: string; children?: ReactNode }>

      const typeFn = child.type as { displayName?: string; name?: string }
      const typeName = typeFn.displayName || typeFn.name

      const isCustomField = ['Input', 'Radio', 'Checkbox', 'Textarea', 'Select'].includes(typeName ?? '')

      if (isCustomField && element.props.name) {
        return createElement(child.type, {
          ...element.props,
          setError,
          setValue,
          register,
          errors,
          key: element.props.name,
        })
      }

      if (element.props.children) {
        return createElement(child.type, {
          ...element.props,
          children: processChildren(element.props.children),
        })
      }

      return child
    })
  }

  return (
    <div className={wrapperClasses}>
      <form
        className={classes}
        autoComplete='off'
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        {processChildren(children)}
      </form>
    </div>
  )
}

export default Form
