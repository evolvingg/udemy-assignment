import React from 'react';


const btnStyle = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
}

const CharComponent = (props) => {
    return (
        <div style={btnStyle} onClick={props.removeCharHandler}>
            {props.enteredChar}
        </div>
    )
}

export default CharComponent;