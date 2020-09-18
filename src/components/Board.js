// Imports
import React from 'react'
import Box from './Box'

// Board component to hold all the boxes
function Board(props) {
    // boxList is an array of all boxes and onClick is the handler
    const { boxList, onClick } = props

    // Add all the boxes with an index to keep track of the box that was click
    return (
        <div className="board">
            {
                // Map the boxList prop to set the corresponding values in each box
                boxList.map((box, i) => {
                    return (
                        <Box key={i} index={i} xO={box} onClick={() => {
                            onClick(i)
                        }} />
                    )
                })
            }
        </div>
    )
}

// Export the created component
export default Board