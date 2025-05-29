import React from 'react'

const InfoColumnSimple = ({ texto1, texto2, texto3, texto4 }) => {
    return(
        <div className= 'columnSimple'>
            <p className='text-white-column'>{texto1}</p>
            <p className='text-white-column'>{texto2}</p>
            <p className='text-white-column'>{texto3}</p>
            <p className='text-white-column'>{texto4}</p>
        </div>
    );
}

export default InfoColumnSimple