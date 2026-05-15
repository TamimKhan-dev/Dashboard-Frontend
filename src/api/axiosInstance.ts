import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://mock-backend-hintro.vercel.app',
})

export const setUserId = (userId: string) => {
  axiosInstance.defaults.headers.common['x-user-id'] = userId
}

export default axiosInstance