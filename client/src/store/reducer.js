import { combineReducers } from 'redux'
import { LOGIN, LOGIN_ERROR, LOGOUT } from './actions'

const initialState = {
  isAuthenticated: false,
  loginError: ''
}

function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginError: '',
        isAuthenticated: true,
        user: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        loginError: '',
        isAuthenticated: false,
        user: null
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
