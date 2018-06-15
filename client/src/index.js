import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import { getUserInfo } from './store/actions'
import { Router } from 'react-router-dom'
import { history } from './helpers/history';

import './index.css'
import {App} from './App'
import { PrivateRoute, ProtectedRoute, Home, LoginPage, Register } from './components'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()
const userinfo = async () => {
  await store.dispatch(getUserInfo())
}

userinfo().then(() => {
  const state = store.getState()
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App>
          <PrivateRoute path='/' component={Home} />
          <ProtectedRoute path='/login' component={LoginPage} isAuthenticated={state.auth.isAuthenticated} />
          <ProtectedRoute path='/signup' component={Register} isAuthenticated={state.auth.isAuthenticated} />
        </App>
      </Router>
    </Provider>
    , document.getElementById('root'))
  registerServiceWorker()
})


