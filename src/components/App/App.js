//Set up imports
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Home from "../Home/Home.js";
import About from "../About/About.js";

import axios from 'axios';
import "./App.css";
import GalleryList from '../GalleryList/GalleryList';




class App extends Component {
  state = {
    galleryArray: []
  };

  //Page load function
  componentDidMount = () => {
    console.log("hello from start");
    this.getAllImages();
  };

  //When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
  updateLikes = id => {
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

  //Use `axios` to retrieve (`GET`) data from to `/gallery` and store it in `App.js`.
  getAllImages = () => {
    console.log("get all images");
    axios({
      method: "GET",
      url: "/gallery"
    })
      .then(response => {
        console.log(response.data);
        this.setState({
          //response is gallery array:
          galleryArray: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  

  render() {
    return (
      <Router>
        <div className="AppHeader">
          <ul>
            
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
           
          </ul>
        </div>

        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Gallery of my life</h1>
          </header>
          <br />

          <div className="container">
            {/* Set props and compile GalleryList */}
            <GalleryList
              galleryArray={this.state.galleryArray}
              // Call on likes function with object key
              likes={this.updateLikes}
            />
          </div>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    );
  }
}

export default App;
