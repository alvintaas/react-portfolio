function ProfilePicture() {
  
    const imageUrl = './src/assets/eagle.png';

    const handleClick = (e) => e.target.style.display = "none";{
        console.log("Ouch!");
    }

    return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>);
}
export default ProfilePicture;