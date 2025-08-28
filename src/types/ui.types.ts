import { ComponentPropsWithoutRef, Ref } from 'react'
import { ChildProps, ChildType, ExternalClassNamesType } from '@/types/common.types'
import { FieldErrors, FieldValues, UseFormRegister, UseFormSetError, UseFormSetValue } from 'react-hook-form'

export interface IconProps {
  children: ChildType
  onClick?: () => void
  externalClassNames?: ExternalClassNamesType
}

export type FormValues = {
  [key: string]: unknown
}
export interface FormProps extends ChildProps {
  onSubmit: (data: FormValues) => void
  onError?: (error: FieldErrors<FormValues>) => void
  success?: boolean
  fetching?: boolean
  defaultValues?: { [key: string]: string }
  externalClassNames?: ExternalClassNamesType
}

type BaseButtonProps = {
  text: string
  startIcon?: ChildType
  endIcon?: ChildType
  view?: 'button' | 'link'
  variant?: 'contained' | 'outlined'
  theme?: 'dark' | 'light'
  size?: 'default' | 'small'
  loading?: boolean
  disabled?: boolean
  active?: boolean
  externalClassNames?: ExternalClassNamesType
}

type ButtonNativeProps = {
  component?: 'button'
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
  href?: undefined
  onChange?: undefined
}

type ButtonLinkProps = {
  component: 'link'
  href: string
  onClick?: undefined
  onChange?: undefined
}

type ButtonFileProps = {
  component: 'file'
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  accept?: string
  multiple?: boolean
  capture?: 'user' | 'environment' | boolean
  onClick?: undefined
  href?: undefined
}

export type ButtonProps = BaseButtonProps & (ButtonNativeProps | ButtonLinkProps | ButtonFileProps)

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  ref?: Ref<HTMLInputElement>
  name: string
  theme?: 'dark' | 'light'
  component?: 'input' | 'textarea'
  required?: boolean
  label?: string
  loading?: boolean
  Icon?: ChildType
  register?: UseFormRegister<FieldValues>
  errors?: FieldErrors
  setError?: UseFormSetError<FieldValues>
  setValue?: UseFormSetValue<FieldValues>
  externalClassNames?: ExternalClassNamesType
}

export interface ErrorProps {
  text: string
  externalClassNames?: ExternalClassNamesType
}

export interface LoaderProps {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  position?: 'absolute' | 'fixed' | 'static'
  externalClassNames?: ExternalClassNamesType
}

type BaseTitleProps = {
  size?: 'xl' | 'lg' | 'md' | 'sm'
  theme?: 'dark' | 'light'
  externalClassNames?: ExternalClassNamesType
}

type TitleWithChildren = {
  children: ChildType
  content?: never
}

type TitleWithContent = {
  children?: never
  content: string
}

export type TitleProps = BaseTitleProps & (TitleWithChildren | TitleWithContent)

type BaseSubtitleProps = {
  size?: 'default' | 'big'
  theme?: 'dark' | 'light'
  externalClassNames?: ExternalClassNamesType
}

type SubtitleWithChildren = {
  children: ChildType
  content?: never
}

type SubtitleWithContent = {
  children?: never
  content: string
}

export type SubtitleProps = BaseSubtitleProps & (SubtitleWithChildren | SubtitleWithContent)

type BaseArticleProps = {
  externalClassNames?: ExternalClassNamesType
}

type ArticleWithChildren = {
  children: ChildType
  content?: never
}

type ArticleWithContent = {
  children?: never
  content: string
}

export type ArticleProps = BaseArticleProps & (ArticleWithChildren | ArticleWithContent)

export interface SectionProps extends ChildProps {
  id?: string
  subtitle?: string
  title?: string
  size?: 'xl' | 'lg' | 'md' | 'sm'
  inlineType?: 'type-1' | 'type-2' | 'type-3'
  externalClassNames?: ExternalClassNamesType
}

export interface ModalProps extends ChildProps {
  open: boolean
  onClose: () => void
}

export interface MessageProps {
  title: string
  description?: string
  theme?: 'dark' | 'light'
  externalClassNames?: ExternalClassNamesType
}
