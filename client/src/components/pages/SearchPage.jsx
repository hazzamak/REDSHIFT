import SearchResultCard from "../SearchResultCard";

const SearchPage = () => {
    return ( 
        <div className="mainContentWrapper">
        <h1>Search Page</h1>
        <div className="resultsWrapper">
            <SearchResultCard/>
            <SearchResultCard/>
            <SearchResultCard/>
            <SearchResultCard/>
            <SearchResultCard/>
            <SearchResultCard/>
            
        </div>

    </div>
     );
}
 
export default SearchPage;