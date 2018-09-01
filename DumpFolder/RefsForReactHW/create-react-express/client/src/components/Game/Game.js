import React, { Component } from "react";
import images from "../../imagecard.json";
// import images from "../../images.json"
// eslint-disable-next-line
import {Container, Columns} from "../Layout";
import Nav from "../Nav";
import ImageCard from "../ImageCard";
import Hero from "../Hero";
import Footer from "../Footer";
import logo from "../../logo.svg";

class Game extends Component {

  state = {
    images: images,
    score: 0,
    topScore: 0,
    matches: 0,
    guesses: 0,
    matchedImage: 6,
    clickedImage: [],
    animate: false
  }

//   function getRandomInt (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

shuffle = (array) => {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {
  // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
  //     // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

// function shuffle(array) {
//   var m = array.length, t, i;

//   // While there remain elements to shuffle…
//   while (m) {

//     // Pick a remaining element…
//     i = Math.floor(Math.random() * m--);

//     // And swap it with the current element.
//     t = array[m];
//     array[m] = array[i];
//     array[i] = t;
//   }

//   return array;
// }

    displayArr = (images) => {
      var displayArray = [];
      displayArray = images.slice(0, 12);
      // var first = images[14];
      // displayArray = [first, ...images];
      console.log(displayArray);
      return displayArray;
    }

    componentDidMount() {
      this.displayArr(images);
      var displayArray = this.displayArr(images);
      console.log("success");
      this.setState({
        images: displayArray
      });
    }

//Attempting to set up a shake animation upon losing, but could not get keyframes to work properly, currently being used to fired alert to notify of loss
    setContainerClass = (animate) => {
      if(animate) {
        var containerClass = "animated";
        alert("You Lose...Try Again!");
      }else {
        containerClass = "staticClass";
      }
      return containerClass;
    }
    
    // const userPrivileges = ['user', 'user', 'user', 'admin'];
    // const containsAdmin = userPrivileges.some( element => element === 'admin');

    getMatch = (id) => {
      this.shuffle(images);
      this.displayArr(images);
      var displayArray = this.displayArr(images);
      this.setState({
        images: displayArray,
        animate: false
        // clickedImage: this.state.clickedImage.push(id)
      });
      console.log(typeof(this.state.clickedImage));
      if(this.state.clickedImage.includes(id)) {
        this.setState({
          score: 0,
          clickedImage: [],
          animate: true
        });
        this.setContainerClass(this.state.animate);
      }else {
        if(this.state.topScore <= this.state.score){
          this.setState({
            score: this.state.score + 1,
            topScore: this.state.topScore + 1,
            clickedImage:  [...this.state.clickedImage, id]
          });
        }else {
          this.setState({
            score: this.state.score + 1,
            clickedImage: [...this.state.clickedImage, id]
          });
        }
        console.log(this.state.clickedImage);
        this.setContainerClass(this.state.animate);
      }
    }

    //   if (id === this.state.matchedImage) {
    //     let randID = Math.floor(Math.random() * 12) + 1;
    //     this.setState({
    //       matches: this.state.matches + 1,
    //       score: 0,
    //       matchedImage: randID
    //     });
    //   } else {
    //       this.setState({

    //         score: this.state.score + 1,
    //         topScore: this.state.topScore + 1,
    //         guesses: this.state.guesses +1
    //       });
    //   }
    // }

  // setLayout = ({id, min, max}) => {
  //   let position = Math.floor(Math.random() * (max - min + 1)) + min;
  //   if(position < 4) {
  //     this.setState
  //   }
  // }


  render() {
    return (
      <div>
      <Nav score= {this.state.score} topScore = {this.state.topScore} matches = {this.state.matches}
      guesses = {this.state.guesses} />
        <Hero />
          <Container class={this.containerClass}>
            <div className="columns is-multiline">
              {this.state.images.map(image => (

                <ImageCard
                  key={image.id}
                  id={image.id}
                  name={image.name}
                  image={image.image}
                  getMatch={this.getMatch}
                />
              ))}
            {/* <Columns size="is-one-quarter">
                <ImageCard
                  key = {images[0].id}
                  id = {images[0].id}
                  name = {images[0].name}
                  image = {images[0].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[1].id}
                  id = {images[1].id}
                  name = {images[1].name}
                  image = {images[1].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[2].id}
                  id = {images[2].id}
                  name = {images[2].name}
                  image = {images[2].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[3].id}
                  id = {images[3].id}
                  name = {images[3].name}
                  image = {images[3].image}
                  getMatch = {this.getMatch}
                />
              </Columns>
              <Columns size="is-one-quarter">
                <ImageCard
                  key = {images[4].id}
                  id = {images[4].id}
                  name = {images[4].name}
                  image = {images[4].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[5].id}
                  id = {images[5].id}
                  name = {images[5].name}
                  image = {images[5].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[6].id}
                  id = {images[6].id}
                  name = {images[6].name}
                  image = {images[6].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[7].id}
                  id = {images[7].id}
                  name = {images[7].name}
                  image = {images[7].image}
                  getMatch = {this.getMatch}
                />
              </Columns>
              <Columns size="is-one-quarter">
                <ImageCard
                  key = {images[8].id}
                  id = {images[8].id}
                  name = {images[8].name}
                  image = {images[8].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[9].id}
                  id = {images[9].id}
                  name = {images[9].name}
                  image = {images[9].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[10].id}
                  id = {images[10].id}
                  name = {images[10].name}
                  image = {images[10].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[11].id}
                  id = {images[11].id}
                  name = {images[11].name}
                  image = {images[11].image}
                  getMatch = {this.getMatch}
                />
              </Columns>
              <Columns size="is-one-quarter">
                <ImageCard
                  key = {images[12].id}
                  id = {images[12].id}
                  name = {images[12].name}
                  image = {images[12].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[13].id}
                  id = {images[13].id}
                  name = {images[13].name}
                  image = {images[13].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[14].id}
                  id = {images[14].id}
                  name = {images[14].name}
                  image = {images[14].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[15].id}
                  id = {images[15].id}
                  name = {images[15].name}
                  image = {images[15].image}
                  getMatch = {this.getMatch}
                />
              </Columns> */}
            </div>
          </Container>
      
      <Footer image={logo}/>
      </div>
    );
}
}


export default Game;