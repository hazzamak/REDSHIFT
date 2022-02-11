import { useState, useEffect} from "react";
import axios from "axios";
import ProfileImage from "./ProfileImage";
import MaleIcon from "../assets/male.svg"
import FemaleIcon from "../assets/female.svg"
import CalendarIcon from "../assets/calendar.svg"
import LocationIcon from "../assets/location.svg"
import HouseIcon from "../assets/house.svg"


const OverviewCard = ({data}) => {

  const [fakePerson, setFakePerson] = useState(null);

  useEffect(() => {
    axios
    .get(
      `https://randomuser.me/api/?gender=${data.sex.toLowerCase()}`
    )
    .then((response) => {
      setFakePerson(response.data.results[0]);
    })
    .catch((error) => console.log(error));
  }, [data]);


    return ( 
      
        <div className="overviewCard">
          {<ProfileImage fakePerson={fakePerson}/>}
          <div className="overviewCardInfo">
            <h4>
                {data.forenames} {data.surname}
            </h4>
           <div className="overviewCardData"> 
                <div className="overviewData-iconWrapper">
                  <img className="overviewIcon" src={CalendarIcon} alt="icon" />
                  <p>{data.dateOfBirth}</p>
                </div>

                <div className="overviewData-iconWrapper">
                  <img className="overviewIcon" src={data.sex === "Male" ? MaleIcon : FemaleIcon} alt="icon" />
                  <p>{data.sex}</p>
                </div>

                <div className="overviewData-iconWrapper">
                  <img className="overviewIcon" src={HouseIcon} alt="icon" />
                  <p>{data.placeOfBirth}</p>
                </div>
            </div>
            <div>
              <div className="overviewData-iconWrapper">
                <img className="overviewIcon" src={LocationIcon} alt="icon" />
                <p>{data.homeAddress}</p>
              </div>
            </div>
            
            
          </div>
        
      </div>
     );
}
 
export default OverviewCard;