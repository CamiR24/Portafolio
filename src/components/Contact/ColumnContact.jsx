import React from 'react'

const ColumnContact = ({social1, user1, social2, user2, link1, link2}) => {
    return(
        <div className= 'column-contact'>
            <h1 className='socialmedia'>{social1}</h1>
            <p className='user'>{user1} onClick={() => window.open(link1, "_blank")}</p>
            <h1 className='socialmedia'>{social2}</h1>
            <p className='user'>{user2} onClick={() => window.open(link2, "_blank")}</p>
        </div>
    );
}

export default ColumnContact