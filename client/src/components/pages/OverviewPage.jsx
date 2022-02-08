import Card from "../Card";
import Menu from "../Menu";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const OverviewPage = () => {
  const { forenames, surname, dateOfBirth } = useParams();

  const [data, setData] = useState({});
//   const [fakePerson, setFakePerson] = useState({});

  useEffect(() => {
        axios
        .get(
          `http://localhost:3300/get/overview/${forenames}/${surname}/${dateOfBirth}`
        )
        .then((response) => {
          setData(response.data.data[0]);
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
      <div className="overviewCard">
          {/* <img src={fakePerson.picture.large} alt="profile"/> */}
          <div className="overviewImage">

          </div>
          <div className="overviewCardInfo">
            <h4>
                {data.forenames} {data.surname}
            </h4>
           <div className="overviewCardData"> 
                <p>{data.dateOfBirth}</p>
                <p>{data.sex}</p>
                <p>{data.placeOfBirth}</p>
            </div>
            <p>{data.homeAddress}</p>
          </div>
        
      </div>
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
