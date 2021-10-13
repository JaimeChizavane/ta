import axios from 'axios'

const API_URL = process.env.VUE_APP_ROOT_API
const APP_KEY = process.env.VUE_APP_KEY

const instance = axios.create({
  baseURL: API_URL,
  // timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    'Q-AppID': APP_KEY
  }
})

instance.interceptors.request.use(request => {
  const locale = window.localStorage.language

  request.headers.common['Accept-Language'] = locale ? JSON.parse(locale).locale : 'pt'

  return request
})

instance.interceptors.response.use(response => {
  // window.$('#app-container').removeClass('show-spinner')
  return Promise.resolve(response)
}, error => {
  return Promise.reject(error)
})

export default instance
