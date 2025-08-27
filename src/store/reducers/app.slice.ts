import { createSlice } from '@reduxjs/toolkit'

const appReducer = createSlice({
  name: 'app',
  initialState: {
    isMenuOpen: false,
    isSubscribeModalOpen: false,
    isSubscribing: false,
    isSubscribingSuccess: false,
    isSubscribingError: false,
    subscribeMessage: '',
  },
  reducers: {
    setMenuOpen(state, action) {
      state.isMenuOpen = action.payload
    },
    setSubscribeModalOpen(state, action) {
      state.isSubscribeModalOpen = action.payload
    },
    setSubscribing(state, action) {
      state.isSubscribing = action.payload
    },
    setSubscribingSuccess(state, action) {
      state.isSubscribingSuccess = action.payload
    },
    setSubscribingError(state, action) {
      state.isSubscribingError = action.payload
    },
    setSubscribeMessage(state, action) {
      state.subscribeMessage = action.payload
    },
  },
})

export default appReducer.reducer
export const { setMenuOpen, setSubscribeModalOpen, setSubscribing, setSubscribingSuccess, setSubscribingError, setSubscribeMessage } = appReducer.actions
