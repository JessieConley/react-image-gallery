import React, { Component } from 'react';

// import GalleryList from "../GalleryItem/GalleryItem";

class GalleryItem extends Component {
  state = {
    isShowingText: false
  };
  handleClick = (event) => {
    if (this.state.isShowingText === false) {
      this.setState({ isShowingText: true });
    } else {
      this.setState({ isShowingText: false });
    }
  };

  render() {
    // console.log(this.props.image);
    const isShowingText = this.state.isShowingText;
    let output = '';
    if (isShowingText) {
      output = <p>{this.props.image.description}</p>;
    } else {
      output = <img src={this.props.image.path} alt="" width="100"></img>;
    }
    
    return (
      <div className="GalleryItems">
        {/* <img src={this.props.image.path} alt="" width="100"></img> */}
        <button name={this.props.image.id} onClick={this.handleClick}>{output}
          {/* Like */}
        </button>
        <button name={this.props.image.id} onClick={this.props.likes}>Likes</button>
      </div>
    );
  }
} 




export default GalleryItem;