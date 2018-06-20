import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000/v1/',
    timeout: 1000,
    withCredentials: true,
    credentials: true,
    crossDomain: true,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

  export default instance