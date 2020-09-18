import calculateAIMove from './computerLogic'

test('Get the center box filled if no winning or losing condition and if box is empty', () => {
    const position1 = calculateAIMove(['-', '-', '-', '-', '-', '-', '-', '-', '-'], "O", "X")
    expect(position1).toBe(4)
    const position2 = calculateAIMove(['X', '-', '-', '-', '-', '-', '-', '-', '-'], "O", "X")
    expect(position2).toBe(4)
});

test('Block the player from winning', () => {
    const position = calculateAIMove(['X', 'X', '-', '-', 'O', '-', '-', '-', '-'], "O", "X")
    expect(position).toBe(2)
});

test('Win if the condition is correct', () => {
    const position = calculateAIMove(['X', 'X', 'O', '-', 'O', '-', '-', '-', 'X'], "O", "X")
    expect(position).toBe(6)
});

