import SearchResultCard from "../SearchResultCard";
import SearchImage from "../../assets/SearchImage.jpg";
import {useState, useEffect} from "react";

const SearchPage = () => {

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
            <SearchResultCard/>
            <SearchResultCard/>
            <SearchResultCard/>
            <SearchResultCard/>
            <SearchResultCard/>
            <SearchResultCard/>
            
        </div>

            }

    </div>
     );
}
 
export default SearchPage;