import React from 'react'
import Star from './Star';

const LanguagesRowSimple = ({ picture, level = 5 }) => {
    
    return (
        <div className='row-simple-languages'>
            <div className='icon-container-languages'>
                <img src={picture} alt="Section" className='icon-language' />
            </div>
            <div className='star-row'>
                {[...Array(5)].map((_, index) => (
                            <div key={index} className='star-container' style={{'--star-index': index}}>
                                <Star
                                    color={index < level ? 'black' : 'lightgrey'}
                                />
                            </div>
                        ))}
            </div>
        </div>
    );
}

export default LanguagesRowSimple