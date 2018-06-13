import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { connect } from 'react-redux'
import './App.css';

import Layout from './components/layout'
import Home from './components/home'
import Login from './components/login'
import PrivateRoute from './components/privateRoute'

const App = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={PrivateRoute(Home)} />
        <Route exact path="/login" component={Login} />
      </Layout>
    </Router>
  )
}

export default connect()(App)