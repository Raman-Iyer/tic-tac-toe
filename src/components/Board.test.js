import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';

test('renders boxes with X, O and -', () => {
    const boxList = ['X', 'X', 'X', 'O', 'O', '-', '-', '-', '-']
    const { getAllByText } = render(<Board boxList={boxList} />);
    const boxXElement = getAllByText("X");
    boxXElement.map((button) => {
        expect(button).toBeInTheDocument();
    })
    const boxOElement = getAllByText("O");
    boxOElement.map((button) => {
        expect(button).toBeInTheDocument();
    })
    const boxDashElement = getAllByText("-");
    boxDashElement.map((button) => {
        expect(button).toBeInTheDocument();
    })
});

test('renders boxes with X', () => {
    const boxList = ['X', '-', '-', '-', '-', '-', '-', '-', '-']
    const { getAllByText } = render(<Board boxList={boxList} />);
    const boxXElement = getAllByText("X");
    boxXElement.map((button) => {
        expect(button).toBeInTheDocument();
    })
});

test('renders boxes with O', () => {
    const boxList = ['O', '-', '-', '-', '-', '-', '-', '-', '-']
    const { getAllByText } = render(<Board boxList={boxList} />);
    const boxOElement = getAllByText("O");
    boxOElement.map((button) => {
        expect(button).toBeInTheDocument();
    })
});

test('renders boxes with -', () => {
    const boxList = ['-', '-', '-', '-', '-', '-', '-', '-', '-']
    const { getAllByText } = render(<Board boxList={boxList} />);
    const boxDashElement = getAllByText("-");
    boxDashElement.map((button) => {
        expect(button).toBeInTheDocument();
    })
});