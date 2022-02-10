import {Link} from "react-router-dom";
import InputField from "./InputField";
import LogoImage from "../assets/redshift-logo.png";



const Navigation = ({setQuery}) => {
    return ( 
     <div className="navigationOuter"> 
      <div className="navigationWrapper">
          <Link className="logo-image-wrapper" to="/">
            <img src={LogoImage} alt="Logo" />
            <span className="logo">Redshift</span>
          </Link> 
          <InputField setQuery={setQuery}/>
        </div> 
      </div> 
    );
}
 
export default Navigation;