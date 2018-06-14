import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'

import Layout from './components/layout'
import Home from './components/home'
import Login from './components/login'
import Signup from './components/signup'
import PrivateRoute from './components/privateRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path='/' component={PrivateRoute(Home)} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </Layout>
    </BrowserRouter>
  )
}

export default connect()(App)
