import SearchResultCard from "./SearchResultCard";


const SearchResultWrapper = ({items, loading, query, message}) => {
    if (!loading) {
        return <h2>Loading data...</h2>
    }
console.log(query);
    return ( 
        <>
            <h2 className="searchResultsHeader">Search results for {message}</h2>
            <div className="resultsWrapper">
                {items.map((item, index) => {
                    return <SearchResultCard key={index} data={item}/>
                })}
            </div>
        </>
        
     );
}
 
export default SearchResultWrapper;