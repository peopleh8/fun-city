import { createSlice } from '@reduxjs/toolkit'

const appReducer = createSlice({
  name: 'app',
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    setMenuOpen(state, action) {
      state.isMenuOpen = action.payload
    },
  },
})

export default appReducer.reducer
export const { setMenuOpen } = appReducer.actions
