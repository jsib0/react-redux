import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {  //props received from jsx in index.js parsed with .map
		return <VideoListItem 
			onVideoSelect={props.onVideoSelect}
			key={video.etag} 
			video={video} /> //"Warning: iterators should have a unique 'key'" checked Network in (console) in the 'search' under Name etag was found l.25
	});													 //the jsx also sends data to video_list_item							

	return (
		<ul className="col-md-4 list-group">  
			{videoItems} {/*this is essentially video_list_item rending as an li*/} 
		</ul>
	);
};



export default VideoList;