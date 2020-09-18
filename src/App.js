// Imports
import React, { useState } from 'react'
import './App.css'
import Board from './components/Board'
import calculateWinner from './logic/calculateWinner'
import calculateAIMove from './logic/computerLogic'

// Main component to hold the board and logic for win and board changes
function App() {
  // useState Hooks
  const [boxList, setBoxList] = useState(Array(9).fill("-"))
  const [isXTurn, setIsXTurn] = useState(true)
  const [steps, setSteps] = useState(0)
  const [isGameStarted, setIsGameStarted] = useState(false)

  // states for singleplayer mode
  const [playerSymbol, setPlayerSymbol] = useState("X")
  const [mode, setMode] = useState("AI")

  // Winner keeps track of winner and xO keeps track of the what to put
  const winner = calculateWinner(boxList);
  let xO = isXTurn ? "X" : "O"

  // Keep track of AI's turn
  if (mode === "AI" && isGameStarted) {
    let isAITurn = xO === playerSymbol || winner || steps === 9 ? false : true
    // Get the best possible option for AI to play the turn
    const buttonToClick = isAITurn ? calculateAIMove(boxList, xO, playerSymbol) : null
    // If avaialable spot then call the handleclick to simulate a click on the button
    if (buttonToClick !== null) handleClick(buttonToClick)
  }

  // Handle the button click from the box component and the AI handler
  function handleClick(i) {
    // If we have a winner or if the box is occupied then return
    if (winner || boxList[i] !== "-")
      return
    // Add the current xO to the corresponding index that was clicked
    const newBoxList = boxList.map((box, index) => {
      if (index === i) {
        return xO
      }
      return box
    })
    // Set the new boxList and change the turn
    setBoxList(newBoxList)
    setIsXTurn(!isXTurn)
    setSteps(steps + 1)
  }

  // Reset the state to the start of the game
  function handleReset() {
    setIsGameStarted(false)
    setBoxList(Array(9).fill("-"))
    // Last game's winner moves first
    setIsXTurn(playerSymbol === "X" ? true : false)
    setSteps(0)
  }

  // Handle the radio button change for mode and set the same
  function handleModeChange(e) {
    setMode(e.target.id)
  }

  // Handle the radio button change for symbol and set the same
  function handleSymbolChange(e) {
    const symbol = e.target.id
    setPlayerSymbol(symbol)
    setIsXTurn(symbol === "X" ? true : false)
  }

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      {/* Select Mode and set the mode on basis of change */}
      <div style={{ display: !isGameStarted ? "block" : "none" }}>
        <h2>Select Mode</h2>
        <input data-testid="ai-radio" class="hidden" onChange={handleModeChange} type="radio" id="AI" name="mode" checked={mode === "AI" ? true : false} />
        <label htmlFor="AI" class="radio-label">AI</label>
        <input data-testid="pvp-radio" class="hidden" onChange={handleModeChange} type="radio" id="PVP" name="mode" />
        <label htmlFor="PVP" class="radio-label">PVP</label>
      </div>
      {/* Select player symbol and set the mode on basis of change */}
      <div data-testid="symbol" style={{ display: mode === "AI" && !isGameStarted ? "block" : "none" }}>
        <h2>Select Symbol</h2>
        <input data-testid="x-radio" class="hidden" onChange={handleSymbolChange} type="radio" id="X" name="symbol" checked={playerSymbol === "X" ? true : false} />
        <label htmlFor="X" class="radio-label">X</label>
        <input data-testid="o-radio" class="hidden" onChange={handleSymbolChange} type="radio" id="O" name="symbol" />
        <label htmlFor="O" class="radio-label">O</label>
      </div>
      <button data-testid="start" class="button start" onClick={() => {
        setIsGameStarted(true)
      }} style={{ display: !isGameStarted ? "inline-block" : "none" }}>Start Game!</button>
      <div style={{ display: isGameStarted ? "block" : "none" }}>
        <h2>Board</h2>
        <Board boxList={boxList} onClick={handleClick} />
        {/* On basis of winner or turn display appropriate message */}
        <h2 data-testid="playerStatus">{winner ? `Winner Is ${winner}` : steps === 9 ? "Game is a draw!" : `${xO}'s Turn`}</h2>
        {/* Reset the state again after the game is completed */}
        <button data-testid="reset" class="button reset" onClick={handleReset} style={{ display: winner || steps === 9 ? "inline-block" : "none" }}>Reset!</button>
      </div>
    </div>
  );
}

export default App
