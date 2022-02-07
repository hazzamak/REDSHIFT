import {Link} from "react-router-dom";
import ProfileImage from "../assets/profile.jpg"
import MaleIcon from "../assets/male.svg"
import FemaleIcon from "../assets/female.svg"
import CalendarIcon from "../assets/calendar.svg"
import LocationIcon from "../assets/location.svg"


const SearchResultCard = () => {
    return ( 
        <Link to="/overview">
            <div className="resultCardWrapper">
                <img src={ProfileImage} alt="Profile" className="profileImage"/>
                <div className="profileInfo">
                    <h4>John Smith</h4>
                    <div className="profileInfo-item">
                        <img src={MaleIcon} alt="Icon"/>
                        <p>Male</p>
                    </div>
                    <div className="profileInfo-item">
                        <img src={CalendarIcon} alt="Icon"/>
                        <p>15/01/1973</p>
                    </div>
                    <div className="profileInfo-item">
                        <img src={LocationIcon} alt="Icon"/>
                        <p>613 High Street, Stoke-On-Trent, ST6 5PD</p>
                    </div>
                </div>
            </div>
        </Link>
     );
}
 
export default SearchResultCard;