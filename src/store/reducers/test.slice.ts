import { setIfChanged } from '@/utils/set-state-if-change'
import { createSlice } from '@reduxjs/toolkit'

const testReducer = createSlice({
  name: 'test',
  initialState: {
    test: 1,
  },
  reducers: {
    setTest(state, action) {
      setIfChanged(state, action, 'test')
    },
  },
})

export default testReducer.reducer
export const { setTest } = testReducer.actions
