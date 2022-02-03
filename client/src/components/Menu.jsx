import {NavLink} from "react-router-dom";

const Menu = () => {
    return ( 
        <div className="menuWrapper"> 
            <NavLink to="/overview" className="menuItem" activeClassName="currentPage">Overview</NavLink>
            <NavLink to="/biographical" className="menuItem">Biographical</NavLink>
            <NavLink to="/associates" className="menuItem">Associates</NavLink>
            <NavLink to="/financial" className="menuItem">Financial</NavLink>

        </div>
     );
}
 
export default Menu;