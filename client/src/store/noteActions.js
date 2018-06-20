import axios from './axios'
import { history } from '../helpers'

export const GET_NOTES = 'GET_NOTES'
export const NOTES_ERROR = 'NOTES_ERROR'
export const CREATE_NOTE = 'CREATE_NOTE'

export const getNotes = () => (dispatch, getState) => {
  const { user } = getState().auth
  return axios.get(`user/${user.id}/notes/`)
    .then(
      response => {
        dispatch({
        type: GET_NOTES,
        payload: response
      })
      history.push('/')
    },
      error => dispatch({ type: NOTES_ERROR, payload: error.response.data})
    )
}

export const createNote = (title, text) => (dispatch, getState) => {
  const { user } = getState()
  return axios.get(`user/${user.id}/notes/`, { title, text })
    .then(
      response => {
        dispatch({
        type: CREATE_NOTE,
        payload: response
      })
      history.push('/')
    },
      error => dispatch({ type: NOTES_ERROR, payload: error.response.data})
    )
}
