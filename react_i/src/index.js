import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDT_LNMwnoxuVVzyGZNZDEMUGqtO2U0UAE';




class App extends Component {  //l.22
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		 }; //l.22

		this.videoSearch('surfboards');
	}

	videoSearch(term) /* l.31 refactored this.videoSearch and added this*/ {
		YTSearch({key: API_KEY, term: term}, (foo) => {
			this.setState({ 
			videos: foo,
			selectedVideo: foo[0] 
		}); //l.21
	  });

	}



	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); /* l.32 lodash / debounce*/

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo}/>  {/* l.29 *bookmark: index.js selectedVideo* *binds with video_list and them video_list_item* changed from this.state.video[0] to current */}
				<VideoList 
					onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos}/> {/* l.23 videos is a props. this is sending data to video_list*/}
				
			</div> 
		);
	}
}

 ReactDOM.render(<App />, document.querySelector('.container'));