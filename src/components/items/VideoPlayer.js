import React, { Component } from "react";
import { Player } from 'video-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./../../../node_modules/video-react/dist/video-react.css"; // import css
import './../../styles/App.css';

class VideoPlayer extends Component {
    render() {

        return (
		<div>
        <div  class="videoPlayer"> 
		    <Player
		      playsInline
		      poster={this.props.poster}
		      src={this.props.url}
		    />
    	   </div>
        </div>
        );
    }
}


export default VideoPlayer;