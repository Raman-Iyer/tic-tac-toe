import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

test('renders button with X', () => {
    const { getByText } = render(<Box xO='X' />);
    const buttonElement = getByText("X");
    expect(buttonElement).toBeInTheDocument();
});

test('renders button with O', () => {
    const { getByText } = render(<Box xO='O' />);
    const buttonElement = getByText("O");
    expect(buttonElement).toBeInTheDocument();
});

test('renders button with -', () => {
    const { getByText } = render(<Box xO='-' />);
    const buttonElement = getByText("-");
    expect(buttonElement).toBeInTheDocument();
});