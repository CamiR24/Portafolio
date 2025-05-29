import React from 'react'

const ColumnBlack1 = ({ texto1, picture }) => {
    return(
        <div className= 'columnblack'>
            <p className='text-black'>{texto1}</p>
            <img src={picture} alt="Section" className='picture5' />
        </div>
    );
}

export default ColumnBlack1