import React from 'react'
import Subtitle from '../AboutMe/Subtitle'

const ExtraColumn = ({picture, header, description}) => {
    return(
        <div className= 'column-extra'>
            <div className='info-extra-row'>
                <div className= 'extra-image-container'>
                    <img src={picture} alt="Section" className='extra-image' />
                </div>
                <div className='container-text'>
                    <h1 className='extra-header'>{header}</h1>
                    <p className='extra-description'>{description}</p>
                </div>
            </div>
            <Subtitle text={'EXTRA'} className={'subtitle-white-extra'}/>
        </div>
    );
}

export default ExtraColumn