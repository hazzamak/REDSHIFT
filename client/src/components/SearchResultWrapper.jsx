import LoadingIcon from "./LoadingIcon";
import NoResults from "./NoResults";
import SearchResultCard from "./SearchResultCard";


const SearchResultWrapper = ({items, loading, query}) => {
    if (loading) {
        return <LoadingIcon />
    }

    if (items.length === 0) {
        return <NoResults />
    }
    return ( 
        <>
            <h2 className="searchResultsHeader">{query.message}</h2>
            {/* <h2 className="searchResultsHeader">MESSAGE GOES HERE</h2> */}
            <div className="resultsWrapper">
                {items.map((item, index) => {
                    return <SearchResultCard key={index} data={item}/>
                })}
            </div>
        </>
        
     );
}
 
export default SearchResultWrapper;