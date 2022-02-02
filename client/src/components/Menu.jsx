import {Link} from "react-router-dom";

const Menu = () => {
    return ( 
        <div className="menuWrapper"> 
            <Link to="/"><div className="menuItem">General</div></Link>
            <Link to="/biographical"><div className="menuItem">Biographical</div></Link>
            <Link to="/associates"><div className="menuItem">Associates</div></Link>
            <Link to="/financial"><div className="menuItem">Financial</div></Link>

        </div>
     );
}
 
export default Menu;