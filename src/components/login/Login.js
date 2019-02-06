import React, { Component } from "react";
import { Player } from 'video-react';

import '../../styles/App.css';
import  LoginContainer from "./LogInContainer.js";
import  Introduction from "../header/Introduction.js";

class Login extends React.Component {
    render() {
        return (
		<div>
            <div class="login">
  	        <Introduction />
	        <h1> Log In </h1>
	        <LoginContainer />
            </div>
        </div>

        );
    }
}



export default Login;