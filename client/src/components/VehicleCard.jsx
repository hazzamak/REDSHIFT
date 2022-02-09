const VehicleCard = ({data}) => {

    let timestamp = new Date(data.timestamp).toString();

    return ( 
        <div>
            <p>Vehicle Sighted On: {timestamp}</p>
            <p>ANPR ID: {data.anprId}</p>
            <p>ANPR Street Name: {data.streetName}</p>
            <br></br>
        </div>
     );
}
 
export default VehicleCard;