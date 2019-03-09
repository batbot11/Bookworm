import React from "react";
import {Form, Button} from "semantic-ui-react";
import isEmail from 'validator/lib/isEmail';
import InlineError from "../messages/InlineError";
import AuthError from "../messages/AuthError";

class ForgotPasswordForm extends React.Component {

    state = {
        data: {
            email: ""
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
        if (!isEmail(data.email)) errors.email = "Please enter a valid email!";
        return errors
    }

    onSubmit = () => {
       const errors = this.validate(this.state.data);
       this.setState({errors})
       if (Object.keys(errors).length === 0) {
           this.setState({loading: true})
           return (
               this.props.submit(this.state.data)
               .catch(err => this.setState({errors: err.response.data.errors, loading: false}))    
           )
       }
    }


    render() {
        const {data, errors, loading} = this.state;
        return(
            <Form onSubmit = {this.onSubmit}  loading = {loading} >
            {errors.global && <AuthError text = {errors.global} />}
                <Form.Field error = {!!errors.email}  >
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    placeholder = "abc@abc.com"
                    name = "email"
                    value = {data.email}
                    onChange = {this.onInputChange}
                    />
                    {errors.email && <InlineError text = {errors.email} /> }
                </Form.Field>
                
                <Button primary  >Send Link</Button>
            </Form>
        )
    }
}

export default ForgotPasswordForm;