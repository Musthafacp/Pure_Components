import React, { PureComponent } from "react";

class PureCounterComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      toggle: true,
    };
  }


  handlePureCounter = () => {
    if (this.state.toggle) {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }))
    }
  };

  handlePureToggle = () => {
    console.log("Toggle :- ", this.state.toggle);
    this.setState((prevState) => ({
      toggle: !prevState.toggle
    }));
  };

  render() {
    console.log("This is Pure Component")
    return (
      <>
        <h1>PureComponent</h1>

        <h2>{this.state.count}</h2>

        <button onClick={this.handlePureCounter}>Count</button>
        <button onClick={this.handlePureToggle}>Toggle</button>
      </>
    );
  }
}

export default PureCounterComponent;
