import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        return (
        !rest.isAuthenticated
            ? <Component {...rest} />
            : <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
    )}} />
)

export { ProtectedRoute }