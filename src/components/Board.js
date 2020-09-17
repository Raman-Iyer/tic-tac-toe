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
            {/* Map the boxList prop to set the corresponding values in each box */}
            <div className="board-row">
                <Box xO={boxList[0]} onClick={() => {
                    onClick(0)
                }} />
                <Box xO={boxList[1]} onClick={() => {
                    onClick(1)
                }} />
                <Box xO={boxList[2]} onClick={() => {
                    onClick(2)
                }} />
            </div>
            <div className="board-row">
                <Box xO={boxList[3]} onClick={() => {
                    onClick(3)
                }} />
                <Box xO={boxList[4]} onClick={() => {
                    onClick(4)
                }} />
                <Box xO={boxList[5]} onClick={() => {
                    onClick(5)
                }} />
            </div>
            <div className="board-row">
                <Box xO={boxList[6]} onClick={() => {
                    onClick(6)
                }} />
                <Box xO={boxList[7]} onClick={() => {
                    onClick(7)
                }} />
                <Box xO={boxList[8]} onClick={() => {
                    onClick(8)
                }} />
            </div>
        </div>
    )
}

// Export the created component
export default Board