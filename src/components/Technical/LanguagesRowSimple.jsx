import React from 'react'
import Star from './Star';

const LanguagesRowSimple = ({picture}) => {
    return(
        <div className= 'row-simple-languages'>
            <div className= 'icon-container-languages'>
                <img src={picture} alt="Section" className='icon-language' />
            </div>
            <div className='star-row'>
                <Star color={'grey'}/>
                <Star color={'grey'}/>
                <Star color={'grey'}/>
                <Star color={'grey'}/>
                <Star color={'grey'}/>
            </div>
        </div>
    );
}

export default LanguagesRowSimple