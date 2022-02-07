const Pagination = ({itemsPerPage, totalItems, paginate}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return ( 
        <div className="paginationWrapper">
            {pageNumbers.map(number => (
                <button onClick={() => paginate(number)} key={number}>
                    {number}
                </button>
            ))}
        </div>
     );
}
 
export default Pagination;