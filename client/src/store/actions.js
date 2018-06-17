import axios from 'axios'
import { history } from '../helpers'

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

export const LOGIN = 'LOGIN'
export const GET_USER_INFO = 'GET_USER_INFO'
export const LOGOUT = 'LOGOUT'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const login = (email, password) => dispatch => {
  return instance.post(`auth/login`, { email, password })
    .then(
      response => {
        dispatch({
        type: LOGIN,
        payload: response
      })
      console.log('dispatched')
      history.push('/')
    },
      error => dispatch({ type: LOGIN_ERROR, payload: error.response.data})
    )
}

export const getUserInfo = () => dispatch => {
  return instance.get(`auth/user`)
    .then(
      response => {
        dispatch({
        type: LOGIN,
        payload: response
      })
      history.push('/')
    }
      ,
      error => ''
    )
}

export const logout = () => dispatch => {
  return instance.post(`auth/logout`)
    .then(
      () => {
        dispatch({
        type: LOGOUT
      })
      history.push('/login')
    },
      error => ''
    )
}
