import React from 'react';
import profilePic from './assets/profile_pic.jfif'

function Card ({name, age, isStudent}) {
    // Default values for props
    return (
        <div className="card">
            <img className="card-image" alt={`${name}'s profile picture`} src={profilePic}></img>
            <h2 className="card-title">{name}</h2>
            <p className="card-text">Age: {age}</p>
            <p className="card-text">Is Student: {isStudent ? 'Yes' : 'No'}</p>
        </div>
    )
}

export default Card;