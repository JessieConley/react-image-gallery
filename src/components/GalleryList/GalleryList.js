import React, { Component } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import "./GalleryList.css";

class GalleryList extends Component {
  render() {
    return (
      <div className="galleryList">
       
            {this.props.galleryArray.map(image => (
              <GalleryItem
                image={image}
                key={image.id}
                // id={image.id}
                // counter={image.likes}
                likes={this.props.likes}
              />
            ))}
          </div>
      
    );

  }
}

export default GalleryList;
