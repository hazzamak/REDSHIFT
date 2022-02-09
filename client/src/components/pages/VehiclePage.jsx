import Menu from "../Menu";
import {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import VehicleData from "../VehicleData";


const VehiclePage = () => {
    const [data, setData] = useState(null);

    const { forenames, surname, dateOfBirth } = useParams();

    useEffect(() => {

        axios
        .get(
            `http://localhost:3300/get/vehicle/name/${forenames}/${surname}/${dateOfBirth}`
        )
        .then((response) => {
            console.log(response.data.data);
          setData(response.data.data);
        })
        .catch((error) => console.log(error));
        
  }, []);

    return ( 
        <div className="mainContentWrapper">

         <Menu forenames={forenames} surname={surname} dateOfBirth={dateOfBirth}/>
            <h1>Vehicle Details</h1>
        <div className="vehicleDataWrapper">
            <VehicleData data={data} />
        </div>
           
    </div>
     );
}
 
export default VehiclePage;