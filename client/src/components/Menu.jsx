import {Link} from "react-router-dom";

const Menu = () => {
    return ( 
        <div className="menuWrapper"> 
            <Link to="/overview" className="menuItem currentPage">Overview</Link>
            <Link to="/biographical" className="menuItem">Biographical</Link>
            <Link to="/associates" className="menuItem">Associates</Link>
            <Link to="/financial" className="menuItem">Financial</Link>

        </div>
     );
}
 
export default Menu;