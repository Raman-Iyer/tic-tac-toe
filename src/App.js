// Imports
import React, { useState } from 'react'
import './App.css'
import Board from './components/Board'
import calculateWinner from './logic/calculateWinner'

// Main component to hold the board and logic for win and board changes
function App() {
  // useState Hooks
  const [boxList, setBoxList] = useState(Array(9).fill("-"))
  const [isXTurn, setIsXTurn] = useState(true)

  // Winner keeps track of winner and xO keeps track of the what to put
  const winner = calculateWinner(boxList); // Need to add logic to calculate winner
  let xO = isXTurn ? "X" : "O"

  function handleClick(i) {
    // If we have a winner or if the box is occupied then return
    if (winner || boxList[i] !== "-")
      return
    // Add the current xO to the corresponding index that was clicked
    const newBoxList = boxList.map((box, index) => {
      if (index === i) {
        box = xO
      }
      return box
    })
    // Set the new boxList and change the turn
    setBoxList(newBoxList)
    setIsXTurn(!isXTurn)

  }

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <Board boxList={boxList} onClick={handleClick} />
      {/* On basis of winner or turn display appropriate message */}
      <h3>{winner ? `Winner Is ${winner}` : `${xO}'s Turn`}</h3>
    </div>
  );
}

export default App
