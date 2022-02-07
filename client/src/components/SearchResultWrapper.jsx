import SearchResultCard from "./SearchResultCard";


const SearchResultWrapper = ({items, loading}) => {
    if (!loading) {
        return <h2>Loading data...</h2>
    }

    return ( 
        <>
            <h2 className="searchResultsHeader">Search results</h2>
            <div className="resultsWrapper">
                {items.map((item, index) => {
                    return <SearchResultCard key={index} data={item}/>
                })}
            </div>
        </>
        
     );
}
 
export default SearchResultWrapper;