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
//            <VideoPlayer  url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>

    render() {
        return (
		<div>
          <div class="profile">
            <Introduction />
            <h1> Profile </h1>
            <h3>Note: Data sent through Fast and Secure MPLS Network</h3>
            <Gallery />
            <br />
            <iframe className="videoPlayer" width="408" height="350" src="https://www.youtube.com/embed/_o-qzPd9kIE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br />
            <iframe className="videoPlayer" width="408" height="350" src="https://www.youtube.com/embed/VRe9YzfE1sc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>          </div>

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