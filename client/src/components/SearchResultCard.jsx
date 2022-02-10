import {Link} from "react-router-dom";
import ProfileImage from "../assets/profile.jpg"
import MaleIcon from "../assets/male.svg"
import FemaleIcon from "../assets/female.svg"
import CalendarIcon from "../assets/calendar.svg"
import LocationIcon from "../assets/location.svg"


const SearchResultCard = ({data}) => {
    return ( 
        <Link to={`/overview/${data.forenames}/${data.surname}/${data.dateOfBirth}`}>
            <div className="resultCardWrapper">
                <img src={ProfileImage} alt="Profile" className="profileImage"/>
                <div className="profileInfo">
                    <h4>{data.forenames} {data.surname}</h4>
                    <div className="profileInfo-item">
                        <img src={MaleIcon} alt="Icon"/>
                        <p>{data.sex === undefined ? 'Unknown' : data.sex}</p>
                    </div>
                    <div className="profileInfo-item">
                        <img src={CalendarIcon} alt="Icon"/>
                        <p>{data.dateOfBirth}</p>
                    </div>
                    <div className="profileInfo-item">
                        <img src={LocationIcon} alt="Icon"/>
                        <p>{data.homeAddress}</p>
                    </div>
                </div>
            </div>
        </Link>
     );
}
 
export default SearchResultCard;