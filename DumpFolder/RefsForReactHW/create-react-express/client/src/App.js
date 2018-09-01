import React, { Component } from "react";
// import {Container, Columns} from "./components/Layout";
// import Nav from "./components/Nav";
// import ImageCard from "./components/ImageCard";
// import Hero from "./components/Hero";
// import Footer from "./components/Footer";
// // import JackTest from "./components/Images/jackskellington.jpeg"
// // import images from "./images.json"
// import images from "./imagecard.json";
// import logo from "./logo.svg";
import "./App.css";
import Game from "./components/Game";

class App extends Component {

  render() {
    return (
      <Game />
    );
  }
}



  // render() {
  //   return (
  //     <div>
  //     <Nav />
  //       <Hero />
  //         <Container>
  //           <div className="columns">
  //           <Columns size="is-one-quarter">
  //               <ImageCard
  //                 id = {images[0].id}
  //                 name = {images[0].name}
  //                 image = {images[0].image}
  //               />
  //               <ImageCard
  //                 id = {images[1].id}
  //                 name = {images[1].name}
  //                 image = {images[1].image}
  //               />
  //               <ImageCard
  //                 id = {images[2].id}
  //                 name = {images[2].name}
  //                 image = {images[2].image}
  //               />
  //               <ImageCard
  //                 id = {images[3].id}
  //                 name = {images[3].name}
  //                 image = {images[3].image}
  //               />
  //             </Columns>
  //             <Columns size="is-one-quarter">
  //               <ImageCard
  //                 id = {images[4].id}
  //                 name = {images[4].name}
  //                 image = {images[4].image}
  //               />
  //               <ImageCard
  //                 id = {images[5].id}
  //                 name = {images[5].name}
  //                 image = {images[5].image}
  //               />
  //               <ImageCard
  //                 id = {images[6].id}
  //                 name = {images[6].name}
  //                 image = {images[6].image}
  //               />
  //               <ImageCard
  //                 id = {images[7].id}
  //                 name = {images[7].name}
  //                 image = {images[7].image}
  //               />
  //             </Columns>
  //             <Columns size="is-one-quarter">
  //               <ImageCard
  //                 id = {images[8].id}
  //                 name = {images[8].name}
  //                 image = {images[8].image}
  //               />
  //               <ImageCard
  //                 id = {images[9].id}
  //                 name = {images[9].name}
  //                 image = {images[9].image}
  //               />
  //               <ImageCard
  //                 id = {images[10].id}
  //                 name = {images[10].name}
  //                 image = {images[10].image}
  //               />
  //               <ImageCard
  //                 id = {images[11].id}
  //                 name = {images[11].name}
  //                 image = {images[11].image}
  //               />
  //             </Columns>
  //             <Columns size="is-one-quarter">
  //               <ImageCard
  //                 id = {images[12].id}
  //                 name = {images[12].name}
  //                 image = {images[12].image}
  //               />
  //               <ImageCard
  //                 id = {images[13].id}
  //                 name = {images[13].name}
  //                 image = {images[13].image}
  //               />
  //               <ImageCard
  //                 id = {images[14].id}
  //                 name = {images[14].name}
  //                 image = {images[14].image}
  //               />
  //               <ImageCard
  //                 id = {images[15].id}
  //                 name = {images[15].name}
  //                 image = {images[15].image}
  //               />
  //             </Columns>
  //           </div>
  //         </Container>
  //     {/* <div className="App">
  //       <div className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h2>Welcome to React</h2>
  //       </div>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div> */}
  //     <Footer image={logo}/>
  //     </div>
  //   );
  // }
// }

export default App;
