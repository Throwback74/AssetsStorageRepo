import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <FriendCard
      name={friends[0].name}
      image={friends[0].image}
      occupation={friends[0].occupation}
      location={friends[0].location}
    />
    <FriendCard
      name={friends[1].name}
      image={friends[1].image}
      occupation={friends[1].occupation}
      location={friends[1].location}
    />
    <FriendCard
      name={friends[2].name}
      image={friends[2].image}
      occupation={friends[2].occupation}
      location={friends[2].location}
    />
  </Wrapper>
);

export default App;

      //   this.setState({
      //     animate: true
      //   });
      // }
      // this.setContainerClass(this.state.animate)
      // if(this.state.clickedImage.includes(id)) {
      //   this.setState({
      //     score: 0,
      //     clickedImage: [],
      //     animate: true,
      //     classes: this.setContainerClass(this.state.animate)
      //   });
        // this.setContainerClass(this.state.animate);

{/* <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.state.images.map(image => (
          <ImageCard
            key={image.id}
            id={image.id}
            name={image.name}
            image={image.image}
            getMatch={this.getMatch}
          />
        { ))} /
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        // </div>*/}


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


              // className={"column " +{size}}