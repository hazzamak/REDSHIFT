import ATMUsageCard from "./ATMUsageCard";
import EPOSUsageCard from "./EPOSUsageCard";
import { useState } from "react";

const FinancialData = ({data}) => {

    const [filterTerm, setFilterTerm] = useState(null);

    if (data === null){
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
                    <p>{data[0].sex}</p>
                    <p>{data[0].placeOfBirth}</p>
                    <p>{data[0].homeAddress}</p>
                    <br></br>
                    <p>{data[0].bank}</p>
                    <p>Account Number: {data[0].accountNumber}</p>
                    <p>Card Number: {data[0].cardNumber}</p>
                    <p>Sort Code: {data[0].sortCode}</p>
                    <br></br>
                    <h3>ATM Usage</h3>
                    <input type='text' placeholder="Filter by..." onChange={(event) =>{
                        setFilterTerm(event.target.value)
                    }}/>
                    {data.filter((atmUsage) => {
                        if(filterTerm === null){
                            return atmUsage;
                        }else if(atmUsage.timestamp.toLowerCase().includes(filterTerm.toLowerCase())) {
                            return atmUsage;
                        }
                    }).map((atmUsage, index) =>{
                        return <ATMUsageCard key={index} data={atmUsage}/>
                    })}
                    <br></br>
                    <h3>EPOS Transactions</h3>
                    {data.map((eposUsage, index) =>{
                        return <EPOSUsageCard key={index} data={eposUsage}/>
                    })}
                </div>
        
        </div>
     );
}
 
export default FinancialData;