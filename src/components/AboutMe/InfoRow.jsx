import React from 'react'

const InfoRow = ({picture, children, className}) => {
    return(
        <div className= 'row'>
            <div className="picture-container">
                <img src={picture} alt="Section" className={className} />
            </div>
            {children}
        </div>
    );
}

export default InfoRow