import VehicleCard from "./VehicleCard";

const VehicleData = ({data}) => {
    if (data == null){
        return <p>Loading...</p>
    }
    if (data.length == 0) {
        return <p>No records found!</p>
    }
    return (
        <div className="overviewCardInfo">
            <h4>
                {data[0].forenames} {data[0].surname}
            </h4>
                <div className="financialCardData"> 
                    <p>{data[0].dateOfBirth}</p>
                    <p>{data[0].homeAddress}</p>
                    <p>Driver Licence ID: {data[0].driverLicenceID}</p>
                    <br></br>
                    <h3>Vehicle Details</h3>
                    <p>Registration Number: {data[0].vehicleRegistrationNo}</p>
                    <p>Make: {data[0].make}</p>
                    <p>Mode: {data[0].model}</p>
                    <p>Colour: {data[0].colour}</p>
                    <br></br>
                    <h3>ANPR Details</h3>
                    {data.map((anprData, index) => {
                        return <VehicleCard key={index} data={anprData}/>
                    })}
                </div>
        </div>
     );
}
 
export default VehicleData;