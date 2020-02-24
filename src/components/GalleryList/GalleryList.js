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
            {this.props.galleryArray.map(image => (

              //Generate gallery item component and display items information
              <GalleryItem
                image={image}
                key={image.id}
                
                //"likes" is your object key and this.props.likes is passing the likes function in from App.js
                likes={this.props.likes}
              />
            ))}
          </div>
      
    );

  }
}

export default GalleryList;
