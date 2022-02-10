import Menu from "../Menu";
import {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import MobileDataCard from "../MobileDataCard";
import ReactPaginate from 'react-paginate';

const MobileDataPage = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [itemsPerPage] = useState(6);
    const { forenames, surname, dateOfBirth } = useParams();

    useEffect(() => {
      setLoading(true);
        axios.get(`http://localhost:3300/mobile/name/${forenames}/${surname}/${dateOfBirth}`)
             .then((response) => {
                setData(response.data.data);
                setLoading(false);
              })
              .catch((error) => console.log(error));
        
    }, []);

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

            <Menu forenames={forenames} surname={surname} dateOfBirth={dateOfBirth}/>
            <h1>Mobile Details</h1>
          <div className="mobileDataWrapper">
            <MobileDataCard loading={loading} data={currentItems}/>
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
          </div>
           
        </div>
     );
}
 
export default MobileDataPage;