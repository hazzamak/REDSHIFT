const ATMUsageCard = ({data}) => {

    let transactionDate = new Date(data.timestamp).toString();

    return ( 
        <div>

                <p>Date of Transaction: {transactionDate}</p>
                <p>Type of Transaction: {data.type}</p>
                <p>Amount: {data.amount}</p>
                <p>ATM Operator: {data.operator}</p>
                <p>ATM ID: {data.atmId}</p>
                <p>ATM Located at:</p>
                <p>Street Name: {data.streetName}</p>
                <p>Postcode: {data.postcode}</p>
                <br></br>
        </div>
     );
}
 
export default ATMUsageCard;