import calculateWinner from './calculateWinner'

test('Check if X wins', () => {
    const winner = calculateWinner(['X', 'X', 'X', 'O', 'O', '-', '-', '-', '-'])
    expect(winner).toBe('X')
});

test('Check if Draw', () => {
    const winner = calculateWinner(['X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O'])
    expect(winner).toBeNull()
});

test('Check if O wins', () => {
    const winner = calculateWinner(['O', 'X', 'O', 'X', 'O', 'X', 'O', '-', '-'])
    expect(winner).toBe('O')
});

test('Check if X wins', () => {
    const winner = calculateWinner(['X', '-', 'O', '-', 'X', 'O', 'X', 'O', 'X'])
    expect(winner).toBe('X')
});

test('Check if Draw', () => {
    const winner = calculateWinner(['O', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'])
    expect(winner).toBeNull()
});