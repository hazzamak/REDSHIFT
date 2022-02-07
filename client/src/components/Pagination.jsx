const Pagination = ({itemsPerPage, totalItems, paginate}) => {

    const pageNumbers = [];
    console.log(itemsPerPage, totalItems);

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return ( 
        <div>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default Pagination;