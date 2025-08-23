'use client'

import { Provider } from 'react-redux'
import { setupStore } from '@/store'
import Layout from '@/layouts/Layout'
import { setTest } from '@/store/reducers/test.slice'
import { PageProps } from '@/types/page.types'

export const store = setupStore()

const dispatchActions: {
  [K in Exclude<keyof PageProps, 'children'>]: (payload: PageProps[K]) => any
} = {
  test: setTest,
}

const getTypedKeys = <T extends object>(obj: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[]
}

const StoreProvider = ({ children, ...props }: PageProps) => {
  getTypedKeys(props).forEach((key) => {
    const value = props[key]
    const action = dispatchActions[key]

    if (value !== undefined && action) {
      store.dispatch(action(value as any))
    }
  })

  return (
    <Provider store={store}>
      <Layout>{children}</Layout>
    </Provider>
  )
}

export default StoreProvider
