import Card from "../Card";
import Menu from "../Menu";
import LoadingIcon from "../LoadingIcon";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import OverviewCard from "../OverviewCard";



const OverviewPage = () => {
  const { forenames, surname, dateOfBirth } = useParams();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
//   const [fakePerson, setFakePerson] = useState({});

  useEffect(() => {
        axios
        .get(
          `http://localhost:3300/get/overview/${forenames}/${surname}/${dateOfBirth}`
        )
        .then((response) => {
          setData(response.data.data[0]);
          setLoading(false);
        })
        .catch((error) => console.log(error));
   
  }, []);


//   useEffect(() => {
//     axios
//     .get(
//       `https://randomuser.me/api/?gender=${data.sex}`
//     )
//     .then((response) => {
//       setFakePerson(response.data.results[0]);
//     })
//     .catch((error) => console.log(error));
//     console.log(fakePerson);

// }, [data]);


  return (
    <div className="mainContentWrapper">
      <Menu forenames={forenames} surname={surname} dateOfBirth={dateOfBirth}/>
      <h1>Overview Page</h1>
      {loading ? <LoadingIcon /> : <OverviewCard data={data} />}
      {/* <div className="cardWrapper">
           <Card/>
           <Card/> 
           <Card/> 
           <Card/>   
         </div>  */} 
    </div>
  );
};

export default OverviewPage;
