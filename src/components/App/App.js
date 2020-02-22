import React, { Component } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

import './App.css';


class App extends Component {
  state = {
    galleryArray: [],
   
  };

  componentDidMount = () => {
    console.log("hello from start");
    this.getAllImages();
  };

  // increaseCount = () => {
  //   console.log(this.state.count);
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // };

  likes = (id) => {
    console.log("Button clicked.", id);
    axios
      .put(`gallery/like/${id}`)
      .then(response => {
        this.getAllImages();
      })
      .catch(error => {
        alert(`Couldn't update likes count. Try again later`);
        console.log("Error updating likes count", error);
      });
  };

  getAllImages = () => {
    console.log("get all images");
    axios({
      method: "GET",
      url: "/gallery"
    })
      .then(response => {
        console.log(response.data);
        this.setState({
          galleryArray: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <GalleryList
          galleryArray={this.state.galleryArray}
          likes={this.likes}
         
        />
      </div>
    );
  }
}

export default App;
