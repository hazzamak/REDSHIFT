import image from "../assets/no-result.png"

const NoResults = () => {
    return ( 
        <div className="noResultsWrapper">
            <img src={image} alt="No results" />
            <h1>No matching results</h1>
            <p>There wasn't any matching results with your recent query, try searching for something else.</p>
        </div>
     );
}
 
export default NoResults;