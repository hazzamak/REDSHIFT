import { useState, useEffect } from "react";



const InputField = ({setData}) => {

    const [choice, setChoice]= useState("name");

  const handleFormSelection= (event)=>{
    
    if(choice==="name"){
      document.querySelector("#surnameField").style.display="block"
    } else{
      document.querySelector("#surnameField").style.display="none"
    }
  }

  useEffect(()=> {

    handleFormSelection();
  }, [choice])


  const handleSubmit = (event) => {

    event.preventDefault();
    setData("hello");
  };



    return ( 
      
        <form className="searchForm" onSubmit={(event)=> handleSubmit(event)}>
          <input type="text" placeholder="Search..."/>
          <input id="surnameField" type="text" placeholder="Surname"/>

          <select onChange={(event) => {

            setChoice(event.target.value);
           
            }}>

            <option value="name">Name </option>
            <option value="DOB">Date of Birth</option>
            <option value="address">Home Address</option>
            <option value="POB">Place of Birth</option>
          </select>
          <button type="submit" > Search </button>

        </form>
        
    
     

 
    )}
 
export default InputField;