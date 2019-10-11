import React from 'react';


const userOutput = (props) => {   
    const parStyle = {
        border: '1px dotted',
        fontWeight: 'bold' 
    }
    const spanStyle = {
        fontStyle: 'italic' 
    }

    return (
        <div>
            <p style={parStyle}>First paragraph content</p>
            <p>Input username is: <span style={spanStyle}>{props.userName}</span></p>
        </div>
    );
};

export default userOutput;