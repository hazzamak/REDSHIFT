import { useState, useEffect, useRef} from "react";
import axios from "axios";
import ProfileImage from "./ProfileImage";


const OverviewCard = ({data}) => {

  const [fakePerson, setFakePerson] = useState(null);
  const isMounted = useRef(false);

  useEffect(() => {
    // if (isMounted.current) {
      console.log("Fetching...");
    axios
    .get(
      `https://randomuser.me/api/?gender=${data.sex.toLowerCase()}`
    )
    .then((response) => {
      setFakePerson(response.data.results[0]);
    })
    .catch((error) => console.log(error));
    // console.log(fakePerson);
  // } else {
    // isMounted.current = true;
  // }
  }, [data]);


    return ( 
      
        <div className="overviewCard">
          {<ProfileImage fakePerson={fakePerson}/>}
          {/* <div className="overviewImage">

          </div> */}
          <div className="overviewCardInfo">
            <h4>
                {data.forenames} {data.surname}
            </h4>
           <div className="overviewCardData"> 
                <p>{data.dateOfBirth}</p>
                <p>{data.sex}</p>
                <p>{data.placeOfBirth}</p>
            </div>
            <p>{data.homeAddress}</p>
          </div>
        
      </div>
     );
}
 
export default OverviewCard;