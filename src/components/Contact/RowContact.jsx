import React from 'react'

const RowContact = ({picture, children}) => {
    return(
        <div className= 'row-contact'>
            {children}
            <div className="picture-container-contact">
                <img src={picture} alt="Section" className='picture8' />
            </div>
        </div>
    );
}

export default RowContact