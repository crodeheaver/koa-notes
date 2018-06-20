import { GET_NOTES, NOTES_ERROR } from './noteActions'

const initialState = {
  notes: [],
  error: ''
}

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        error: '',
        notes: action.payload.data
      }
    case NOTES_ERROR:
      return {
        ...state,
        error: action.payload.data
      }
    default:
      return state
  }
}



export default AuthReducer
