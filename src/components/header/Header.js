import React, { Component } from "react";
import { Player } from 'video-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../../../node_modules/video-react/dist/video-react.css"; // import css
import './../../styles/App.css';
import '../../styles/navbar.css';

import  Introduction from "./../Introduction.js";
import  VideoPlayer from "./../VideoPlayer.js";
import  LoginContainer from "./../login/LogIn.js";

class Header extends Component {
    render() {
        return (
		<div>
        	<div class="links">
		        <ul>
		          <li><Link to="/">Home</Link></li>
		          <li><Link to="/profile">Profile</Link></li>
		          <li><Link to="/login">Log In</Link></li>
		          <li><Link to="/logout">Log Out</Link></li>
		          <p class="logo">App Aware Routing</p>

		        </ul>

		        <Route path="/" exact component={Home}/>
		        <Route path="/profile" component={Profile}/>
		        <Route path="/login" component={LogIn}/>
		        <Route path="/logout" component={LogOut}/>
        	</div>

        </div>
        );
    }
}


const Home = () => (
	<>
	<Introduction />
	<h1> Home </h1>
	<VideoPlayer />
	</>);

const LogIn = () => (
  <div class="login">
  	<Introduction />
	<h1> Log In </h1>
	<LoginContainer />
  </div>
);

const Profile = () => (
  <div class="profile">
  	<Introduction />
	<h1> Profile </h1>
	<VideoPlayer />
	<br />
	<VideoPlayer />

  </div>
);


const LogOut = () => (
  <div class="logout">
  	<Introduction />
	<h1> Log Out </h1>

  </div>
);


export default Header;