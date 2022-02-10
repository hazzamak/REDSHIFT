const ProfileImage = ({fakePerson}) => {

    if(fakePerson==null){
        return <p>Loading</p>
    }
    return ( 
        <img className="overviewProfileImage" src={fakePerson.picture.large} alt="profile"/>

     );
}
 
export default ProfileImage;