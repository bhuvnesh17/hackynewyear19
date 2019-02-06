import React, { Component } from "react";
import "../../../node_modules/video-react/dist/video-react.css"; // import css
import  VideoPlayer from "./../items/VideoPlayer.js";

import '../../styles/App.css';
import  Introduction from "../header/Introduction.js";

class Profile extends Component {
    render() {
        return (
		<div>
          <div class="profile">
            <Introduction />
            <h1> Profile </h1>
            <VideoPlayer  url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
            <br />
            <VideoPlayer  url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
            <br />
          </div>
        </div>
        );
    }
}


export default Profile;