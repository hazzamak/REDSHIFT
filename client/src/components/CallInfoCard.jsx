const CallInfoCard = ({data}) => {

    let timestamp = new Date(data.timestamp).toString();

    return ( 
        <div className="mobileCard">
            <p>----------------------------------------------</p>
            <p>Call Received From: {data.receiverMSISDN}</p>
            <p>Call Recieved On: {timestamp}</p>
            <br></br>
            <p>Outgoing Call Celltower ID: {data.callCellTowerID}</p>
            <br></br>
            <p>Tower Latitude: {data.latitude}</p>
            <p>Tower Longitude: {data.longitude}</p>
            <p>----------------------------------------------</p>
        </div>
     );
}
 
export default CallInfoCard;