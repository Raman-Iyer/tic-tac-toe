// Imports
import React from 'react'

// Box component for individual boxes
function Box(props){
    // xO is the text value and onClick is the handler
    const { index, xO, onClick } = props

    // Class to be applied on basis of X or O
    const classes = xO !== "-" ? `box box-${index} ${xO}` : `box box-${index}`

    // Just a plain div with a onClick event
    return (
        <button data-testid={index} className={classes} onClick={onClick}>
            {xO}
        </button>
    )
}

// Exporting the created component
export default Box