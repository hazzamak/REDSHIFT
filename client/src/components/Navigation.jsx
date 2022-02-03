
import InputField from "./InputField";

const Navigation = ({setData}) => {


    return ( 
     <div className="navigationOuter"> <div className="navigationWrapper">
        <InputField setData={setData}/>
      </div> 
      </div> 
    );
}
 
export default Navigation;