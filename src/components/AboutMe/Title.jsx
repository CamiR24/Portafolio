import React from 'react'
import camera from "../../assets/camera.png"

const Title = ({title, extra}) => {
    return(
        <div>
            <h1 className = 'title'>{title}</h1>
            <div className="title-image-container">
                <img src={camera} className="title-image" />
            </div>
            <p className = 'extra-text'>{extra}</p>
        </div>
    );
}

export default Title