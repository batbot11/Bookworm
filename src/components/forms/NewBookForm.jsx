import React from "react";
import {connect} from "react-redux";
import {Form, Dropdown} from "semantic-ui-react";
import {getOptions} from "../actions/auth";

class NewBookForm extends React.Component {

    state = {
        query: "",
        loading: false,
        options: [{
            key: 1,
            value: 1,
            text: "first book"
        },
        {
            key: 2,
            value: 2,
            text: "second book"
        }
    ],
        books: {}
    }

    onSearchChange = (e, data) => {
        clearTimeout(this.timer);
        this.setState({query: data.searchQuery});
        this.timer = setTimeout(this.fetchOptions, 1000)
    }

    fetchOptions = () => {
        if (!this.state.query) return null;
        this.setState({loading: true})
        this.props.getOptions(this.state.query)
    }

    render () {
        return (
            <Form>
                <Dropdown search fluid
                placeholder = "Search book by Title"
                loading = {this.state.loading}
                options = {this.state.options}
                onSearchChange = {this.onSearchChange}
                />
            </Form>
        )
    }
}

export default connect(null, {getOptions})(NewBookForm);