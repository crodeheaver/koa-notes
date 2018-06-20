import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
    <Route {...rest} render={props => {
        return (
        rest.auth.isAuthenticated
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location.pathname } }} />
    )}} />
)}
const mapStateToProps = state => ({
    ...state
})
const wrappedPrivateRoute = connect(mapStateToProps)(PrivateRoute)

export { wrappedPrivateRoute as PrivateRoute }
