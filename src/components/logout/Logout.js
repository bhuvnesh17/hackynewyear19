import React, { Component } from "react";

import "../../../node_modules/video-react/dist/video-react.css"; // import css
import '../../styles/App.css';
import  Introduction from "../header/Introduction.js";
import { withRouter } from 'react-router-dom'



class Logout extends Component {
    render() {
        return (
		<div>
            <Introduction />
            <h1>Log Out</h1>
            <div class="image-logout">
               <img src = "http://www.quickmeme.com/img/94/949b7fad5feabcd6a3178227c0c6c4c6a5ecd5934e6d7b40965a9ac8086820ed.jpg" />
            </div>

        </div>
        );
    }
}


export default Logout;