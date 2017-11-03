import React from 'react';

const VideoDetail = ({video}) => {
	if (!video) {
		return <div>Loading...</div>;
	}									//l.28 some parent objects just cant fetch information fast enough to satisfy the need of the child objects


{/**/}
	const videoId = video.id.videoId; // two lines to imbed 
	const url = `https://www.youtube.com/embed/${videoId}`; // l.27 notice the back ticks (the one behind #1 on keyboard)



	return (
		
		<div className="video-detail col-md-8">        {/*l.27*/}  
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>

	);

};

export default VideoDetail;