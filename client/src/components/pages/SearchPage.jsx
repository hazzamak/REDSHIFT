import SearchResultCard from "../SearchResultCard";
import SearchImage from "../../assets/SearchImage.jpg";
import LoadingIcon from "../LoadingIcon";
import {useState, useEffect, useRef} from "react";
import ReactPaginate from 'react-paginate';
import axios from "axios";
import SearchResultWrapper from "../SearchResultWrapper";

const SearchPage = ({query}) => {

    const [loading, setLoading] = useState(false);
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


    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
        
    return ( 
        <div className="mainContentWrapper">
        {loading ? 
            <>
                <SearchResultWrapper items={currentItems} loading={loading} query={query}/>
                <div className="paginationWrapper">
                    <ReactPaginate
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={3}
                        pageCount={pageCount}
                        previousLabel="<"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="pagination-active"
                        renderOnZeroPageCount={null}
                    />
                </div>
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