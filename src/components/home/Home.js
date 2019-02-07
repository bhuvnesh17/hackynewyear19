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
            <VideoPlayer poster="https://pbs.twimg.com/media/C2DvlmvUsAMd5fq.jpg" url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
            <br />


        </div>
        );
    }
}


export default Home;