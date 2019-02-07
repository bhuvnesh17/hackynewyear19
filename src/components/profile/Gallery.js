import React, { Component } from "react";
import "../../../node_modules/video-react/dist/video-react.css"; // import css
import  VideoPlayer from "./../items/VideoPlayer.js";

//import '../../styles/App.css';

import '../../styles/Gallery.css';
import  Introduction from "../header/Introduction.js";

const imageData = [
  {id: 1, thumbnail: 'https://i.imgur.com/2HLblaP.png'},
  {id: 2, thumbnail: 'https://i.imgur.com/3cPup5s.png'},
  {id: 3, thumbnail: 'https://i.imgur.com/2QTDv2F.jpg'},
  {id: 4, thumbnail: 'https://i.imgur.com/ssiNlOs.jpg'}
];

const active_display = {id: 1};

class Gallery extends React.Component {
  constructor () {
    super();
    this.state = {
      imageData: imageData,
      active: 'false active-display',
      active_display: active_display
    }
  };

  imageChange (id) {
    this.setState({active_display: {id:id}});
  }


  render () {
    return (
    <div>
        <Images imageData = {this.state.imageData}
          imageChange = {this.imageChange.bind(this)}
          active_display = {this.state.active_display}/>

        <Active imageData = {this.state.imageData}
          active = {this.state.active}
          active_display = {this.state.active_display}/>
    </div>
    )
  }
}

function Images (props) {
  return (
    <div>
      <div className = "images-wrapper wrapper-style">
        <ImagesList imageData = {props.imageData} imageChange = {props.imageChange}/>
        <div className = "full-image full-image-style">
          {
            (props.active_display.id === 1) ?
            <img src = "https://i.imgur.com/2HLblaP.png" width = "500" height ="500" /> : null
          }
          {
            (props.active_display.id === 2) ?
              <img src = "https://i.imgur.com/3cPup5s.png" width = "500" height ="500" /> : null           }
          {
            (props.active_display.id === 3) ?
              <img src = "https://i.imgur.com/2QTDv2F.jpg" width = "500" height ="500" /> : null           }
          {
            (props.active_display.id === 4) ?
              <img src = "https://i.imgur.com/ssiNlOs.jpg" width = "500" height ="500" /> : null           }
        </div>
      </div>
    </div>
  )
}

function ImagesList (props) {
  const {imageChange} = props;
  return(
    <div>
      <div className = "preview-row">
          {
            props.imageData.map(preview => {
              return (
                <div onClick ={() => imageChange(preview.id)} key = {preview.id}                       className = "previews previews-style">
                  <img src = {preview.thumbnail} width = '100' height = '100' />
                </div>
              )
            })
          }
          {imageChange}
        </div>
    </div>
  )
}

function Active (props) {
  return (
    <div>
      <div className = "active-wrapper">
         {
            props.imageData.map(active => {
              return (
                <span className = {(props.active_display.id===active.id) ?
                    'true active-display' : 'false active-display'} />
              )
            })
          }
      </div>
    </div>
  )
}


export default Gallery;
