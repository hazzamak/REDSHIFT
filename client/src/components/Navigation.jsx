import {Link} from "react-router-dom";
import InputField from "./InputField";



const Navigation = ({setQuery}) => {
    return ( 
     <div className="navigationOuter"> 
      <div className="navigationWrapper">
          <Link to="/"><span className="logo">Redshift</span></Link> 
          <InputField setQuery={setQuery}/>
        </div> 
      </div> 
    );
}
 
export default Navigation;