import React, { Component } from "react";
import { Player } from 'video-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../../../node_modules/video-react/dist/video-react.css"; // import css
import './../../styles/App.css';
import '../../styles/navbar.css';

import  Introduction from "./Introduction.js";
import  VideoPlayer from "./../items/VideoPlayer.js";

import  Login from "./../login/Login.js";
import  Profile from "./../profile/Profile.js";
import  Logout from "./../logout/Logout.js";
import  Home from "./../home/Home.js";

class Header extends Component {
    render() {
        return (
		<div>
        	<div class="links">
		        <ul>
		          <li><Link to="/">Home</Link></li>
		          <li><Link to="profile">Profile</Link></li>
		          <li><Link to="login">Log In</Link></li>
		          <li><Link to="logout">Log Out</Link></li>
		          <p class="logo"> App Aware Routing</p>

		        </ul>

		        <Route path="/" exact component={Home}/>
		        <Route path="/profile" component={Profile}/>
		        <Route path="/login" component={Login}/>
		        <Route path="/logout" component={Logout}/>
        	</div>

        </div>
        );
    }
}



export default Header;