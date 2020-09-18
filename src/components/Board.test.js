import React from 'react'
import { render } from '@testing-library/react'
import Board from './Board'

test('renders boxes with X, O and -', () => {
    const boxList = ['X', 'X', 'X', 'O', 'O', '-', '-', '-', '-']
    const { getAllByText } = render(<Board boxList={boxList} />)
    const boxXElement = getAllByText("X")
    expect(boxXElement.length).toBe(3)
    const boxOElement = getAllByText("O")
    expect(boxOElement.length).toBe(2)
    const boxDashElement = getAllByText("-")
    expect(boxDashElement.length).toBe(4)
})

test('renders boxes with X', () => {
    const boxList = ['X', '-', '-', '-', '-', '-', '-', '-', '-']
    const { getAllByText } = render(<Board boxList={boxList} />)
    const boxXElement = getAllByText("X")
    expect(boxXElement.length).toBe(1)
})

test('renders boxes with O', () => {
    const boxList = ['O', '-', '-', '-', '-', '-', '-', '-', '-']
    const { getAllByText } = render(<Board boxList={boxList} />)
    const boxOElement = getAllByText("O")
    expect(boxOElement.length).toBe(1)
})

test('renders boxes with -', () => {
    const boxList = ['-', '-', '-', '-', '-', '-', '-', '-', '-']
    const { getAllByText } = render(<Board boxList={boxList} />)
    const boxDashElement = getAllByText("-")
    expect(boxDashElement.length).toBe(9)
})