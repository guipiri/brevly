import axios from 'axios'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
})

axiosClient.interceptors.response.use(
  (res) => res,
  (error) => {
    return Promise.reject(error.response?.data.message)
  }
)

export { axiosClient }
