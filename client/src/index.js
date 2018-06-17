import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import { getUserInfo } from './store/actions'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from './helpers';

import './index.css'
import { App } from './App'
import { PrivateRoute, Home, LoginPage, Register, NotFound } from './components'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()
const userinfo = async () => {
  await store.dispatch(getUserInfo())
}

userinfo().then(() => {
  const state = store.getState()
  console.log(state)
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App>
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={Register} />
            <Route component={NotFound} />
          </Switch>
        </App>
      </Router>
    </Provider>
    , document.getElementById('root'))
  registerServiceWorker()
})


