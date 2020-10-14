import axios from 'axios'

const api = axios.create({
  baseURL: 'https://some.api.com:3333'
})

export default api
