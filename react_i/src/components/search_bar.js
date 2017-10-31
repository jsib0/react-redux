import React, { Component } from 'react';


class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: '' }; // 18/19
	}

	render() {
		return (
			<div className="search-bar">
				<input 
				value={ this.state.term } // 19
				onChange={event => this.onInputChange(event.target.value)}/> {/*updates this.state 19  (previously this.setState({term: event.target.value}) */}
			</div>

			
		)
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	};
}

export default SearchBar;