import React from 'react'

const InfoColumn = ({ texto1, texto2 }) => {
    return(
        <div className= 'column'>
            <p className='textbold-white'>{texto1}</p>
            <p className='text-white'>{texto2}</p>
        </div>
    );
}

export default InfoColumn