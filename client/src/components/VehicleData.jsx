import VehicleCard from "./VehicleCard";
import LoadingIcon from "./LoadingIcon";
import NoResults from "./NoResults";
import { useState } from "react";

const VehicleData = ({data, loading}) => {

    const[ filterTerm, setFilterTerm ] = useState(null);

    if (loading){
        return <LoadingIcon/>
    }
    if (data.length === 0) {
        return <NoResults />
    }
    return (
        <div className="overviewCardInfo">
         <div className="vehicleOwnerCard">
            <h2>
                {data[0].forenames} {data[0].surname}
            </h2>
                <div className="financialCardData"> 
                    <p>{data[0].dateOfBirth}</p>
                    <p>{data[0].homeAddress}</p>
                    <p>Driver Licence ID: {data[0].driverLicenceID}</p>
         </div>
                    <br></br>
                    <h3>Vehicle Details</h3>
                    <div className="vehicleDataCard">
                        <p>Registration Number: {data[0].vehicleRegistrationNo}</p>
                        <p>Make: {data[0].make}</p>
                        <p>Mode: {data[0].model}</p>
                        <p>Colour: {data[0].colour}</p>
                    </div>
                    <br></br>
                    <div>
                    <h3>ANPR Details</h3>
                    <input type='text' placeholder="Filter by date" onChange={(event) =>{
                        setFilterTerm(event.target.value)
                    }}/>
                    {data.filter((sightings) => {
                        if(filterTerm ===null){
                            return sightings;
                        }else if(sightings.timestamp.toLowerCase().includes(filterTerm.toLowerCase())) {
                            return sightings;
                        }
                    })
                    .map((sightings, index) => {
                        return <VehicleCard key={index} data={sightings}/>
                    })}
                    
                    </div>
                </div>
        </div>
     );
}
 
export default VehicleData;