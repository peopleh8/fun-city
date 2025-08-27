import axios from 'axios'

const baseConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 60000,
}

const unauthorizedAxios = axios.create(baseConfig)

unauthorizedAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.log('Error response:', error.response)
    }
    return Promise.reject(error)
  },
)

export { unauthorizedAxios }
