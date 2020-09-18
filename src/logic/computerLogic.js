function calculateAIMove(boxList, AISymbol, playerSymbol) {
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
    //Best spots to place a symbol best to worst order
    const bestSpots = [4,0,2,6,8,1,3,5,7]
    // Check if any winning combos are available
    // If available return the missing spot
    // Iterate over every array element and check if the the boxes contain a 2 pair
    // If found check the third element if blank return the element
    for (let i = 0; i < winConditions.length; i++) {
        const [box1,box2,box3] = winConditions[i]
        if (boxList[box1] === AISymbol && (boxList[box2] === AISymbol || boxList[box3] === AISymbol) && (boxList[box2] === '-' || boxList[box3] === '-')){
            return boxList[box2] === AISymbol ? box3 : box2
        }
        if (boxList[box2] === AISymbol && (boxList[box1] === AISymbol || boxList[box3] === AISymbol) && (boxList[box1] === '-' || boxList[box3] === '-')){
            return boxList[box1] === AISymbol ? box3 : box1
        }
        if (boxList[box3] === AISymbol && (boxList[box2] === AISymbol || boxList[box1] === AISymbol) && (boxList[box2] === '-' || boxList[box1] === '-')){
            return boxList[box1] === AISymbol ? box2 : box1
        }
    }
    // Check for players winning moves
    // If available return the missing spot
    for (let i = 0; i < winConditions.length; i++) {
        const [box1,box2,box3] = winConditions[i]
        if (boxList[box1] === playerSymbol && (boxList[box2] === playerSymbol || boxList[box3] === playerSymbol) && (boxList[box2] === '-' || boxList[box3] === '-')){
            return boxList[box2] === playerSymbol ? box3 : box2
        }
        if (boxList[box2] === playerSymbol && (boxList[box1] === playerSymbol || boxList[box3] === playerSymbol) && (boxList[box1] === '-' || boxList[box3] === '-')){
            return boxList[box1] === playerSymbol ? box3 : box1
        }
        if (boxList[box3] === playerSymbol && (boxList[box2] === playerSymbol || boxList[box1] === playerSymbol) && (boxList[box2] === '-' || boxList[box1] === '-')){
            return boxList[box1] === playerSymbol ? box2 : box1
        }
    }
    // Check for the best available spot to put symbol
    // return the available spot
    for (let i = 0; i < bestSpots.length; i++) {
        if (boxList[bestSpots[i]] === "-") return bestSpots[i]
    }
}

// Export the function created
export default calculateAIMove