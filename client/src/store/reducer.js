import { combineReducers } from 'redux'
import { LOGIN, LOGIN_ERROR } from './actions'
import { Cookies } from 'react-cookie'
const initialState = {
  isAuthenticated: false,
  loginError: ''
}

function auth (state = initialState, action) {
  switch (action.type) {
    case LOGIN:

      const cookie = new Cookies()
      console.log(cookie.getAll())
      return {
        ...state,
        loginError: '',
        isAuthenticated: true,
        user: action.payload
      }
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  auth
})

export default reducers
