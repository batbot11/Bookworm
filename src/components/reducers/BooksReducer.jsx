import {createSelector} from "reselect";

const initialState = {
    books: {}
}

const BooksReducer = (state = initialState, action) => ({books: ({})});

export default BooksReducer;

//Selectors

const booksSelector = state => state.BooksReducer.books;

export const allBooksSelector = createSelector(booksSelector, booksHash =>
    Object.values(booksHash)
    )
