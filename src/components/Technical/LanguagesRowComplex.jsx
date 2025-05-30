import React from 'react'
import Star from './Star';

const LanguagesRowComplex = ({picture, text}) => {
    return(
        <div className= 'column-simple-languages'>
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
            <p className='extra-info'>{text}</p>
        </div>
    );
}

export default LanguagesRowComplex