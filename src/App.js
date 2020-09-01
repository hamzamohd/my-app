import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./style.css";
// import { Game, Square, Board } from "./Game";
// import { Game2 } from "./Game2";
import NumberOfEvenDigits from "./NumberOfEvenDigits";

class App extends React.Component {
  state = {
    checked: true,
  };
  render() {
    console.log("rendering again");
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Wooo
        </p> */}
          <NumberOfEvenDigits />
          {/* <Square checked={this.state.checked} cross={false} /> */}
          {/* <button
            onClick={() => this.setState({ checked: !this.state.checked })}
          >
            Click Me
          </button> */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
