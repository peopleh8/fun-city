import { ReactElement, ReactNode } from 'react'
import { StaticImageData } from 'next/image'

export type ChildType = ReactNode | ReactElement
export type ExternalClassNamesType = string | undefined

export interface ChildProps {
  children: ChildType
}

export interface LogoProps {
  position: 'header' | 'footer'
}

export interface FooterItemProps extends ChildProps {
  title: string
  darken?: boolean
}

export interface NavBarProps {
  list: { id: number; title: string; link: string }[]
  position: 'footer'
}

export interface SocialsProps {
  list: { id: number; icon: string | StaticImageData; link: string }[]
  position: 'footer'
  externalClassNames?: ExternalClassNamesType
}

export interface FeatureListProps extends ChildProps {
  direction?: 'horizontal' | 'vertical'
}
