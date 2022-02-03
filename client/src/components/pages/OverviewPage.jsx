import Card from "../Card";
import Menu from "../Menu";



const OverviewPage = () => {
    return ( 
        <div className="mainContentWrapper">
            <Menu/>
            <h1>Overview Page</h1>
         <div className="cardWrapper">
           <Card/>
           <Card/> 
           <Card/> 
           <Card/>   
         </div> 
        </div>
     );
}
 
export default OverviewPage;