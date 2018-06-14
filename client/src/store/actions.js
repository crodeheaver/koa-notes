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

export const LOGIN = 'LOGIN'
export const SIMPLE_ACTION = 'SIMPLE_ACTION'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const login = (email, password) => dispatch => {
  return instance.post(`auth/login`, { email, password })
    .then(
      response => response,
      error => dispatch({ type: LOGIN_ERROR, payload: error.response.data})
    )
    .then(json => {
      dispatch({
        type: LOGIN,
        payload: json
      })
    }

    )
}

export const simpleAction = () => dispatch => {
  return instance.get(`user/f192b9ce-64eb-4542-9310-4e36091a1cdd/notes`)
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    )
    .then(json => {
      console.log(json)
      dispatch({
        type: 'SIMPLE_ACTION'
      })
    }

    )
}
