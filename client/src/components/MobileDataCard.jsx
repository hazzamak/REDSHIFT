import CallInfoCard from "./CallInfoCard";
import LoadingIcon from "./LoadingIcon";
import NoResults from "./NoResults";

const MobileDataCard = ({data}) => {
    if (data == null){
        return <LoadingIcon/>
    }
    if (data.length === 0) {
        return <NoResults />
    }

    return ( 
        <div className="mobileCardInfo">
           
               <h2>
                {data[0].forenames} {data[0].surname}
            </h2>
            
                <div className="mobileCardData">
                    <p>{data[0].dateOfBirth}</p>
                    <p>{data[0].homeAddress}</p>
                    
                    <br></br>
                    <h3>Mobile Details</h3>
                    <div className="mobileDataCard">
                        <p>Mobile Number: {data[0].phoneNumber}</p>
                        <p>Mobile Network Provider: {data[0].network}</p>
                    </div>
                    <br></br>
                    <h3>Called History</h3>
                    <div className="mobileCardWrapper">
                        {data.map((callInfo, index) => {
                        return <CallInfoCard key={index} data={callInfo}/>
                    })}
                    </div>
                </div>
        </div>
     );
}
 
export default MobileDataCard;