import Menu from "../Menu";
import {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import MobileDataCard from "../MobileDataCard";

const MobileDataPage = () => {
    const [data, setData] = useState(null);
    const { forenames, surname, dateOfBirth } = useParams();

    useEffect(() => {

        axios
        .get(
            `http://localhost:3300/get/mobile/name/${forenames}/${surname}/${dateOfBirth}`
        )
        .then((response) => {
          setData(response.data.data);
        })
        .catch((error) => console.log(error));
        
    }, []);

    return ( 
        <div className="mainContentWrapper">

            <Menu forenames={forenames} surname={surname} dateOfBirth={dateOfBirth}/>
            <h1>Mobile Details Page</h1>
          <div className="mobileDataWrapper">
            <MobileDataCard data={data}/>
          </div>
           
        </div>
     );
}
 
export default MobileDataPage;