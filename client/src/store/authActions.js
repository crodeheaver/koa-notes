import axios from './axios'
import { history } from '../helpers'

export const LOGIN = 'LOGIN'
export const GET_USER_INFO = 'GET_USER_INFO'
export const LOGOUT = 'LOGOUT'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const REGISTER = 'REGISTER'

export const login = (email, password) => dispatch => {
  return axios.post(`auth/login`, { email, password })
    .then(
      response => {
        dispatch({
        type: LOGIN,
        payload: response.data
      })
      history.push('/')
    },
      error => dispatch({ type: LOGIN_ERROR, payload: error.response.data})
    )
}

export const register = (email, username, password, passwordConfirmation) => dispatch => {
  return axios.post(`auth/register`, { email, username, password, passwordConfirmation })
    .then(
      response => {
        dispatch({
        type: REGISTER,
        payload: response.data
      })
      history.push('/')
    },
      error => dispatch({ type: LOGIN_ERROR, payload: error.response.data})
    )
}

export const getUserInfo = () => dispatch => {
  return axios.get(`auth/user`)
    .then(
      response => {
        dispatch({
        type: LOGIN,
        payload: response.data
      })
      history.push('/')
    }
      ,
      error => ''
    )
}

export const logout = () => dispatch => {
  return axios.post(`auth/logout`)
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
