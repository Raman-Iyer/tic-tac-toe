// Imports
import React from 'react'

// Box component for individual boxes
function Box(props){
    // xO is the text value and onClick is the handler
    const { xO, onClick } = props

    // Class to be applied on basis of X or O
    const classes = xO ? `box ${xO}` : 'box'

    // Just a plain div with a onClick event
    return (
        <div className={classes} onClick={onClick}>
            {xO}
        </div>
    )
}

// Exporting the created component
export default Box