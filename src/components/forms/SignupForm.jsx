import React from "react";
import {Form, Button} from "semantic-ui-react";
import isEmail from 'validator/lib/isEmail';
import InlineError from "../messages/InlineError";

class SignupForm extends React.Component {

    state = {
        data: {
            email: "",
            password: ""
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
        if (!data.password) errors.password = "Password field can't be empty!";
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
                <Form.Field error={!!errors.password} >
                    <label htmlFor="password">Password</label>
                    <input type="text"
                    placeholder = "Enter Password"
                    name = "password"
                    value = {data.password}
                    onChange = {this.onInputChange}
                    />
                   {errors.password && <InlineError text = {errors.password} /> }
                </Form.Field>
                <Button primary  >Signup</Button>
            </Form>
        )
    }
}

export default SignupForm;