import React from "react";

export class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

export class Board extends React.Component {
  state = {
    squares: [null, null, null, null, null, null, null, null, null],
    xIsNext: true,
  };

  handleClick0 = () => {
    /* Making a copy of this.state.squares and saving it into a local squares variable
        so we can change it and set the new this.state.squares. This is needed as we should never
        mutate state directly.
        This is necessary for objects and arrays.
    */

    const squares = this.state.squares.slice();
    if (calculateWinner(squares) !== null || squares[0] !== null) {
      return;
    }
    squares[0] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  };

  handleClick1 = () => {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) !== null || squares[1] !== null) {
      return;
    }
    squares[1] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  };
  handleClick2 = () => {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) !== null || squares[2] !== null) {
      return;
    }
    squares[2] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  };
  handleClick3 = () => {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) !== null || squares[3] !== null) {
      return;
    }
    squares[3] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  };
  handleClick4 = () => {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) !== null || squares[4] !== null) {
      return;
    }
    squares[4] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  };
  handleClick5 = () => {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) !== null || squares[5] !== null) {
      return;
    }
    squares[5] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  };
  handleClick6 = () => {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) !== null || squares[6] !== null) {
      return;
    }
    squares[6] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  };
  handleClick7 = () => {
    const squares = this.state.squares.slice();

    if (calculateWinner(squares) !== null || squares[7] !== null) {
      return;
    }
    squares[7] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  };

  handleClick8 = () => {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) !== null || squares[8] !== null) {
      return;
    }
    squares[8] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  };

  getNumberOfFilledSquares = () => {
    let numFilled = 0;
    for (let i = 0; i < this.state.squares.length; i++) {
      if (this.state.squares[i] !== null) {
        numFilled = numFilled + 1;
      }
    }
    return numFilled;
  };

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner !== null) {
      status = "Winner:" + winner;
      // } else if (this.getNumberOfFilledSquares() === 9) {
      //   status = "Game Over";
    } else {
      status = "Next Player:" + (this.state.xIsNext ? "X" : "O");
    }
    let filled = true;
    for (let i = 0; i < this.state.squares.length; i++) {
      if (this.state.squares[i] === null) {
        filled = false;
      }
    }
    console.log(filled);
    if (filled === true && winner === null) {
      status = "Game Over";
    }
    console.log(filled);
    return (
      <div>
        <div style={{ color: this.state.xIsNext ? "white" : "red" }}>
          {this.getNumberOfFilledSquares()}/9
        </div>
        <div>
          <div
            className="status"
            style={{ color: this.state.xIsNext ? "red" : "white" }}
          >
            {status}
          </div>
          <div className="board-row">
            <Square
              value={this.state.squares[0]}
              onClick={() => this.handleClick0()}
            />
            <Square
              value={this.state.squares[1]}
              onClick={() => this.handleClick1()}
            />
            <Square
              value={this.state.squares[2]}
              onClick={() => this.handleClick2()}
            />
          </div>
          <div className="board-row">
            <Square
              value={this.state.squares[3]}
              onClick={() => this.handleClick3()}
            />{" "}
            <Square
              value={this.state.squares[4]}
              onClick={() => this.handleClick4()}
            />{" "}
            <Square
              value={this.state.squares[5]}
              onClick={() => this.handleClick5()}
            />{" "}
          </div>
          <div className="board-row">
            <Square
              value={this.state.squares[6]}
              onClick={() => this.handleClick6()}
            />{" "}
            <Square
              value={this.state.squares[7]}
              onClick={() => this.handleClick7()}
            />{" "}
            <Square
              value={this.state.squares[8]}
              onClick={() => this.handleClick8()}
            />{" "}
          </div>
        </div>
        <div>
          Current Squares: <pre>{JSON.stringify(this.state.squares)}</pre>
          Current XIsNext<pre>{JSON.stringify(this.state.xIsNext)}</pre>
        </div>
      </div>
    );
  }
}

export class Game2 extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}
export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================
