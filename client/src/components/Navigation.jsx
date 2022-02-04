import {Link} from "react-router-dom";

import InputField from "./InputField";

const Navigation = ({setData}) => {


    return ( 
     <div className="navigationOuter"> 
     <div className="navigationWrapper">
        <Link to="/"><span className="logo">Redshift</span></Link> 
        <InputField setData={setData}/>
      </div> 
      </div> 
    );
}
 
export default Navigation;