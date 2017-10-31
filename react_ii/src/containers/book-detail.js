import React, { Component } from 'react';
import { connect } from 'react-redux';

// l.48
class BookDetail extends Component {
	render() {
		return (
			<div>Book Detail!</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		book: state.active
	}
}

export default connect(mapStateToProps)(BookDetail);