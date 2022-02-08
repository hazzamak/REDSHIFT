import CallInfoCard from "./CallInfoCard";

const MobileDataCard = ({data}) => {
    if (data == null){
        return <p>Loading...</p>
    }
    if (data.length == 0) {
        return <p>No records found!</p>
    }

    return ( 
        <div className="mobileCardInfo">
            <h4>
                {data[0].forenames} {data[0].surname}
            </h4>
                <div className="mobileCardData">
                    <p>{data[0].dateOfBirth}</p>
                    <p>{data[0].homeAddress}</p>
                    <br></br>
                    <h3>Mobile Details</h3>
                    <p>Mobile Number: {data[0].phoneNumber}</p>
                    <p>Mobile Network Provider: {data[0].network}</p>
                    <br></br>
                    <h3>Called History</h3>
                    {data.map((callInfo, index) => {
                        return <CallInfoCard key={index} data={callInfo}/>
                    })}
                </div>
        </div>
     );
}
 
export default MobileDataCard;