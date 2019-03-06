import React from "react";
import {connect} from "react-redux";
import {confirm} from "../actions/auth";
import {Message, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";

class ConfirmationPage extends React.Component {

    state = {
        loading: true,
        success: false
    }

    componentDidMount() {
        this.props.confirm(this.props.match.params.token)
        .then(() => this.setState({loading: false, success: true}))
        .catch(() => this.setState({loading: false, success: false}))
    }

    render() {
        const {loading, success} = this.state;
        return(
            <div>
                {loading && (
                    <Message icon >
                    <Icon name="circle notched" loading />
                    <Message.Header>Validating your Email!</Message.Header>
                    </Message>
                )}
                
                {!loading && success && (
                    <Message icon success >
                    <Icon name="checkmark" />
                    <Message.Content>
                        <Message.Header>Thank You! Your Account has been Verified.</Message.Header>
                        <Link to="/dashboard" >Go to Your Dashboard</Link>
                    </Message.Content>
                    </Message>
                )}

                    {!loading && !success && (
                        <Message icon negative >
                        <Icon name="warning sign" />
                        <Message.Header>Oops! Invalid Token it seems.</Message.Header>
                        </Message>
                    )}

            </div>
        )
    }
}

export default connect(null, {confirm})(ConfirmationPage);