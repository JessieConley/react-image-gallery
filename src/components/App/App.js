import React, { Component } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

import './App.css';


class App extends Component {
  state = {
    galleryArray: []
  };

  componentDidMount = () => {
    console.log("hello from start");
    this.getAllImages();
  };

  likes = (event) => {
    console.log("Button clicked.", event.target.name);
       axios.put(`gallery/like/${event.target.name}`)
         .then(response => {

           this.getAllImages(response.data);
         })
         .catch(error => {
           alert(`Couldn't update like count. Try again later`);
           console.log("Error updating inventory count", error);
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
        <GalleryList galleryArray={this.state.galleryArray} likes={this.likes} />
      </div>
    );
  }
}

export default App;
