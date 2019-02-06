import React, { Component } from "react";

import "../../../node_modules/video-react/dist/video-react.css"; // import css
import '../../styles/App.css';
import  Introduction from "../header/Introduction.js";

class Home extends Component {
    render() {
        return (
		<div>
            <Introduction />
            <h1>HOME</h1>
        </div>
        );
    }
}


export default Home;