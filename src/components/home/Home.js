import React, { Component } from "react";

import "../../../node_modules/video-react/dist/video-react.css";
import '../../styles/App.css';
import  VideoPlayer from "./../items/VideoPlayer.js";

import  Introduction from "../header/Introduction.js";

class Home extends Component {
    render() {
        return (
		<div>
            <Introduction />
            <h1>HOME</h1>
            <VideoPlayer poster="src/images/img1.jpg" url="src/videos/hans.mp4"/>
            <br />
            <VideoPlayer poster="src/images/img2.jpg" url="src/videos/happy.mp4"/>
            <br />


        </div>
        );
    }
}


export default Home;