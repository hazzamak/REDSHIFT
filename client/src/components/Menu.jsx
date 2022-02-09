import {NavLink} from "react-router-dom";
import { useParams } from "react-router";


const Menu = () => {
    const { forenames, surname, dateOfBirth } = useParams();
    return ( 
        <div className="menuWrapper"> 
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

        </div>
     );
}
 
export default Menu;