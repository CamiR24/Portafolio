import React from 'react'

const InfoRowSimple = ({picture2, picture3, text}) => {
    return(
        <div className= 'rowSimple'>
            <p className='text-white-row'>{text}</p>
            <div className="pcontainer">
                <img src={picture2} alt="Section" className="picture2" />
            </div>
            <div className="pcontainer">
                <img src={picture3} alt="Section" className="picture3" />
            </div>
        </div>
    );
}

export default InfoRowSimple