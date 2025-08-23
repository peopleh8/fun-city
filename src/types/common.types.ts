import { ReactElement, ReactNode } from 'react'

export type ChildType = ReactNode | ReactElement
export type ExternalClassNamesType = string | undefined

export interface ChildProps {
  children: ChildType
}
