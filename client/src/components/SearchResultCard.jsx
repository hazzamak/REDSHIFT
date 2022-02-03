import {Link} from "react-router-dom";


const SearchResultCard = () => {
    return ( 
        <Link to="/overview">

        <div className="resultCardWrapper">
            <h5>John Smith</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iusto vel sit blanditiis eos, maiores at, eligendi aut libero quod fugiat a, debitis molestias. Sapiente obcaecati perspiciatis ratione odio inventore? </p>

        </div>
        </Link>
     );
}
 
export default SearchResultCard;