import React, { Component } from "react";

class SimpleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      toggle: true,
    };
  }


  handleCount = () => {
    if (this.state.toggle) {
      this.setState(
        (prevState) => ({
          count: prevState.count + 1,
        }));
    }
  };

  handleToggle = () => {
    this.setState(
      (prevState) => ({
        toggle: !prevState.toggle,
      }),
      () => {
        console.log("Toggle :- ", this.state.toggle);
      }
    );
  };

  render() {
    console.log("This is Simple Component")
    return (
      <>
        <h1>SimpleComponent</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleCount}>Count</button>
        <button onClick={this.handleToggle}>Toggle</button>
      </>
    );
  }
}

export default SimpleComponent;
