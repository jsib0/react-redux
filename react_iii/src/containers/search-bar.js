import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index.js';

//l.52
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ''};

		this.onInputChange = this.onInputChange.bind(this); // l.53

		this.onFormSubmit = this.onFormSubmit.bind(this); // l.58
	}

	// l.53
	onInputChange(event) {
		// console.log(event.target.value);
		this.setState({ term: event.target.value });
	}
	// l.54
	onFormSubmit(event) {
		event.preventDefault();

		// We need to go and fetch weather data
		this.props.fetchWeather(this.state.term);  // l.58
		this.setState({ term: '' });
	}


	render () {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
				 placeholder="Get a five-day forecast in your favorite cities"
				 className="form-control"
				 value={this.state.term}
				 onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>

		);
	}
}

//l.58
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)