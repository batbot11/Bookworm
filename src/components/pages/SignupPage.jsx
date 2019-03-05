import React from "react";
import {connect} from "react-redux";
import SignupForm from "../forms/SignupForm";
import {signup} from "../actions/user";

class SignupPage extends React.Component {

    submit = (data) => this.props.signup(data).then(() => this.props.history.push("/dashboard"));

    render () {
        return (
            <div>
                <h1>Join  Now</h1>
                <h2>And Unlock The Awesomeness That Awaits!</h2>
                <SignupForm submit = {this.submit} />
            </div>
        )
    }
}


export default connect(null, {signup})(SignupPage);