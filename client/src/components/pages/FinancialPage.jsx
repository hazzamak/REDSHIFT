import Menu from "../Menu";
import {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import FinancialData from "../FinancialData";


const FinancialPage = () => {
    const [data, setData] = useState(null);

    const { forenames, surname, dateOfBirth } = useParams();

    useEffect(() => {

        axios
        .get(
            `http://localhost:3300/get/bank/name/${forenames}/${surname}/${dateOfBirth}`
        )
        .then((response) => {
          setData(response.data.data);
        })
        .catch((error) => console.log(error));
        
  }, []);

    return ( 
        <div className="mainContentWrapper">

         <Menu forenames={forenames} surname={surname} dateOfBirth={dateOfBirth}/>
            <h1>Financial Details</h1>
        {
            <FinancialData data={data} />
        }
           
    </div>
     );
}
 
export default FinancialPage;