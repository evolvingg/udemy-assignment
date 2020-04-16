import React from 'react';

const UserInputElement = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changeHandlerForInput} value={props.userInputtedData}/>
            {props.dataLength}
        </div>
    )
}

export default UserInputElement;