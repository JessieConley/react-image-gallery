import React, { Component } from 'react';


class GalleryItem extends Component {

    render() {
        console.log(this.props.image);
        return (
          <div className="GalleryItems">
           
              <img src={this.props.image.path} alt="" width="100"></img>
          
          </div>
        );
    }
}



export default GalleryItem;