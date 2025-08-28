import { AppDispatch } from '@/store'
import { unauthorizedAxios } from '@/config/axios/axios'
import { setSubscribing, setSubscribingError, setSubscribingSuccess } from '@/store/reducers/app.slice'

export const subscribe = (email: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setSubscribing(true))

    const response = await unauthorizedAxios.post('/applications', { data: { Email: email } })

    console.log(response)

    if (response.status >= 200 && response.status < 300) {
      dispatch(setSubscribingSuccess(true))
    }
  } catch (e) {
    dispatch(setSubscribingError(true))
    console.error('Subscribe error', e)
  } finally {
    dispatch(setSubscribing(false))
  }
}
