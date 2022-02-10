import { useState } from "react";
import CallInfoCard from "./CallInfoCard";
import LoadingIcon from "./LoadingIcon";
import NoResults from "./NoResults";

const MobileDataCard = ({data, loading}) => {

    const[ filterTerm, setFilterTerm ] = useState(null);

    console.log(data[0]);

    if (loading){
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
                    <input type='text' placeholder="Filter by date" onChange={(event) =>{
                        setFilterTerm(event.target.value)
                    }}/>
                    {data.filter((calls) => {
                        if(filterTerm ===null){
                            return calls;
                        }else if(calls.timestamp.toLowerCase().includes(filterTerm.toLowerCase())) {
                            return calls;
                        }
                    })
                    .map((calls, index) => {
                        return <CallInfoCard key={index} data={calls}/>
                    })}
                    
                </div>
        </div>
     );
}
 
export default MobileDataCard;