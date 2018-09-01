import React from "react";
// import {Columns} from "../Layout";
// import PreloadImage from 'react-preload-image';
import "./ImageCard.css";

const ImageCard = props => (
  <div key={props.id} className="column is-one-quarter img-container" onClick ={() => props.getMatch(props.id)}>
  {/* <PreloadImage
  className="imgClass" alt={props.name}
  src={props.image}
  lazy <img src={require('../logo.png')} alt="logo" className="brand-logo"/>
 /> */}
    <img alt={props.name} src={props.image} />
  </div>
);

export default ImageCard;