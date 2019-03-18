import React from "react";
import {connect} from "react-redux";
import VerificationMessage from "../messages/VerificationMessage";
import {allBooksSelector} from "../reducers/BooksReducer";
import AddBookCta from "../ctas/AddBookCta";

const DashboardPage = ({isConfirmed, books}) => (
    <div>
        {!isConfirmed && <VerificationMessage/>}
        {books.length === 0 && <AddBookCta/>}
    </div>
)

const mapState = (state) => ({
    isConfirmed: !!state.UserReducer.user.confirmed,
    books: allBooksSelector(state)
})

export default connect(mapState)(DashboardPage);