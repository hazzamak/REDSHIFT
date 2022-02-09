import SearchResultCard from "../SearchResultCard";
import SearchImage from "../../assets/SearchImage.jpg";
import LoadingIcon from "../LoadingIcon";
import {useState, useEffect, useRef} from "react";
import axios from "axios";
import SearchResultWrapper from "../SearchResultWrapper";
import Pagination from "../Pagination";

const SearchPage = ({query}) => {

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10)
    const [data, setData] = useState([]);
    const isMounted = useRef(false);
   

    useEffect(() => {
        if (isMounted.current) {
            console.log("Fetching...");
            let url="";
            if (query.column===undefined) {
                url=`http://localhost:3300/get/name/${query.forenames}/${query.surname}`
            } else {
                url=`http://localhost:3300/get/other/${query.column}/${query.data}`
            }
            axios.get(url)
                .then(response => {
                    setData(response.data.data);
                    setLoading(true);
                    })
                .catch(error => console.log(error));
        } else {
            isMounted.current = true;
        }
    },[query]);




    const indexOfLastItem = currentPage * itemsPerPage;
    const indexofFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexofFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
        
    return ( 
        <div className="mainContentWrapper">
        {loading ? 
            <>
                <SearchResultWrapper items={currentItems} loading={loading} query={query}/>
                <Pagination itemsPerPage={itemsPerPage} totalItems={data.length} paginate={paginate}/>
            </>
            :
            <div className="imageWrapper">
                <img className="searchImage" src={SearchImage} alt="Search"/>
                <p> Please provide search query...</p>
            </div>
        }
        
        
        
    </div>
     );
}
 
export default SearchPage;