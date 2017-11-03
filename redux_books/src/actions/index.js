export function selectBook(book) {
	// selectBook is an ActionCreator, it needs to return an action,
	// an object with a type property
	return {
		// l.46 3:40
		type: 'BOOK_SELECTED',
		payload: book

	};
	
}