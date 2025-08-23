import { FC } from 'react'
import MainLayout from '@/layouts/Main/MainLayout'
import { ChildProps } from '@/types/common.types'

const Layout: FC<ChildProps> = ({ children }) => {
  return <MainLayout>{children}</MainLayout>
}

export default Layout
