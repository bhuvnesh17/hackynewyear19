import React, { Component } from "react";

import "../../../node_modules/video-react/dist/video-react.css"; // import css
import '../../styles/App.css';
import  Introduction from "../header/Introduction.js";
import { withRouter } from 'react-router-dom'

const Babloo = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/login') }}
  >
    Click Me!
  </button>
))


class Logout extends Component {
    render() {
        return (
		<div>
            <Introduction />
            <h1>Log Out</h1>
            <div>{Babloo}</div>
        </div>
        );
    }
}



export default Logout;