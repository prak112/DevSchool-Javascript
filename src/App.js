import React from "react";
import { useState } from "react";

// gameboard square
function Square({ value, onSquareClick }) {

  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {value} 
      </button>
    </>
  );
}

// Gameboard
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i){
    // verify is square has 'X' or 'O'
    if (calculateWinner(squares) || squares[i]){
      return;   // early return to prevent changes on multiple clicks
    }
    const nextSquares = squares.slice();  // copy squares array for immutability, i.e., to prevent direct changes without using setState method  
    if (xIsNext) {
      nextSquares[i] = 'X';
    }
    else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  // display player status
  const [winner, winCombo] = calculateWinner(squares);  //TODO: useState to setColor for winCombo
  let status; 
  if (winner) {
    status = `Winner : ${winner}`;
  }
  else {
    status = `Next Player: ${ xIsNext ? "X" : "O" }`; 
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {squares.slice(0, 3).map((square, index) => (
          <Square key={index} value={square} onSquareClick={() => handleClick(index)} />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(3, 6).map((square, index) => (
          <Square key={index + 3} value={square} onSquareClick={() => handleClick(index + 3)} />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(6).map((square, index) => (
          <Square key={index + 6} value={square} onSquareClick={() => handleClick(index + 6)} />
        ))}
      </div>
    </>
  );
}

// top-level component
export default function Game(){
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];  // access latest array element with the updated State of Square Component

  function handlePlay(nextSquares) {
    // include history until currentMove
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];  // '...history' enumerates all the items in the 'history' and includes 'nextSquares'
    setHistory(nextHistory);  
    setCurrentMove(nextHistory.length - 1);
  }

  // reassign null state to Square component
  function jumpTo(nextMove){
    setCurrentMove(nextMove);
  }

  // generate undo move element by using moves history
  const moves = history.map((squares, move) => { // 'squares' - array element, 'move' - array index
    let description;
    if(move > 0) { // verify if sub-array element is null
      description = `Go To Move #${move}`;    
    }
    else {
      description = 'Start Game';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{ description }</button>
      </li>
    ); 
  });

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ul>{moves}</ul>
        </div>
      </div>
    </>
  );
}


// logic to identify winning combination
function calculateWinner(squares) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]; 
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], [a, b, c]];
    }
  }
  return null;
}
