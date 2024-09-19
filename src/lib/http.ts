import axios from 'axios'
import { useToast } from '@/hooks/use-toast'

const { toast } = useToast()

const http = axios.create()

http.interceptors.request.use(
  function (config) {
    config.url = import.meta.env.VITE_API_URL + config.url

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    toast({
      title: 'Scheduled: Catch up',
      description: 'Friday, February 10, 2023 at 5:57 PM'
    })

    return Promise.reject(error)
  }
)

export default http
