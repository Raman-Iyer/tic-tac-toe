import React from 'react'
import { fireEvent, getByTestId, render } from '@testing-library/react'
import App from './App'

test('renders proper player turn', () => {
  const { container } = render(<App />)
  const pvpRadio = getByTestId(container, "pvp-radio")
  const startButton = getByTestId(container, "start")
  fireEvent.click(pvpRadio)
  fireEvent.click(startButton)
  const button1 = getByTestId(container, "0")
  const initialStatus = getByTestId(container, "playerStatus")
  expect(initialStatus.textContent).toBe("X's Turn")
  fireEvent.click(button1)
  expect(initialStatus.textContent).toBe("O's Turn")
})

test('renders proper winner and shows reset button', () => {
  const { container } = render(<App />)
  const pvpRadio = getByTestId(container, "pvp-radio")
  const startButton = getByTestId(container, "start")
  fireEvent.click(pvpRadio)
  fireEvent.click(startButton)
  const button1 = getByTestId(container, "0")
  const button2 = getByTestId(container, "1")
  const button5 = getByTestId(container, "4")
  const button6 = getByTestId(container, "5")
  const button9 = getByTestId(container, "8")
  const initialStatus = getByTestId(container, "playerStatus")
  const resetButton = getByTestId(container, "reset")
  expect(initialStatus.textContent).toBe("X's Turn")
  fireEvent.click(button1)
  fireEvent.click(button2)
  fireEvent.click(button5)
  fireEvent.click(button6)
  fireEvent.click(button9)
  expect(initialStatus.textContent).toBe("Winner Is X")
  expect(resetButton).toBeInTheDocument()
})

test('renders reset button after game is draw', () => {
  const { container } = render(<App />)
  const pvpRadio = getByTestId(container, "pvp-radio")
  const startButton = getByTestId(container, "start")
  fireEvent.click(pvpRadio)
  fireEvent.click(startButton)
  const button1 = getByTestId(container, "0")
  const button2 = getByTestId(container, "1")
  const button3 = getByTestId(container, "2")
  const button4 = getByTestId(container, "3")
  const button5 = getByTestId(container, "4")
  const button6 = getByTestId(container, "5")
  const button7 = getByTestId(container, "6")
  const button8 = getByTestId(container, "7")
  const button9 = getByTestId(container, "8")
  const initialStatus = getByTestId(container, "playerStatus")
  const resetButton = getByTestId(container, "reset")
  expect(initialStatus.textContent).toBe("X's Turn")
  fireEvent.click(button5)
  fireEvent.click(button7)
  fireEvent.click(button3)
  fireEvent.click(button1)
  fireEvent.click(button4)
  fireEvent.click(button6)
  fireEvent.click(button2)
  fireEvent.click(button8)
  fireEvent.click(button9)
  expect(initialStatus.textContent).toBe("Game is a draw!")
  expect(resetButton).toBeInTheDocument()
})

test('Changes the mode', () =>{
  const { container } = render(<App />)
  const pvpRadio = getByTestId(container, "pvp-radio")
  const aiRadio = getByTestId(container, "ai-radio")
  const symbol = getByTestId(container, "symbol")
  fireEvent.click(pvpRadio)
  expect(symbol.style.display).toBe("none")
  fireEvent.click(aiRadio)
  expect(symbol.style.display).toBe("block")
})

test('Changes the player symbol to O', () =>{
  const { container } = render(<App />)
  const oRadio = getByTestId(container, "o-radio")
  const startButton = getByTestId(container, "start")
  fireEvent.click(oRadio)
  fireEvent.click(startButton)
  const initialStatus = getByTestId(container, "playerStatus")
  expect(initialStatus.textContent).toBe("O's Turn")
})

test('Render win in the AI mode', () =>{
  const { container } = render(<App />)
  const startButton = getByTestId(container, "start")
  fireEvent.click(startButton)
  const initialStatus = getByTestId(container, "playerStatus")
  const button1 = getByTestId(container, "0")
  const button4 = getByTestId(container, "3")
  const button7 = getByTestId(container, "6")
  const button9 = getByTestId(container, "8")
  fireEvent.click(button1)
  fireEvent.click(button9)
  fireEvent.click(button7)
  fireEvent.click(button4)
  expect(initialStatus.textContent).toBe("Winner Is X")
})