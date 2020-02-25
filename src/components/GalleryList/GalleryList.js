//Set up imports
import React, { Component } from "react";
//Source in GalleryItems component
import GalleryItem from "../GalleryItem/GalleryItem";
//Added stylesheet for the grid styling
import "./GalleryList.css";

class GalleryList extends Component {
  render() {
    return (
      <div className="galleryList">
       {/* Loop through array */}
            {this.props.galleryArray.map(taco => (
              //Generate gallery item component and display items information on the Dom
              <GalleryItem  
              //pass whole obejct in with image={image}
              image={taco}  
              key={taco.id}
                
                //"likes" is your object key and this.props.likes is passing the likes function in from App.js
                likes={this.props.likes}
              />
            ))}
          </div>
      
    );

  }
}

export default GalleryList;
