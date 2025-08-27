import { AppDispatch } from '@/store'
import { unauthorizedAxios } from '@/config/axios/axios'
import { setSubscribing, setSubscribingError, setSubscribingSuccess } from '@/store/reducers/app.slice'

export const subscribe = (email: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setSubscribing(true))

    const response = await unauthorizedAxios.post('/subscribe', { email })

    if (response.status === 200) {
      dispatch(setSubscribingSuccess(true))
    }
  } catch (e) {
    dispatch(setSubscribingError(true))
    console.error('Subscribe error', e)
  } finally {
    dispatch(setSubscribing(false))
  }
}
