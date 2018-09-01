import React, {Component} from "react";
import './Landing.css';
import './Animate.css';
import {Link} from "react-router-dom";
import LandingBtns from './LandingBtns';


class Landing extends Component {


  componentDidMount() {
    var btnTrigger = localStorage.getItem('id_token');
    return btnTrigger;
  }


    {/* <Link to={btnTrigger ? '/home' : '/signup'} >
      <button type="button" className={`btn btn-primary  homeBtn ${btnTrigger ? 'homeBtn' : 'signUpBtn'}`}>{btnTrigger ? 'Home' : 'Signup'}</button>
    </Link>
    <Link to={btnTrigger ? '/logout' : '/login'} >
      <button type="button" className={`btn btn-primary  homeBtn ${btnTrigger ? 'logoutBtn' : 'loginBtn'}`}>{btnTrigger ? 'Logout' : 'Login'}</button>
    </Link>


// const Landing = props => {
  // if(props.tokenID){
  //   return(
  // <div>
  //   <header className="landingHeader">
  //     <div className="container">
  //     <LandingBtns tokenID={props.tokenID}/>
  //     <Link to="/home">
  //       <button type="button" className="btn btn-primary homeBtn">Home</button>
  //     </Link>
  //     <Link to="/logout">
  //       <button type="button" className="btn btn-danger logoutBtn">Logout</button>
  //     </Link>

  //       <h1 className="title">JOURNEY ON</h1>
  //       <div className="row">
  //         <div className="col s8">
  //           <p className="paragraph">"Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine"</p>
  //           - Roy T. Bennett -
  //     </div>
  //         <div className="col s4">
  //           <div>
  //             <img className="picture" src="https://via.placeholder.com/414x396" alt="placeholder" />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
  //       <polygon fill="white" points="0,100 100,0 100,100" />
  //     </svg>
  //   </header>

  //   <section>
  //     <div className="container">
  //       <div className="row">
  //         <div className="col s6">
  //           <a href="https://placeholder.com"><img src="https://via.placeholder.com/414x396" alt="placeholder"/></a>
  //         </div>
  //         <div className="col s6 get started">
  //           <h1 className="get started">Get Started</h1>
  //           Creating your goals and building your journey.
  //     <ul>
  //             <li>Brainstorming</li>
  //             <li>Mapping out your Goal</li>
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="row">
  //         <div className="col s6 fresh start">
  //           <h1 className="fresh start">Fresh Start</h1>
  //           The hub for tracking your journey and process until completed.
  //     <ul>
  //             <li>Tracking your Progress Bar</li>
  //             <li>Weekly Calendar for tracking success</li>
  //           </ul>
  //         </div>
  //         <div className="col s6">
  //           <a href="https://placeholder.com">
  //           <img src="https://via.placeholder.com/414x396" alt="placeholder"/></a>
  //         </div>
  //       </div>
  //       <div className="row">
  //         <div className="col s6">
  //           <a href="https://placeholder.com">
  //           <img src="https://via.placeholder.com/414x396" alt="placeholder"/></a>
  //         </div>
  //         <div className="col s6 Breakdown">
  //           <h1 className="Breakdown">Breakdown</h1>
  //           Greater picture for tracking your journey.
  //     <ul>
  //             <li>Daily Motivational Quotes</li>
  //             <li>Progress Bar</li>
  //             <li>Go Getter Club</li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //     <footer>
  //       <div className="foot">
  //         <h3>Footer</h3>
  //       </div>
  //     </footer>
  //   </section>
  // </div>
  //   )
  // }else {
render() {
  return(
    <div>
    <header className="landingHeader">
      <div className="container">
      <div className="h1Header">
      {/* <LandingBtns tokenID={this.btnTrigger}>
  
      </LandingBtns> */}
      <Link to="/signup">
        <button type="button" className="btn btn-primary signUpBtn">Signup</button>
      </Link>
      <Link to="/login">
        <button type="button" className="btn btn-danger loginBtn">Login</button>
      </Link>
      <h1 className="title animated fadeInLeftBig">JOURNEY ON</h1>
      </div>
        <div className="row">
          <div className="col s8">
            <p className="paragraph animated fadeInUp">"Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine"</p> 
            <p className="author">- Roy T. Bennett -</p>
      </div>
          <div className="col s4">
            <div>
              <img className="picture" src="https://www.bestbeachimage.info/wp-content/uploads/2018/03/mac-wallpaper-tumblr-beach-8362.jpeg" alt="placeholder" />
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="white" points="0,100 100,0 100,100" />
      </svg>

    </header>

    <section>
      <div className="container">
        <div className="row rows animated fadeInLeft">
          <div className="col s6">
            <a href="https://placeholder.com"><img src="http://11web.com/wp-content/uploads/creativefeature-image-1024x683-450x300.jpg" alt="placeholder"/></a>
          </div>
          <div className="col s6 getStarted">
            <h1 className="get start">Get Started</h1>
            Creating your goals and building your journey.
      <ul>
              <li>Brainstorming</li>
              <li>Mapping out your Goal</li>
            </ul>
          </div>
        </div>
        <div className="row middleRow animated fadeInRight">
          <div className="col s6 freshStart">
            <h1 className="freshStart">Fresh Start</h1>
            The hub for tracking your journey and process until completed.
      <ul>
              <li>Tracking your Progress Bar</li>
              <li>Weekly Calendar for tracking success</li>
            </ul>
          </div>
          <div className="col s6">
            <a href="https://placeholder.com">
            <img src="https://4.bp.blogspot.com/-Y9H0bKwreSo/VXfG6OOVNUI/AAAAAAAAQ_4/ZDhHwuB8W5c/s1600/monthly%2Bcalendar%2Bpreview%2Bstripes_700.png" alt="placeholder"/></a>
          </div>
        </div>
        <div className="row animated fadeInLeft">
          <div className="col s6">
            <a href="https://placeholder.com">
            <img src="https://mk0ryrobg0ysk5t06n.kinstacdn.com/wp-content/uploads/2017/09/Hustle-Quotes-Motivation_Be-not-afraid-of-going.jpg" alt="placeholder"/></a>
          </div>
          <div className="col s6 Breakdown">
            <h1 className="Breakdown">Breakdown</h1>
            Greater picture for tracking your journey.
      <ul>
              <li>Daily Motivational Quotes</li>
              <li>Progress Bar</li>
              <li>Go Getter Club</li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <div className="foot">
          <h3>Footer</h3>
        </div>
      </footer>
    </section>
  </div>
  )
}
};

export default Landing;