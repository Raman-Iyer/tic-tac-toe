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
                boxList.map((box, index) => {
                    <Box key={index} xO={box} onClick={() => onClick(index)} />
                })
            }
        </div>
    )
}