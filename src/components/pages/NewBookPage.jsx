import React from "react";
import {Segment} from "semantic-ui-react";
import NewBookForm from "../forms/NewBookForm";

class NewBookPage extends React.Component {

    state = {
        book: null
    }

    render () {
        return (
            <Segment>
                <h1>Add New Book To Your Collection</h1>
                <NewBookForm/>
            </Segment>
        )
    }
}

export default NewBookPage;