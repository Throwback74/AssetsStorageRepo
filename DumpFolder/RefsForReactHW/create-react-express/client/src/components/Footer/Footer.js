import React from "react";
import "./Footer.css";


const Footer = props => (
  <footer className="footer">
    <div className="bottom">
      Clicky Game!
      <img src={props.image} className="App-logo" alt="logo" />
    </div>
  </footer>
);

export default Footer;