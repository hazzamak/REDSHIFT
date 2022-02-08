import ATMUsageCard from "./ATMUsageCard";

const FinancialData = ({data}) => {
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
                    <p>{data[0].sex}</p>
                    <p>{data[0].placeOfBirth}</p>
                    <p>{data[0].homeAddress}</p>
                    <br></br>
                    <p>{data[0].bank}</p>
                    <p>Account Number: {data[0].accountNumber}</p>
                    <p>Card Number: {data[0].cardNumber}</p>
                    <p>Sort Code: {data[0].sortCode}</p>
                    <br></br>
                    <p>ATM Usage</p>
                    {data.map((atmUsage, index) =>{
                        return <ATMUsageCard key={index} data={atmUsage}/>
                    })}
                </div>
        
        </div>
     );
}
 
export default FinancialData;