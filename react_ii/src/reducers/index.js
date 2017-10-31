import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book'; // l.47


//any key provided in the combineReducers ends up as a global state
const rootReducer = combineReducers({
 	books: BooksReducer,
 	activeBook: ActiveBook
});

export default rootReducer;
  