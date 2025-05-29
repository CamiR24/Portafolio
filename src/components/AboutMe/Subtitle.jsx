import React from 'react'

const Subtitle = ({text, className}) => {
    return(
        <div className= 'subtitle'>
            <h1 className={className}>{text}</h1>
        </div>
    );
}

export default Subtitle