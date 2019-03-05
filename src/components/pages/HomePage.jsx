import React from "react";
import  {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Button} from "semantic-ui-react";
import {logout} from "../actions/auth";

const HomePage = ({isAuthenticated, logout}) => (
    <div>
        <h1>Home Page</h1>
       {isAuthenticated ? <Button content = "Log Out" positive  onClick = {() => 
    logout()   
    } /> : <div>
         <Link to="/login" >Login</Link> or <Link to = "/signup" >Signup</Link>
    </div>
       }
    </div>
)

const mapState = (state) => ({
    isAuthenticated: !!state.UserReducer.user.token
})

export default connect(mapState, {logout})(HomePage);