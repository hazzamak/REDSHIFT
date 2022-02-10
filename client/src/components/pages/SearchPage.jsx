import SearchImage from "../../assets/SearchImage.jpg";
import {useState, useEffect, useRef} from "react";
import ReactPaginate from 'react-paginate';
import axios from "axios";
import SearchResultWrapper from "../SearchResultWrapper";

const SearchPage = ({query}) => {

    const [displayImage, setDisplayImage] = useState(true); 
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const isMounted = useRef(false);
   

    useEffect(() => {
        
        if(Object.keys(query).length !== 0 ) {
            setDisplayImage(false);
            setLoading(true);
            let url="";
            if ('forenames' in query) {
                url=`http://localhost:3300/get/name/${query.forenames}/${query.surname}`
            } else if ('numberPlate' in query) {
                url=`http://localhost:3300/vehicle/numberplate/${query.numberPlate}`
            }else {
                url=`http://localhost:3300/get/other/${query.column}/${query.data}`
            }
            axios.get(url)
                .then(response => {
                    setData(response.data.data);
                    setLoading(false);
                    })
                .catch(error => console.log(error));
        }
    },[query]);


    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return ( 
        <div className="mainContentWrapper">
        {displayImage ? 
            <div className="imageWrapper">
                <img className="searchImage" src={SearchImage} alt="Search"/>
                <p> Please provide search query...</p>
            </div>
            :
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
        }
    </div>
     );
}
 
export default SearchPage;