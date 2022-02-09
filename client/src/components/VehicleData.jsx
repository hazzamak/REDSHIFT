import VehicleCard from "./VehicleCard";
import LoadingIcon from "./LoadingIcon";

const VehicleData = ({data}) => {
    if (data == null){
        return <LoadingIcon/>
    }
    if (data.length == 0) {
        return <p>No records found!</p>
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
                    <div className="vehicleCardWrapper">
                    {data.map((anprData, index) => {
                        return <VehicleCard key={index} data={anprData}/>
                    })}
                    </div>
                    </div>
                </div>
        </div>
     );
}
 
export default VehicleData;