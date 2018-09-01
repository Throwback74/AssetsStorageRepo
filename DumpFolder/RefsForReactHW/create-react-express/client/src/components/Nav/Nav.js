import React from "react";
import "./Nav.css";

const Nav = props => (

  <nav className="navbar level is-mobile is-fixed-top">
    <div className="level-item has-text-centered">
      <div>
        {/* <p className="heading">Tweets</p> */}
        <p className="title">Clicky Game</p>
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        <p className="heading headInstructions">Click an image to begin!</p>
        {/* <p className="title">123</p> */}
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        <p className="title">Score: {props.score} | Top Score: {props.topScore}</p>
        {/* <p className="title">Matches: {props.matches} | Guesses: {props.guesses}</p> */}
      </div>
    </div>
    {/* <div className="level-item has-text-centered">
      <div>
        <p className="heading">Likes</p>
        <p className="title">789</p>
      </div>
    </div> */}
  </nav>
);

export default Nav;
