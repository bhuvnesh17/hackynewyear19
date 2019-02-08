import React, { Component } from "react";

import "../../../node_modules/video-react/dist/video-react.css";
import '../../styles/App.css';
import  VideoPlayer from "./../items/VideoPlayer.js";
import {withRouter} from 'react-router-dom';

import  Introduction from "../header/Introduction.js";

class Home extends Component {
  redirectToTarget = () => {
    this.props.history.push("/login")
  }
//            <VideoPlayer poster="https://pbs.twimg.com/media/C2DvlmvUsAMd5fq.jpg" url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>

    render() {
        return (
		<div>
            <Introduction />
            <h1>HOME</h1>
            <iframe className="videoPlayer" width="408" height="350" src="https://www.youtube.com/embed/BOApPWLwNsU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br />
           <button className="button-emergency " onClick={this.redirectToTarget.bind(this)}>Emergency Log In</button>
            <div>
            </div>
        </div>
        );
    }
}


export default withRouter(Home);