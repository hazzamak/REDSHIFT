import Search from "./Search";
import Menu from "./Menu";

const Navigation = ({setData}) => {

    return ( 
      <div className="navigationWrapper">
        <Search setData={setData}/>
        <Menu/> 
      </div>  
    );
}
 
export default Navigation;