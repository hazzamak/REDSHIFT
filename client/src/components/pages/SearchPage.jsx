import SearchResultCard from "../SearchResultCard";
import SearchImage from "../../assets/SearchImage.jpg";
import {useState, useEffect} from "react";
import axios from "axios";
import SearchResultWrapper from "../SearchResultWrapper";
import Pagination from "../Pagination";


const SearchPage = ({query}) => {

    const [display, setDisplay] = useState(true);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10)
    const [data, setData] = useState([]);
   

    useEffect(() => {
        let url="";
        if (query.column===undefined) {
            url=`http://localhost:3300/get/name/${query.forenames}/${query.surname}`
        } else {
            url=`http://localhost:3300/get/other/${query.column}/${query.data}`
        }
        
        const fetchData = async () => {
            setLoading(true);
            axios.get(url)
                .then(response => {
                    setData(response.data.data);
                    setDisplay(false);
                    setLoading(false);
                    })
                .catch(error => console.log(error));
        }

        fetchData();

    },[query]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexofFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexofFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
        
    return ( 
        <div className="mainContentWrapper">
        <h1>Search Page</h1>
        <SearchResultWrapper items={currentItems} loading={loading}/>
        <Pagination itemsPerPage={itemsPerPage} totalItems={data.length} paginate={paginate}/>

        {/* {display ?
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
        } */}
    </div>
     );
}
 
export default SearchPage;