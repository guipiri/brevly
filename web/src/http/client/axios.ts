import axios from 'axios'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
})

axiosClient.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.data?.message) {
      return Promise.reject({ message: error.response.data.message })
    }

    return Promise.reject('Erro no servidor, tente novamente mais tarde.')
  }
)

export { axiosClient }
