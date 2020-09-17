function calculateWinner(boxList) {
    // All possible continous three boxes are the win conditions
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    // Iterate over every array element and check if the the boxes contain the same symbol in them
    // if so then return the symbol if not then return null
    for (let i = 0; i < winConditions.length; i++) {
        const [box1,box2,box3] = winConditions[i]
        if (boxList[box1] !== "-" && boxList[box1] === boxList[box2] && boxList[box1] === boxList[box3]){
            return boxList[box1]
        }
    }
    return null
}

// Export the function which we can use in the App component
export default calculateWinner