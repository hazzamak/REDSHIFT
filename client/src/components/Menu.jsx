import {NavLink} from "react-router-dom";
import { useParams } from "react-router";


const Menu = () => {
    const { forenames, surname, dateOfBirth } = useParams();
    return ( 
        <div className="menuWrapper"> 
            <NavLink to={`/overview/${forenames}/${surname}/${dateOfBirth}`} className="menuItem" activeClassName="currentPage">Overview</NavLink>
            <NavLink to={`/biographical/${forenames}/${surname}/${dateOfBirth}`} className="menuItem">Biographical</NavLink>
            <NavLink to={`/associates/${forenames}/${surname}/${dateOfBirth}`} className="menuItem">Associates</NavLink>
            <NavLink to={`/financial/${forenames}/${surname}/${dateOfBirth}`} className="menuItem">Financial</NavLink>

        </div>
     );
}
 
export default Menu;