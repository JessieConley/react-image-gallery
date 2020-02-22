import React, { Component } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

class GalleryList extends Component {
  render() {
    return (
      <div className="GalleryList">
        {this.props.galleryArray.map(image => (
          <GalleryItem image={image} key={image.id} likes={this.props.likes} />
        ))}
      </div>
    );

  }
}

export default GalleryList;
