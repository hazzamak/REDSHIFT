import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";



const InputField = ({setQuery}) => {

  const [choice, setChoice]= useState("fullName");
  const navigate = useNavigate();


  const handleFormSelection= () => {
    if(choice==="fullName"){
      document.querySelector("#searchField").placeholder = "Forenames..."
      document.querySelector("#surnameField").style.display="block"
    } else{
      document.querySelector("#surnameField").style.display="none"
      document.querySelector("#searchField").placeholder = "Search..."
    }
  }

  useEffect(handleFormSelection, [choice])

  const handleSubmit = (event) => {
    event.preventDefault();
    const first = document.querySelector("#searchField").value;
    const second = document.querySelector("#surnameField").value;
    let query = document.querySelector("#selection").value;
    let data = {};

    if(choice==="fullName"){
      data = {
        forenames: first,
        surname: second
      }
    } else{
      data = {
        column: query,
        data: first
      }
    }

    setQuery(data);

    // Remove value in fields
    document.querySelector("#searchField").value = "";
    document.querySelector("#surnameField").value = "";
    navigate("/")

  };

    return ( 
        <form className="searchForm" onSubmit={(event)=> handleSubmit(event)}>
          <input id="searchField" type="text" placeholder="Search..."/>
          <input id="surnameField" type="text" placeholder="Surname..."/>
          <select id="selection" onChange={(event) => setChoice(event.target.value)}>
            <option value="fullName">Full Name </option>
            <option value="forenames">Forenames </option>
            <option value="surname">Surname </option>
            <option value="dateOfBirth">Date of Birth</option>
            <option value="homeAddress">Home Address</option>
            <option value="placeOfBirth">Place of Birth</option>
          </select>
          <button type="submit">Search</button>
        </form>
    )}
 
export default InputField;