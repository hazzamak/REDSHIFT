import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return ( 
        <div className="mainContentWrapper">
            <div className="errorPageContents">
                <h2>Oops there was an error, click the button to go back to the homepage</h2>
                <Link to="/"><button>Go back</button></Link>
            </div>
        </div>
     );
}
 
export default ErrorPage;