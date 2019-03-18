import React from "react";
import {Form, Dropdown} from "semantic-ui-react";

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

    onSearchChange = (e, data) =>  {
        clearTimeout(this.timer);
        this.setState({query: data});
      this.timer = setTimeout(this.fetchOptions, 1000)
    }  

    fetchOptions = () => {
        if (!this.state.query) return null;
        this.setState({loading: true})
    }

    render () {
        return (
            <Form>
                <Dropdown
                placeholder = "Search a book by title"
                fluid search value = {this.state.query}
                onSearchChange = {this.onSearchChange}
                options = {this.state.options}
                loading = {this.state.loading}
                />
            </Form>
        )
    }
}

export default NewBookForm;