import profilePic from './assets/profile_pic.jfif'

function Card () {
    return (
        <div className="card">
            <img className="card-image" alt="profile picture" src={profilePic}></img>
            <h2 className="card-title">Alvin Taas</h2>
            <p className="card-text">  Card description goes here. This is a brief summary of the content.</p>
        </div>
    )
}

export default Card;