import React, { Component } from "react";

class GalleryList extends Component {
  render() {
    return (
      <div className="GalleryList">
        <ul>
         {this.props.galleryArray.map(image => (
                <li key={image.id}>
                  <img src={image.path} alt="" width="100"></img>
                  </li>
               
         ))}
        </ul>
      </div>
    );

  }
}

export default GalleryList;
