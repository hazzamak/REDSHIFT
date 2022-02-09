import {NavLink} from "react-router-dom";
import { useParams } from "react-router";


const Menu = () => {
    const { forenames, surname, dateOfBirth } = useParams();
    return ( 
        <div className="menuWrapper"> 
<<<<<<< HEAD
            <NavLink to={`/overview/${forenames}/${surname}/${dateOfBirth}`} className="menuItem" activeClassName="currentPage">Overview</NavLink>
            <NavLink to={`/biographical/${forenames}/${surname}/${dateOfBirth}`} className="menuItem">Biographical</NavLink>
            <NavLink to={`/associates/${forenames}/${surname}/${dateOfBirth}`} className="menuItem">Associates</NavLink>
            <NavLink to={`/bank/name/${forenames}/${surname}/${dateOfBirth}`} className="menuItem">Financial</NavLink>
            <NavLink to={`/mobile/name/${forenames}/${surname}/${dateOfBirth}`} className="menuItem">Mobile</NavLink>
            <NavLink to={`/vehicle/name/${forenames}/${surname}/${dateOfBirth}`} className="menuItem">Vehicle</NavLink>
=======
            <NavLink 
                to={`/overview/${forenames}/${surname}/${dateOfBirth}`} 
                className={({isActive}) => "menuItem" + (isActive ? " active" : "")}
                >Overview</NavLink>
            <NavLink 
                to={`/biographical/${forenames}/${surname}/${dateOfBirth}`} 
                className={({isActive}) => "menuItem" + (isActive ? " active" : "")}
                >Biographical</NavLink>
            <NavLink 
                to={`/associates/${forenames}/${surname}/${dateOfBirth}`} 
                className={({isActive}) => "menuItem" + (isActive ? " active" : "")}
                >Associates</NavLink>
            <NavLink 
                to={`/financial/${forenames}/${surname}/${dateOfBirth}`} 
                className={({isActive}) => "menuItem" + (isActive ? " active" : "")}
                >Financial</NavLink>
>>>>>>> 45be36a7fb02823921df17bb9f01465371bf743c

        </div>
     );
}
 
export default Menu;