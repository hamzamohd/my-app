import React from "react";

// export class Square extends React.Component {
//   render() {
//     return (
//       <button className="square" onClick={this.props.handleCheck}>
//         {this.props.checked ? (this.props.cross ? "X" : "0") : ""}
//       </button>
//     );
//   }
// }

// export class Board extends React.Component {
//   state = {
//     nextCross: true,
//     checked: Array(9).fill(0),
//   };

//   renderSquare(i) {
//     return (
//       <Square
//         checked={this.state.checked[i]}
//         cross={this.state.nextCross}
//         handleCheck={() => {
//           const newChecked = [...this.state.checked];
//           newChecked[i] = 1;
//           this.setState({
//             checked: newChecked,
//             nextCross: !this.state.nextCross,
//           });
//         }}
//       />
//     );
//   }

//   render() {
//     const status = "Next player: X";

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// export class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

export function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  }

  //   renderSquare(i) {
  //     return (
  //       <Square
  //         value={this.state.squares[i]}
  //         onClick={() => this.handleClick(i)}
  //       />
  //     );
  //   }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner:" + winner;
    } else {
      status = "Next Player:" + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <>
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {/* {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)} */}
            <Square
              value={this.state.squares[0]}
              onClick={() => this.handleClick(0)}
            />
            <Square
              value={this.state.squares[1]}
              onClick={() => this.handleClick(1)}
            />
            <Square
              value={this.state.squares[2]}
              onClick={() => this.handleClick(2)}
            />
          </div>
          <div className="board-row">
            <Square
              value={this.state.squares[3]}
              onClick={() => this.handleClick(3)}
            />{" "}
            <Square
              value={this.state.squares[4]}
              onClick={() => this.handleClick(4)}
            />{" "}
            <Square
              value={this.state.squares[5]}
              onClick={() => this.handleClick(5)}
            />{" "}
          </div>
          <div className="board-row">
            <Square
              value={this.state.squares[6]}
              onClick={() => this.handleClick(6)}
            />{" "}
            <Square
              value={this.state.squares[7]}
              onClick={() => this.handleClick(7)}
            />{" "}
            <Square
              value={this.state.squares[8]}
              onClick={() => this.handleClick(8)}
            />{" "}
          </div>
        </div>
        <div>
          Current Squares: <pre>{JSON.stringify(this.state.squares)}</pre>
          Current XIsNext<pre>{JSON.stringify(this.state.xIsNext)}</pre>
        </div>
      </>
    );
  }
}

export class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
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
