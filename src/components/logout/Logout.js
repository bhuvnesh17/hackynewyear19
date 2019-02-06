import React, { Component } from "react";

import "../../../node_modules/video-react/dist/video-react.css"; // import css
import '../../styles/App.css';
import  Introduction from "../header/Introduction.js";

class Logout extends Component {
    render() {
        return (
		<div>
            <Introduction />
            <h1>Log Out</h1>
        </div>
        );
    }
}


export default Logout;