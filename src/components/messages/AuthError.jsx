import React from "react";
import {Message} from "semantic-ui-react";

const AuthError = ({text}) => (
    <Message negative > 
        <Message.Header>
           Oops! Something went wrong.
        </Message.Header>
        <Message.Content>
        {text}
        </Message.Content>
    </Message>
)

export default AuthError;