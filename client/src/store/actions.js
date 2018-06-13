import axios from 'axios'
export const LOGIN = 'LOGIN'
export const SIMPLE_ACTION = 'SIMPLE_ACTION'

export const login = (email, password) => dispatch => {
    return axios(`http://localhost:5000/v1/auth/login`,{
        data:{email, password},
        method:'POST',
        withCredentials: true,
        credentials: true,
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
      }
    })
      .then(
        response => response,
        error => console.log('An error occurred.', error)
      )
      .then(json =>{
          console.log(json)
          dispatch({
            type: 'SIMPLE_ACTION',
            payload: { email, password }
        })
      }
        
      )

}

export const simpleAction = () => dispatch => {
    return axios(`http://localhost:5000/v1/user/f192b9ce-64eb-4542-9310-4e36091a1cdd/notes`, {withCredentials: true, crossDomain: true, credentials: true, method: 'GET',headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
  }})
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>{
          console.log(json)
          dispatch({
            type: 'SIMPLE_ACTION'
        })
      }
        
      )
}