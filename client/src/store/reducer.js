import { combineReducers } from 'redux'
import { LOGIN, SIMPLE_ACTION } from './actions'

const initialState = {
  isAuthenticated: true,
  simpleMessage: ''
}

function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state        
      }
      case SIMPLE_ACTION:
      return {
        ...state,
        simpleMessage: action.payload
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  auth
})

export default reducers
