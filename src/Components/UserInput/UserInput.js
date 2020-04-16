import React from 'react';

const UserInput = (props) => {
    const inputStyle = {
        border: '1px solid #cccccc',
        margin: '5px auto',
        padding: '10px',
        display: 'inline-block'
    }
    return (
            <input type="text"  
            onChange = {props.handler} 
            value = {props.initial}
            style = {inputStyle}
            />
    )
}

export default UserInput;
