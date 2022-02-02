const Search = ({setData}) => {


  const handleSubmit = (event) => {

    event.preventDefault();
    setData("hello");
  };



    return ( 
      
        <form onSubmit={(event)=> handleSubmit(event)}>
        <input type="text" placeholder="Search..."/>
        <select >
          <option> Name </option>
          <option> Date of Birth </option>
          <option> Home Address </option>
          <option> Place of Birth </option>
        </select>
        <button type="submit" > Search </button>

        </form>
        
    
     

 
    )}
 
export default Search;