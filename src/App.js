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
function Board(xIsNext, squares, onPlay) {
  function handleClick(i){
    // verify is square has 'X' or 'O'
    if (squares[i] || calculateWinner(squares)){
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
  const winner = calculateWinner(squares);
  let status; 
  if (winner) {
    status = `Winner : ${winner}`;
  }
  else {
    status = `Next Player: ${ xIsNext ? "X" : "O" }`; 
  }

  return (
    <>
      <div className="status">{ status }</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]}  onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]}  onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]}  onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]}  onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]}  onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]}  onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}  


// top-level component
export default function Game(){
  const [xIsNext, setXIsNext] = useState(null);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];  // access latest array element for updated States of Square Components

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);    
  }

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{ /* TO DO - Moves History */ }</ol>
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
      return squares[a];
    }
  }
  return null;
}