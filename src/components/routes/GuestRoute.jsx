import React from "react";
import {Route, Redirect} from "react-router";
import {connect} from "react-redux";

const UserRoute = ({isAuthenticated, component: Component, ...rest}) => (
    <Route {...rest} render={props => !isAuthenticated ? <Component {...props} /> 
    : <Redirect to="/dashboard" /> 
} />
)

const mapState = (state) => ({
    isAuthenticated: !!state.UserReducer.user.token
})

export default connect(mapState)(UserRoute);