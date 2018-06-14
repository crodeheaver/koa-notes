import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export default function (ComposedComponent) {
  const PrivateRoute = (props) => props.authenticated ? <ComposedComponent {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />

  const mapStateToProps = state => {
    return { authenticated: state.auth.isAuthenticated }
  }

  return connect(mapStateToProps)(PrivateRoute)
}
