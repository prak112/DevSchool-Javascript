import React from "react";
import { useState } from "react";

// gameboard square
function Square() {
  const [value, setValue] = useState(null);

  function handleClick(){
    setValue('X');  /* updates 'value' to X, while 'setValue' remains null */
  }
  return (
    <>
      <button 
        className="square"
        onClick={handleClick}
      >
        {value} 
      </button>
    </>
  );
}

// Gameboard
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}  