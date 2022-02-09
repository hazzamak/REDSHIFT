const EPOSUsageCard = ({data}) => {

    let transactionDate = new Date(data.eposTimestamp).toString();

    return ( 
        <div>
            <p>Date of Transaction: {transactionDate}</p>
            <p>Amount: {data.epostAmount}</p>
            <p>EPOS ID: {data.eposId}</p>
            <p>EPOS Located at:</p>
            <p>EPOS Vendor: {data.vendor}</p>
            <p>Street Name: {data.eposStreetName}</p>
            <p>Postcode: {data.eposPostcode}</p>
            <br></br>
        </div>
     );
}
 
export default EPOSUsageCard 