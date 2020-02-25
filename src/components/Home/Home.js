import React, { Component } from "react";


class Home extends Component {
  handleClick = () => {
    alert("You are headed to another page");
    this.props.history.push("/about");
    ///CHANGE LOCATION???
  };

  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.handleClick} />
      </div>
    );
  }
}

export default Home;
