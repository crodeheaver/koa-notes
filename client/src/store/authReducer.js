import { LOGIN, LOGIN_ERROR, LOGOUT, REGISTER } from './authActions'

const initialState = {
  isAuthenticated: false,
  loginError: ''
}

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginError: '',
        isAuthenticated: true,
        user: action.payload
      }
    case REGISTER:
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



export default AuthReducer
