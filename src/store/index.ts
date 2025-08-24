import { configureStore, combineReducers } from '@reduxjs/toolkit'
import appReducer from '@/store/reducers/app.slice'
import testReducer from '@/store/reducers/test.slice'

const rootReducer = combineReducers({
  app: appReducer,
  test: testReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
