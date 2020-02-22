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

  putGalleryItems = () => {
    console.log('hello from put');
    axios.put('/gallery')
  }

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
        <GalleryList galleryArray = {this.state.galleryArray} />
        
      </div>
    );
  }
}

export default App;
