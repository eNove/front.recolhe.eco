import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.recolhe.eco/api/v1/'
})

export default api
