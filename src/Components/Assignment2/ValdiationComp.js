import React from 'react';

const ValidationComp = (props) => {
    return (
        <p>
            {props.dataLength<5 ? 'text too short' : 'text too long'}
        </p>
    )
}

export default ValidationComp ;