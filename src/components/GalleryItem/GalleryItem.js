//Set up imports
import React, { Component } from 'react';



class GalleryItem extends Component {
  //set new state object with boolean value to be used in handleclick function
  state = {
    isShowingText: false,
    
  };

  //set up toggle click event using conditional to show image and image descrtiption upon click/event
  handleClick = () => {
    if (this.state.isShowingText === false) {
      this.setState({ isShowingText: true });
    } else {
      this.setState({ isShowingText: false });
    }
  };


  render() {
    // console.log(this.props.image);
    //Use conditional rendering to show what to display on click of image
    const isShowingText = this.state.isShowingText;
    let output = '';
    if (isShowingText) {
      output = <p>{this.props.image.description}</p>;
    } else {
      output = <img src={this.props.image.path} alt=""></img>;
    }
    
    return (
      <div className="GalleryItems">
        {/* Make image a button to toggle image with the description on click of image. Good practice because
        it shows screenreader this is a button and clickable */}
        <button name={this.props.image.id} onClick={this.handleClick}>
          {output}
        </button>

        {/* Set up button for the Likes button client,
        start by including anonymous function to prevent fire off the function upon page load in an infinite loop (closure funtion)
        call on "likes" function from App.js file and pass in the image id
        */}
        <button onClick={() => this.props.likes(this.props.image.id)}>Likes</button>

        {/* Display the value of likes from object */}

        <p>{this.props.image.likes} People like this image!</p>

      </div>
    );
  }
} 




export default GalleryItem;