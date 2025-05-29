import React from 'react'

const RowProyectAlone = ({text, title, picture}) => {
    return(
        <div className= 'row-proyect-alone'>
            <div className= 'description-container'>
                <p className='text-white-proyects'>{text}</p>
            </div>
            <div className= 'title-container'>
                <h1 className='subtitle-white-proyects'>{title}</h1>
            </div>
            <div className= 'picture-container-proyects'>
                <img src={picture} alt="Section" className='picture7' />
            </div>
        </div>
    );
}

export default RowProyectAlone