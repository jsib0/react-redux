import React, { Component } from 'react';
import { connect } from 'react-redux'; // l.42
import { selectBook } from '../actions/index'; // l.45
import { bindActionCreators } from 'redux'; //l.45 





class BookList extends Component {
	renderList() {
		return this.props.books.map( (book) => {
			return (
				<li 
				key={book.title}
				onClick={() => this.props.selectBook(book)} 
				className="list-group-item">{book.title}
				</li>
			);
		});
	}	



	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>	
		)
	}
}

		{/*l.42 - below this is the glue between react and redux*/} 

function mapStateToProps(state) {
		{/* whatever is returned will show up as props inside the BookList*/}

	return {
		books: state.books
	};
}

		{/*l.45 6:32 - Anything returned from this function will end up as props on the BookList container*/} 

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList) // exporting the container 