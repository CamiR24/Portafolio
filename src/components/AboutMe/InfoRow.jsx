import React from 'react'

const InfoRow = ({picture, children}) => {
    return(
        <div className= 'row'>
            <div className="picture-container">
                <img src={picture} alt="Section" className="picture1" />
            </div>
            {children}
        </div>
    );
}

export default InfoRow