import React from "react";
import {Form, Button} from "semantic-ui-react";
import InlineError from "../messages/InlineError";
import AuthError from "../messages/AuthError";


class ForgotPasswordForm extends React.Component {

    state = {
        data: {
            password: "",
            passwordConfirmation: ""
        },
        loading: false,
        errors: {}
    }


    onInputChange = (event) => {
        this.setState({
            data: {...this.state.data, [event.target.name]: event.target.value}
        })
    }

    validate = (data) => {
        const errors = {};
        if (!data.password) errors.password = "Can't be blank";
        if (data.password !== data.passwordConfirmation) errors.passwordConfirmation = "Passwords don't match!";
        return errors
    }

    onSubmit = () => {
       const errors = this.validate(this.state.data);
       this.setState({errors})
       if (Object.keys(errors).length === 0) {
           this.setState({loading: true})
           return (
               this.props.submit({...this.state.data, token: this.props.token })
               .catch(err => this.setState({errors: err.response.data.errors, loading: false}))    
           )
       }
    }


    render() {
        const {data, errors, loading} = this.state;
        return(
            <Form onSubmit = {this.onSubmit}  loading = {loading} >
            {errors.global && <AuthError text= {errors.global} />}
                <Form.Field error = {!!errors.password}  >
                    <label htmlFor="password">Password</label>
                    <input type="password"
                    placeholder = "Enter new password"
                    name = "password"
                    value = {data.password}
                    onChange = {this.onInputChange}
                    />
                    {errors.password && <InlineError text = {errors.password} /> }
                </Form.Field>
                <Form.Field error = {!!errors.confirmPassword}  >
                    <label htmlFor="password"> Confirm Password</label>
                    <input type="password"
                    placeholder = "Re-enter the password"
                    name = "passwordConfirmation"
                    value = {data.passwordConfirmation}
                    onChange = {this.onInputChange}
                    />
                    {errors.passwordConfirmation && <InlineError text = {errors.passwordConfirmation} /> }
                </Form.Field>
                
                <Button primary  >Reset</Button>
            </Form>
        )
    }
}

export default ForgotPasswordForm;