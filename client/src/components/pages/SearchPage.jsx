import SearchResultCard from "../SearchResultCard";
import SearchImage from "../../assets/SearchImage.jpg";
import {useState, useEffect} from "react";
import axios from "axios";


const SearchPage = ({query}) => {

    const[display, setDisplay] =useState(true);
    const [data, setData] = useState([]);
   

    useEffect((event) => {
        let url="";
        if (query.column===undefined) {
            url=`http://localhost:3300/get/name/${query.forenames}/${query.surname}`

        }else{
            url=`http://localhost:3300/get/other/${query.column}/${query.data}`
        }
        axios.get(url)
             .then(response => {
                 setData(response.data.data);
                 setDisplay(false);
                })
             .catch(error => console.log(error));
        },[query]);
        
        console.log(data)

    return ( 
        <div className="mainContentWrapper">
        <h1>Search Page</h1>
        {display ?
        
        <div className="imageWrapper">
            <img className="searchImage" src={SearchImage} alt="Search"/>
            <p> Please provide search query...</p>
        </div>
            :
            <div className="resultsWrapper">
                {data.map((person, index)=> {
                    return <SearchResultCard key={index} data={person}/> 
            })}
            
        </div>

            }

    </div>
     );
}
 
export default SearchPage;