import React from 'react'

const ProyectColumn = ({picture, title, description, link}) => {
    return(
        <div className= 'column-proyect'>
            <div>
                <img src={picture} alt="Section" className='picture6' onClick={() => window.open(link, "_blank")}/>
            </div>
            <div className='inside-row'>
                <h2 className='proyect-title'>{title}</h2>
                <p className='text-black-proyects'>{description}</p>
            </div>

        </div>
    );
}

export default ProyectColumn