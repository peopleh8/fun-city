import { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import Icon from '@/components/UI/Icon/Icon'
import { ButtonProps } from '@/types/ui.types'
import styles from '@/components/UI/Button/Button.module.scss'

const Button: FC<ButtonProps> = (props) => {
  const { text, view = 'button', variant = 'contained', theme = 'dark', size = 'default', active, disabled, startIcon, endIcon, externalClassNames } = props

  const classes = classNames(styles.btn, styles[view], styles[variant], styles[theme], styles[size], externalClassNames, {
    [styles.active]: active,
    [styles.disabled]: disabled,
  })

  if (props.component === 'link') {
    return (
      <Link
        href={props.href}
        className={classes}
      >
        {startIcon && <Icon externalClassNames={styles.icon}>{startIcon}</Icon>}
        {text}
        {endIcon && <Icon externalClassNames={styles.icon}>{endIcon}</Icon>}
      </Link>
    )
  }

  if (props.component === 'file') {
    const inputId = `file-input-${text.replace(/\s+/g, '-')}-${Math.random()}`
    return (
      <label
        htmlFor={inputId}
        className={classes}
      >
        {startIcon && <Icon externalClassNames={styles.icon}>{startIcon}</Icon>}
        {text}
        {endIcon && <Icon externalClassNames={styles.icon}>{endIcon}</Icon>}
        <input
          id={inputId}
          type='file'
          style={{ display: 'none' }}
          onChange={props.onChange}
          accept={props.accept}
          multiple={props.multiple}
          capture={props.capture}
          disabled={disabled}
        />
      </label>
    )
  }

  return (
    <button
      onClick={props.onClick}
      className={classes}
      disabled={disabled}
      type={props.type || 'button'}
    >
      {startIcon && <Icon externalClassNames={styles.icon}>{startIcon}</Icon>}
      {text}
      {endIcon && <Icon externalClassNames={styles.icon}>{endIcon}</Icon>}
    </button>
  )
}

export default Button
