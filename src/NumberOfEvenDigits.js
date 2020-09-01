import React, { Component } from "react";
class NumberOfEvenDigits extends Component {
  state = {
    number: "",
    isButtonPressed: false,
    isButtonPressed2: false,
    showRainbow: false,
  };
  handleChange = (event) => {
    this.setState({ number: event.target.value });
    // console.log("hello", "loser", event.target.value);
  };
  toggleButtonPressed = () => {
    this.setState({ isButtonPressed: !this.state.isButtonPressed });
  };
  toggleButtonPressed2 = () => {
    this.setState({ isButtonPressed2: !this.state.isButtonPressed2 });
  };
  evenDigitsCalculation = () => {
    let numInput = Number(this.state.number);
    let evenDigits = 0;
    while (numInput !== 0) {
      const digit = numInput % 10;
      if (digit % 2 === 0) {
        evenDigits++;
      }
      numInput = Math.floor(numInput / 10);
    }
    console.log("working");
    return "Number of even digits: " + evenDigits;
  };
  renderRainbow = () => {
    return <img src="rainbow.gif" alt="WoOoOwOWoWWW" />;
  };
  toggleRainbow = () => {
    this.setState({ showRainbow: !this.state.showRainbow });
  };
  render = () => {
    console.log("rerendering Parent");

    return (
      <>
        <div>{this.state.isButtonPressed ? this.state.number : null}</div>
        <div>
          {this.state.isButtonPressed2 ? this.evenDigitsCalculation() : null}
        </div>

        <div>
          <input value={this.state.number} onChange={this.handleChange} />
        </div>
        <div>
          <button onClick={this.toggleButtonPressed}>
            {this.state.isButtonPressed ? "Hide Number" : "Display Number"}
          </button>
          <button onClick={this.toggleButtonPressed2}>
            Number Of Even Digits
          </button>
          <button onClick={this.toggleRainbow}>Show me a rainbow</button>
          {this.state.showRainbow ? this.renderRainbow() : null}
        </div>
      </>
    );
  };
}

export default NumberOfEvenDigits;
