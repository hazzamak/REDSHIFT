import SearchResultCard from "./SearchResultCard";


const SearchResultWrapper = ({items, loading, query}) => {
    if (!loading) {
        return <h2>Loading data...</h2>
    }
    return ( 
        <>
            <h2 className="searchResultsHeader">{query.message}</h2>
            <div className="resultsWrapper">
                {items.map((item, index) => {
                    return <SearchResultCard key={index} data={item}/>
                })}
            </div>
        </>
        
     );
}
 
export default SearchResultWrapper;