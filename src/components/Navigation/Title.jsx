import React from 'react'
import camera from "../../assets/camera.png"

const Title = ({title1, title2, extra}) => {
    return(
        <div>
            <div className='title-container'>
                <div className='title-row'>
                    <div className='title-column'>
                        <div className='title-and-image-row'>
                            <h1 className = 'title'> {title1} </h1>
                            <div className="title-image-container">
                                <img src={camera} className="title-image" />
                            </div>
                        </div>
                        <div className='title-part2-container'>
                            <h1 className = 'title'> {title2} </h1>
                        </div>
                    </div>
                    <div className='extra-text-container'>
                        <p className = 'extra-text'>{extra}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Title