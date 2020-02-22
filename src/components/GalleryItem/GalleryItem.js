import React, { Component } from 'react';

// import GalleryList from "../GalleryItem/GalleryItem";

class GalleryItem extends Component {
  state = {
    isShowingText: false,
    
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
        <button name={this.props.image.id} onClick={this.handleClick}>
          {output}
        </button>
        <p>{this.props.counter}</p>
        <button onClick={() => this.props.likes(this.props.image.id)}>Likes</button>
      </div>
    );
  }
} 




export default GalleryItem;