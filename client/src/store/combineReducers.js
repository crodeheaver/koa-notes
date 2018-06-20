import { combineReducers } from 'redux'
import AuthReducer from './authReducer'
import NotesReducer from './noteReducer'

const reducers = combineReducers({
    auth: AuthReducer,
    notes: NotesReducer
})

export default reducers