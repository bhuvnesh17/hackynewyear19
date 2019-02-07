import React, { Component } from "react";
import '../../styles/login.css';
import { Redirect } from 'react-router-dom'
import  Profile from "./../profile/Profile.js";
import {withRouter} from 'react-router-dom';

class FluidInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      value: ""
    };
  }
  focusField() {
    const { focused } = this.state;
    this.setState({
      focused: !focused
    });
  }
  handleChange(event) {
    const { target } = event;
    const { value } = target;
    this.setState({
      value: value
    });
  }
  render() {
    const { type, label, style, id } = this.props;
    const { focused, value } = this.state;
    
    let inputClass = "fluid-input";
    if (focused) {
      inputClass += " fluid-input--focus";
    } else if (value != "") {
      inputClass += " fluid-input--open";
    }
    
    return (
      <div className={inputClass} style={style}>
        <div className="fluid-input-holder">
          
          <input 
            className="fluid-input-input"
            type={type}
            id={id}
            onFocus={this.focusField.bind(this)}
            onBlur={this.focusField.bind(this)}
            onChange={this.handleChange.bind(this)}
            autocomplete="off"
          />
          <label className="fluid-input-label" forHtml={id}>{label}</label>
          
        </div>
      </div>
    );
  }
}

//  onClick = () => {
//    this.props.history.push("/logout")
//  }
//
//  redirectToTarget = () => {
//    this.props.history.push("/logout")
//  }


class Button extends React.Component {

  state = {
    redirect: false
  }
  setRedirect = () => {
  console.log("Hi THere")
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/profile" component={Profile}/>
    }
  }
  redirectToTarget = () => {
    console.log("Hi in targer")
    this.props.history.push("/logout")
        console.log("Hi in targer2")

  }


  render() {
    return (
    <>
    {this.renderRedirect}
      <div className={`button ${this.props.buttonClass}`} onClick={this.redirectToTarget.bind(this)}>
        {this.props.buttonText}
      </div>
      </>
    );
  }
}
//        <Button buttonText="log in" buttonClass="login-button" onClick={`this.props.history.push('/profile')`} />


class LoginContainer extends React.Component {

  redirectToTarget = () => {
    this.props.history.push("/logout")
  }

  render() {

    const style = {
      margin: "15px 0"
    };

    const ButtonRouter = withRouter(Button)
    return (
      <div className="login-container">

        <div className="title">
         Login
        </div>
        <FluidInput type="text" label="name" id="name" style={style} />
        <FluidInput type="password" label="password" id="password" style={style} />
        <ButtonRouter buttonText="log in" buttonClass="login-button" onClick={this.props.onClick} />

        <button onClick={this.redirectToTarget.bind(this)}>Redirect</button>

      </div>
    );
  }
}

export default withRouter(LoginContainer);
