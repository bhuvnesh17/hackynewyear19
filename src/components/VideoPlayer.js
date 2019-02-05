import React, { Component } from "react";
import { Player } from 'video-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../../node_modules/video-react/dist/video-react.css"; // import css
import '../styles/App.css';

class VideoPlayer extends Component {
    render() {
        return (
		<div>
        <div  class="videoPlayer"> 
		    <Player
		      playsInline
		      poster="/assets/poster.png"
		      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
		    />
    	   </div>
        </div>
        );
    }
}


export default VideoPlayer;