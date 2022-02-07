import SearchResultCard from "../SearchResultCard";
import SearchImage from "../../assets/SearchImage.jpg";
import {useState, useEffect} from "react";

const SearchPage = ({data}) => {

    const[display, setDisplay] =useState(true);
    const handleDisplay=()=> {
        setTimeout(()=>setDisplay(false), 2000)
    }

    useEffect(handleDisplay,[]);


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
                {data.map(person=> {
                    return <SearchResultCard data={person}/>
                })}
            
        </div>

            }

    </div>
     );
}
 
export default SearchPage;