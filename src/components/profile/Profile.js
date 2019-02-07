import React, { Component } from "react";
import "../../../node_modules/video-react/dist/video-react.css"; // import css
import  VideoPlayer from "./../items/VideoPlayer.js";

import '../../styles/App.css';
import  Introduction from "../header/Introduction.js";
import  Gallery from "./Gallery.js";
import {withRouter} from 'react-router-dom';

class Profile extends Component {

  redirectToTarget = () => {
    this.props.history.push("/logout")
  }

    render() {
        return (
		<div>
          <div class="profile">
            <Introduction />
            <h1> Profile </h1>
            <Gallery />
            <br />
            <VideoPlayer  url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
            <br />
            <VideoPlayer  url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
          </div>

        <div class="image-logout">
            <br />
            <br />

            <button className="button-logout" onClick={this.redirectToTarget.bind(this)}>Log Out</button>
        </div>

        </div>
        );
    }
}


export default withRouter(Profile);