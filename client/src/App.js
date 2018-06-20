import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logout } from './store/authActions'
import {Layout } from './components'

class App extends Component {  

  onLogoutClick = () => {
    this.props.logout()
  }

  render = () => {
    const isAuthenticated = this.props.auth.isAuthenticated
    return (
      <Layout isAuthenticated={isAuthenticated} onLogoutClick={this.onLogoutClick} location={this.props.location.pathname}>
        {this.props.children}
      </Layout>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

const mapStateToProps = state => ({
  ...state
})
const wrappedApp = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
export { wrappedApp as App }
